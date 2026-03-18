import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Import REAL lesson data from prisma/data files
import { MODULE_1_LESSONS } from "../../../../prisma/data/new_module_01";
import { MODULE_2_LESSONS } from "../../../../prisma/data/new_module_02";
import { MODULE_3_LESSONS } from "../../../../prisma/data/new_module_03";
import { MODULE_4_LESSONS } from "../../../../prisma/data/new_module_04";
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

export const maxDuration = 60;

// Map: [lessons array, target module index (0-based)]
const MODULE_MAP: [any[], number][] = [
  [MODULE_1_LESSONS, 0],      // M1: Découvrir l'IA
  [MODULE_2_LESSONS, 1],      // M2: Prompt Engineering
  [MODULE_3_LESSONS, 2],      // M3: Sites web
  [MODULE_4_LESSONS, 3],      // M4: Backend + APIs
  [MODULE_6_LESSONS, 4],      // M5: Automatisations (file=06)
  [MODULE_7_LESSONS, 5],      // M6: Chatbots (file=07)
  [MODULE_8_LESSONS, 6],      // M7: Agents (file=08)
  [MODULE_10_LESSONS, 7],     // M8: Offre et prix (file=10)
  [MODULE_11_LESSONS, 8],     // M9: Trouver clients (file=11)
  [MODULE_12_LESSONS, 9],     // M10: Livrer et fidéliser (file=12)
  [MODULE_9_LESSONS, 10],     // M11: Construire un MVP (file=09)
  [MODULE_13_LESSONS, 11],    // M12: Scaler (file=13)
  [MODULE_14_LESSONS, 12],    // M13: Juridique (file=14)
  [MASTERCLASS_CLAUDE_CODE_LESSONS, 13], // M14: Claude Code
  [MASTERCLASS_OPENCLAW_LESSONS, 14],    // M15: OpenClaw
];

function makeQuiz(lessonOrder: number) {
  return [
    { type: "mcq", question: `Quel est l'objectif principal de cette leçon ?`, options: JSON.stringify(["Théorie uniquement", "Pratique uniquement", "Combiner théorie et pratique", "Aucun"]), correctAnswer: "Combiner théorie et pratique", explanation: "Chaque leçon combine théorie et exercices pratiques.", order: 1 },
    { type: "true_false", question: "La pratique régulière est essentielle pour progresser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'apprentissage passe par la pratique continue.", order: 2 },
    { type: "mcq", question: "Quelle approche est la plus efficace ?", options: JSON.stringify(["Lire de la doc", "Regarder des tutos", "Expérimenter sur des projets concrets", "Attendre de tout comprendre"]), correctAnswer: "Expérimenter sur des projets concrets", explanation: "L'apprentissage par la pratique est le plus efficace.", order: 3 },
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
    const adminPw = await bcrypt.hash("admin123", 12);
    const studentPw = await bcrypt.hash("test123", 12);
    const admin = await prisma.user.create({ data: { name: "Admin Opexia", email: "admin@opexia.com", hashedPassword: adminPw, role: "admin" } });
    const student = await prisma.user.create({ data: { name: "Élève Test", email: "etudiant@test.com", hashedPassword: studentPw, role: "student" } });

    // 15 modules
    const moduleDefs = [
      { title: "Découvrir l'IA et lancer ton agence", description: "Comprendre l'IA, les outils, et poser les bases de ton business", order: 1 },
      { title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", order: 2 },
      { title: "Créer des sites web avec l'IA", description: "De zéro à un site en ligne + ton portfolio", order: 3 },
      { title: "Backend, Supabase et APIs", description: "Base de données, auth, paiements et webhooks", order: 4 },
      { title: "Automatisations", description: "Make, n8n : créer des machines qui bossent pour toi", order: 5 },
      { title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre", order: 6 },
      { title: "Agents IA", description: "Des IA autonomes : veille, analyse et actions", order: 7 },
      { title: "Ton offre et tes prix", description: "De 'je sais faire' à 'je vends' — ton premier client", order: 8 },
      { title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing et upselling", order: 9 },
      { title: "Livrer et fidéliser", description: "Process de livraison, retainers et témoignages", order: 10 },
      { title: "Construire un MVP", description: "Ton premier vrai produit de A à Z", order: 11 },
      { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 12 },
      { title: "Juridique, contrats et admin", description: "Statuts, contrats, RGPD et facturation", order: 13 },
      { title: "Masterclass Claude Code", description: "Coder avec Claude directement dans ton terminal", order: 14 },
      { title: "Masterclass OpenClaw", description: "Assistant IA personnel self-hosted multi-canal", order: 15 },
    ];

    const modules = [];
    for (const def of moduleDefs) {
      const mod = await prisma.module.create({ data: { title: def.title, description: def.description, order: def.order } });
      modules.push(mod);
    }

    // Create lessons with REAL content from data files
    let lessonCount = 0;
    for (const [lessons, moduleIdx] of MODULE_MAP) {
      for (const lessonData of lessons) {
        const ld = lessonData as any;
        const lesson = await prisma.lesson.create({
          data: {
            title: ld.title,
            slug: ld.slug,
            description: ld.description,
            content: ld.content,
            exercise: ld.exercise,
            duration: ld.duration,
            order: ld.order,
            moduleId: modules[moduleIdx].id,
          },
        });

        // Quiz
        const quiz = await prisma.quiz.create({ data: { lessonId: lesson.id, passingScore: 80 } });
        const questions = ld.quiz
          ? ld.quiz.map((q: any, i: number) => ({
              type: q.type, question: q.question, options: q.options,
              correctAnswer: q.correctAnswer, explanation: q.explanation, order: i + 1,
            }))
          : makeQuiz(ld.order);
        for (const q of questions) {
          await prisma.quizQuestion.create({ data: { ...q, quizId: quiz.id } });
        }
        lessonCount++;
      }
    }

    // Enrollment
    await prisma.enrollment.create({ data: { userId: student.id, tier: "starter", status: "active" } });

    return NextResponse.json({ success: true, modules: modules.length, lessons: lessonCount, admin: admin.email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, stack: error.stack?.split("\n").slice(0, 5) }, { status: 500 });
  }
}
