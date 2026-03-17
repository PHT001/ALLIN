// ═══════════════════════════════════════════════════
// MODULE 3 — Créer ton premier site web avec l'IA
// 6 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_3_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 3,
    title: "Les outils no-code pour créer un site en 2025",
    slug: "outils-no-code-site-2025",
    duration: "20 min",
    description: "v0.dev, Bolt, Cursor, Lovable — comprendre les différences, les forces de chaque outil et savoir lequel choisir selon ton projet.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "La révolution du développement web IA" },
      { id: "1-2", type: "text", html: "<p>En 2025, créer un site web complet ne demande plus des années d'apprentissage. Avec les bons outils IA, tu peux passer d'une idée à un site fonctionnel en <strong>quelques heures</strong>. Des outils comme <strong>v0.dev</strong>, <strong>Bolt</strong>, <strong>Cursor</strong> et <strong>Lovable</strong> ont changé les règles du jeu.</p><p>Mais attention — chaque outil a ses forces. Utiliser le mauvais outil sur le mauvais projet, c'est perdre du temps et de l'argent.</p>" },
      { id: "1-3", type: "callout", variant: "tip", html: "Le secret des meilleurs développeurs IA aujourd'hui : ils ne choisissent pas <em>un</em> outil, ils savent lequel utiliser à chaque étape du projet." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Les 4 outils à connaître absolument" },
      { id: "1-6", type: "comparison", headers: ["Outil", "Point fort", "Idéal pour", "Prix"], rows: [
        { cells: ["v0.dev (Vercel)", "Génération de composants React ultra-rapide", "UI, landing pages, prototypes", "Gratuit + payant"] },
        { cells: ["Bolt.new (StackBlitz)", "Appli full-stack en 1 prompt (frontend + backend)", "SaaS, apps avec DB", "Gratuit limité"] },
        { cells: ["Cursor", "IDE IA complet, contrôle total du code", "Projets complexes, modifications précises", "20$/mois"] },
        { cells: ["Lovable.dev", "De l'idée au site déployé sans code", "Débutants, clients non-tech", "Gratuit + payant"] },
      ]},
      { id: "1-7", type: "separator", style: "space" },

      { id: "1-8", type: "heading", level: 2, text: "v0.dev — Le générateur de composants de Vercel" },
      { id: "1-9", type: "text", html: "<p><strong>v0.dev</strong> est l'outil créé par Vercel pour générer des composants React/Tailwind en quelques secondes. Tu décris ce que tu veux en langage naturel, il te donne le code prêt à copier-coller.</p><p>C'est parfait pour :</p><ul><li>Créer une <strong>hero section</strong> en 30 secondes</li><li>Générer des formulaires, des cartes, des navbars</li><li>Itérer rapidement sur le design</li></ul>" },
      { id: "1-10", type: "callout", variant: "info", html: "v0 génère du code React avec Tailwind CSS et shadcn/ui — les standards modernes du web. Le code produit est propre, réutilisable et prêt pour la production." },

      { id: "1-11", type: "heading", level: 2, text: "Bolt.new — L'appli full-stack en 1 prompt" },
      { id: "1-12", type: "text", html: "<p><strong>Bolt.new</strong> est le plus impressionnant pour les démos clients. Tu décris ton application complète — avec base de données, authentification, tableau de bord — et il crée tout en quelques minutes. Il tourne dans le navigateur sans installation.</p><p>Idéal pour : <strong>prototyper rapidement</strong> une idée et la montrer à un client avant de construire la version finale.</p>" },

      { id: "1-13", type: "heading", level: 2, text: "Cursor — L'IDE pour les projets sérieux" },
      { id: "1-14", type: "text", html: "<p><strong>Cursor</strong> est un éditeur de code (basé sur VS Code) avec une IA intégrée ultra-puissante. Contrairement à v0 ou Bolt, tu travailles sur un vrai projet local avec un contrôle total. L'IA comprend toute ta codebase et peut modifier plusieurs fichiers à la fois.</p><p>C'est l'outil à utiliser quand le projet est <strong>en production</strong> ou quand tu as besoin de précision.</p>" },

      { id: "1-15", type: "heading", level: 2, text: "Quand utiliser quoi ?" },
      { id: "1-16", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Nouveau projet", description: "Tu pars de zéro" },
        { id: "n2", label: "Site vitrine / landing page", description: "→ Commence par v0.dev pour le design, exporte vers Cursor" },
        { id: "n3", label: "Application web (SaaS)", description: "→ Prototyper avec Bolt, développer avec Cursor" },
        { id: "n4", label: "Client non-technique", description: "→ Lovable pour qu'il puisse modifier lui-même" },
        { id: "n5", label: "Modifications d'un projet existant", description: "→ Cursor directement, précision maximale" },
      ]},
      { id: "1-17", type: "callout", variant: "success", html: "Pour ce module, on va utiliser <strong>v0.dev + Claude</strong> pour créer des sites professionnels rapidement. C'est le combo optimal pour 80% des projets clients d'une agence IA." },

      { id: "1-18", type: "separator", style: "line" },
      { id: "1-19", type: "quiz-inline", question: "Tu dois créer une application SaaS avec base de données pour un client. Quel outil utilises-tu pour le prototype initial ?", options: [
        { id: "a", text: "v0.dev" },
        { id: "b", text: "Bolt.new" },
        { id: "c", text: "Lovable" },
        { id: "d", text: "Cursor" },
      ], correctId: "b", explanation: "Bolt.new est parfait pour prototyper une application full-stack complète (avec DB et auth) très rapidement. v0 est plutôt pour les composants UI, et Cursor pour les projets en production." },

      { id: "1-20", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je connais les 4 outils no-code/IA principaux de 2025" },
        { id: "c2", text: "Je sais faire la différence entre v0, Bolt, Cursor et Lovable" },
        { id: "c3", text: "Je sais quel outil utiliser selon le type de projet" },
        { id: "c4", text: "Je comprends que v0 + Claude est le combo optimal pour les sites clients" },
      ]},
    ]),
    exercise: "<h3>Exercice : Explore les outils</h3><p>Ouvre les 4 outils dans 4 onglets : <a href='https://v0.dev' target='_blank'>v0.dev</a>, <a href='https://bolt.new' target='_blank'>bolt.new</a>, <a href='https://cursor.com' target='_blank'>cursor.com</a>, <a href='https://lovable.dev' target='_blank'>lovable.dev</a>.</p><p>Sur <strong>v0.dev</strong>, tape ce prompt : <em>\"Create a modern landing page hero section for a digital marketing agency with a headline, subheadline, CTA button and a clean gradient background\"</em>.</p><p>Observe le résultat en 30 secondes. Note ce qui t'impressionne et ce qui manque.</p>",
    quiz: [
      { type: "mcq", question: "Quel outil est recommandé pour prototyper rapidement une application full-stack avec base de données ?", options: JSON.stringify(["v0.dev", "Bolt.new", "Cursor", "Lovable"]), correctAnswer: "Bolt.new", explanation: "Bolt.new est l'outil le plus impressionnant pour les démos clients. Tu décris ton application complète — avec base de données, authentification, tableau de bord — et il crée tout en quelques minutes dans le navigateur." },
      { type: "true_false", question: "v0.dev génère du code React avec Tailwind CSS et shadcn/ui.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "v0.dev, créé par Vercel, génère du code React avec Tailwind CSS et shadcn/ui — les standards modernes du web. Le code produit est propre, réutilisable et prêt pour la production." },
      { type: "mcq", question: "Quel outil est recommandé quand le projet est en production et qu'on a besoin de précision ?", options: JSON.stringify(["v0.dev", "Bolt.new", "Cursor", "Lovable"]), correctAnswer: "Cursor", explanation: "Cursor est un IDE IA basé sur VS Code qui comprend toute ta codebase et peut modifier plusieurs fichiers à la fois. C'est l'outil à utiliser quand le projet est en production ou quand tu as besoin de précision." },
      { type: "true_false", question: "Lovable.dev est recommandé pour les clients non-techniques qui veulent pouvoir modifier leur site eux-mêmes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Lovable.dev permet de passer de l'idée au site déployé sans code, ce qui est idéal pour les débutants et les clients non-tech qui veulent être autonomes." },
      { type: "mcq", question: "Un client photographe te demande un site portfolio avec galerie d'images. Il veut pouvoir modifier les photos lui-même sans te rappeler. Quel outil choisis-tu ?", options: JSON.stringify(["Cursor car il permet de modifier le code avec précision", "v0.dev car il génère du code React propre", "Lovable car le client non-technique pourra modifier son site lui-même", "Bolt car il gère les bases de données"]), correctAnswer: "Lovable car le client non-technique pourra modifier son site lui-même", explanation: "Lovable est recommandé pour les clients non-techniques qui veulent être autonomes. Il permet de passer de l'idée au site déployé sans code, ce qui est idéal pour un photographe qui veut gérer ses photos seul." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 3,
    title: "Créer une landing page avec v0 et Claude",
    slug: "landing-page-v0-claude",
    duration: "35 min",
    description: "De l'idée au site complet : utiliser Claude pour structurer le contenu, v0 pour le design, et exporter un code propre prêt à déployer.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le workflow complet : Claude → v0 → Code" },
      { id: "2-2", type: "text", html: "<p>La plupart des gens utilisent v0 de la mauvaise façon : ils tapent un prompt vague et espèrent un miracle. Le vrai workflow pro, c'est de <strong>préparer le contenu avec Claude d'abord</strong>, puis de demander à v0 de le mettre en forme.</p><p>Résultat : un site qui ressemble à quelque chose ET qui dit les bonnes choses à tes clients.</p>" },
      { id: "2-3", type: "diagram", variant: "timeline", nodes: [
        { id: "t1", label: "Étape 1 — Brief", description: "Définir avec Claude l'objectif du site, la cible, la proposition de valeur" },
        { id: "t2", label: "Étape 2 — Contenu", description: "Claude génère les textes, titres, CTAs, et structure des sections" },
        { id: "t3", label: "Étape 3 — Design", description: "v0 transforme le contenu en composants React visuels" },
        { id: "t4", label: "Étape 4 — Itération", description: "Raffiner avec des prompts de modification sur v0" },
        { id: "t5", label: "Étape 5 — Export", description: "Copier le code et l'intégrer dans Next.js ou Vercel" },
      ]},
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Étape 1 : Le brief avec Claude" },
      { id: "2-6", type: "text", html: "<p>Avant de toucher v0, ouvre Claude et donne-lui le contexte complet. Voici le prompt exact à utiliser :</p>" },
      { id: "2-7", type: "code", language: "text", filename: "prompt-brief-claude.txt", code: `Tu vas m'aider à créer une landing page professionnelle.

Contexte :
- Client : [nom ou type de client]
- Service vendu : [ex: coaching business, plomberie, restaurant]
- Cible : [ex: entrepreneurs 30-45 ans, particuliers en IDF]
- Objectif de la page : [ex: générer des appels découverte, collecter des emails]
- Ton : [ex: professionnel et direct, chaleureux et accessible]

Crée-moi la structure complète de la landing page avec :
1. Le titre principal (headline) + sous-titre
2. La section "Problème" (3 points de douleur)
3. La section "Solution" avec les 3 bénéfices clés
4. La section "Comment ça marche" (3-4 étapes)
5. La section "Témoignages" (2-3 témoignages fictifs réalistes)
6. La section "FAQ" (4 questions fréquentes)
7. Le CTA final avec texte du bouton

Génère uniquement les textes, pas le code.` },
      { id: "2-8", type: "callout", variant: "tip", html: "Remplis chaque champ du brief avec précision. Plus Claude a de contexte, plus le contenu sera pertinent. Un brief de 10 lignes = une page de contenu de qualité." },

      { id: "2-9", type: "separator", style: "space" },
      { id: "2-10", type: "heading", level: 2, text: "Étape 2 : Transformer le contenu en design avec v0" },
      { id: "2-11", type: "text", html: "<p>Tu as maintenant un contenu structuré. Copie le résultat de Claude et utilise ce prompt dans v0.dev :</p>" },
      { id: "2-12", type: "code", language: "text", filename: "prompt-v0-landing.txt", code: `Create a complete, modern landing page using this exact content:

[COLLE ICI LE CONTENU GÉNÉRÉ PAR CLAUDE]

Design requirements:
- Style: clean, modern, professional
- Color scheme: dark navy (#0F172A) with electric blue accent (#3B82F6)
- Font: Inter or similar sans-serif
- Full responsive design (mobile first)
- Sections: Hero, Problem, Solution, How it works, Testimonials, FAQ, Final CTA
- Include smooth animations on scroll
- Use shadcn/ui components where possible
- Add a sticky navigation header

Make it look like a $10,000 agency website.` },
      { id: "2-13", type: "callout", variant: "info", html: "La clé : spécifier les couleurs en hex, le style exact, et dire explicitement que tu veux un rendu premium. v0 adapte la qualité à tes attentes." },

      { id: "2-14", type: "heading", level: 2, text: "Étape 3 : Itérer et affiner" },
      { id: "2-15", type: "text", html: "<p>v0 a généré une première version. Maintenant tu affines avec des prompts précis. Voici des exemples de prompts de modification :</p>" },
      { id: "2-16", type: "steps", steps: [
        { title: "Modifier le hero", description: "\"Make the hero section more impactful — larger headline (text-6xl), add a subtle gradient background animation, and make the CTA button pulse gently\"" },
        { title: "Améliorer le mobile", description: "\"The testimonials section looks broken on mobile. Fix the layout so the cards stack vertically and the text is readable\"" },
        { title: "Ajouter une section", description: "\"Add a social proof bar between the hero and problem sections: 5 company logos in grayscale with the text 'They trust us'\"" },
        { title: "Changer les couleurs", description: "\"Change the accent color from blue to emerald green (#10B981) everywhere, and update the gradient accordingly\"" },
      ]},

      { id: "2-17", type: "heading", level: 2, text: "Étape 4 : Exporter le code" },
      { id: "2-18", type: "text", html: "<p>Quand le design te convient, clique sur <strong>\"Open in v0\"</strong> puis sur le bouton <strong>\"Code\"</strong> en haut à droite. Tu peux :</p><ul><li><strong>Copier le code</strong> directement dans ton projet Next.js</li><li><strong>Ouvrir dans StackBlitz</strong> pour tester en live</li><li><strong>Déployer sur Vercel</strong> en 1 clic depuis l'interface v0</li></ul>" },
      { id: "2-19", type: "callout", variant: "success", html: "v0 génère du code React + Tailwind + shadcn/ui. C'est exactement le stack utilisé par les meilleures startups. Ton code est directement production-ready." },

      { id: "2-20", type: "separator", style: "line" },
      { id: "2-21", type: "quiz-inline", question: "Pourquoi préparer le contenu avec Claude AVANT d'utiliser v0 ?", options: [
        { id: "a", text: "Parce que v0 ne parle pas français" },
        { id: "b", text: "Pour avoir un contenu ciblé et pertinent avant de le mettre en forme visuellement" },
        { id: "c", text: "Pour économiser des crédits v0" },
      ], correctId: "b", explanation: "v0 est excellent pour le design, mais le contenu générique donne des résultats génériques. En préparant le vrai contenu avec Claude d'abord, le site final est immédiatement pertinent pour le client." },

      { id: "2-22", type: "checklist", title: "Compétences acquises", items: [
        { id: "c1", text: "Je sais utiliser Claude pour structurer le contenu d'une landing page" },
        { id: "c2", text: "Je maîtrise le prompt v0 pour générer un design premium" },
        { id: "c3", text: "Je sais affiner le design avec des prompts de modification précis" },
        { id: "c4", text: "Je sais exporter le code généré par v0" },
        { id: "c5", text: "Je comprends le workflow complet Claude → v0 → Code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ta première landing page</h3><p>Choisis un type de client fictif (ex: coach sportif, comptable, agence photo). Utilise le prompt de brief dans Claude pour générer le contenu complet. Puis utilise le prompt v0 pour générer la page.</p><p>Objectif : avoir une landing page visuellement convaincante en moins de 30 minutes. Fais une capture d'écran du résultat pour le partager dans la communauté.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le bon workflow pour créer une landing page professionnelle ?", options: JSON.stringify(["Coder directement sans planifier", "Prompt vague dans v0 et espérer un miracle", "Claude (contenu) → v0 (design) → Itération → Export", "Copier un template gratuit et changer les textes"]), correctAnswer: "Claude (contenu) → v0 (design) → Itération → Export", explanation: "Le workflow pro est : préparer le contenu avec Claude d'abord (brief + textes), puis demander à v0 de le mettre en forme visuellement, itérer avec des prompts précis, et enfin exporter le code." },
      { type: "true_false", question: "Il est recommandé de spécifier les couleurs en code hexadécimal dans les prompts v0 pour obtenir un meilleur résultat.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Spécifier les couleurs en hex (ex: #0F172A, #3B82F6), le style exact et demander explicitement un rendu premium permet à v0 d'adapter la qualité à tes attentes précises." },
      { type: "mcq", question: "Combien de sections le brief Claude doit-il générer pour une landing page complète ?", options: JSON.stringify(["3 sections", "5 sections", "7 sections (Hero, Problème, Solution, Comment ça marche, Témoignages, FAQ, CTA final)", "10 sections"]), correctAnswer: "7 sections (Hero, Problème, Solution, Comment ça marche, Témoignages, FAQ, CTA final)", explanation: "Le brief complet génère 7 sections : titre principal + sous-titre, section Problème, section Solution, section Comment ça marche, Témoignages, FAQ et CTA final." },
      { type: "true_false", question: "Le code généré par v0 peut être déployé directement sur Vercel en 1 clic.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "v0 génère du code React + Tailwind + shadcn/ui production-ready. On peut copier le code dans un projet Next.js, l'ouvrir dans StackBlitz pour tester, ou le déployer sur Vercel en 1 clic directement depuis l'interface v0." },
      { type: "mcq", question: "Un prospect coach sportif te donne un brief vague : 'Je veux un site qui donne envie de s'inscrire.' Quelle est ta première étape ?", options: JSON.stringify(["Ouvrir v0.dev et prompter directement un design de site fitness", "Utiliser Claude pour générer le contenu complet (headline, problème, solution, témoignages, CTA) avant de toucher au design", "Chercher des templates gratuits de sites de coaching", "Lui demander de t'envoyer tous les textes lui-même"]), correctAnswer: "Utiliser Claude pour générer le contenu complet (headline, problème, solution, témoignages, CTA) avant de toucher au design", explanation: "Le workflow pro commence par le contenu avec Claude : brief structuré avec les 7 sections (hero, problème, solution, etc.). Un contenu ciblé et pertinent donne un design ciblé et pertinent. Un prompt vague dans v0 donnera un résultat générique." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 3,
    title: "HTML, CSS, JavaScript : les bases en accéléré",
    slug: "html-css-javascript-bases-accelere",
    duration: "30 min",
    description: "Juste assez de code pour comprendre ce que l'IA génère, modifier les bons endroits et ne plus être bloqué devant un fichier source.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Tu n'as pas besoin de tout apprendre" },
      { id: "3-2", type: "text", html: "<p>Tu n'as pas besoin de devenir développeur pour créer des sites avec l'IA. Par contre, tu dois comprendre <strong>assez</strong> de code pour :</p><ul><li>Identifier quel fichier modifier</li><li>Comprendre la structure d'un composant</li><li>Faire des modifications simples sans casser le projet</li><li>Donner des instructions précises à l'IA</li></ul><p>Cette leçon te donne le <em>minimum viable</em> en 30 minutes.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "Règle d'or : si tu ne comprends pas un bout de code, colle-le dans Claude et demande-lui d'expliquer. Tu apprendras 10x plus vite qu'avec n'importe quel cours." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "HTML — La structure de la page" },
      { id: "3-6", type: "text", html: "<p>HTML, c'est le squelette. Chaque élément est une <strong>balise</strong> qui ouvre et ferme. Rien de magique.</p>" },
      { id: "3-7", type: "code", language: "html", filename: "index.html", code: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Mon site</title>
    <!-- Ici : les ressources chargées (CSS, fonts...) -->
  </head>
  <body>
    <!-- Ici : ce que l'utilisateur voit -->

    <header>
      <nav>Mon menu</nav>
    </header>

    <main>
      <h1>Titre principal</h1>
      <p>Un paragraphe de texte.</p>
      <a href="https://monsite.com">Un lien</a>
      <img src="photo.jpg" alt="Description" />

      <!-- Une section avec une classe CSS -->
      <section class="hero">
        <h2>Sous-titre</h2>
        <button>Clique ici</button>
      </section>
    </main>

    <footer>Pied de page</footer>
  </body>
</html>` },
      { id: "3-8", type: "callout", variant: "info", html: "Les balises les plus importantes à retenir : <code>&lt;div&gt;</code> (conteneur), <code>&lt;p&gt;</code> (paragraphe), <code>&lt;h1&gt; à &lt;h6&gt;</code> (titres), <code>&lt;a&gt;</code> (lien), <code>&lt;img&gt;</code> (image), <code>&lt;button&gt;</code> (bouton), <code>&lt;section&gt;</code> et <code>&lt;main&gt;</code> (structure)." },

      { id: "3-9", type: "separator", style: "space" },
      { id: "3-10", type: "heading", level: 2, text: "CSS — Le style visuel" },
      { id: "3-11", type: "text", html: "<p>CSS, c'est ce qui rend une page jolie. Tu cibles un élément et tu lui appliques des propriétés visuelles. En 2025, la majorité des sites modernes utilisent <strong>Tailwind CSS</strong> — des classes prédéfinies directement dans le HTML.</p>" },
      { id: "3-12", type: "code", language: "css", filename: "styles.css", code: `/* CSS classique */
.hero {
  background-color: #0F172A;  /* couleur de fond */
  padding: 80px 20px;          /* espace intérieur */
  text-align: center;
}

h1 {
  font-size: 48px;
  color: white;
  font-weight: 700;            /* gras */
}

.cta-button {
  background-color: #3B82F6;  /* bleu */
  color: white;
  padding: 16px 32px;
  border-radius: 8px;         /* coins arrondis */
  cursor: pointer;
}

/* Responsive : sur mobile (< 768px) */
@media (max-width: 768px) {
  h1 {
    font-size: 28px;           /* titre plus petit sur mobile */
  }
}` },
      { id: "3-13", type: "code", language: "html", filename: "tailwind-example.html", code: `<!-- Tailwind CSS : les styles sont des classes dans le HTML -->
<!-- Pas de fichier CSS séparé à gérer -->

<div class="bg-slate-900 p-20 text-center">
  <h1 class="text-5xl font-bold text-white">
    Mon titre
  </h1>
  <button class="mt-8 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600">
    Clique ici
  </button>
</div>

<!-- Logique Tailwind :
  bg-slate-900 = background dark
  p-20 = padding
  text-5xl = font-size large
  font-bold = gras
  hover:bg-blue-600 = couleur au survol
-->` },

      { id: "3-14", type: "separator", style: "space" },
      { id: "3-15", type: "heading", level: 2, text: "JavaScript — Le comportement interactif" },
      { id: "3-16", type: "text", html: "<p>JavaScript, c'est ce qui rend la page <em>vivante</em> : animations, formulaires, boutons qui font quelque chose. Tu n'as pas besoin de le coder — mais tu dois comprendre les patterns de base pour naviguer dans le code de l'IA.</p>" },
      { id: "3-17", type: "code", language: "javascript", filename: "app.js", code: `// Variables
const titre = "Bonjour";
let compteur = 0;

// Fonction : bloc de code réutilisable
function direBonjour(nom) {
  return "Bonjour " + nom + " !";
}

// Événement : réagir à un clic
document.querySelector("#mon-bouton").addEventListener("click", () => {
  compteur++;
  console.log("Clics :", compteur);
});

// Fetch : appeler une API (ex: envoyer un formulaire)
async function envoyerFormulaire(email) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  console.log("Réponse :", data);
}

// Condition
if (compteur > 5) {
  console.log("Tu as cliqué plus de 5 fois !");
}` },
      { id: "3-18", type: "callout", variant: "warning", html: "Si tu rencontres une erreur JavaScript, copie-la <strong>exactement</strong> dans Claude avec le code concerné. Claude diagnostique et corrige en quelques secondes. Ne passe pas des heures à débugger seul." },

      { id: "3-19", type: "heading", level: 2, text: "Comment lire du code généré par l'IA" },
      { id: "3-20", type: "steps", steps: [
        { title: "Identifier la structure", description: "Repère les grandes sections : imports en haut, composant/fonction principale, export en bas." },
        { title: "Trouver le texte à modifier", description: "Utilise Ctrl+F pour chercher le texte exact que tu veux changer. Le code est du texte." },
        { title: "Comprendre les props", description: "Les paramètres entre accolades {title}, {children}, {onClick} sont des données passées au composant." },
        { title: "Ne pas tout comprendre", description: "Normal. L'IA a écrit ce code. Demande-lui d'expliquer les parties floues." },
      ]},

      { id: "3-21", type: "separator", style: "line" },
      { id: "3-22", type: "quiz-inline", question: "Tu veux changer la couleur d'un bouton généré par v0 en Tailwind. Le bouton a la classe 'bg-blue-500'. Quelle classe utilises-tu pour le passer en vert ?", options: [
        { id: "a", text: "color-green-500" },
        { id: "b", text: "bg-green-500" },
        { id: "c", text: "background: green" },
        { id: "d", text: "style='green'" },
      ], correctId: "b", explanation: "En Tailwind, le préfixe 'bg-' correspond à background-color. Les couleurs suivent le pattern couleur-intensité (green-500, red-600, blue-400...). Il suffit de remplacer 'bg-blue-500' par 'bg-green-500'." },

      { id: "3-23", type: "checklist", title: "Compétences acquises", items: [
        { id: "c1", text: "Je comprends la structure de base d'un fichier HTML" },
        { id: "c2", text: "Je sais lire et modifier du CSS classique et Tailwind" },
        { id: "c3", text: "Je comprends ce qu'est une fonction JavaScript et un événement" },
        { id: "c4", text: "Je sais naviguer dans du code généré par l'IA sans paniquer" },
        { id: "c5", text: "Je sais utiliser Claude pour expliquer et corriger du code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Lire et modifier du code</h3><p>Ouvre n'importe quel composant généré par v0 lors de la leçon précédente. Fais les 3 modifications suivantes <strong>manuellement</strong> (sans re-prompter v0) :</p><ol><li>Change le texte du bouton CTA</li><li>Modifie la couleur de fond du hero (cherche <code>bg-</code> dans le code Tailwind)</li><li>Change le titre h1</li></ol><p>Si tu bloques, demande à Claude d'expliquer la partie concernée du code.</p>",
    quiz: [
      { type: "mcq", question: "En Tailwind CSS, quelle classe utilise-t-on pour changer la couleur de fond d'un élément en bleu ?", options: JSON.stringify(["color-blue-500", "bg-blue-500", "background: blue", "text-blue-500"]), correctAnswer: "bg-blue-500", explanation: "En Tailwind, le préfixe 'bg-' correspond à background-color. Les couleurs suivent le pattern couleur-intensité (blue-500, red-600, green-400...). 'text-' est pour la couleur du texte." },
      { type: "true_false", question: "En HTML, la balise <a> sert à créer un lien hypertexte.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La balise <a href='url'>texte</a> est bien la balise pour créer un lien hypertexte en HTML. C'est l'une des balises les plus fondamentales du web." },
      { type: "mcq", question: "Quelle balise HTML est utilisée comme conteneur générique sans signification sémantique ?", options: JSON.stringify(["<section>", "<main>", "<div>", "<article>"]), correctAnswer: "<div>", explanation: "La balise <div> est le conteneur générique le plus utilisé en HTML. Contrairement à <section>, <main> ou <article>, elle n'a pas de signification sémantique particulière." },
      { type: "true_false", question: "En JavaScript, la fonction fetch() permet d'appeler une API pour envoyer ou récupérer des données.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "fetch() est la fonction JavaScript standard pour faire des appels réseau (API). On l'utilise pour envoyer des formulaires, récupérer des données depuis un serveur, etc." },
      { type: "mcq", question: "Vous rencontrez la situation suivante : le site que tu as créé pour un client affiche un bouton CTA bleu, mais le client veut le changer en rouge. Comment procèdes-tu le plus efficacement ?", options: JSON.stringify(["Tu demandes à v0 de régénérer toute la page avec un bouton rouge", "Tu cherches la classe Tailwind bg-blue-500 dans le code et la remplaces par bg-red-500", "Tu recodes le bouton entièrement en CSS personnalisé", "Tu dis au client que le bleu est mieux pour les conversions"]), correctAnswer: "Tu cherches la classe Tailwind bg-blue-500 dans le code et la remplaces par bg-red-500", explanation: "En Tailwind CSS, changer une couleur est aussi simple que modifier le préfixe de couleur dans la classe : bg-blue-500 devient bg-red-500. C'est une modification de quelques secondes qui ne nécessite pas de régénérer quoi que ce soit." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 3,
    title: "Next.js & React en 30 min avec l'IA",
    slug: "nextjs-react-30min-ia",
    duration: "30 min",
    description: "Comprendre les composants, pages et props de React/Next.js — l'IA fait le gros du travail, toi tu guides et tu comprends.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "Pourquoi Next.js ?" },
      { id: "4-2", type: "text", html: "<p><strong>Next.js</strong> est le framework web le plus utilisé en 2025. C'est construit sur React (la bibliothèque de composants de Meta) et créé par Vercel. Quand tu génères du code avec v0, c'est du Next.js. Quand tu déploies sur Vercel, c'est du Next.js. C'est le <strong>standard de l'industrie</strong>.</p><p>Tu n'as pas besoin de devenir expert. Tu dois juste comprendre 4 concepts : composants, pages, props et routing.</p>" },
      { id: "4-3", type: "callout", variant: "info", html: "Next.js est utilisé par Nike, TikTok, Twitch, Hulu et des milliers de startups. Si c'est assez bon pour eux, c'est largement suffisant pour tes clients." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Concept 1 : Les composants React" },
      { id: "4-6", type: "text", html: "<p>Un composant, c'est un <strong>bloc réutilisable</strong> de l'interface. Un bouton, une carte, une navbar — chacun est un composant. L'idée : tu construis ta page en assemblant des composants comme des Lego.</p>" },
      { id: "4-7", type: "code", language: "javascript", filename: "Button.tsx", code: `// Un composant React simple
// Convention : nom en PascalCase (majuscule au début)

export function Button({ text, onClick, variant = "primary" }) {
  // variant = "primary" : valeur par défaut si non spécifiée

  return (
    <button
      onClick={onClick}
      className={\`px-6 py-3 rounded-lg font-semibold \${
        variant === "primary"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
      }\`}
    >
      {text}
    </button>
  );
}

// Utilisation dans une autre page :
// <Button text="Réserver un appel" onClick={() => console.log("clic")} />
// <Button text="En savoir plus" variant="secondary" />` },
      { id: "4-8", type: "callout", variant: "tip", html: "Le JSX (le HTML dans le JavaScript) peut paraître bizarre au début. C'est normal. Dis-toi juste que c'est du HTML amélioré avec des variables entre accolades <code>{}</code>." },

      { id: "4-9", type: "separator", style: "space" },
      { id: "4-10", type: "heading", level: 2, text: "Concept 2 : La structure des fichiers Next.js" },
      { id: "4-11", type: "text", html: "<p>Dans Next.js (App Router), chaque dossier dans <code>/app</code> devient une URL. C'est aussi simple que ça.</p>" },
      { id: "4-12", type: "code", language: "text", filename: "structure-nextjs.txt", code: `mon-projet/
├── app/
│   ├── page.tsx          → la page d'accueil (/)
│   ├── layout.tsx        → le layout global (navbar, footer)
│   ├── about/
│   │   └── page.tsx      → la page /about
│   ├── blog/
│   │   ├── page.tsx      → la liste du blog (/blog)
│   │   └── [slug]/
│   │       └── page.tsx  → un article (/blog/mon-article)
│   └── api/
│       └── contact/
│           └── route.ts  → une API route (/api/contact)
├── components/
│   ├── Navbar.tsx        → composant navbar réutilisable
│   ├── Footer.tsx        → composant footer
│   └── Button.tsx        → composant bouton
├── public/
│   └── images/           → tes images statiques
└── package.json          → dépendances du projet` },

      { id: "4-13", type: "heading", level: 2, text: "Concept 3 : Une page Next.js concrète" },
      { id: "4-14", type: "code", language: "javascript", filename: "app/page.tsx", code: `// app/page.tsx — La page d'accueil

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Métadonnées SEO
export const metadata = {
  title: "Mon Agence IA — Automatisez vos process",
  description: "On crée des solutions IA sur-mesure pour les PME.",
};

// Le composant page = ce qui s'affiche sur /
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero
        title="Votre agence IA"
        subtitle="Des solutions concrètes pour automatiser votre business"
        ctaText="Réserver un appel gratuit"
      />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}` },
      { id: "4-15", type: "callout", variant: "success", html: "Tu vois ? Une page Next.js c'est juste une liste de composants assemblés. L'IA génère chaque composant, toi tu assemblées et tu guides." },

      { id: "4-16", type: "heading", level: 2, text: "Travailler avec l'IA sur un projet Next.js" },
      { id: "4-17", type: "steps", steps: [
        { title: "Créer le projet", description: "Dans le terminal : npx create-next-app@latest mon-projet --typescript --tailwind --app. L'IA peut aussi le faire pour toi dans Cursor." },
        { title: "Décrire la structure à Claude/Cursor", description: "\"Je construis un site pour [client]. Crée-moi la structure des composants : Navbar, Hero, Services, Testimonials, Contact, Footer\"" },
        { title: "Générer composant par composant", description: "\"Crée le composant Hero avec ces props : title, subtitle, ctaText, ctaLink. Design moderne, Tailwind, fond dégradé dark\"" },
        { title: "Assembler dans page.tsx", description: "Importe et assemble les composants. L'IA peut le faire en une commande dans Cursor." },
        { title: "Itérer sur les modifications", description: "\"Dans le composant Hero, change la couleur du bouton en vert et ajoute une animation fade-in sur le titre\"" },
      ]},

      { id: "4-18", type: "heading", level: 2, text: "Le prompt Cursor parfait pour créer un composant" },
      { id: "4-19", type: "code", language: "text", filename: "prompt-cursor-composant.txt", code: `Crée un composant React/Next.js pour la section "Témoignages".

Specs techniques :
- TypeScript avec des types clairs
- Tailwind CSS pour les styles
- Responsive (mobile first)
- Données passées en props (array de témoignages)

Chaque témoignage contient : name, role, company, text, avatarUrl, rating (1-5)

Design :
- Cards avec ombre légère sur fond blanc
- Avatar circulaire à gauche
- Étoiles jaunes pour le rating
- Texte du témoignage en italique
- Layout : grille 3 colonnes desktop, 1 colonne mobile

Exemple de données mock inclus pour tester.` },

      { id: "4-20", type: "separator", style: "line" },
      { id: "4-21", type: "quiz-inline", question: "Dans Next.js App Router, si tu crées le fichier app/services/page.tsx, quelle URL correspond à cette page ?", options: [
        { id: "a", text: "/app/services" },
        { id: "b", text: "/services" },
        { id: "c", text: "/page/services" },
        { id: "d", text: "/services/page" },
      ], correctId: "b", explanation: "Dans Next.js App Router, la structure des dossiers définit les URLs. Le fichier app/services/page.tsx correspond à l'URL /services. Le nom 'page.tsx' est réservé pour définir les pages, et 'app/' est le dossier racine du routing." },

      { id: "4-22", type: "checklist", title: "Compétences acquises", items: [
        { id: "c1", text: "Je comprends ce qu'est un composant React et comment il fonctionne" },
        { id: "c2", text: "Je connais la structure des fichiers d'un projet Next.js" },
        { id: "c3", text: "Je sais lire une page Next.js et comprendre ce qu'elle affiche" },
        { id: "c4", text: "Je sais demander à l'IA de créer un composant avec un prompt précis" },
        { id: "c5", text: "Je suis capable de créer un projet Next.js et d'assembler des composants" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ton premier projet Next.js</h3><p>Dans ton terminal, lance cette commande :</p><pre><code>npx create-next-app@latest mon-premier-site --typescript --tailwind --app --src-dir --import-alias '@/*'</code></pre><p>Ouvre le projet dans Cursor. Utilise le chat Cursor (Cmd/Ctrl+L) pour lui demander : <em>\"Remplace le contenu de app/page.tsx par une landing page simple pour une agence de consulting avec une Navbar, un Hero et un Footer. Utilise Tailwind CSS.\"</em></p><p>Lance le serveur avec <code>npm run dev</code> et ouvre <code>http://localhost:3000</code>.</p>",
    quiz: [
      { type: "mcq", question: "Dans Next.js App Router, quel fichier correspond à la page d'accueil (/) ?", options: JSON.stringify(["app/index.tsx", "app/page.tsx", "app/home.tsx", "pages/index.tsx"]), correctAnswer: "app/page.tsx", explanation: "Dans Next.js App Router, le fichier app/page.tsx correspond à la page d'accueil (/). Chaque dossier dans /app devient une URL, et le nom 'page.tsx' est réservé pour définir les pages." },
      { type: "true_false", question: "En React, un composant est un bloc réutilisable de l'interface, comme un bouton ou une carte.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un composant React est un bloc réutilisable de l'interface : un bouton, une carte, une navbar. On construit sa page en assemblant des composants comme des Lego." },
      { type: "mcq", question: "Si tu crées le fichier app/blog/[slug]/page.tsx, quelle URL sera accessible ?", options: JSON.stringify(["/blog/slug", "/blog/mon-article (où 'mon-article' est dynamique)", "/app/blog/page", "/blog/[slug]"]), correctAnswer: "/blog/mon-article (où 'mon-article' est dynamique)", explanation: "Les crochets [slug] dans le nom de dossier créent une route dynamique. app/blog/[slug]/page.tsx correspond à /blog/n-importe-quoi, où 'slug' est un paramètre variable." },
      { type: "true_false", question: "Next.js est utilisé par des entreprises comme Nike, TikTok et Twitch.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Next.js est le framework web le plus utilisé en 2025, employé par Nike, TikTok, Twitch, Hulu et des milliers de startups. C'est le standard de l'industrie." },
      { type: "mcq", question: "Un client te demande d'ajouter une page 'À propos' à son site Next.js existant. Quelle est la manière la plus rapide de procéder ?", options: JSON.stringify(["Créer le fichier app/a-propos/page.tsx et y assembler les composants Navbar, contenu et Footer", "Modifier le fichier app/page.tsx pour y ajouter une section À propos", "Créer un nouveau projet Next.js séparé pour la page", "Ajouter un lien vers une page Google Docs"]), correctAnswer: "Créer le fichier app/a-propos/page.tsx et y assembler les composants Navbar, contenu et Footer", explanation: "En Next.js App Router, chaque dossier dans /app devient une URL. Créer app/a-propos/page.tsx crée automatiquement la route /a-propos. Tu y assembles les composants réutilisables (Navbar, Footer) déjà dans components/." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 3,
    title: "Déployer ton site gratuitement (Vercel)",
    slug: "deployer-site-vercel-gratuit",
    duration: "20 min",
    description: "Git basics, push sur GitHub, déploiement automatique sur Vercel en 5 minutes — et comment connecter un nom de domaine personnalisé.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "De ton ordinateur au monde entier en 5 minutes" },
      { id: "5-2", type: "text", html: "<p>Vercel est la plateforme de déploiement créée par les mêmes personnes que Next.js. Résultat : déployer un site Next.js sur Vercel, c'est <strong>0 configuration</strong>. Tu connectes ton repo GitHub, tu pushs, c'est en ligne.</p><p>Plan gratuit inclus : SSL, CDN mondial, previews automatiques, 100GB de bande passante. C'est largement suffisant pour tous tes premiers projets clients.</p>" },
      { id: "5-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Ton code local", description: "Projet Next.js sur ton ordinateur" },
        { id: "n2", label: "Git commit", description: "Tu sauvegardes tes modifications" },
        { id: "n3", label: "GitHub push", description: "Tu envoies le code sur GitHub" },
        { id: "n4", label: "Vercel détecte", description: "Vercel voit le nouveau push automatiquement" },
        { id: "n5", label: "Build automatique", description: "Vercel compile et optimise le site" },
        { id: "n6", label: "Site en ligne", description: "URL publique disponible en moins de 60 secondes" },
      ]},
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Étape 1 : Git — Les 4 commandes à retenir" },
      { id: "5-6", type: "text", html: "<p>Git est un système de versioning. Tu n'as besoin que de 4 commandes pour 95% des situations :</p>" },
      { id: "5-7", type: "code", language: "text", filename: "git-essentials.sh", code: `# 1. Voir l'état de tes fichiers modifiés
git status

# 2. Ajouter tous les fichiers modifiés à la prochaine sauvegarde
git add .

# 3. Créer une sauvegarde (commit) avec un message descriptif
git commit -m "Add hero section and contact form"

# 4. Envoyer tes commits sur GitHub
git push

# ─── BONUS : commandes utiles ───

# Voir l'historique des commits
git log --oneline

# Revenir à la dernière version sauvegardée (si tu casses tout)
git checkout .

# Créer une branche pour tester sans risque
git checkout -b ma-nouvelle-feature` },
      { id: "5-8", type: "callout", variant: "tip", html: "Bonne pratique : fais un commit à chaque fois que tu termines une fonctionnalité qui marche. Message de commit = phrase courte au présent qui décrit ce qui a changé. Ex: 'Add testimonials section', 'Fix mobile navbar', 'Update CTA text'." },

      { id: "5-9", type: "separator", style: "space" },
      { id: "5-10", type: "heading", level: 2, text: "Étape 2 : Créer un repo GitHub et pousser le code" },
      { id: "5-11", type: "steps", steps: [
        { title: "Créer un repo sur GitHub", description: "Va sur github.com → New repository → Nomme-le, laisse public ou private, ne coche rien d'autre → Create repository." },
        { title: "Lier ton projet local au repo", description: "Dans ton terminal, dans le dossier du projet :\ngit init\ngit add .\ngit commit -m 'Initial commit'\ngit remote add origin https://github.com/ton-user/ton-repo.git\ngit push -u origin main" },
        { title: "Vérifier sur GitHub", description: "Actualise la page GitHub de ton repo — tu dois voir tous tes fichiers en ligne." },
      ]},
      { id: "5-12", type: "code", language: "text", filename: "premier-push.sh", code: `# Dans le dossier de ton projet Next.js :

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit — landing page client X"

# Connecter au repo GitHub (remplace avec ton URL)
git remote add origin https://github.com/TON-USERNAME/TON-REPO.git

# Pousser sur la branche main
git push -u origin main

# ✓ Ton code est maintenant sur GitHub !` },

      { id: "5-13", type: "heading", level: 2, text: "Étape 3 : Déployer sur Vercel" },
      { id: "5-14", type: "steps", steps: [
        { title: "Créer un compte Vercel", description: "Va sur vercel.com → Sign up with GitHub (recommandé — ça connecte automatiquement tes repos)." },
        { title: "Importer le projet", description: "Dashboard Vercel → Add New → Project → importe ton repo GitHub. Vercel détecte automatiquement que c'est Next.js." },
        { title: "Configurer (rien à faire)", description: "Vercel détecte le framework, configure le build command et l'output. Pour Next.js : tout est automatique." },
        { title: "Déployer", description: "Clique 'Deploy'. En 30-60 secondes, ton site est en ligne sur une URL du type mon-projet.vercel.app." },
        { title: "Déploiements automatiques", description: "Dorénavant, chaque 'git push' déclenche automatiquement un nouveau déploiement. Plus besoin de rien faire." },
      ]},
      { id: "5-15", type: "callout", variant: "success", html: "Chaque push crée aussi une <strong>preview URL</strong> unique. Tu peux envoyer ce lien à ton client pour validation avant de merger en production. Exemple : mon-projet-git-branch-name.vercel.app" },

      { id: "5-16", type: "separator", style: "space" },
      { id: "5-17", type: "heading", level: 2, text: "Étape 4 : Connecter un domaine personnalisé" },
      { id: "5-18", type: "text", html: "<p>Un domaine custom (ex: <strong>monsiteclient.fr</strong>) coûte ~10-15€/an sur OVH, Namecheap ou Google Domains. La connexion à Vercel prend 5 minutes.</p>" },
      { id: "5-19", type: "steps", steps: [
        { title: "Acheter le domaine", description: "Va sur ovh.com ou namecheap.com, achète ton domaine. Garde l'accès à la gestion DNS." },
        { title: "Ajouter le domaine dans Vercel", description: "Vercel Dashboard → ton projet → Settings → Domains → Add → tape ton domaine." },
        { title: "Configurer les DNS", description: "Vercel te donne 2 enregistrements DNS à ajouter chez ton registrar. Copy-paste exactement les valeurs. Prend 5-30 minutes pour propager." },
        { title: "SSL automatique", description: "Vercel configure automatiquement le certificat SSL (HTTPS). Ton site est sécurisé sans rien faire de plus." },
      ]},
      { id: "5-20", type: "callout", variant: "warning", html: "Conseil pour les projets clients : achète toujours le domaine <strong>avec leurs informations</strong> ou fais-leur acheter directement. Tu ne veux pas être l'intermédiaire obligatoire pour renouveler le domaine de quelqu'un d'autre." },

      { id: "5-21", type: "separator", style: "line" },
      { id: "5-22", type: "quiz-inline", question: "Tu modifies le texte d'un bouton sur ton site Vercel. Quelle séquence de commandes Git utilises-tu pour mettre à jour le site en production ?", options: [
        { id: "a", text: "git save → git upload" },
        { id: "b", text: "git add . → git commit -m 'message' → git push" },
        { id: "c", text: "git push → git commit" },
        { id: "d", text: "Aller dans Vercel et cliquer Redeploy" },
      ], correctId: "b", explanation: "Le workflow Git standard est toujours : add (préparer les fichiers) → commit (créer la sauvegarde locale avec message) → push (envoyer sur GitHub, ce qui déclenche automatiquement le redéploiement Vercel)." },

      { id: "5-23", type: "checklist", title: "Compétences acquises", items: [
        { id: "c1", text: "Je maîtrise les 4 commandes Git essentielles (status, add, commit, push)" },
        { id: "c2", text: "Je sais créer un repo GitHub et pousser un projet" },
        { id: "c3", text: "Je sais déployer un projet Next.js sur Vercel en 5 minutes" },
        { id: "c4", text: "Je comprends le workflow push → déploiement automatique" },
        { id: "c5", text: "Je sais connecter un nom de domaine personnalisé sur Vercel" },
      ]},
    ]),
    exercise: "<h3>Exercice : Site en ligne en 15 minutes</h3><p>Prends le projet Next.js créé lors de la leçon 4. Suis ces étapes :</p><ol><li>Crée un repo GitHub public nommé <code>mon-premier-site</code></li><li>Push ton code avec les commandes Git vues dans cette leçon</li><li>Connecte le repo à Vercel et déploie</li><li>Note l'URL publique de ton site</li></ol><p>Partage l'URL dans la communauté — c'est ton premier déploiement ! Félicitations.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la séquence correcte de commandes Git pour mettre à jour un site en production sur Vercel ?", options: JSON.stringify(["git push → git commit → git add", "git save → git upload", "git add . → git commit -m 'message' → git push", "git deploy → git publish"]), correctAnswer: "git add . → git commit -m 'message' → git push", explanation: "Le workflow Git standard est : add (préparer les fichiers) → commit (créer la sauvegarde locale avec message) → push (envoyer sur GitHub, ce qui déclenche automatiquement le redéploiement Vercel)." },
      { type: "true_false", question: "Vercel configure automatiquement le certificat SSL (HTTPS) sans action supplémentaire.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Vercel configure automatiquement le certificat SSL (HTTPS) pour tous les sites déployés, y compris les domaines personnalisés. Le site est sécurisé sans rien faire de plus." },
      { type: "mcq", question: "Que se passe-t-il automatiquement après chaque 'git push' quand Vercel est connecté ?", options: JSON.stringify(["Rien, il faut redéployer manuellement", "Vercel détecte le push et redéploie automatiquement le site", "GitHub envoie un email de confirmation", "Le site est supprimé et recréé"]), correctAnswer: "Vercel détecte le push et redéploie automatiquement le site", explanation: "Chaque 'git push' déclenche automatiquement un nouveau déploiement sur Vercel. Le site est mis à jour en 30-60 secondes, et une preview URL unique est créée pour chaque push." },
      { type: "true_false", question: "Il est recommandé d'acheter le nom de domaine d'un client avec ses propres informations, pas les tiennes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Il faut toujours acheter le domaine avec les informations du client ou lui faire acheter directement. Tu ne veux pas être l'intermédiaire obligatoire pour renouveler le domaine de quelqu'un d'autre." },
      { type: "mcq", question: "Un client te signale une faute de frappe sur son site en production. Tu corriges le texte dans Cursor. Quelles commandes exécutes-tu pour que la correction soit visible en ligne ?", options: JSON.stringify(["Tu redéploies manuellement sur Vercel depuis le dashboard", "git add . puis git commit -m 'fix typo' puis git push — Vercel redéploie automatiquement", "Tu envoies le fichier corrigé par email à Vercel", "Tu supprimes le site et le recrées depuis zéro"]), correctAnswer: "git add . puis git commit -m 'fix typo' puis git push — Vercel redéploie automatiquement", explanation: "Le workflow est simple : add, commit, push. Chaque git push déclenche automatiquement un nouveau déploiement sur Vercel. Le site est mis à jour en 30-60 secondes." },
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 3,
    title: "Ton premier site client : portfolio ou landing page",
    slug: "premier-site-client-portfolio-landing",
    duration: "25 min",
    description: "Projet complet de bout en bout : créer un site professionnel pour un client fictif, le déployer et le présenter comme un pro.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Le projet final du module" },
      { id: "6-2", type: "text", html: "<p>Tu as maintenant tous les outils. Il est temps de les assembler sur un <strong>projet complet</strong>. Dans cette leçon, on crée un site professionnel de A à Z pour un client fictif — comme si c'était un vrai projet payant.</p><p>Objectif : un site déployé en ligne, avec un domaine, du contenu réel, et une présentation professionnelle que tu pourrais montrer à de vrais clients.</p>" },
      { id: "6-3", type: "callout", variant: "tip", html: "Ce projet devient ton <strong>premier élément de portfolio</strong>. Choisis un secteur qui t'intéresse — coach, consultant, artisan, restaurant — pour que le résultat soit cohérent et convaincant." },
      { id: "6-4", type: "separator", style: "dots" },

      { id: "6-5", type: "heading", level: 2, text: "Le brief client fictif" },
      { id: "6-6", type: "text", html: "<p>Voici le client fictif qu'on va utiliser pour ce projet. Tu peux remplacer par ton propre choix :</p>" },
      { id: "6-7", type: "code", language: "text", filename: "brief-client.txt", code: `CLIENT FICTIF : Sophie Martin — Coach Business

Qui : Coach business freelance, 5 ans d'expérience
Cible : Entrepreneurs et freelances qui veulent scaler leur activité
Problème résolu : Sortir de la stagnation et passer à 5k€/mois minimum
Offre principale : Programme d'accompagnement 3 mois à 2 500€
CTA principal : Réserver un appel découverte gratuit de 30 minutes

Éléments de crédibilité :
- 47 clients accompagnés
- 94% atteignent leur objectif en 3 mois
- Ancienne directrice commerciale (10 ans)

Ton : Direct, inspirant, sans bullshit

Pages nécessaires :
1. Landing page principale (accueil)
2. Page "À propos"
3. Page "Témoignages"
4. Page "Réserver un appel" (Calendly embed)` },

      { id: "6-8", type: "separator", style: "space" },
      { id: "6-9", type: "heading", level: 2, text: "Étape 1 : Générer le contenu avec Claude" },
      { id: "6-10", type: "code", language: "text", filename: "prompt-contenu-complet.txt", code: `Tu es copywriter expert. Génère le contenu complet pour le site de Sophie Martin, coach business.

BRIEF :
- Public : Entrepreneurs et freelances bloqués à moins de 3k€/mois
- Problème : Ils travaillent beaucoup mais ne progressent pas, manquent de structure et de clarté
- Solution : Programme d'accompagnement 3 mois pour structurer et scaler leur activité
- Offre : 2 500€ pour 3 mois (4 sessions/mois + accès communauté + outils)
- Preuve : 47 clients, 94% atteignent leurs objectifs, ex-directrice commerciale

GÉNÈRE :

1. HERO SECTION
- Headline choc (10 mots max, s'adresse directement à la douleur)
- Sous-titre (2 lignes, bénéfice + cible)
- CTA bouton

2. SECTION PROBLÈME (3 cartes de douleur)
- "Tu reconnais cette situation ?"

3. SECTION SOLUTION (3 bénéfices du programme)

4. SECTION COMMENT ÇA MARCHE (4 étapes du programme)

5. SECTION RÉSULTATS (3 stats percutantes)

6. SECTION TÉMOIGNAGES (3 témoignages fictifs mais réalistes)

7. SECTION FAQ (5 questions fréquentes avec réponses)

8. CTA FINAL

Ton : direct, sans jargon, inspire confiance et urgence.` },

      { id: "6-11", type: "heading", level: 2, text: "Étape 2 : Construire le site avec v0 + Cursor" },
      { id: "6-12", type: "steps", steps: [
        { title: "Générer le design initial sur v0", description: "Utilise le prompt v0 de la leçon 2 avec le contenu généré par Claude. Choisis une palette de couleurs premium (ex: noir + or, marine + blanc, vert foncé + beige)." },
        { title: "Exporter et initialiser Next.js", description: "Copie le code v0 dans un nouveau projet Next.js créé avec create-next-app. Structure les composants proprement : un fichier par section." },
        { title: "Finaliser avec Cursor", description: "Ouvre le projet dans Cursor. Demande-lui d'ajouter : responsive mobile, animations au scroll, formulaire de contact, page À propos et page Témoignages." },
        { title: "Ajouter les images", description: "Utilise des images libres de droits sur unsplash.com ou genère des images avec Midjourney/DALL-E. Optimise-les avec squoosh.app avant de les ajouter." },
      ]},

      { id: "6-13", type: "callout", variant: "info", html: "Pour les photos de profil fictives, utilise <strong>thispersondoesnotexist.com</strong> — il génère des portraits photo-réalistes de personnes inexistantes. Parfait pour les témoignages fictifs." },

      { id: "6-14", type: "heading", level: 2, text: "Le prompt Cursor pour finaliser le projet" },
      { id: "6-15", type: "code", language: "text", filename: "prompt-cursor-finalisation.txt", code: `Mon projet Next.js contient une landing page pour une coach business.
Voici ce qu'il me faut pour le finaliser :

1. RESPONSIVE MOBILE
Vérifie que toutes les sections s'affichent bien sur mobile (375px).
Corrige les problèmes de layout sur la section héro et les cards.

2. ANIMATIONS
Ajoute des animations fade-up au scroll sur chaque section.
Utilise Intersection Observer (pas de librairie externe).

3. PAGE À PROPOS
Crée app/about/page.tsx avec :
- Photo + biographie de Sophie (2 paragraphes)
- Timeline de son parcours (2015-2025)
- Ses valeurs (3 items avec icônes)
- CTA vers la réservation

4. FORMULAIRE DE CONTACT
Dans la section Contact, ajoute un formulaire avec :
- Nom, email, message
- Validation côté client
- Message de succès après envoi
- API route dans app/api/contact/route.ts (log en console pour l'instant)

5. SEO
Dans chaque page, ajoute des métadonnées (title, description)
optimisées pour le SEO local (coach business France).

Garde le design cohérent avec le reste du site.` },

      { id: "6-16", type: "separator", style: "space" },
      { id: "6-17", type: "heading", level: 2, text: "Étape 3 : Déployer et présenter" },
      { id: "6-18", type: "steps", steps: [
        { title: "Push sur GitHub et déployer sur Vercel", description: "git add . && git commit -m 'Complete site for Sophie Martin coaching' && git push. Le site est en ligne en 60 secondes." },
        { title: "Tester le site live", description: "Teste sur mobile (utilise Chrome DevTools → Responsive). Vérifie tous les liens, le formulaire, les images. Corrige les bugs avec Cursor." },
        { title: "Rédiger la présentation client", description: "Prépare un email de livraison avec : URL du site, captures mobile + desktop, liste des fonctionnalités, instructions pour modifier le contenu." },
        { title: "Calculer ton tarif", description: "Un site comme celui-ci se facture 800€ à 2 500€ selon le client. Temps réel avec l'IA : 4-8 heures. Taux horaire : 100-300€/h." },
      ]},

      { id: "6-19", type: "callout", variant: "success", html: "Tu viens de créer un site professionnel que des agences web factureraient 1 500€ à 3 000€. Avec l'IA, tu l'as fait en une journée. <strong>C'est ton avantage concurrentiel.</strong>" },

      { id: "6-20", type: "heading", level: 2, text: "Présenter le site à un client : le template d'email" },
      { id: "6-21", type: "code", language: "text", filename: "email-livraison-client.txt", code: `Objet : [Prénom], votre site est en ligne 🎉

Bonjour [Prénom],

Excellente nouvelle — votre site est maintenant en ligne.

🔗 URL : https://votre-domaine.fr

CE QUI A ÉTÉ RÉALISÉ :
✓ Landing page complète (7 sections)
✓ Page À propos
✓ Page Témoignages
✓ Formulaire de contact fonctionnel
✓ Design 100% responsive (mobile + tablette + desktop)
✓ Optimisé pour le référencement (SEO)
✓ Certificat SSL (HTTPS) inclus

PROCHAINES ÉTAPES RECOMMANDÉES :
→ Google Analytics : pour suivre vos visiteurs
→ Google Search Console : pour le référencement
→ Calendly embed : pour les réservations automatisées

Pour toute modification, je reste disponible.
Mon tarif maintenance : X€/mois pour 1h de modifications incluses.

Belle continuation,
[Ton nom]` },

      { id: "6-22", type: "separator", style: "line" },
      { id: "6-23", type: "quiz-inline", question: "Un client te demande une landing page + page À propos + formulaire. Tu estimes 6 heures de travail avec l'IA. Quel est le tarif minimum raisonnable à facturer ?", options: [
        { id: "a", text: "150€ (25€/h)" },
        { id: "b", text: "600€ (100€/h)" },
        { id: "c", text: "1 200€ (200€/h)" },
        { id: "d", text: "Les deux dernières réponses sont valides selon ton positionnement" },
      ], correctId: "d", explanation: "100€/h (600€) est le minimum acceptable pour un freelance tech en France. 200€/h (1 200€) est tout à fait justifiable si tu te positionnes comme consultant IA spécialisé. Ce qui compte : la valeur créée pour le client, pas ton temps passé. Un site qui génère des leads vaut bien plus que 600€." },

      { id: "6-24", type: "checklist", title: "Ton premier site client — Récapitulatif du module 3", items: [
        { id: "c1", text: "J'ai créé un site complet avec v0 + Claude + Cursor" },
        { id: "c2", text: "J'ai structuré mon projet en composants Next.js propres" },
        { id: "c3", text: "J'ai déployé le site sur Vercel avec déploiement automatique" },
        { id: "c4", text: "Je sais connecter un domaine personnalisé" },
        { id: "c5", text: "J'ai un premier projet concret à montrer dans mon portfolio" },
        { id: "c6", text: "Je suis capable de livrer un site professionnel en moins d'une journée" },
        { id: "c7", text: "Je connais la valeur marchande de mes compétences (600€-2 500€/site)" },
      ]},
    ]),
    exercise: "<h3>Projet final : Livre ton premier site</h3><p>Crée le site complet de Sophie Martin (ou ton propre client fictif) en suivant toutes les étapes de cette leçon :</p><ol><li>Contenu généré avec Claude (30 min)</li><li>Design créé avec v0 (30 min)</li><li>Finalisation avec Cursor — responsive + animations + pages secondaires (2h)</li><li>Déploiement sur Vercel avec domaine custom si possible (20 min)</li></ol><p><strong>Livrable attendu :</strong> Un lien vers ton site en ligne, partagé dans la communauté avec une capture mobile + desktop. Ce site sera ton premier élément de portfolio — soigne-le.</p>",
    quiz: [
      { type: "mcq", question: "Combien peut-on facturer un site professionnel créé avec l'IA en une journée ?", options: JSON.stringify(["50-100€", "200-400€", "800-2 500€", "10 000-20 000€"]), correctAnswer: "800-2 500€", explanation: "Un site professionnel se facture entre 800€ et 2 500€ selon le positionnement. Avec l'IA, le temps réel est de 4-8 heures, soit un taux horaire de 100-300€/h." },
      { type: "true_false", question: "Le projet final du Module 3 devient le premier élément de portfolio de l'élève.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le site client fictif créé dans cette leçon est explicitement conçu pour être le premier élément de portfolio — il doit être soigné et convaincant pour être montré à de vrais clients potentiels." },
      { type: "mcq", question: "Quel est le bon ordre des étapes pour créer un site client complet ?", options: JSON.stringify(["Design → Code → Contenu → Déploiement", "Contenu (Claude) → Design (v0) → Finalisation (Cursor) → Déploiement (Vercel)", "Déploiement → Design → Contenu → Test", "Code → Test → Contenu → Design"]), correctAnswer: "Contenu (Claude) → Design (v0) → Finalisation (Cursor) → Déploiement (Vercel)", explanation: "Le workflow complet est : 1) Contenu généré avec Claude (30 min), 2) Design créé avec v0 (30 min), 3) Finalisation avec Cursor (responsive, animations, pages secondaires — 2h), 4) Déploiement sur Vercel (20 min)." },
      { type: "true_false", question: "Il est recommandé d'inclure une proposition de maintenance mensuelle dans l'email de livraison client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'email de livraison mentionne un tarif de maintenance mensuel (X€/mois pour 1h de modifications incluses). C'est le revenu récurrent qui construit la rentabilité de l'agence." },
      { type: "mcq", question: "Un prospect te demande un devis pour un site vitrine. Tu estimes 6h de travail. Il te dit que son neveu peut le faire pour 200€. Comment justifies-tu ton prix de 1 500€ ?", options: JSON.stringify(["Tu baisses ton prix pour t'aligner sur le neveu", "Tu expliques que la valeur n'est pas dans les heures mais dans le résultat : design pro, SEO, responsive, déploiement, et surtout la crédibilité que le site apporte à son business", "Tu refuses le projet car le client n'a pas le budget", "Tu proposes de faire le site gratuitement pour ton portfolio"]), correctAnswer: "Tu expliques que la valeur n'est pas dans les heures mais dans le résultat : design pro, SEO, responsive, déploiement, et surtout la crédibilité que le site apporte à son business", explanation: "Le prix se justifie par la valeur créée pour le client, pas par le temps passé. Un site professionnel qui convertit des visiteurs en clients a un ROI mesurable. Le taux horaire minimum acceptable pour un freelance tech est de 100€/h." },
    ],
  },
];
