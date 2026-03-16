"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let duration = 0;

    const onMeta = () => {
      duration = video.duration;
      video.pause();
      video.currentTime = 0;
    };

    if (video.readyState >= 1) {
      onMeta();
    } else {
      video.addEventListener("loadedmetadata", onMeta);
    }

    const handleScroll = () => {
      if (!duration) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Section enters viewport when top < viewportHeight
      // We want to "lock" when the section top reaches ~0 (pinned at top)
      // The scroll range to scrub the video = sectionHeight - viewportHeight
      const scrollableRange = sectionHeight - viewportHeight;

      if (sectionTop <= 0 && sectionTop >= -scrollableRange) {
        // We're in the locked zone - scrub video
        const progress = Math.abs(sectionTop) / scrollableRange;
        const clampedProgress = Math.min(Math.max(progress, 0), 1);
        video.currentTime = clampedProgress * duration;
        setVideoProgress(clampedProgress);
        setIsLocked(true);
      } else {
        setIsLocked(false);
        if (sectionTop > 0) {
          video.currentTime = 0;
          setVideoProgress(0);
        }
        if (sectionTop < -scrollableRange) {
          video.currentTime = duration;
          setVideoProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: "300vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Label */}
        <div className="mb-4 flex items-center gap-3 transition-opacity duration-500" style={{ opacity: isLocked ? 1 : 0.5 }}>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-500"
            style={{
              background: videoProgress < 0.5 ? "rgba(239,68,68,0.9)" : "rgba(16,185,129,0.15)",
              color: videoProgress < 0.5 ? "white" : "rgba(16,185,129,0.4)",
            }}
          >
            Avant
          </span>
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${videoProgress * 100}%`,
                background: videoProgress < 0.5 ? "#ef4444" : "#10b981",
              }}
            />
          </div>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold transition-all duration-500"
            style={{
              background: videoProgress >= 0.5 ? "rgba(16,185,129,0.9)" : "rgba(16,185,129,0.15)",
              color: videoProgress >= 0.5 ? "white" : "rgba(16,185,129,0.4)",
            }}
          >
            Apr&egrave;s
          </span>
        </div>

        {/* Video */}
        <div className="w-full max-w-3xl px-6">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="w-full h-auto block rounded-xl"
          >
            <source src="/images/desk-transform.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
