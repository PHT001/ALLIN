"use client";

import { motion } from "framer-motion";
import ChatbotAnimation from "./ChatbotAnimation";
import ProjectBuilderAnimation from "./ProjectBuilderAnimation";
import AgencyLaunchAnimation from "./AgencyLaunchAnimation";

const steps = [
  {
    num: "01",
    title: "Apprends les fondamentaux",
    desc: "Maîtrise Claude, le prompt engineering et les bases de l'IA appliquée au business. Tu pars de zéro ? Parfait. Nos 74 leçons sont conçues pour ça.",
    features: ["13 modules structurés", "Quiz interactifs", "Assistant IA intégré"],
  },
  {
    num: "02",
    title: "Crée tes premiers projets IA",
    desc: "Construis des chatbots, des sites web et des automatisations avec OpenClaw. Tu auras un portfolio complet de services à vendre.",
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

              {/* Visual side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
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
