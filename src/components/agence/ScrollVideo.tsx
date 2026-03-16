"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 60; // Number of frames to extract

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageData[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Extract frames from video into canvas ImageData array
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/images/desk-transform.mp4";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const extractFrames = async () => {
      await new Promise<void>((resolve) => {
        video.onloadeddata = () => resolve();
      });

      const duration = video.duration;
      const offscreen = document.createElement("canvas");
      const w = video.videoWidth;
      const h = video.videoHeight;
      offscreen.width = w;
      offscreen.height = h;
      const ctx = offscreen.getContext("2d")!;

      const frames: ImageData[] = [];

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const time = (i / (TOTAL_FRAMES - 1)) * duration;
        video.currentTime = time;

        await new Promise<void>((resolve) => {
          video.onseeked = () => resolve();
        });

        ctx.drawImage(video, 0, 0, w, h);
        frames.push(ctx.getImageData(0, 0, w, h));
      }

      framesRef.current = frames;

      // Setup display canvas
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = w;
        canvas.height = h;
        const displayCtx = canvas.getContext("2d");
        if (displayCtx && frames[0]) {
          displayCtx.putImageData(frames[0], 0, 0);
        }
      }

      setLoaded(true);
    };

    extractFrames();
  }, []);

  // Scroll handler — scrub frames
  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      if (!section || !canvas) return;

      const rect = section.getBoundingClientRect();
      const scrollableRange = rect.height - window.innerHeight;

      let prog = 0;
      if (rect.top <= 0 && rect.top >= -scrollableRange) {
        prog = Math.abs(rect.top) / scrollableRange;
      } else if (rect.top < -scrollableRange) {
        prog = 1;
      }

      prog = Math.min(Math.max(prog, 0), 1);
      setProgress(prog);

      const frameIndex = Math.min(
        Math.floor(prog * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      const frames = framesRef.current;
      if (frames[frameIndex]) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.putImageData(frames[frameIndex], 0, 0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Progress indicator */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
            style={{
              background: progress < 0.5 ? "rgba(239,68,68,0.9)" : "rgba(239,68,68,0.1)",
              color: progress < 0.5 ? "white" : "rgba(239,68,68,0.3)",
            }}
          >
            Avant
          </span>
          <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress * 100}%`,
                background: progress < 0.5 ? "#ef4444" : "#10b981",
                transition: "background 0.3s",
              }}
            />
          </div>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
            style={{
              background: progress >= 0.5 ? "rgba(16,185,129,0.9)" : "rgba(16,185,129,0.1)",
              color: progress >= 0.5 ? "white" : "rgba(16,185,129,0.3)",
            }}
          >
            Apr&egrave;s
          </span>
        </div>

        {/* Canvas */}
        <div className="w-full max-w-3xl px-6">
          {!loaded && (
            <div className="w-full aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Chargement...
              </div>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className="w-full h-auto block rounded-xl"
            style={{ display: loaded ? "block" : "none" }}
          />
        </div>
      </div>
    </section>
  );
}
