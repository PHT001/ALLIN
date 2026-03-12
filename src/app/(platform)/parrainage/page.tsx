"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

/* ——— Icons ——— */
function IconCopy({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>;
}
function IconCheck({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
}
function IconUsers({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function IconEuro({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M7 12h8" /><path d="M7 9h5" /><path d="M15.5 7A4.5 4.5 0 0 0 12 5.5C9.5 5.5 8 7.5 8 12s1.5 6.5 4 6.5a4.5 4.5 0 0 0 3.5-1.5" /></svg>;
}
function IconClock({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function IconGift({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>;
}
function IconShare({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>;
}
function IconClipboard({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>;
}
function IconShield({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>;
}
function IconTrendingUp({ className }: { className?: string }) {
  return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
}

/* ——— Animated Counter ——— */
function AnimatedNumber({ value, isCurrency = false, className = "" }: { value: number; isCurrency?: boolean; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (v) => {
    if (isCurrency) return (v / 100).toFixed(2).replace(".", ",") + "\u20AC";
    return Math.round(v).toString();
  });
  const isInView = useInView(ref, { once: true });
  useEffect(() => { if (isInView) animate(motionVal, value, { duration: 1.2, ease: "easeOut" }); }, [isInView, value, motionVal]);
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* ——— Types ——— */
interface ReferralItem { id: string; referredName: string; referredEmail: string; tier: string | null; commission: number; status: string; createdAt: string; paidAt: string | null; }
interface ReferralData { referralCode: string; stats: { totalReferrals: number; confirmedReferrals: number; totalEarned: number; pendingAmount: number; paidAmount: number; }; referrals: ReferralItem[]; }

/* ——— Helpers ——— */
function formatCents(cents: number): string { return (cents / 100).toFixed(2).replace(".", ",") + "\u20AC"; }
function tierLabel(tier: string | null): string { if (!tier) return "En attente"; const map: Record<string, string> = { starter: "Starter", academy: "Academy", one_to_one: "One-to-One" }; return map[tier] ?? tier; }
function statusBadge(status: string) {
  const c: Record<string, { label: string; style: string }> = {
    pending: { label: "En attente", style: "text-white/40 bg-white/[0.04] border-white/[0.08]" },
    confirmed: { label: "Confirmé", style: "text-white/60 bg-white/[0.06] border-white/[0.12]" },
    paid: { label: "Payé", style: "text-white/70 bg-white/[0.08] border-white/[0.15]" },
  };
  const s = c[status] ?? c.pending;
  return <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${s.style}`}>{s.label}</span>;
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function ParrainagePage() {
  const [data, setData] = useState<ReferralData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/referral")
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => { if (d.stats) setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const referralLink = data ? `${typeof window !== "undefined" ? window.location.origin : ""}/register?ref=${data.referralCode}` : "";
  function copyLink() { navigator.clipboard.writeText(referralLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }

  if (loading) return (
    <div className="max-w-5xl animate-pulse space-y-6">
      <div className="h-56 bg-white/[0.02] rounded-2xl" />
      <div className="grid grid-cols-3 gap-4"><div className="h-24 bg-white/[0.02] rounded-xl" /><div className="h-24 bg-white/[0.02] rounded-xl" /><div className="h-24 bg-white/[0.02] rounded-xl" /></div>
    </div>
  );
  if (!data) return null;

  return (
    <div className="max-w-5xl">

      {/* ════════════════════════════════════
          HERO — Big "20%" behind card
      ════════════════════════════════════ */}
      <div className="relative mb-16">
        {/* Giant background text */}
        <motion.div
          className="absolute -top-8 -left-4 sm:-top-12 sm:-left-6 select-none pointer-events-none z-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[140px] sm:text-[200px] lg:text-[260px] font-black text-white/[0.03] leading-none tracking-tighter">
            20%
          </span>
        </motion.div>

        {/* Content on top */}
        <motion.div
          className="relative z-10 pt-16 sm:pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="text-[11px] font-medium text-white/20 uppercase tracking-[0.2em] mb-4 block">Programme Partenaire</span>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-white/95 mb-4">
            Recommande Opexia.
            <br />
            <span className="text-white/40">Gagne ta commission.</span>
          </h1>
          <p className="text-sm sm:text-base text-white/30 max-w-lg leading-relaxed">
            Pour chaque inscription via ton lien, tu touches 20% du forfait choisi par ton filleul. Sans plafond, sans conditions.
          </p>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          REFERRAL LINK — with big "LIEN" bg
      ════════════════════════════════════ */}
      <motion.div
        className="glass-card interactive-card relative mb-12 overflow-hidden rounded-2xl group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        whileHover={{
          borderColor: "rgba(255,255,255,0.14)",
          boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 40px rgba(255,255,255,0.03)",
          transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        }}
      >
        {/* BG text */}
        <span className="absolute -right-4 -top-6 text-[120px] sm:text-[160px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
          LIEN
        </span>

        <div className="relative p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-5">
            <IconGift className="text-white/25" />
            <span className="text-xs font-medium text-white/35">Ton lien de parrainage</span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex-1 bg-black/40 border border-white/[0.06] rounded-xl px-5 py-3.5 text-sm text-white/40 font-mono truncate">
              {referralLink}
            </div>
            <motion.button
              onClick={copyLink}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black text-sm font-bold shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {copied ? <IconCheck className="text-black" /> : <IconCopy className="text-black" />}
              {copied ? "Copié !" : "Copier le lien"}
            </motion.button>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-[10px] text-white/15 uppercase tracking-wider">Code</span>
            <span className="text-xs font-mono font-bold text-white/50 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">{data.referralCode}</span>
          </div>
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          STATS — with big "STATS" bg
      ════════════════════════════════════ */}
      <div className="relative mb-14">
        <span className="absolute -left-2 -top-10 text-[100px] sm:text-[130px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
          STATS
        </span>

        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {[
            { icon: <IconUsers className="text-white/30 group-hover:text-white/50 transition-colors duration-300" />, label: "Filleuls", value: data.stats.totalReferrals, sub: `${data.stats.confirmedReferrals} confirmés` },
            { icon: <IconEuro className="text-white/30 group-hover:text-white/50 transition-colors duration-300" />, label: "Gagné", value: data.stats.totalEarned, isCurrency: true, sub: `${formatCents(data.stats.paidAmount)} versé` },
            { icon: <IconClock className="text-white/30 group-hover:text-white/50 transition-colors duration-300" />, label: "En attente", value: data.stats.pendingAmount, isCurrency: true, sub: "À venir" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="glass-card interactive-card rounded-xl p-5 group cursor-default"
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                borderColor: "rgba(255,255,255,0.16)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.03)",
                transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
              }}
            >
              <div className="relative z-[3]">
                <div className="flex items-center gap-2 mb-3">
                  {s.icon}
                  <span className="text-[11px] text-white/20 font-medium uppercase tracking-wider group-hover:text-white/35 transition-colors duration-300">{s.label}</span>
                </div>
                <p className="text-2xl font-black text-white/90">
                  <AnimatedNumber value={s.value} isCurrency={s.isCurrency} />
                </p>
                <p className="text-[11px] text-white/15 mt-1 group-hover:text-white/25 transition-colors duration-300">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          HOW IT WORKS — with big step numbers
      ════════════════════════════════════ */}
      <motion.div
        className="mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <motion.p className="text-[11px] font-medium text-white/20 uppercase tracking-[0.2em] mb-6" variants={fadeUp}>
          Comment ca marche
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num: "01", icon: <IconShare className="text-violet-400" />, title: "Partage ton lien", desc: "Envoie-le par message, email ou réseaux sociaux.", gradient: "from-violet-500/12 to-violet-500/[0.02]", border: "border-violet-500/15", hoverBorder: "rgba(139,92,246,0.35)" },
            { num: "02", icon: <IconClipboard className="text-cyan-400" />, title: "Il s'inscrit", desc: "Ton filleul choisit un forfait et crée son compte.", gradient: "from-cyan-500/12 to-cyan-500/[0.02]", border: "border-cyan-500/15", hoverBorder: "rgba(6,182,212,0.35)" },
            { num: "03", icon: <IconEuro className="text-emerald-400" />, title: "Tu gagnes 20%", desc: "Commission créditée à la confirmation du paiement.", gradient: "from-emerald-500/12 to-emerald-500/[0.02]", border: "border-emerald-500/15", hoverBorder: "rgba(16,185,129,0.35)" },
          ].map((s) => (
            <motion.div
              key={s.num}
              className={`interactive-card relative overflow-hidden rounded-xl border ${s.border} bg-gradient-to-b ${s.gradient} p-6 group cursor-default`}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              whileHover={{
                y: -7,
                scale: 1.025,
                borderColor: s.hoverBorder,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(255,255,255,0.04)",
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
              }}
            >
              {/* Big step number behind */}
              <span className="absolute -right-3 -top-4 text-[80px] font-black text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-white/[0.07] transition-colors duration-500">
                {s.num}
              </span>

              <div className="relative z-[3]">
                <motion.div className="mb-4" whileHover={{ scale: 1.15, rotate: -8, transition: { duration: 0.3 } }}>{s.icon}</motion.div>
                <h3 className="text-sm font-bold text-white/80 mb-1.5 group-hover:text-white/95 transition-colors duration-300">{s.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/40 transition-colors duration-300">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          COMMISSIONS — with big euro sign bg
      ════════════════════════════════════ */}
      <motion.div
        className="relative mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <span className="absolute -right-6 -top-14 text-[160px] sm:text-[200px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
          &euro;
        </span>

        <motion.p className="text-[11px] font-medium text-white/20 uppercase tracking-[0.2em] mb-6 relative z-10" variants={fadeUp}>
          Commissions par forfait
        </motion.p>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { tier: "Starter", price: "49\u20AC", commission: "+9,80\u20AC", desc: "Fondamentaux", gradient: "from-white/[0.03] to-transparent", border: "border-white/[0.06]", commColor: "text-white/70", hoverBorder: "rgba(255,255,255,0.18)" },
            { tier: "Academy", price: "399\u20AC", commission: "+79,80\u20AC", desc: "13 modules complets", popular: true, gradient: "from-emerald-500/10 to-emerald-500/[0.02]", border: "border-emerald-500/20", commColor: "text-emerald-400", hoverBorder: "rgba(16,185,129,0.4)" },
            { tier: "One-to-One", price: "1 299\u20AC", commission: "+259,80\u20AC", desc: "Coaching inclus", gradient: "from-amber-500/10 to-amber-500/[0.02]", border: "border-amber-500/20", commColor: "text-amber-400", hoverBorder: "rgba(245,158,11,0.4)" },
          ].map((t) => (
            <motion.div
              key={t.tier}
              className={`interactive-card relative overflow-hidden rounded-xl border ${t.border} bg-gradient-to-b ${t.gradient} p-6 group cursor-default`}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              whileHover={{
                y: -7,
                scale: 1.025,
                borderColor: t.hoverBorder,
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(255,255,255,0.04)",
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
              }}
            >
              {/* Commission amount as bg */}
              <span className="absolute -right-1 -bottom-2 text-[56px] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-500">
                {t.commission}
              </span>

              <div className="relative z-[3]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-white/80 group-hover:text-white/95 transition-colors duration-300">{t.tier}</span>
                  {t.popular && (
                    <span className="text-[9px] font-medium text-emerald-400/70 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 group-hover:text-emerald-400 group-hover:border-emerald-500/35 transition-colors duration-300">
                      Populaire
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-white/20 mb-5 group-hover:text-white/30 transition-colors duration-300">{t.desc}</p>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-white/20 group-hover:text-white/30 transition-colors duration-300">Prix: {t.price}</span>
                  <motion.span
                    className={`text-xl font-black ${t.commColor}`}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    {t.commission}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          FILLEULS — with big "FILLEULS" bg
      ════════════════════════════════════ */}
      <motion.div
        className="glass-card interactive-card relative mb-14 overflow-hidden rounded-2xl group"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        whileHover={{
          borderColor: "rgba(255,255,255,0.14)",
          boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 40px rgba(255,255,255,0.03)",
          transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
        }}
      >
        <span className="absolute -right-4 -top-4 text-[100px] sm:text-[140px] font-black text-white/[0.02] leading-none tracking-tighter select-none pointer-events-none">
          FILLEULS
        </span>

        <div className="relative p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <IconUsers className="text-white/25" />
              <span className="text-sm font-bold text-white/60">Tes filleuls</span>
            </div>
            {data.referrals.length > 0 && (
              <span className="text-[10px] font-medium text-white/20 bg-white/[0.04] px-2 py-0.5 rounded-full">{data.referrals.length}</span>
            )}
          </div>

          {data.referrals.length === 0 ? (
            <div className="text-center py-12">
              <motion.div
                className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconUsers className="text-white/15 w-6 h-6" />
              </motion.div>
              <p className="text-sm text-white/25 mb-1">Aucun filleul</p>
              <p className="text-xs text-white/15">Partage ton lien pour commencer.</p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {data.referrals.map((r, i) => (
                <motion.div
                  key={r.id}
                  className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/[0.02] transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[11px] font-semibold text-white/40 shrink-0">
                      {r.referredName[0]?.toUpperCase() || "?"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white/60 truncate">{r.referredName}</p>
                      <p className="text-[10px] text-white/20">{tierLabel(r.tier)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {r.commission > 0 && <span className="text-sm font-semibold text-white/60">{formatCents(r.commission)}</span>}
                    {statusBadge(r.status)}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* ════════════════════════════════════
          BOTTOM — Guarantees
      ════════════════════════════════════ */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
      >
        {[
          { icon: <IconShield className="text-white/30 group-hover:text-white/50 transition-colors duration-300" />, title: "Transparent", desc: "Suivi en temps réel de tes filleuls, forfaits et commissions." },
          { icon: <IconTrendingUp className="text-white/30 group-hover:text-white/50 transition-colors duration-300" />, title: "Sans limite", desc: "Aucun plafond. 5 filleuls Academy = 399\u20AC. 10 = 798\u20AC." },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="glass-card interactive-card rounded-xl p-5 group cursor-default"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            whileHover={{
              y: -5,
              scale: 1.015,
              borderColor: "rgba(255,255,255,0.15)",
              boxShadow: "0 16px 50px rgba(0,0,0,0.45), 0 0 35px rgba(255,255,255,0.03)",
              transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
            }}
          >
            <div className="relative z-[3]">
              <div className="flex items-center gap-2.5 mb-2">
                {item.icon}
                <span className="text-sm font-bold text-white/60 group-hover:text-white/80 transition-colors duration-300">{item.title}</span>
              </div>
              <p className="text-xs text-white/25 leading-relaxed group-hover:text-white/35 transition-colors duration-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
