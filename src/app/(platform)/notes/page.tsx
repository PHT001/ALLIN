"use client";

import { useState } from "react";

const MOCK_NOTES = [
  {
    id: 1,
    module: "Module 1",
    lesson: "L'IA en 2025 : ce que ça change pour toi",
    date: "18 mars 2026",
    content: "Les PME n'ont pas encore adopté l'IA → énorme opportunité. 72% des grandes entreprises l'utilisent mais les TPE/PME sont sous-équipées.",
    color: "#FF1744",
  },
  {
    id: 2,
    module: "Module 1",
    lesson: "Les outils du marché",
    date: "18 mars 2026",
    content: "Claude Pro → meilleur pour le code et les tâches complexes. ChatGPT → plus généraliste. Gemini → intégration Google. Penser à tester les 3.",
    color: "#FF1744",
  },
  {
    id: 3,
    module: "Module 2",
    lesson: "Les 7 frameworks de prompting",
    date: "17 mars 2026",
    content: "Le framework CRAFT est le plus efficace : Context, Role, Action, Format, Tone. Toujours donner un rôle à l'IA avant de poser la question.",
    color: "#FF6D00",
  },
];

export default function NotesPage() {
  const [search, setSearch] = useState("");

  const filtered = MOCK_NOTES.filter(
    (n) =>
      n.content.toLowerCase().includes(search.toLowerCase()) ||
      n.lesson.toLowerCase().includes(search.toLowerCase()) ||
      n.module.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-semibold tracking-tight text-[#111]">
            Mes notes
          </h1>
          <span className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            Bientôt disponible
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-1">
          Capture tes idées pendant chaque leçon. Tout est sauvegardé automatiquement.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Rechercher dans tes notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
        />
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-6 mb-6 px-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF1744]/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-[#FF1744]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-[#111]">{filtered.length}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Notes</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-[#111]">2</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Modules</p>
          </div>
        </div>
      </div>

      {/* Notes list */}
      <div className="space-y-3">
        {filtered.map((note) => (
          <div
            key={note.id}
            className="group bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: note.color }}
                />
                <span className="text-xs font-medium text-gray-500">
                  {note.module}
                </span>
                <span className="text-gray-300">·</span>
                <span className="text-xs text-gray-400">{note.lesson}</span>
              </div>
              <span className="text-[10px] text-gray-400">{note.date}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed pl-5">
              {note.content}
            </p>
          </div>
        ))}
      </div>

      {/* Empty state when no results */}
      {filtered.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <h3 className="text-base font-semibold text-gray-500 mb-1">Aucun résultat</h3>
          <p className="text-sm text-gray-400">
            Essaie un autre terme de recherche.
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 bg-gradient-to-br from-[#1a1b2e] to-[#0d0e1a] rounded-2xl p-6 text-center">
        <h3 className="text-white font-semibold mb-1">L&apos;éditeur complet arrive bientôt</h3>
        <p className="text-white/50 text-sm mb-4">
          Tu pourras bientôt prendre des notes directement dans chaque leçon avec formatage riche, tags et recherche.
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            Markdown
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            Tags
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            Recherche
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            Export PDF
          </div>
        </div>
      </div>
    </div>
  );
}
