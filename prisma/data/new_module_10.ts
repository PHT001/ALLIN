// ═══════════════════════════════════════════════════
// MODULE 10 — Ton offre & tes prix
// 6 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_10_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 8,
    title: "De 'je sais faire' à 'je vends' : le mindset shift",
    slug: "mindset-shift-je-sais-faire-je-vends",
    duration: "20 min",
    description: "Dépasser le syndrome de l'imposteur, comprendre la valeur perçue vs la valeur réelle, et faire le saut mental de technicien à vendeur.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Le problème que tout le monde a au départ" },
      { id: "1-2", type: "text", html: "<p>Tu sais installer un chatbot. Tu sais créer une automatisation avec n8n. Tu sais déployer un agent IA. Mais quand vient le moment de parler prix à un client… tu baisses les yeux, tu te dis que c'est pas encore assez, que t'as besoin d'apprendre encore un peu.</p><p>Ce blocage a un nom : <strong>le syndrome de l'imposteur</strong>. Et il coûte des milliers d'euros à ceux qui ne le traitent pas.</p>" },
      { id: "1-3", type: "callout", variant: "warning", html: "<strong>Vérité difficile à entendre :</strong> ton client ne s'en fout pas de tes compétences techniques. Il s'en fout de savoir si tu utilises Claude ou GPT-4. Il s'en fout du nombre d'heures que tu passes. Il veut un résultat. Et si tu lui livres ce résultat, il te paiera — même si tu as appris à le faire la semaine dernière." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "Valeur perçue vs valeur réelle" },
      { id: "1-6", type: "comparison", headers: ["Valeur réelle (ce que TU vois)", "Valeur perçue (ce que le CLIENT voit)"], rows: [
        { cells: ["2h de travail pour installer un chatbot", "Un outil qui répond aux clients 24h/24 sans embaucher quelqu'un"] },
        { cells: ["Un workflow n8n de 15 étapes", "30 heures de travail manuel économisées chaque mois"] },
        { cells: ["Un site fait avec Framer + IA en 3 jours", "Une vitrine professionnelle qui génère des leads"] },
        { cells: ["Un script Python de 200 lignes", "Zéro erreur de saisie, zéro stress, zéro retard"] },
      ]},
      { id: "1-7", type: "text", html: "<p>Le client n'achète <strong>jamais</strong> ton temps. Il achète la transformation. Il achète ce qu'il gagne (argent, temps, tranquillité) grâce à ce que tu lui livres. C'est la base de tout le pricing que tu vas apprendre dans ce module.</p>" },

      { id: "1-8", type: "heading", level: 2, text: "Tu n'as pas besoin d'être expert pour vendre" },
      { id: "1-9", type: "steps", steps: [
        { title: "Étape 0 : tu apprends", description: "Tu suis cette formation, tu fais les exercices, tu pratiques sur des projets personnels ou de test." },
        { title: "Étape 1 : tu livres", description: "Tu prends un premier client — même gratuitement ou à prix réduit — pour avoir un cas concret." },
        { title: "Étape 2 : tu prouves", description: "Ce projet devient ton portfolio. Tu as un résultat réel à montrer. Tu sors du vide." },
        { title: "Étape 3 : tu vends", description: "Tu utilises ce cas client pour convaincre les suivants. Le prix monte à chaque deal." },
      ]},
      { id: "1-10", type: "callout", variant: "tip", html: "<strong>Le secret :</strong> le premier client paye pour ton résultat, pas pour ton expérience. Même un débutant peut créer un chatbot qui économise 2 heures par jour à un commerce. Ces 2 heures valent de l'argent réel." },

      { id: "1-11", type: "separator", style: "line" },
      { id: "1-12", type: "heading", level: 2, text: "Le reframe mental indispensable" },
      { id: "1-13", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Mindset technicien", description: "Je vends mon temps et mes compétences. Je facture à l'heure. Je me compare aux autres." },
        { id: "n2", label: "Mindset consultant", description: "Je vends un résultat. Je facture au projet. Je me compare à la valeur créée." },
        { id: "n3", label: "Mindset entrepreneur", description: "Je vends une transformation. Je facture à l'impact. Je suis la solution, pas un coût." },
      ]},
      { id: "1-14", type: "text", html: "<p>La plupart des freelances restent bloqués au niveau 1. Ceux qui passent au niveau 2 et 3 multiplient leurs revenus par 3 à 10 — sans travailler plus. La seule différence, c'est comment ils se positionnent et comment ils parlent de leur travail.</p>" },
      { id: "1-15", type: "callout", variant: "info", html: "Un consultant qui facture 300€/h n'est pas 10x meilleur qu'un freelance à 30€/h. Il a juste appris à vendre différemment." },

      { id: "1-16", type: "separator", style: "dots" },
      { id: "1-17", type: "quiz-inline", question: "Pourquoi le syndrome de l'imposteur est dangereux pour ton business ?", options: [
        { id: "a", text: "Parce que tu risques de décevoir tes clients" },
        { id: "b", text: "Parce qu'il te fait sous-vendre ou ne pas vendre du tout, alors que tu as de la valeur à offrir" },
        { id: "c", text: "Parce que les clients vont voir que tu n'es pas expert" },
      ], correctId: "b", explanation: "Le syndrome de l'imposteur te fait croire que tu n'es pas légitime. Mais le client juge sur le résultat, pas sur ton sentiment d'expertise. Attendre d'être 'prêt' est la meilleure façon de ne jamais démarrer." },

      { id: "1-18", type: "checklist", title: "Avant de passer à la suite", items: [
        { id: "c1", text: "J'ai compris la différence entre valeur réelle et valeur perçue" },
        { id: "c2", text: "Je sais que mon client achète un résultat, pas mon temps" },
        { id: "c3", text: "J'accepte que je n'ai pas besoin d'être expert pour prendre mon premier client" },
        { id: "c4", text: "J'ai identifié mon niveau de mindset actuel (technicien / consultant / entrepreneur)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Reframe ta valeur</h3><p>Prends un service que tu sais faire (chatbot, automatisation, site web). Écris deux descriptions :</p><ul><li><strong>Version technicien :</strong> décris ce que tu fais techniquement (outils, heures, étapes)</li><li><strong>Version entrepreneur :</strong> décris le résultat pour le client (temps gagné, argent généré, problème résolu)</li></ul><p>La version entrepreneur, c'est celle que tu utiliseras pour vendre. Garde-la — on va s'en servir dans les leçons suivantes.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence clé entre le mindset technicien et le mindset entrepreneur ?", options: JSON.stringify(["Le technicien gagne plus que l'entrepreneur", "Le technicien vend son temps, l'entrepreneur vend une transformation", "L'entrepreneur travaille plus d'heures", "Le technicien a plus de clients"]), correctAnswer: "Le technicien vend son temps, l'entrepreneur vend une transformation", explanation: "Le technicien facture à l'heure et se compare aux autres. L'entrepreneur facture à l'impact et se positionne comme une solution. C'est cette différence de mindset qui multiplie les revenus par 3 à 10." },
      { type: "true_false", question: "Le client achète principalement tes compétences techniques et le nombre d'heures que tu passes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le client n'achète jamais ton temps. Il achète la transformation : le temps gagné, l'argent généré, le problème résolu. Il se fiche de savoir si tu utilises Claude ou GPT-4 tant que le résultat est là." },
      { type: "mcq", question: "Que coûte le syndrome de l'imposteur aux freelances IA ?", options: JSON.stringify(["Des problèmes de qualité dans les livrables", "Des milliers d'euros car il fait sous-vendre ou ne pas vendre du tout", "Une perte de compétences techniques", "Des conflits avec les clients"]), correctAnswer: "Des milliers d'euros car il fait sous-vendre ou ne pas vendre du tout", explanation: "Le syndrome de l'imposteur te fait croire que tu n'es pas légitime, ce qui te pousse à sous-facturer ou à ne pas oser prendre de clients. C'est un coût d'opportunité majeur." },
      { type: "true_false", question: "Tu dois être expert reconnu avec des années d'expérience avant de prendre ton premier client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le premier client paye pour le résultat, pas pour ton expérience. Un débutant peut créer un chatbot qui économise 2 heures par jour à un commerce. Ces 2 heures ont une valeur réelle peu importe depuis combien de temps tu pratiques." },
      { type: "mcq", question: "Un prospect vous demande combien coûte un chatbot. Vous lui répondez '1 500€'. Il dit 'c'est cher'. Comment rattrapez-vous la situation ?", options: JSON.stringify(["Vous baissez immédiatement votre prix à 800€", "Vous expliquez que le chatbot lui économisera 2h/jour de SAV, soit 700€/mois, et que l'investissement est remboursé en 2 mois", "Vous lui dites que c'est le prix du marché et qu'il n'a pas le choix", "Vous lui proposez de faire le chatbot gratuitement pour avoir un premier client"]), correctAnswer: "Vous expliquez que le chatbot lui économisera 2h/jour de SAV, soit 700€/mois, et que l'investissement est remboursé en 2 mois", explanation: "L'erreur était de donner le prix avant la valeur. En montrant le ROI (700€/mois d'économie, remboursé en 2 mois), le prix de 1 500€ devient évident. Le client n'achète pas un chatbot — il achète les 8 400€ d'économies annuelles." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 8,
    title: "Les 5 services IA les plus rentables à vendre",
    slug: "5-services-ia-les-plus-rentables",
    duration: "25 min",
    description: "Découvrir les 5 services IA que les agences vendent aujourd'hui, leurs fourchettes de prix, leur complexité et comment se positionner sur chacun.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Qu'est-ce qu'on vend exactement ?" },
      { id: "2-2", type: "text", html: "<p>L'IA c'est large. Mais en pratique, quand tu parles à un chef d'entreprise, il y a <strong>5 types de missions</strong> qui reviennent tout le temps — et qui correspondent à des budgets précis. Voici la carte du marché.</p>" },
      { id: "2-3", type: "callout", variant: "info", html: "Ces fourchettes sont basées sur des missions réelles vendues par des agences IA en France et en Europe en 2024-2025. Elles varient selon le client (PME vs grand compte) et ta réputation." },

      { id: "2-4", type: "separator", style: "dots" },
      { id: "2-5", type: "heading", level: 2, text: "Service #1 — Chatbots & assistants IA" },
      { id: "2-6", type: "comparison", headers: ["Niveau", "Ce que tu livres", "Prix marché", "Délai"], rows: [
        { cells: ["Starter", "Chatbot FAQ simple (Voiceflow ou Typebot), 20-30 questions, intégré sur un site", "500€ – 1 500€", "3-5 jours"] },
        { cells: ["Standard", "Chatbot avec base de connaissances (RAG), connecté au CRM ou à un outil métier", "1 500€ – 3 500€", "1-2 semaines"] },
        { cells: ["Premium", "Assistant IA multi-canal (site + WhatsApp + mail), entraîné sur des données custom, analytics", "3 500€ – 5 000€+", "2-4 semaines"] },
      ]},
      { id: "2-7", type: "text", html: "<p><strong>Pour qui ?</strong> E-commerces, cabinets médicaux, immobilier, hôtellerie, services à la clientèle. Tout business qui reçoit les mêmes questions en boucle.</p><p><strong>Argument de vente :</strong> 'Votre chatbot répond à vos clients à 3h du matin, en moins de 5 secondes, avec les bonnes informations — sans que vous leviez le petit doigt.'</p>" },

      { id: "2-8", type: "separator", style: "line" },
      { id: "2-9", type: "heading", level: 2, text: "Service #2 — Automatisations & workflows" },
      { id: "2-10", type: "comparison", headers: ["Niveau", "Ce que tu livres", "Prix marché", "Délai"], rows: [
        { cells: ["Starter", "Workflow simple (ex: devis auto envoyé par mail quand formulaire rempli)", "300€ – 800€", "1-2 jours"] },
        { cells: ["Standard", "Automatisation multi-étapes (CRM + facturation + notification Slack)", "800€ – 2 000€", "3-7 jours"] },
        { cells: ["Premium", "Système complet (onboarding client automatisé, reporting auto, alertes IA)", "2 000€ – 5 000€", "2-3 semaines"] },
      ]},
      { id: "2-11", type: "text", html: "<p><strong>Pour qui ?</strong> Agences, cabinets, PME avec des process répétitifs. Si quelqu'un fait la même chose à la main plus de 3 fois par semaine, c'est une automatisation potentielle.</p><p><strong>Outils :</strong> n8n, Make, Zapier, et du code Python pour les cas avancés.</p>" },

      { id: "2-12", type: "separator", style: "line" },
      { id: "2-13", type: "heading", level: 2, text: "Service #3 — Sites web avec IA intégrée" },
      { id: "2-14", type: "comparison", headers: ["Niveau", "Ce que tu livres", "Prix marché", "Délai"], rows: [
        { cells: ["Starter", "Landing page ou site vitrine (Framer / Next.js) sans IA embarquée", "1 000€ – 2 000€", "3-5 jours"] },
        { cells: ["Standard", "Site avec chatbot intégré, formulaires intelligents, SEO IA-assisté", "2 000€ – 4 000€", "1-2 semaines"] },
        { cells: ["Premium", "Site + espace membre + agent IA + CRM connecté + analytics", "4 000€ – 8 000€", "3-6 semaines"] },
      ]},
      { id: "2-15", type: "text", html: "<p><strong>Avantage concurrentiel :</strong> tu livres en 5 jours ce qu'une agence web classique mettrait 6 semaines à faire. Et tu intègres l'IA nativement, ce qu'une agence classique ne sait pas faire.</p>" },

      { id: "2-16", type: "separator", style: "line" },
      { id: "2-17", type: "heading", level: 2, text: "Service #4 — Agents IA & systèmes autonomes" },
      { id: "2-18", type: "text", html: "<p>C'est le service le plus cher et le plus rare. Un agent IA ne répond pas juste à des questions — il <strong>prend des décisions et agit</strong> : cherche des infos sur le web, envoie des mails, met à jour une base de données, planifie des tâches.</p>" },
      { id: "2-19", type: "comparison", headers: ["Use case", "Description", "Prix marché"], rows: [
        { cells: ["Agent SDR (Sales)", "Cherche des prospects sur LinkedIn, envoie des messages personnalisés, relance automatiquement", "3 000€ – 6 000€"] },
        { cells: ["Agent de veille", "Surveille la concurrence, les news du secteur, produit un rapport hebdo automatique", "2 000€ – 4 000€"] },
        { cells: ["Agent support avancé", "Gère les tickets, escalade les cas complexes, met à jour le CRM, notifie les équipes", "4 000€ – 8 000€"] },
        { cells: ["Agent comptable", "Extrait les données des factures, les catégorise, produit des exports pour le comptable", "3 000€ – 10 000€"] },
      ]},

      { id: "2-20", type: "separator", style: "line" },
      { id: "2-21", type: "heading", level: 2, text: "Service #5 — Consulting & formation IA" },
      { id: "2-22", type: "text", html: "<p>Tu n'as pas toujours besoin de coder ou de livrer quelque chose. Les entreprises paient aussi pour <strong>être guidées</strong> : quels outils adopter, comment former leurs équipes, quel budget allouer.</p>" },
      { id: "2-23", type: "comparison", headers: ["Format", "Ce que tu fais", "Prix marché"], rows: [
        { cells: ["Audit IA", "Analyser les process de l'entreprise, identifier les gains IA possibles, livrer un rapport", "500€ – 2 000€"] },
        { cells: ["Accompagnement mensuel", "1 à 2 calls/mois + implémentation guidée + support Slack", "500€ – 1 500€/mois"] },
        { cells: ["Formation équipe", "Atelier de 1/2 journée ou journée complète pour former des collaborateurs", "150€ – 300€/heure"] },
        { cells: ["Roadmap IA", "Plan stratégique 12 mois d'intégration IA, priorisé par ROI", "1 500€ – 5 000€"] },
      ]},
      { id: "2-24", type: "callout", variant: "success", html: "<strong>Combo gagnant :</strong> Audit IA (1 500€) → Implémentation (3 000€) → Accompagnement mensuel (800€/mois). Un seul client peut valoir 10 000€+ sur 6 mois." },

      { id: "2-25", type: "quiz-inline", question: "Quel service IA a le meilleur rapport effort/prix pour débuter ?", options: [
        { id: "a", text: "Les agents IA autonomes, parce que c'est le plus cher" },
        { id: "b", text: "Les chatbots FAQ simples, parce que c'est rapide à livrer et il y a énormément de clients potentiels" },
        { id: "c", text: "Les sites web, parce que tout le monde en a besoin" },
      ], correctId: "b", explanation: "Un chatbot FAQ simple (500-1500€) peut se livrer en 3 jours. Avec 2 clients par semaine, c'est 4 000€/mois sans se tuer au travail. C'est le meilleur point de départ avant de monter en gamme." },

      { id: "2-26", type: "checklist", title: "Ce que tu dois retenir", items: [
        { id: "c1", text: "Je connais les 5 services IA et leurs fourchettes de prix réelles" },
        { id: "c2", text: "J'ai identifié 1 ou 2 services sur lesquels je veux me concentrer en premier" },
        { id: "c3", text: "Je comprends l'argument de vente derrière chaque service (pas technique, résultat)" },
        { id: "c4", text: "Je sais qu'un seul client peut valoir plusieurs milliers d'euros sur la durée" },
      ]},
    ]),
    exercise: "<h3>Exercice : Choisis ton service principal</h3><p>Parmi les 5 services, choisis celui qui correspond le mieux à tes compétences actuelles ET au marché autour de toi. Écris :</p><ol><li>Le service que tu veux vendre en premier</li><li>3 types de clients qui en ont besoin (secteurs, tailles d'entreprise)</li><li>L'argument de vente en 2 phrases (résultat, pas technique)</li></ol><p>Ce sera la base de ton offre dans les leçons suivantes.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le prix marché d'un chatbot Standard avec base de connaissances RAG et CRM intégré ?", options: JSON.stringify(["200€ – 500€", "500€ – 1 500€", "1 500€ – 3 500€", "10 000€ – 20 000€"]), correctAnswer: "1 500€ – 3 500€", explanation: "Un chatbot Standard avec base de connaissances (RAG) et connexion CRM se facture entre 1 500€ et 3 500€ sur le marché français, avec un délai de 1 à 2 semaines." },
      { type: "true_false", question: "Le combo Audit IA + Implémentation + Accompagnement mensuel peut valoir plus de 10 000€ sur 6 mois avec un seul client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Audit IA (1 500€) + Implémentation (3 000€) + Accompagnement mensuel (800€/mois x 6) = 10 300€. Un seul client bien accompagné peut générer un revenu significatif sur la durée." },
      { type: "mcq", question: "Quel service IA a le meilleur rapport effort/prix pour un débutant ?", options: JSON.stringify(["Les agents IA autonomes, car c'est le plus cher", "Les chatbots FAQ simples, car c'est rapide à livrer avec beaucoup de clients potentiels", "Le consulting stratégique, car pas besoin de coder", "Les sites web Premium à 8 000€"]), correctAnswer: "Les chatbots FAQ simples, car c'est rapide à livrer avec beaucoup de clients potentiels", explanation: "Un chatbot FAQ simple (500-1 500€) se livre en 3-5 jours. Avec 2 clients par semaine, c'est 4 000€/mois. C'est le meilleur point de départ avant de monter en gamme." },
      { type: "true_false", question: "Un agent IA SDR (Sales) qui prospecte automatiquement sur LinkedIn peut se facturer entre 3 000€ et 6 000€.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les agents IA sont le service le plus rare et le plus cher. Un agent SDR qui cherche des prospects, envoie des messages personnalisés et relance automatiquement se facture entre 3 000€ et 6 000€." },
      { type: "mcq", question: "Vous débutez et vous hésitez entre vendre des agents IA autonomes à 5 000€ ou des chatbots FAQ simples à 1 000€. Vous n'avez encore aucun client. Quel choix est le plus stratégique pour démarrer ?", options: JSON.stringify(["Les agents IA à 5 000€ car c'est plus rentable par projet", "Les chatbots FAQ simples car ils se livrent en 3 jours, génèrent des avis rapides et permettent de monter en gamme ensuite", "Les deux en même temps pour maximiser les chances", "Aucun des deux — il faut d'abord faire 6 mois de formation supplémentaire"]), correctAnswer: "Les chatbots FAQ simples car ils se livrent en 3 jours, génèrent des avis rapides et permettent de monter en gamme ensuite", explanation: "Pour un débutant, les chatbots FAQ simples ont le meilleur rapport effort/prix : livraison rapide (3-5 jours), beaucoup de clients potentiels, et chaque projet génère un avis et de l'expérience. Avec 2 clients par semaine, c'est 4 000€/mois. Les agents IA viendront après." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 8,
    title: "Construire ton offre irrésistible",
    slug: "construire-ton-offre-irresistible",
    duration: "25 min",
    description: "Apprendre le framework Offre = Résultat + Garantie + Urgence, structurer ses services en tiers Starter/Pro/Premium, et packager ce qui était flou en quelque chose qu'on a envie d'acheter.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Pourquoi 'je fais des chatbots' ne se vend pas" },
      { id: "3-2", type: "text", html: "<p>Quand tu dis 'je fais des chatbots', le client entend : <em>encore un prestataire technique que je vais devoir gérer</em>. Il ne comprend pas ce qu'il achète, il ne sait pas ce que ça va lui coûter, et il ne sait pas si ça va vraiment marcher.</p><p>Une offre irrésistible, c'est l'inverse : le client comprend <strong>exactement</strong> ce qu'il obtient, en combien de temps, pour quel prix — et il se sent en sécurité pour dire oui.</p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "Une bonne offre réduit le risque perçu à zéro. Le client doit se dire 'si ça ne marche pas, qu'est-ce que je perds ?' La réponse doit être : rien." },

      { id: "3-4", type: "separator", style: "dots" },
      { id: "3-5", type: "heading", level: 2, text: "Le framework : Offre = Résultat + Garantie + Urgence" },
      { id: "3-6", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Offre irrésistible", description: "Les 3 composantes qui font qu'un client dit oui sans hésiter" },
        { id: "n2", label: "Résultat", description: "Ce que le client obtient concrètement. Pas 'un chatbot' mais 'vos clients obtiennent une réponse en 5 secondes, 7j/7'" },
        { id: "n3", label: "Garantie", description: "Ce qui enlève le risque. 'Si vous n'êtes pas satisfait dans 7 jours, on rembourse' ou 'On corrige jusqu'à ce que ça marche'" },
        { id: "n4", label: "Urgence", description: "Pourquoi maintenant et pas dans 3 mois. 'Je prends 2 clients par mois seulement' ou 'Tarif lancement valable jusqu'au 31'" },
      ]},
      { id: "3-7", type: "text", html: "<p>Ces 3 éléments doivent apparaître dans chaque conversation de vente, chaque page d'offre, chaque devis. Si l'un manque, le client procrastine.</p>" },

      { id: "3-8", type: "heading", level: 2, text: "Exemples d'offres packagées" },
      { id: "3-9", type: "code", language: "text", filename: "offre-chatbot-packagée.txt", code: `OFFRE : Chatbot Support Express
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RÉSULTAT :
Votre site répond à vos clients 24h/24, 7j/7
sans que vous ayez à lever le petit doigt.

CE QUI EST INCLUS :
✓ Chatbot configuré avec vos 30 FAQ principales
✓ Design aux couleurs de votre marque
✓ Intégration sur votre site en 48h
✓ Formation de 30 min pour tout gérer vous-même
✓ Support par mail pendant 30 jours

GARANTIE :
Si après 7 jours vous n'êtes pas satisfait du résultat,
on rembourse 100% — sans question.

TARIF : 990€ HT (paiement en 2x possible)
DÉLAI : Livraison en 5 jours ouvrés garantie

DISPONIBILITÉ : Je prends 3 clients/mois maximum.
Il reste 1 place disponible ce mois-ci.` },
      { id: "3-10", type: "callout", variant: "success", html: "Remarque : nulle part dans cette offre on ne parle de Voiceflow, de tokens, d'API ou de modèle IA. Le client s'en fout. Il voit un résultat, une garantie, et une contrainte de disponibilité qui crée l'urgence." },

      { id: "3-11", type: "separator", style: "line" },
      { id: "3-12", type: "heading", level: 2, text: "Créer tes 3 tiers : Starter / Pro / Premium" },
      { id: "3-13", type: "text", html: "<p>Proposer 3 niveaux de prix fait deux choses : ça donne le choix au client (réduction du risque de 'non'), et ça ancre la perception de prix. Le client ne se demande plus 'est-ce que je prends ?' mais <em>'lequel je prends ?'</em></p>" },
      { id: "3-14", type: "comparison", headers: ["", "Starter", "Pro ⭐ Recommandé", "Premium"], rows: [
        { cells: ["Prix", "490€", "990€", "1 990€"] },
        { cells: ["Chatbot FAQ", "20 questions", "50 questions", "Illimité + base de connaissances"] },
        { cells: ["Canaux", "Site uniquement", "Site + WhatsApp", "Site + WhatsApp + Mail"] },
        { cells: ["Support", "7 jours", "30 jours", "3 mois dédié"] },
        { cells: ["Formation", "Non", "30 min incluse", "1h + documentation"] },
        { cells: ["Analytics", "Non", "Dashboard basique", "Dashboard avancé + rapports mensuels"] },
        { cells: ["Délai livraison", "7 jours", "5 jours", "3 jours"] },
      ]},
      { id: "3-15", type: "callout", variant: "tip", html: "<strong>Toujours mettre '⭐ Recommandé' sur le tier du milieu.</strong> 70% des clients choisissent l'option recommandée. C'est de la psychologie du choix, pas de la manipulation — tu leur mâches le travail de décision." },

      { id: "3-16", type: "heading", level: 2, text: "Les erreurs classiques à éviter" },
      { id: "3-17", type: "steps", steps: [
        { title: "Erreur 1 : vendre du temps, pas un résultat", description: "Évite 'X heures de développement'. Vends 'un chatbot opérationnel livré en 5 jours'. Le client n'achète pas des heures." },
        { title: "Erreur 2 : trop d'options", description: "Plus de 3 tiers = paralysie du choix. Reste sur 3, pas plus." },
        { title: "Erreur 3 : pas de garantie", description: "Sans garantie, le risque est 100% sur le client. Ajoute au minimum '7 jours satisfait ou remboursé' — tu ne l'honoreras presque jamais." },
        { title: "Erreur 4 : offre floue", description: "'Je m'occupe de votre IA' n'est pas une offre. Une offre précise spécifie le résultat, le délai, le prix, et ce qui est inclus." },
      ]},

      { id: "3-18", type: "separator", style: "dots" },
      { id: "3-19", type: "quiz-inline", question: "Quel est l'effet principal de proposer 3 tiers de prix ?", options: [
        { id: "a", text: "Ça permet de facturer plus cher" },
        { id: "b", text: "Ça change la question du client de 'est-ce que je prends ?' à 'lequel je prends ?' — ce qui augmente les conversions" },
        { id: "c", text: "Ça montre que tu as beaucoup de services différents" },
      ], correctId: "b", explanation: "Les 3 tiers utilisent la psychologie du choix. Au lieu de peser 'acheter ou ne pas acheter', le client pèse 'quel niveau choisir'. La décision d'achat est déjà prise mentalement." },

      { id: "3-20", type: "checklist", title: "Ton offre est prête quand…", items: [
        { id: "c1", text: "J'ai défini le résultat concret que le client obtient (pas un outil, un bénéfice)" },
        { id: "c2", text: "J'ai une garantie claire (remboursement, correction gratuite, etc.)" },
        { id: "c3", text: "J'ai un élément d'urgence (places limitées, tarif lancement, délai)" },
        { id: "c4", text: "J'ai 3 tiers de prix avec le milieu marqué 'recommandé'" },
        { id: "c5", text: "Mon offre tient en 1 page et se comprend sans explication orale" },
      ]},
    ]),
    exercise: "<h3>Exercice : Écris ton offre packagée</h3><p>En t'inspirant du template de la leçon, écris ton offre pour le service que tu as choisi en leçon 2. Elle doit contenir :</p><ul><li>Un titre accrocheur (pas 'Chatbot IA' mais 'Chatbot Support Express')</li><li>Le résultat en 1 phrase</li><li>La liste de ce qui est inclus (5-7 éléments)</li><li>La garantie</li><li>Le tarif et le délai</li><li>L'urgence</li></ul><p>Pas besoin que ce soit parfait — l'objectif c'est d'avoir quelque chose de concret à montrer à un vrai client.</p>",
    quiz: [
      { type: "mcq", question: "Quels sont les 3 composants du framework d'une offre irrésistible ?", options: JSON.stringify(["Prix + Délai + Qualité", "Résultat + Garantie + Urgence", "Technique + Design + Support", "Marketing + Vente + Livraison"]), correctAnswer: "Résultat + Garantie + Urgence", explanation: "Une offre irrésistible combine : un Résultat concret (ce que le client obtient), une Garantie (ce qui enlève le risque), et une Urgence (pourquoi maintenant). Si un composant manque, le client procrastine." },
      { type: "true_false", question: "Proposer 3 tiers de prix change la question du client de 'est-ce que je prends ?' à 'lequel je prends ?'.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les 3 tiers utilisent la psychologie du choix. Au lieu de peser 'acheter ou ne pas acheter', le client pèse 'quel niveau choisir'. La décision d'achat est déjà prise mentalement." },
      { type: "mcq", question: "Pourquoi faut-il marquer le tier du milieu comme 'Recommandé' ?", options: JSON.stringify(["Parce que c'est le moins cher", "Parce que 70% des clients choisissent l'option recommandée", "Parce que c'est obligatoire légalement", "Pour cacher les autres options"]), correctAnswer: "Parce que 70% des clients choisissent l'option recommandée", explanation: "70% des clients choisissent l'option recommandée. C'est de la psychologie du choix : tu leur facilites la décision en indiquant clairement quel tier offre le meilleur rapport qualité/prix." },
      { type: "true_false", question: "Une bonne offre packagée doit détailler les outils techniques utilisés (Voiceflow, APIs, modèles IA) pour convaincre le client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le client se fiche de Voiceflow, des tokens ou du modèle IA. Il veut voir un résultat concret, une garantie et un prix. L'offre packagée doit parler résultats, pas technique." },
      { type: "mcq", question: "Un prospect vous dit : 'J'ai eu un devis d'un autre freelance à 500€ pour un chatbot, pourquoi vous êtes à 2 000€ ?' Comment structurez-vous votre réponse ?", options: JSON.stringify(["Vous baissez votre prix pour vous aligner sur la concurrence", "Vous présentez vos 3 tiers de prix (Starter, Pro, Premium) et expliquez que votre offre Pro inclut la garantie, la base de connaissances et le support — avec un ROI calculé", "Vous critiquez le travail du concurrent", "Vous acceptez le projet à 500€ pour ne pas perdre le client"]), correctAnswer: "Vous présentez vos 3 tiers de prix (Starter, Pro, Premium) et expliquez que votre offre Pro inclut la garantie, la base de connaissances et le support — avec un ROI calculé", explanation: "Les 3 tiers changent la question de 'est-ce que je prends ?' à 'lequel je prends ?'. En montrant ce qui est inclus dans chaque tier et en calculant le ROI, le prospect compare des valeurs différentes et non plus des prix. 70% choisissent le tier recommandé." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 8,
    title: "Fixer tes prix sans avoir peur",
    slug: "fixer-tes-prix-sans-avoir-peur",
    duration: "20 min",
    description: "Comprendre le pricing basé sur la valeur (pas sur le temps), calculer le ROI pour justifier ses prix, utiliser l'ancrage de prix, et ne jamais vendre à l'heure.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "La règle d'or : ne jamais vendre à l'heure" },
      { id: "4-2", type: "text", html: "<p>Facturer à l'heure, c'est se punir d'être efficace. Si tu prends 3h pour livrer un chatbot parce que tu es rapide, tu gagnes 3 × 50€ = 150€. Si un autre freelance lent prend 10h, il gagne 500€. L'inefficacité est récompensée. C'est absurde.</p><p>La bonne question n'est pas <em>'combien d'heures ça me prend ?'</em> mais <em>'quelle est la valeur créée pour le client ?'</em></p>" },
      { id: "4-3", type: "callout", variant: "warning", html: "<strong>Attention :</strong> même si un client te demande 'combien factures-tu à l'heure ?', ne réponds pas à cette question directement. Redirige vers la valeur : 'Je ne facture pas à l'heure, je facture au projet et au résultat. Pour ce que vous cherchez, voici ce que ça donnerait…'" },

      { id: "4-4", type: "separator", style: "dots" },
      { id: "4-5", type: "heading", level: 2, text: "Calculer le ROI pour justifier tes prix" },
      { id: "4-6", type: "text", html: "<p>Avant de citer un prix, calcule ce que ton service rapporte au client. Ce calcul te donnera confiance — et tu pourras le montrer au client pour justifier ton tarif.</p>" },
      { id: "4-7", type: "code", language: "text", filename: "calcul-roi-chatbot.txt", code: `EXEMPLE : ROI d'un chatbot pour une PME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Situation actuelle :
- La secrétaire passe 2h/jour à répondre aux mêmes questions
- Coût salarial secrétaire : 20€/h chargé
- Coût mensuel de cette tâche : 2h × 20€ × 22 jours = 880€/mois

Avec le chatbot :
- 80% des questions traitées automatiquement
- Temps libéré : 1h36/jour soit ~704€/mois d'économies

ROI :
- Investissement : 1 500€ (ton tarif)
- Retour mensuel : 704€
- Remboursement en : 2,1 mois
- ROI sur 12 mois : 8 448€ économisés pour 1 500€ investis
  → soit 5,6x le retour sur investissement

COMMENT L'UTILISER EN VENTE :
"Ce chatbot vous coûte 1 500€ une fois. En 2 mois,
vous avez rentabilisé l'investissement. Ensuite,
c'est de l'argent que vous gagnez chaque mois."` },
      { id: "4-8", type: "callout", variant: "success", html: "Quand tu montres ce calcul à un client, le prix de 1 500€ ne semble plus élevé — il semble évident. C'est ça, le pricing basé sur la valeur." },

      { id: "4-9", type: "separator", style: "line" },
      { id: "4-10", type: "heading", level: 2, text: "L'ancrage de prix : comment présenter tes tarifs" },
      { id: "4-11", type: "text", html: "<p>L'ancrage de prix, c'est l'art de faire paraître ton prix raisonnable en le comparant à quelque chose de plus cher. Utilisé correctement, il change totalement la perception du client.</p>" },
      { id: "4-12", type: "steps", steps: [
        { title: "Ancrage 1 : comparaison avec l'alternative", description: "\"Une agence web classique vous facturerait ce site 8 000€ en 8 semaines. Moi je le livre en 5 jours pour 2 500€.\" Le client voit immédiatement l'écart." },
        { title: "Ancrage 2 : comparaison avec le coût de l'inaction", description: "\"Vous perdez 3 clients par semaine faute de réponse rapide. À 200€ le client moyen, c'est 2 400€/mois qui partent chez un concurrent. Mon chatbot coûte 1 200€.\"" },
        { title: "Ancrage 3 : le tier Premium visible", description: "Montrer ton offre Premium à 3 000€ avant de présenter l'offre Pro à 1 200€. Après le Premium, le Pro semble abordable." },
        { title: "Ancrage 4 : mensualisation", description: "\"Ce système d'automatisation c'est 2 400€ — soit 200€/mois sur 12 mois. Votre abonnement Salesforce vous coûte 350€/mois.\"" },
      ]},

      { id: "4-13", type: "separator", style: "dots" },
      { id: "4-14", type: "heading", level: 2, text: "La grille de pricing selon le client" },
      { id: "4-15", type: "comparison", headers: ["Type de client", "Budget typique", "Sensibilité prix", "Argument qui marche"], rows: [
        { cells: ["Artisan / TPE (1-5 salariés)", "300€ – 1 500€", "Très élevée", "ROI rapide, simplicité, 'ça vous prend 0 heure à gérer'"] },
        { cells: ["PME (10-50 salariés)", "1 500€ – 8 000€", "Modérée", "Gain de productivité chiffré, intégration aux outils existants"] },
        { cells: ["ETI / Grand compte (50+ salariés)", "5 000€ – 50 000€", "Faible", "ROI stratégique, conformité, scalabilité, support dédié"] },
        { cells: ["Startup", "500€ – 5 000€", "Élevée, mais flexible", "Vitesse, modernité, capacité à itérer vite"] },
      ]},
      { id: "4-16", type: "text", html: "<p>Adapte ta présentation selon le client. Ce n'est pas le même pitch pour un plombier et pour un DAF de PME. Mais le fond — résultat, ROI, garantie — reste le même.</p>" },

      { id: "4-17", type: "callout", variant: "tip", html: "<strong>Hack psychologique :</strong> présente toujours ton prix juste après avoir décrit la valeur. Jamais avant. Et laisse un silence après avoir dit le prix. Ne t'excuse pas, ne le justifie pas immédiatement. Laisse le client réagir." },

      { id: "4-18", type: "separator", style: "dots" },
      { id: "4-19", type: "quiz-inline", question: "Tu livres un chatbot en 4h de travail. Le client réalise 1 200€/mois d'économies. Quel prix est justifié ?", options: [
        { id: "a", text: "200€ (4h × 50€/h)" },
        { id: "b", text: "400€ pour être honnête sur le temps passé" },
        { id: "c", text: "900€ à 1 500€ — le prix est basé sur la valeur créée, pas sur les heures" },
      ], correctId: "c", explanation: "Le client économise 1 200€/mois. Un prix de 900-1 500€ représente moins d'un mois d'économies. C'est un investissement à ROI quasi-immédiat. Ton temps ne compte pas dans l'équation client." },

      { id: "4-20", type: "checklist", title: "Mon pricing est solide quand…", items: [
        { id: "c1", text: "Je ne facture plus à l'heure — seulement au projet ou au résultat" },
        { id: "c2", text: "Je peux calculer le ROI de chaque service que je vends" },
        { id: "c3", text: "J'utilise au moins un ancrage de prix dans mes conversations commerciales" },
        { id: "c4", text: "Je sais adapter mon pitch selon la taille du client" },
        { id: "c5", text: "Je dis mon prix avec confiance et je supporte le silence qui suit" },
      ]},
    ]),
    exercise: "<h3>Exercice : Calcule le ROI de ton offre</h3><p>Prends l'offre que tu as construite en leçon 3. Calcule maintenant son ROI pour un client type :</p><ol><li>Quel problème résous-tu ? (temps perdu, erreurs, clients perdus, coût évité)</li><li>Mets un chiffre en euros par mois sur ce problème</li><li>En combien de mois ton prix est-il remboursé ?</li><li>Quel est le ROI sur 12 mois (économies totales ÷ ton prix) ?</li></ol><p>Écris ce calcul en 3-4 lignes que tu pourras dire à l'oral à un client. C'est ton argument de vente numéro 1.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi ne jamais facturer à l'heure en tant qu'agence IA ?", options: JSON.stringify(["Parce que les clients préfèrent les forfaits", "Parce que facturer à l'heure punit l'efficacité : plus tu es rapide, moins tu gagnes", "Parce que c'est illégal pour les freelances", "Parce que les heures sont difficiles à compter"]), correctAnswer: "Parce que facturer à l'heure punit l'efficacité : plus tu es rapide, moins tu gagnes", explanation: "Facturer à l'heure récompense l'inefficacité. Si tu livres un chatbot en 3h au lieu de 10h, tu gagnes moins alors que tu crées la même valeur. La bonne question est 'quelle valeur créée ?' pas 'combien d'heures ?'." },
      { type: "true_false", question: "Il faut présenter le prix au client juste après avoir décrit la valeur, jamais avant.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Présenter le prix après la valeur ancre le prix dans le contexte du bénéfice. Un chatbot à 1 500€ semble cher si tu le dis d'entrée, mais évident quand le client sait qu'il économisera 8 448€ sur 12 mois." },
      { type: "mcq", question: "Si un chatbot coûte 1 500€ et économise 704€/mois au client, en combien de mois l'investissement est-il remboursé ?", options: JSON.stringify(["6 mois", "4 mois", "Environ 2 mois", "12 mois"]), correctAnswer: "Environ 2 mois", explanation: "1 500€ ÷ 704€/mois = 2,1 mois. L'investissement est remboursé en à peine plus de 2 mois. Ensuite, chaque mois c'est de l'argent économisé net. C'est cet argument ROI qui rend le prix évident." },
      { type: "true_false", question: "L'ancrage de prix consiste à comparer ton tarif à quelque chose de plus cher pour que ton prix paraisse raisonnable.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'ancrage de prix change la perception du client. En comparant à une agence web à 8 000€, ton tarif de 2 500€ semble très compétitif. Tu peux aussi ancrer sur le coût de l'inaction ou montrer le tier Premium avant le Pro." },
      { type: "mcq", question: "Vous avez un call commercial avec le dirigeant d'une PME de 30 salariés. Il veut automatiser la qualification de ses leads. Comment adaptez-vous votre pricing par rapport à un artisan qui demande le même service ?", options: JSON.stringify(["Vous proposez exactement le même prix car c'est le même travail technique", "Vous facturez plus cher car la PME a plus de volume, plus de budget, et le ROI est proportionnellement plus élevé", "Vous facturez moins cher pour la PME car elle peut négocier", "Vous refusez la PME car ce n'est pas votre cible"]), correctAnswer: "Vous facturez plus cher car la PME a plus de volume, plus de budget, et le ROI est proportionnellement plus élevé", explanation: "Le pricing s'adapte à la taille du client. Une PME de 30 salariés traite plus de leads, économise plus d'heures, et a un budget plus important qu'un artisan. Le même service crée plus de valeur chez la PME, ce qui justifie un prix plus élevé." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 8,
    title: "Créer ta page d'offre et tes supports de vente",
    slug: "page-offre-supports-de-vente",
    duration: "25 min",
    description: "Construire sa landing page d'offre, son deck de présentation, sa proposition commerciale et son devis type — les 4 armes du commercial indépendant.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "Les 4 supports qui font des deals" },
      { id: "5-2", type: "text", html: "<p>Pour vendre des services IA, tu n'as pas besoin de 50 outils. Tu as besoin de 4 documents bien faits. Chacun a un rôle précis dans le parcours de vente — de la découverte à la signature.</p>" },
      { id: "5-3", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Page d'offre", description: "Le client te découvre ou est envoyé sur ta page. Il comprend ce que tu fais et veut te contacter." },
        { id: "n2", label: "Deck de présentation", description: "Tu passes un appel ou une réunion. Tu envoies le deck avant ou pendant pour structurer la conversation." },
        { id: "n3", label: "Proposition commerciale", description: "Après l'appel, tu envoies une proposition personnalisée. Elle récapitule le contexte, la solution et le prix." },
        { id: "n4", label: "Devis", description: "Le document légal. Simple, clair, avec les modalités de paiement et les conditions." },
      ]},

      { id: "5-4", type: "separator", style: "dots" },
      { id: "5-5", type: "heading", level: 2, text: "Support #1 : La page d'offre" },
      { id: "5-6", type: "text", html: "<p>Ta page d'offre n'est pas ton site web. C'est une <strong>landing page dédiée à un service précis</strong>. Elle convertit un visiteur en prospect. Elle doit répondre à 5 questions dans les 10 premières secondes :</p><ul><li>Qui tu aides</li><li>Quel problème tu résous</li><li>Comment tu le résous</li><li>Combien ça coûte</li><li>Pourquoi toi plutôt qu'un autre</li></ul>" },
      { id: "5-7", type: "code", language: "text", filename: "structure-landing-page-offre.txt", code: `STRUCTURE D'UNE PAGE D'OFFRE QUI CONVERTIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HERO (above the fold) :
━━━━━━━━━━━━━━━━━━━━━
Titre : [Résultat concret] pour [type de client]
Sous-titre : En [délai], sans [obstacle principal]
CTA : Réserver un appel gratuit (bouton bien visible)

PROBLÈME (3-4 phrases) :
━━━━━━━━━━━━━━━━━━━━━━━
"Vous passez X heures par semaine à faire [tâche].
Vos clients attendent trop longtemps / partent à la concurrence.
Vous savez que l'IA pourrait aider mais vous ne savez pas par où commencer."

SOLUTION :
━━━━━━━━━
Ce que tu livres en 3-5 bullets (résultats, pas features)
✓ [Résultat 1]
✓ [Résultat 2]
✓ [Résultat 3]

PREUVE SOCIALE :
━━━━━━━━━━━━━━
Témoignage ou résultat d'un client (1-2 max)
Logos de clients si tu en as

OFFRE & PRIX :
━━━━━━━━━━━━
Tes 3 tiers (Starter / Pro / Premium)
Détail de ce qui est inclus
Garantie bien visible

FAQ :
━━━━
5-7 objections courantes avec réponses
"Combien de temps ça prend ?", "Et si ça ne marche pas ?",
"Je n'y connais rien en IA, c'est un problème ?"

CTA FINAL :
━━━━━━━━━━
Répéter le bouton. Ajouter l'urgence.
"Il reste 2 places disponibles ce mois-ci"` },
      { id: "5-8", type: "callout", variant: "tip", html: "Crée ta page d'offre avec Framer, Notion (public), ou même un Google Doc bien formaté. Le fond compte plus que la forme au début. Une bonne page sur Google Doc vaut mieux qu'une belle page vide de sens." },

      { id: "5-9", type: "separator", style: "line" },
      { id: "5-10", type: "heading", level: 2, text: "Support #2 : Le deck de présentation" },
      { id: "5-11", type: "code", language: "text", filename: "structure-deck-presentation.txt", code: `DECK DE PRÉSENTATION — 8 SLIDES MAX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Slide 1 — Titre
[Ton nom / Logo agence]
"Votre partenaire IA pour [secteur ou résultat]"

Slide 2 — Le problème
3 bullets : les douleurs que tu observes chez tes clients
Formule : "Aujourd'hui, beaucoup d'entreprises [problème]"

Slide 3 — La solution
Ce que tu fais en 2-3 phrases
Pas de jargon technique. Résultat uniquement.

Slide 4 — Les services
3 services max, avec résultat + fourchette de prix
Chatbot | Automatisation | Agent IA

Slide 5 — Preuve / Cas client
1 projet concret : avant / après / chiffres
Si tu n'as pas encore de client : projet fictif ou personnel

Slide 6 — Comment ça marche
3-4 étapes simples
Appel découverte → Proposition → Livraison → Support

Slide 7 — Qui je suis
Photo, nom, 3 lignes bio
1 certif ou formation si tu en as

Slide 8 — CTA
"Passons à l'étape suivante"
Réserver un appel : [lien Calendly]
Mail : [ton mail]` },

      { id: "5-12", type: "separator", style: "line" },
      { id: "5-13", type: "heading", level: 2, text: "Support #3 : La proposition commerciale" },
      { id: "5-14", type: "code", language: "text", filename: "template-proposition-commerciale.txt", code: `PROPOSITION COMMERCIALE — TEMPLATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Pour : [Nom du client / Entreprise]
De : [Ton nom / Agence]
Date : [Date]
Référence : PROP-2025-[numéro]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. CONTEXTE ET PROBLÉMATIQUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Suite à notre échange du [date], j'ai bien compris que :
- [Douleur 1 mentionnée par le client]
- [Douleur 2]
- Votre objectif : [ce que le client veut atteindre]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. NOTRE PROPOSITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pour répondre à ces enjeux, je vous propose :

[NOM DU LIVRABLE]
Ce que vous obtenez :
✓ [Résultat 1]
✓ [Résultat 2]
✓ [Résultat 3]

Détail des prestations incluses :
• [Item 1]
• [Item 2]
• [Item 3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. CALENDRIER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Semaine 1 : [Phase 1]
Semaine 2 : [Phase 2]
Livraison finale : [Date estimée]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. INVESTISSEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tarif : [X]€ HT
Modalités : 50% à la commande / 50% à la livraison

Garantie : Si le livrable ne correspond pas au cahier des
charges défini, nous corrigeons gratuitement jusqu'à
validation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. PROCHAINES ÉTAPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pour démarrer, il suffit de :
1. Valider cette proposition par retour de mail
2. Régler l'acompte de [X]€ (virement ou lien de paiement)
3. Planifier le kick-off : [lien Calendly]

Cette proposition est valable jusqu'au [date + 10 jours].
[Ton nom] — [mail] — [téléphone]` },

      { id: "5-15", type: "separator", style: "dots" },
      { id: "5-16", type: "heading", level: 2, text: "Les outils recommandés" },
      { id: "5-17", type: "comparison", headers: ["Support", "Outil gratuit", "Outil payant (meilleur)"], rows: [
        { cells: ["Page d'offre", "Notion (public) ou Google Sites", "Framer (10€/mois) ou Webflow"] },
        { cells: ["Deck de présentation", "Google Slides ou Canva", "Pitch.com ou Beautiful.ai"] },
        { cells: ["Proposition commerciale", "Google Docs ou Word", "PandaDoc ou Proposify (avec signature électronique)"] },
        { cells: ["Devis / Facture", "Zervant (gratuit)", "Pennylane ou Freebe (20€/mois)"] },
        { cells: ["Prise de rendez-vous", "Calendly (plan gratuit)", "Calendly Pro ou Cal.com"] },
      ]},
      { id: "5-18", type: "callout", variant: "info", html: "Au démarrage, tout en gratuit est parfait. L'objectif c'est d'avoir les 4 supports, pas d'avoir les meilleurs outils. Un Google Doc bien rédigé signe des deals à 3 000€." },

      { id: "5-19", type: "quiz-inline", question: "Dans quel ordre les supports de vente interviennent-ils ?", options: [
        { id: "a", text: "Devis → Deck → Proposition → Page d'offre" },
        { id: "b", text: "Page d'offre → Deck de présentation → Proposition commerciale → Devis" },
        { id: "c", text: "Proposition commerciale → Appel → Page d'offre → Devis" },
      ], correctId: "b", explanation: "La page d'offre attire et qualifie. Le deck structure l'appel de découverte. La proposition commerciale personnalisée convainc. Le devis formalise. Chaque support a sa place dans le tunnel de vente." },

      { id: "5-20", type: "checklist", title: "Mes supports de vente sont prêts quand…", items: [
        { id: "c1", text: "J'ai une page d'offre (même simple) accessible en ligne" },
        { id: "c2", text: "J'ai un deck de 8 slides que je peux envoyer par mail" },
        { id: "c3", text: "J'ai un template de proposition commerciale prêt à personnaliser" },
        { id: "c4", text: "J'ai un outil de facturation configuré (même gratuit)" },
        { id: "c5", text: "J'ai un lien Calendly ou équivalent pour prendre des rendez-vous" },
      ]},
    ]),
    exercise: "<h3>Exercice : Crée ta page d'offre minimaliste</h3><p>En utilisant Notion (page publique) ou Google Sites, crée une page d'offre pour ton service principal. Elle doit contenir au minimum :</p><ul><li>Un titre avec le résultat pour un type de client précis</li><li>3 bullets de ce que le client obtient</li><li>Ton offre Pro avec le prix</li><li>La garantie</li><li>Un bouton de contact ou un lien Calendly</li></ul><p>Objectif : 1 heure maximum. Publie-la et envoie-la à un ami pour feedback. Le reste s'améliore avec le temps et les retours vrais clients.</p>",
    quiz: [
      { type: "mcq", question: "Dans quel ordre les 4 supports de vente interviennent-ils dans le parcours commercial ?", options: JSON.stringify(["Devis → Deck → Proposition → Page d'offre", "Page d'offre → Deck de présentation → Proposition commerciale → Devis", "Proposition → Appel → Page d'offre → Devis", "Deck → Page d'offre → Devis → Proposition"]), correctAnswer: "Page d'offre → Deck de présentation → Proposition commerciale → Devis", explanation: "La page d'offre attire et qualifie. Le deck structure l'appel de découverte. La proposition commerciale personnalisée convainc. Le devis formalise. Chaque support a sa place dans le tunnel de vente." },
      { type: "true_false", question: "Un Google Doc bien rédigé peut suffire pour signer des deals à 3 000€ quand on débute.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Au démarrage, le fond compte plus que la forme. Un Google Doc bien rédigé avec une offre claire signe des deals. Les outils sophistiqués (PandaDoc, Framer payant) viennent après les premiers revenus." },
      { type: "mcq", question: "Combien de slides maximum doit contenir un deck de présentation d'agence IA ?", options: JSON.stringify(["4 slides", "8 slides", "15 slides", "25 slides"]), correctAnswer: "8 slides", explanation: "Un deck efficace contient 8 slides max : titre, problème, solution, services, preuve/cas client, comment ça marche, qui je suis, CTA. Au-delà, tu perds l'attention du prospect." },
      { type: "true_false", question: "La proposition commerciale doit être envoyée avant l'appel découverte pour que le prospect soit préparé.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La proposition commerciale est envoyée APRÈS l'appel découverte. Elle est personnalisée selon les douleurs spécifiques du prospect révélées pendant l'échange, ce qui la rend beaucoup plus convaincante." },
      { type: "mcq", question: "Un prospect visite votre page d'offre mais ne vous contacte pas. Vous analysez la page et constatez que le hero dit : 'Agence IA spécialisée en chatbots, automatisations et développement'. Quel est le problème et comment le corriger ?", options: JSON.stringify(["Le problème est le design — il faut plus de couleurs et d'images", "Le hero parle de vous et pas du client — il faut remplacer par un résultat concret comme 'Réduisez de 70% le temps de réponse à vos clients en 5 jours'", "Il manque une vidéo de présentation dans le hero", "Le prix devrait être affiché directement dans le hero"]), correctAnswer: "Le hero parle de vous et pas du client — il faut remplacer par un résultat concret comme 'Réduisez de 70% le temps de réponse à vos clients en 5 jours'", explanation: "Le hero doit répondre en 10 secondes à 'quel résultat pour moi ?'. Un titre centré sur le client (résultat + délai) avec un CTA visible convertit beaucoup mieux qu'une liste de compétences techniques que le prospect ne comprend pas." },
    ],
  },

  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 8,
    title: "Ton premier client gratuit",
    slug: "premier-client-gratuit",
    duration: "35 min",
    description: "Pourquoi offrir un premier projet gratuit est la stratégie la plus puissante pour démarrer, comment choisir le bon prospect, cadrer la mission et obtenir un témoignage en béton.",
    content: blocks([
      { id: "6-1", type: "heading", level: 2, text: "Pourquoi ton premier projet doit être gratuit" },
      { id: "6-2", type: "text", html: "<p>Intuitivement, on pense que plus on propose de services à plus de gens, plus on a de chances de trouver des clients. C'est faux. En fait, c'est exactement l'inverse.</p><p>Un <strong>spécialiste IA pour les cabinets d'avocats</strong> sera contacté par tous les cabinets d'avocats qui cherchent une solution IA. Un <strong>généraliste IA</strong> sera contacté par personne — parce que personne ne se reconnaît dans son message.</p>" },
      { id: "6-3", type: "callout", variant: "tip", html: "<strong>Contre-intuitif mais vrai :</strong> réduire ta cible augmente ton nombre de clients. Plus tu parles à tout le monde, moins tu parles à quelqu'un." },

      { id: "6-4", type: "separator", style: "dots" },
      { id: "6-5", type: "heading", level: 2, text: "Généraliste vs Spécialiste : la comparaison réelle" },
      { id: "6-6", type: "comparison", headers: ["", "Généraliste IA", "Spécialiste IA (ex: immobilier)"], rows: [
        { cells: ["Message", "'Je fais de l'IA pour les entreprises'", "'J'automatise les agences immobilières avec l'IA'"] },
        { cells: ["Qui répond", "Personne en particulier", "Toutes les agences immobilières"] },
        { cells: ["Concurrence", "Tous les freelances IA du marché", "Quasi aucun concurrent spécialisé"] },
        { cells: ["Tarif possible", "Pression vers le bas, comparaison facile", "Premium justifié par la spécialisation"] },
        { cells: ["Bouche à oreille", "Faible (qui va te recommander à qui ?)", "Fort (les agences se parlent entre elles)"] },
        { cells: ["Temps de vente", "Long (éduquer chaque prospect)", "Court (ils ont déjà le problème, tu as la solution)"] },
      ]},
      { id: "6-7", type: "text", html: "<p>Le généraliste concourt sur le prix. Le spécialiste concourt sur l'expertise. Ce n'est pas la même bataille — et ce n'est pas la même vie.</p>" },

      { id: "6-8", type: "separator", style: "line" },
      { id: "6-9", type: "heading", level: 2, text: "Comment choisir ta niche" },
      { id: "6-10", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Zone de compétence", description: "Ce que tu sais faire : chatbots, automatisations, agents, sites, consulting" },
        { id: "n2", label: "Zone de connaissance sectorielle", description: "Un secteur que tu connais déjà (ton ancien boulot, ta famille, ton réseau proche)" },
        { id: "n3", label: "Zone de douleur forte", description: "Un secteur où le problème est critique et le budget est là (santé, immobilier, RH, legal, e-commerce)" },
        { id: "n4", label: "Ta niche idéale", description: "L'intersection des 3 zones : tu sais faire, tu connais le secteur, le secteur a besoin de toi et peut payer" },
      ]},
      { id: "6-11", type: "text", html: "<p>Tu n'as pas besoin de connaître un secteur parfaitement pour te spécialiser dedans. 2-3 projets et tu seras déjà plus expert que 95% du marché sur 'IA + ce secteur'. La spécialisation se construit vite.</p>" },

      { id: "6-12", type: "heading", level: 2, text: "Exemples de niches rentables pour une agence IA" },
      { id: "6-13", type: "comparison", headers: ["Niche", "Services qui marchent", "Budget moyen client"], rows: [
        { cells: ["Agences immobilières", "Chatbot qualif prospects, automatisation visites, rapports auto", "2 000€ – 8 000€"] },
        { cells: ["Cabinets RH / recrutement", "Agent tri CV, automatisation onboarding, FAQ RH chatbot", "1 500€ – 6 000€"] },
        { cells: ["Cliniques / cabinets médicaux", "Chatbot prise RDV, rappels patients automatisés, FAQ santé", "1 000€ – 4 000€"] },
        { cells: ["E-commerce (Shopify)", "Chatbot support, automatisation avis clients, agent retours", "1 500€ – 5 000€"] },
        { cells: ["Restaurants / hôtellerie", "Chatbot résa/FAQ, automatisation avis Google, menu IA", "500€ – 2 500€"] },
        { cells: ["Cabinets comptables", "Automatisation traitement factures, chatbot client, extraction données", "3 000€ – 10 000€"] },
      ]},

      { id: "6-14", type: "separator", style: "dots" },
      { id: "6-15", type: "heading", level: 2, text: "Construire ton personal branding" },
      { id: "6-16", type: "text", html: "<p>Le personal branding, c'est la réponse à la question : <em>pourquoi toi plutôt qu'un autre ?</em> Ce n'est pas un logo ou une jolie bio LinkedIn. C'est la combinaison de ton positionnement + ta preuve + ta présence.</p>" },
      { id: "6-17", type: "steps", steps: [
        { title: "Étape 1 : Définis ta proposition de valeur unique (PVU)", description: "En une phrase : 'J'aide [qui] à [résultat] grâce à [méthode / spécificité]'. Ex : 'J'aide les agences immobilières à doubler leurs leads qualifiés avec des systèmes IA sur-mesure.'" },
        { title: "Étape 2 : Crée du contenu sur ta niche", description: "LinkedIn est la meilleure plateforme B2B. 2 posts par semaine sur les problèmes de ta niche et comment l'IA les résout. Tu n'as pas besoin d'être créatif — documente ce que tu fais." },
        { title: "Étape 3 : Montre des résultats réels", description: "Capture d'écran d'un workflow en action, stats d'un chatbot, témoignage client. La preuve est le meilleur contenu. Une seule preuve vaut 100 posts théoriques." },
        { title: "Étape 4 : Sois la ressource dans ta niche", description: "Réponds aux questions dans des groupes Facebook / Slack de ta niche. Partage des astuces spécifiques. Tu deviens la référence IA du secteur par simple présence régulière." },
      ]},
      { id: "6-18", type: "callout", variant: "success", html: "<strong>Résultat attendu en 3 mois de contenu régulier :</strong> des prospects inbound qui te contactent en disant 'j'ai vu tes posts sur LinkedIn, tu travailles avec des agences immo, on cherche quelqu'un pour…'. C'est ça, le personal branding qui vend." },

      { id: "6-19", type: "separator", style: "dots" },
      { id: "6-20", type: "quiz-inline", question: "Pourquoi le spécialiste peut facturer plus cher que le généraliste ?", options: [
        { id: "a", text: "Parce qu'il fait un travail plus difficile techniquement" },
        { id: "b", text: "Parce qu'il est rare dans sa niche, compris immédiatement par ses clients, et n'est pas comparable à d'autres prestataires génériques" },
        { id: "c", text: "Parce que les clients spécialisés ont plus d'argent" },
      ], correctId: "b", explanation: "Le spécialiste ne concourt pas sur le prix mais sur l'expertise perçue. Quand tu es 'l'expert IA des agences immobilières', le client ne peut pas te comparer à un généraliste. Tu es dans une catégorie à part — et tu fixes les prix de cette catégorie." },

      { id: "6-21", type: "checklist", title: "Mon positionnement est clair quand…", items: [
        { id: "c1", text: "Je peux dire en une phrase qui j'aide et quel résultat je livre" },
        { id: "c2", text: "J'ai choisi une niche sectorielle principale (quitte à l'ajuster plus tard)" },
        { id: "c3", text: "Mon profil LinkedIn / ma page d'offre reflète cette spécialisation" },
        { id: "c4", text: "Je publie au moins 1 contenu par semaine sur les problèmes de ma niche" },
        { id: "c5", text: "Je sais comment répondre à 'pourquoi toi ?' en 30 secondes" },
        { id: "c6", text: "Je comprends que me spécialiser n'empêche pas de prendre d'autres clients — ça attire juste les bons en priorité" },
      ]},
    ]),
    exercise: "<h3>Exercice final du module : Ton positionnement en 3 livrables</h3><p>C'est l'exercice le plus important du module. Prends 45 minutes et produis ces 3 livrables :</p><ol><li><strong>Ta PVU (Proposition de Valeur Unique)</strong> : 'J'aide [qui précis] à [résultat précis] grâce à [méthode / outil / spécificité]'. Écris 3 versions et garde la meilleure.</li><li><strong>Ta bio LinkedIn</strong> : 3 lignes max. Commence par ta PVU. Ajoute une preuve (ou un projet). Finis par un CTA ('DM pour discuter de [sujet]').</li><li><strong>Ton premier post LinkedIn</strong> : Décris un problème concret de ta niche cible. Explique comment l'IA le résout. Finis par une question ouverte. Poste-le aujourd'hui.</li></ol><p>Ces 3 éléments posent les fondations de tout ton business IA. Le reste — clients, revenus, réputation — se construit à partir de là.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi le spécialiste peut-il facturer plus cher que le généraliste ?", options: JSON.stringify(["Parce qu'il fait un travail techniquement plus difficile", "Parce qu'il est rare dans sa niche et n'est pas comparable à des prestataires génériques", "Parce que les clients de niche ont plus de budget", "Parce qu'il a plus d'années d'expérience"]), correctAnswer: "Parce qu'il est rare dans sa niche et n'est pas comparable à des prestataires génériques", explanation: "Le spécialiste concourt sur l'expertise perçue, pas sur le prix. Quand tu es 'l'expert IA des agences immobilières', le client ne peut pas te comparer à un généraliste. Tu fixes les prix de ta catégorie." },
      { type: "true_false", question: "Réduire sa cible à une niche spécifique diminue le nombre de clients potentiels.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Contre-intuitif mais vrai : réduire ta cible augmente ton nombre de clients. Plus tu parles à tout le monde, moins tu parles à quelqu'un. Un message spécifique attire tous les clients de ta niche." },
      { type: "mcq", question: "Quelle est la bonne structure pour une Proposition de Valeur Unique (PVU) ?", options: JSON.stringify(["'Je suis expert en IA et automatisation'", "'J'aide [qui] à [résultat] grâce à [méthode/spécificité]'", "'Je propose des services IA abordables'", "'Agence IA full-service pour toutes les entreprises'"]), correctAnswer: "'J'aide [qui] à [résultat] grâce à [méthode/spécificité]'", explanation: "La PVU suit le format : 'J'aide [persona précis] à [résultat mesurable] grâce à [méthode unique]'. Par exemple : 'J'aide les agences immobilières à doubler leurs leads qualifiés avec des systèmes IA sur-mesure.'" },
      { type: "true_false", question: "Il faut connaître parfaitement un secteur avant de s'y spécialiser.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Tu n'as pas besoin de connaître un secteur parfaitement. 2-3 projets suffisent pour être plus expert que 95% du marché sur 'IA + ce secteur'. La spécialisation se construit vite avec la pratique." },
      { type: "mcq", question: "Vous hésitez entre vous positionner comme 'agence IA généraliste pour toutes les entreprises' ou 'expert IA pour les cabinets de recrutement'. Un ami vous dit que la niche est trop étroite. Que lui répondez-vous ?", options: JSON.stringify(["Il a raison, il vaut mieux cibler tout le monde pour maximiser les opportunités", "Se spécialiser dans les cabinets de recrutement vous rend incomparable, justifie des prix plus élevés, et attire les bons clients — 2-3 projets suffisent pour devenir l'expert de cette niche", "Vous choisissez un compromis et ciblez toutes les entreprises de services", "Vous abandonnez l'idée de niche et restez généraliste"]), correctAnswer: "Se spécialiser dans les cabinets de recrutement vous rend incomparable, justifie des prix plus élevés, et attire les bons clients — 2-3 projets suffisent pour devenir l'expert de cette niche", explanation: "Le spécialiste est rare dans sa niche et n'est pas comparable à des prestataires génériques. Quand vous êtes 'l'expert IA des cabinets de recrutement', les prospects ne peuvent pas comparer votre prix. 2-3 projets dans le secteur suffisent pour être plus expert que 95% du marché sur 'IA + recrutement'." },
    ],
  },
];
