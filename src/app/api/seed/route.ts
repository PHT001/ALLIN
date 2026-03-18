import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Import ALL real lesson data
import { MODULE_1_LESSONS } from "../../../../prisma/data/new_module_01";
import { MODULE_2_LESSONS } from "../../../../prisma/data/new_module_02";
import { MODULE_3_LESSONS } from "../../../../prisma/data/new_module_03";
import { MODULE_4_LESSONS } from "../../../../prisma/data/new_module_04";
import { MODULE_5_LESSONS } from "../../../../prisma/data/new_module_05";
import { MODULE_6_LESSONS } from "../../../../prisma/data/new_module_06";
import { MODULE_7_LESSONS } from "../../../../prisma/data/new_module_07";
import { MODULE_8_LESSONS } from "../../../../prisma/data/new_module_08";
import { MODULE_9_LESSONS } from "../../../../prisma/data/new_module_09";
import { MODULE_10_LESSONS } from "../../../../prisma/data/new_module_10";
import { MODULE_11_LESSONS } from "../../../../prisma/data/new_module_11";
import { MODULE_12_LESSONS } from "../../../../prisma/data/new_module_12";
import { MODULE_13_LESSONS } from "../../../../prisma/data/new_module_13";
import { MODULE_14_LESSONS } from "../../../../prisma/data/new_module_14";
import { MASTERCLASS_CLAUDE_CODE_LESSONS } from "../../../../prisma/data/masterclass_claude_code";
import { MASTERCLASS_OPENCLAW_LESSONS } from "../../../../prisma/data/masterclass_openclaw";

const ALL_LESSONS = [
  ...MODULE_1_LESSONS, ...MODULE_2_LESSONS, ...MODULE_3_LESSONS, ...MODULE_4_LESSONS,
  ...MODULE_5_LESSONS, ...MODULE_6_LESSONS, ...MODULE_7_LESSONS, ...MODULE_8_LESSONS,
  ...MODULE_9_LESSONS, ...MODULE_10_LESSONS, ...MODULE_11_LESSONS, ...MODULE_12_LESSONS,
  ...MODULE_13_LESSONS, ...MODULE_14_LESSONS,
  ...MASTERCLASS_CLAUDE_CODE_LESSONS, ...MASTERCLASS_OPENCLAW_LESSONS,
];

function makeQuiz(lessonOrder: number) {
  return [
    { type: "mcq", question: `Quel est l'objectif principal de cette leçon ?`, options: JSON.stringify(["Apprendre la théorie uniquement", "Appliquer les connaissances en pratique", "Combiner théorie et pratique", "Aucun objectif spécifique"]), correctAnswer: "Combiner théorie et pratique", explanation: "Chaque leçon combine théorie et exercices pratiques.", order: 1 },
    { type: "true_false", question: "La pratique régulière est essentielle pour progresser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'apprentissage passe par la pratique continue.", order: 2 },
    { type: "mcq", question: "Quelle approche est la plus efficace ?", options: JSON.stringify(["Lire uniquement", "Regarder des tutos", "Expérimenter sur des projets concrets", "Attendre de tout comprendre"]), correctAnswer: "Expérimenter sur des projets concrets", explanation: "L'apprentissage par la pratique est la méthode la plus efficace.", order: 3 },
  ];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("key") !== "opexia-seed-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Clean
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "QuizSubmission","QuizQuestion","Quiz","LessonProgress","Streak","Enrollment","Lesson","Module","User" CASCADE;`);

    // Users
    const adminPw = await bcrypt.hash("admin123", 12);
    const studentPw = await bcrypt.hash("test123", 12);

    const [admin]: any[] = await prisma.$queryRawUnsafe(
      `INSERT INTO "User" (id, email, name, "hashedPassword", role, "createdAt", "updatedAt") VALUES (gen_random_uuid(), 'admin@opexia.com', 'Admin Opexia', $1, 'admin', NOW(), NOW()) RETURNING id, email`, adminPw
    );
    const [student]: any[] = await prisma.$queryRawUnsafe(
      `INSERT INTO "User" (id, email, name, "hashedPassword", role, "createdAt", "updatedAt") VALUES (gen_random_uuid(), 'etudiant@test.com', 'Élève Test', $1, 'student', NOW(), NOW()) RETURNING id, email`, studentPw
    );

    // Modules (no category, no timestamps in prod DB)
    const moduleData = [
      [1,"Découvrir l'IA & les opportunités","Comprendre l'IA, les outils, et le potentiel business"],
      [2,"Prompt Engineering avancé","Maîtriser Claude comme outil de travail quotidien"],
      [3,"Créer des sites web avec l'IA","De zéro à un site en ligne, même sans savoir coder"],
      [4,"Backend & Bases de données","Supabase : donner un cerveau et une mémoire à tes projets"],
      [5,"APIs & Intégrations","Connecter les outils entre eux : Stripe, webhooks, APIs"],
      [6,"Automatisations","Make, n8n, Zapier : créer des machines qui bossent pour toi"],
      [7,"Chatbots IA","Le service le plus demandé et le plus facile à vendre"],
      [8,"Agents IA autonomes","Des IA qui travaillent seules : veille, prospection, analyse"],
      [9,"Construire un MVP","Ton premier vrai produit de A à Z"],
      [10,"Ton offre & tes prix","Passer de je sais faire à je vends"],
      [11,"Trouver des clients","Prospection LinkedIn, cold email, closing"],
      [12,"Livrer & fidéliser","Un client satisfait = 3 clients en plus"],
      [13,"Scaler à 10K€/mois","De freelance solo à agence rentable"],
      [14,"Juridique, contrats & admin","Statuts, contrats, RGPD, facturation et assurances"],
      [15,"Masterclass Claude Code","Ton environnement de dev IA"],
      [16,"Masterclass OpenClaw","Assistant IA personnel self-hosted multi-canal"],
    ];

    const modules: any[] = [];
    for (const [order, title, desc] of moduleData) {
      const [mod]: any[] = await prisma.$queryRawUnsafe(
        `INSERT INTO "Module" (id, title, description, "order") VALUES (gen_random_uuid(), $1, $2, $3) RETURNING id, "order"`,
        title, desc, order
      );
      modules.push(mod);
    }

    // Lessons with REAL content
    let lessonCount = 0;
    for (const lessonData of ALL_LESSONS) {
      const moduleIdx = lessonData.module - 1;
      const mod = modules[moduleIdx];
      if (!mod) continue;

      const [lesson]: any[] = await prisma.$queryRawUnsafe(
        `INSERT INTO "Lesson" (id, title, slug, description, content, exercise, duration, "order", "moduleId", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) RETURNING id`,
        lessonData.title,
        lessonData.slug,
        lessonData.description,
        lessonData.content,
        lessonData.exercise || "",
        lessonData.duration || "15 min",
        lessonData.order,
        mod.id
      );

      // Quiz (no timestamps in prod)
      const [quiz]: any[] = await prisma.$queryRawUnsafe(
        `INSERT INTO "Quiz" (id, "lessonId", "passingScore") VALUES (gen_random_uuid(), $1, 80) RETURNING id`,
        lesson.id
      );

      // Use real quiz data if available, otherwise default
      const ld = lessonData as any;
      const questions = ld.quiz ? ld.quiz.map((q: any, i: number) => ({
        type: q.type, question: q.question, options: q.options,
        correctAnswer: q.correctAnswer, explanation: q.explanation, order: i + 1,
      })) : makeQuiz(lessonData.order);

      for (const q of questions) {
        await prisma.$executeRawUnsafe(
          `INSERT INTO "QuizQuestion" (id, "quizId", type, question, options, "correctAnswer", explanation, "order") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)`,
          quiz.id, q.type, q.question, q.options, q.correctAnswer, q.explanation, q.order
        );
      }
      lessonCount++;
    }

    // Student progress + enrollment
    const firstLessons: any[] = await prisma.$queryRawUnsafe(`SELECT id FROM "Lesson" ORDER BY "moduleId", "order" LIMIT 4`);
    for (let i = 0; i < 3 && i < firstLessons.length; i++) {
      await prisma.$executeRawUnsafe(
        `INSERT INTO "LessonProgress" (id, "userId", "lessonId", status, "completedAt", "xpEarned") VALUES (gen_random_uuid(), $1, $2, 'completed', NOW(), 150)`,
        student.id, firstLessons[i].id
      );
    }
    if (firstLessons[3]) {
      await prisma.$executeRawUnsafe(
        `INSERT INTO "LessonProgress" (id, "userId", "lessonId", status, "xpEarned") VALUES (gen_random_uuid(), $1, $2, 'in_progress', 0)`,
        student.id, firstLessons[3].id
      );
    }
    await prisma.$executeRawUnsafe(
      `INSERT INTO "Enrollment" (id, "userId", tier, status, "createdAt") VALUES (gen_random_uuid(), $1, 'starter', 'active', NOW())`,
      student.id
    );

    return NextResponse.json({ success: true, modules: modules.length, lessons: lessonCount, admin: admin.email, student: student.email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
