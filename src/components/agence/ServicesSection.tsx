"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Chatbots & Support client",
    desc: "Un assistant IA qui répond à vos clients 24/7, dans votre ton, avec vos informations. Fini les temps d'attente, fini les réponses génériques.",
    keyword: "CHATBOT",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="6" width="24" height="16" rx="3" />
        <path d="M12 26l4-4h-8l4 4z" />
        <circle cx="11" cy="14" r="1.5" fill="currentColor" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" />
        <circle cx="21" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Automatisation des process",
    desc: "Facturation, relances, onboarding, reporting — tout tourne tout seul. Vos équipes se concentrent sur ce qui a vraiment de la valeur.",
    keyword: "AUTOMATION",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 16h6m8 0h6M16 6v6m0 8v6" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4a12 12 0 110 24 12 12 0 010-24z" strokeDasharray="4 3" />
      </svg>
    ),
  },
  {
    title: "Génération de contenus",
    desc: "Posts LinkedIn, emails marketing, fiches produits, articles SEO — en 10 minutes au lieu de 3 heures. Dans votre ton, votre style.",
    keyword: "CONTENU",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M10 10h12M10 14h12M10 18h8" />
        <path d="M22 20l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "CRM intelligent",
    desc: "Votre base client se met à jour, se segmente et se relance automatiquement. Plus aucun lead ne tombe dans l'oubli.",
    keyword: "CRM",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="16" cy="10" r="4" />
        <circle cx="8" cy="22" r="3" />
        <circle cx="24" cy="22" r="3" />
        <path d="M12.5 13l-2.5 6M19.5 13l2.5 6M11 22h10" />
      </svg>
    ),
  },
  {
    title: "Dashboards & Analyse",
    desc: "Toutes vos données dans un seul écran, lisible et actionnable. Prenez des décisions en 30 secondes au lieu de 3 heures.",
    keyword: "DASHBOARD",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <rect x="8" y="16" width="4" height="8" rx="1" fill="currentColor" opacity={0.3} />
        <rect x="14" y="12" width="4" height="12" rx="1" fill="currentColor" opacity={0.5} />
        <rect x="20" y="8" width="4" height="16" rx="1" fill="currentColor" opacity={0.7} />
      </svg>
    ),
  },
  {
    title: "Formation de vos équipes",
    desc: "On forme vos collaborateurs à utiliser les outils qu'on installe. Ils deviennent autonomes. Pas de dépendance, pas de jargon.",
    keyword: "FORMATION",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 4l12 6-12 6-12-6 12-6z" />
        <path d="M4 10v8l12 6 12-6v-8" />
        <path d="M28 10v10" />
        <circle cx="28" cy="22" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * services.length), services.length - 1);
    setActiveIndex(idx);
  });

  return (
    <section id="services" ref={containerRef} className="relative bg-[#0A0A0A]" style={{ height: `${services.length * 100}vh` }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF1744]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8">
          {/* Top label */}
          <div className="absolute top-0 left-6 lg:left-8 -translate-y-20 lg:-translate-y-24">
            <p className="text-xs font-medium text-[#FF1744] tracking-[0.3em] uppercase">
              Nos services
            </p>
          </div>

          {/* Progress dots — left */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex-col items-center gap-3">
            {services.map((_, i) => (
              <div key={i} className="relative flex items-center justify-center">
                <div
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "bg-[#FF1744] scale-[2]"
                      : i < activeIndex
                      ? "bg-white/30"
                      : "bg-white/10"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
            {/* Left — content */}
            <div className="flex-1 max-w-2xl">
              {/* Big number */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`num-${activeIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex items-baseline gap-4 mb-6"
                >
                  <span className="text-7xl lg:text-[120px] font-black text-white/[0.04] leading-none select-none">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Keyword */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`kw-${activeIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-[10px] font-bold tracking-[0.4em] text-[#FF1744]/60 uppercase mb-4"
                >
                  {services[activeIndex].keyword}
                </motion.p>
              </AnimatePresence>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]"
                >
                  {services[activeIndex].title}
                </motion.h3>
              </AnimatePresence>

              {/* Desc */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  className="mt-5 text-base lg:text-lg text-white/40 leading-relaxed max-w-lg"
                >
                  {services[activeIndex].desc}
                </motion.p>
              </AnimatePresence>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <a
                  href="#calendly"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF1744] hover:text-white transition-colors"
                >
                  En savoir plus
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right — icon */}
            <div className="lg:text-right">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`icon-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="inline-flex items-center justify-center w-32 h-32 lg:w-44 lg:h-44 rounded-3xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="text-[#FF1744] scale-[2] lg:scale-[2.5]">
                    {services[activeIndex].icon}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-0 left-6 right-6 lg:left-8 lg:right-8 translate-y-16 lg:translate-y-20">
            <div className="h-[1px] bg-white/[0.06] w-full relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#FF1744]/40"
                style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-[10px] text-white/20 font-medium">
                {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-white/20 font-medium tracking-wider">
                SCROLL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
