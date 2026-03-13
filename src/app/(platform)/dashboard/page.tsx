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
function IconPerfClock({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
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

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Bonjour";
  if (h < 18) return "Bon après-midi";
  return "Bonsoir";
}

/* ——— Mock Data ——— */
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
const TODAY_INDEX = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

const DAILY_GOALS = [
  { label: "Compléter 1 leçon", progress: 100, done: true },
  { label: "Réussir 1 quiz", progress: 100, done: true },
  { label: "Gagner 50 XP", progress: 68, done: false },
  { label: "Étudier 30 min", progress: 45, done: false },
];

const RECENT = [
  { type: "lesson", text: "Leçon 1 terminée", sub: "Comprendre l'IA", time: "Il y a 2h", color: "bg-emerald-500", icon: "check" },
  { type: "quiz", text: "Quiz réussi", sub: "Score: 85%", time: "Il y a 3h", color: "bg-[#FF1744]", icon: "quiz" },
  { type: "streak", text: "Série de 3 jours", sub: "Continue comme ça !", time: "Hier", color: "bg-amber-500", icon: "flame" },
  { type: "module", text: "Module 1 commencé", sub: "Découvrir Claude", time: "Hier", color: "bg-blue-500", icon: "layers" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

/* ——— Donut Chart ——— */
function DonutChart({ value, total }: { value: number; total: number }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const R = 50;
  const C = 2 * Math.PI * R;
  const offset = C - (pct / 100) * C;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle cx="65" cy="65" r={R} fill="none" stroke="#F3F4F6" strokeWidth="12" />
        <motion.circle
          cx="65" cy="65" r={R}
          fill="none"
          stroke="#FF1744"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          transform="rotate(-90 65 65)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black text-[#111]">{pct}%</span>
        <span className="text-[10px] text-gray-400">complété</span>
      </div>
    </div>
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
        <div className="h-8 bg-gray-200 rounded-lg w-64" />
        <div className="h-4 bg-gray-100 rounded w-80" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => <div key={i} className="h-28 bg-gray-100 rounded-2xl" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl">

      {/* ════ HERO ════ */}
      <motion.div
        className="relative mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111] mb-2">
          {getGreeting()}, {firstName}
        </h1>
        <p className="text-sm text-gray-400">
          {progress > 0
            ? `Tu es à ${progress}% de ta formation. Continue comme ça !`
            : "Commence ta première leçon pour lancer l'aventure."
          }
        </p>
      </motion.div>

      {/* ════ STATS ════ */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {[
          { label: "Progression", value: progress, suffix: "%", icon: IconTarget, iconColor: "text-[#FF1744]", iconBg: "bg-red-50" },
          { label: "Leçons terminées", rawValue: `${data?.completedLessons || 0}/${data?.totalLessons || 80}`, icon: IconLayers, iconColor: "text-emerald-600", iconBg: "bg-emerald-50" },
          { label: "Jours consécutifs", value: data?.streak || 0, icon: IconFlame, iconColor: "text-amber-500", iconBg: "bg-amber-50" },
          { label: "Temps / leçon", rawValue: "18 min", icon: IconPerfClock, iconColor: "text-blue-500", iconBg: "bg-blue-50" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:shadow-gray-100 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              variants={fadeUp}
            >
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-3", stat.iconBg)}>
                <Icon className={stat.iconColor} />
              </div>
              <p className="text-2xl font-black tracking-tight text-[#111]">
                {stat.rawValue ? stat.rawValue : <AnimatedNumber value={stat.value!} suffix={stat.suffix} />}
              </p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ════ CONTINUE LEARNING ════ */}
      {data?.currentLesson && (
        <motion.div
          className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF1744] rounded-l-2xl" />
          <div className="flex items-center gap-4 pl-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <IconPlay className="text-[#FF1744]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#FF1744] font-bold mb-0.5">
                Reprendre la formation
              </p>
              <h3 className="text-sm font-bold text-[#111]">{data.currentLesson.title}</h3>
              <p className="text-xs text-gray-400">
                Leçon {data.currentLesson.order} sur {data.totalLessons}
              </p>
            </div>
          </div>
          <Button href={`/lessons/${data.currentLesson.slug}`} size="sm" className="flex-shrink-0 gap-2">
            Continuer <IconArrowRight />
          </Button>
        </motion.div>
      )}

      {/* ════ MON OFFRE ════ */}
      {(() => {
        const userTier = data?.tier || "starter";
        const currentPlan = TIERS.find((t) => t.id === userTier) || TIERS[0];
        const currentIndex = TIERS.findIndex((t) => t.id === userTier);
        const nextPlan = currentIndex < TIERS.length - 1 ? TIERS[currentIndex + 1] : null;
        const accessibleModules = TIER_MODULE_ACCESS[userTier] || [1];

        return (
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 p-6 mb-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Mon offre actuelle</h2>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-[#111]">{currentPlan.name}</span>
                  <span className="text-lg font-bold text-gray-300">{currentPlan.price}€</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{currentPlan.description}</p>
              </div>
              <div className={cn(
                "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                userTier === "one_to_one" ? "bg-amber-50 text-amber-600 border-amber-200" :
                userTier === "academy" ? "bg-red-50 text-[#FF1744] border-red-200" :
                "bg-gray-50 text-gray-500 border-gray-200"
              )}>
                {userTier === "one_to_one" ? "Premium" : userTier === "academy" ? "Complet" : "Basique"}
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {currentPlan.features.map((f) => (
                <div key={f.text} className="flex items-center gap-2.5 py-1.5">
                  {f.included ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <IconCheck className="text-emerald-500" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-300 text-[10px]">—</span>
                    </div>
                  )}
                  <span className={cn("text-xs", f.included ? "text-gray-600" : "text-gray-300")}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Module access bar */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 mb-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Accès aux modules</span>
                <span className="text-[10px] text-gray-400">{accessibleModules.length}/13 modules</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 13 }, (_, i) => i + 1).map((m) => (
                  <div
                    key={m}
                    className={cn(
                      "flex-1 h-2.5 rounded-full transition-colors",
                      accessibleModules.includes(m) ? "bg-[#FF1744]" : "bg-gray-200"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Upgrade CTA */}
            {nextPlan && (
              <div className="p-4 rounded-xl border-2 border-dashed border-red-200 bg-red-50/50 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#111]">Passer à <span className="text-[#FF1744]">{nextPlan.name}</span></p>
                  <p className="text-xs text-gray-400 mt-0.5">{nextPlan.description}</p>
                </div>
                <a
                  href="/formations"
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-white flex-shrink-0 hover:shadow-lg transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)", boxShadow: "0 2px 12px rgba(255,23,68,0.3)" }}
                >
                  {nextPlan.price}€ →
                </a>
              </div>
            )}
          </motion.div>
        );
      })()}

      {/* ════ PROGRESSION + GOALS ROW ════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Donut */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-bold text-gray-400 mb-4 self-start">Progression globale</h3>
          <DonutChart value={data?.completedLessons || 0} total={data?.totalLessons || 80} />
          <p className="text-xs text-gray-400 mt-3">
            {data?.completedLessons || 0} / {data?.totalLessons || 80} leçons
          </p>
        </motion.div>

        {/* Daily goals */}
        <motion.div
          className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xs font-bold text-gray-400">Objectifs du jour</h3>
            <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
              {DAILY_GOALS.filter((g) => g.done).length}/{DAILY_GOALS.length}
            </span>
          </div>
          <div className="space-y-4">
            {DAILY_GOALS.map((goal, i) => (
              <div key={goal.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center border-2 shrink-0",
                      goal.done
                        ? "bg-emerald-500 border-emerald-500"
                        : "bg-white border-gray-200"
                    )}>
                      {goal.done && <IconCheck className="text-white w-3 h-3" />}
                    </div>
                    <span className={cn("text-sm", goal.done ? "text-gray-400 line-through" : "text-[#111] font-medium")}>{goal.label}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold">{goal.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden ml-[30px]" style={{ width: "calc(100% - 30px)" }}>
                  <motion.div
                    className={cn("h-full rounded-full", goal.done ? "bg-emerald-500" : "bg-[#FF1744]")}
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.progress}%` }}
                    transition={{ duration: 0.7, delay: 0.3 + 0.1 * i, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ════ ACTIVITY BAR CHART ════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xs font-bold text-gray-400">Cette semaine</h3>
          <span className="text-[10px] text-gray-400">minutes étudiées</span>
        </div>
        <div className="flex items-end justify-between gap-3 h-36">
          {WEEK_ACTIVITY.map((d, i) => {
            const isToday = i === TODAY_INDEX;
            return (
              <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                {d.minutes > 0 && (
                  <span className="text-[10px] font-bold text-gray-400">{d.minutes}</span>
                )}
                <motion.div
                  className={cn(
                    "w-full max-w-[40px] rounded-lg",
                    isToday ? "bg-[#FF1744]" : "bg-gray-200"
                  )}
                  initial={{ height: 0 }}
                  whileInView={{ height: d.minutes > 0 ? `${(d.minutes / MAX_WEEK) * 100}%` : "3px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: "easeOut" }}
                />
                <span className={cn("text-[10px] font-semibold", isToday ? "text-[#FF1744]" : "text-gray-400")}>{d.day}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ════ RECENT ACTIVITY ════ */}
      <motion.div
        className="bg-white rounded-2xl border border-gray-200 p-6 mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xs font-bold text-gray-400 mb-5">Activité récente</h3>
        <div className="space-y-0">
          {RECENT.map((item, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-4 py-3.5",
                i < RECENT.length - 1 && "border-b border-gray-100"
              )}
            >
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white", item.color)}>
                {item.icon === "check" && <IconCheck className="w-3.5 h-3.5" />}
                {item.icon === "quiz" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
                {item.icon === "flame" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>}
                {item.icon === "layers" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#111]">{item.text}</p>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
              <span className="text-xs text-gray-300 shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
