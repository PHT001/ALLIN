"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const bars = [
  { label: "Emails", before: 20, after: 85, color: "#FF1744" },
  { label: "Factures", before: 15, after: 92, color: "#FF5252" },
  { label: "Support", before: 30, after: 78, color: "#FF8A80" },
  { label: "Reporting", before: 10, after: 95, color: "#FF1744" },
];

function ROICounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
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

  return <span ref={ref}>{count.toLocaleString("fr-FR")}</span>;
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
    <div className="relative w-full rounded-2xl bg-[#0A0A0A] border border-white/[0.06] p-6 overflow-hidden" style={{ minHeight: 300 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          <span className="ml-3 text-[11px] text-white/30 font-mono">plan_action.dashboard</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/20">
          {showAfter ? "Après IA" : "Avant IA"}
        </span>
      </div>

      {/* Bars */}
      <div className="space-y-4">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between mb-1.5">
              <span className="text-xs text-white/50 font-medium">{bar.label}</span>
              <span className="text-xs font-bold text-white/70">
                {showAfter ? `${bar.after}%` : `${bar.before}%`}
              </span>
            </div>
            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: bar.color }}
                animate={{
                  width: showAfter ? `${bar.after}%` : `${bar.before}%`,
                }}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ROI card */}
      {showAfter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 flex items-center justify-between p-4 rounded-xl bg-[#FF1744]/10 border border-[#FF1744]/20"
        >
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-wider">ROI estimé</p>
            <p className="text-2xl font-black text-[#FF1744]">
              x<ROICounter target={6} />
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/40 uppercase tracking-wider">Économie / an</p>
            <p className="text-lg font-bold text-white">
              <ROICounter target={84} />&nbsp;000&euro;
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
