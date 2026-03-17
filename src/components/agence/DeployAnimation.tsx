"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
  { id: "install", label: "Installation outils", icon: "🔧", duration: "Jour 1-2" },
  { id: "config", label: "Configuration IA", icon: "⚙️", duration: "Jour 3-6" },
  { id: "test", label: "Tests & ajustements", icon: "🧪", duration: "Jour 7-10" },
  { id: "train", label: "Formation équipe", icon: "🎓", duration: "Jour 11-12" },
  { id: "live", label: "Mise en production", icon: "🚀", duration: "Jour 13-14" },
];

export default function DeployAnimation() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const sequence = async () => {
      setActiveStep(-1);
      await new Promise((r) => setTimeout(r, 500));

      for (let i = 0; i < steps.length; i++) {
        await new Promise((r) => setTimeout(r, 600));
        setActiveStep(i);
      }

      await new Promise((r) => setTimeout(r, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-white border border-gray-100 p-6 overflow-hidden shadow-sm" style={{ height: 440 }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#007AFF]/10 flex items-center justify-center">
            <svg className="h-4 w-4 text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-[#111]">D&eacute;ploiement 14j</span>
        </div>
        <span className="text-[10px] font-mono text-[#9CA3AF]">
          {activeStep >= 0 ? `${Math.min((activeStep + 1) * 20, 100)}%` : "0%"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100 rounded-full mb-5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] rounded-full"
          animate={{ width: activeStep >= 0 ? `${Math.min((activeStep + 1) * 20, 100)}%` : "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0.4 }}
            animate={{
              opacity: i <= activeStep ? 1 : 0.4,
            }}
            className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-all duration-300 ${
              i === activeStep
                ? "bg-[#007AFF]/5 border border-[#007AFF]/15"
                : i < activeStep
                ? "bg-gray-50"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm">{step.icon}</span>
              <span className="text-sm text-[#374151] font-medium">{step.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-[#9CA3AF]">{step.duration}</span>
              {i < activeStep && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center"
                >
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
              {i === activeStep && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-5 w-5 rounded-full bg-[#007AFF] flex items-center justify-center"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Completion */}
      {activeStep === steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-2"
        >
          <span className="text-lg">✅</span>
          <p className="text-sm font-semibold text-emerald-700">Workflow op&eacute;rationnel &mdash; 0 intervention humaine</p>
        </motion.div>
      )}
    </div>
  );
}
