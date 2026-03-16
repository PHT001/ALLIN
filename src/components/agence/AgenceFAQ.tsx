"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-[#374151]">{children}</strong>
);

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Est-ce que l'IA va remplacer mes employés ?",
    a: <>Non. L&apos;IA ne remplace pas vos équipes — elle les <B>libère des tâches répétitives</B> et chronophages. Vos collaborateurs pourront se concentrer sur ce qui a vraiment de la valeur : la <B>relation client</B>, la <B>stratégie</B>, la <B>créativité</B>. C&apos;est un <B>multiplicateur de force</B>, pas un remplacement.</>,
  },
  {
    q: "C'est compliqué à mettre en place ?",
    a: <>Pas du tout. On s&apos;occupe de tout : installation, configuration, tests, formation de vos équipes. Vous n&apos;avez <B>rien à installer</B>, rien à coder, rien à maintenir. Notre objectif est que vos systèmes tournent en <B>30 jours</B>, sans friction.</>,
  },
  {
    q: "Combien ça coûte ?",
    a: <>Chaque projet est <B>sur-mesure</B>, donc le coût dépend de vos besoins. L&apos;<B>audit gratuit d&apos;1 heure</B> permet de chiffrer précisément : combien ça coûte ET combien ça vous fait économiser. La plupart de nos clients ont un <B>ROI positif dès le premier mois</B>.</>,
  },
  {
    q: "Et si ça ne marche pas ?",
    a: <>On garantit des <B>résultats mesurables</B>. On définit ensemble des <B>KPIs clairs</B> avant de commencer (temps gagné, coûts réduits, taux de conversion). Si les objectifs ne sont pas atteints, on ajuste jusqu&apos;à ce que ça fonctionne.</>,
  },
  {
    q: "Mon secteur est trop spécifique pour l'IA",
    a: <>On a accompagné plus de <B>15 secteurs différents</B> : BTP, immobilier, santé, e-commerce, restauration, logistique, cabinets comptables... <B>L&apos;IA s&apos;adapte à tout</B>. Et c&apos;est justement notre job de l&apos;adapter à votre métier.</>,
  },
  {
    q: "Je n'y connais rien en IA",
    a: <>C&apos;est exactement pour ça qu&apos;on existe. <B>Zéro jargon technique</B>, que du concret. On vous explique tout en termes de <B>résultats business</B> : temps gagné, argent économisé, clients gagnés. Pas besoin de comprendre comment ça marche sous le capot.</>,
  },
];

function FAQItem({ q, a }: { q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base lg:text-lg font-semibold text-[#111] pr-8 group-hover:text-[#007AFF] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all ${
            open ? "bg-[#007AFF] text-white rotate-45" : "bg-gray-100 text-[#6B7280]"
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
    <section id="faq" className="py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#007AFF] uppercase tracking-wider">
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
