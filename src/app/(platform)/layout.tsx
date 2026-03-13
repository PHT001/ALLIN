"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Sidebar } from "@/components/platform/Sidebar";

/* ——— Platform Ambience — subtle red mesh gradient ——— */
function PlatformAmbience() {
  return <div className="platform-ambient" aria-hidden="true" />;
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
      <PlatformAmbience />
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
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 h-14 bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)] flex items-center px-4">
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
          <span className="text-[#FF1744]">IA</span>
        </span>
      </div>

      <main className="md:ml-[260px] pt-14 md:pt-0 min-h-screen relative overflow-hidden">
        <div className="p-6 md:p-10 max-w-7xl relative z-[1]">
          {children}
        </div>
      </main>
    </div>
  );
}
