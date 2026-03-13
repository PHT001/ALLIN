"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import LazyVideo from "@/components/ui/LazyVideo";

function AnimatedCounter({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const painPoints = [
  {
    stat: "3h",
    unit: "/ jour",
    label: "perdues en tâches répétitives",
    icon: (
      <svg className="h-6 w-6 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    stat: "48h",
    unit: "de délai",
    label: "pour un devis — vos concurrents : 2h",
    icon: (
      <svg className="h-6 w-6 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    stat: "3",
    unit: "salariés",
    label: "sur un travail que l'IA fait en 10 min",
    icon: (
      <svg className="h-6 w-6 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header — centered, punchy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#007AFF] uppercase tracking-wider mb-4">
            Le probl&egrave;me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Vous perdez du temps et de l&apos;argent{" "}
            <span className="text-[#9CA3AF]">sans le savoir.</span>
          </h2>
        </motion.div>

        {/* Horloge video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-40 sm:w-48 overflow-hidden" style={{ maskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)', WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at center, black 40%, transparent 95%)' }}>
            <LazyVideo src="/images/horloge.mp4" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* 3 pain point cards — clean, same style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.stat}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl bg-[#F7F8FA] border border-gray-100 p-7 text-center group hover:border-[#007AFF]/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="h-11 w-11 rounded-xl bg-[#007AFF]/10 flex items-center justify-center">
                  {point.icon}
                </div>
              </div>
              <p className="text-4xl lg:text-5xl font-black text-[#111] leading-none">
                {point.stat}
                <span className="text-lg font-semibold text-[#6B7280] ml-1">{point.unit}</span>
              </p>
              <p className="text-[#6B7280] text-sm mt-3 leading-relaxed">{point.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Big stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#0A0A0A] p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Pourtant</p>
            <p className="text-4xl lg:text-6xl font-black text-[#007AFF] leading-none">
              <AnimatedCounter target={88} suffix="%" />
            </p>
            <p className="text-white/40 text-sm mt-1">des entreprises IA voient leur CA augmenter</p>
            <p className="text-[#007AFF]/50 text-xs mt-2 font-medium">Source : NVIDIA, State of AI Report, 2026</p>
          </div>
          <div className="hidden md:block h-16 w-px bg-white/10" />
          <p className="text-white/60 text-base max-w-sm text-center md:text-left leading-relaxed">
            Vos concurrents automatisent d&eacute;j&agrave;. <strong className="text-white">Chaque semaine qui passe creuse l&apos;&eacute;cart.</strong>
          </p>
          <a
            href="#calendly"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0055D4] transition-all"
          >
            Lancer mon audit
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
