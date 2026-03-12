"use client";

import { useSession } from "next-auth/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Mon Profil</h1>

      <GlassCard className="p-8 mb-6">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-white">
            {session?.user?.name?.[0]?.toUpperCase() || "?"}
          </div>
          <div>
            <h2 className="text-xl font-bold">{session?.user?.name || "Élève"}</h2>
            <p className="text-sm text-text-secondary">{session?.user?.email}</p>
          </div>
        </div>
        <Badge>
          {session?.user?.role === "admin" ? "Administrateur" : "Élève"}
        </Badge>
      </GlassCard>

      <GlassCard className="p-8">
        <h3 className="font-bold mb-4">Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { icon: "🎯", name: "Premier pas", unlocked: true },
            { icon: "🧠", name: "Fondations IA", unlocked: false },
            { icon: "🔥", name: "Semaine de feu", unlocked: false },
            { icon: "⚡", name: "Mi-parcours", unlocked: false },
            { icon: "🎓", name: "Diplôme Opexia", unlocked: false },
          ].map((badge) => (
            <div
              key={badge.name}
              className={`p-4 rounded-xl text-center border border-glass-border ${
                badge.unlocked ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="text-2xl mb-2">{badge.icon}</div>
              <p className="text-xs font-semibold">{badge.name}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
