"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MODULE_METADATA, WEEKS, TIER_MODULE_ACCESS } from "@/lib/constants";
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

/* ——— Week Themes (colors for week headers) ——— */
const WEEK_THEMES = [
  { accent: "text-emerald-600", accentBg: "bg-emerald-50", border: "border-emerald-200", bar: "bg-emerald-500", ring: "stroke-emerald-500", leftBorder: "border-l-emerald-500", lightBg: "bg-emerald-50" },
  { accent: "text-blue-600", accentBg: "bg-blue-50", border: "border-blue-200", bar: "bg-blue-500", ring: "stroke-blue-500", leftBorder: "border-l-blue-500", lightBg: "bg-blue-50" },
  { accent: "text-violet-600", accentBg: "bg-violet-50", border: "border-violet-200", bar: "bg-violet-500", ring: "stroke-violet-500", leftBorder: "border-l-violet-500", lightBg: "bg-violet-50" },
  { accent: "text-amber-600", accentBg: "bg-amber-50", border: "border-amber-200", bar: "bg-amber-500", ring: "stroke-amber-500", leftBorder: "border-l-amber-500", lightBg: "bg-amber-50" },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
const cardContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

/* ——— Icons ——— */
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconPlay({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>;
}
function IconLock({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
}
function IconClock({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconQuiz({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>;
}
function IconChevron({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
function IconBook({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
}
function IconLayers({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
function IconArrowRight({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
}
function IconClaude({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C8 0 9.5 5 11 6.5C12.5 8 16 8 16 8C16 8 12.5 8 11 9.5C9.5 11 8 16 8 16C8 16 6.5 11 5 9.5C3.5 8 0 8 0 8C0 8 3.5 8 5 6.5C6.5 5 8 0 8 0Z" /></svg>;
}
function IconOpenClaw({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="12" height="9" rx="2" /><circle cx="6" cy="10" r="1.5" fill="currentColor" /><circle cx="10" cy="10" r="1.5" fill="currentColor" /><path d="M8 2v3" /><circle cx="8" cy="1.5" r="1.5" /></svg>;
}

/* ——— Circular Progress ——— */
function CircularProgress({ percentage, size = 56, strokeWidth = 4, strokeColor = "stroke-[#FF1744]", className }: {
  percentage: number; size?: number; strokeWidth?: number; strokeColor?: string; className?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-gray-200" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={strokeWidth} strokeLinecap="round" className={strokeColor} strokeDasharray={circumference} strokeDashoffset={offset} style={{ transition: "stroke-dashoffset 1s ease-out" }} />
      </svg>
      <span className="absolute text-xs font-black text-[#111]">{percentage}%</span>
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
        const activeModule = mods.find((m: ModuleGroup) => m.lessons.some((l: LessonItem) => l.status === "in_progress"));
        if (activeModule) setExpandedModule(activeModule.order);
        else setExpandedModule(1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const accessibleModules = TIER_MODULE_ACCESS[userTier] ?? TIER_MODULE_ACCESS.starter;
  const totalCompleted = modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.status === "completed").length, 0);
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalProgress = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;
  const totalModules = modules.length;

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto animate-pulse space-y-8">
        <div className="space-y-3 py-8">
          <div className="h-10 bg-gray-200 rounded-lg w-56" />
          <div className="h-4 bg-gray-100 rounded w-72" />
        </div>
        {[1, 2, 3].map((i) => <div key={i} className="h-32 bg-gray-100 rounded-2xl" />)}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* ═══════ Hero ═══════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-4 mb-10"
      >
        <div className="flex items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#111] mb-2">Formation</h1>
            <p className="text-sm text-gray-400 mb-5 max-w-md">
              Progresse à ton rythme et deviens un expert IA. Chaque semaine te rapproche de l&apos;autonomie complète.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { icon: IconBook, text: `${totalLessons} leçons` },
                { icon: IconLayers, text: `${totalModules} modules` },
                { icon: IconClock, text: "4 semaines" },
              ].map((pill) => (
                <span key={pill.text} className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                  <pill.icon className="w-3.5 h-3.5 text-[#FF1744]" />
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 hidden sm:block">
            <CircularProgress percentage={totalProgress} size={80} strokeWidth={5} strokeColor="stroke-[#FF1744]" />
          </div>
        </div>
      </motion.div>

      {/* ═══════ Weeks ═══════ */}
      <div className="space-y-14">
        {WEEKS.map((week, weekIdx) => {
          const theme = WEEK_THEMES[weekIdx];
          const weekModuleOrders = week.modules as readonly number[];
          const weekModules = modules.filter((m) => weekModuleOrders.includes(m.order));
          const weekAccessible = weekModuleOrders.some((o) => accessibleModules.includes(o));
          const weekCompleted = weekModules.reduce((sum, m) => sum + m.lessons.filter((l) => l.status === "completed").length, 0);
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
              {/* Week Header */}
              <div className={cn(
                "relative overflow-hidden rounded-2xl bg-white border border-gray-200 mb-6 shadow-sm",
                !weekAccessible && "opacity-60"
              )}>
                <div className={cn("absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl", theme.bar)} />
                <div className="relative p-6 pl-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", theme.accent)}>
                          Semaine {week.week}
                        </span>
                        {weekAccessible ? (
                          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", theme.accentBg, theme.accent, theme.border)}>
                            {userTier === "starter" && week.week === 1 ? "Starter" : "Academy"}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200">
                            <IconLock className="w-2.5 h-2.5" /> Academy
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-bold text-[#111] mb-1">{week.title}</h2>
                      <p className="text-sm text-gray-400 max-w-lg">{week.subtitle}</p>
                    </div>
                    {weekAccessible && weekTotal > 0 && (
                      <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-1.5">
                        <CircularProgress percentage={weekProgress} size={52} strokeWidth={3.5} strokeColor={theme.ring} />
                        <span className="text-[10px] text-gray-400 font-semibold">{weekCompleted}/{weekTotal}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Module Cards */}
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
                        "group relative rounded-2xl border overflow-hidden transition-all duration-300 bg-white",
                        isExpanded && "lg:col-span-2",
                        modAccessible
                          ? "border-gray-200 hover:shadow-lg hover:shadow-gray-100 hover:border-gray-300"
                          : "border-gray-100 bg-gray-50/50",
                      )}
                    >
                      {/* Module header */}
                      <button
                        onClick={() => { if (!modAccessible) return; setExpandedModule(isExpanded ? null : mod.order); }}
                        disabled={!modAccessible}
                        className={cn("w-full flex items-center gap-4 p-5 text-left transition-colors", modAccessible ? "cursor-pointer" : "cursor-default")}
                      >
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border",
                          modAccessible
                            ? cn(theme.lightBg, theme.border, hasActive && "ring-2 ring-[#FF1744]/20")
                            : "bg-gray-100 border-gray-200"
                        )}>
                          {modAccessible ? (
                            <span className={cn("text-lg font-black", theme.accent)}>{String(mod.order).padStart(2, "0")}</span>
                          ) : (
                            <IconLock className="text-gray-300 w-5 h-5" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={cn("text-sm font-bold", modAccessible ? "text-[#111]" : "text-gray-400")}>{mod.title}</h3>
                            {hasClaude && (
                              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-orange-50 border border-orange-200 flex-shrink-0" title="Claude">
                                <IconClaude className="text-orange-500 w-3.5 h-3.5" />
                              </span>
                            )}
                            {hasOpenClaw && (
                              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-red-50 border border-red-200 flex-shrink-0" title="OpenClaw">
                                <IconOpenClaw className="text-red-500 w-3.5 h-3.5" />
                              </span>
                            )}
                            {modAccessible && isModuleCompleted && (
                              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                                <IconCheck className="w-3 h-3" /> Terminé
                              </span>
                            )}
                            {modAccessible && hasActive && !isModuleCompleted && (
                              <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 border", theme.accent, theme.accentBg, theme.border)}>
                                En cours
                              </span>
                            )}
                          </div>
                          <p className={cn("text-xs mb-2", modAccessible ? "text-gray-400" : "text-gray-300")}>{mod.description}</p>
                          <div className="flex items-center gap-3">
                            <span className={cn("flex items-center gap-1 text-[10px]", modAccessible ? "text-gray-400" : "text-gray-300")}>
                              <IconClock /> {meta.estimatedTime}
                            </span>
                            <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                            <span className={cn("text-[10px]", modAccessible ? "text-gray-400" : "text-gray-300")}>{meta.lessonCount} leçons</span>
                            {modAccessible && pct > 0 && (
                              <>
                                <span className="w-0.5 h-0.5 rounded-full bg-gray-300" />
                                <span className={cn("text-[10px] font-bold", theme.accent)}>{pct}%</span>
                              </>
                            )}
                          </div>
                        </div>

                        {modAccessible && (
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <div className="hidden sm:block">
                              <div className="w-20 h-2 rounded-full bg-gray-100 overflow-hidden">
                                <div className={cn("h-full rounded-full transition-all duration-700", theme.bar)} style={{ width: `${pct}%`, opacity: pct > 0 ? 1 : 0 }} />
                              </div>
                            </div>
                            <IconChevron className={cn("text-gray-300 transition-transform duration-200", isExpanded && "rotate-90")} />
                          </div>
                        )}
                      </button>

                      {/* Lock overlay */}
                      {!modAccessible && (
                        <div className="absolute inset-0 flex items-end rounded-2xl bg-gradient-to-t from-white/90 via-white/40 to-transparent">
                          <div className="w-full p-5 pt-12 rounded-b-2xl">
                            <div className="flex items-center gap-2">
                              <IconLock className="text-gray-400 w-3.5 h-3.5" />
                              <span className="text-[11px] text-gray-400">{meta.lessonCount} leçons — {mod.title}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Lessons list */}
                      {modAccessible && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="border-t border-gray-100"
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
                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                                      <IconCheck className="text-emerald-500" />
                                    </div>
                                  )}
                                  {isActive && (
                                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center border", theme.accentBg, theme.border)}>
                                      <IconPlay className={theme.accent} />
                                    </div>
                                  )}
                                  {isLocked && (
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                                      <IconLock className="text-gray-300" />
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">{String(lesson.order).padStart(2, "0")}</span>
                                    <h3 className={cn("text-sm font-semibold truncate", isLocked ? "text-gray-300" : "text-[#111]")}>{lesson.title}</h3>
                                  </div>
                                  <p className={cn("text-xs leading-relaxed line-clamp-2", isLocked ? "text-gray-300" : "text-gray-400")}>{lesson.description}</p>
                                  <div className="flex items-center gap-3 mt-2">
                                    <span className={cn("flex items-center gap-1 text-[10px]", isLocked ? "text-gray-300" : "text-gray-400")}><IconClock /> {lesson.duration}</span>
                                    {lesson.hasQuiz && (
                                      <span className={cn("flex items-center gap-1 text-[10px]", lesson.quizPassed ? "text-emerald-500" : isLocked ? "text-gray-300" : "text-gray-400")}>
                                        <IconQuiz /> {lesson.quizPassed ? "Quiz validé" : "Quiz inclus"}
                                      </span>
                                    )}
                                    {isCompleted && lesson.xpEarned > 0 && (
                                      <span className="text-[10px] text-[#FF1744] font-semibold">+{lesson.xpEarned} XP</span>
                                    )}
                                  </div>
                                </div>
                                {!isLocked && (
                                  <div className="flex-shrink-0 self-center">
                                    <IconChevron className={cn("text-gray-300 transition-colors", isActive && theme.accent)} />
                                  </div>
                                )}
                              </>
                            );

                            const sharedClassName = cn(
                              "flex items-start gap-4 px-5 py-4 transition-all relative",
                              !isLast && "border-b border-gray-50",
                              isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-gray-50/50",
                              isActive && "bg-gray-50/30"
                            );

                            return isLocked ? (
                              <div key={lesson.id} className={sharedClassName}>{innerContent}</div>
                            ) : (
                              <Link key={lesson.id} href={`/lessons/${lesson.slug}`} className={sharedClassName}>{innerContent}</Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Upgrade CTA */}
              {!weekAccessible && (
                <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4">
                  <Link
                    href="/formations"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-dashed border-red-200 bg-red-50/50 transition-all group hover:border-[#FF1744] hover:bg-red-50"
                  >
                    <span className="text-xs font-semibold text-gray-500 group-hover:text-[#111] transition-colors">
                      Débloquer 12 modules supplémentaires — 397€
                    </span>
                    <IconArrowRight className="w-3.5 h-3.5 transition-all group-hover:translate-x-0.5 text-[#FF1744]" />
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
