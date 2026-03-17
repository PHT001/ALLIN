"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const scanItems = [
  { label: "Emails & Communication", status: "slow", icon: "📧" },
  { label: "Facturation & Devis", status: "critical", icon: "📄" },
  { label: "Support Client", status: "slow", icon: "💬" },
  { label: "Reporting & Data", status: "critical", icon: "📊" },
  { label: "Onboarding Clients", status: "ok", icon: "👤" },
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
    <div className="relative w-full rounded-2xl bg-white border border-gray-100 p-6 overflow-hidden shadow-sm" style={{ height: 440 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#007AFF]/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#111]">Scan en cours...</span>
        </div>
        <span className="text-[10px] font-mono text-[#9CA3AF]">
          {scanIndex + 1}/{scanItems.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full mb-5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] rounded-full"
          animate={{ width: phase === 0 ? "0%" : phase === 1 ? `${((scanIndex + 1) / scanItems.length) * 100}%` : "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Scan items */}
      <div className="space-y-2">
        {scanItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: i <= scanIndex ? 1 : 0.4 }}
            className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
              i <= scanIndex ? "bg-gray-50" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm text-[#374151] font-medium">{item.label}</span>
            </div>
            {i <= scanIndex && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  item.status === "critical"
                    ? "bg-orange-50 text-orange-500"
                    : item.status === "slow"
                    ? "bg-amber-50 text-amber-500"
                    : "bg-emerald-50 text-emerald-500"
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
          className="mt-4 p-4 rounded-xl bg-[#007AFF]/5 border border-[#007AFF]/15"
        >
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#007AFF] flex items-center justify-center">
              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#007AFF]">3 process critiques</p>
              <p className="text-xs text-[#6B7280]">&Eacute;conomie potentielle : 47h/mois</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
