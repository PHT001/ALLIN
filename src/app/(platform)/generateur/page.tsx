"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TYPES = [
  { value: "prospection", label: "Email de prospection", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#FF1744" },
  { value: "vente", label: "Script de vente", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", color: "#FF6D00" },
  { value: "proposition", label: "Proposition commerciale", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "#2979FF" },
  { value: "social", label: "Post LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 4a2 2 0 100 4 2 2 0 000-4z", color: "#00C853" },
  { value: "marketing", label: "Contenu marketing", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z", color: "#AA00FF" },
  { value: "chatbot", label: "Script chatbot", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#00B0FF" },
];

const TONES = [
  { value: "professionnel", label: "Pro" },
  { value: "decontracte", label: "Décontracté" },
  { value: "direct", label: "Direct" },
  { value: "persuasif", label: "Persuasif" },
];

const LENGTHS = [
  { value: "court", label: "Court", desc: "2-3 phrases" },
  { value: "moyen", label: "Moyen", desc: "1 paragraphe" },
  { value: "long", label: "Long", desc: "Complet" },
];

interface HistoryItem {
  id: string;
  type: string;
  context: string;
  result: string;
  date: Date;
}

export default function GenerateurPage() {
  const [type, setType] = useState("");
  const [tone, setTone] = useState("professionnel");
  const [length, setLength] = useState("moyen");
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const canGenerate = type && context.trim().length >= 10;
  const selectedType = TYPES.find((t) => t.value === type);

  const handleGenerate = async () => {
    if (!canGenerate || generating) return;
    setGenerating(true);
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: type, context, tone, length }),
      });
      const data = await res.json();
      const output = data.result || data.error || "Erreur lors de la génération.";
      setResult(output);
      setHistory((prev) => [
        { id: Date.now().toString(), type: selectedType?.label || type, context, result: output, date: new Date() },
        ...prev.slice(0, 9),
      ]);
    } catch {
      setResult("Erreur de connexion. Vérifie ta connexion internet.");
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111] mb-1">Générateur IA</h1>
          <p className="text-sm text-gray-400">Génère des emails, scripts, propositions et contenus en quelques secondes.</p>
        </div>
        {history.length > 0 && (
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-xs font-medium text-gray-500 hover:text-[#FF1744] border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            Historique ({history.length})
          </button>
        )}
      </div>

      <div className="flex gap-6">
        {/* Main generator */}
        <div className={`flex-1 min-w-0 ${showHistory ? "" : ""}`}>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 space-y-5">

              {/* Step 1: Type */}
              <div>
                <label className="text-[10px] font-bold text-gray-500 mb-2.5 block uppercase tracking-widest">
                  1. Type de contenu
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TYPES.map((t) => {
                    const active = type === t.value;
                    return (
                      <button
                        key={t.value}
                        onClick={() => setType(active ? "" : t.value)}
                        className={cn(
                          "flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all",
                          active
                            ? "border-[#FF1744]/30 bg-[#FF1744]/5 shadow-sm"
                            : "border-gray-200 bg-gray-50/50 hover:bg-white hover:border-gray-300"
                        )}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: t.color + "12" }}
                        >
                          <svg className="w-4 h-4" style={{ color: t.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d={t.icon} />
                          </svg>
                        </div>
                        <span className={cn("text-xs font-medium leading-tight", active ? "text-[#111]" : "text-gray-600")}>
                          {t.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Tone + Length */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-[10px] font-bold text-gray-500 mb-2 block uppercase tracking-widest">
                    2. Tonalité
                  </label>
                  <div className="flex gap-1.5">
                    {TONES.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => setTone(t.value)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                          tone === t.value
                            ? "bg-[#111] text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        )}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 mb-2 block uppercase tracking-widest">
                    Longueur
                  </label>
                  <div className="flex gap-1.5">
                    {LENGTHS.map((l) => (
                      <button
                        key={l.value}
                        onClick={() => setLength(l.value)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                          length === l.value
                            ? "bg-[#111] text-white"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        )}
                        title={l.desc}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Context */}
              <div>
                <label className="text-[10px] font-bold text-gray-500 mb-2 block uppercase tracking-widest">
                  3. Décris ton besoin
                </label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Ex: Email de relance pour un prospect B2B dans la tech qui n'a pas répondu. Il est CEO d'une startup de 20 personnes. Ton décontracté mais pro."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
                />
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-[10px] text-gray-400">Plus tu es précis, meilleur est le résultat.</p>
                  <span className="text-[10px] text-gray-400">{context.length} car.</span>
                </div>
              </div>

              {/* Generate button */}
              <button
                disabled={!canGenerate || generating}
                onClick={handleGenerate}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200",
                  canGenerate && !generating
                    ? "bg-[#FF1744] text-white hover:bg-[#D50000] shadow-lg shadow-[#FF1744]/25 hover:shadow-[#FF1744]/40 hover:-translate-y-0.5"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                )}
              >
                {generating ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
                    Générer{selectedType ? ` — ${selectedType.label}` : ""}
                  </>
                )}
              </button>
            </div>

            {/* Result */}
            {(result || generating) && (
              <div className="border-t border-gray-100 p-6">
                {result ? (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <p className="text-xs font-semibold text-gray-700">Résultat</p>
                      </div>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all border border-gray-200"
                      >
                        {copied ? (
                          <><svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg><span className="text-emerald-600">Copié !</span></>
                        ) : (
                          <><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copier</>
                        )}
                      </button>
                    </div>
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{result}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-6 gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <p className="text-xs text-gray-400">L&apos;IA rédige ton contenu...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* History sidebar */}
        {showHistory && history.length > 0 && (
          <div className="w-72 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
              <h3 className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Historique</h3>
              <div className="space-y-2">
                {history.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { setResult(h.result); setContext(h.context); }}
                    className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-[10px] font-medium text-[#FF1744] mb-0.5">{h.type}</p>
                    <p className="text-[11px] text-gray-600 line-clamp-2">{h.context}</p>
                    <p className="text-[9px] text-gray-400 mt-1">
                      {h.date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
