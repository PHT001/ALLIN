"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const resources = [
  { icon: "📄", title: "PDFs & Guides", desc: "Fiches récapitulatives et guides pratiques" },
  { icon: "📋", title: "Templates", desc: "Modèles de contrats, propositions et offres" },
  { icon: "🔗", title: "Liens utiles", desc: "Outils, APIs et ressources externes" },
  { icon: "🎬", title: "Videos bonus", desc: "Replays et tutoriels supplémentaires" },
  { icon: "🧰", title: "Outils IA", desc: "Liste curatée des meilleurs outils IA" },
  { icon: "📊", title: "Checklists", desc: "Listes de vérification par étape" },
];

export default function RessourcesPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Ressources</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Toutes les ressources de la formation accessibles en un endroit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((r) => (
          <GlassCard key={r.title} className="p-6">
            <span className="text-2xl mb-3 block">{r.icon}</span>
            <h3 className="font-semibold text-sm mb-1">{r.title}</h3>
            <p className="text-xs text-white/35">{r.desc}</p>
            <span className="inline-block mt-3 text-[9px] font-semibold text-white/30 bg-white/[0.06] px-2 py-0.5 rounded-full">
              Bientôt disponible
            </span>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
