"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

const bentoCards = [
  {
    title: "3h / jour",
    subtitle: "perdues à copier-coller entre logiciels",
    icon: "📋",
    span: "col-span-1",
    dark: false,
  },
  {
    title: "50x / semaine",
    subtitle: "le même email envoyé manuellement",
    icon: "📧",
    span: "col-span-1",
    dark: true,
  },
  {
    title: "48h de délai",
    subtitle: "pour envoyer un devis — vos concurrents : 2h",
    icon: "⏳",
    span: "col-span-1 md:col-span-2",
    dark: false,
    featured: true,
  },
  {
    title: "3 salariés",
    subtitle: "mobilisés sur un travail qu'un workflow IA fait en 10 min",
    icon: "👥",
    span: "col-span-1",
    dark: true,
  },
  {
    title: "0 action",
    subtitle: "malgré la conscience que l'IA est indispensable",
    icon: "🔇",
    span: "col-span-1",
    dark: false,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — left-aligned, editorial */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-[#FF1744] uppercase tracking-wider">
              Le probl&egrave;me
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Vous perdez du temps et de l&apos;argent{" "}
              <span className="text-[#9CA3AF]">chaque jour sans le savoir.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Les entreprises qui n&apos;automatisent pas perdent en moyenne <strong className="text-[#111]">23% de productivit&eacute;</strong> face &agrave; celles qui le font.
            </p>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bentoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${card.span} group relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01] ${
                card.dark
                  ? "bg-[#0A0A0A] text-white"
                  : "bg-[#F5F5F5] text-[#111]"
              } ${card.featured ? "border-2 border-[#FF1744]/20" : ""}`}
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className={`text-3xl lg:text-4xl font-black mb-2 ${
                card.featured ? "text-[#FF1744]" : ""
              }`}>
                {card.title}
              </h3>
              <p className={`text-base leading-relaxed ${
                card.dark ? "text-white/50" : "text-[#6B7280]"
              }`}>
                {card.subtitle}
              </p>
              {card.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1744]/5 rounded-full blur-[60px] pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Big stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl bg-[#0A0A0A] p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Productivit&eacute; perdue sans IA</p>
            <p className="text-5xl lg:text-7xl font-black text-[#FF1744]">
              <AnimatedCounter target={23} suffix="%" />
            </p>
          </div>
          <div className="h-px md:h-16 w-full md:w-px bg-white/10" />
          <div className="text-center md:text-left">
            <p className="text-white/70 text-lg max-w-md">
              La question n&apos;est plus &laquo;&nbsp;est-ce que je dois automatiser&nbsp;&raquo; mais <strong className="text-white">&laquo;&nbsp;est-ce que je peux me permettre de ne pas le faire&nbsp;&raquo;</strong>.
            </p>
          </div>
          <a
            href="#calendly"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#FF1744] px-6 py-3 text-sm font-semibold text-white hover:bg-[#D50000] transition-all"
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
