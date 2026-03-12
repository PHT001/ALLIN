"use client";

import { Suspense, useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { COACHING_PRICE_DISPLAY } from "@/lib/constants";
import { useSearchParams } from "next/navigation";

interface Slot {
  date: string;
  label: string;
  dayLabel: string;
  time: string;
}

interface CoachingSession {
  id: string;
  date: string;
  slot: string;
  status: string;
  amount: number;
  createdAt: string;
}

/* ——— SVG Icons ——— */
function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconVideo({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="15" height="12" rx="2" />
      <path d="M17 9l5-3v12l-5-3z" />
    </svg>
  );
}

const INCLUDES = [
  "Review de tes projets et code en direct",
  "Conseils stratégie business personnalisés",
  "Questions techniques et architecture",
  "Plan d'action concret post-session",
];

export default function CoachingPage() {
  return (
    <Suspense fallback={<div className="animate-pulse space-y-6"><div className="h-8 bg-white/5 rounded-lg w-48" /><div className="h-48 bg-white/5 rounded-xl" /></div>}>
      <CoachingContent />
    </Suspense>
  );
}

function CoachingContent() {
  const searchParams = useSearchParams();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [sessions, setSessions] = useState<CoachingSession[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSuccessMessage("Session réservée avec succès ! Tu recevras un email de confirmation.");
    }
    if (searchParams.get("cancelled") === "true") {
      setSuccessMessage(null);
    }
  }, [searchParams]);

  useEffect(() => {
    fetch("/api/coaching/slots")
      .then((r) => r.json())
      .then((data) => {
        setSlots(data.slots || []);
        setSessions(data.sessions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleBooking = async () => {
    if (!selectedSlot || booking) return;
    setBooking(true);

    try {
      const res = await fetch("/api/coaching/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot: selectedSlot }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Erreur lors de la reservation");
        setBooking(false);
      }
    } catch {
      alert("Erreur de connexion");
      setBooking(false);
    }
  };

  // Group slots by week
  const groupedSlots: Record<string, Slot[]> = {};
  for (const slot of slots) {
    const d = new Date(slot.date);
    const weekStart = new Date(d);
    weekStart.setDate(d.getDate() - d.getDay() + 1);
    const weekLabel = `Semaine du ${weekStart.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}`;
    if (!groupedSlots[weekLabel]) groupedSlots[weekLabel] = [];
    groupedSlots[weekLabel].push(slot);
  }

  const confirmedSessions = sessions.filter((s) => s.status === "confirmed" && new Date(s.date) >= new Date());
  const pastSessions = sessions.filter((s) => s.status === "confirmed" && new Date(s.date) < new Date());

  if (loading) {
    return (
      <div className="max-w-4xl animate-pulse space-y-6">
        <div className="h-8 bg-white/5 rounded-lg w-48" />
        <div className="h-4 bg-white/5 rounded w-72" />
        <div className="h-48 bg-white/5 rounded-xl" />
        <div className="h-64 bg-white/5 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight mb-1">Coaching</h1>
        <p className="text-sm text-white/40">
          Reserve une session de coaching personnalisee avec un expert.
        </p>
      </div>

      {/* Success message */}
      {successMessage && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <IconCheck className="text-emerald-400" />
          </div>
          <p className="text-sm text-emerald-300">{successMessage}</p>
        </div>
      )}

      {/* Coaching offer card */}
      <GlassCard className="p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left — info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                <IconVideo className="text-white/60" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Session de Review</h2>
                <p className="text-xs text-white/35">Visio 1-to-1 avec un coach Opexia</p>
              </div>
            </div>

            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Une heure en visio pour accélérer ta progression. Review de projets,
              questions techniques, stratégie business — on s&apos;adapte à tes besoins.
            </p>

            <div className="space-y-2">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <IconCheck className="text-emerald-400 w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-xs text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — price */}
          <div className="lg:border-l border-white/[0.06] lg:pl-6 flex flex-col items-center justify-center lg:min-w-[140px]">
            <div className="text-center">
              <p className="text-3xl font-black text-white">{COACHING_PRICE_DISPLAY}&euro;</p>
              <p className="text-xs text-white/30 mt-0.5">par session de 1h</p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Upcoming sessions */}
      {confirmedSessions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-white/70 mb-3 flex items-center gap-2">
            <IconCalendar className="text-emerald-400" />
            Tes prochaines sessions
          </h3>
          <div className="space-y-2">
            {confirmedSessions.map((s) => {
              const d = new Date(s.date);
              return (
                <div
                  key={s.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <IconCheck className="text-emerald-400 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/80">
                      {d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                    </p>
                    <p className="text-xs text-white/35">
                      {d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })} — Confirmée
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Slot selection */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-white/70 mb-1 flex items-center gap-2">
          <IconCalendar className="text-white/40" />
          Choisis ton créneau
        </h3>
        <p className="text-xs text-white/30 mb-4">Sélectionne un créneau disponible pour ta session de coaching.</p>

        {Object.keys(groupedSlots).length === 0 ? (
          <GlassCard className="p-8 text-center">
            <IconCalendar className="w-10 h-10 text-white/15 mx-auto mb-3" />
            <p className="text-sm text-white/40">Aucun créneau disponible pour le moment.</p>
            <p className="text-xs text-white/25 mt-1">Reviens bientôt, de nouveaux créneaux seront ajoutés.</p>
          </GlassCard>
        ) : (
          <div className="space-y-5">
            {Object.entries(groupedSlots).map(([weekLabel, weekSlots]) => (
              <div key={weekLabel}>
                <p className="text-[10px] font-semibold text-white/25 uppercase tracking-wider mb-2">
                  {weekLabel}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {weekSlots.map((slot) => {
                    const isSelected = selectedSlot === slot.date;
                    const d = new Date(slot.date);
                    const dayName = d.toLocaleDateString("fr-FR", { weekday: "long" });
                    const dayNum = d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });

                    return (
                      <button
                        key={slot.date}
                        onClick={() => setSelectedSlot(isSelected ? null : slot.date)}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl border transition-all text-left",
                          isSelected
                            ? "bg-white/[0.08] border-white/[0.2] shadow-[0_0_12px_rgba(255,255,255,0.04)]"
                            : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]"
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-lg flex flex-col items-center justify-center flex-shrink-0 text-center",
                          isSelected ? "bg-white/[0.1]" : "bg-white/[0.04]"
                        )}>
                          <span className="text-[9px] font-bold text-white/40 uppercase leading-none">
                            {dayName.slice(0, 3)}
                          </span>
                          <span className={cn(
                            "text-sm font-black leading-tight",
                            isSelected ? "text-white" : "text-white/60"
                          )}>
                            {d.getDate()}
                          </span>
                        </div>
                        <div>
                          <p className={cn(
                            "text-sm font-semibold capitalize",
                            isSelected ? "text-white" : "text-white/70"
                          )}>
                            {dayName} {dayNum}
                          </p>
                          <p className="text-xs text-white/35 flex items-center gap-1 mt-0.5">
                            <IconClock className="w-3 h-3" /> {slot.time} — 1h
                          </p>
                        </div>
                        {isSelected && (
                          <div className="ml-auto flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                              <IconCheck className="text-white w-3 h-3" />
                            </div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking button */}
      {slots.length > 0 && (
        <div className="sticky bottom-4 z-10">
          <div className="p-4 rounded-xl bg-base-elevated/80 backdrop-blur-xl border border-white/[0.06] shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                {selectedSlot ? (
                  <p className="text-sm text-white/70">
                    <span className="font-semibold text-white">
                      {new Date(selectedSlot).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                    </span>
                    {" "}a{" "}
                    {new Date(selectedSlot).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                ) : (
                  <p className="text-sm text-white/40">Sélectionne un créneau ci-dessus</p>
                )}
              </div>
              <Button
                variant="primary"
                disabled={!selectedSlot || booking}
                onClick={handleBooking}
                className="flex-shrink-0"
              >
                {booking ? "Redirection..." : `Réserver & Payer — ${COACHING_PRICE_DISPLAY}\u20ac`}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Past sessions */}
      {pastSessions.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">Sessions passées</h3>
          <div className="space-y-1">
            {pastSessions.map((s) => {
              const d = new Date(s.date);
              return (
                <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg">
                  <span className="text-xs text-white/25">
                    {d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span className="text-xs text-white/15">—</span>
                  <span className="text-xs text-white/25">Session de coaching</span>
                  <span className="text-[10px] text-emerald-400/50 bg-emerald-500/5 px-1.5 py-0.5 rounded">Terminée</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
