"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Sidebar } from "@/components/platform/Sidebar";

/* ——— Animated grid background ——— */
function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle animated grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating light beams — slow diagonal sweeps */}
      <div
        className="absolute w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent animate-beam-1"
        style={{ top: "20%", left: "-10%", transform: "rotate(-25deg)" }}
      />
      <div
        className="absolute w-[500px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-beam-2"
        style={{ top: "55%", right: "-5%", transform: "rotate(20deg)" }}
      />
      <div
        className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-beam-3"
        style={{ top: "75%", left: "10%", transform: "rotate(-15deg)" }}
      />

      {/* Sparkle dots — small white flickers */}
      {[
        { top: "8%", left: "78%", delay: "0s", dur: "5s" },
        { top: "15%", left: "42%", delay: "1.5s", dur: "4s" },
        { top: "25%", left: "90%", delay: "0.8s", dur: "6s" },
        { top: "35%", left: "65%", delay: "2.5s", dur: "5s" },
        { top: "45%", left: "85%", delay: "1s", dur: "4.5s" },
        { top: "55%", left: "35%", delay: "3.5s", dur: "5.5s" },
        { top: "65%", left: "75%", delay: "0.5s", dur: "4s" },
        { top: "75%", left: "55%", delay: "2s", dur: "6s" },
        { top: "85%", left: "92%", delay: "4s", dur: "5s" },
        { top: "42%", left: "48%", delay: "1.8s", dur: "4.5s" },
        { top: "18%", left: "60%", delay: "3s", dur: "5.5s" },
        { top: "90%", left: "70%", delay: "0.3s", dur: "4s" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white sparkle-star"
          style={{
            top: s.top,
            left: s.left,
            width: "2px",
            height: "2px",
            animationDelay: s.delay,
            animationDuration: s.dur,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />
      <div className="shooting-star shooting-star-4" />
      <div className="shooting-star shooting-star-5" />

      {/* Corner vignette glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial-[at_100%_0%] from-white/[0.02] to-transparent" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial-[at_0%_100%] from-white/[0.015] to-transparent" />
    </div>
  );
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter" });

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          setStats({ xp: data.xp, streak: data.streak, tier: data.tier || "starter" });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="theme-dark min-h-screen">
      <div className="page-bg" />
      <div className="page-glow" />
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <Sidebar
        userName={session?.user?.name}
        role={session?.user?.role}
        xp={stats.xp}
        streak={stats.streak}
        tier={stats.tier}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 h-14 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.06] flex items-center px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-white/50"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        <span className="ml-3 text-lg font-bold tracking-tight">
          <span className="text-white">Opex</span>
          <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">IA</span>
        </span>
      </div>

      <main className="md:ml-[260px] pt-14 md:pt-0 min-h-screen relative overflow-hidden">
        <AnimatedGrid />

        <div className="p-6 md:p-10 max-w-7xl relative z-[1]">
          {children}
        </div>
      </main>
    </div>
  );
}
