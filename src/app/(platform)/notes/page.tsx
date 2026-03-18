"use client";

import { useState, useRef, useEffect } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  folder: string;
  color: string;
  updatedAt: Date;
  pinned: boolean;
}

const COLORS = ["#FF1744", "#FF6D00", "#00C853", "#2979FF", "#AA00FF", "#78909C"];

const DEFAULT_FOLDERS = ["Général", "Module 1", "Module 2", "Idées business"];

const INITIAL_NOTES: Note[] = [
  {
    id: "1",
    title: "Opportunité PME",
    content: "Les PME n'ont pas encore adopté l'IA → énorme opportunité.\n\n72% des grandes entreprises l'utilisent mais les TPE/PME sont massivement sous-équipées.\n\nIdée : cibler les PME locales en premier.",
    folder: "Module 1",
    color: "#FF1744",
    updatedAt: new Date("2026-03-18T10:30:00"),
    pinned: true,
  },
  {
    id: "2",
    title: "Framework CRAFT",
    content: "Le framework CRAFT est le plus efficace :\n\n• Context — donne le contexte\n• Role — assigne un rôle à l'IA\n• Action — décris ce que tu veux\n• Format — précise le format attendu\n• Tone — indique le ton\n\nToujours donner un rôle avant de poser la question.",
    folder: "Module 2",
    color: "#2979FF",
    updatedAt: new Date("2026-03-17T14:20:00"),
    pinned: false,
  },
  {
    id: "3",
    title: "Services à vendre",
    content: "Les 3 services les plus rentables :\n\n1. Chatbot IA — 1500-3000€\n2. Automatisation Make/n8n — 800-2000€\n3. Site web avec IA — 1000-2500€\n\nCommencer par les chatbots → plus facile à vendre.",
    folder: "Idées business",
    color: "#00C853",
    updatedAt: new Date("2026-03-16T09:00:00"),
    pinned: false,
  },
];

function formatDate(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `il y a ${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `il y a ${hours}h`;
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [activeNote, setActiveNote] = useState<Note | null>(INITIAL_NOTES[0]);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const filteredNotes = notes.filter((n) => {
    const matchFolder = !activeFolder || n.folder === activeFolder;
    const matchSearch =
      !search ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase());
    return matchFolder && matchSearch;
  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return b.updatedAt.getTime() - a.updatedAt.getTime();
  });

  const folders = DEFAULT_FOLDERS;
  const folderCounts = folders.reduce((acc, f) => {
    acc[f] = notes.filter((n) => n.folder === f).length;
    return acc;
  }, {} as Record<string, number>);

  function createNote() {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "",
      content: "",
      folder: activeFolder || "Général",
      color: COLORS[notes.length % COLORS.length],
      updatedAt: new Date(),
      pinned: false,
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setTimeout(() => titleRef.current?.focus(), 50);
  }

  function updateNote(field: keyof Note, value: any) {
    if (!activeNote) return;
    const updated = { ...activeNote, [field]: value, updatedAt: new Date() };
    setActiveNote(updated);
    setNotes(notes.map((n) => (n.id === updated.id ? updated : n)));
  }

  function deleteNote(id: string) {
    const remaining = notes.filter((n) => n.id !== id);
    setNotes(remaining);
    if (activeNote?.id === id) {
      setActiveNote(remaining[0] || null);
    }
  }

  function togglePin(id: string) {
    setNotes(
      notes.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n))
    );
    if (activeNote?.id === id) {
      setActiveNote({ ...activeNote, pinned: !activeNote.pinned });
    }
  }

  // Auto-resize textarea
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    }
  }, [activeNote?.content]);

  return (
    <div className="w-full h-[calc(100vh-2rem)] flex gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Left panel — Notes list */}
      <div className={`${sidebarOpen ? "w-80" : "w-0 overflow-hidden"} flex-shrink-0 border-r border-gray-100 flex flex-col transition-all duration-200`}>
        {/* Search + New */}
        <div className="p-3 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative flex-1">
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF1744]/30 focus:border-[#FF1744]/40"
              />
            </div>
            <button
              onClick={createNote}
              className="flex-shrink-0 w-8 h-8 bg-[#FF1744] hover:bg-[#D50000] text-white rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          {/* Folder tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveFolder(null)}
              className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors ${
                !activeFolder
                  ? "bg-[#111] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Tout ({notes.length})
            </button>
            {folders.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFolder(activeFolder === f ? null : f)}
                className={`flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium transition-colors whitespace-nowrap ${
                  activeFolder === f
                    ? "bg-[#111] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {f} {folderCounts[f] ? `(${folderCounts[f]})` : ""}
              </button>
            ))}
          </div>
        </div>

        {/* Notes list */}
        <div className="flex-1 overflow-y-auto">
          {sortedNotes.length === 0 && (
            <div className="p-6 text-center">
              <p className="text-xs text-gray-400">Aucune note</p>
            </div>
          )}
          {sortedNotes.map((note) => (
            <div
              key={note.id}
              onClick={() => setActiveNote(note)}
              className={`px-3 py-3 border-b border-gray-50 cursor-pointer transition-colors ${
                activeNote?.id === note.id
                  ? "bg-[#FF1744]/5 border-l-2 border-l-[#FF1744]"
                  : "hover:bg-gray-50 border-l-2 border-l-transparent"
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  {note.pinned && (
                    <svg className="w-3 h-3 text-[#FF1744]" viewBox="0 0 24 24" fill="currentColor"><path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>
                  )}
                  <h4 className="text-xs font-semibold text-[#111] truncate max-w-[180px]">
                    {note.title || "Sans titre"}
                  </h4>
                </div>
                <span className="text-[9px] text-gray-400 flex-shrink-0 ml-2">
                  {formatDate(note.updatedAt)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                {note.content || "Note vide..."}
              </p>
              <div className="mt-1.5">
                <span
                  className="inline-block text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: note.color + "15",
                    color: note.color,
                  }}
                >
                  {note.folder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — Editor */}
      <div className="flex-1 flex flex-col min-w-0">
        {activeNote ? (
          <>
            {/* Toolbar */}
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors md:hidden"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </button>
                <select
                  value={activeNote.folder}
                  onChange={(e) => updateNote("folder", e.target.value)}
                  className="text-[10px] font-medium px-2 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 focus:outline-none cursor-pointer"
                >
                  {folders.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                <select
                  value={activeNote.color}
                  onChange={(e) => updateNote("color", e.target.value)}
                  className="text-[10px] px-2 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 focus:outline-none cursor-pointer"
                >
                  {COLORS.map((c) => (
                    <option key={c} value={c}>
                      {c === "#FF1744" ? "Rouge" : c === "#FF6D00" ? "Orange" : c === "#00C853" ? "Vert" : c === "#2979FF" ? "Bleu" : c === "#AA00FF" ? "Violet" : "Gris"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => togglePin(activeNote.id)}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    activeNote.pinned ? "bg-[#FF1744]/10 text-[#FF1744]" : "hover:bg-gray-100 text-gray-400"
                  }`}
                  title={activeNote.pinned ? "Désépingler" : "Épingler"}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>
                </button>
                <button
                  onClick={() => deleteNote(activeNote.id)}
                  className="w-7 h-7 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
                  title="Supprimer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </div>
            </div>

            {/* Editor body */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              <input
                ref={titleRef}
                type="text"
                value={activeNote.title}
                onChange={(e) => updateNote("title", e.target.value)}
                placeholder="Titre de la note..."
                className="w-full text-2xl font-bold text-[#111] placeholder:text-gray-300 focus:outline-none mb-1"
              />
              <p className="text-[10px] text-gray-400 mb-6">
                Modifié {formatDate(activeNote.updatedAt)}
              </p>
              <textarea
                ref={contentRef}
                value={activeNote.content}
                onChange={(e) => updateNote("content", e.target.value)}
                placeholder="Commence à écrire..."
                className="w-full text-sm text-gray-700 leading-relaxed placeholder:text-gray-300 focus:outline-none resize-none min-h-[300px]"
              />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <p className="text-sm text-gray-400 mb-3">Sélectionne ou crée une note</p>
              <button
                onClick={createNote}
                className="px-4 py-2 bg-[#FF1744] hover:bg-[#D50000] text-white text-sm font-medium rounded-xl transition-colors"
              >
                Nouvelle note
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
