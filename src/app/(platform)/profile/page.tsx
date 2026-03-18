"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TIER_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  starter: { label: "Starter", color: "text-gray-600", bg: "bg-gray-100" },
  academy: { label: "Academy", color: "text-[#FF1744]", bg: "bg-[#FF1744]/10" },
  one_to_one: { label: "Premium", color: "text-amber-700", bg: "bg-amber-50" },
};

const BADGES = [
  { icon: "🎯", name: "Premier pas", desc: "Première leçon complétée", unlocked: true },
  { icon: "🧠", name: "Fondations IA", desc: "Module 1 terminé", unlocked: false },
  { icon: "🔥", name: "Semaine de feu", desc: "7 jours de streak", unlocked: false },
  { icon: "⚡", name: "Mi-parcours", desc: "44 leçons complétées", unlocked: false },
  { icon: "🏆", name: "Quiz Master", desc: "Tous les quiz validés", unlocked: false },
  { icon: "🎓", name: "Diplôme", desc: "Formation complète", unlocked: false },
];

export default function ProfilePage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState({ xp: 0, streak: 0, tier: "starter", lessonsCompleted: 0, quizzesPassed: 0 });

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((data) => {
        if (data?.xp !== undefined) {
          setStats({
            xp: data.xp,
            streak: data.streak,
            tier: data.tier || "starter",
            lessonsCompleted: data.lessonsCompleted || 0,
            quizzesPassed: data.quizzesPassed || 0,
          });
        }
      })
      .catch(() => {});
  }, []);

  const tierInfo = TIER_LABELS[stats.tier] || TIER_LABELS.starter;
  const level = Math.floor(stats.xp / 200) + 1;
  const xpInLevel = stats.xp % 200;
  const xpProgress = (xpInLevel / 200) * 100;
  const isAdmin = session?.user?.role === "admin";

  return (
    <div className="max-w-3xl mx-auto w-full">

      {/* Profile card */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Compact banner */}
        <div className="h-20 relative" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 100%)" }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full bg-[#FF1744]/20 blur-[50px]" />
          </div>
        </div>

        <div className="px-6 pb-6 -mt-8 relative">
          {/* Avatar + Info inline */}
          <div className="flex items-end gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-2xl font-bold text-white shadow-lg ring-4 ring-white flex-shrink-0">
              {session?.user?.name?.[0]?.toUpperCase() || "?"}
            </div>
            <div className="flex-1 pt-8">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-[#111]">{session?.user?.name || "Élève"}</h1>
                {isAdmin && (
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FF1744]/10 text-[#FF1744]">Admin</span>
                )}
              </div>
              <p className="text-xs text-gray-400">{session?.user?.email}</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-medium text-gray-400 border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
              Déconnexion
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "XP", value: stats.xp.toLocaleString(), color: "#F59E0B" },
              { label: "Streak", value: `${stats.streak}j`, color: "#FF1744" },
              { label: "Leçons", value: String(stats.lessonsCompleted), color: "#6C5CE7" },
              { label: "Quiz", value: String(stats.quizzesPassed), color: "#10B981" },
            ].map((s) => (
              <div key={s.label} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-lg font-black text-[#111]">{s.value}</p>
                <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Level + Badges side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Level */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#111]">Niveau</h3>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 border border-amber-200">
              <svg className="w-3 h-3 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              <span className="text-[10px] font-bold text-amber-700">Niv. {level}</span>
            </div>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #FF1744, #FF5252)" }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(xpProgress, 3)}%` }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <p className="text-[10px] text-gray-400">{xpInLevel}/200 XP pour le niveau {level + 1}</p>
        </motion.div>

        {/* Forfait */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="text-sm font-bold text-[#111] mb-3">Forfait</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-lg ${tierInfo.bg} ${tierInfo.color}`}>
                {isAdmin ? "Accès complet" : tierInfo.label}
              </span>
            </div>
            {!isAdmin && stats.tier === "starter" && (
              <a href="/formation" className="text-[10px] font-semibold text-[#FF1744] hover:text-[#D50000] transition-colors">
                Upgrade →
              </a>
            )}
          </div>
          <div className="mt-3 flex items-center gap-4 text-[10px] text-gray-400">
            <span>78 leçons</span>
            <span>15 modules</span>
            <span>Quiz illimités</span>
          </div>
        </motion.div>
      </div>

      {/* Badges */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#111]">Badges</h3>
          <span className="text-[10px] font-medium text-gray-400">
            {BADGES.filter((b) => b.unlocked).length}/{BADGES.length}
          </span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.name}
                className={`rounded-xl p-3 text-center transition-all ${
                  badge.unlocked
                    ? "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    : "bg-gray-50 border border-dashed border-gray-200"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.04 }}
              >
                <div className={`text-xl mb-1 ${badge.unlocked ? "" : "grayscale opacity-25"}`}>
                  {badge.icon}
                </div>
                <p className={`text-[9px] font-bold leading-tight ${badge.unlocked ? "text-[#111]" : "text-gray-400"}`}>
                  {badge.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Account info */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <div className="px-5 py-3.5 border-b border-gray-100">
          <h3 className="text-sm font-bold text-[#111]">Compte</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { label: "Nom", value: session?.user?.name || "—" },
            { label: "Email", value: session?.user?.email || "—" },
            { label: "Mot de passe", value: "••••••••" },
          ].map((item) => (
            <div key={item.label} className="px-5 py-3 flex items-center justify-between">
              <span className="text-xs text-gray-400 w-24">{item.label}</span>
              <span className="text-xs text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
