"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* ——— Types ——— */
interface Deal {
  id: string;
  name: string;
  company: string | null;
  value: number;
  stage: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}

const STAGES = [
  { id: "lead", label: "Leads", color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/15", dot: "bg-slate-400" },
  { id: "contact", label: "Contact", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/15", dot: "bg-blue-400" },
  { id: "proposal", label: "Proposition", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/15", dot: "bg-purple-400" },
  { id: "negotiation", label: "Négociation", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/15", dot: "bg-amber-400" },
  { id: "won", label: "Gagné", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/15", dot: "bg-emerald-400" },
] as const;

const LOST_STAGE = { id: "lost", label: "Perdu", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/15", dot: "bg-red-400" };

/* ——— Icons ——— */
function IconPlus({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>;
}
function IconX({ className }: { className?: string }) {
  return <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
}
function IconChevronRight({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
function IconChevronLeft({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>;
}
function IconTrash({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>;
}
function IconEdit({ className }: { className?: string }) {
  return <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
}
function IconBuilding({ className }: { className?: string }) {
  return <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" /><line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" /><line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" /><line x1="9" y1="18" x2="15" y2="18" /></svg>;
}

/* ——— Animations ——— */
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };

/* ——— Deal Form Modal ——— */
function DealModal({
  open,
  deal,
  onClose,
  onSave,
}: {
  open: boolean;
  deal: Deal | null;
  onClose: () => void;
  onSave: (data: { name: string; company: string; value: number; stage: string; notes: string }) => void;
}) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");
  const [stage, setStage] = useState("lead");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (deal) {
      setName(deal.name);
      setCompany(deal.company || "");
      setValue(deal.value ? String(deal.value) : "");
      setStage(deal.stage);
      setNotes(deal.notes || "");
    } else {
      setName("");
      setCompany("");
      setValue("");
      setStage("lead");
      setNotes("");
    }
  }, [deal, open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative glass-card rounded-2xl p-6 w-full max-w-md border border-white/[0.08]"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-white">{deal ? "Modifier le deal" : "Nouveau projet"}</h3>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
              <IconX className="text-white/40" />
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSave({ name, company, value: Number(value) || 0, stage, notes });
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-[11px] text-white/40 font-medium mb-1.5 block">Nom du projet / client *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="Ex: Agence IA pour cabinet comptable"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-white/40 font-medium mb-1.5 block">Entreprise</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="Ex: ComptaPlus"
                />
              </div>
              <div>
                <label className="text-[11px] text-white/40 font-medium mb-1.5 block">Montant (euros)</label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-white/40 font-medium mb-1.5 block">Étape</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
              >
                {STAGES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#1a1a1a]">{s.label}</option>
                ))}
                <option value="lost" className="bg-[#1a1a1a]">{LOST_STAGE.label}</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] text-white/40 font-medium mb-1.5 block">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                placeholder="Détails, prochaines étapes..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              {deal ? "Enregistrer" : "Ajouter le projet"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ——— Main Page ——— */
export default function PipelinePage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDeal, setEditingDeal] = useState<Deal | null>(null);
  const [showLost, setShowLost] = useState(false);

  const fetchDeals = useCallback(() => {
    fetch("/api/pipeline")
      .then((r) => r.json())
      .then((d) => { setDeals(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => { fetchDeals(); }, [fetchDeals]);

  const handleSave = async (data: { name: string; company: string; value: number; stage: string; notes: string }) => {
    if (editingDeal) {
      await fetch(`/api/pipeline/${editingDeal.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } else {
      await fetch("/api/pipeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    setModalOpen(false);
    setEditingDeal(null);
    fetchDeals();
  };

  const handleMove = async (deal: Deal, direction: "left" | "right") => {
    const allStages = [...STAGES.map((s) => s.id), "lost"];
    const idx = allStages.indexOf(deal.stage);
    const newIdx = direction === "right" ? idx + 1 : idx - 1;
    if (newIdx < 0 || newIdx >= allStages.length) return;
    await fetch(`/api/pipeline/${deal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stage: allStages[newIdx] }),
    });
    fetchDeals();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/pipeline/${id}`, { method: "DELETE" });
    fetchDeals();
  };

  // Stats
  const activeDeals = deals.filter((d) => d.stage !== "lost");
  const wonDeals = deals.filter((d) => d.stage === "won");
  const totalValue = activeDeals.reduce((s, d) => s + d.value, 0);
  const wonValue = wonDeals.reduce((s, d) => s + d.value, 0);
  const conversionRate = deals.length > 0 ? Math.round((wonDeals.length / deals.length) * 100) : 0;

  const visibleStages = showLost ? [...STAGES, LOST_STAGE] : STAGES;

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 max-w-7xl">
        <div className="h-8 bg-white/5 rounded-lg w-64" />
        <div className="h-4 bg-white/5 rounded w-80" />
        <div className="grid grid-cols-5 gap-3 mt-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-64 bg-white/[0.03] rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white">Pipeline</h1>
          <p className="text-sm text-white/30 mt-1">Suis tes projets et clients en temps réel</p>
        </div>
        <motion.button
          onClick={() => { setEditingDeal(null); setModalOpen(true); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <IconPlus className="text-black" />
          Nouveau projet
        </motion.button>
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {[
          { label: "Projets actifs", val: activeDeals.length.toString(), color: "text-white/70" },
          { label: "Pipeline total", val: `${totalValue.toLocaleString("fr-FR")}€`, color: "text-blue-400/70" },
          { label: "Gagnés", val: `${wonValue.toLocaleString("fr-FR")}€`, color: "text-emerald-400/70" },
          { label: "Taux de conversion", val: `${conversionRate}%`, color: "text-amber-400/70" },
        ].map((s) => (
          <motion.div key={s.label} className="glass-card p-4 rounded-xl" variants={fadeUp}>
            <p className={cn("text-xl font-black tracking-tight", s.color)}>{s.val}</p>
            <p className="text-[10px] text-white/25 mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle lost */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowLost(!showLost)}
          className={cn(
            "text-xs font-medium px-3 py-1.5 rounded-lg transition-colors",
            showLost ? "bg-red-500/15 text-red-400" : "bg-white/[0.04] text-white/30 hover:text-white/50"
          )}
        >
          {showLost ? "Masquer les perdus" : "Afficher les perdus"} ({deals.filter((d) => d.stage === "lost").length})
        </button>
      </div>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-4 -mx-2 px-2">
        <motion.div
          className="flex gap-3 min-w-max"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {visibleStages.map((stage) => {
            const stageDeals = deals.filter((d) => d.stage === stage.id);
            const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);

            return (
              <motion.div
                key={stage.id}
                className="w-[260px] flex-shrink-0"
                variants={fadeUp}
              >
                {/* Column header */}
                <div className={cn("flex items-center justify-between mb-3 px-1")}>
                  <div className="flex items-center gap-2">
                    <div className={cn("w-2 h-2 rounded-full", stage.dot)} />
                    <span className={cn("text-xs font-bold", stage.color)}>{stage.label}</span>
                    <span className="text-[10px] text-white/20 bg-white/[0.04] px-1.5 py-0.5 rounded-full">{stageDeals.length}</span>
                  </div>
                  {stageValue > 0 && (
                    <span className="text-[10px] text-white/20">{stageValue.toLocaleString("fr-FR")}€</span>
                  )}
                </div>

                {/* Column body */}
                <div className={cn("rounded-xl p-2 min-h-[200px] space-y-2 border", stage.bg, stage.border)}>
                  <AnimatePresence mode="popLayout">
                    {stageDeals.map((deal) => {
                      const stageIdx = [...STAGES.map((s) => s.id), "lost"].indexOf(deal.stage);
                      const canLeft = stageIdx > 0;
                      const canRight = stageIdx < STAGES.length; // can go to lost too

                      return (
                        <motion.div
                          key={deal.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="glass-card rounded-lg p-3 group cursor-default border border-white/[0.04] hover:border-white/[0.1] transition-colors"
                        >
                          <div className="flex items-start justify-between mb-1.5">
                            <p className="text-sm font-semibold text-white/80 leading-tight">{deal.name}</p>
                            <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => { setEditingDeal(deal); setModalOpen(true); }}
                                className="p-1 rounded hover:bg-white/10 transition-colors"
                              >
                                <IconEdit className="text-white/30" />
                              </button>
                              <button
                                onClick={() => handleDelete(deal.id)}
                                className="p-1 rounded hover:bg-red-500/20 transition-colors"
                              >
                                <IconTrash className="text-red-400/50" />
                              </button>
                            </div>
                          </div>

                          {deal.company && (
                            <div className="flex items-center gap-1 mb-1.5">
                              <IconBuilding className="text-white/20" />
                              <span className="text-[10px] text-white/30">{deal.company}</span>
                            </div>
                          )}

                          {deal.value > 0 && (
                            <p className="text-xs font-bold text-white/50 mb-2">{deal.value.toLocaleString("fr-FR")}€</p>
                          )}

                          {deal.notes && (
                            <p className="text-[10px] text-white/20 mb-2 line-clamp-2">{deal.notes}</p>
                          )}

                          {/* Move buttons */}
                          <div className="flex items-center justify-between pt-1.5 border-t border-white/[0.04]">
                            <button
                              onClick={() => canLeft && handleMove(deal, "left")}
                              className={cn("p-1 rounded transition-colors", canLeft ? "hover:bg-white/10 text-white/30" : "text-white/10 cursor-default")}
                              disabled={!canLeft}
                            >
                              <IconChevronLeft />
                            </button>
                            <span className="text-[9px] text-white/15">
                              {new Date(deal.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
                            </span>
                            <button
                              onClick={() => canRight && handleMove(deal, "right")}
                              className={cn("p-1 rounded transition-colors", canRight ? "hover:bg-white/10 text-white/30" : "text-white/10 cursor-default")}
                              disabled={!canRight}
                            >
                              <IconChevronRight />
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                  {stageDeals.length === 0 && (
                    <div className="flex items-center justify-center h-24">
                      <p className="text-[10px] text-white/15">Aucun projet</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <DealModal
        open={modalOpen}
        deal={editingDeal}
        onClose={() => { setModalOpen(false); setEditingDeal(null); }}
        onSave={handleSave}
      />
    </div>
  );
}
