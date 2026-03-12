"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const cases = [
  {
    sector: "Cabinet Comptable",
    icon: "📊",
    metric: "Saisie de factures",
    before: { value: "4h / jour", detail: "3 employés mobilisés" },
    after: { value: "15 min / jour", detail: "1 seul contrôle humain" },
    saving: "68 000€ / an économisés",
  },
  {
    sector: "Agence Immobilière",
    icon: "🏠",
    metric: "Réponse aux leads",
    before: { value: "24h de délai", detail: "Leads perdus chaque semaine" },
    after: { value: "2 min de délai", detail: "Réponse IA instantanée 24/7" },
    saving: "+40% de taux de conversion",
  },
  {
    sector: "E-commerce",
    icon: "🛒",
    metric: "Fiches produits",
    before: { value: "2h / fiche", detail: "Rédaction + photos + SEO" },
    after: { value: "3 min / fiche", detail: "Génération IA complète" },
    saving: "500 fiches en 1 semaine",
  },
];

function SliderCard({ caseData }: { caseData: (typeof cases)[0] }) {
  const constraintRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(300);

  useEffect(() => {
    if (constraintRef.current) {
      setContainerWidth(constraintRef.current.offsetWidth);
    }
  }, []);

  // Map drag position to reveal percentage
  const revealPercent = useTransform(x, [-containerWidth / 2, containerWidth / 2], [0, 100]);
  const clipAfter = useTransform(revealPercent, (v) => `inset(0 ${100 - v}% 0 0)`);

  // Auto-animate on mount to hint the drag
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(x, 60, { duration: 0.6, ease: "easeOut" }).then(() => {
        animate(x, 0, { duration: 0.4, ease: "easeIn" });
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [x]);

  return (
    <div className="relative rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 pt-5 pb-3 border-b border-gray-50">
        <div className="flex items-center gap-2">
          <span className="text-lg">{caseData.icon}</span>
          <span className="text-sm font-bold text-[#111]">{caseData.sector}</span>
        </div>
        <p className="text-xs text-[#6B7280] mt-1">{caseData.metric}</p>
      </div>

      {/* Slider area */}
      <div ref={constraintRef} className="relative h-[140px] overflow-hidden">
        {/* BEFORE layer (always visible behind) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 px-6">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-2">Avant</p>
            <p className="text-2xl font-black text-[#111]">{caseData.before.value}</p>
            <p className="text-xs text-[#6B7280] mt-1">{caseData.before.detail}</p>
          </div>
        </div>

        {/* AFTER layer (revealed by drag) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] px-6"
          style={{ clipPath: clipAfter }}
        >
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF1744] mb-2">Apr&egrave;s IA</p>
            <p className="text-2xl font-black text-white">{caseData.after.value}</p>
            <p className="text-xs text-white/50 mt-1">{caseData.after.detail}</p>
          </div>
        </motion.div>

        {/* Drag handle */}
        <motion.div
          drag="x"
          dragConstraints={constraintRef}
          dragElastic={0.05}
          style={{ x }}
          className="absolute top-0 bottom-0 left-1/2 -ml-4 w-8 flex items-center justify-center z-20 cursor-grab active:cursor-grabbing"
        >
          <div className="w-1 h-12 bg-[#FF1744] rounded-full shadow-lg shadow-red-500/30 relative">
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 -right-3 flex items-center justify-between">
              <svg className="w-3 h-3 text-[#FF1744]" fill="currentColor" viewBox="0 0 12 12">
                <path d="M8 1L3 6l5 5V1z" />
              </svg>
              <svg className="w-3 h-3 text-[#FF1744]" fill="currentColor" viewBox="0 0 12 12">
                <path d="M4 1l5 5-5 5V1z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer — saving */}
      <div className="px-6 py-3 bg-[#FF1744]/5 border-t border-[#FF1744]/10">
        <p className="text-xs font-bold text-[#FF1744] text-center">{caseData.saving}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="resultats" className="py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            R&eacute;sultats concrets
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Avant / Apr&egrave;s l&apos;IA
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            Glissez pour r&eacute;v&eacute;ler les r&eacute;sultats. Ce sont des cas r&eacute;els de nos clients.
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
              <SliderCard caseData={c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
