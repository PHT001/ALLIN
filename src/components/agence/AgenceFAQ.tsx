"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Est-ce que l'IA va remplacer mes employés ?",
    a: "Non. L'IA ne remplace pas vos équipes — elle les libère des tâches répétitives et chronophages. Vos collaborateurs pourront se concentrer sur ce qui a vraiment de la valeur : la relation client, la stratégie, la créativité. C'est un multiplicateur de force, pas un remplacement.",
  },
  {
    q: "C'est compliqué à mettre en place ?",
    a: "Pas du tout. On s'occupe de tout : installation, configuration, tests, formation de vos équipes. Vous n'avez rien à installer, rien à coder, rien à maintenir. Notre objectif est que vos systèmes tournent en 30 jours, sans friction.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque projet est sur-mesure, donc le coût dépend de vos besoins. L'audit gratuit de 30 minutes permet de chiffrer précisément : combien ça coûte ET combien ça vous fait économiser. La plupart de nos clients ont un ROI positif dès le premier mois.",
  },
  {
    q: "Et si ça ne marche pas ?",
    a: "On garantit des résultats mesurables. On définit ensemble des KPIs clairs avant de commencer (temps gagné, coûts réduits, taux de conversion). Si les objectifs ne sont pas atteints, on ajuste jusqu'à ce que ça fonctionne.",
  },
  {
    q: "Mon secteur est trop spécifique pour l'IA",
    a: "On a accompagné plus de 15 secteurs différents : BTP, immobilier, santé, e-commerce, restauration, logistique, cabinets comptables... L'IA s'adapte à tout. Et c'est justement notre job de l'adapter à votre métier.",
  },
  {
    q: "Je n'y connais rien en IA",
    a: "C'est exactement pour ça qu'on existe. Zéro jargon technique, que du concret. On vous explique tout en termes de résultats business : temps gagné, argent économisé, clients gagnés. Pas besoin de comprendre comment ça marche sous le capot.",
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
            open ? "bg-[#FF1744] text-white rotate-45" : "bg-gray-100 text-[#6B7280]"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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
            <p className="pb-6 text-[#6B7280] leading-relaxed max-w-3xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AgenceFAQ() {
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
            Questions fr&eacute;quentes
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
