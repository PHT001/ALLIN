"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const weeks = [
  {
    num: 1,
    title: "Fondations IA & Stack Technique",
    lessons: "7 le\u00e7ons",
    emoji: "\u{1F9E0}",
    points: [
      "Comprendre l\u2019\u00e9cosyst\u00e8me : LLMs, APIs, agents, prompting avanc\u00e9",
      "Choisir les bons outils selon chaque cas client",
      "Premiers prompts efficaces",
      "Cas d\u2019usage pour entreprises locales",
    ],
    result: "Tu comprends l\u2019IA et tu ma\u00eetrises les fondamentaux",
  },
  {
    num: 2,
    title: "Construire des Infrastructures IA",
    lessons: "7 le\u00e7ons",
    emoji: "\u2699\uFE0F",
    points: [
      "Techniques avanc\u00e9es de prompt engineering",
      "Cr\u00e9er des workflows complexes et agents autonomes",
      "Automatiser des processus business complets",
      "Optimiser la qualit\u00e9 des outputs",
    ],
    result: "Tu cr\u00e9es des syst\u00e8mes IA qui produisent des r\u00e9sultats pro",
  },
  {
    num: 3,
    title: "D\u00e9finir & Packager ton Offre",
    lessons: "8 le\u00e7ons",
    emoji: "\u{1F4E6}",
    points: [
      "Trouver ta niche et cr\u00e9er des offres productis\u00e9es",
      "Cr\u00e9er tes premiers projets clients",
      "D\u00e9ployer des chatbots et sites web",
      "Int\u00e9grer les APIs et automatisations",
    ],
    result: "Tu as un portfolio de projets pr\u00eats \u00e0 vendre",
  },
  {
    num: 4,
    title: "Trouver tes Clients & Scaler",
    lessons: "6 le\u00e7ons",
    emoji: "\u{1F680}",
    points: [
      "Scripts de prospection test\u00e9s",
      "Strat\u00e9gies de prospection client",
      "Pricing et n\u00e9gociation",
      "Scaler ton agence IA",
    ],
    result: "Tu es pr\u00eat \u00e0 signer tes premiers clients",
  },
];

export default function Program() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-2 lg:py-3 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Programme
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            4 semaines pour tout changer
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            {"74 le\u00e7ons, 13 modules \u2014 du d\u00e9butant complet au freelance IA rentable"}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          {weeks.map((week, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={week.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#FF1744]/20 bg-[#FF1744]/[0.02] shadow-lg shadow-red-100/40"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {/* Header — always visible */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 lg:px-6 lg:py-5 cursor-pointer group text-left"
                >
                  {/* Week number circle */}
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FF1744]/10"
                        : "bg-gray-100 group-hover:bg-[#FF1744]/5"
                    }`}
                  >
                    {week.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                        isOpen ? "text-[#FF1744]" : "text-gray-400"
                      }`}>
                        {"Semaine " + week.num}
                      </span>
                      <span className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {week.lessons}
                      </span>
                    </div>
                    <h3 className={`text-base lg:text-lg font-semibold mt-0.5 transition-colors ${
                      isOpen ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                    }`}>
                      {week.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <svg className={`h-5 w-5 transition-colors ${isOpen ? "text-[#FF1744]" : "text-gray-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 lg:px-6 lg:pb-6 pl-[4.5rem] lg:pl-[5rem]">
                        <ul className="space-y-2.5 mb-4">
                          {week.points.map((point) => (
                            <li key={point} className="flex items-start gap-2.5 text-[15px] text-gray-600">
                              <svg className="h-4 w-4 text-[#FF1744]/50 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </ul>
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF1744] bg-[#FF1744]/[0.06] px-3 py-1.5 rounded-lg">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          {week.result}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
