"use client";

const resources = [
  { icon: "📄", title: "PDFs & Guides", desc: "Fiches récapitulatives et guides pratiques", color: "#6C5CE7" },
  { icon: "📋", title: "Templates", desc: "Modèles de contrats, propositions et offres", color: "#FF6B6B" },
  { icon: "🔗", title: "Liens utiles", desc: "Outils, APIs et ressources externes", color: "#0984E3" },
  { icon: "🎬", title: "Videos bonus", desc: "Replays et tutoriels supplémentaires", color: "#00B894" },
  { icon: "🧰", title: "Outils IA", desc: "Liste curatée des meilleurs outils IA", color: "#E84393" },
  { icon: "📊", title: "Checklists", desc: "Listes de vérification par étape", color: "#FDCB6E" },
];

export default function RessourcesPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">
          Ressources
        </h1>
        <p className="text-sm text-gray-500">
          Toutes les ressources de la formation accessibles en un endroit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {resources.map((r) => (
          <div
            key={r.title}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
              style={{ background: `${r.color}15` }}
            >
              {r.icon}
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-1 group-hover:text-[#FF1744] transition-colors duration-200">
              {r.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            <span className="inline-block mt-3 text-[10px] font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
              Bientôt disponible
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
