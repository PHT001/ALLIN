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
  { order: 1,  title: "Comprendre l'IA et Découvrir Claude", description: "Histoire, concepts et prise en main de Claude" },
  { order: 2,  title: "Prompt Engineering Avancé", description: "Prompting avancé et création de Skills Claude" },
  { order: 3,  title: "Claude Code : Maîtriser le Vibe Coding", description: "Setup, workflow et premiers projets avec Claude Code" },
  { order: 4,  title: "Compétences Techniques Essentielles", description: "Web, APIs, déploiement et bases de données" },
  { order: 5,  title: "Construire un MVP avec Claude Code", description: "Créer ton premier produit de A à Z" },
  { order: 6,  title: "Projets : Landing Pages et Sites de Vente", description: "6 projets concrets à ajouter à ton portfolio" },
  { order: 7,  title: "Projets : Apps Web et SaaS", description: "Construire des apps complètes et vendables" },
  { order: 8,  title: "Projets : Automatisations et Agents IA", description: "Créer des agents et automatisations intelligentes" },
  { order: 9,  title: "ClawBot : Ton Agent IA Autonome", description: "Installer, configurer et déployer ton agent 24/7" },
  { order: 10, title: "Lancer ton Business IA", description: "Modèles de business et premières ventes" },
  { order: 11, title: "Monétiser : Apps, SaaS et Services", description: "Transformer tes créations en revenus récurrents" },
  { order: 12, title: "Vente et Acquisition Clients", description: "Prospection, vente consultative et closing enterprise" },
  { order: 13, title: "Scaler et Pérenniser", description: "Pricing premium, spécialisation et croissance" },
  { order: 14, title: "Personal Branding & Acquisition Organique", description: "Contenu, communauté et leads entrants" },
  { order: 15, title: "Déployer, Maintenir et Itérer", description: "CI/CD, monitoring et amélioration continue de tes apps" },
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
  1:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 6  },
  2:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h30",  lessonCount: 7  },
  3:  { brands: ["claude"],    difficulty: "debutant",       estimatedTime: "~2h",    lessonCount: 6  },
  4:  { brands: [],            difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 7  },
  5:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h30",  lessonCount: 7  },
  6:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 6  },
  7:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 6  },
  8:  { brands: ["claude"],    difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 6  },
  9:  { brands: ["clawbot"],   difficulty: "intermediaire",  estimatedTime: "~2h",    lessonCount: 6  },
  10: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 6  },
  11: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 6  },
  12: { brands: [],            difficulty: "avance",         estimatedTime: "~5h",    lessonCount: 11 },
  13: { brands: [],            difficulty: "avance",         estimatedTime: "~4h30",  lessonCount: 9  },
  14: { brands: [],            difficulty: "avance",         estimatedTime: "~3h",    lessonCount: 6  },
  15: { brands: ["claude"],    difficulty: "avance",         estimatedTime: "~2h",    lessonCount: 6  },
};

export const DIFFICULTY_CONFIG = {
  debutant:      { label: "Débutant",        color: "text-emerald-400", bgColor: "bg-emerald-500/10", barColor: "bg-emerald-400", bars: 1 },
  intermediaire: { label: "Intermédiaire",  color: "text-amber-400",   bgColor: "bg-amber-500/10",   barColor: "bg-amber-400",   bars: 2 },
  avance:        { label: "Avancé",         color: "text-rose-400",    bgColor: "bg-rose-500/10",    barColor: "bg-rose-400",    bars: 3 },
} as const;

/* ——— Weeks structure (4 weeks x 3 modules) ——— */

export const WEEKS = [
  { week: 1, title: "Fondations",          subtitle: "IA, prompting et maîtrise de Claude Code",               modules: [1, 2, 3, 4] },
  { week: 2, title: "Construction",         subtitle: "MVP, projets concrets et portfolio",                     modules: [5, 6, 7, 8] },
  { week: 3, title: "Business",             subtitle: "ClawBot, monétisation et lancement commercial",          modules: [9, 10, 11, 12] },
  { week: 4, title: "Scale",                subtitle: "Scaling, branding, déploiement et croissance",           modules: [13, 14, 15] },
] as const;

/* ——— Tier-based module access ——— */

export const TIER_MODULE_ACCESS: Record<string, number[]> = {
  starter:    [1],
  academy:    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  one_to_one: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
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
