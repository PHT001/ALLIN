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
function IconPerfClock({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}

/* ——— Time-of-day greeting ——— */
function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Bonjour";
  if (h < 18) return "Bon apr\u00e8s-midi";
  return "Bonsoir";
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
const TODAY_INDEX = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // Mon=0

const HEATMAP = [
  0,0,1,0,0,2,0, 0,1,0,0,0,1,0, 0,0,0,1,0,0,0, 1,0,2,0,1,0,0,
  0,1,0,2,1,0,0, 1,2,0,1,0,1,0, 0,1,2,1,0,0,1, 2,1,3,0,1,2,0,
  1,2,0,3,1,0,2, 0,3,2,1,3,1,0, 2,1,3,2,0,4,1, 3,2,4,1,3,0,2,
];

const SKILLS = [
  { label: "Prompt Eng.", value: 72 },
  { label: "Technique", value: 58 },
  { label: "Business", value: 45 },
  { label: "IA G\u00e9n\u00e9rale", value: 80 },
  { label: "Automation", value: 35 },
  { label: "Strat\u00e9gie", value: 62 },
];

const DAILY_GOALS = [
  { label: "Compl\u00e9ter 1 le\u00e7on", progress: 100, done: true },
  { label: "R\u00e9ussir 1 quiz", progress: 100, done: true },
  { label: "Gagner 50 XP", progress: 68, done: false },
  { label: "\u00c9tudier 30 min", progress: 45, done: false },
];

const RECENT = [
  { type: "lesson", text: "Le\u00e7on 1 termin\u00e9e", sub: "Comprendre l'IA", time: "Il y a 2h" },
  { type: "quiz", text: "Quiz r\u00e9ussi", sub: "Score: 85%", time: "Il y a 3h" },
  { type: "streak", text: "S\u00e9rie de 3 jours", sub: "Continue comme \u00e7a !", time: "Hier" },
  { type: "module", text: "Module 1 commenc\u00e9", sub: "D\u00e9couvrir Claude", time: "Hier" },
  { type: "start", text: "Inscription", sub: "Bienvenue !", time: "Il y a 2j" },
];

function TimelineIcon({ type }: { type: string }) {
  const config: Record<string, { bg: string; color: string; icon: React.ReactNode }> = {
    lesson: { bg: "bg-emerald-500/15", color: "text-emerald-400", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    quiz: { bg: "bg-[#FF1744]/15", color: "text-[#FF1744]", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
    streak: { bg: "bg-amber-500/15", color: "text-amber-400", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg> },
    module: { bg: "bg-blue-500/15", color: "text-blue-400", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg> },
    start: { bg: "bg-purple-500/15", color: "text-purple-400", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> },
  };
  const c = config[type] || config.start;
  return (
    <div className={cn("w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 relative z-10", c.bg)}>
      <span className={c.color}>{c.icon}</span>
    </div>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
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
        <circle cx="80" cy="80" r={R} fill="none" stroke="rgba(255,23,68,0.08)" strokeWidth="14" />
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
            <stop offset="0%" stopColor="rgba(255,23,68,0.9)" />
            <stop offset="100%" stopColor="rgba(255,23,68,0.35)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black text-white/90 stat-number">{pct}%</span>
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
          fill="none" stroke="rgba(255,23,68,0.08)" strokeWidth="1"
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
          stroke="rgba(255,23,68,0.10)" strokeWidth="1"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
        />
      ))}
      {/* Data polygon fill */}
      <motion.polygon
        points={points}
        fill="rgba(255,23,68,0.12)"
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
        stroke="rgba(255,23,68,0.6)"
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
            fill="rgba(255,23,68,0.9)" stroke="rgba(255,23,68,0.3)" strokeWidth="6"
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
  const firstName = session?.user?.name?.split(" ")[0] || "\u00c9l\u00e8ve";

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 max-w-5xl">
        <div className="h-8 bg-[#FF1744]/5 rounded-lg w-64" />
        <div className="h-4 bg-[#FF1744]/5 rounded w-80" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-28 bg-[#FF1744]/5 rounded-xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="h-52 bg-[#FF1744]/5 rounded-xl" />
          <div className="h-52 bg-[#FF1744]/5 rounded-xl lg:col-span-2" />
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
          <span className="text-[100px] sm:text-[140px] lg:text-[160px] font-black text-[#FF1744]/[0.04] leading-none tracking-tighter">
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
            {getGreeting()}, {session?.user?.name || "\u00c9l\u00e8ve"}
          </h1>
          <p className="text-sm text-white/35">
            {progress > 0
              ? `Tu es \u00e0 ${progress}% de ta formation. Continue comme \u00e7a !`
              : "Commence ta premi\u00e8re le\u00e7on pour lancer l'aventure."
            }
          </p>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          STATS — Individual cards
      ════════════════════════════════════ */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {[
          { label: "Progression", value: progress, suffix: "%", icon: IconTarget, iconColor: "text-[#FF1744]", iconBg: "bg-[#FF1744]/10", borderColor: "border-[#FF1744]/[0.08]" },
          { label: "Le\u00e7ons termin\u00e9es", rawValue: `${data?.completedLessons || 0}/${data?.totalLessons || 80}`, icon: IconLayers, iconColor: "text-emerald-400", iconBg: "bg-emerald-500/10", borderColor: "border-emerald-500/[0.08]" },
          { label: "Jours cons\u00e9cutifs", value: data?.streak || 0, icon: IconFlame, iconColor: "text-amber-400", iconBg: "bg-amber-500/10", borderColor: "border-amber-500/[0.08]" },
          { label: "Temps / le\u00e7on", rawValue: "18 min", icon: IconPerfClock, iconColor: "text-blue-400", iconBg: "bg-blue-500/10", borderColor: "border-blue-500/[0.08]" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className={cn("p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] hover:-translate-y-0.5 cursor-default", stat.borderColor)}
              variants={fadeUp}
            >
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2.5", stat.iconBg)}>
                <Icon className={stat.iconColor} />
              </div>
              <p className="text-xl font-black tracking-tight text-white/90 stat-number">
                {stat.rawValue ? stat.rawValue : <AnimatedNumber value={stat.value!} suffix={stat.suffix} className="stat-number" />}
              </p>
              <p className="text-[10px] text-white/25 mt-0.5">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ════════════════════════════════════
          CONTINUE LEARNING — Most prominent
      ════════════════════════════════════ */}
      {data?.currentLesson && (
        <motion.div
          className="relative overflow-hidden p-5 rounded-xl mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group border-l-[3px] border-[#FF1744] bg-gradient-to-r from-[rgba(255,23,68,0.06)] to-transparent border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative flex items-center gap-4">
            <motion.div
              className="w-10 h-10 rounded-xl bg-[#FF1744]/15 flex items-center justify-center flex-shrink-0"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <IconPlay className="text-[#FF1744]" />
            </motion.div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#FF1744]/60 font-semibold mb-0.5">
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
            <div className="relative z-10">
              {/* Current plan header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-2">Mon offre actuelle</h2>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-white">{currentPlan.name}</span>
                    <span className="text-lg font-bold text-white/40 stat-number">{currentPlan.price}€</span>
                  </div>
                  <p className="text-xs text-white/30 mt-1">{currentPlan.description}</p>
                </div>
                <div className={cn(
                  "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                  userTier === "one_to_one" ? "bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/20" :
                  userTier === "academy" ? "bg-[#FF1744]/15 text-[#FF1744] ring-1 ring-[#FF1744]/20" :
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
              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#FF1744]/[0.06] mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">Accès aux modules</span>
                  <span className="text-[10px] text-white/25 stat-number">{accessibleModules.length}/13 modules</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 13 }, (_, i) => i + 1).map((m) => (
                    <div
                      key={m}
                      className={cn(
                        "flex-1 h-2 rounded-full transition-colors",
                        accessibleModules.includes(m) ? "bg-[#FF1744]/30" : "bg-white/[0.04]"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Upgrade CTA */}
              {nextPlan && (
                <motion.div
                  className="p-4 rounded-xl border border-[#FF1744]/[0.08] bg-gradient-to-r from-[#FF1744]/[0.04] to-transparent flex items-center justify-between"
                  variants={fadeUp}
                >
                  <div>
                    <p className="text-xs font-semibold text-white/70">Passer à <span className="text-[#FF1744]">{nextPlan.name}</span></p>
                    <p className="text-[10px] text-white/30 mt-0.5">{nextPlan.description}</p>
                  </div>
                  <a href="/formations" className="px-4 py-2 rounded-lg bg-[#FF1744]/15 hover:bg-[#FF1744]/25 text-xs font-semibold text-[#FF1744] transition-colors duration-200 flex-shrink-0 stat-number">
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
        {/* Radar chart */}
        <motion.div
          className="glass-card p-5 rounded-xl lg:col-span-3 cursor-default"
          variants={fadeUp}
          whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)", transition: { duration: 0.3 } }}
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xs font-bold text-white/50">Compétences</h3>
            <span className="text-[10px] text-white/20">score global</span>
          </div>
          <RadarChart items={SKILLS} />
        </motion.div>

        {/* Daily goals */}
        <motion.div
          className="glass-card p-5 rounded-xl lg:col-span-2 cursor-default flex flex-col"
          variants={fadeUp}
          whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)", transition: { duration: 0.3 } }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-white/50">Objectifs du jour</h3>
            <span className="text-[10px] text-white/20 bg-white/[0.06] px-2 py-0.5 rounded-full">
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
                        : "bg-white/[0.06] border-[#FF1744]/[0.12]"
                    )}>
                      {goal.done && <IconCheck className="text-emerald-400" />}
                    </div>
                    <span className={cn("text-[11px] font-medium", goal.done ? "text-white/40 line-through" : "text-white/65")}>{goal.label}</span>
                  </div>
                  <span className="text-[10px] text-white/20 stat-number">{goal.progress}%</span>
                </div>
                <div className="w-full h-1 rounded-full bg-white/[0.04] overflow-hidden ml-[26px]" style={{ width: "calc(100% - 26px)" }}>
                  <motion.div
                    className={cn("h-full rounded-full", goal.done ? "bg-emerald-500/50" : "bg-[#FF1744]/40")}
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
          PROGRESSION — Donut
      ════════════════════════════════════ */}
      <div className="relative mb-12">
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h2 className="text-sm font-bold text-white/60 mb-5">Progression globale</h2>

          <motion.div
            className="glass-card p-6 rounded-xl flex flex-col items-center justify-center cursor-default"
            variants={fadeUp}
            whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)", transition: { duration: 0.3 } }}
          >
            <DonutChart value={data?.completedLessons || 0} total={data?.totalLessons || 80} />
            <p className="text-xs text-white/30 mt-3 stat-number">
              {data?.completedLessons || 0} / {data?.totalLessons || 80} leçons
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          ACTIVITE — Bar chart + Heatmap
      ════════════════════════════════════ */}
      <div className="relative mb-12">
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          <h2 className="text-sm font-bold text-white/60 mb-5">Activité</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Bar chart — weekly */}
            <motion.div
              className="glass-card p-6 rounded-xl cursor-default"
              variants={fadeUp}
              whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)", transition: { duration: 0.3 } }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xs font-bold text-white/50">Cette semaine</h3>
                <span className="text-[10px] text-white/20">minutes étudiées</span>
              </div>
              <div className="flex items-end justify-between gap-2 h-32">
                {WEEK_ACTIVITY.map((d, i) => {
                  const isToday = i === TODAY_INDEX;
                  return (
                    <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                      <motion.div
                        className={cn(
                          "w-full max-w-[32px] rounded-md relative overflow-hidden",
                          isToday
                            ? "bg-gradient-to-t from-[#FF1744]/30 to-[#FF1744]/50"
                            : "bg-gradient-to-t from-[#FF1744]/10 to-[#FF1744]/25"
                        )}
                        initial={{ height: 0 }}
                        whileInView={{ height: d.minutes > 0 ? `${(d.minutes / MAX_WEEK) * 100}%` : "2px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                      >
                        {d.minutes > 0 && (
                          <motion.span
                            className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-white/40 whitespace-nowrap stat-number"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                          >
                            {d.minutes}
                          </motion.span>
                        )}
                      </motion.div>
                      <span className={cn("text-[9px] font-medium", isToday ? "text-[#FF1744]/60" : "text-white/25")}>{d.day}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Heatmap — 12 weeks */}
            <motion.div
              className="glass-card p-6 rounded-xl cursor-default"
              variants={fadeUp}
              whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)", transition: { duration: 0.3 } }}
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
                      val === 0 && "bg-[#FF1744]/[0.04]",
                      val === 1 && "bg-[#FF1744]/[0.12]",
                      val === 2 && "bg-[#FF1744]/[0.22]",
                      val === 3 && "bg-[#FF1744]/[0.35]",
                      val >= 4 && "bg-[#FF1744]/[0.50]",
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
                  <div key={o} className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: `rgba(255,23,68,${o})` }} />
                ))}
                <span className="text-[9px] text-white/20">Plus</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          ACTIVITE RECENTE — Timeline
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
          className="glass-card p-6 rounded-xl cursor-default"
          variants={fadeUp}
          whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.12)", transition: { duration: 0.3 } }}
        >
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[#FF1744]/10" />

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
                  <TimelineIcon type={item.type} />
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

    </div>
  );
}
