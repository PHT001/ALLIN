"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-[#FAFAFA]">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
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

            {/* Founders trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3.5 rounded-full bg-[#3A3A3A] pl-2 pr-5 py-2">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full border-2 border-[#3A3A3A] overflow-hidden">
                    <Image
                      src="/images/founder-marius.png"
                      alt="Marius"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-[#3A3A3A] overflow-hidden">
                    <Image
                      src="/images/founder-igor.jpg"
                      alt="Igor"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-white text-sm font-semibold">Fond&eacute; par Marius &amp; Igor</p>
                    <div className="flex gap-0.5 ml-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
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
      </div>
    </section>
  );
}
