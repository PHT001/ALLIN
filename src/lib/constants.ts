export const XP_VALUES = {
  LESSON_COMPLETE: 50,
  QUIZ_PASS: 100,
  QUIZ_PERFECT: 50,
  MODULE_COMPLETE: 200,
} as const;

export const BADGES = [
  { id: "first_lesson", name: "Premier pas", description: "Complète ta première leçon", icon: "target" },
  { id: "module_1", name: "Fondations IA", description: "Termine le Module 1", icon: "cpu" },
  { id: "streak_7", name: "Régularité", description: "7 jours consécutifs", icon: "flame" },
  { id: "halfway", name: "Mi-parcours", description: "50 leçons complétées", icon: "bolt" },
  { id: "graduate", name: "Diplôme Opexia", description: "100 leçons complétées", icon: "award" },
] as const;

export const MODULES = [
  // ── Formation principale (14 modules) ──
  { order: 1,  title: "Découvrir l'IA & les opportunités", description: "Comprendre l'IA, les outils, et le potentiel business", category: "formation" },
  { order: 2,  title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", category: "formation" },
  { order: 3,  title: "Créer des sites web avec l'IA", description: "De zéro à un site en ligne, même sans savoir coder", category: "formation" },
  { order: 4,  title: "Backend & Bases de données", description: "Supabase : donner un cerveau et une mémoire à tes projets", category: "formation" },
  { order: 5,  title: "APIs & Intégrations", description: "Connecter les outils entre eux : Stripe, webhooks, APIs", category: "formation" },
  { order: 6,  title: "Automatisations", description: "Make, n8n, Zapier : créer des machines qui bossent pour toi", category: "formation" },
  { order: 7,  title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre", category: "formation" },
  { order: 8,  title: "Agents IA autonomes", description: "Des IA qui travaillent seules : veille, prospection, analyse", category: "formation" },
  { order: 9,  title: "Construire un MVP", description: "Ton premier vrai produit de A à Z", category: "formation" },
  { order: 10, title: "Ton offre & tes prix", description: "Passer de \"je sais faire\" à \"je vends\"", category: "formation" },
  { order: 11, title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing", category: "formation" },
  { order: 12, title: "Livrer & fidéliser", description: "Un client satisfait = 3 clients en plus", category: "formation" },
  { order: 13, title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", category: "formation" },
  { order: 14, title: "Juridique, contrats & admin", description: "Statuts, contrats, RGPD, facturation et assurances", category: "formation" },
  // ── Masterclasses (bonus) ──
  { order: 15, title: "Masterclass Claude Code", description: "Ton environnement de dev IA : coder avec Claude dans ton terminal", category: "masterclass" },
  { order: 16, title: "Masterclass OpenClaw", description: "Assistant IA personnel self-hosted multi-canal", category: "masterclass" },
] as const;

/* ——— Module metadata (brand, difficulty, estimated time) ——— */

export type Brand = "claude" | "clawbot";
export type Difficulty = "debutant" | "intermediaire" | "avance";

export interface ModuleMetadata {
  brands: Brand[];
  difficulty: Difficulty;
  estimatedTime: string;
  lessonCount: number;
}

export const MODULE_METADATA: Record<number, ModuleMetadata> = {
  // Formation
  1:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 6  },
  2:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 5  },
  3:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h30",  lessonCount: 6  },
  4:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  5:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 5  },
  6:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  7:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 6  },
  8:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 5  },
  9:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 5  },
  10: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 6  },
  11: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 6  },
  12: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 5  },
  13: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 5  },
  14: { brands: [],            difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 5  },
  // Masterclasses
  15: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 7  },
  16: { brands: [],            difficulty: "intermediaire",  estimatedTime: "~3h30",  lessonCount: 8  },
};

export const DIFFICULTY_CONFIG = {
  debutant:      { label: "Débutant",        color: "text-emerald-400", bgColor: "bg-emerald-500/10", barColor: "bg-emerald-400", bars: 1 },
  intermediaire: { label: "Intermédiaire",  color: "text-amber-400",   bgColor: "bg-amber-500/10",   barColor: "bg-amber-400",   bars: 2 },
  avance:        { label: "Avancé",         color: "text-rose-400",    bgColor: "bg-rose-500/10",    barColor: "bg-rose-400",    bars: 3 },
} as const;

/* ——— Weeks structure (4 weeks x 3 modules) ——— */

export const WEEKS = [
  { week: 1, title: "Fondations",          subtitle: "IA, prompting et création de sites web",                 modules: [1, 2, 3, 4] },
  { week: 2, title: "Construction",         subtitle: "APIs, automatisations, chatbots et agents IA",           modules: [5, 6, 7, 8] },
  { week: 3, title: "Business",             subtitle: "MVP, offre, clients et livraison",                      modules: [9, 10, 11, 12] },
  { week: 4, title: "Scale & Juridique",    subtitle: "Scaling, juridique et masterclasses",                   modules: [13, 14] },
] as const;

export const MASTERCLASS_MODULES = [15, 16] as const;

/* ——— Tier-based module access ——— */

export const TIER_MODULE_ACCESS: Record<string, number[]> = {
  starter:    [1],
  academy:    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  one_to_one: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
};

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    period: "one-shot",
    description: "Pour les curieux qui veulent comprendre avant de se lancer",
    features: [
      { text: "Pack de prérequis complets (PDF + guides)", included: true },
      { text: "Checklist de démarrage", included: true },
      { text: "Accès au Discord communautaire", included: true },
      { text: "Plateforme e-learning complète", included: false },
      { text: "Accompagnement personnalisé", included: false },
      { text: "Sessions en visio", included: false },
    ],
    cta: "Commencer pour 49\u20ac",
    popular: false,
  },
  {
    id: "academy",
    name: "Academy",
    price: 399,
    period: "one-shot",
    description: "La formation complète pour lancer ton agence IA",
    features: [
      { text: "Tout ce qui est dans Starter", included: true },
      { text: "100+ leçons progressives en 15 modules", included: true },
      { text: "Quiz de validation par leçon", included: true },
      { text: "Exercices pratiques", included: true },
      { text: "Assistant IA intégré", included: true },
      { text: "Accompagnement personnalisé", included: false },
    ],
    cta: "Rejoindre l'Academy",
    popular: true,
  },
  {
    id: "one_to_one",
    name: "One-to-One",
    price: 1299,
    period: "one-shot",
    description: "L'accompagnement premium pour aller plus vite",
    features: [
      { text: "Tout ce qui est dans Academy", included: true },
      { text: "Accompagnement personnalisé", included: true },
      { text: "4 sessions en visio (1h)", included: true },
      { text: "Review de projets personnalisée", included: true },
      { text: "Accès prioritaire au support", included: true },
      { text: "Réseau privé d'entrepreneurs IA", included: true },
    ],
    cta: "Réserver mon accompagnement",
    popular: false,
  },
] as const;

/* ——— Coaching slots & pricing ——— */

export const COACHING_SLOTS = [
  { day: "Lundi",    time: "14:00", duration: "1h" },
  { day: "Mercredi", time: "10:00", duration: "1h" },
  { day: "Mercredi", time: "14:00", duration: "1h" },
  { day: "Vendredi", time: "10:00", duration: "1h" },
] as const;

export const COACHING_PRICE = 7000; // 70e en centimes
export const COACHING_PRICE_DISPLAY = "70";

/* ——— Referral / Parrainage ——— */
export const REFERRAL_COMMISSION_RATE = 0.20; // 20%
export const TIER_PRICES_CENTS: Record<string, number> = {
  starter: 4900,
  academy: 39900,
  one_to_one: 129900,
};
