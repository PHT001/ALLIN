"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

const mockNotes = [
  {
    id: 1,
    module: "Module 1",
    lesson: "Leçon 3 — Comprendre les LLMs",
    date: "14 mars 2026",
    color: "#FF1744",
    content: "Les LLMs fonctionnent par prédiction du prochain token. Points clés : temperature contrôle la créativité, top_p filtre les tokens peu probables. GPT-4, Claude, Gemini = les 3 principaux à maîtriser.",
    tags: ["IA", "LLM", "Fondamentaux"],
  },
  {
    id: 2,
    module: "Module 2",
    lesson: "Leçon 1 — Prompt Engineering",
    date: "12 mars 2026",
    color: "#7C3AED",
    content: "Toujours structurer ses prompts : contexte → rôle → tâche → format. Utiliser des exemples (few-shot) pour guider le modèle. Itérer jusqu'au résultat voulu.",
    tags: ["Prompting", "Technique"],
  },
  {
    id: 3,
    module: "Module 3",
    lesson: "Leçon 2 — Créer un chatbot",
    date: "10 mars 2026",
    color: "#0EA5E9",
    content: "Stack recommandée : Next.js + Vercel AI SDK + OpenAI API. Penser à limiter le contexte pour réduire les coûts. Ajouter un system prompt clair pour le personnaliser.",
    tags: ["Chatbot", "Projet"],
  },
  {
    id: 4,
    module: "Module 4",
    lesson: "Leçon 1 — Trouver sa niche",
    date: "8 mars 2026",
    color: "#10B981",
    content: "Cibler les entreprises locales : restaurants, immobilier, cabinets comptables. Ils ont le budget mais pas le temps ni les compétences techniques.",
    tags: ["Business", "Niche"],
  },
];

export default function NotesPage() {
  const [selectedNote, setSelectedNote] = useState(mockNotes[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = mockNotes.filter(
    (n) =>
      n.lesson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-6xl">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight mb-1">
          Mes notes
        </h1>
        <p className="text-sm text-white/40">
          Capture tes idées pendant chaque leçon et retrouve-les ici.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Notes", value: "4", icon: "📝" },
          { label: "Modules couverts", value: "4", icon: "📚" },
          { label: "Tags utilisés", value: "7", icon: "🏷️" },
          { label: "Dernière note", value: "Aujourd'hui", icon: "🕐" },
        ].map((stat) => (
          <GlassCard key={stat.label} className="p-4" hover={false}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{stat.icon}</span>
              <span className="text-[11px] text-white/30 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
            <span className="text-xl font-bold text-white/90">{stat.value}</span>
          </GlassCard>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left — Notes list */}
        <div className="lg:w-[340px] shrink-0">
          {/* Search */}
          <div className="relative mb-3">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une note..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/30 transition-all"
            />
          </div>

          {/* New note button */}
          <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-dashed border-white/[0.08] text-sm font-medium text-white/30 hover:border-[#FF1744]/30 hover:text-[#FF1744] transition-all mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Nouvelle note
          </button>

          {/* Notes cards */}
          <div className="space-y-2">
            {filteredNotes.map((note) => (
              <button
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  selectedNote.id === note.id
                    ? "border-[#FF1744]/20 bg-[#FF1744]/[0.06] shadow-lg shadow-[#FF1744]/5"
                    : "border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: note.color }}
                  />
                  <span className="text-[11px] font-medium text-white/30 truncate">
                    {note.module}
                  </span>
                  <span className="text-[10px] text-white/20 ml-auto shrink-0">
                    {note.date}
                  </span>
                </div>
                <p className="text-[13px] font-semibold text-white/80 mb-1 line-clamp-1">
                  {note.lesson}
                </p>
                <p className="text-[12px] text-white/30 line-clamp-2 leading-relaxed">
                  {note.content}
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right — Note detail / editor */}
        <GlassCard className="flex-1 overflow-hidden p-0" hover={false}>
          {/* Note header */}
          <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: selectedNote.color }}
              />
              <div className="min-w-0">
                <p className="text-xs text-white/30">{selectedNote.module}</p>
                <h2 className="text-[15px] font-semibold text-white/90 truncate">
                  {selectedNote.lesson}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/20">
                {selectedNote.date}
              </span>
              <button className="p-1.5 rounded-lg hover:bg-white/[0.06] text-white/20 hover:text-white/50 transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="px-6 py-3 border-b border-white/[0.04] flex items-center gap-2">
            <svg className="h-3.5 w-3.5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            {selectedNote.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/[0.08] text-white/40 bg-white/[0.04]"
              >
                {tag}
              </span>
            ))}
            <button className="text-[11px] text-white/20 hover:text-[#FF1744] transition-colors ml-1">
              + Ajouter
            </button>
          </div>

          {/* Content area */}
          <div className="px-6 py-5 min-h-[300px]">
            {/* Toolbar */}
            <div className="flex items-center gap-1 mb-4 pb-3 border-b border-white/[0.06]">
              {[
                { icon: "B", title: "Gras", style: "font-bold" },
                { icon: "I", title: "Italique", style: "italic" },
                { icon: "U", title: "Souligné", style: "underline" },
              ].map((btn) => (
                <button
                  key={btn.icon}
                  title={btn.title}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm text-white/30 hover:bg-white/[0.06] hover:text-white/60 transition-colors ${btn.style}`}
                >
                  {btn.icon}
                </button>
              ))}
              <div className="w-px h-5 bg-white/[0.06] mx-1" />
              <button title="Liste" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:bg-white/[0.06] hover:text-white/60 transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              <button title="Code" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:bg-white/[0.06] hover:text-white/60 transition-colors font-mono text-xs">
                {"</>"}
              </button>
            </div>

            {/* Note content */}
            <div className="text-[14px] text-white/60 leading-relaxed">
              <p>{selectedNote.content}</p>

              {selectedNote.id === 1 && (
                <>
                  <div className="mt-4 p-3 rounded-lg bg-amber-500/[0.08] border border-amber-500/[0.15]">
                    <p className="text-[13px] text-amber-400 font-medium flex items-center gap-2">
                      <span>💡</span> Point important
                    </p>
                    <p className="text-[12px] text-amber-400/70 mt-1">
                      La temperature à 0 donne des réponses déterministes, à 1 des réponses créatives.
                    </p>
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-[12px] text-white/40">
                    <p className="text-[10px] text-white/25 uppercase tracking-wider mb-1 font-sans font-medium">Exemple de prompt</p>
                    Tu es un expert en marketing digital. Analyse cette landing page et donne-moi 5 améliorations concrètes avec un impact estimé sur le taux de conversion.
                  </div>
                </>
              )}

              {selectedNote.id === 2 && (
                <div className="mt-4">
                  <p className="text-[13px] font-semibold text-white/70 mb-2">Structure d{"'"}un bon prompt :</p>
                  <div className="space-y-1.5">
                    {["1. Contexte — Qui es-tu ? Quel est le problème ?", "2. Rôle — Quel expert doit répondre ?", "3. Tâche — Que doit-il faire exactement ?", "4. Format — Comment structurer la réponse ?"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-[13px] text-white/50">
                        <svg className="h-3.5 w-3.5 text-[#7C3AED] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
