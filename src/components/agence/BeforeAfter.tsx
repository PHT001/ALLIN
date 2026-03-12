"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const cases = [
  {
    sector: "Cabinet Comptable",
    icon: "📊",
    metric: "Saisie de factures",
    before: { value: "4h", unit: "/ jour", detail: "3 employés mobilisés" },
    after: { value: "15 min", unit: "/ jour", detail: "1 seul contrôle humain" },
    saving: "68 000€ / an économisés",
  },
  {
    sector: "Agence Immobilière",
    icon: "🏠",
    metric: "Réponse aux leads",
    before: { value: "24h", unit: "de délai", detail: "Leads perdus chaque semaine" },
    after: { value: "2 min", unit: "de délai", detail: "Réponse IA instantanée 24/7" },
    saving: "+40% de taux de conversion",
  },
  {
    sector: "E-commerce",
    icon: "🛒",
    metric: "Fiches produits",
    before: { value: "2h", unit: "/ fiche", detail: "Rédaction + photos + SEO" },
    after: { value: "3 min", unit: "/ fiche", detail: "Génération IA complète" },
    saving: "500 fiches en 1 semaine",
  },
];

function ResultCard({ caseData, index }: { caseData: (typeof cases)[0]; index: number }) {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const delay = index * 600;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setShowAfter((prev) => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, delay);

    // Initial flip after delay
    const initialFlip = setTimeout(() => {
      setShowAfter(true);
    }, 2000 + delay);

    const loop = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(initialFlip);
      clearInterval(loop);
    };
  }, [index]);

  return (
    <div className="group relative">
      {/* Card */}
      <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xl">{caseData.icon}</span>
            <div>
              <h3 className="text-base font-bold text-[#111]">{caseData.sector}</h3>
              <p className="text-xs text-[#9CA3AF]">{caseData.metric}</p>
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <div className="px-6 mb-4 flex">
          <div className="relative flex bg-gray-100 rounded-full p-0.5">
            <button
              onClick={() => setShowAfter(false)}
              className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 ${
                !showAfter ? "text-white" : "text-[#6B7280]"
              }`}
            >
              Avant
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 ${
                showAfter ? "text-white" : "text-[#6B7280]"
              }`}
            >
              Après IA
            </button>
            <motion.div
              className="absolute top-0.5 bottom-0.5 rounded-full"
              animate={{
                left: showAfter ? "50%" : "2px",
                right: showAfter ? "2px" : "50%",
                backgroundColor: showAfter ? "#FF1744" : "#0A0A0A",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        {/* Content area */}
        <div className="relative h-[160px] mx-6 mb-6 rounded-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!showAfter ? (
              <motion.div
                key="before"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl lg:text-5xl font-black text-[#111]">{caseData.before.value}</span>
                  <span className="text-base text-[#6B7280] font-medium">{caseData.before.unit}</span>
                </div>
                <p className="text-sm text-[#9CA3AF]">{caseData.before.detail}</p>

                {/* Decorative red X */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                  <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="after"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-[#0A0A0A] rounded-xl p-6 flex flex-col items-center justify-center"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl lg:text-5xl font-black text-white">{caseData.after.value}</span>
                  <span className="text-base text-white/50 font-medium">{caseData.after.unit}</span>
                </div>
                <p className="text-sm text-white/40">{caseData.after.detail}</p>

                {/* Decorative check */}
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#FF1744]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF1744]/10 to-transparent rounded-xl pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Arrow indicator between states */}
        <div className="px-6 pb-2">
          <div className="flex items-center gap-2 justify-center">
            <div className="h-px flex-1 bg-gray-100" />
            <motion.div
              animate={{ scale: showAfter ? 1.1 : 1 }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                showAfter ? "bg-[#FF1744]/10 text-[#FF1744]" : "bg-gray-50 text-[#9CA3AF]"
              }`}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              R&eacute;sultat
            </motion.div>
            <div className="h-px flex-1 bg-gray-100" />
          </div>
        </div>

        {/* Saving footer */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#FF1744]/5 to-transparent border-t border-gray-50">
          <p className="text-sm font-bold text-[#FF1744] text-center">{caseData.saving}</p>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="resultats" className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            R&eacute;sultats concrets
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Avant / Apr&egrave;s{" "}
            <span className="text-[#9CA3AF]">l&apos;IA</span>
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            Des r&eacute;sultats mesur&eacute;s chez nos clients. Cliquez pour comparer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.sector}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <ResultCard caseData={c} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
