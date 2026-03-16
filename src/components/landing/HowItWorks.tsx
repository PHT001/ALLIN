"use client";

import { motion } from "framer-motion";
import ChatbotAnimation from "./ChatbotAnimation";
import ProjectBuilderAnimation from "./ProjectBuilderAnimation";
import AgencyLaunchAnimation from "./AgencyLaunchAnimation";

const steps = [
  {
    num: "01",
    title: "Apprends les fondamentaux",
    desc: "Ma\u00eetrise le prompt engineering, les LLMs et les bases de l'IA appliqu\u00e9e au business. Tu pars de z\u00e9ro ? Parfait. Nos 74 le\u00e7ons sont con\u00e7ues pour \u00e7a.",
    features: ["15 modules structurés", "Quiz interactifs", "Assistant IA intégré"],
  },
  {
    num: "02",
    title: "Crée tes premiers projets IA",
    desc: "Construis des chatbots, des sites web et des automatisations avec les meilleurs outils IA. Tu auras un portfolio complet de services \u00e0 vendre.",
    features: ["Exercices pratiques", "Templates prêts à l'emploi", "Projets réels"],
  },
  {
    num: "03",
    title: "Lance ton agence et facture",
    desc: "Utilise notre pipeline CRM et nos stratégies de prospection pour trouver tes premiers clients. Les entreprises locales n'attendent que toi.",
    features: ["Pipeline CRM intégré", "Scripts de prospection", "Modèles de devis"],
  },
];

export default function HowItWorks() {
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
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            3 étapes simples pour passer de débutant à freelance IA rentable
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
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
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
                        <svg
                          className="h-3.5 w-3.5 text-[#FF1744]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow connector — mobile only */}
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center lg:hidden -my-4"
              >
                <motion.svg
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  width="28" height="40" viewBox="0 0 28 40" fill="none"
                >
                  <path d="M14 4V32" stroke="#FF1744" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M6 24L14 34L22 24" stroke="#FF1744" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.div>

              {/* Visual side */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} scale-[0.85] origin-top lg:scale-100`}>
                {i === 0 ? (
                  <ChatbotAnimation />
                ) : i === 1 ? (
                  <ProjectBuilderAnimation />
                ) : (
                  <AgencyLaunchAnimation />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
