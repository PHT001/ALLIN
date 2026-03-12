"use client";

import { motion } from "framer-motion";
import AuditAnimation from "./AuditAnimation";
import PlanAnimation from "./PlanAnimation";
import DeployAnimation from "./DeployAnimation";

const steps = [
  {
    num: "01",
    title: "Audit gratuit (30 min)",
    desc: "On analyse vos process actuels et on identifie les quick wins IA. Vous repartez avec une cartographie claire de ce qui peut être automatisé — et combien ça vous fait gagner.",
    features: ["Analyse de vos workflows", "Détection des goulots", "Chiffrage du potentiel"],
  },
  {
    num: "02",
    title: "Plan d'action sur-mesure",
    desc: "On vous présente exactement quoi automatiser, combien ça coûte, et combien ça rapporte. Pas de jargon, que du concret avec un ROI clair.",
    features: ["Roadmap personnalisée", "ROI détaillé par action", "Priorisation par impact"],
  },
  {
    num: "03",
    title: "Installation & Formation",
    desc: "On déploie les systèmes IA, on teste, on forme votre équipe. Vous n'avez rien à faire. En 30 jours, tout tourne.",
    features: ["Déploiement clé en main", "Formation de vos équipes", "Support continu"],
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="pt-16 lg:pt-20 pb-10 lg:pb-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Processus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            3 &eacute;tapes. 30 jours. C&apos;est tout.
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            On s&apos;occupe de tout. Votre &eacute;quipe n&apos;a rien &agrave; installer, rien &agrave; configurer.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-6xl lg:text-8xl font-black text-[#FF1744]/10">
                  {step.num}
                </span>
                <h3 className="mt-2 text-2xl lg:text-3xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg text-[#6B7280] leading-relaxed">
                  {step.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {step.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#111]">
                      <span className="h-6 w-6 rounded-full bg-[#FF1744]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3.5 w-3.5 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual side */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} scale-[0.9] origin-top lg:scale-100`}>
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
