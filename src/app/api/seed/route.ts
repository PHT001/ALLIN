import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Import REAL lesson data from data files
import { MODULE_1_LESSONS } from "../../../../prisma/data/new_module_01";
import { MODULE_2_LESSONS } from "../../../../prisma/data/new_module_02";
import { MODULE_3_LESSONS } from "../../../../prisma/data/new_module_03";
import { MODULE_4_LESSONS } from "../../../../prisma/data/new_module_04";
import { MODULE_6_LESSONS } from "../../../../prisma/data/new_module_06";
import { MODULE_7_LESSONS } from "../../../../prisma/data/new_module_07";
import { MODULE_8_LESSONS } from "../../../../prisma/data/new_module_08";
import { MODULE_10_LESSONS } from "../../../../prisma/data/new_module_10";
import { MODULE_11_LESSONS } from "../../../../prisma/data/new_module_11";
import { MODULE_12_LESSONS } from "../../../../prisma/data/new_module_12";
import { MODULE_9_LESSONS } from "../../../../prisma/data/new_module_09";
import { MODULE_13_LESSONS } from "../../../../prisma/data/new_module_13";
import { MODULE_14_LESSONS } from "../../../../prisma/data/new_module_14";
import { MASTERCLASS_CLAUDE_CODE_LESSONS } from "../../../../prisma/data/masterclass_claude_code";
import { MASTERCLASS_OPENCLAW_LESSONS } from "../../../../prisma/data/masterclass_openclaw";

// Map file imports to NEW module order
const MODULE_MAP: [any[], number][] = [
  [MODULE_1_LESSONS, 0],
  [MODULE_2_LESSONS, 1],
  [MODULE_3_LESSONS, 2],
  [MODULE_4_LESSONS, 3],
  [MODULE_6_LESSONS, 4],
  [MODULE_7_LESSONS, 5],
  [MODULE_8_LESSONS, 6],
  [MODULE_10_LESSONS, 7],
  [MODULE_11_LESSONS, 8],
  [MODULE_12_LESSONS, 9],
  [MODULE_9_LESSONS, 10],
  [MODULE_13_LESSONS, 11],
  [MODULE_14_LESSONS, 12],
  [MASTERCLASS_CLAUDE_CODE_LESSONS, 13],
  [MASTERCLASS_OPENCLAW_LESSONS, 14],
];

function makeQuiz(lessonOrder: number) {
  return [
    { type: "mcq", question: `Quel est l'objectif principal de cette leçon ?`, options: JSON.stringify(["Apprendre la théorie", "Appliquer en pratique", "Combiner théorie et pratique", "Aucun"]), correctAnswer: "Combiner théorie et pratique", explanation: "Chaque leçon combine théorie et exercices pratiques.", order: 1 },
    { type: "true_false", question: "La pratique régulière est essentielle pour progresser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'apprentissage passe par la pratique.", order: 2 },
    { type: "mcq", question: "Quelle approche est la plus efficace ?", options: JSON.stringify(["Lire la doc", "Regarder des tutos", "Expérimenter sur des projets", "Attendre de tout comprendre"]), correctAnswer: "Expérimenter sur des projets", explanation: "L'apprentissage par la pratique est la plus efficace.", order: 3 },
  ];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("key") !== "opexia-seed-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Clean all data
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

    // 15 Modules
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

    const modules = [];
    for (const def of moduleDefinitions) {
      const mod = await prisma.module.create({ data: { title: def.title, description: def.description, order: def.order } });
      modules.push(mod);
    }

    // Lessons + Quizzes with REAL content
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
          await prisma.quizQuestion.create({ data: { ...q, quizId: quiz.id } });
        }
        lessonCount++;
      }
    }

    // Student enrollment + progress
    await prisma.enrollment.create({ data: { userId: student.id, tier: "starter", status: "active" } });

    const firstLessons = await prisma.lesson.findMany({
      orderBy: [{ moduleId: "asc" }, { order: "asc" }],
      take: 4,
    });
    for (let i = 0; i < Math.min(3, firstLessons.length); i++) {
      await prisma.lessonProgress.create({
        data: { userId: student.id, lessonId: firstLessons[i].id, status: "completed", completedAt: new Date(), xpEarned: 150 },
      });
    }
    if (firstLessons[3]) {
      await prisma.lessonProgress.create({
        data: { userId: student.id, lessonId: firstLessons[3].id, status: "in_progress" },
      });
    }

    // Streak
    const today = new Date(); today.setHours(0, 0, 0, 0);
    for (let i = 0; i < 3; i++) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      await prisma.streak.create({ data: { userId: student.id, date: d } });
    }

    return NextResponse.json({
      success: true,
      modules: modules.length,
      lessons: lessonCount,
      users: { admin: admin.email, student: student.email },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
