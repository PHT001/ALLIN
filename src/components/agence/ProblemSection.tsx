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

        {/* Pain points — inline stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row items-start justify-center gap-6 sm:gap-12 lg:gap-20 mb-8 sm:mb-12 max-w-3xl mx-auto"
        >
          {painPoints.map((point, i) => (
            <div key={point.stat} className="flex flex-col items-center text-center flex-1">
              <p className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111] leading-none">
                {point.stat}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#007AFF] mt-1">{point.unit}</p>
              <p className="text-[#9CA3AF] text-xs sm:text-sm mt-2 leading-snug">{point.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
