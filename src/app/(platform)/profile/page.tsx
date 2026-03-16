"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* --- Icons --- */
function IconMail({ className }: { className?: string }) {
  return <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
}
function IconCalendar({ className }: { className?: string }) {
  return <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function IconZap({ className }: { className?: string }) {
  return <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
}
function IconFlame({ className }: { className?: string }) {
  return <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>;
}
function IconLogOut({ className }: { className?: string }) {
  return <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>;
}
function IconLock({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
}

const TIER_LABELS: Record<string, { label: string; color: string; bg: string }> = {
  starter: { label: "Starter", color: "text-gray-600", bg: "bg-gray-100" },
  academy: { label: "Academy", color: "text-emerald-700", bg: "bg-emerald-50" },
  one_to_one: { label: "One-to-One", color: "text-amber-700", bg: "bg-amber-50" },
};

const BADGES = [
  { icon: "🎯", name: "Premier pas", desc: "Première leçon complétée", unlocked: true },
  { icon: "🧠", name: "Fondations IA", desc: "Module 1-4 terminé", unlocked: false },
  { icon: "🔥", name: "Semaine de feu", desc: "7 jours de streak", unlocked: false },
  { icon: "⚡", name: "Mi-parcours", desc: "50% de la formation", unlocked: false },
  { icon: "🏆", name: "Quiz Master", desc: "Tous les quiz validés", unlocked: false },
  { icon: "🎓", name: "Diplôme Opexia", desc: "Formation complète", unlocked: false },
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
  const memberSince = session?.user?.createdAt
    ? new Date(session.user.createdAt).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
    : "2025";

  return (
    <div className="max-w-5xl mx-auto">

      {/* ═══════════════════════════════════════
          PROFILE HEADER — banner + avatar
      ═══════════════════════════════════════ */}
      <motion.div
        className="relative rounded-2xl overflow-hidden mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Banner gradient */}
        <div
          className="h-32 sm:h-40 relative"
          style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16162A 50%, #2D1B4E 100%)" }}
        >
          {/* Decorative */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-[#FF1744]/15 blur-[60px]" />
            <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-violet-500/10 blur-[50px]" />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }} />
          </div>
          {/* Level badge on banner */}
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <IconZap className="text-amber-400 w-3.5 h-3.5" />
            <span className="text-xs font-bold text-white/80">Niveau {level}</span>
          </div>
        </div>

        {/* Profile info overlapping */}
        <div className="bg-white border border-gray-200/80 border-t-0 rounded-b-2xl px-6 sm:px-8 pb-6 pt-0 relative">
          {/* Avatar */}
          <div className="absolute -top-10 left-6 sm:left-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-[#FF1744]/20 ring-4 ring-white">
                {session?.user?.name?.[0]?.toUpperCase() || "?"}
              </div>
              {/* Online dot */}
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-emerald-400 border-[3px] border-white" />
            </div>
          </div>

          {/* Name + meta */}
          <div className="pt-14 sm:flex sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-gray-900">{session?.user?.name || "Élève"}</h1>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${tierInfo.bg} ${tierInfo.color}`}>
                  {tierInfo.label}
                </span>
                {session?.user?.role === "admin" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-red-50 text-red-600">
                    Admin
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <IconMail className="w-3.5 h-3.5" />
                  {session?.user?.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCalendar className="w-3.5 h-3.5" />
                  Membre depuis {memberSince}
                </span>
              </div>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="mt-4 sm:mt-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200"
            >
              <IconLogOut className="w-3.5 h-3.5" />
              Déconnexion
            </button>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          STATS — XP, Streak, Progress
      ═══════════════════════════════════════ */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {[
          { label: "XP Total", value: stats.xp.toLocaleString(), icon: <IconZap />, color: "#F59E0B", bg: "from-amber-500/8" },
          { label: "Streak", value: `${stats.streak} jours`, icon: <IconFlame />, color: "#FF1744", bg: "from-red-500/8" },
          { label: "Leçons", value: stats.lessonsCompleted.toString(), icon: "📖", color: "#6C5CE7", bg: "from-violet-500/8" },
          { label: "Quiz", value: stats.quizzesPassed.toString(), icon: "✅", color: "#10B981", bg: "from-emerald-500/8" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="bg-white rounded-xl border border-gray-200/80 shadow-sm p-4 relative overflow-hidden group hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.06 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${s.color}30, transparent)` }} />
            <div className="flex items-center gap-2 mb-2">
              {typeof s.icon === "string" ? (
                <span className="text-sm">{s.icon}</span>
              ) : (
                <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: `${s.color}12`, color: s.color }}>
                  {s.icon}
                </div>
              )}
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{s.label}</span>
            </div>
            <p className="text-lg font-black text-gray-900 tracking-tight">{s.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ═══════════════════════════════════════
          LEVEL PROGRESS
      ═══════════════════════════════════════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-gray-900">Progression</h3>
            <p className="text-xs text-gray-400 mt-0.5">Niveau {level} — {xpInLevel}/200 XP pour le prochain niveau</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200">
            <IconZap className="text-amber-500 w-3.5 h-3.5" />
            <span className="text-xs font-bold text-amber-700">Niv. {level}</span>
          </div>
        </div>

        {/* XP Progress bar */}
        <div className="relative">
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full relative"
              style={{ background: "linear-gradient(90deg, #FF1744, #FF5252, #FF8A80)" }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(xpProgress, 2)}%` }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
            </motion.div>
          </div>
          {/* Level markers */}
          <div className="flex justify-between mt-2">
            <span className="text-[10px] text-gray-400">Niv. {level}</span>
            <span className="text-[10px] text-gray-400">Niv. {level + 1}</span>
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          BADGES — achievement grid
      ═══════════════════════════════════════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Badges & Récompenses</h3>
          <span className="text-[10px] font-semibold text-gray-400">
            {BADGES.filter(b => b.unlocked).length}/{BADGES.length} débloqués
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.name}
                className={`relative rounded-xl p-4 text-center border transition-all duration-300 group ${
                  badge.unlocked
                    ? "bg-white border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-default"
                    : "bg-gray-50/50 border-gray-100 border-dashed"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {!badge.unlocked && (
                  <div className="absolute top-2 right-2">
                    <IconLock className="text-gray-300" />
                  </div>
                )}
                <div className={`text-2xl mb-2 transition-transform duration-300 ${badge.unlocked ? "group-hover:scale-110" : "grayscale opacity-30"}`}>
                  {badge.icon}
                </div>
                <p className={`text-xs font-bold mb-0.5 ${badge.unlocked ? "text-gray-900" : "text-gray-400"}`}>
                  {badge.name}
                </p>
                <p className={`text-[10px] ${badge.unlocked ? "text-gray-400" : "text-gray-300"}`}>
                  {badge.desc}
                </p>
                {badge.unlocked && (
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] font-semibold text-emerald-600">Débloqué</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════
          ACCOUNT SETTINGS — quick actions
      ═══════════════════════════════════════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Compte</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {[
            { label: "Nom", value: session?.user?.name || "—", editable: false },
            { label: "Email", value: session?.user?.email || "—", editable: false },
            { label: "Forfait", value: tierInfo.label, badge: true, editable: false },
            { label: "Mot de passe", value: "••••••••", editable: false },
          ].map((item) => (
            <div key={item.label} className="px-6 py-3.5 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-400 w-28">{item.label}</span>
              <div className="flex items-center gap-3">
                {item.badge ? (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${tierInfo.bg} ${tierInfo.color}`}>
                    {item.value}
                  </span>
                ) : (
                  <span className="text-sm text-gray-700">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
