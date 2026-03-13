"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { label: "Temps gagné", value: 73, suffix: "%", icon: "⏱️" },
  { label: "Coûts réduits", value: 45, suffix: "%", icon: "💰" },
  { label: "Productivité", value: 320, suffix: "%", icon: "📈" },
  { label: "Satisfaction", value: 98, suffix: "%", icon: "⭐" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 1500;
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function PlanAnimation() {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      setShowAfter(false);
      await new Promise((r) => setTimeout(r, 1500));
      setShowAfter(true);
      await new Promise((r) => setTimeout(r, 5000));
    };
    sequence();
    const interval = setInterval(sequence, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-white border border-gray-100 p-6 overflow-hidden shadow-sm" style={{ height: 380 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#007AFF]/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#111]">Plan d&apos;action</span>
        </div>
        <motion.span
          animate={{ backgroundColor: showAfter ? "#007AFF" : "#E5E7EB" }}
          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
          style={{ color: showAfter ? "white" : "#9CA3AF" }}
        >
          {showAfter ? "Après IA" : "Avant"}
        </motion.span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            animate={{
              backgroundColor: showAfter ? "rgb(239, 246, 255)" : "rgb(249, 250, 251)",
              borderColor: showAfter ? "rgba(0,122,255,0.15)" : "rgb(243, 244, 246)",
            }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-xl border p-4 text-center"
          >
            <span className="text-lg mb-1 block">{m.icon}</span>
            <motion.p
              className="text-2xl font-black"
              animate={{ color: showAfter ? "#007AFF" : "#D1D5DB" }}
              transition={{ delay: i * 0.1 }}
            >
              {showAfter ? <AnimatedNumber target={m.value} suffix={m.suffix} /> : "—"}
            </motion.p>
            <p className="text-[10px] text-[#6B7280] mt-0.5 font-medium">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ROI card */}
      {showAfter && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center justify-between p-4 rounded-xl bg-[#007AFF]/5 border border-[#007AFF]/15"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">🚀</span>
            <div>
              <p className="text-xs text-[#6B7280]">ROI estim&eacute;</p>
              <p className="text-xl font-black text-[#007AFF]">x6</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#6B7280]">&Eacute;conomie / an</p>
            <p className="text-lg font-bold text-[#111]">84&nbsp;000&euro;</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
