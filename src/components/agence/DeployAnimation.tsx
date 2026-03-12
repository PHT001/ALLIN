"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const nodes = [
  { id: "trigger", label: "Nouveau lead", x: 10, y: 15, icon: "⚡" },
  { id: "email", label: "Email auto", x: 55, y: 5, icon: "📧" },
  { id: "crm", label: "CRM update", x: 55, y: 42, icon: "📊" },
  { id: "chatbot", label: "Chatbot", x: 10, y: 55, icon: "🤖" },
  { id: "invoice", label: "Devis envoyé", x: 55, y: 78, icon: "📄" },
  { id: "notify", label: "Notification", x: 10, y: 90, icon: "🔔" },
];

const connections = [
  { from: "trigger", to: "email" },
  { from: "trigger", to: "crm" },
  { from: "crm", to: "chatbot" },
  { from: "chatbot", to: "invoice" },
  { from: "invoice", to: "notify" },
];

export default function DeployAnimation() {
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set());
  const [activeLines, setActiveLines] = useState<Set<number>>(new Set());

  useEffect(() => {
    const sequence = async () => {
      setActiveNodes(new Set());
      setActiveLines(new Set());

      // Activate nodes one by one
      for (let i = 0; i < nodes.length; i++) {
        await new Promise((r) => setTimeout(r, 400));
        setActiveNodes((prev) => new Set(prev).add(nodes[i].id));

        // Activate connection that leads TO this node
        const connIdx = connections.findIndex((c) => c.to === nodes[i].id);
        if (connIdx >= 0) {
          setActiveLines((prev) => new Set(prev).add(connIdx));
        }
      }

      await new Promise((r) => setTimeout(r, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 7000);
    return () => clearInterval(interval);
  }, []);

  const getNodePos = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x + 12, y: node.y + 6 } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#0A0A0A] border border-white/[0.06] p-6 overflow-hidden" style={{ minHeight: 300 }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-[11px] text-white/30 font-mono">workflow_deploy.ai</span>
      </div>

      {/* Workflow area */}
      <div className="relative" style={{ height: 220 }}>
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map((conn, i) => {
            const from = getNodePos(conn.from);
            const to = getNodePos(conn.to);
            return (
              <motion.line
                key={i}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={activeLines.has(i) ? "#FF1744" : "rgba(255,255,255,0.06)"}
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: activeLines.has(i) ? 1 : 0.3 }}
                transition={{ duration: 0.6 }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{
              opacity: activeNodes.has(node.id) ? 1 : 0.3,
              scale: activeNodes.has(node.id) ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium whitespace-nowrap transition-colors ${
                activeNodes.has(node.id)
                  ? "border-[#FF1744]/30 bg-[#FF1744]/10 text-white"
                  : "border-white/[0.06] bg-white/[0.02] text-white/30"
              }`}
            >
              <span>{node.icon}</span>
              {node.label}
            </div>
            {activeNodes.has(node.id) && (
              <motion.div
                className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#27C93F]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Status */}
      <motion.div
        animate={{ opacity: activeNodes.size === nodes.length ? 1 : 0.5 }}
        className="mt-2 flex items-center gap-2"
      >
        <div className={`h-2 w-2 rounded-full ${activeNodes.size === nodes.length ? "bg-[#27C93F] animate-pulse" : "bg-white/10"}`} />
        <span className="text-[11px] text-white/40 font-medium">
          {activeNodes.size === nodes.length
            ? "Workflow opérationnel — 0 intervention humaine"
            : `Déploiement en cours... ${activeNodes.size}/${nodes.length}`}
        </span>
      </motion.div>
    </div>
  );
}
