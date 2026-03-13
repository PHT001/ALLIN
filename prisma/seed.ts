import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Import lesson data — ALL 13 modules in new JSON block format
import { MODULE_1_LESSONS } from "./data/new_module_01";
import { MODULE_2_LESSONS } from "./data/new_module_02";
import { MODULE_3_LESSONS } from "./data/new_module_03";
import { MODULE_4_LESSONS } from "./data/new_module_04";
import { MODULE_5_LESSONS } from "./data/new_module_05";
import { MODULE_6_LESSONS } from "./data/new_module_06";
import { MODULE_7_LESSONS } from "./data/new_module_07";
import { MODULE_8_LESSONS } from "./data/new_module_08";
import { MODULE_9_LESSONS } from "./data/new_module_09";
import { MODULE_10_LESSONS } from "./data/new_module_10";
import { MODULE_11_LESSONS } from "./data/new_module_11";
import { MODULE_12_LESSONS } from "./data/new_module_12";
import { MODULE_13_LESSONS } from "./data/new_module_13";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const ALL_LESSONS = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_3_LESSONS,
  ...MODULE_4_LESSONS,
  ...MODULE_5_LESSONS,
  ...MODULE_6_LESSONS,
  ...MODULE_7_LESSONS,
  ...MODULE_8_LESSONS,
  ...MODULE_9_LESSONS,
  ...MODULE_10_LESSONS,
  ...MODULE_11_LESSONS,
  ...MODULE_12_LESSONS,
  ...MODULE_13_LESSONS,
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
  console.log(`Seeding database with ${ALL_LESSONS.length} lessons across 13 modules...`);

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

  // 13 Modules — NEW structure
  const modules = await Promise.all([
    prisma.module.create({ data: { title: "Découvrir l'IA & les opportunités", description: "Comprendre l'IA, les outils, et le potentiel business d'une agence IA", order: 1 } }),
    prisma.module.create({ data: { title: "Prompt Engineering avancé & Claude Pro", description: "Maîtriser Claude comme outil de travail quotidien", order: 2 } }),
    prisma.module.create({ data: { title: "Créer ton premier site web avec l'IA", description: "De zéro à un site en ligne, même sans savoir coder", order: 3 } }),
    prisma.module.create({ data: { title: "Bases de données & Backend", description: "Supabase : donner un cerveau et une mémoire à tes projets", order: 4 } }),
    prisma.module.create({ data: { title: "APIs & Intégrations", description: "Connecter les outils entre eux : Stripe, webhooks, APIs", order: 5 } }),
    prisma.module.create({ data: { title: "Automatisations", description: "Make, n8n, Zapier : créer des machines qui bossent pour toi", order: 6 } }),
    prisma.module.create({ data: { title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre", order: 7 } }),
    prisma.module.create({ data: { title: "Agents IA autonomes", description: "Des IA qui travaillent seules : veille, prospection, analyse", order: 8 } }),
    prisma.module.create({ data: { title: "Construire un MVP complet", description: "Ton premier vrai produit de A à Z", order: 9 } }),
    prisma.module.create({ data: { title: "Ton offre & tes prix", description: "Passer de \"je sais faire\" à \"je vends\"", order: 10 } }),
    prisma.module.create({ data: { title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing", order: 11 } }),
    prisma.module.create({ data: { title: "Livrer & fidéliser", description: "Un client satisfait = 3 clients en plus", order: 12 } }),
    prisma.module.create({ data: { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 13 } }),
  ]);

  console.log(`${modules.length} modules created`);

  // Lessons + Quizzes
  let lessonCount = 0;
  for (const lessonData of ALL_LESSONS) {
    const moduleIdx = lessonData.module - 1;
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

    const questions = makeQuiz(lessonData.order);
    for (const q of questions) {
      await prisma.quizQuestion.create({
        data: { ...q, quizId: quiz.id },
      });
    }

    lessonCount++;
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
  console.log("Test student has 3 completed lessons, 1 in progress, 3-day streak");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
