"use client";

import { motion } from "framer-motion";
import AuditAnimation from "./AuditAnimation";
import PlanAnimation from "./PlanAnimation";
import DeployAnimation from "./DeployAnimation";

const steps = [
  {
    num: "01",
    title: "Audit gratuit",
    subtitle: "On scanne vos process en 30 min",
    icon: "🔍",
    Animation: AuditAnimation,
  },
  {
    num: "02",
    title: "Plan d'action",
    subtitle: "ROI chiffré + roadmap sur-mesure",
    icon: "📋",
    Animation: PlanAnimation,
  },
  {
    num: "03",
    title: "Déploiement",
    subtitle: "Clé en main en 30 jours",
    icon: "🚀",
    Animation: DeployAnimation,
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-[#007AFF] uppercase tracking-wider">
            Processus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            3 &eacute;tapes. 30 jours. C&apos;est tout.
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col"
            >
              {/* Step header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center shadow-md shadow-blue-200">
                  <span className="text-sm font-black text-white">{step.num}</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#111]">{step.title}</p>
                  <p className="text-sm text-[#6B7280]">{step.subtitle}</p>
                </div>
              </div>

              {/* Animation card */}
              <div className="flex-1">
                <step.Animation />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA with floating video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center mt-14"
        >
          {/* Floating video behind */}
          <div className="relative w-36 sm:w-44 -mb-14 overflow-hidden" style={{ maskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)', WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)' }}>
            <video autoPlay loop muted playsInline className="w-full h-auto block" style={{ display: 'none' }} onLoadedData={(e) => { (e.target as HTMLVideoElement).style.display = 'block'; }}>
              <source src="/images/floatting.mp4" type="video/mp4" />
            </video>
          </div>
          <a
            href="#calendly"
            className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#007AFF] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#0055D4] hover:shadow-xl hover:shadow-blue-200"
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
