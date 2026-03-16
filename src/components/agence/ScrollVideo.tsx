"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait for video metadata to load
    const onLoaded = () => {
      const duration = video.duration;
      if (!duration || isNaN(duration)) return;

      const updateVideoTime = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

        // Map scroll progress to video time
        const targetTime = scrollProgress * duration;

        // Smooth interpolation for fluid scrubbing
        const currentTime = video.currentTime;
        const diff = targetTime - currentTime;
        const newTime = currentTime + diff * 0.15; // easing factor

        if (Math.abs(diff) > 0.01) {
          video.currentTime = newTime;
        }

        rafRef.current = requestAnimationFrame(updateVideoTime);
      };

      // Pause autoplay — we control time manually
      video.pause();
      video.currentTime = 0;

      rafRef.current = requestAnimationFrame(updateVideoTime);
    };

    if (video.readyState >= 1) {
      onLoaded();
    } else {
      video.addEventListener("loadedmetadata", onLoaded);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        style={{ opacity: 0.12 }}
      >
        <source src="/images/desk-transform.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
