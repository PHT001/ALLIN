"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const rotatingWords = ["automatisent", "économisent", "accélèrent", "dominent"];

function TypewriterWord({ word }: { word: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inline-flex text-[#FF1744]"
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.04, delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[3px] h-[0.9em] bg-[#FF1744] ml-0.5 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
      />
    </motion.span>
  );
}

export default function AgenceHero() {
  const [wordIndex, setWordIndex] = useState(0);

  const nextWord = useCallback(() => {
    setWordIndex((prev) => (prev + 1) % rotatingWords.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextWord, 3000);
    return () => clearInterval(interval);
  }, [nextWord]);

  return (
    <section className="relative flex items-center pt-28 pb-8 overflow-hidden min-h-[90vh]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-red-50/30 pointer-events-none" />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute top-20 right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,23,68,0.08) 0%, transparent 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,23,68,0.05) 0%, transparent 70%)" }}
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-[#FF1744] mb-8">
              <span className="h-2 w-2 rounded-full bg-[#FF1744] animate-pulse" />
              Agence d&apos;infrastructure IA
            </span>
          </motion.div>

          {/* Main headline with typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-6"
          >
            Vos concurrents{" "}
            <span className="inline-block min-w-[280px] sm:min-w-[340px] text-left">
              <AnimatePresence mode="wait">
                <TypewriterWord key={wordIndex} word={rotatingWords[wordIndex]} />
              </AnimatePresence>
            </span>
            <br />
            d&eacute;j&agrave;. <span className="text-[#6B7280] font-normal">Pas vous.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg lg:text-xl text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            On installe des syst&egrave;mes d&apos;intelligence artificielle dans votre entreprise pour &eacute;liminer les t&acirc;ches r&eacute;p&eacute;titives, r&eacute;duire vos co&ucirc;ts et lib&eacute;rer votre &eacute;quipe — en moins de 30 jours.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#calendly"
              className="group inline-flex items-center justify-center rounded-full bg-[#FF1744] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#D50000] hover:shadow-xl hover:shadow-red-200"
            >
              R&eacute;server mon audit gratuit
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#resultats" className="text-[#6B7280] text-sm font-medium hover:text-[#111] transition-colors flex items-center gap-1.5">
              Voir ce que l&apos;IA peut faire pour vous &darr;
            </a>
          </motion.div>

          {/* Social proof pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            {[
              { num: "47", label: "entreprises accompagnées" },
              { num: "2 400h", label: "économisées / mois" },
              { num: "x6", label: "ROI moyen" },
            ].map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-center gap-2 text-xs text-[#6B7280] bg-gray-50 border border-gray-100 rounded-full px-4 py-2"
              >
                <strong className="text-[#111] text-sm font-bold">{stat.num}</strong>
                {stat.label}
              </span>
            ))}
          </motion.div>

          {/* Reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-xs text-[#9CA3AF]"
          >
            Audit gratuit &bull; 30 min &bull; Sans engagement &bull; En visio
          </motion.p>
        </div>
      </div>
    </section>
  );
}
