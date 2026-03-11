"use client";

import { motion } from "framer-motion";

const weeks = [
  {
    num: 1,
    title: "Fondations IA & Claude",
    lessons: "7 leçons",
    points: [
      "Comprendre l'IA et ses applications business",
      "Maîtriser l'interface Claude",
      "Premiers prompts efficaces",
      "Cas d'usage pour entreprises locales",
    ],
    result: "Tu comprends l'IA et tu sais utiliser Claude comme un pro",
  },
  {
    num: 2,
    title: "Prompt Engineering & Skills Claude",
    lessons: "7 leçons",
    points: [
      "Techniques avancées de prompt engineering",
      "Créer des skills réutilisables",
      "Automatiser des workflows complexes",
      "Optimiser la qualité des outputs",
    ],
    result: "Tu crées des prompts qui produisent des résultats professionnels",
  },
  {
    num: 3,
    title: "Installer & Configurer OpenClaw",
    lessons: "8 leçons",
    points: [
      "Installation et setup complet",
      "Créer tes premiers projets clients",
      "Déployer des chatbots et sites web",
      "Intégrer les APIs et automatisations",
    ],
    result: "Tu as un portfolio de projets prêts à vendre",
  },
  {
    num: 4,
    title: "Sécuriser OpenClaw & Lancer",
    lessons: "6 leçons",
    points: [
      "Sécurité et bonnes pratiques",
      "Stratégies de prospection client",
      "Pricing et négociation",
      "Scaler ton agence IA",
    ],
    result: "Tu es prêt à signer tes premiers clients",
  },
];

export default function Program() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Programme
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            4 semaines pour tout changer
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            74 leçons, 13 modules — du débutant complet au freelance IA rentable
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF1744]/20 via-[#FF1744]/40 to-[#FF1744]/20" />

          <div className="space-y-16">
            {weeks.map((week, i) => (
              <motion.div
                key={week.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 lg:pl-20"
              >
                {/* Circle on timeline */}
                <div className="absolute left-3 lg:left-5 top-1 h-7 w-7 rounded-full border-2 border-[#FF1744] bg-white flex items-center justify-center">
                  <span className="text-xs font-bold text-[#FF1744]">
                    {week.num}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold">
                      Semaine {week.num}
                    </h3>
                    <span className="text-xs font-medium text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">
                      {week.lessons}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-[#111] mb-4">
                    {week.title}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {week.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-[#6B7280]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF1744]/40 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF1744]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {week.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
