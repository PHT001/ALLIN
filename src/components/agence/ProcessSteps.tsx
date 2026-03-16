"use client";

import { motion } from "framer-motion";
import AuditAnimation from "./AuditAnimation";
import PlanAnimation from "./PlanAnimation";
import DeployAnimation from "./DeployAnimation";

const steps = [
  {
    num: "01",
    title: "Audit gratuit (30 min)",
    desc: "On analyse vos process actuels et on identifie les quick wins IA. Vous repartez avec une cartographie claire de ce qui peut \u00eatre automatis\u00e9 \u2014 et combien \u00e7a vous fait gagner.",
    features: ["Analyse de vos workflows", "D\u00e9tection des goulots", "Chiffrage du potentiel"],
  },
  {
    num: "02",
    title: "Plan d'action sur-mesure",
    desc: "On vous pr\u00e9sente exactement quoi automatiser, combien \u00e7a co\u00fbte, et combien \u00e7a rapporte. Pas de jargon, que du concret avec un ROI clair.",
    features: ["Roadmap personnalis\u00e9e", "ROI d\u00e9taill\u00e9 par action", "Priorisation par impact"],
  },
  {
    num: "03",
    title: "Installation & Formation",
    desc: "On d\u00e9ploie les syst\u00e8mes IA, on teste, on forme votre \u00e9quipe. Vous n'avez rien \u00e0 faire. En 30 jours, tout tourne.",
    features: ["D\u00e9ploiement cl\u00e9 en main", "Formation de vos \u00e9quipes", "Support continu"],
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
          <span className="text-sm font-semibold text-[#007AFF] uppercase tracking-wider">
            Processus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {"3 \u00e9tapes. 30 jours. C'est tout."}
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            {"On s'occupe de tout. Votre \u00e9quipe n'a rien \u00e0 installer, rien \u00e0 configurer."}
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
                <span className="text-6xl lg:text-8xl font-black text-[#007AFF]/10">
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
                      <span className="h-6 w-6 rounded-full bg-[#007AFF]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3.5 w-3.5 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
          {/* Floating video behind button */}
          <div className="relative inline-block">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 z-0 w-36 sm:w-44">
              <video autoPlay loop muted playsInline className="w-full h-auto block" style={{ display: 'none' }} onLoadedData={(e) => { (e.target as HTMLVideoElement).style.display = 'block'; }}>
                <source src="/images/floatting.mp4" type="video/mp4" />
              </video>
            </div>
            <a
              href="#calendly"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#007AFF] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#0055D4] hover:shadow-xl hover:shadow-blue-200"
            >
              {"Commencer par l'audit gratuit"}
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
