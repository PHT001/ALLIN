"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const scanItems = [
  { label: "Emails & Communication", status: "slow" },
  { label: "Facturation & Devis", status: "critical" },
  { label: "Support Client", status: "slow" },
  { label: "Reporting & Data", status: "critical" },
  { label: "Onboarding Clients", status: "ok" },
];

export default function AuditAnimation() {
  const [phase, setPhase] = useState(0);
  const [scanIndex, setScanIndex] = useState(-1);

  useEffect(() => {
    const sequence = async () => {
      setPhase(0);
      setScanIndex(-1);
      await new Promise((r) => setTimeout(r, 600));
      setPhase(1);

      for (let i = 0; i < scanItems.length; i++) {
        await new Promise((r) => setTimeout(r, 500));
        setScanIndex(i);
      }

      await new Promise((r) => setTimeout(r, 800));
      setPhase(2);
      await new Promise((r) => setTimeout(r, 3000));
      setPhase(0);
      setScanIndex(-1);
    };
    sequence();
    const interval = setInterval(sequence, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-[#0A0A0A] border border-white/[0.06] p-6 overflow-hidden" style={{ minHeight: 300 }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-[11px] text-white/30 font-mono">audit_scan.exe</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/[0.06] rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-[#FF1744] rounded-full"
          animate={{ width: phase === 0 ? "0%" : phase === 1 ? `${((scanIndex + 1) / scanItems.length) * 100}%` : "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Scan items */}
      <div className="space-y-3">
        {scanItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: i <= scanIndex ? 1 : 0.3,
            }}
            className="flex items-center justify-between py-2 border-b border-white/[0.04]"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: i === scanIndex ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`h-2 w-2 rounded-full ${
                  i > scanIndex
                    ? "bg-white/10"
                    : item.status === "critical"
                    ? "bg-[#FF1744]"
                    : item.status === "slow"
                    ? "bg-[#FFBD2E]"
                    : "bg-[#27C93F]"
                }`}
              />
              <span className="text-sm text-white/70 font-medium">{item.label}</span>
            </div>
            {i <= scanIndex && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`text-[10px] font-bold uppercase tracking-wider ${
                  item.status === "critical"
                    ? "text-[#FF1744]"
                    : item.status === "slow"
                    ? "text-[#FFBD2E]"
                    : "text-[#27C93F]"
                }`}
              >
                {item.status === "critical" ? "Critique" : item.status === "slow" ? "Lent" : "OK"}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Result overlay */}
      {phase === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-[#FF1744]/10 border border-[#FF1744]/20"
        >
          <p className="text-sm font-bold text-[#FF1744]">3 process critiques détectés</p>
          <p className="text-xs text-white/40 mt-1">Potentiel d&apos;&eacute;conomie : 47h/mois</p>
        </motion.div>
      )}
    </div>
  );
}
