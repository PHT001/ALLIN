import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Import lesson data — 13 formation modules (new structure)
import { MODULE_1_LESSONS } from "./data/new_module_01";   // M1: Découvrir l'IA
import { MODULE_2_LESSONS } from "./data/new_module_02";   // M2: Prompt Engineering
import { MODULE_3_LESSONS } from "./data/new_module_03";   // M3: Sites web
import { MODULE_4_LESSONS } from "./data/new_module_04";   // M4: Backend + APIs (merged)
import { MODULE_6_LESSONS } from "./data/new_module_06";   // M5: Automatisations
import { MODULE_7_LESSONS } from "./data/new_module_07";   // M6: Chatbots
import { MODULE_8_LESSONS } from "./data/new_module_08";   // M7: Agents IA
import { MODULE_10_LESSONS } from "./data/new_module_10";  // M8: Offre et prix
import { MODULE_11_LESSONS } from "./data/new_module_11";  // M9: Trouver des clients
import { MODULE_12_LESSONS } from "./data/new_module_12";  // M10: Livrer et fidéliser
import { MODULE_9_LESSONS } from "./data/new_module_09";   // M11: Construire un MVP
import { MODULE_13_LESSONS } from "./data/new_module_13";  // M12: Scaler → will be overridden
import { MODULE_14_LESSONS } from "./data/new_module_14";  // M13: Juridique → will be overridden

// Import masterclass data
import { MASTERCLASS_CLAUDE_CODE_LESSONS } from "./data/masterclass_claude_code";
import { MASTERCLASS_OPENCLAW_LESSONS } from "./data/masterclass_openclaw";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// Map file imports to NEW module order (1-13 formation + 14-15 masterclass)
// Each array is [lessons, targetModuleIndex (0-based)]
const MODULE_MAP: [any[], number][] = [
  [MODULE_1_LESSONS, 0],     // M1: Découvrir l'IA
  [MODULE_2_LESSONS, 1],     // M2: Prompt Engineering
  [MODULE_3_LESSONS, 2],     // M3: Sites web
  [MODULE_4_LESSONS, 3],     // M4: Backend + APIs
  [MODULE_6_LESSONS, 4],     // M5: Automatisations (was M6)
  [MODULE_7_LESSONS, 5],     // M6: Chatbots (was M7)
  [MODULE_8_LESSONS, 6],     // M7: Agents (was M8)
  [MODULE_10_LESSONS, 7],    // M8: Offre et prix (was M10)
  [MODULE_11_LESSONS, 8],    // M9: Trouver des clients (was M11)
  [MODULE_12_LESSONS, 9],    // M10: Livrer et fidéliser (was M12)
  [MODULE_9_LESSONS, 10],    // M11: Construire un MVP (was M9)
  [MODULE_13_LESSONS, 11],   // M12: Scaler (was M13)
  [MODULE_14_LESSONS, 12],   // M13: Juridique (was M14)
  [MASTERCLASS_CLAUDE_CODE_LESSONS, 13], // M14: Claude Code
  [MASTERCLASS_OPENCLAW_LESSONS, 14],    // M15: OpenClaw
];

function makeQuiz(lessonOrder: number): Array<{ type: string; question: string; options: string; correctAnswer: string; explanation: string; order: number }> {
  const defaultQuiz = [
    { q: `Quel est l'objectif principal de cette leçon ?`, o: ["Apprendre la théorie uniquement", "Appliquer les connaissances en pratique", "Combiner théorie et pratique", "Aucun objectif spécifique"], a: "Combiner théorie et pratique", e: "Chaque leçon de la formation combine théorie et exercices pratiques pour un apprentissage complet.", t: "mcq" },
    { q: "La pratique régulière est essentielle pour progresser dans l'IA.", o: ["Vrai", "Faux"], a: "Vrai", e: "L'apprentissage de l'IA passe par la pratique et l'expérimentation continue.", t: "true_false" },
    { q: "Quelle approche est la plus efficace pour apprendre l'IA ?", o: ["Lire uniquement de la documentation", "Regarder des tutoriels sans pratiquer", "Expérimenter et itérer sur des projets concrets", "Attendre d'avoir tout compris avant de commencer"], a: "Expérimenter et itérer sur des projets concrets", e: "L'apprentissage par la pratique et l'itération est la méthode la plus efficace.", t: "mcq" },
    { q: "Il faut maîtriser parfaitement la théorie avant de commencer à pratiquer.", o: ["Vrai", "Faux"], a: "Faux", e: "Action avant perfection. Lance-toi avec les bases et améliore en chemin.", t: "true_false" },
    { q: "Quelle est la meilleure façon de consolider ses apprentissages ?", o: ["Relire ses notes", "Réaliser les exercices de la leçon", "Enseigner ce qu'on a appris a quelqu'un d'autre", "Les trois a la fois"], a: "Les trois a la fois", e: "La combinaison relecture, pratique et enseignement est la méthode la plus efficace pour ancrer les connaissances.", t: "mcq" },
  ];

  return defaultQuiz.map((q, i) => ({
    type: q.t,
    question: q.q,
    options: JSON.stringify(q.o),
    correctAnswer: q.a,
    explanation: q.e,
    order: i + 1,
  }));
}

async function main() {
  const totalModules = 13 + 2; // 13 formation + 2 masterclasses
  console.log(`Seeding database with ${MODULE_MAP.reduce((s, [l]) => s + l.length, 0)} lessons across ${totalModules} modules...`);

  // Clean all data — use TRUNCATE CASCADE for PostgreSQL
  const tables = ["Referral","PipelineDeal","CoachingSession","Streak","QuizSubmission","LessonProgress","Enrollment","QuizQuestion","Quiz","Lesson","Module","User"];
  for (const t of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${t}" CASCADE;`);
  }

  // Users
  const adminPassword = await bcrypt.hash("admin123", 12);
  const studentPassword = await bcrypt.hash("test123", 12);

  const admin = await prisma.user.create({
    data: { name: "Admin Opexia", email: "admin@opexia.com", hashedPassword: adminPassword, role: "admin" },
  });

  const student = await prisma.user.create({
    data: { name: "Élève Test", email: "etudiant@test.com", hashedPassword: studentPassword, role: "student" },
  });

  console.log(`Admin: ${admin.email} / admin123`);
  console.log(`Student: ${student.email} / test123`);

  // ═══════════════════════════════════════════════════
  // 13 FORMATION MODULES + 2 MASTERCLASSES
  // ═══════════════════════════════════════════════════
  const modules = [];
  const moduleDefinitions = [
    { title: "Découvrir l'IA et lancer ton agence", description: "Comprendre l'IA, les outils, et poser les bases de ton business", order: 1 },
    { title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", order: 2 },
    { title: "Créer des sites web avec l'IA", description: "De zéro à un site en ligne + ton portfolio", order: 3 },
    { title: "Backend, Supabase et APIs", description: "Base de données, auth, paiements et webhooks", order: 4 },
    { title: "Automatisations", description: "Make, n8n : créer des machines qui bossent pour toi", order: 5 },
    { title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre", order: 6 },
    { title: "Agents IA", description: "Des IA autonomes : veille, analyse et actions", order: 7 },
    { title: "Ton offre et tes prix", description: "De \"je sais faire\" à \"je vends\" — ton premier client", order: 8 },
    { title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing et upselling", order: 9 },
    { title: "Livrer et fidéliser", description: "Process de livraison, retainers et témoignages", order: 10 },
    { title: "Construire un MVP", description: "Ton premier vrai produit de A à Z", order: 11 },
    { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 12 },
    { title: "Juridique, contrats et admin", description: "Statuts, contrats, RGPD et facturation", order: 13 },
    { title: "Masterclass Claude Code", description: "Coder avec Claude directement dans ton terminal", order: 14 },
    { title: "Masterclass OpenClaw", description: "Assistant IA personnel self-hosted multi-canal", order: 15 },
  ];

  for (const def of moduleDefinitions) {
    const mod = await prisma.module.create({ data: { title: def.title, description: def.description, order: def.order } });
    modules.push(mod);
  }

  console.log(`${modules.length} modules created`);

  // Lessons + Quizzes — use MODULE_MAP to assign lessons to correct modules
  let lessonCount = 0;
  for (const [lessons, moduleIdx] of MODULE_MAP) {
    for (const lessonData of lessons) {
      const lesson = await prisma.lesson.create({
      data: {
        title: lessonData.title,
        slug: lessonData.slug,
        description: lessonData.description,
        content: lessonData.content,
        exercise: lessonData.exercise,
        duration: lessonData.duration,
        order: lessonData.order,
        moduleId: modules[moduleIdx].id,
      },
    });

    const quiz = await prisma.quiz.create({
      data: { lessonId: lesson.id, passingScore: 80 },
    });

    const ld = lessonData as any;
    const questions = ld.quiz
      ? ld.quiz.map((q: any, i: number) => ({
          type: q.type,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          order: i + 1,
        }))
      : makeQuiz(lessonData.order);
    for (const q of questions) {
      await prisma.quizQuestion.create({
        data: { ...q, quizId: quiz.id },
      });
    }

    lessonCount++;
    }
  }

  console.log(`${lessonCount} lessons created with quizzes`);

  // Sample progress for test student (first 3 lessons completed)
  const firstLessons = await prisma.lesson.findMany({
    orderBy: [{ moduleId: "asc" }, { order: "asc" }],
    take: 4,
  });

  for (let i = 0; i < 3; i++) {
    await prisma.lessonProgress.create({
      data: {
        userId: student.id,
        lessonId: firstLessons[i].id,
        status: "completed",
        completedAt: new Date(),
        xpEarned: 150,
      },
    });
  }

  // 4th lesson in progress
  await prisma.lessonProgress.create({
    data: {
      userId: student.id,
      lessonId: firstLessons[3].id,
      status: "in_progress",
    },
  });

  // Sample streak
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 3; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    await prisma.streak.create({ data: { userId: student.id, date: d } });
  }

  // Enrollment
  await prisma.enrollment.create({
    data: { userId: student.id, tier: "starter", status: "active" },
  });

  console.log("Seed complete!");
  console.log(`${lessonCount} lessons across ${modules.length} modules`);
  console.log(`  → ${formationModules.length} formation modules`);
  console.log(`  → ${masterclassModules.length} masterclass modules`);
  console.log("Test student has 3 completed lessons, 1 in progress, 3-day streak");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
