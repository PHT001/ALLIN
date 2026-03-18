"use client";

import { useState } from "react";

const MASTERCLASSES = [
  {
    id: "claude-code",
    title: "Masterclass Claude Code",
    description: "Apprends à coder des apps complètes avec Claude directement dans ton terminal. Vibe coding, debugging, déploiement — tout ce qu'il faut pour livrer des projets clients 10x plus vite.",
    speaker: "Équipe OpexIA",
    duration: "5 leçons · ~2h",
    thumbnail: null,
    status: "available" as const,
    lessons: 5,
    tags: ["Claude Code", "Terminal", "Vibe Coding", "GitHub"],
    color: "#FF1744",
    href: "/lessons",
  },
  {
    id: "openclaw",
    title: "Masterclass OpenClaw",
    description: "Déploie ton propre assistant IA multi-canal. Installation, configuration, messagerie, sécurité et comment le vendre comme service à tes clients.",
    speaker: "Équipe OpexIA",
    duration: "7 leçons · ~3h",
    thumbnail: null,
    status: "available" as const,
    lessons: 7,
    tags: ["OpenClaw", "Self-hosted", "Multi-canal", "Business"],
    color: "#FF6D00",
    href: "/lessons",
  },
];

const UPCOMING = [
  {
    id: "live-1",
    title: "Live : Trouver ses 5 premiers clients en 30 jours",
    description: "Session live avec Q&A. On décortique les stratégies de prospection qui marchent vraiment pour les agences IA en France.",
    date: "Avril 2026",
    speaker: "Fondateurs OpexIA",
    duration: "1h30",
    tags: ["Prospection", "Cold outreach", "Closing"],
  },
  {
    id: "live-2",
    title: "Live : Construire un agent IA qui génère du revenu",
    description: "Démo live : on construit un agent de veille concurrentielle et on montre comment le vendre 800-2000€/mois en retainer.",
    date: "Avril 2026",
    speaker: "Invité expert",
    duration: "1h",
    tags: ["Agents IA", "Demo live", "Retainer"],
  },
  {
    id: "live-3",
    title: "Live : De 0 à 10K€/mois — Retour d'expérience",
    description: "Un membre de la communauté qui a atteint 10K€/mois partage son parcours, ses erreurs et ses conseils.",
    date: "Mai 2026",
    speaker: "Membre communauté",
    duration: "1h",
    tags: ["Retour d'expérience", "Scaling", "Inspiration"],
  },
];

export default function MasterclassPage() {
  const [tab, setTab] = useState<"masterclasses" | "lives">("masterclasses");

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-[#111] mb-1">Masterclass & Lives</h1>
        <p className="text-sm text-gray-400">Sessions exclusives, masterclasses avancées et lives avec des experts.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-gray-100 rounded-xl p-1 w-fit">
        <button
          onClick={() => setTab("masterclasses")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            tab === "masterclasses" ? "bg-white text-[#111] shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Masterclasses
          <span className="ml-1.5 text-[10px] bg-[#FF1744]/10 text-[#FF1744] px-1.5 py-0.5 rounded-full font-bold">2</span>
        </button>
        <button
          onClick={() => setTab("lives")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            tab === "lives" ? "bg-white text-[#111] shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Lives & Replays
          <span className="ml-1.5 text-[10px] bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full font-bold">3</span>
        </button>
      </div>

      {/* Masterclasses Tab */}
      {tab === "masterclasses" && (
        <div className="space-y-4">
          {MASTERCLASSES.map((mc) => (
            <div
              key={mc.id}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="flex flex-col md:flex-row">
                {/* Video placeholder */}
                <div className="w-full md:w-80 h-48 md:h-auto bg-gradient-to-br from-[#1a1b2e] to-[#0d0e1a] flex items-center justify-center relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full" style={{ backgroundColor: mc.color + "20", color: mc.color }}>
                      {mc.lessons} leçons
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] text-white/60 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {mc.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#111] group-hover:text-[#FF1744] transition-colors mb-1">
                        {mc.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium">{mc.speaker}</p>
                    </div>
                    <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                      Disponible
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {mc.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {mc.tags.map((t) => (
                        <span key={t} className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={mc.href}
                      className="flex-shrink-0 text-xs font-semibold text-[#FF1744] hover:text-[#D50000] flex items-center gap-1 transition-colors"
                    >
                      Commencer
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lives Tab */}
      {tab === "lives" && (
        <div className="space-y-3">
          {UPCOMING.map((live) => (
            <div
              key={live.id}
              className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Calendar icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1b2e] to-[#0d0e1a] flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-[8px] text-white/50 uppercase font-bold leading-none">Live</span>
                  <svg className="w-4 h-4 text-[#FF1744] mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-[#111] group-hover:text-[#FF1744] transition-colors">
                      {live.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">{live.description}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-medium text-[#FF1744] bg-[#FF1744]/10 px-2 py-0.5 rounded-full">
                      {live.date}
                    </span>
                    <span className="text-[10px] text-gray-400">{live.speaker} · {live.duration}</span>
                    <div className="flex gap-1">
                      {live.tags.map((t) => (
                        <span key={t} className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="flex-shrink-0 text-[10px] font-semibold text-gray-400 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 hover:text-gray-600 transition-colors">
                  Me notifier
                </button>
              </div>
            </div>
          ))}

          {/* Suggest CTA */}
          <div className="mt-6 bg-gradient-to-br from-[#1a1b2e] to-[#0d0e1a] rounded-2xl p-6 text-center">
            <h3 className="text-white font-semibold mb-1">Un sujet que tu veux voir en live ?</h3>
            <p className="text-white/40 text-sm mb-4">Propose un sujet et on l&apos;ajoutera au programme.</p>
            <button className="px-5 py-2 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-medium rounded-xl transition-colors">
              Proposer un sujet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
