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
  { id: "halfway", name: "Mi-parcours", description: "37 leçons complétées", icon: "bolt" },
  { id: "graduate", name: "Diplôme Opexia", description: "74 leçons complétées", icon: "award" },
] as const;

export const MODULES = [
  { order: 1, title: "Découvrir l'IA & les opportunités", description: "Comprendre l'IA, les outils, et le potentiel business d'une agence IA" },
  { order: 2, title: "Prompt Engineering avancé & Claude Pro", description: "Maîtriser Claude comme outil de travail quotidien" },
  { order: 3, title: "Créer ton premier site web avec l'IA", description: "De zéro à un site en ligne, même sans savoir coder" },
  { order: 4, title: "Bases de données & Backend", description: "Supabase : donner un cerveau et une mémoire à tes projets" },
  { order: 5, title: "APIs & Intégrations", description: "Connecter les outils entre eux : Stripe, webhooks, APIs" },
  { order: 6, title: "Automatisations", description: "Make, n8n, Zapier : créer des machines qui bossent pour toi" },
  { order: 7, title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre" },
  { order: 8, title: "Agents IA autonomes", description: "Des IA qui travaillent seules : veille, prospection, analyse" },
  { order: 9, title: "Construire un MVP complet", description: "Ton premier vrai produit de A à Z" },
  { order: 10, title: "Ton offre & tes prix", description: "Passer de \"je sais faire\" à \"je vends\"" },
  { order: 11, title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing" },
  { order: 12, title: "Livrer & fidéliser", description: "Un client satisfait = 3 clients en plus" },
  { order: 13, title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable" },
] as const;

/* ——— Module metadata (brand, difficulty, estimated time) ——— */

export type Brand = "claude" | "openclaw";
export type Difficulty = "debutant" | "intermediaire" | "avance";

export interface ModuleMetadata {
  brands: Brand[];
  difficulty: Difficulty;
  estimatedTime: string;
  lessonCount: number;
}

export const MODULE_METADATA: Record<number, ModuleMetadata> = {
  1:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h30",  lessonCount: 6  },
  2:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 5  },
  3:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~3h",    lessonCount: 6  },
  4:  { brands: [],            difficulty: "debutant",       estimatedTime: "~3h",    lessonCount: 6  },
  5:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 5  },
  6:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~3h",    lessonCount: 6  },
  7:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~3h",    lessonCount: 6  },
  8:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 5  },
  9:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~3h",    lessonCount: 6  },
  10: { brands: [],            difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 6  },
  11: { brands: [],            difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 6  },
  12: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 5  },
  13: { brands: [],            difficulty: "avance",         estimatedTime: "~2h30",  lessonCount: 5  },
};

export const DIFFICULTY_CONFIG = {
  debutant:      { label: "Débutant",        color: "text-emerald-400", bgColor: "bg-emerald-500/10", barColor: "bg-emerald-400", bars: 1 },
  intermediaire: { label: "Intermédiaire",  color: "text-amber-400",   bgColor: "bg-amber-500/10",   barColor: "bg-amber-400",   bars: 2 },
  avance:        { label: "Avancé",         color: "text-rose-400",    bgColor: "bg-rose-500/10",    barColor: "bg-rose-400",    bars: 3 },
} as const;

/* ——— Weeks structure (4 weeks x 3 modules) ——— */

export const WEEKS = [
  { week: 1, title: "Fondations",          subtitle: "IA, prompting et premiers outils",                       modules: [1, 2] },
  { week: 2, title: "Technique",           subtitle: "Sites web, bases de données, APIs et automatisations",   modules: [3, 4, 5] },
  { week: 3, title: "Services",            subtitle: "Chatbots, agents IA, automatisations et MVP",            modules: [6, 7, 8, 9] },
  { week: 4, title: "Business",            subtitle: "Offre, clients, livraison et croissance",                modules: [10, 11, 12, 13] },
] as const;

/* ——— Tier-based module access ——— */

export const TIER_MODULE_ACCESS: Record<string, number[]> = {
  starter:    [1],
  academy:    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  one_to_one: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
};

export const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 47,
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
    cta: "Commencer pour 47\u20ac",
    popular: false,
  },
  {
    id: "academy",
    name: "Academy",
    price: 397,
    period: "one-shot",
    description: "La formation complète pour lancer ton agence IA",
    features: [
      { text: "Tout ce qui est dans Starter", included: true },
      { text: "80 leçons progressives en 13 modules", included: true },
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
    price: 3997,
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

export const COACHING_PRICE = 9000; // 90e en centimes
export const COACHING_PRICE_DISPLAY = "90";

/* ——— Referral / Parrainage ——— */
export const REFERRAL_COMMISSION_RATE = 0.20; // 20%
export const TIER_PRICES_CENTS: Record<string, number> = {
  starter: 4700,
  academy: 39700,
  one_to_one: 399700,
};
