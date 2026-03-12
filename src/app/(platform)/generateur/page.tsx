"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export default function GenerateurPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Générateur</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Génère des prompts, scripts et contenus personnalisés pour ton agence.
        </p>
      </div>

      <GlassCard className="p-8">
        <div className="space-y-5">
          {/* Category select */}
          <div>
            <label className="text-xs font-medium text-white/40 mb-1.5 block">Catégorie</label>
            <select
              disabled
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white/30 cursor-not-allowed"
            >
              <option>Choisir une catégorie...</option>
              <option>Prompt de prospection</option>
              <option>Script de vente</option>
              <option>Contenu marketing</option>
              <option>Email client</option>
              <option>Proposition commerciale</option>
            </select>
          </div>

          {/* Context input */}
          <div>
            <label className="text-xs font-medium text-white/40 mb-1.5 block">Contexte</label>
            <textarea
              disabled
              placeholder="Décris ton besoin, ton client cible, ton offre..."
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white/30 min-h-[120px] resize-y cursor-not-allowed"
            />
          </div>

          {/* Generate button */}
          <button
            disabled
            className="w-full px-6 py-3 bg-white/[0.06] rounded-xl text-sm font-semibold text-white/30 cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
              <path d="M15 4V2" />
              <path d="M15 16v-2" />
              <path d="M8 9h2" />
              <path d="M20 9h2" />
              <path d="m8 21 8-8" />
              <path d="M3 16l2-2" />
            </svg>
            Générer
          </button>
        </div>

        {/* Output placeholder */}
        <div className="mt-6 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-white/20 text-center">
            Le résultat généré apparaîtra ici...
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
