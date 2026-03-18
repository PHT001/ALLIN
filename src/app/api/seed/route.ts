import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function cols(table: string): Promise<string[]> {
  const rows: any[] = await prisma.$queryRawUnsafe(
    `SELECT column_name FROM information_schema.columns WHERE table_name = $1 ORDER BY ordinal_position`, table
  );
  return rows.map(r => r.column_name);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get("key");

  if (key === "discover") {
    const tables = ["User","Module","Lesson","Quiz","QuizQuestion","LessonProgress","Enrollment","Streak"];
    const result: Record<string, string[]> = {};
    for (const t of tables) result[t] = await cols(t);
    return NextResponse.json(result);
  }

  if (key !== "opexia-seed-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.$executeRawUnsafe(`
      TRUNCATE TABLE "QuizSubmission","QuizQuestion","Quiz","LessonProgress","Streak","Enrollment","Lesson","Module","User" CASCADE;
    `);

    const adminPw = await bcrypt.hash("admin123", 12);
    const studentPw = await bcrypt.hash("test123", 12);

    const [admin]: any[] = await prisma.$queryRawUnsafe(`
      INSERT INTO "User" (id, email, name, "hashedPassword", role, "createdAt", "updatedAt")
      VALUES (gen_random_uuid(), 'admin@opexia.com', 'Admin Opexia', $1, 'admin', NOW(), NOW())
      RETURNING id, email
    `, adminPw);

    const [student]: any[] = await prisma.$queryRawUnsafe(`
      INSERT INTO "User" (id, email, name, "hashedPassword", role, "createdAt", "updatedAt")
      VALUES (gen_random_uuid(), 'etudiant@test.com', 'Élève Test', $1, 'student', NOW(), NOW())
      RETURNING id, email
    `, studentPw);

    const moduleData = [
      [1,"Découvrir l'IA & les opportunités","Comprendre l'IA et le potentiel business"],
      [2,"Prompt Engineering avancé","Maîtriser Claude comme outil quotidien"],
      [3,"Créer des sites web avec l'IA","De zéro à un site en ligne"],
      [4,"Backend & Bases de données","Supabase : mémoire de tes projets"],
      [5,"APIs & Intégrations","Connecter les outils entre eux"],
      [6,"Automatisations","Make, n8n, Zapier"],
      [7,"Chatbots IA","Le service le plus demandé"],
      [8,"Agents IA autonomes","Des IA qui travaillent seules"],
      [9,"Construire un MVP","Ton premier vrai produit"],
      [10,"Ton offre & tes prix","De je sais faire à je vends"],
      [11,"Trouver des clients","Prospection LinkedIn, cold email"],
      [12,"Livrer & fidéliser","Client satisfait = 3 clients en plus"],
      [13,"Scaler à 10K€/mois","De freelance solo à agence rentable"],
      [14,"Juridique, contrats & admin","Statuts, contrats, RGPD"],
      [15,"Masterclass Claude Code","Coder avec Claude dans ton terminal"],
      [16,"Masterclass OpenClaw","Assistant IA personnel multi-canal"],
    ];

    // Check if Module has createdAt
    const modCols = await cols("Module");
    const modHasTimestamps = modCols.includes("createdAt");

    const modules: any[] = [];
    for (const [order, title, desc] of moduleData) {
      const sql = modHasTimestamps
        ? `INSERT INTO "Module" (id, title, description, "order", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW()) RETURNING id, "order"`
        : `INSERT INTO "Module" (id, title, description, "order") VALUES (gen_random_uuid(), $1, $2, $3) RETURNING id, "order"`;
      const [mod]: any[] = await prisma.$queryRawUnsafe(sql, title, desc, order);
      modules.push(mod);
    }

    // Check Lesson/Quiz columns
    const lessonCols = await cols("Lesson");
    const quizCols = await cols("Quiz");
    const lessonHasTs = lessonCols.includes("createdAt");
    const quizHasTs = quizCols.includes("createdAt");

    let lessonCount = 0;
    for (const mod of modules) {
      const count = mod.order <= 14 ? 8 : 5;
      for (let i = 1; i <= count; i++) {
        const lessonSql = lessonHasTs
          ? `INSERT INTO "Lesson" (id, title, slug, description, content, exercise, duration, "order", "moduleId", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) RETURNING id`
          : `INSERT INTO "Lesson" (id, title, slug, description, content, exercise, duration, "order", "moduleId") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;

        const [lesson]: any[] = await prisma.$queryRawUnsafe(lessonSql,
          `Leçon ${i} — Module ${mod.order}`,
          `m${mod.order}-l${i}`,
          `Leçon ${i} du module ${mod.order}`,
          `# Module ${mod.order} — Leçon ${i}\n\nContenu à venir.`,
          `Exercice pratique ${i}.`,
          `${15 + i * 5} min`,
          i, mod.id
        );

        const quizSql = quizHasTs
          ? `INSERT INTO "Quiz" (id, "lessonId", "passingScore", "createdAt", "updatedAt") VALUES (gen_random_uuid(), $1, 80, NOW(), NOW()) RETURNING id`
          : `INSERT INTO "Quiz" (id, "lessonId", "passingScore") VALUES (gen_random_uuid(), $1, 80) RETURNING id`;

        const [quiz]: any[] = await prisma.$queryRawUnsafe(quizSql, lesson.id);

        await prisma.$executeRawUnsafe(
          `INSERT INTO "QuizQuestion" (id, "quizId", type, question, options, "correctAnswer", explanation, "order") VALUES (gen_random_uuid(), $1, 'mcq', $2, $3, 'Option A', 'Bonne réponse.', 1)`,
          quiz.id, `Question de la leçon ${i}`, JSON.stringify(["Option A","Option B","Option C","Option D"])
        );
        lessonCount++;
      }
    }

    // Progress (no createdAt/updatedAt in prod)
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

    // Enrollment (has createdAt but NOT updatedAt)
    await prisma.$executeRawUnsafe(
      `INSERT INTO "Enrollment" (id, "userId", tier, status, "createdAt") VALUES (gen_random_uuid(), $1, 'starter', 'active', NOW())`,
      student.id
    );

    return NextResponse.json({ success: true, modules: modules.length, lessons: lessonCount, admin: admin.email, student: student.email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
