"use client";

import { useState } from "react";

interface Resource {
  id: string;
  title: string;
  desc: string;
  category: string;
  type: "pdf" | "template" | "link" | "video" | "tool" | "checklist";
  module?: string;
  url?: string;
}

const CATEGORIES = [
  { id: "all", label: "Tout", count: 12 },
  { id: "templates", label: "Templates", count: 4 },
  { id: "guides", label: "Guides PDF", count: 3 },
  { id: "outils", label: "Outils IA", count: 3 },
  { id: "checklists", label: "Checklists", count: 2 },
];

const RESOURCES: Resource[] = [
  // Templates
  { id: "1", title: "Contrat de prestation IA", desc: "Modèle de contrat complet pour tes prestations chatbot, automatisation et sites web. Prêt à personnaliser.", category: "templates", type: "template", module: "Module 13" },
  { id: "2", title: "Proposition commerciale", desc: "Template de devis professionnel avec 3 tiers de prix. Format PDF éditable.", category: "templates", type: "template", module: "Module 8" },
  { id: "3", title: "Email de prospection", desc: "5 séquences d'emails cold outreach testées et optimisées pour les agences IA.", category: "templates", type: "template", module: "Module 9" },
  { id: "4", title: "Offre de retainer mensuel", desc: "Modèle de contrat de maintenance/retainer avec scope, SLA et conditions.", category: "templates", type: "template", module: "Module 10" },
  // Guides
  { id: "5", title: "Guide complet Supabase", desc: "De l'installation au déploiement. Auth, BDD, API, storage — tout ce qu'il faut savoir.", category: "guides", type: "pdf", module: "Module 4" },
  { id: "6", title: "Prompt Engineering — Cheat Sheet", desc: "Les 7 frameworks de prompting sur une page. Imprime-le et garde-le à côté de ton écran.", category: "guides", type: "pdf", module: "Module 2" },
  { id: "7", title: "Roadmap 0 → 10K€/mois", desc: "Le plan semaine par semaine pour atteindre 10K€ de CA mensuel en 90 jours.", category: "guides", type: "pdf", module: "Module 12" },
  // Outils
  { id: "8", title: "Claude Pro", desc: "L'outil principal de la formation. Prompting, Projects, code, analyse — ton arme secrète.", category: "outils", type: "tool", url: "https://claude.ai" },
  { id: "9", title: "Make (Integromat)", desc: "Plateforme d'automatisation no-code. Connecte tes apps entre elles sans coder.", category: "outils", type: "tool", url: "https://make.com" },
  { id: "10", title: "Vercel", desc: "Déploie tes sites et apps gratuitement en 30 secondes. L'hébergeur recommandé.", category: "outils", type: "tool", url: "https://vercel.com" },
  // Checklists
  { id: "11", title: "Checklist avant livraison client", desc: "15 points à vérifier avant chaque livraison. Tests, documentation, accès, backup.", category: "checklists", type: "checklist", module: "Module 10" },
  { id: "12", title: "Checklist lancement agence", desc: "Tout ce qu'il faut pour démarrer : statut juridique, outils, portfolio, prospection.", category: "checklists", type: "checklist", module: "Module 1" },
];

const TYPE_CONFIG = {
  template: { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "#FF1744", label: "Template" },
  pdf: { icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z", color: "#FF6D00", label: "PDF" },
  link: { icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", color: "#2979FF", label: "Lien" },
  video: { icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "#00C853", label: "Vidéo" },
  tool: { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", color: "#AA00FF", label: "Outil" },
  checklist: { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", color: "#00B0FF", label: "Checklist" },
};

export default function RessourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = RESOURCES.filter((r) => {
    const matchCat = activeCategory === "all" || r.category === activeCategory;
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-[#111] mb-1">Ressources</h1>
        <p className="text-sm text-gray-400">Templates, guides, outils et checklists pour ton agence IA.</p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <div className="relative flex-1 w-full sm:max-w-xs">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input
            type="text"
            placeholder="Rechercher une ressource..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF1744]/20 focus:border-[#FF1744]/40"
          />
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#111] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((r) => {
          const config = TYPE_CONFIG[r.type];
          return (
            <div
              key={r.id}
              className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: config.color + "12" }}
                >
                  <svg className="w-5 h-5" style={{ color: config.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={config.icon} />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-[#111] group-hover:text-[#FF1744] transition-colors truncate">
                      {r.title}
                    </h3>
                    <span
                      className="flex-shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: config.color + "15", color: config.color }}
                    >
                      {config.label}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
                    {r.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    {r.module && (
                      <span className="text-[10px] text-gray-400 font-medium">
                        {r.module}
                      </span>
                    )}
                    {r.url && (
                      <span className="text-[10px] text-[#2979FF] font-medium flex items-center gap-0.5">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                        Ouvrir
                      </span>
                    )}
                    {!r.url && (
                      <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 10v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Bientôt
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#FF1744] group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <p className="text-sm text-gray-400">Aucune ressource trouvée.</p>
        </div>
      )}

      {/* Stats footer */}
      <div className="mt-8 flex items-center justify-center gap-8 text-center">
        <div>
          <p className="text-2xl font-bold text-[#111]">12</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Ressources</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div>
          <p className="text-2xl font-bold text-[#111]">4</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Templates</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div>
          <p className="text-2xl font-bold text-[#111]">3</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Outils</p>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div>
          <p className="text-2xl font-bold text-[#FF1744] font-semibold">Gratuit</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Inclus</p>
        </div>
      </div>
    </div>
  );
}
