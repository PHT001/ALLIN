"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "300M", label: "d'emplois menacés par l'IA d'ici 2030" },
  { value: "4.4T$", label: "de valeur ajoutée par l'IA chaque année" },
  { value: "85%", label: "des métiers de 2030 n'existent pas encore" },
];

export default function UrgenceIA() {
  return (
    <section className="relative py-14 lg:py-20 bg-white overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] mb-6">
              L&apos;IA ne va pas te{" "}
              <span className="text-[#FF1744]">remplacer</span>.
              <br />
              <span className="text-gray-500">Quelqu&apos;un qui maîtrise l&apos;IA, oui.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Le marché de l&apos;IA explose. Les entreprises cherchent <strong className="text-gray-900">des prestataires IA</strong> — mais personne n&apos;est formé. <strong className="text-gray-900">Une minorité agit</strong>, les autres regardent.
            </p>

            <p className="text-gray-900 font-semibold text-lg mb-10">
              La question n&apos;est pas <span className="text-[#FF1744]">si</span> tu dois te lancer, mais <span className="text-[#FF1744]">quand</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#FF1744]">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm font-medium text-gray-500 mb-4 text-center">Les secteurs d&apos;activités impactés par l&apos;IA</p>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-gray-200/80 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <Image
                src="/images/graphv3.jpeg"
                alt="Impact de l'IA par secteur d'activité"
                width={500}
                height={500}
                className="w-full"
              />
              <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">Stanford HAI, 2024</span>
                <a
                  href="https://cdn.sanity.io/files/4zrzovbb/website/dc7bcd0224644fce97cecb7f9e68dcd8434b35f1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-1.5 text-[11px] font-medium text-white shadow-[0_2px_0_rgba(0,0,0,0.3)] hover:shadow-[0_1px_0_rgba(0,0,0,0.3)] hover:translate-y-[1px] active:shadow-none active:translate-y-[2px] transition-all"
                >
                  Voir le rapport
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
