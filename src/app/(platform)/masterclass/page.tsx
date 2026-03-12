"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const masterclasses = [
  {
    title: "Automatiser son agence IA de A à Z",
    speaker: "Fondateur 1",
    date: "Bientôt",
    duration: "1h30",
    topics: ["Workflows", "Automatisation", "Outils"],
  },
  {
    title: "Trouver ses 5 premiers clients en 30 jours",
    speaker: "Fondateur 2",
    date: "Bientôt",
    duration: "1h",
    topics: ["Prospection", "Cold outreach", "Closing"],
  },
  {
    title: "Construire un agent IA qui vend",
    speaker: "Invité expert",
    date: "Bientôt",
    duration: "45min",
    topics: ["Agents IA", "Use cases", "Demo live"],
  },
];

export default function MasterclassPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Masterclass</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Sessions exclusives avec des experts et les fondateurs.
        </p>
      </div>

      {/* Featured */}
      <GlassCard className="p-8 mb-6" featured>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/[0.08] px-2 py-0.5 rounded-full">
            Prochaine session
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2">{masterclasses[0].title}</h2>
        <p className="text-sm text-white/40 mb-4">
          Avec {masterclasses[0].speaker} — {masterclasses[0].duration}
        </p>
        <div className="flex gap-2">
          {masterclasses[0].topics.map((t) => (
            <span key={t} className="text-[10px] text-white/40 bg-white/[0.05] px-2 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>
      </GlassCard>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {masterclasses.slice(1).map((mc) => (
          <GlassCard key={mc.title} className="p-6">
            <h3 className="font-semibold text-sm mb-2">{mc.title}</h3>
            <p className="text-xs text-white/40 mb-3">
              {mc.speaker} — {mc.duration}
            </p>
            <div className="flex gap-2">
              {mc.topics.map((t) => (
                <span key={t} className="text-[10px] text-white/30 bg-white/[0.04] px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
