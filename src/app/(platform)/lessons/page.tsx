"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MODULE_METADATA, WEEKS, TIER_MODULE_ACCESS, MODULES } from "@/lib/constants";
import type { ModuleMetadata } from "@/lib/constants";

interface LessonItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  duration: string;
  status: "locked" | "in_progress" | "completed";
  quizPassed: boolean;
  hasQuiz: boolean;
  xpEarned: number;
}

interface ModuleGroup {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: LessonItem[];
}

/* ——— Week Themes ——— */
const WEEK_THEMES = [
  { accent: "text-emerald-400", accentBg: "bg-emerald-500/10", border: "border-emerald-500/20", bar: "bg-emerald-400", ring: "stroke-emerald-400", leftBorder: "border-l-emerald-500" },
  { accent: "text-blue-400",    accentBg: "bg-blue-500/10",    border: "border-blue-500/20",    bar: "bg-blue-400",    ring: "stroke-blue-400",    leftBorder: "border-l-blue-500" },
  { accent: "text-violet-400",  accentBg: "bg-violet-500/10",  border: "border-violet-500/20",  bar: "bg-violet-400",  ring: "stroke-violet-400",  leftBorder: "border-l-violet-500" },
  { accent: "text-amber-400",   accentBg: "bg-amber-500/10",   border: "border-amber-500/20",   bar: "bg-amber-400",   ring: "stroke-amber-400",   leftBorder: "border-l-amber-500" },
];

/* ——— Animation Variants ——— */
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

/* ——— SVG Icons ——— */
function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconPlay({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconQuiz({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconClaude({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C8 0 9.5 5 11 6.5C12.5 8 16 8 16 8C16 8 12.5 8 11 9.5C9.5 11 8 16 8 16C8 16 6.5 11 5 9.5C3.5 8 0 8 0 8C0 8 3.5 8 5 6.5C6.5 5 8 0 8 0Z" />
    </svg>
  );
}

function IconOpenClaw({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="12" height="9" rx="2" />
      <circle cx="6" cy="10" r="1.5" fill="currentColor" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      <path d="M8 2v3" />
      <circle cx="8" cy="1.5" r="1.5" />
    </svg>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C8 0 9.5 5 11 6.5C12.5 8 16 8 16 8C16 8 12.5 8 11 9.5C9.5 11 8 16 8 16C8 16 6.5 11 5 9.5C3.5 8 0 8 0 8C0 8 3.5 8 5 6.5C6.5 5 8 0 8 0Z" />
    </svg>
  );
}

/* ——— Circular Progress Ring ——— */
function CircularProgress({
  percentage,
  size = 56,
  strokeWidth = 4,
  strokeColor = "stroke-[#FF1744]",
  className,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-[#FF1744]/[0.08]"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={strokeColor}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <span className="absolute text-xs font-black text-white/80 stat-number">
        {percentage}%
      </span>
    </div>
  );
}

const DEFAULT_META: ModuleMetadata = { brands: [], difficulty: "debutant", estimatedTime: "~2h", lessonCount: 6 };

export default function LessonsPage() {
  const [modules, setModules] = useState<ModuleGroup[]>([]);
  const [userTier, setUserTier] = useState<string>("starter");
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/lessons")
      .then((r) => r.json())
      .then((data) => {
        const mods = Array.isArray(data) ? data : data.modules;
        const tier = Array.isArray(data) ? "academy" : data.userTier;
        setModules(mods);
        setUserTier(tier);
        const activeModule = mods.find((m: ModuleGroup) =>
          m.lessons.some((l: LessonItem) => l.status === "in_progress")
        );
        if (activeModule) setExpandedModule(activeModule.order);
        else setExpandedModule(1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.starter;

  const totalCompleted = modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.status === "completed").length,
    0
  );
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalProgress = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;
  const totalModules = modules.length;

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto animate-pulse space-y-8">
        <div className="space-y-3 py-8">
          <div className="h-10 bg-white/5 rounded-lg w-56" />
          <div className="h-4 bg-white/5 rounded w-72" />
          <div className="flex gap-3 mt-4">
            <div className="h-7 bg-white/5 rounded-full w-24" />
            <div className="h-7 bg-white/5 rounded-full w-24" />
            <div className="h-7 bg-white/5 rounded-full w-24" />
          </div>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-4">
            <div className="h-28 bg-white/[0.03] rounded-2xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="h-28 bg-white/[0.03] rounded-xl" />
              <div className="h-28 bg-white/[0.03] rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* ═══════ Hero Header — Full bleed ═══════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-8 mb-12"
      >
        <div className="flex items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Formation</h1>
            <p className="text-sm text-white/35 mb-5 max-w-md">
              Progresse à ton rythme et deviens un expert IA. Chaque semaine te rapproche de l&apos;autonomie complète.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/50 bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/[0.08]">
                <IconBook className="w-3.5 h-3.5 text-[#FF1744]/60" />
                {totalLessons} leçons
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/50 bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/[0.08]">
                <IconLayers className="w-3.5 h-3.5 text-[#FF1744]/60" />
                {totalModules} modules
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/50 bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/[0.08]">
                <IconClock className="w-3.5 h-3.5 text-[#FF1744]/60" />
                4 semaines
              </span>
            </div>
          </div>

          {/* Global progress ring */}
          <div className="flex-shrink-0 hidden sm:block">
            <CircularProgress
              percentage={totalProgress}
              size={80}
              strokeWidth={5}
              strokeColor="stroke-[#FF1744]"
            />
          </div>
        </div>
      </motion.div>

      {/* ═══════ Weeks ═══════ */}
      <div className="space-y-16">
        {WEEKS.map((week, weekIdx) => {
          const theme = WEEK_THEMES[weekIdx];
          const weekModuleOrders = week.modules as readonly number[];
          const weekModules = modules.filter((m) => weekModuleOrders.includes(m.order));
          const weekAccessible = weekModuleOrders.some((o) => accessibleModules.includes(o));
          const weekCompleted = weekModules.reduce(
            (sum, m) => sum + m.lessons.filter((l) => l.status === "completed").length, 0
          );
          const weekTotal = weekModules.reduce((sum, m) => sum + m.lessons.length, 0);
          const weekProgress = weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;

          return (
            <motion.section
              key={week.week}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* ——— Week Header — Left border accent ——— */}
              <div className={cn(
                "relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] mb-6 border-l-[3px]",
                theme.leftBorder,
                !weekAccessible && "opacity-50"
              )}>
                {/* Background hero number */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none">
                  <span className={cn("text-[140px] font-black leading-none opacity-[0.05]", theme.accent)}>
                    {String(week.week).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", theme.accent)}>
                          Semaine {week.week}
                        </span>
                        <span className="w-px h-3 bg-white/10" />
                        {weekAccessible ? (
                          <span className={cn(
                            "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                            theme.accentBg, theme.accent
                          )}>
                            {userTier === "starter" && week.week === 1 ? "Starter" : "Academy"}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] font-semibold text-white/30 bg-white/[0.05] px-2 py-0.5 rounded-full">
                            <IconLock className="w-2.5 h-2.5" /> Academy
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-white/90 mb-1">{week.title}</h2>
                      <p className="text-sm text-white/35 max-w-lg">{week.subtitle}</p>
                    </div>

                    {/* Week progress ring */}
                    {weekAccessible && weekTotal > 0 && (
                      <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-1.5">
                        <CircularProgress
                          percentage={weekProgress}
                          size={52}
                          strokeWidth={3.5}
                          strokeColor={theme.ring}
                        />
                        <span className="text-[10px] text-white/30 font-medium stat-number">
                          {weekCompleted}/{weekTotal}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ——— Module Cards Grid ——— */}
              <motion.div
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                {weekModules.map((mod) => {
                  const modAccessible = accessibleModules.includes(mod.order);
                  const completed = mod.lessons.filter((l) => l.status === "completed").length;
                  const pct = mod.lessons.length > 0 ? Math.round((completed / mod.lessons.length) * 100) : 0;
                  const isExpanded = expandedModule === mod.order;
                  const hasActive = mod.lessons.some((l) => l.status === "in_progress");
                  const isModuleCompleted = completed === mod.lessons.length && mod.lessons.length > 0;
                  const meta = MODULE_METADATA[mod.order] ?? DEFAULT_META;
                  const hasClaude = meta.brands.includes("claude");
                  const hasOpenClaw = meta.brands.includes("openclaw");

                  return (
                    <motion.div
                      key={mod.id}
                      variants={cardVariants}
                      className={cn(
                        "group relative rounded-xl border overflow-hidden transition-all duration-300",
                        isExpanded && "lg:col-span-2",
                        modAccessible
                          ? "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.04)]"
                          : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.01)]",
                      )}
                    >
                      {/* Module header button */}
                      <button
                        onClick={() => {
                          if (!modAccessible) return;
                          setExpandedModule(isExpanded ? null : mod.order);
                        }}
                        disabled={!modAccessible}
                        className={cn(
                          "w-full flex items-center gap-4 p-5 text-left transition-colors",
                          modAccessible ? "cursor-pointer" : "cursor-default"
                        )}
                      >
                        {/* Module number box */}
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
                          modAccessible
                            ? cn("border bg-[rgba(255,255,255,0.04)]", theme.border,
                                hasActive && "ring-2 ring-[#FF1744]/20"
                              )
                            : "border border-white/[0.06] bg-white/[0.02]"
                        )}>
                          {modAccessible ? (
                            <span className={cn("text-lg font-black", theme.accent)}>
                              {String(mod.order).padStart(2, "0")}
                            </span>
                          ) : (
                            <IconLock className="text-white/20 w-5 h-5" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={cn(
                              "text-sm font-bold",
                              modAccessible ? "text-white/90" : "text-white/30"
                            )}>
                              {mod.title}
                            </h3>

                            {hasClaude && (
                              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/20 flex-shrink-0" title="Claude">
                                <IconClaude className="text-orange-400 w-3.5 h-3.5" />
                              </span>
                            )}
                            {hasOpenClaw && (
                              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-red-500/10 border border-red-500/20 flex-shrink-0" title="OpenClaw">
                                <IconOpenClaw className="text-red-400 w-3.5 h-3.5" />
                              </span>
                            )}

                            {modAccessible && isModuleCompleted && (
                              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex-shrink-0 border border-emerald-500/20">
                                <IconCheck className="w-3 h-3" /> Terminé
                              </span>
                            )}
                            {modAccessible && hasActive && !isModuleCompleted && (
                              <span className={cn(
                                "text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 border",
                                theme.accent, theme.accentBg, theme.border
                              )}>
                                En cours
                              </span>
                            )}
                          </div>

                          <p className={cn(
                            "text-xs mb-2",
                            modAccessible ? "text-white/35" : "text-white/15"
                          )}>
                            {mod.description}
                          </p>

                          <div className="flex items-center gap-3">
                            <span className={cn("flex items-center gap-1 text-[10px]", modAccessible ? "text-white/30" : "text-white/15")}>
                              <IconClock /> {meta.estimatedTime}
                            </span>
                            <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                            <span className={cn("text-[10px]", modAccessible ? "text-white/30" : "text-white/15")}>
                              {meta.lessonCount} leçons
                            </span>
                            {modAccessible && pct > 0 && (
                              <>
                                <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                                <span className={cn("text-[10px] font-semibold stat-number", theme.accent)}>
                                  {pct}%
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Right side — progress + chevron */}
                        {modAccessible && (
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <div className="hidden sm:block">
                              <div className="w-20 h-2 rounded-full bg-white/[0.06] overflow-hidden">
                                <div
                                  className={cn("h-full rounded-full transition-all duration-700", theme.bar)}
                                  style={{ width: `${pct}%`, opacity: pct > 0 ? 1 : 0 }}
                                />
                              </div>
                            </div>
                            <IconChevron
                              className={cn(
                                "text-white/20 transition-transform duration-200",
                                isExpanded && "rotate-90"
                              )}
                            />
                          </div>
                        )}
                      </button>

                      {/* Lock overlay — visible but dimmed, no blur */}
                      {!modAccessible && (
                        <div className="absolute inset-0 flex items-end rounded-xl">
                          <div className="w-full bg-gradient-to-t from-[#09090F]/90 via-[#09090F]/40 to-transparent p-5 pt-12 rounded-b-xl">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <IconLock className="text-[#FF1744]/50 w-3.5 h-3.5" />
                                <span className="text-[11px] text-white/40">
                                  {meta.lessonCount} leçons — {mod.title}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ——— Lessons list (expanded) ——— */}
                      {modAccessible && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="border-t border-[rgba(255,255,255,0.06)]"
                        >
                          {mod.lessons.map((lesson, idx) => {
                            const isLocked = lesson.status === "locked";
                            const isActive = lesson.status === "in_progress";
                            const isCompleted = lesson.status === "completed";
                            const isLast = idx === mod.lessons.length - 1;

                            const innerContent = (
                              <>
                                <div className="flex-shrink-0 mt-0.5">
                                  {isCompleted && (
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                      <IconCheck className="text-emerald-400" />
                                    </div>
                                  )}
                                  {isActive && (
                                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", theme.accentBg, "border", theme.border)}>
                                      <IconPlay className={theme.accent} />
                                    </div>
                                  )}
                                  {isLocked && (
                                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                                      <IconLock className="text-white/20" />
                                    </div>
                                  )}
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-wide">
                                      {String(lesson.order).padStart(2, "0")}
                                    </span>
                                    <h3 className={cn(
                                      "text-sm font-semibold truncate",
                                      isLocked ? "text-white/30" : "text-white/85"
                                    )}>
                                      {lesson.title}
                                    </h3>
                                  </div>
                                  <p className={cn(
                                    "text-xs leading-relaxed line-clamp-2",
                                    isLocked ? "text-white/15" : "text-white/35"
                                  )}>
                                    {lesson.description}
                                  </p>

                                  <div className="flex items-center gap-3 mt-2">
                                    <span className={cn(
                                      "flex items-center gap-1 text-[10px]",
                                      isLocked ? "text-white/15" : "text-white/30"
                                    )}>
                                      <IconClock /> {lesson.duration}
                                    </span>
                                    {lesson.hasQuiz && (
                                      <span className={cn(
                                        "flex items-center gap-1 text-[10px]",
                                        lesson.quizPassed
                                          ? "text-emerald-400/70"
                                          : isLocked ? "text-white/15" : "text-white/30"
                                      )}>
                                        <IconQuiz /> {lesson.quizPassed ? "Quiz validé" : "Quiz inclus"}
                                      </span>
                                    )}
                                    {isCompleted && lesson.xpEarned > 0 && (
                                      <span className="text-[10px] text-[#FF1744]/60 font-medium stat-number">
                                        +{lesson.xpEarned} XP
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {!isLocked && (
                                  <div className="flex-shrink-0 self-center">
                                    <IconChevron className={cn(
                                      "text-white/15 transition-colors",
                                      isActive && theme.accent
                                    )} />
                                  </div>
                                )}
                              </>
                            );

                            const sharedClassName = cn(
                              "flex items-start gap-4 px-5 py-4 transition-all relative",
                              !isLast && "border-b border-[rgba(255,255,255,0.04)]",
                              isLocked
                                ? "opacity-40 cursor-not-allowed"
                                : "cursor-pointer hover:bg-white/[0.03]",
                              isActive && "bg-white/[0.02]"
                            );

                            return isLocked ? (
                              <div key={lesson.id} className={sharedClassName}>
                                {innerContent}
                              </div>
                            ) : (
                              <Link key={lesson.id} href={`/lessons/${lesson.slug}`} className={sharedClassName}>
                                {innerContent}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Upgrade CTA for locked weeks */}
              {!weekAccessible && (
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-4"
                >
                  <Link
                    href="/formations"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF1744]/[0.06] to-transparent border border-[#FF1744]/[0.10] transition-all group w-fit hover:border-[#FF1744]/[0.20] hover:from-[#FF1744]/[0.10]"
                  >
                    <IconSparkle className="text-[#FF1744]/60" />
                    <span className="text-xs font-medium text-white/50 group-hover:text-white/70 transition-colors">
                      Débloquer 12 modules supplémentaires — 397€
                    </span>
                    <IconArrowRight className="w-3.5 h-3.5 transition-all group-hover:translate-x-0.5 text-[#FF1744]/40 group-hover:text-[#FF1744]/80" />
                  </Link>
                </motion.div>
              )}
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
