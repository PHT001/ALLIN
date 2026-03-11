"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Articles IA automatisés",
    desc: "Génère du contenu SEO optimisé pour les sites de tes clients. Blog posts, fiches produits, pages de vente — en quelques minutes.",
    price: "500–1 500€",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Chatbots sur mesure",
    desc: "Déploie des chatbots intelligents qui répondent aux questions clients 24/7. Support, prise de RDV, qualification de leads.",
    price: "800–2 500€",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Sites web en 2h",
    desc: "Crée des sites vitrines professionnels avec l'IA en un temps record. Landing pages, sites e-commerce, portfolios.",
    price: "1 000–3 000€",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automatisations business",
    desc: "Automatise les tâches répétitives : facturation, relances, reporting. Tes clients gagnent des heures chaque semaine.",
    price: "500–2 000€",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Agents IA 24/7",
    desc: "Déploie des agents autonomes qui travaillent pendant que tes clients dorment. Veille concurrentielle, analyse de données, prospection.",
    price: "1 500–5 000€",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Support client intelligent",
    desc: "Transforme le service client de tes clients avec des assistants IA qui comprennent le contexte et résolvent les problèmes.",
    price: "800–2 000€",
  },
];

export default function Features() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#F8F9FA] overflow-hidden">
      {/* Decorative mascot subtle */}
      <div className="absolute top-16 right-8 lg:right-16 opacity-[0.04] pointer-events-none">
        <Image
          src="/images/mascot-robot.png"
          alt=""
          width={200}
          height={200}
          className="w-32 lg:w-48"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
            Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Pourquoi Claude + OpenClaw
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            6 services IA que tu pourras vendre dès la fin de la formation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:border-[#FF1744]/20 hover:shadow-lg hover:shadow-red-50 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-[#FF1744]/5 flex items-center justify-center text-[#FF1744] mb-6 group-hover:bg-[#FF1744]/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                {feature.desc}
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF1744]/5 px-4 py-1.5 text-sm font-semibold text-[#FF1744]">
                Les clients paient {feature.price} pour ça
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
