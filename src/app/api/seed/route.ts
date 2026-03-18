import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Temporary seed route — DELETE after use
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

    // 14 Formation Modules
    const formationModules = await Promise.all([
      prisma.module.create({ data: { title: "Découvrir l'IA & les opportunités", description: "Comprendre l'IA, les outils, et le potentiel business d'une agence IA", order: 1, category: "formation" } }),
      prisma.module.create({ data: { title: "Prompt Engineering avancé", description: "Maîtriser Claude comme outil de travail quotidien", order: 2, category: "formation" } }),
      prisma.module.create({ data: { title: "Créer des sites web avec l'IA", description: "De zéro à un site en ligne, même sans savoir coder", order: 3, category: "formation" } }),
      prisma.module.create({ data: { title: "Backend & Bases de données", description: "Supabase : donner un cerveau et une mémoire à tes projets", order: 4, category: "formation" } }),
      prisma.module.create({ data: { title: "APIs & Intégrations", description: "Connecter les outils entre eux : Stripe, webhooks, APIs", order: 5, category: "formation" } }),
      prisma.module.create({ data: { title: "Automatisations", description: "Make, n8n, Zapier : créer des machines qui bossent pour toi", order: 6, category: "formation" } }),
      prisma.module.create({ data: { title: "Chatbots IA", description: "Le service le plus demandé et le plus facile à vendre", order: 7, category: "formation" } }),
      prisma.module.create({ data: { title: "Agents IA autonomes", description: "Des IA qui travaillent seules : veille, prospection, analyse", order: 8, category: "formation" } }),
      prisma.module.create({ data: { title: "Construire un MVP", description: "Ton premier vrai produit de A à Z", order: 9, category: "formation" } }),
      prisma.module.create({ data: { title: "Ton offre & tes prix", description: "Passer de \"je sais faire\" à \"je vends\"", order: 10, category: "formation" } }),
      prisma.module.create({ data: { title: "Trouver des clients", description: "Prospection LinkedIn, cold email, closing", order: 11, category: "formation" } }),
      prisma.module.create({ data: { title: "Livrer & fidéliser", description: "Un client satisfait = 3 clients en plus", order: 12, category: "formation" } }),
      prisma.module.create({ data: { title: "Scaler à 10K€/mois", description: "De freelance solo à agence rentable", order: 13, category: "formation" } }),
      prisma.module.create({ data: { title: "Juridique, contrats & admin", description: "Statuts, contrats, RGPD, facturation et assurances", order: 14, category: "formation" } }),
    ]);

    // 2 Masterclasses
    const masterclassModules = await Promise.all([
      prisma.module.create({ data: { title: "Masterclass Claude Code", description: "Ton environnement de dev IA : coder avec Claude directement dans ton terminal", order: 15, category: "masterclass" } }),
      prisma.module.create({ data: { title: "Masterclass OpenClaw", description: "Assistant IA personnel self-hosted multi-canal", order: 16, category: "masterclass" } }),
    ]);

    const modules = [...formationModules, ...masterclassModules];

    // Create 3 sample lessons per module (light seed — no heavy content)
    let lessonCount = 0;
    for (const mod of modules) {
      const lessonsPerModule = mod.order <= 14 ? 8 : 5; // 8 per formation, 5 per masterclass
      for (let i = 1; i <= lessonsPerModule; i++) {
        const lesson = await prisma.lesson.create({
          data: {
            title: `Leçon ${i} — Module ${mod.order}`,
            slug: `m${mod.order}-l${i}`,
            description: `Leçon ${i} du module "${mod.title}"`,
            content: `# ${mod.title} — Leçon ${i}\n\nContenu de la leçon à venir.`,
            exercise: `Exercice pratique de la leçon ${i}.`,
            duration: 15 + (i * 5),
            order: i,
            moduleId: mod.id,
          },
        });

        // Quiz with 3 questions
        const quiz = await prisma.quiz.create({
          data: { lessonId: lesson.id, passingScore: 80 },
        });

        await prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            type: "mcq",
            question: `Question 1 de la leçon ${i}`,
            options: JSON.stringify(["Option A", "Option B", "Option C", "Option D"]),
            correctAnswer: "Option A",
            explanation: "Explication de la réponse.",
            order: 1,
          },
        });

        lessonCount++;
      }
    }

    // Sample progress for student
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

    await prisma.lessonProgress.create({
      data: {
        userId: student.id,
        lessonId: firstLessons[3].id,
        status: "in_progress",
      },
    });

    // Streak
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

    return NextResponse.json({
      success: true,
      modules: modules.length,
      lessons: lessonCount,
      users: { admin: admin.email, student: student.email },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
