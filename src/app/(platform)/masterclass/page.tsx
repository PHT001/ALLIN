"use client";

const masterclasses = [
  {
    title: "Automatiser son agence IA de A à Z",
    speaker: "Fondateur 1",
    date: "Bientôt",
    duration: "1h30",
    topics: ["Workflows", "Automatisation", "Outils"],
  },
  {
    title: "Trouver ses 5 premiers clients en 30 jours",
    speaker: "Fondateur 2",
    date: "Bientôt",
    duration: "1h",
    topics: ["Prospection", "Cold outreach", "Closing"],
  },
  {
    title: "Construire un agent IA qui vend",
    speaker: "Invité expert",
    date: "Bientôt",
    duration: "45min",
    topics: ["Agents IA", "Use cases", "Demo live"],
  },
];

export default function MasterclassPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Masterclass</h1>
        <p className="text-sm text-gray-500">
          Sessions exclusives avec des experts et les fondateurs.
        </p>
      </div>

      {/* Featured */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1744] to-[#FF5252]" />
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1744] bg-[#FF1744]/10 px-2 py-0.5 rounded-full">
            Prochaine session
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{masterclasses[0].title}</h2>
        <p className="text-sm text-gray-500 mb-4">
          Avec {masterclasses[0].speaker} — {masterclasses[0].duration}
        </p>
        <div className="flex gap-2">
          {masterclasses[0].topics.map((t) => (
            <span key={t} className="text-[10px] text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {masterclasses.slice(1).map((mc) => (
          <div key={mc.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <h3 className="font-semibold text-sm text-gray-900 mb-2">{mc.title}</h3>
            <p className="text-xs text-gray-500 mb-3">
              {mc.speaker} — {mc.duration}
            </p>
            <div className="flex gap-2">
              {mc.topics.map((t) => (
                <span key={t} className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">Bientôt disponible</p>
    </div>
  );
}
