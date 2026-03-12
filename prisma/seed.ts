import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

// Import lesson data from phase files
import { LESSONS as LESSONS_PHASE_1 } from "./data/phase_1";
import { LESSONS as LESSONS_PHASE_1B } from "./data/phase_1b";
import { LESSONS as LESSONS_PHASE_2 } from "./data/phase_2";
import { LESSONS as LESSONS_PHASE_3 } from "./data/phase_3";
import { LESSONS as LESSONS_PHASE_4 } from "./data/phase_4";
import { LESSONS as LESSONS_PHASE_5 } from "./data/phase_5";
import { LESSONS as LESSONS_PHASE_6 } from "./data/phase_6";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

// Combine all lessons
const ALL_LESSONS = [
  ...LESSONS_PHASE_1,
  ...LESSONS_PHASE_1B,
  ...LESSONS_PHASE_2,
  ...LESSONS_PHASE_3,
  ...LESSONS_PHASE_4,
  ...LESSONS_PHASE_5,
  ...LESSONS_PHASE_6,
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
  console.log("Seeding database with 80 lessons across 13 modules...");

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

  // 13 Modules
  const modules = await Promise.all([
    prisma.module.create({ data: { title: "Comprendre l'IA et Découvrir Claude", description: "Histoire, concepts et prise en main de Claude", order: 1 } }),
    prisma.module.create({ data: { title: "Prompt Engineering et Skills Claude", description: "Prompting avancé et création de Skills", order: 2 } }),
    prisma.module.create({ data: { title: "Installer et Configurer OpenClaw", description: "Setup de ton agent IA 24/7", order: 3 } }),
    prisma.module.create({ data: { title: "Sécuriser OpenClaw", description: "Hardware, VPN, firewall et bonnes pratiques de sécurité", order: 4 } }),
    prisma.module.create({ data: { title: "Créer et Publier des Skills OpenClaw", description: "Skills OpenClaw et ClawHub marketplace", order: 5 } }),
    prisma.module.create({ data: { title: "Compétences Techniques Essentielles", description: "Web, APIs, déploiement et bases de données", order: 6 } }),
    prisma.module.create({ data: { title: "Construire un MVP de A à Z", description: "Créer ton premier produit avec Claude", order: 7 } }),
    prisma.module.create({ data: { title: "Projets Pratiques avec Claude", description: "6 projets concrets à ajouter à ton portfolio", order: 8 } }),
    prisma.module.create({ data: { title: "Projets Pratiques avec OpenClaw", description: "6 agents IA à construire et déployer", order: 9 } }),
    prisma.module.create({ data: { title: "Business avec Claude", description: "Lancer un business avec l'écosystème Claude", order: 10 } }),
    prisma.module.create({ data: { title: "Business avec OpenClaw", description: "6 stratégies de revenus avec OpenClaw", order: 11 } }),
    prisma.module.create({ data: { title: "Vente et Acquisition Clients", description: "Prospection, vente et closing", order: 12 } }),
    prisma.module.create({ data: { title: "Scaler et Pérenniser", description: "Pricing, délégation et croissance", order: 13 } }),
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
