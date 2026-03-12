"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FormationBridge() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glass dark card */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 lg:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(20,20,20,0.95) 100%)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Glass highlight */}
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF1744]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FF1744]/15 border border-[#FF1744]/30 px-4 py-1.5 text-xs font-semibold text-[#FF5252] mb-6">
                Formation disponible
              </span>

              <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Vous pr&eacute;f&eacute;rez apprendre &agrave; le faire
                <br />
                <span className="text-white/40">vous-m&ecirc;me ?</span>
              </h2>

              <p className="mt-4 text-base lg:text-lg text-white/50 leading-relaxed max-w-xl">
                On a cr&eacute;&eacute; une formation compl&egrave;te pour ma&icirc;triser l&apos;IA dans votre business — m&ecirc;me si vous partez de z&eacute;ro. 13 modules, 74 le&ccedil;ons, un assistant IA int&eacute;gr&eacute;.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {[
                  "13 modules structurés",
                  "74 leçons interactives",
                  "Assistant IA intégré",
                  "Accès à vie",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-xs text-white/60 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5"
                  >
                    <svg className="h-3 w-3 text-[#FF1744]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.08] transition-all"
                >
                  D&eacute;couvrir la formation
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
