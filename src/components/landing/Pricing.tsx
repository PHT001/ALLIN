"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "paiement unique",
    description: "Pour découvrir le monde de l'IA",
    popular: false,
    features: [
      "Guide PDF complet",
      "Checklist de lancement",
      "Templates de base",
      "Accès Discord communautaire",
      "Mises à jour gratuites",
    ],
    notIncluded: [
      "Accès plateforme de cours",
      "Assistant IA intégré",
      "Visios individuelles",
    ],
    cta: "Commencer",
  },
  {
    name: "Academy",
    price: "397",
    period: "paiement unique",
    description: "La formation complète pour lancer ton agence",
    popular: true,
    features: [
      "Tout le pack Starter",
      "80 leçons vidéo & texte",
      "Quiz & exercices pratiques",
      "Assistant IA intégré",
      "Plateforme complète",
      "Pipeline CRM",
      "Templates IA premium",
      "Générateur de projets",
      "Gamification (XP, streaks, badges)",
      "Programme de parrainage",
    ],
    notIncluded: ["Visios individuelles"],
    cta: "Rejoindre l'Academy",
  },
  {
    name: "One-to-One",
    price: "997",
    period: "paiement unique",
    description: "Accompagnement personnalisé premium",
    popular: false,
    features: [
      "Tout le pack Academy",
      "4 visios individuelles (1h)",
      "Review de tes projets",
      "Support prioritaire",
      "Réseau privé VIP",
      "Accès à vie aux mises à jour",
    ],
    notIncluded: [],
    cta: "Postuler",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Tarifs
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Choisis ta formule
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Investis dans toi. Rentabilise dès le premier mois.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl bg-white p-8 lg:p-10 ${
                plan.popular
                  ? "border-2 border-[#FF1744] shadow-xl shadow-red-100 lg:scale-105 lg:-my-4 z-10"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[#FF1744] px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#111]">{plan.name}</h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight text-[#111]">
                    {plan.price}
                  </span>
                  <span className="text-lg font-medium text-[#6B7280]">€</span>
                </div>
                <p className="text-sm text-[#6B7280] mt-1">{plan.period}</p>
              </div>

              <a
                href="#"
                className={`block w-full text-center rounded-full py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-[#FF1744] text-white hover:bg-[#D50000] hover:shadow-lg hover:shadow-red-200"
                    : "bg-[#111] text-white hover:bg-[#333]"
                }`}
              >
                {plan.cta}
              </a>

              <div className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-[#FF1744] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-[#111]">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-40">
                    <svg
                      className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-sm text-[#6B7280]">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-[#6B7280]">
            <svg
              className="h-6 w-6 text-[#FF1744]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <span className="text-sm font-medium">
              Satisfait ou remboursé — 14 jours, sans condition
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
