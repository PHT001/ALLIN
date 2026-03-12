"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export default function NotesPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Mes notes</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Prends des notes pendant ta formation et retrouve-les ici.
        </p>
      </div>

      <GlassCard className="p-12 text-center mb-6">
        <svg className="w-12 h-12 text-white/20 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
        <h3 className="text-lg font-semibold text-white/60 mb-2">Pas encore de notes</h3>
        <p className="text-sm text-white/30 max-w-md mx-auto">
          Un editeur de notes sera bientôt disponible pour capturer tes idées
          pendant chaque leçon.
        </p>
      </GlassCard>

      {/* Mock note example */}
      <GlassCard className="p-6 opacity-50" hover={false}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-xs text-white/30">Module 1 — Leçon 2</span>
        </div>
        <div className="h-3 bg-white/[0.06] rounded w-3/4 mb-2" />
        <div className="h-3 bg-white/[0.06] rounded w-1/2 mb-2" />
        <div className="h-3 bg-white/[0.06] rounded w-2/3" />
      </GlassCard>
    </div>
  );
}
