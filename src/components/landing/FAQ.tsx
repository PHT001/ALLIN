"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Est-ce que j'ai besoin de savoir coder ?",
    a: "Non, absolument pas. La formation est conçue pour les débutants complets. On utilise Claude Code pour vibe coder : tu décris ce que tu veux, l'IA code pour toi. Si tu sais utiliser un ordinateur, tu peux construire des apps pro.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "La formation dure 4 semaines. La plupart de nos élèves signent leur premier client entre la semaine 2 et la semaine 4. En moyenne, 14 jours suffisent pour décrocher un premier contrat grâce aux scripts et templates fournis.",
  },
  {
    q: "C'est quoi la différence entre Starter et Academy ?",
    a: "Le Starter te donne les guides et ressources pour comprendre l'IA. L'Academy, c'est la formation complète avec 100 leçons, la plateforme interactive, l'assistant IA, le CRM, et tout ce qu'il faut pour lancer concrètement ton agence.",
  },
  {
    q: "Est-ce que je peux faire ça en parallèle de mon travail ?",
    a: "Oui, la formation est 100% en ligne et accessible à ton rythme. Compte environ 1 à 2 heures par jour. Les leçons sont courtes et actionnables. Tu peux avancer le soir ou le week-end.",
  },
  {
    q: "Le march\u00e9 n\u2019est-il pas d\u00e9j\u00e0 satur\u00e9 ?",
    a: "Moins de 3% des PME europ\u00e9ennes ont d\u00e9j\u00e0 adopt\u00e9 de vraies automatisations IA. Le march\u00e9 est en pleine explosion. Ce n\u2019est pas satur\u00e9 \u2014 c\u2019est vierge. Et les agences IA s\u00e9rieuses sont rarissimes.",
  },
  {
    q: "10k€/mois, c'est réaliste ?",
    a: "Avec les bons outils et la bonne approche, oui. Un site web IA se facture 1 000-3 000€, un chatbot 800-2 500€. Il suffit de 4 à 5 clients par mois pour dépasser les 10k€. La formation te montre exactement comment y arriver.",
  },
  {
    q: "Comment fonctionne la garantie ?",
    a: "C'est simple : si tu n'es pas satisfait dans les 14 jours suivant ton achat, on te rembourse intégralement, sans poser de questions. Zéro risque.",
  },
  {
    q: "Y a-t-il un support si je suis bloqué ?",
    a: "Oui. Tu as accès au Discord communautaire (toutes les offres), à l'assistant IA intégré (Academy), et au support prioritaire avec review de tes projets (One-to-One). Tu n'es jamais seul.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base lg:text-lg font-semibold text-[#111] pr-8 group-hover:text-[#FF1744] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all ${
            open
              ? "bg-[#FF1744] text-white rotate-45"
              : "bg-gray-100 text-[#6B7280]"
          }`}
        >
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
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#6B7280] leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
