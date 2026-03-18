import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const maxDuration = 60;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.get("key") !== "opexia-seed-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const tables = ["Referral","PipelineDeal","CoachingSession","Streak","QuizSubmission","LessonProgress","Enrollment","QuizQuestion","Quiz","Lesson","Module","User"];
    for (const t of tables) {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${t}" CASCADE;`);
    }

    const adminPw = await bcrypt.hash("admin123", 12);
    const studentPw = await bcrypt.hash("test123", 12);

    const admin = await prisma.user.create({
      data: { name: "Admin Opexia", email: "admin@opexia.com", hashedPassword: adminPw, role: "admin" },
    });
    const student = await prisma.user.create({
      data: { name: "Élève Test", email: "etudiant@test.com", hashedPassword: studentPw, role: "student" },
    });

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

    // Create lessons with real titles per module
    const lessonsByModule: Record<number, Array<{title: string, slug: string, dur: string, desc: string}>> = {
      1: [
        {title: "L'IA en 2025 : l'opportunité de la décennie", slug: "ia-2025-opportunite", dur: "20 min", desc: "Comprendre pourquoi l'IA est l'opportunité business #1"},
        {title: "Les outils : ChatGPT, Claude, Gemini, Mistral", slug: "outils-ia-marche", dur: "25 min", desc: "Tour d'horizon des outils IA disponibles"},
        {title: "Tes premiers prompts : de débutant à efficace", slug: "premiers-prompts", dur: "20 min", desc: "Maîtriser les bases du prompting"},
        {title: "Ce qu'une agence IA vend (et à quel prix)", slug: "agence-ia-services-prix", dur: "20 min", desc: "Les services vendables et leur pricing"},
        {title: "Démo : on crée un chatbot en 30 min", slug: "demo-chatbot-30min", dur: "30 min", desc: "Créer un chatbot fonctionnel de A à Z"},
        {title: "Ton identité d'agence : nom, pitch, positionnement", slug: "identite-agence-pitch", dur: "25 min", desc: "Poser les fondations de ton business"},
      ],
      2: [
        {title: "Claude Pro : ton arme secrète", slug: "claude-pro-arme-secrete", dur: "20 min", desc: "Maîtriser Claude Pro et Projects"},
        {title: "Les 7 frameworks de prompting", slug: "frameworks-prompting", dur: "25 min", desc: "Les techniques avancées de prompting"},
        {title: "Prompts business : emails, offres, contenus", slug: "prompts-business", dur: "20 min", desc: "Générer du contenu business pro"},
        {title: "Prompts code : de l'idée au prototype", slug: "prompts-code", dur: "25 min", desc: "Coder avec l'aide de Claude"},
        {title: "Ton prompt library personnelle", slug: "prompt-library", dur: "20 min", desc: "Organiser ta bibliothèque de prompts"},
      ],
      3: [
        {title: "Les outils : v0, Bolt, Cursor, Lovable", slug: "outils-no-code-site", dur: "20 min", desc: "Les outils IA pour créer des sites"},
        {title: "Créer une landing page avec v0 + Claude", slug: "landing-page-v0-claude", dur: "30 min", desc: "Ta première landing page pro"},
        {title: "Next.js et React : le minimum vital", slug: "nextjs-react-minimum", dur: "25 min", desc: "Les bases React pour aller plus loin"},
        {title: "Construire un site client complet", slug: "site-client-complet", dur: "30 min", desc: "Un site vitrine de A à Z"},
        {title: "Déployer sur Vercel", slug: "deployer-vercel", dur: "15 min", desc: "Mettre ton site en ligne gratuitement"},
        {title: "Ton portfolio en ligne", slug: "portfolio-en-ligne", dur: "25 min", desc: "Créer ton portfolio professionnel"},
      ],
      4: [
        {title: "Base de données + Supabase setup", slug: "bdd-supabase-setup", dur: "25 min", desc: "Comprendre les BDD et configurer Supabase"},
        {title: "SQL essentiel + Auth", slug: "sql-auth", dur: "25 min", desc: "SQL de base et authentification"},
        {title: "C'est quoi une API ?", slug: "cest-quoi-api", dur: "20 min", desc: "Comprendre les APIs simplement"},
        {title: "Stripe : accepter des paiements", slug: "stripe-paiements", dur: "25 min", desc: "Intégrer Stripe dans tes projets"},
        {title: "Webhooks : connecter les apps", slug: "webhooks-connecter", dur: "20 min", desc: "Faire communiquer les services"},
        {title: "Projet : mini-SaaS complet", slug: "projet-mini-saas", dur: "35 min", desc: "Construire une app complète"},
      ],
      5: [
        {title: "Pourquoi automatiser ? ROI et cas concrets", slug: "pourquoi-automatiser", dur: "20 min", desc: "L'impact business de l'automatisation"},
        {title: "Make : ton premier scénario", slug: "make-premier-scenario", dur: "25 min", desc: "Créer un workflow Make"},
        {title: "n8n : l'alternative open-source", slug: "n8n-alternative", dur: "25 min", desc: "Découvrir n8n"},
        {title: "Automatiser avec l'IA", slug: "automatiser-avec-ia", dur: "25 min", desc: "Combiner automatisation et IA"},
        {title: "Projet : veille automatisée", slug: "projet-veille-auto", dur: "30 min", desc: "Construire un système de veille"},
      ],
      6: [
        {title: "Pourquoi les chatbots sont le service #1", slug: "chatbots-service-numero1", dur: "20 min", desc: "L'opportunité business des chatbots"},
        {title: "Les plateformes : Voiceflow, Botpress, custom", slug: "plateformes-chatbot", dur: "20 min", desc: "Choisir sa stack chatbot"},
        {title: "Créer un chatbot avec Voiceflow", slug: "chatbot-voiceflow", dur: "30 min", desc: "Ton premier chatbot no-code"},
        {title: "RAG : donner une mémoire à ton chatbot", slug: "rag-memoire-chatbot", dur: "25 min", desc: "Chatbot alimenté par une knowledge base"},
        {title: "Chatbot custom avec Next.js + Claude", slug: "chatbot-custom-nextjs", dur: "30 min", desc: "Construire un chatbot sur-mesure"},
        {title: "Projet : chatbot client prêt à livrer", slug: "projet-chatbot-client", dur: "35 min", desc: "Un chatbot vendable avec documentation"},
      ],
      7: [
        {title: "Chatbot vs Agent : quelle différence ?", slug: "chatbot-vs-agent", dur: "20 min", desc: "Comprendre les agents IA"},
        {title: "Les frameworks : CrewAI, Claude Tools", slug: "frameworks-agents", dur: "25 min", desc: "Les outils pour créer des agents"},
        {title: "Agent de veille concurrentielle", slug: "agent-veille", dur: "25 min", desc: "Construire un agent de veille"},
        {title: "Projet : agent multi-outils vendable", slug: "projet-agent-vendable", dur: "30 min", desc: "Un agent prêt pour la démo"},
      ],
      8: [
        {title: "De 'je sais faire' à 'je vends'", slug: "mindset-je-vends", dur: "20 min", desc: "Le mindset shift entrepreneur"},
        {title: "Les 5 services IA les plus rentables", slug: "services-ia-rentables", dur: "20 min", desc: "Choisir sa niche et ses services"},
        {title: "Construire ton offre irrésistible (3 tiers)", slug: "offre-irresistible-3-tiers", dur: "25 min", desc: "Structurer son offre commerciale"},
        {title: "Fixer tes prix sans avoir peur", slug: "fixer-prix", dur: "20 min", desc: "La psychologie du pricing"},
        {title: "Créer tes supports de vente", slug: "supports-vente", dur: "25 min", desc: "Deck commercial et page de vente"},
        {title: "TON PREMIER CLIENT GRATUIT", slug: "premier-client-gratuit", dur: "35 min", desc: "Livrer un projet gratuit et obtenir un témoignage"},
        {title: "Ton portfolio avec des vrais cas", slug: "portfolio-vrais-cas", dur: "25 min", desc: "Transformer tes projets en cas d'étude"},
      ],
      9: [
        {title: "Les 3 canaux : LinkedIn, cold email, réseau", slug: "3-canaux-acquisition", dur: "20 min", desc: "Stratégie de prospection multi-canal"},
        {title: "Prospection LinkedIn : 0 à 10 prospects/jour", slug: "prospection-linkedin", dur: "30 min", desc: "Optimiser LinkedIn pour la prospection"},
        {title: "Cold email : la machine à rendez-vous", slug: "cold-email-machine", dur: "25 min", desc: "Séquences d'emails qui convertissent"},
        {title: "L'appel de closing", slug: "appel-closing", dur: "25 min", desc: "Convertir un prospect en client"},
        {title: "Le réseau local : ton arme secrète", slug: "reseau-local", dur: "20 min", desc: "Exploiter le networking local"},
        {title: "Ton système de prospection automatisé", slug: "systeme-prospection-auto", dur: "30 min", desc: "Pipeline CRM + automatisations"},
        {title: "Upselling et cross-selling", slug: "upselling-cross-selling", dur: "25 min", desc: "Maximiser la valeur par client"},
      ],
      10: [
        {title: "Le process de livraison parfait", slug: "process-livraison", dur: "25 min", desc: "Template onboarding et kickoff"},
        {title: "Gérer les attentes et éviter les conflits", slug: "gerer-attentes", dur: "20 min", desc: "Communication client efficace"},
        {title: "Les outils de gestion (Notion)", slug: "outils-gestion-notion", dur: "20 min", desc: "Organiser son agence avec Notion"},
        {title: "Structurer tes retainers mensuels", slug: "retainers-mensuels", dur: "25 min", desc: "Revenus récurrents via maintenance"},
        {title: "Collecter témoignages et referrals", slug: "temoignages-referrals", dur: "20 min", desc: "Le bouche-à-oreille systématisé"},
        {title: "Quand ça se passe mal : gestion de crise", slug: "gestion-crise", dur: "20 min", desc: "Résoudre les conflits professionnellement"},
      ],
      11: [
        {title: "C'est quoi un MVP et le framework Problem-Solution", slug: "mvp-framework", dur: "25 min", desc: "Définir un MVP viable"},
        {title: "Architecture technique et choix de stack", slug: "architecture-mvp", dur: "20 min", desc: "Concevoir l'architecture technique"},
        {title: "Construire le frontend en 2h avec l'IA", slug: "frontend-2h-ia", dur: "30 min", desc: "Prototyper rapidement avec l'IA"},
        {title: "Connecter le backend : auth + CRUD + API", slug: "backend-auth-crud", dur: "25 min", desc: "Assembler les briques techniques"},
        {title: "Déployer, tester et itérer", slug: "deployer-tester-iterer", dur: "25 min", desc: "Mise en production et feedback"},
      ],
      12: [
        {title: "La roadmap de 0 à 10K€/mois", slug: "roadmap-0-10k", dur: "20 min", desc: "Le chemin étape par étape"},
        {title: "Recruter et déléguer", slug: "recruter-deleguer", dur: "25 min", desc: "Tes premiers freelances"},
        {title: "Systématiser ton agence", slug: "systematiser-agence", dur: "25 min", desc: "SOPs et process reproductibles"},
        {title: "Les revenus passifs", slug: "revenus-passifs", dur: "20 min", desc: "Templates, formations, micro-SaaS"},
        {title: "Ton plan d'action à 90 jours", slug: "plan-action-90-jours", dur: "25 min", desc: "Plan semaine par semaine"},
        {title: "Revenus récurrents : atteindre 10K en MRR", slug: "revenus-recurrents-10k-mrr", dur: "30 min", desc: "La math du 10K€/mois"},
      ],
      13: [
        {title: "Statut juridique : auto-entrepreneur, SASU ou SAS", slug: "statut-juridique", dur: "25 min", desc: "Choisir son statut"},
        {title: "Contrats, CGV et RGPD", slug: "contrats-cgv-rgpd", dur: "25 min", desc: "Les documents légaux essentiels"},
        {title: "Facturation, devis et relances", slug: "facturation-devis", dur: "20 min", desc: "Gérer sa facturation"},
        {title: "Assurances et protection sociale", slug: "assurances-protection", dur: "20 min", desc: "Se protéger juridiquement"},
      ],
      14: [
        {title: "Claude Code : pourquoi c'est révolutionnaire", slug: "mc-claude-code-intro", dur: "20 min", desc: "Découvrir Claude Code"},
        {title: "Ton premier projet avec Claude Code", slug: "mc-claude-code-premier-projet", dur: "25 min", desc: "Créer un projet de A à Z"},
        {title: "Les commandes essentielles", slug: "mc-claude-code-commandes", dur: "20 min", desc: "Maîtriser les commandes clés"},
        {title: "Vibe coding : construire sans savoir coder", slug: "mc-claude-code-vibe-coding", dur: "30 min", desc: "Le coding assisté par IA"},
        {title: "Gérer un projet complexe + GitHub", slug: "mc-claude-code-github", dur: "25 min", desc: "Versionning et collaboration"},
      ],
      15: [
        {title: "Qu'est-ce qu'OpenClaw et pourquoi l'utiliser", slug: "mc-openclaw-intro", dur: "20 min", desc: "Découvrir OpenClaw"},
        {title: "Installation et configuration", slug: "mc-openclaw-install", dur: "25 min", desc: "Installer OpenClaw"},
        {title: "Connecter ses messageries", slug: "mc-openclaw-messagerie", dur: "20 min", desc: "WhatsApp, Telegram, Discord..."},
        {title: "Sécurité et confidentialité", slug: "mc-openclaw-securite", dur: "20 min", desc: "Sécuriser son installation"},
        {title: "Les capacités d'action", slug: "mc-openclaw-capacites", dur: "25 min", desc: "Les 7 catégories de capacités"},
        {title: "Déployer OpenClaw en production", slug: "mc-openclaw-deploiement", dur: "25 min", desc: "Installation pérenne 24/7"},
        {title: "Vendre OpenClaw comme service", slug: "mc-openclaw-vendre", dur: "30 min", desc: "Packager OpenClaw en offre commerciale"},
      ],
    };

    let lessonCount = 0;
    for (let i = 0; i < modules.length; i++) {
      const lessons = lessonsByModule[i + 1] || [];
      for (let j = 0; j < lessons.length; j++) {
        const l = lessons[j];
        const lesson = await prisma.lesson.create({
          data: {
            title: l.title,
            slug: l.slug,
            description: l.desc,
            content: JSON.stringify([{id: "1", type: "heading", level: 2, text: l.title}, {id: "2", type: "text", html: "<p>Contenu détaillé de la leçon. Vidéo à venir.</p>"}]),
            exercise: "<p>Exercice pratique à compléter.</p>",
            duration: l.dur,
            order: j + 1,
            moduleId: modules[i].id,
          },
        });

        const quiz = await prisma.quiz.create({ data: { lessonId: lesson.id, passingScore: 80 } });
        await prisma.quizQuestion.create({
          data: {
            quizId: quiz.id, type: "mcq", order: 1,
            question: "Quel est l'objectif principal de cette leçon ?",
            options: JSON.stringify(["Théorie uniquement", "Pratique uniquement", "Combiner théorie et pratique", "Aucun"]),
            correctAnswer: "Combiner théorie et pratique",
            explanation: "Chaque leçon combine théorie et exercices pratiques.",
          },
        });
        lessonCount++;
      }
    }

    // Enrollment + progress for student
    await prisma.enrollment.create({ data: { userId: student.id, tier: "starter", status: "active" } });

    return NextResponse.json({ success: true, modules: modules.length, lessons: lessonCount, admin: admin.email, student: student.email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
