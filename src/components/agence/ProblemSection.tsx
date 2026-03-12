"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const manifesto = [
  { text: "Vos équipes copient-collent.", muted: true },
  { text: "Vos emails se répètent.", muted: true },
  { text: "Vos devis partent trop tard.", muted: true },
  { text: "Et vos concurrents, eux, automatisent tout.", accent: true },
];

const pains = [
  {
    num: "01",
    statement: "3h par jour à copier des données entre logiciels.",
    punchline: "Un système IA le fait en 10 secondes.",
  },
  {
    num: "02",
    statement: "Les mêmes emails envoyés 50 fois par semaine.",
    punchline: "Votre IA les personnalise et les envoie seule.",
  },
  {
    num: "03",
    statement: "48h pour envoyer un devis. Votre concurrent répond en 2h.",
    punchline: "Devinez qui signe le client.",
  },
  {
    num: "04",
    statement: "3 salariés pour un travail qu'un workflow IA fait en 10 minutes.",
    punchline: "Et ils pourraient travailler sur ce qui compte vraiment.",
  },
  {
    num: "05",
    statement: "Vous savez que l'IA existe.",
    punchline: "Mais vous ne savez pas par où commencer.",
  },
];

function AnimatedStat({ target, suffix }: { target: number; suffix: string }) {
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
      {count}
      {suffix}
    </span>
  );
}

export default function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Manifesto */}
        <div className="mb-20 lg:mb-28">
          {manifesto.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${
                line.accent
                  ? "text-[#FF1744] mt-4"
                  : line.muted
                  ? "text-white/25"
                  : "text-white"
              }`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Pain points */}
        <div className="space-y-0">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border-t border-white/[0.06] py-8 lg:py-10 flex gap-6 lg:gap-10 items-baseline"
            >
              <span className="text-[11px] font-mono text-white/15 tracking-widest flex-shrink-0">
                {pain.num}
              </span>
              <div>
                <p className="text-white/90 text-lg lg:text-xl font-medium leading-snug">
                  {pain.statement}
                </p>
                <p className="text-white/30 text-lg lg:text-xl font-medium leading-snug mt-1">
                  {pain.punchline}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Shock stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <span className="text-5xl lg:text-7xl font-black text-[#FF1744]">
              <AnimatedStat target={23} suffix="%" />
            </span>
            <p className="text-white/40 text-sm lg:text-base font-medium max-w-xs">
              de productivit&eacute; perdue par les entreprises qui n&apos;automatisent pas
            </p>
            <p className="text-white/15 text-xs">Source : McKinsey Global Institute</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
