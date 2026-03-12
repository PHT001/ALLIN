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

/* Animated mesh gradient blob */
function MeshBlob() {
  return (
    <div className="relative w-full h-full">
      {/* Main blob */}
      <motion.div
        className="absolute inset-0"
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 30% 70% / 60% 40% 60% 40%",
            "70% 30% 50% 50% / 40% 60% 40% 60%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, #FF1744 0%, #FF5252 25%, #FF8A80 50%, #FF1744 75%, #D50000 100%)",
          filter: "blur(1px)",
        }}
      />
      {/* Inner pulse */}
      <motion.div
        className="absolute inset-4"
        animate={{
          borderRadius: [
            "50% 50% 30% 70% / 60% 40% 60% 40%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 50% 50% / 40% 60% 40% 60%",
            "50% 50% 30% 70% / 60% 40% 60% 40%",
          ],
          scale: [0.9, 1, 0.95, 0.9],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(225deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
        }}
      />
      {/* Stats inside blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl lg:text-8xl font-black"
          >
            x6
          </motion.p>
          <p className="text-sm font-medium text-white/80 mt-1">ROI moyen</p>
        </div>
      </div>
    </div>
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
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-[#FAFAFA]">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT — Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-md bg-[#0A0A0A] px-3 py-1.5 text-xs font-semibold text-white mb-8 tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF1744] animate-pulse" />
                Agence d&apos;infrastructure IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-6"
            >
              Vos concurrents
              <br />
              <span className="inline-block min-w-[260px] sm:min-w-[320px]">
                <AnimatePresence mode="wait">
                  <TypewriterWord key={wordIndex} word={rotatingWords[wordIndex]} />
                </AnimatePresence>
              </span>
              <br />
              d&eacute;j&agrave;. <span className="text-[#9CA3AF]">Pas vous.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[#6B7280] max-w-lg mb-8 leading-relaxed"
            >
              On installe des syst&egrave;mes d&apos;IA dans votre entreprise pour &eacute;liminer les t&acirc;ches r&eacute;p&eacute;titives, r&eacute;duire vos co&ucirc;ts et lib&eacute;rer votre &eacute;quipe — en moins de 30 jours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
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
              <a href="#resultats" className="text-[#6B7280] text-sm font-medium hover:text-[#111] transition-colors flex items-center gap-1.5 py-4">
                Voir les r&eacute;sultats &darr;
              </a>
            </motion.div>

            {/* Stat bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 border-t border-gray-200 pt-6"
            >
              {[
                { num: "47", label: "entreprises" },
                { num: "2 400h", label: "économisées/mois" },
                { num: "30j", label: "pour déployer" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-[#111]">{stat.num}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Animated mesh blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[420px] h-[420px] mx-auto">
              {/* Shadow */}
              <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/10 rounded-full blur-2xl" />
              <MeshBlob />
            </div>

            {/* Floating micro-cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3"
            >
              <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">Temps gagn&eacute;</p>
              <p className="text-lg font-black text-[#111]">-73%</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3"
            >
              <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider">Co&ucirc;ts r&eacute;duits</p>
              <p className="text-lg font-black text-[#FF1744]">-45%</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 bg-[#0A0A0A] rounded-xl shadow-lg px-4 py-3"
            >
              <p className="text-[10px] text-white/50 uppercase tracking-wider">Satisfaction</p>
              <p className="text-lg font-black text-white">98%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
