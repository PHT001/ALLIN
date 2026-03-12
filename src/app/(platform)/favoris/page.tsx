"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export default function FavorisPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Mes favoris</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Retrouve tes leçons et ressources favorites en un clic.
        </p>
      </div>

      <GlassCard className="p-12 text-center">
        <svg className="w-12 h-12 text-white/20 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <h3 className="text-lg font-semibold text-white/60 mb-2">Aucun favori pour l&apos;instant</h3>
        <p className="text-sm text-white/30 max-w-md mx-auto">
          Tu pourras bientôt sauvegarder tes leçons, ressources et templates favoris
          pour y accéder rapidement.
        </p>
      </GlassCard>
    </div>
  );
}
