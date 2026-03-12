"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const templates = [
  { icon: "🎯", title: "Prospection", desc: "Scripts d'emails et messages LinkedIn pour trouver des clients", count: 8 },
  { icon: "✍️", title: "Contenu", desc: "Templates de posts, articles et contenus marketing", count: 12 },
  { icon: "⚡", title: "Automatisation", desc: "Workflows et prompts pour automatiser tes processus", count: 6 },
  { icon: "📋", title: "Business Plan", desc: "Modeles de business plan et prévisions financières", count: 3 },
  { icon: "🎤", title: "Pitch", desc: "Scripts de pitch et presentations clients", count: 5 },
  { icon: "📊", title: "Analyse", desc: "Templates d'audit et rapports pour tes clients", count: 4 },
];

export default function TemplatesPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Templates IA</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Templates et prompts prêts à l&apos;emploi pour ton agence IA.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((t) => (
          <GlassCard key={t.title} className="p-6">
            <span className="text-2xl mb-3 block">{t.icon}</span>
            <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
            <p className="text-xs text-white/35 mb-3">{t.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">{t.count} templates</span>
              <span className="text-[9px] font-semibold text-white/30 bg-white/[0.06] px-1.5 py-0.5 rounded-full">
                Bientôt
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
