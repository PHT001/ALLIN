"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export default function AssistantPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-2xl font-semibold tracking-tight">Assistant IA</h1>
          <Badge>Bientôt</Badge>
        </div>
        <p className="text-sm text-white/40">
          Ton assistant personnel pour répondre à toutes tes questions sur la formation.
        </p>
      </div>

      {/* Chat mock */}
      <GlassCard className="p-0 overflow-hidden">
        {/* Chat header */}
        <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold">Opexia AI</p>
            <p className="text-[10px] text-white/30">Assistant de formation</p>
          </div>
        </div>

        {/* Chat messages */}
        <div className="p-6 space-y-4 min-h-[300px]">
          {/* Bot message */}
          <div className="flex gap-3 max-w-[85%]">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-white/60">AI</span>
            </div>
            <div className="bg-white/[0.04] rounded-2xl rounded-tl-md px-4 py-3">
              <p className="text-sm text-white/60">
                Salut ! Je suis l&apos;assistant Opexia. Pose-moi n&apos;importe quelle question
                sur ta formation, les outils IA, ou ton projet d&apos;agence.
              </p>
            </div>
          </div>

          {/* User message placeholder */}
          <div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-white/70">T</span>
            </div>
            <div className="bg-white/[0.08] rounded-2xl rounded-tr-md px-4 py-3">
              <p className="text-sm text-white/70">
                Comment créer mon premier agent IA ?
              </p>
            </div>
          </div>

          {/* Bot typing indicator */}
          <div className="flex gap-3 max-w-[85%]">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-white/60">AI</span>
            </div>
            <div className="bg-white/[0.04] rounded-2xl rounded-tl-md px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Pose ta question..."
              disabled
              className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white/30 cursor-not-allowed"
            />
            <button disabled className="px-4 py-3 bg-white/[0.06] rounded-xl text-sm text-white/30 cursor-not-allowed">
              Envoyer
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
