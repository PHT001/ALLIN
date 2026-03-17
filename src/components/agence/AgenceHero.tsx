"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import LazyVideo from "@/components/ui/LazyVideo";

const rotatingWords = ["automatise", "accélère", "transforme", "scale"];

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

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("fr-FR")}{suffix}
    </span>
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
              className="text-[28px] sm:text-5xl lg:text-[52px] font-bold leading-[1.15] tracking-tight mb-6"
            >
              OpexIA, l&apos;agence qui
              <br />
              <span className="inline-block">
                <AnimatePresence mode="wait">
                  <TypewriterWord key={wordIndex} word={rotatingWords[wordIndex]} />
                </AnimatePresence>
              </span>
              <br />
              votre entreprise
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[#6B7280] max-w-lg mx-auto mb-8 leading-relaxed"
            >
              On installe l&apos;IA dans votre entreprise pour <strong className="font-semibold text-[#374151]">&eacute;liminer les t&acirc;ches r&eacute;p&eacute;titives</strong> et <strong className="font-semibold text-[#374151]">lib&eacute;rer votre &eacute;quipe</strong> — en <strong className="font-semibold text-[#374151]">30 jours</strong>, cl&eacute; en main.
            </motion.p>

            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center justify-center gap-2.5 mb-8"
            >
              <Image src="/images/customers.webp" alt="Customers" width={100} height={28} className="h-7 w-auto" />
              <span className="text-sm text-[#6B7280]">
                <strong className="font-semibold text-[#111]">4.9</strong>/5 par <strong className="font-semibold text-[#111]">1783</strong> clients
              </span>
              <Image src="/images/blue-badge.svg" alt="Verified" width={18} height={18} className="h-[18px] w-[18px]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <a
                href="https://calendly.com/opexiapro/audit-ia-gratuit"
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

            {/* Robot mascot video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-44 sm:w-56" style={{ maskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)', WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)' }}>
                <LazyVideo src="/images/iphone.mp4" className="w-full h-auto" />
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
              <div>
                <p className="text-2xl font-black text-[#111]"><AnimatedCounter target={200} suffix="+" /></p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">entreprises</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#111]"><AnimatedCounter target={2400} suffix="h" /></p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">économisées/mois</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#111]"><AnimatedCounter target={30} suffix="j" /></p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">pour déployer</p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
