"use client";

import { motion } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

const painPoints = [
  {
    stat: "3h/jour",
    label: "perdues en tâches répétitives",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stat: "68 000€",
    label: "de coûts évitables par an",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    stat: "48h",
    label: "de délai moyen de réponse",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-sm font-semibold text-[#007AFF] uppercase tracking-wider mb-3">
            Le probl&egrave;me
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Vous perdez du temps et de l&apos;argent{" "}
            <span className="text-[#9CA3AF]">sans le savoir.</span>
          </h2>
        </div>

        {/* Horloge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-14"
        >
          <div className="relative w-24 sm:w-36 overflow-hidden" style={{ maskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)', WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)' }}>
            <LazyVideo src="/images/horloge.mp4" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* Pain point cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center rounded-2xl border border-gray-100 bg-gray-50/50 p-4 sm:p-6"
            >
              <div className="flex justify-center text-[#007AFF] mb-2">
                {point.icon}
              </div>
              <p className="text-xl sm:text-2xl font-black text-[#111]">{point.stat}</p>
              <p className="mt-1 text-xs sm:text-sm text-[#6B7280]">{point.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
