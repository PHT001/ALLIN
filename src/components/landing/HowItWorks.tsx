"use client";

import { motion } from "framer-motion";
import FullJourneyAnimation from "./FullJourneyAnimation";

const steps = [
  {
    num: "01",
    title: "Forme-toi à l'IA",
    desc: "74 leçons, 15 modules, quiz interactifs. Du prompt engineering au déploiement.",
    icon: "📚",
  },
  {
    num: "02",
    title: "Crée tes projets",
    desc: "Chatbots, sites web, automatisations. Un portfolio complet de services à vendre.",
    icon: "🛠️",
  },
  {
    num: "03",
    title: "Trouve tes clients",
    desc: "Pipeline CRM intégré, scripts de prospection, stratégies testées.",
    icon: "🤝",
  },
  {
    num: "04",
    title: "Facture & scale",
    desc: "Modèles de devis, facturation, et stratégies pour scaler ton agence.",
    icon: "💰",
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
            De débutant à freelance IA rentable, tout est inclus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: steps list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FF1744]/10 flex items-center justify-center text-lg">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#FF1744]/50 uppercase tracking-wider">
                      Étape {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: unified animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <FullJourneyAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
