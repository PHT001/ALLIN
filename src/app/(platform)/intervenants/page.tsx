"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

const speakers = [
  { name: "Fondateur 1", role: "Co-fondateur & CEO", bio: "Expert en IA et business. A lancé sa première agence IA à 22 ans.", initial: "F" },
  { name: "Fondateur 2", role: "Co-fondateur & CTO", bio: "Développeur autodidacte, spécialiste automatisation et agents IA.", initial: "F" },
  { name: "Invité Expert", role: "Consultant IA", bio: "10+ ans d'expérience en intelligence artificielle et machine learning.", initial: "I" },
  { name: "Coach Business", role: "Mentor commercial", bio: "A accompagné +50 agences dans leur lancement et acquisition clients.", initial: "C" },
];

export default function IntervenantsPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Intervenants</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Nos intervenants et mentors qui t&apos;accompagnent dans ta formation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {speakers.map((s) => (
          <GlassCard key={s.name} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-lg font-bold text-white">
                {s.initial}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{s.name}</h3>
                <p className="text-xs text-white/40">{s.role}</p>
              </div>
            </div>
            <p className="text-xs text-white/35 leading-relaxed">{s.bio}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
