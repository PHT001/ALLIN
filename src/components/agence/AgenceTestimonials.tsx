"use client";

import { motion } from "framer-motion";

const row1 = [
  {
    quote: "OpexIA a installé un chatbot sur notre site en 5 jours. On est passé de 24h de réponse à 2 minutes. Nos leads n'attendent plus.",
    name: "Laurent M.",
    role: "Directeur, Agence Immobilière",
    result: "+40% de conversion",
  },
  {
    quote: "On envoyait nos devis en 48h. Maintenant c'est 2h, automatiquement. On a signé 3 clients de plus le premier mois.",
    name: "Sophie D.",
    role: "Gérante, Cabinet Comptable",
    result: "3 clients supplémentaires",
  },
  {
    quote: "Je pensais que l'IA c'était compliqué. Leur équipe a tout installé en 3 semaines sans qu'on touche à rien. Impressionnant.",
    name: "Marc T.",
    role: "PDG, PME Logistique",
    result: "47h/mois gagnées",
  },
  {
    quote: "Le reporting automatique nous fait gagner une journée entière par semaine. Mon équipe peut enfin se concentrer sur les clients.",
    name: "Julie R.",
    role: "Directrice Marketing",
    result: "-80% temps reporting",
  },
  {
    quote: "On a automatisé tout notre onboarding client. Ce qui prenait 3h prend maintenant 15 minutes. Et c'est plus fiable.",
    name: "Thomas B.",
    role: "Fondateur, SaaS B2B",
    result: "ROI x8 en 3 mois",
  },
];

const row2 = [
  {
    quote: "Leurs dashboards IA me donnent une vision claire de mon business en 30 secondes. Avant je passais 2h par jour sur Excel.",
    name: "Pierre L.",
    role: "CEO, E-commerce",
    result: "2h/jour économisées",
  },
  {
    quote: "L'automatisation des relances clients a augmenté notre taux de recouvrement de 35%. C'est fou.",
    name: "Nathalie F.",
    role: "DAF, Groupe BTP",
    result: "+35% recouvrement",
  },
  {
    quote: "On génère 200 fiches produits par semaine au lieu de 20. La qualité est constante et le SEO suit.",
    name: "Antoine K.",
    role: "Responsable e-commerce",
    result: "x10 productivité contenu",
  },
  {
    quote: "Le chatbot a réduit nos tickets support de 60%. Mon équipe ne gère plus que les cas complexes.",
    name: "Claire V.",
    role: "Head of Support",
    result: "-60% tickets support",
  },
  {
    quote: "L'audit gratuit m'a ouvert les yeux sur tout ce qu'on perdait. En 30 minutes ils avaient identifié 50h/mois d'économies.",
    name: "David H.",
    role: "DG, Groupe Hôtelier",
    result: "50h/mois identifiées",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FF1744]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof row1)[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-white rounded-2xl border border-gray-100 p-6 mx-3">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-semibold text-gray-500 text-sm">
          {t.name[0]}
        </div>
        <div>
          <div className="text-sm font-bold text-[#111]">{t.name}</div>
          <div className="text-xs text-[#6B7280]">{t.role}</div>
        </div>
      </div>
      <Stars />
      <p className="mt-3 text-sm text-[#374151] leading-relaxed">{t.quote}</p>
      <div className="mt-4 pt-3 border-t border-gray-50">
        <span className="text-xs font-semibold text-[#FF1744]">{t.result}</span>
      </div>
    </div>
  );
}

export default function AgenceTestimonials() {
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];

  return (
    <section className="py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            T&eacute;moignages
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ce qu&apos;en disent nos clients
          </h2>
        </motion.div>
      </div>

      {/* Row 1 → right */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-right">
          {marquee1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 → left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee-left">
          {marquee2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
