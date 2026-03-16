"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { value: "prospection", label: "Prompt de prospection", icon: "🎯" },
  { value: "vente", label: "Script de vente", icon: "💬" },
  { value: "marketing", label: "Contenu marketing", icon: "📣" },
  { value: "email", label: "Email client", icon: "✉️" },
  { value: "proposition", label: "Proposition commerciale", icon: "📄" },
  { value: "social", label: "Post réseaux sociaux", icon: "📱" },
];

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function IconCopy({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function GenerateurPage() {
  const [category, setCategory] = useState("");
  const [context, setContext] = useState("");
  const [result, setResult] = useState("");
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const canGenerate = category && context.trim().length >= 10;

  const handleGenerate = async () => {
    if (!canGenerate || generating) return;
    setGenerating(true);
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, context }),
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
      } else {
        setResult(data.error || "Erreur lors de la génération. Réessaie.");
      }
    } catch {
      setResult("Erreur de connexion. Vérifie ta connexion internet et réessaie.");
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

  const handleContextChange = (val: string) => {
    setContext(val);
    setCharCount(val.length);
  };

  const selectedCat = CATEGORIES.find((c) => c.value === category);

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Générateur</h1>
        <p className="text-sm text-gray-500">
          Génère des prompts, scripts et contenus personnalisés pour ton agence.
        </p>
      </div>

      {/* Generator card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-[#FF1744] via-[#FF5252] to-[#FF8A80]" />

        <div className="p-6 md:p-8">
          <div className="space-y-5">

            {/* Category selection — visual cards */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-3 block uppercase tracking-wider">
                1. Choisis un type de contenu
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CATEGORIES.map((cat) => {
                  const isActive = category === cat.value;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(isActive ? "" : cat.value)}
                      className={`
                        flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all
                        ${isActive
                          ? "bg-[#FF1744]/5 border-[#FF1744]/30 shadow-sm"
                          : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300"
                        }
                      `}
                    >
                      <span className="text-lg flex-shrink-0">{cat.icon}</span>
                      <span className={`text-xs font-medium leading-tight ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Context input */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1.5 block uppercase tracking-wider">
                2. Décris ton besoin
              </label>
              <p className="text-[11px] text-gray-400 mb-2">
                Plus tu donnes de détails (client cible, offre, ton souhaité…), meilleur sera le résultat.
              </p>
              <div className="relative">
                <textarea
                  value={context}
                  onChange={(e) => handleContextChange(e.target.value)}
                  placeholder="Ex: Je veux un email de relance pour un prospect B2B dans la tech qui n'a pas répondu à mon premier message. Ton professionnel mais décontracté."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 min-h-[130px] resize-y focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40 transition-all"
                />
                <span className={`absolute bottom-3 right-3 text-[10px] ${charCount > 0 ? "text-gray-400" : "text-transparent"}`}>
                  {charCount} car.
                </span>
              </div>
            </div>

            {/* Generate button */}
            <button
              disabled={!canGenerate || generating}
              onClick={handleGenerate}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200",
                canGenerate && !generating
                  ? "bg-[#FF1744] text-white hover:bg-[#D50000] shadow-lg shadow-[#FF1744]/25 hover:shadow-[#FF1744]/40 hover:-translate-y-0.5 cursor-pointer"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
              )}
            >
              {generating ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Génération en cours...
                </>
              ) : (
                <>
                  <IconSparkles />
                  Générer {selectedCat ? `— ${selectedCat.label}` : ""}
                </>
              )}
            </button>
          </div>

          {/* Output */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            {result ? (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Résultat</p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
                  >
                    {copied ? (
                      <>
                        <IconCheck className="text-emerald-500" />
                        <span className="text-emerald-600">Copié !</span>
                      </>
                    ) : (
                      <>
                        <IconCopy />
                        Copier
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{result}</p>
                </div>
              </div>
            ) : generating ? (
              <div className="flex flex-col items-center py-8 gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-[#FF1744] animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <p className="text-xs text-gray-400">L&apos;IA rédige ton contenu...</p>
              </div>
            ) : (
              <div className="text-center py-6">
                <IconSparkles className="mx-auto text-gray-300 mb-2 w-6 h-6" />
                <p className="text-xs text-gray-400">
                  Le résultat généré apparaîtra ici.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
