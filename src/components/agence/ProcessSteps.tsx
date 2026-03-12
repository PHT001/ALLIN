"use client";

import { motion } from "framer-motion";
import AuditAnimation from "./AuditAnimation";
import PlanAnimation from "./PlanAnimation";
import DeployAnimation from "./DeployAnimation";

const steps = [
  {
    num: "01",
    title: "Audit gratuit",
    duration: "30 min",
    desc: "On analyse vos process actuels et on identifie les quick wins IA.",
    features: ["Analyse de vos workflows", "Détection des goulots", "Chiffrage du potentiel"],
  },
  {
    num: "02",
    title: "Plan d'action",
    duration: "Sur-mesure",
    desc: "On vous présente exactement quoi automatiser, combien ça coûte, et le ROI attendu.",
    features: ["Roadmap personnalisée", "ROI détaillé par action", "Priorisation par impact"],
  },
  {
    num: "03",
    title: "Déploiement",
    duration: "30 jours",
    desc: "On déploie, on teste, on forme votre équipe. Vous n'avez rien à faire.",
    features: ["Installation clé en main", "Formation équipes", "Support continu"],
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Processus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            3 &eacute;tapes. 30 jours. C&apos;est tout.
          </h2>
        </motion.div>

        {/* Horizontal timeline — desktop */}
        <div className="hidden lg:block mb-20">
          {/* Connected line */}
          <div className="relative flex items-center justify-between max-w-3xl mx-auto mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200" />
            <motion.div
              className="absolute top-1/2 left-0 h-[2px] bg-[#FF1744]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.3, type: "spring", stiffness: 300 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-white border-[3px] border-[#FF1744] flex items-center justify-center shadow-lg shadow-red-100">
                  <span className="text-lg font-black text-[#FF1744]">{step.num}</span>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-bold text-[#111]">{step.title}</p>
                  <p className="text-xs text-[#FF1744] font-semibold mt-0.5">{step.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step cards — stacked vertically on mobile, row on desktop */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Mobile step indicator */}
              <div className="flex items-center gap-3 mb-4 lg:hidden">
                <div className="w-10 h-10 rounded-full bg-[#FF1744] flex items-center justify-center">
                  <span className="text-sm font-black text-white">{step.num}</span>
                </div>
                <div>
                  <p className="text-lg font-bold">{step.title}</p>
                  <p className="text-xs text-[#FF1744] font-semibold">{step.duration}</p>
                </div>
              </div>

              {/* Description card */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
                <p className="text-[#6B7280] leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#111]">
                      <svg className="h-4 w-4 text-[#FF1744] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animation card */}
              <div className="scale-[0.92] origin-top">
                {i === 0 ? <AuditAnimation /> : i === 1 ? <PlanAnimation /> : <DeployAnimation />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#calendly"
            className="inline-flex items-center justify-center rounded-full bg-[#FF1744] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-xl hover:shadow-red-200"
          >
            Commencer par l&apos;audit gratuit
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
