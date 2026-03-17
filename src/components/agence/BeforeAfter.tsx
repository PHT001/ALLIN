"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

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

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const nextCase = useCallback(() => {
    setShowAfter(false);
    setTimeout(() => {
      setActiveCase((prev) => (prev + 1) % cases.length);
    }, 100);
  }, []);

  // Auto-cycle: show before 2s, then after 2s, then next case
  useEffect(() => {
    const showAfterTimer = setTimeout(() => {
      setShowAfter(true);
    }, 1800);

    const nextTimer = setTimeout(() => {
      nextCase();
    }, 4000);

    return () => {
      clearTimeout(showAfterTimer);
      clearTimeout(nextTimer);
    };
  }, [activeCase, nextCase]);

  const current = cases[activeCase];

  return (
    <section id="resultats" className="py-20 lg:py-28 bg-[#0A0A0A] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-[#007AFF] uppercase tracking-wider">
            R&eacute;sultats concrets
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Avant / Apr&egrave;s{" "}
            <span className="text-gray-500">l&apos;IA</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Des r&eacute;sultats mesur&eacute;s chez nos clients.
          </p>
        </motion.div>

        {/* Sector tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {cases.map((c, i) => (
            <button
              key={c.sector}
              onClick={() => {
                setShowAfter(false);
                setActiveCase(i);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCase === i
                  ? "bg-[#007AFF] text-white shadow-lg"
                  : "bg-white/10 text-gray-400 hover:bg-white/15 border border-white/10"
              }`}
            >
              <span>{c.icon}</span>
              <span className="hidden sm:inline">{c.sector}</span>
            </button>
          ))}
        </div>

        {/* Single card */}
        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-lg"
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{current.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{current.sector}</h3>
                    <p className="text-xs text-gray-500">{current.metric}</p>
                  </div>
                </div>
                {/* Toggle */}
                <div className="relative flex bg-white/10 rounded-full p-0.5">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 cursor-pointer ${
                      !showAfter ? "text-white" : "text-[#6B7280]"
                    }`}
                  >
                    Avant
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 cursor-pointer ${
                      showAfter ? "text-white" : "text-[#6B7280]"
                    }`}
                  >
                    Apr&egrave;s IA
                  </button>
                  <motion.div
                    className="absolute top-0.5 bottom-0.5 rounded-full"
                    animate={{
                      left: showAfter ? "50%" : "2px",
                      right: showAfter ? "2px" : "50%",
                      backgroundColor: showAfter ? "#007AFF" : "#0A0A0A",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                </div>
              </div>

              {/* Content area */}
              <div className="relative h-[200px] mx-6 mb-6 rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  {!showAfter ? (
                    <motion.div
                      key="before"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white/5 rounded-xl p-8 flex flex-col items-center justify-center"
                    >
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl lg:text-6xl font-black text-white">{current.before.value}</span>
                        <span className="text-lg text-gray-500 font-medium">{current.before.unit}</span>
                      </div>
                      <p className="text-sm text-gray-500">{current.before.detail}</p>
                      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="after"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-[#0A0A0A] rounded-xl p-8 flex flex-col items-center justify-center"
                    >
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-5xl lg:text-6xl font-black text-white">{current.after.value}</span>
                        <span className="text-lg text-white/50 font-medium">{current.after.unit}</span>
                      </div>
                      <p className="text-sm text-white/40">{current.after.detail}</p>
                      <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#007AFF]/20 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 to-transparent rounded-xl pointer-events-none" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Saving footer */}
              <div className="px-6 py-4 bg-gradient-to-r from-[#007AFF]/10 to-transparent border-t border-white/5">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <p className="text-base font-bold text-white">{current.saving}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, i) => (
              <div
                key={i}
                className="relative h-1.5 rounded-full overflow-hidden bg-white/10"
                style={{ width: activeCase === i ? 32 : 8, transition: "width 0.3s" }}
              >
                {activeCase === i && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#007AFF] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    key={activeCase}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="https://calendly.com/opexiapro/audit-ia-gratuit"
              className="inline-flex items-center gap-2 rounded-full bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0055D4] transition-all hover:shadow-xl hover:shadow-blue-200"
            >
              R&eacute;server mon audit gratuit
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
