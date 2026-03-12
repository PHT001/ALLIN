"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const certificates = [
  { title: "Fondamentaux IA", modules: "Modules 1-4", icon: "🧠" },
  { title: "Expert OpenClaw", modules: "Modules 5-7", icon: "⚡" },
  { title: "Projets Pratiques", modules: "Modules 8-9", icon: "🔧" },
  { title: "Business IA", modules: "Modules 10-11", icon: "💼" },
  { title: "Entrepreneur IA", modules: "Modules 12-13", icon: "🚀" },
  { title: "Diplôme Opexia Academy", modules: "Tous les modules", icon: "🎓" },
];

export default function CertificatsPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Certificats</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Complète des modules pour débloquer tes certificats et diplomes.
        </p>
      </div>

      <GlassCard className="p-8 text-center mb-8">
        <svg className="w-12 h-12 text-white/20 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
        <h3 className="text-lg font-semibold text-white/60 mb-2">Pas encore de certificat</h3>
        <p className="text-sm text-white/30 max-w-md mx-auto">
          Complète les modules de la formation pour débloquer tes premiers certificats.
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert) => (
          <GlassCard key={cert.title} className="p-6 opacity-50" hover={false}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{cert.icon}</span>
              <div>
                <h3 className="font-semibold text-sm">{cert.title}</h3>
                <p className="text-[10px] text-white/30">{cert.modules}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[10px] text-white/20">Verrouillé</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
