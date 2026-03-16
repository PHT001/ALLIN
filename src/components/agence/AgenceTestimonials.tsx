"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote: "OpexIA a installé un chatbot sur notre site en 5 jours. On est passé de 24h de réponse à 2 minutes.",
    name: "Laurent Mercier",
    role: "Directeur — Agence immobilière, Lyon",
    result: "+40% de conversion",
    sector: "Immobilier",
  },
  {
    quote: "On envoyait nos devis en 48h. Maintenant c'est 2h, automatiquement. On a signé 3 clients de plus le premier mois.",
    name: "Sophie Durand",
    role: "Gérante — Cabinet comptable, Paris 8e",
    result: "3 clients supplémentaires",
    sector: "Comptabilité",
  },
  {
    quote: "Je pensais que l'IA c'était compliqué. Leur équipe a tout installé en 3 semaines sans qu'on touche à rien.",
    name: "Marc Tessier",
    role: "PDG — Translog Express, Marseille",
    result: "47h/mois gagnées",
    sector: "Logistique",
  },
  {
    quote: "Le reporting automatique nous fait gagner une journée entière par semaine. Mon équipe se concentre enfin sur les clients.",
    name: "Julie Renard",
    role: "Directrice Marketing — Agence 360, Bordeaux",
    result: "-80% temps reporting",
    sector: "Marketing",
  },
  {
    quote: "On a automatisé tout notre onboarding client. Ce qui prenait 3h prend maintenant 15 minutes.",
    name: "Thomas Blanchard",
    role: "Fondateur — SaaS B2B, Paris",
    result: "ROI x8 en 3 mois",
    sector: "Tech",
  },
  {
    quote: "L'audit gratuit m'a ouvert les yeux. En 1h ils avaient identifié 50h/mois d'économies potentielles.",
    name: "David Hoffmann",
    role: "DG — Groupe hôtelier, Côte d'Azur",
    result: "50h/mois identifiées",
    sector: "Hôtellerie",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#007AFF]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function AgenceTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Header + navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-[#007AFF] uppercase tracking-wider">
                T&eacute;moignages
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Ce qu&apos;en disent{" "}
                <span className="text-[#9CA3AF]">nos clients</span>
              </h2>
              <p className="mt-4 text-lg text-[#6B7280]">
                +200 entreprises accompagn&eacute;es dans leur transformation IA.
              </p>
            </motion.div>

            {/* Navigation dots */}
            <div className="mt-8 flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "w-8 h-2 bg-[#007AFF]"
                      : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Sector pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.sector}
                  onClick={() => setActiveIndex(i)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-[#0A0A0A] text-white"
                      : "bg-gray-100 text-[#6B7280] hover:bg-gray-200"
                  }`}
                >
                  {t.sector}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Stacked card */}
          <div className="relative h-[320px]">
            {/* Background cards (stack effect) */}
            <div className="absolute top-4 left-4 right-[-4px] bottom-[-4px] rounded-2xl bg-gray-100 border border-gray-100" />
            <div className="absolute top-2 left-2 right-[-2px] bottom-[-2px] rounded-2xl bg-gray-50 border border-gray-100" />

            {/* Active card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, rotateY: -5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: 5 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8 flex flex-col justify-between"
              >
                <div>
                  <Stars />
                  <p className="mt-5 text-lg lg:text-xl text-[#111] leading-relaxed font-medium">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#007AFF] to-[#64D2FF] flex items-center justify-center font-bold text-white text-sm">
                      {testimonials[activeIndex].name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#111]">{testimonials[activeIndex].name}</p>
                      <p className="text-xs text-[#6B7280]">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-[#007AFF]">{testimonials[activeIndex].result}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrow buttons */}
            <div className="absolute -bottom-14 right-0 flex gap-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6B7280] hover:bg-gray-50 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white hover:bg-[#222] transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendly.com/opexiapro/audit-ia-gratuit"
            className="inline-flex items-center gap-2 rounded-full bg-[#007AFF] px-8 py-4 text-base font-semibold text-white hover:bg-[#0055D4] transition-all hover:shadow-xl hover:shadow-blue-200"
          >
            Ces r&eacute;sultats vous parlent ? R&eacute;servez votre audit
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
