"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const rotatingWords = ["automatisent", "économisent", "accélèrent", "scalent"];

function TypewriterWord({ word }: { word: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inline-flex text-[#007AFF]"
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
        className="inline-block w-[3px] h-[0.9em] bg-[#007AFF] ml-0.5 align-middle"
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
    <section className="relative flex items-center pt-28 pb-16 overflow-hidden bg-[#FAFAFA]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-md bg-[#0A0A0A] px-3 py-1.5 text-xs font-semibold text-white mb-8 tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#007AFF] animate-pulse" />
                Agence d&apos;automatisation IA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-6"
            >
              Pendant que vous g&eacute;rez le quotidien,
              <br />
              vos concurrents{" "}
              <span className="inline-block">
                <AnimatePresence mode="wait">
                  <TypewriterWord key={wordIndex} word={rotatingWords[wordIndex]} />
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[#6B7280] max-w-lg mx-auto mb-8 leading-relaxed"
            >
              On installe l&apos;IA dans votre entreprise pour &eacute;liminer les t&acirc;ches r&eacute;p&eacute;titives et lib&eacute;rer votre &eacute;quipe — en 30 jours, cl&eacute; en main.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <a
                href="#calendly"
                className="group inline-flex items-center justify-center rounded-full bg-[#007AFF] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#0055D4] hover:shadow-xl hover:shadow-blue-200"
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

            {/* Before/After desk transformation video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                {/* Labels */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-bold backdrop-blur-sm">Avant</span>
                </div>
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold backdrop-blur-sm">Apr&egrave;s</span>
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                >
                  <source src="/images/desk-transform.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>

            {/* Founders trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-5 flex flex-col items-center gap-3"
            >
              <div className="inline-flex items-center gap-3.5 rounded-full bg-[#3A3A3A] pl-2 pr-5 py-2">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full border-2 border-[#3A3A3A] overflow-hidden">
                    <Image src="/images/founder-marius.png" alt="Marius" width={40} height={40} className="h-full w-full object-cover" />
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-[#3A3A3A] overflow-hidden">
                    <Image src="/images/founder-igor.jpg" alt="Igor" width={40} height={40} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Fond&eacute; par Marius &amp; Igor</p>
                  <p className="text-gray-400 text-xs flex items-center gap-1">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Paris, France
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stat bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-8 border-t border-gray-200 pt-6"
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
      </div>
    </section>
  );
}
