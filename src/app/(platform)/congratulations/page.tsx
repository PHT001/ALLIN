"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function CongratulationsPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="text-7xl mb-8">🎓</div>
      <h1 className="text-4xl font-semibold mb-4">Félicitations !</h1>
      <p className="text-xl text-text-secondary mb-12">
        Tu as complété l&apos;intégralité du parcours Opexia Academy.
      </p>

      <GlassCard className="p-8 mb-10 border-white/20">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-black text-white">20</p>
            <p className="text-xs text-text-tertiary">Leçons complétées</p>
          </div>
          <div>
            <p className="text-3xl font-black text-success">20</p>
            <p className="text-xs text-text-tertiary">Quiz validés</p>
          </div>
          <div>
            <p className="text-3xl font-black text-warning">3 000+</p>
            <p className="text-xs text-text-tertiary">XP gagnés</p>
          </div>
        </div>
      </GlassCard>

      <h2 className="text-xl font-bold mb-4">Prêt à passer au niveau supérieur ?</h2>
      <p className="text-text-secondary mb-8">
        Réserve ton accompagnement personnalisé avec un des fondateurs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/formations" glow>
          Découvrir le One-to-One
        </Button>
        <Button href="/dashboard" variant="secondary">
          Retour au dashboard
        </Button>
      </div>
    </div>
  );
}
