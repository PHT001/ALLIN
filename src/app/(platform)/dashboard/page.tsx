"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { TIERS, TIER_MODULE_ACCESS } from "@/lib/constants";

interface DashboardData {
  totalLessons: number;
  completedLessons: number;
  currentLesson: { id: string; title: string; slug: string; order: number } | null;
  streak: number;
  xp: number;
  tier: string | null;
  modules: Array<{
    id: string;
    title: string;
    order: number;
    totalLessons: number;
    completedLessons: number;
  }>;
}

/* ——— Animated Counter ——— */
function AnimatedNumber({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => Math.round(v).toString() + suffix);
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) animate(motionVal, value, { duration: 1, ease: "easeOut" }); }, [isInView, value, motionVal]);
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* ——— Icons ——— */
function IconTarget({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
}
function IconLayers({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
function IconFlame({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>;
}
function IconBolt({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
}
function IconArrowRight({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}
function IconPlay({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
}
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconPerfScore({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>;
}
function IconPerfClock({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconPerfStreak({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
}
function IconPerfTrophy({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>;
}

/* ——— Mock Analytics Data ——— */
const WEEK_ACTIVITY = [
  { day: "Lun", minutes: 52 },
  { day: "Mar", minutes: 38 },
  { day: "Mer", minutes: 71 },
  { day: "Jeu", minutes: 18 },
  { day: "Ven", minutes: 55 },
  { day: "Sam", minutes: 0 },
  { day: "Dim", minutes: 30 },
];
const MAX_WEEK = Math.max(...WEEK_ACTIVITY.map((d) => d.minutes), 1);

const HEATMAP = [
  0,0,1,0,0,2,0, 0,1,0,0,0,1,0, 0,0,0,1,0,0,0, 1,0,2,0,1,0,0,
  0,1,0,2,1,0,0, 1,2,0,1,0,1,0, 0,1,2,1,0,0,1, 2,1,3,0,1,2,0,
  1,2,0,3,1,0,2, 0,3,2,1,3,1,0, 2,1,3,2,0,4,1, 3,2,4,1,3,0,2,
];

const SKILLS = [
  { label: "Prompt Eng.", value: 72 },
  { label: "Technique", value: 58 },
  { label: "Business", value: 45 },
  { label: "IA Générale", value: 80 },
  { label: "Automation", value: 35 },
  { label: "Stratégie", value: 62 },
];

const DAILY_GOALS = [
  { label: "Compléter 1 leçon", progress: 100, done: true },
  { label: "Réussir 1 quiz", progress: 100, done: true },
  { label: "Gagner 50 XP", progress: 68, done: false },
  { label: "Étudier 30 min", progress: 45, done: false },
];

const RECENT = [
  { icon: "\u2705", text: "Leçon 1 terminée", sub: "Comprendre l'IA", time: "Il y a 2h" },
  { icon: "\uD83E\uDDE0", text: "Quiz réussi", sub: "Score: 85%", time: "Il y a 3h" },
  { icon: "\uD83D\uDD25", text: "Série de 3 jours", sub: "Continue comme ça !", time: "Hier" },
  { icon: "\uD83D\uDCDA", text: "Module 1 commencé", sub: "Découvrir Claude", time: "Hier" },
  { icon: "\uD83C\uDFAF", text: "Inscription", sub: "Bienvenue !", time: "Il y a 2j" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ——— Donut Chart (SVG) ——— */
function DonutChart({ value, total }: { value: number; total: number }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const R = 58;
  const C = 2 * Math.PI * R;
  const offset = C - (pct / 100) * C;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
        <motion.circle
          cx="80" cy="80" r={R}
          fill="none"
          stroke="url(#donutGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          transform="rotate(-90 80 80)"
        />
        <defs>
          <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black text-white/90">{pct}%</span>
        <span className="text-[10px] text-white/30">complété</span>
      </div>
    </div>
  );
}

/* ——— Radar Chart (SVG) ——— */
function RadarChart({ items }: { items: { label: string; value: number }[] }) {
  const cx = 130, cy = 120, maxR = 80;
  const count = items.length;
  const axes = items.map((_, i) => {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: Math.cos(a), y: Math.sin(a) };
  });
  const points = items.map((item, i) => {
    const v = (item.value ?? 0) / 100;
    return `${cx + axes[i].x * maxR * v},${cy + axes[i].y * maxR * v}`;
  }).join(" ");

  return (
    <svg width="260" height="250" viewBox="0 0 260 250" className="mx-auto">
      {/* Grid */}
      {[0.25, 0.5, 0.75, 1].map((s, i) => (
        <motion.circle
          key={i} cx={cx} cy={cy} r={maxR * s}
          fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        />
      ))}
      {/* Axis lines */}
      {axes.map((a, i) => (
        <motion.line
          key={i}
          x1={cx} y1={cy}
          x2={cx + a.x * maxR} y2={cy + a.y * maxR}
          stroke="rgba(255,255,255,0.08)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
        />
      ))}
      {/* Data polygon fill */}
      <motion.polygon
        points={points}
        fill="rgba(139,92,246,0.12)"
        stroke="none"
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      />
      {/* Data polygon stroke */}
      <motion.polygon
        points={points}
        fill="none"
        stroke="rgba(139,92,246,0.6)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
      />
      {/* Data points */}
      {items.map((item, i) => {
        const v = (item.value ?? 0) / 100;
        const px = cx + axes[i].x * maxR * v;
        const py = cy + axes[i].y * maxR * v;
        return (
          <motion.circle
            key={i} cx={px} cy={py} r="4"
            fill="rgba(139,92,246,0.9)" stroke="rgba(139,92,246,0.3)" strokeWidth="6"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 300 }}
          />
        );
      })}
      {/* Labels */}
      {items.map((item, i) => {
        const d = maxR + 22;
        const lx = cx + axes[i].x * d;
        const ly = cy + axes[i].y * d;
        const anchor = axes[i].x > 0.3 ? "start" : axes[i].x < -0.3 ? "end" : "middle";
        return (
          <motion.text
            key={i} x={lx} y={ly}
            textAnchor={anchor} dominantBaseline="middle"
            className="text-[10px] fill-white/40"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
          >
            {item.label}
          </motion.text>
        );
      })}
    </svg>
  );
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const progress = data ? Math.round((data.completedLessons / data.totalLessons) * 100) : 0;
  const firstName = session?.user?.name?.split(" ")[0] || "Élève";

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 max-w-5xl">
        <div className="h-8 bg-white/5 rounded-lg w-64" />
        <div className="h-4 bg-white/5 rounded w-80" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-28 bg-white/5 rounded-xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="h-52 bg-white/5 rounded-xl" />
          <div className="h-52 bg-white/5 rounded-xl lg:col-span-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl">

      {/* ════════════════════════════════════
          HERO — Big name behind
      ════════════════════════════════════ */}
      <div className="relative mb-12">
        <motion.div
          className="absolute -top-6 -left-4 sm:-top-10 sm:-left-8 select-none pointer-events-none z-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-[100px] sm:text-[150px] lg:text-[200px] font-black text-white/[0.03] leading-none tracking-tighter">
            {firstName}
          </span>
        </motion.div>

        <motion.div
          className="relative z-10 pt-12 sm:pt-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
            Bienvenue, {session?.user?.name || "Élève"}
          </h1>
          <p className="text-sm text-white/35">
            Voici un aperçu de ta progression dans la formation.
          </p>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          STATS HUB — Unified stats block
      ════════════════════════════════════ */}
      <motion.div
        className="glass-card rounded-2xl p-5 sm:p-6 mb-10 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-2xl">
          <span className="absolute -right-4 -top-6 text-[100px] sm:text-[140px] font-black text-white/[0.015] leading-none tracking-tighter">STATS</span>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Progression", value: progress, suffix: "%", icon: IconTarget, iconColor: "text-white", iconBg: "bg-white/10", border: "border-white/[0.06]" },
              { label: "Leçons terminées", rawValue: `${data?.completedLessons || 0}/${data?.totalLessons || 80}`, icon: IconLayers, iconColor: "text-blue-400", iconBg: "bg-blue-500/10", border: "border-blue-500/[0.06]" },
              { label: "Jours consécutifs", value: data?.streak || 0, icon: IconFlame, iconColor: "text-orange-400", iconBg: "bg-orange-500/10", border: "border-orange-500/[0.06]" },
              { label: "Temps / leçon", rawValue: "18 min", icon: IconPerfClock, iconColor: "text-blue-400/60", iconBg: "bg-blue-500/[0.07]", border: "border-blue-500/[0.06]" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className={cn("relative overflow-hidden p-4 rounded-xl group cursor-default bg-white/[0.03] border transition-colors duration-300 hover:bg-white/[0.05]", stat.border)}
                  variants={fadeUp}
                >
                  {stat.value !== undefined && (
                    <span className="absolute -right-1 -bottom-2 text-[40px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                      {stat.value}{stat.suffix || ""}
                    </span>
                  )}
                  <div className="relative z-[3]">
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2.5", stat.iconBg)}>
                      <Icon className={stat.iconColor} />
                    </div>
                    <p className="text-xl font-black tracking-tight text-white/90">
                      {stat.rawValue ? stat.rawValue : <AnimatedNumber value={stat.value!} suffix={stat.suffix} />}
                    </p>
                    <p className="text-[10px] text-white/25 mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          MON OFFRE — Plan recap + upgrade
      ════════════════════════════════════ */}
      {(() => {
        const userTier = data?.tier || "starter";
        const currentPlan = TIERS.find((t) => t.id === userTier) || TIERS[0];
        const currentIndex = TIERS.findIndex((t) => t.id === userTier);
        const nextPlan = currentIndex < TIERS.length - 1 ? TIERS[currentIndex + 1] : null;
        const accessibleModules = TIER_MODULE_ACCESS[userTier] || [1];

        return (
          <motion.div
            className="glass-card rounded-2xl p-5 sm:p-6 mb-10 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-2xl">
              <span className="absolute -right-4 -top-6 text-[100px] sm:text-[140px] font-black text-white/[0.015] leading-none tracking-tighter">OFFRE</span>
            </div>

            <div className="relative z-10">
              {/* Current plan header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-2">Mon offre actuelle</h2>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-white">{currentPlan.name}</span>
                    <span className="text-lg font-bold text-white/40">{currentPlan.price}€</span>
                  </div>
                  <p className="text-xs text-white/30 mt-1">{currentPlan.description}</p>
                </div>
                <div className={cn(
                  "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                  userTier === "one_to_one" ? "bg-purple-500/15 text-purple-400" :
                  userTier === "academy" ? "bg-blue-500/15 text-blue-400" :
                  "bg-white/10 text-white/50"
                )}>
                  {userTier === "one_to_one" ? "Premium" : userTier === "academy" ? "Complet" : "Basique"}
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {currentPlan.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5 py-1.5">
                    {f.included ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                        <IconCheck className="text-emerald-400" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                        <span className="text-white/15 text-[10px]">—</span>
                      </div>
                    )}
                    <span className={cn("text-xs", f.included ? "text-white/60" : "text-white/20")}>{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Modules access */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">Accès aux modules</span>
                  <span className="text-[10px] text-white/25">{accessibleModules.length}/13 modules</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 13 }, (_, i) => i + 1).map((m) => (
                    <div
                      key={m}
                      className={cn(
                        "flex-1 h-2 rounded-full transition-colors",
                        accessibleModules.includes(m) ? "bg-white/20" : "bg-white/[0.04]"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Upgrade CTA */}
              {nextPlan && (
                <motion.div
                  className="p-4 rounded-xl border border-white/[0.06] bg-gradient-to-r from-white/[0.03] to-white/[0.01] flex items-center justify-between"
                  variants={fadeUp}
                >
                  <div>
                    <p className="text-xs font-semibold text-white/70">Passer à <span className="text-white">{nextPlan.name}</span></p>
                    <p className="text-[10px] text-white/30 mt-0.5">{nextPlan.description}</p>
                  </div>
                  <a href="/formations" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors duration-200 flex-shrink-0">
                    {nextPlan.price}€ →
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })()}

      {/* ════════════════════════════════════
          SKILLS & GOALS — Top row
      ════════════════════════════════════ */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-3 mb-10"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Radar chart — compact */}
        <motion.div
          className="glass-card interactive-card p-5 rounded-xl lg:col-span-3 group cursor-default"
          variants={fadeUp}
          whileHover={{ y: -5, scale: 1.01, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xs font-bold text-white/50">Compétences</h3>
            <span className="text-[10px] text-white/20">score global</span>
          </div>
          <RadarChart items={SKILLS} />
        </motion.div>

        {/* Daily goals — compact */}
        <motion.div
          className="glass-card interactive-card p-5 rounded-xl lg:col-span-2 group cursor-default flex flex-col"
          variants={fadeUp}
          whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-white/50">Objectifs du jour</h3>
            <span className="text-[10px] text-white/20 bg-white/[0.04] px-2 py-0.5 rounded-full">
              {DAILY_GOALS.filter((g) => g.done).length}/{DAILY_GOALS.length}
            </span>
          </div>
          <div className="space-y-3.5 flex-1 flex flex-col justify-center">
            {DAILY_GOALS.map((goal, i) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + 0.08 * i, duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-4.5 h-4.5 rounded-full flex items-center justify-center border shrink-0",
                      goal.done
                        ? "bg-emerald-500/20 border-emerald-500/40"
                        : "bg-white/[0.04] border-white/[0.08]"
                    )}>
                      {goal.done && <IconCheck className="text-emerald-400" />}
                    </div>
                    <span className={cn("text-[11px] font-medium", goal.done ? "text-white/40 line-through" : "text-white/65")}>{goal.label}</span>
                  </div>
                  <span className="text-[10px] text-white/20">{goal.progress}%</span>
                </div>
                <div className="w-full h-1 rounded-full bg-white/[0.04] overflow-hidden ml-[26px]" style={{ width: "calc(100% - 26px)" }}>
                  <motion.div
                    className={cn("h-full rounded-full", goal.done ? "bg-emerald-500/50" : "bg-white/25")}
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 0.7, delay: 0.4 + 0.1 * i, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ════════════════════════════════════
          CONTINUE LEARNING
      ════════════════════════════════════ */}
      {data?.currentLesson && (
        <motion.div
          className="glass-card interactive-card relative overflow-hidden p-5 rounded-xl mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{
            y: -4,
            borderColor: "rgba(255,255,255,0.18)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(255,255,255,0.04)",
            transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
          }}
        >
          <span className="absolute -right-4 -top-3 text-[80px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
            PLAY
          </span>
          <div className="relative flex items-center gap-4">
            <motion.div
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <IconPlay className="text-white" />
            </motion.div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-0.5">
                Reprendre la formation
              </p>
              <h3 className="text-sm font-bold text-white/90">{data.currentLesson.title}</h3>
              <p className="text-xs text-white/25">
                Leçon {data.currentLesson.order} sur {data.totalLessons}
              </p>
            </div>
          </div>
          <Button href={`/lessons/${data.currentLesson.slug}`} size="sm" className="flex-shrink-0 gap-2 relative z-10">
            Continuer <IconArrowRight />
          </Button>
        </motion.div>
      )}

      {/* ════════════════════════════════════
          1. PROGRESSION — Donut + Module bars
      ════════════════════════════════════ */}
      <div className="relative mb-12">
        <span className="absolute -left-2 -top-8 text-[80px] sm:text-[100px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
          PROGRESS
        </span>

        <motion.div
          className="relative z-10 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-sm font-bold text-white/60 mb-5">Progression globale</h2>

          <motion.div
              className="glass-card interactive-card p-6 rounded-xl flex flex-col items-center justify-center group cursor-default"
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
            >
              <DonutChart value={data?.completedLessons || 0} total={data?.totalLessons || 80} />
              <p className="text-xs text-white/30 mt-3">
                {data?.completedLessons || 0} / {data?.totalLessons || 80} leçons
              </p>
            </motion.div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          2. ACTIVITE — Bar chart + 3. Heatmap
      ════════════════════════════════════ */}
      <div className="relative mb-12">
        <span className="absolute -right-4 -top-10 text-[90px] sm:text-[120px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
          ACTIVITÉ
        </span>

        <motion.div
          className="relative z-10 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          <h2 className="text-sm font-bold text-white/60 mb-5">Activité</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Bar chart — weekly */}
            <motion.div
              className="glass-card interactive-card p-6 rounded-xl group cursor-default"
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-bold text-white/50">Cette semaine</h3>
                <span className="text-[10px] text-white/20">minutes étudiées</span>
              </div>
              <div className="flex items-end justify-between gap-2 h-32">
                {WEEK_ACTIVITY.map((d, i) => (
                  <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                    <motion.div
                      className="w-full max-w-[32px] rounded-t-md bg-gradient-to-t from-white/10 to-white/25 relative overflow-hidden"
                      initial={{ height: 0 }}
                      whileInView={{ height: d.minutes > 0 ? `${(d.minutes / MAX_WEEK) * 100}%` : "2px" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                    >
                      {d.minutes > 0 && (
                        <motion.span
                          className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white/40 whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                        >
                          {d.minutes}
                        </motion.span>
                      )}
                    </motion.div>
                    <span className="text-[9px] text-white/25 font-medium">{d.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heatmap — 12 weeks */}
            <motion.div
              className="glass-card interactive-card p-6 rounded-xl group cursor-default"
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-bold text-white/50">Calendrier d&apos;activité</h3>
                <span className="text-[10px] text-white/20">12 dernières semaines</span>
              </div>

              <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
                {HEATMAP.map((val, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-[3px]",
                      val === 0 && "bg-white/[0.04]",
                      val === 1 && "bg-white/[0.12]",
                      val === 2 && "bg-white/[0.22]",
                      val === 3 && "bg-white/[0.35]",
                      val >= 4 && "bg-white/[0.50]",
                    )}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.01 * i, duration: 0.15 }}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-[9px] text-white/20">Moins</span>
                {[0.04, 0.12, 0.22, 0.35, 0.50].map((o) => (
                  <div key={o} className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: `rgba(255,255,255,${o})` }} />
                ))}
                <span className="text-[9px] text-white/20">Plus</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Performance section moved into Stats Hub above */}

      {/* ════════════════════════════════════
          7. ACTIVITE RECENTE — Timeline
      ════════════════════════════════════ */}
      <motion.div
        className="relative mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
      >
        <h2 className="text-sm font-bold text-white/60 mb-5">Activité récente</h2>

        <motion.div
          className="glass-card interactive-card p-6 rounded-xl group cursor-default"
          variants={fadeUp}
          whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } }}
        >
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/[0.06]" />

            <div className="space-y-0">
              {RECENT.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 py-3 relative"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  {/* Dot on timeline */}
                  <div className="w-[30px] h-[30px] rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-sm shrink-0 relative z-10">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white/70">{item.text}</p>
                    <p className="text-[10px] text-white/25 mt-0.5">{item.sub}</p>
                  </div>
                  <span className="text-[10px] text-white/15 shrink-0 mt-0.5">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ════════════════════════════════════
          FOUNDED BY — Footer badge
      ════════════════════════════════════ */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass-card rounded-full px-5 py-3 flex items-center gap-4">
          <div className="flex -space-x-3">
            <img src="/images/founders/marius.png" alt="Marius" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover" />
            <img src="/images/founders/igor.jpg" alt="Igor" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold text-white/80">Fondé par Marius & Igor</p>
            <div className="flex items-center gap-1.5">
              <svg className="text-white/25" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
              <span className="text-[11px] text-white/25">Paris, France</span>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
