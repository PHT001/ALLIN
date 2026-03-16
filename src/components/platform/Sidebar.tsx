"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

/* ——— SVG Icons (18×18, strokeWidth 1.8) ——— */

function IconHome({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
}
function IconNotes({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>);
}
function IconFolder({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>);
}
function IconLessons({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M8 7h6" /><path d="M8 11h4" /></svg>);
}
function IconVideo({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>);
}
function IconBot({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>);
}
function IconPhone({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>);
}
function IconPipeline({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="4" height="18" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="18" y="5" width="4" height="16" rx="1" /></svg>);
}
function IconTemplate({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>);
}
function IconWand({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8L19 13" /><path d="M15 9h0" /><path d="M17.8 6.2L19 5" /><path d="M11 6.2L9.7 5" /><path d="M11 11.8L9.7 13" /><path d="m8 21 8-8" /><path d="M3 16l2-2" /></svg>);
}
function IconStore({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-4h16l1 4" /><path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" /><path d="M9 21V9" /><path d="M3 9h18" /></svg>);
}
function IconProfile({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" /></svg>);
}
function IconGift({ className }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>);
}
function IconStreak({ className }: { className?: string }) {
  return (<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>);
}
function IconXP({ className }: { className?: string }) {
  return (<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>);
}
function IconLogout({ className }: { className?: string }) {
  return (<svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>);
}
function IconLockSmall({ className }: { className?: string }) {
  return (<svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>);
}

/* ——— Data ——— */
type IconComponent = React.ComponentType<{ className?: string }>;
interface NavItem { href: string; label: string; icon: IconComponent; badge?: string; lockedForStarter?: boolean; lockedTeaser?: string; }
interface SidebarSection { id: string; label: string; items: NavItem[]; }

const SIDEBAR_SECTIONS: SidebarSection[] = [
  { id: "overview", label: "Vue d\u2019ensemble", items: [
    { href: "/dashboard", label: "Accueil", icon: IconHome },
    { href: "/notes", label: "Mes notes", icon: IconNotes },
    { href: "/ressources", label: "Ressources", icon: IconFolder },
  ]},
  { id: "academy", label: "Academy", items: [
    { href: "/lessons", label: "Formation", icon: IconLessons },
    { href: "/masterclass", label: "Masterclass", icon: IconVideo, lockedForStarter: true, lockedTeaser: "Masterclass vid\u00e9o exclusives avec \u00e9tudes de cas r\u00e9elles et strat\u00e9gies avanc\u00e9es pour lancer ton business IA." },
  ]},
  { id: "coaching", label: "Coaching", items: [
    { href: "/assistant", label: "Parler \u00e0 l\u2019IA", icon: IconBot, lockedForStarter: true, lockedTeaser: "Un assistant IA personnel qui r\u00e9pond \u00e0 toutes tes questions sur la formation et t\u2019aide \u00e0 avancer." },
    { href: "/coaching", label: "R\u00e9server un appel", icon: IconPhone },
  ]},
  { id: "tools", label: "Outils & Services", items: [
    { href: "/pipeline", label: "Pipeline", icon: IconPipeline },
    { href: "/templates", label: "Templates IA", icon: IconTemplate, lockedForStarter: true, lockedTeaser: "Biblioth\u00e8que de prompts et templates pr\u00eats \u00e0 l\u2019emploi pour tes projets clients et tes automatisations." },
    { href: "/generateur", label: "G\u00e9n\u00e9rateur", icon: IconWand, lockedForStarter: true, lockedTeaser: "G\u00e9n\u00e8re des livrables complets en un clic : landing pages, emails, scripts de vente, propositions commerciales." },
    { href: "/marketplace", label: "Marketplace", icon: IconStore },
  ]},
  { id: "myspace", label: "Mon espace", items: [
    { href: "/profile", label: "Mon Profil", icon: IconProfile },
    { href: "/parrainage", label: "Parrainage", icon: IconGift },
  ]},
];

/* ——— Component ——— */
interface SidebarProps { userName?: string | null; xp?: number; streak?: number; tier?: string; role?: string; open?: boolean; onClose?: () => void; }

function TierBadge({ tier }: { tier: string }) {
  const config = {
    one_to_one: { label: "Premium", classes: "bg-amber-400/15 text-amber-300 border-amber-400/25" },
    academy: { label: "Academy", classes: "bg-white/10 text-white border-white/15" },
    starter: { label: "Starter", classes: "bg-white/8 text-white/60 border-white/10" },
  }[tier] || { label: "Starter", classes: "bg-white/8 text-white/60 border-white/10" };
  return (
    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", config.classes)}>
      {config.label}
    </div>
  );
}

export function Sidebar({ userName, xp = 0, streak = 0, tier = "starter", role, open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [lockedItem, setLockedItem] = useState<NavItem | null>(null);
  const level = Math.floor(xp / 500) + 1;
  const xpInLevel = xp % 500;
  const xpProgress = (xpInLevel / 500) * 100;

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={onClose} />}

      {/* Upgrade overlay */}
      {lockedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={() => setLockedItem(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 mx-4 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl border border-gray-200 p-7 text-center shadow-2xl">
              <div className="mx-auto w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF1744]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#111] mb-1">Acc&egrave;s r&eacute;serv&eacute; &mdash; {lockedItem.label}</h3>
              <p className="text-[13px] text-gray-400 mb-4">Disponible avec le forfait Academy</p>
              {lockedItem.lockedTeaser && (
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 mb-5 text-left">
                  <p className="text-[12px] text-gray-500 leading-relaxed">{lockedItem.lockedTeaser}</p>
                </div>
              )}
              <div className="mb-5 text-left space-y-2">
                {["15 modules complets", "80 le\u00e7ons progressives", "Quiz de validation", "Assistant IA int\u00e9gr\u00e9"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span className="text-[11px] text-gray-500">{f}</span>
                  </div>
                ))}
              </div>
              <a href="/formations" className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #FF1744 0%, #D50000 100%)", boxShadow: "0 4px 20px rgba(255,23,68,0.25)" }}>
                D&eacute;bloquer &mdash; 397&euro;
              </a>
              <button onClick={() => setLockedItem(null)} className="mt-3 text-[11px] text-gray-300 hover:text-gray-500 transition-colors">Fermer</button>
            </div>
          </div>
        </div>
      )}

      <aside className={cn(
        "fixed top-0 left-0 h-full w-[260px] z-50 flex flex-col transition-transform duration-300",
        "md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )} style={{ background: "linear-gradient(180deg, #1A1A2E 0%, #16162A 50%, #0F0F1E 100%)" }}>

        {/* Logo */}
        <div className="px-5 pt-6 pb-4 shrink-0">
          <Link href="/dashboard" className="inline-block">
            <span className="text-[22px] font-bold tracking-tight">
              <span className="text-white">Opex</span>
              <span className="text-[#FF1744]">IA</span>
            </span>
          </Link>
        </div>

        <div className="px-5 mb-4">
          <div className="h-px bg-white/[0.06]" />
          <div className="flex items-center justify-between mt-3">
            <TierBadge tier={tier} />
            {tier === "starter" && (
              <a href="/formations" className="text-[9px] text-[#FF1744] hover:text-white transition-colors font-semibold uppercase tracking-wider">
                Upgrade &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 pb-3 flex flex-col gap-0.5 overflow-y-auto sidebar-scroll">
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.id} className="mb-2">
              <div className="px-3 py-1.5">
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/25 font-semibold">{section.label}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => {
                  const isLocked = item.lockedForStarter && tier === "starter" && role !== "admin";
                  const active = !isLocked && (pathname === item.href || pathname.startsWith(item.href + "/"));
                  const Icon = item.icon;
                  if (isLocked) {
                    return (
                      <button key={item.href} onClick={() => setLockedItem(item)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-white/20 hover:text-white/35 hover:bg-white/[0.03] transition-all duration-150 w-full text-left">
                        <Icon className="text-white/15" />
                        <span className="truncate">{item.label}</span>
                        <IconLockSmall className="ml-auto text-white/10 shrink-0" />
                      </button>
                    );
                  }
                  return (
                    <Link key={item.href} href={item.href} onClick={onClose} className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 active:scale-[0.98]",
                      active ? "bg-[#FF1744]/15 text-white shadow-[inset_0_0_0_1px_rgba(255,23,68,0.2)]" : "text-white/50 hover:text-white/80 hover:bg-white/[0.05]"
                    )}>
                      <Icon className={active ? "text-[#FF1744]" : "text-white/30"} />
                      <span className="truncate">{item.label}</span>
                      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF1744] shrink-0" />}
                      {!active && item.badge && (
                        <span className="text-[9px] font-semibold text-white/20 bg-white/[0.06] px-1.5 py-0.5 rounded-full ml-auto shrink-0">{item.badge}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Streak & XP */}
          <div className="mt-auto mx-1 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", streak > 0 ? "bg-amber-500/15" : "bg-white/[0.06]")}>
                  <IconStreak className={streak > 0 ? "text-amber-400" : "text-white/25"} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 leading-none">Streak</p>
                  <p className="text-sm font-bold text-white">{streak} jour{streak > 1 ? "s" : ""}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 7 }, (_, i) => (
                  <div key={i} className={cn("w-1.5 h-1.5 rounded-full", i < streak ? "bg-amber-400" : "bg-white/[0.08]")} />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF1744]/15 flex items-center justify-center">
                <IconXP className="text-[#FF1744]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between">
                  <p className="text-[10px] text-white/30 leading-none">Level {level}</p>
                  <p className="text-[10px] text-white/15">{xpInLevel}/500</p>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.06] mt-1.5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#FF1744] to-[#FF5252] transition-all duration-500" style={{ width: `${xpProgress}%` }} />
                </div>
                <p className="text-sm font-bold text-white mt-1">{xp.toLocaleString()} XP</p>
              </div>
            </div>
          </div>
        </nav>

        {/* User */}
        <div className="p-3 border-t border-white/[0.06] shrink-0">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1744] to-[#D50000] flex items-center justify-center text-[12px] font-bold text-white shadow-lg shadow-[#FF1744]/20">
              {userName?.[0]?.toUpperCase() || "?"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-white truncate">{userName || "\u00c9l\u00e8ve"}</p>
              <p className="text-[10px] text-white/30">
                {role === "admin" ? "Administrateur" : tier === "one_to_one" ? "Membre Premium" : tier === "academy" ? "Membre Academy" : "Membre Starter"}
              </p>
            </div>
            <button onClick={() => signOut({ callbackUrl: "/" })} className="p-1.5 rounded-lg text-white/20 hover:text-white/50 hover:bg-white/[0.06] transition-colors" title="D&eacute;connexion">
              <IconLogout />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
