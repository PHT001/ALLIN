"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Chatbots & Support client",
    desc: "Vos clients ont une réponse en 30 secondes. Même à 3h du matin.",
    keyword: "CHATBOT",
    stat: "24/7",
    statLabel: "disponibilité",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
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
    desc: "Facturation, relances, onboarding, reporting — tout tourne sans vous.",
    keyword: "AUTOMATION",
    stat: "-73%",
    statLabel: "temps manuel",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <path d="M6 16h6m8 0h6M16 6v6m0 8v6" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4a12 12 0 110 24 12 12 0 010-24z" strokeDasharray="4 3" />
      </svg>
    ),
  },
  {
    title: "Génération de contenus",
    desc: "Posts, emails, fiches produits, SEO — 10 min au lieu de 3 heures.",
    keyword: "CONTENU",
    stat: "x20",
    statLabel: "plus rapide",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M10 10h12M10 14h12M10 18h8" />
      </svg>
    ),
  },
  {
    title: "CRM intelligent",
    desc: "Votre base se met à jour et se relance toute seule. Aucun lead oublié.",
    keyword: "CRM",
    stat: "0",
    statLabel: "lead perdu",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="16" cy="10" r="4" />
        <circle cx="8" cy="22" r="3" />
        <circle cx="24" cy="22" r="3" />
        <path d="M12.5 13l-2.5 6M19.5 13l2.5 6M11 22h10" />
      </svg>
    ),
  },
  {
    title: "Dashboards & Analyse",
    desc: "Toutes vos données sur un écran. Décision en 30 secondes.",
    keyword: "DASHBOARD",
    stat: "1",
    statLabel: "seul écran",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <rect x="8" y="16" width="4" height="8" rx="1" fill="currentColor" opacity={0.3} />
        <rect x="14" y="12" width="4" height="12" rx="1" fill="currentColor" opacity={0.5} />
        <rect x="20" y="8" width="4" height="16" rx="1" fill="currentColor" opacity={0.7} />
      </svg>
    ),
  },
  {
    title: "Formation de vos équipes",
    desc: "Votre équipe maîtrise les outils qu'on installe. Zéro dépendance.",
    keyword: "FORMATION",
    stat: "100%",
    statLabel: "autonomie",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 4l12 6-12 6-12-6 12-6z" />
        <path d="M4 10v8l12 6 12-6v-8" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-sm font-semibold text-[#007AFF] uppercase tracking-wider">
            Nos services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            On installe l&apos;IA dans votre entreprise.{" "}
            <span className="text-white/30">Cl&eacute; en main.</span>
          </h2>
        </motion.div>

        {/* Bento grid — 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.keyword}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl border border-white/[0.06] p-7 cursor-pointer transition-all duration-500 overflow-hidden"
              style={{
                background: hoveredIndex === i
                  ? "linear-gradient(135deg, rgba(0,122,255,0.08) 0%, rgba(0,122,255,0.02) 100%)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              {/* Top row — icon + stat */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${
                  hoveredIndex === i ? "bg-[#007AFF]/20 text-[#007AFF]" : "bg-white/[0.04] text-white/40"
                }`}>
                  {service.icon}
                </div>
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-right"
                    >
                      <p className="text-2xl font-black text-[#007AFF]">{service.stat}</p>
                      <p className="text-[10px] text-white/30 uppercase tracking-wider">{service.statLabel}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Keyword */}
              <p className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase mb-2">
                {service.keyword}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#007AFF] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-white/40 leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom border glow on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                animate={{
                  background: hoveredIndex === i
                    ? "linear-gradient(90deg, transparent, #007AFF, transparent)"
                    : "linear-gradient(90deg, transparent, transparent, transparent)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#calendly"
            className="inline-flex items-center gap-2 rounded-full bg-[#007AFF] px-8 py-4 text-base font-semibold text-white hover:bg-[#0055D4] transition-all hover:shadow-xl hover:shadow-blue-900/30"
          >
            D&eacute;couvrir ce qu&apos;on peut faire pour vous
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
