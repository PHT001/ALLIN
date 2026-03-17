function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_13_LESSONS = [
  {
    order: 1,
    module: 13,
    title: "La roadmap de 0 à 10K€/mois",
    slug: "roadmap-0-a-10k-mois",
    duration: "20 min",
    description: "Les 4 paliers concrets pour passer de zéro à 10K€/mois avec ton agence IA, les erreurs les plus courantes à éviter, et une timeline réaliste de 7 à 12 mois.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "La vérité sur les 10K€/mois",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>10K€/mois de chiffre d'affaires, c'est un objectif ambitieux mais réaliste pour une agence IA bien structurée. De plus en plus de freelances et micro-agences spécialisés en IA atteignent ce palier. Mais la plupart de ceux qui n'y arrivent pas ne ratent pas par manque de talent — ils ratent parce qu'ils ne savent pas <strong>dans quel ordre faire les choses</strong>. Cette leçon, c'est la carte de ton terrain. Chaque palier a ses propres règles, ses propres priorités, et ses propres pièges.</p>",
      },
      {
        id: "1-3",
        type: "diagram",
        variant: "timeline",
        nodes: [
          {
            id: "n1",
            label: "Palier 0 → 1K€/mois",
            description: "Mois 1-2 : Ton premier client payant. Validation de l'offre, portfolio zéro-à-un, outreach manuel.",
          },
          {
            id: "n2",
            label: "Palier 1K → 3K€/mois",
            description: "Mois 2-3 : 2 à 4 clients récurrents. Processus de vente reproductible, premiers témoignages, prix à 1500-2000€/mission.",
          },
          {
            id: "n3",
            label: "Palier 3K → 5K€/mois",
            description: "Mois 3-4 : Spécialisation sectorielle, retainer mensuel, début de délégation.",
          },
          {
            id: "n4",
            label: "Palier 5K → 10K€/mois",
            description: "Mois 4-6 : Systèmes en place, freelances, offres packagées, revenus semi-passifs.",
          },
        ],
      },
      {
        id: "1-4",
        type: "heading",
        level: 2,
        text: "Palier 1 — De 0 à 1K€/mois : la phase de validation",
      },
      {
        id: "1-5",
        type: "text",
        html: "<p>À ce stade, <strong>un seul objectif</strong> : décrocher un client payant. Pas créer ton site. Pas peaufiner ton logo. Pas attendre que tes réseaux sociaux grossissent. Le premier client, c'est ce qui prouve que ton offre est réelle.</p><p>Ton tarif cible : <strong>500 à 1000€ par projet</strong>. C'est sous-évalué volontairement — tu achètes de la preuve sociale, pas du profit. Ce premier client te donnera un témoignage, un cas d'usage concret, et la confiance pour charger plus cher ensuite.</p><ul><li>Identifie 3 types d'entreprises locales qui peuvent bénéficier immédiatement de l'IA (ex : agents immo, coachs, restaurants)</li><li>Envoie 20 messages personnalisés par jour sur LinkedIn ou par email</li><li>Propose un audit gratuit de 30 minutes pour qualifier le besoin</li><li>Clôture sur une offre starter à 500-800€</li></ul>",
      },
      {
        id: "1-6",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur #1 — Attendre d'être prêt.</strong> Il n'y a pas de moment où tu seras « prêt ». Le premier client forge les compétences. Commence à prospecter dès la fin de ce module, pas dans 2 semaines.",
      },
      {
        id: "1-7",
        type: "heading",
        level: 2,
        text: "Palier 2 — De 1K à 3K€/mois : la phase de reproductibilité",
      },
      {
        id: "1-8",
        type: "text",
        html: "<p>Ici, le jeu change. Tu ne cherches plus à valider — tu cherches à <strong>dupliquer</strong>. Ton premier client t'a appris ce qui marche. Maintenant, transforme-le en système.</p><p>Objectif : <strong>2 à 3 clients actifs simultanément</strong> à 1000-1500€/mois chacun en retainer, ou 2 projets/mois à 1500€ pièce.</p><ul><li>Crée un script de vente standardisé issu de ce qui a marché</li><li>Documente ta méthode de livraison pour pouvoir la répliquer</li><li>Demande systématiquement un témoignage vidéo ou écrit à chaque client</li><li>Lance une stratégie de contenu légère (2 posts LinkedIn/semaine)</li></ul>",
      },
      {
        id: "1-9",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur #2 — Baisser ses prix pour closer.</strong> À partir de 1K€/mois, tu dois monter tes prix, pas les baisser. Un client qui négocie trop en vaut rarement la peine.",
      },
      {
        id: "1-10",
        type: "heading",
        level: 2,
        text: "Palier 3 — De 3K à 5K€/mois : la phase de spécialisation",
      },
      {
        id: "1-11",
        type: "text",
        html: "<p>À 3K€/mois, tu as prouvé que ça marche. Le problème : tu fais probablement trop de choses pour trop de profils différents. La spécialisation, c'est le levier qui fait passer tes tarifs de 1500€ à 3000-4000€ par mission.</p><p>Choisis <strong>un secteur vertical</strong> (immobilier, e-commerce, cabinets RH, coaches…) et <strong>une offre signature</strong> (ex : « Automatisation du SAV pour e-commerçants Shopify »). Tu deviens la référence dans ta niche, pas un généraliste.</p>",
      },
      {
        id: "1-12",
        type: "comparison",
        headers: ["Généraliste (3K/mois)", "Spécialiste (5K+/mois)"],
        rows: [
          { cells: ["Offre floue pour tout le monde", "Offre précise pour un secteur"] },
          { cells: ["Tarif moyen : 1000-1500€/projet", "Tarif moyen : 2500-4000€/projet"] },
          { cells: ["Long cycle de vente (expliquer le pourquoi)", "Court cycle de vente (ils ont déjà le problème)"] },
          { cells: ["Concurrence maximale", "Concurrence quasi nulle"] },
          { cells: ["Référencé par personne", "Référencé dans sa communauté cible"] },
        ],
      },
      {
        id: "1-13",
        type: "heading",
        level: 2,
        text: "Palier 4 — De 5K à 10K€/mois : la phase de systématisation",
      },
      {
        id: "1-14",
        type: "text",
        html: "<p>À 5K€/mois, le plafond approche si tu travailles seul. Pour doubler, tu as deux options : <strong>augmenter tes prix</strong> (moins de clients, plus de valeur) ou <strong>déléguer la production</strong> (plus de clients, même qualité). La plupart des agences à 10K font les deux.</p><p>Concrètement :</p><ul><li>Un freelance qui livre les automatisations pendant que tu vends et gères</li><li>Des offres retainer à 2000-3000€/mois (5 clients = 10-15K€)</li><li>Un tunnel d'acquisition semi-automatisé (LinkedIn + contenu)</li><li>Tes premiers revenus complémentaires (templates, mini-formation)</li></ul>",
      },
      {
        id: "1-15",
        type: "callout",
        variant: "tip",
        html: "<strong>Projection réaliste :</strong> Mois 1-2 → premier client (500-1000€). Mois 3 → 1500-2000€/mois. Mois 4 → 3000-4000€/mois. Mois 5-6 → 5000-7000€/mois. Mois 7-9 → 10K€/mois. C'est le rythme médian. Certains font plus vite, certains plus lentement — l'important c'est de ne pas sauter les paliers.",
      },
      {
        id: "1-16",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur #3 — Vouloir tout faire en même temps.</strong> À chaque palier, il y a UNE priorité. Avant 1K€ : prospecter. Avant 3K€ : systématiser la vente. Avant 5K€ : se spécialiser. Avant 10K€ : déléguer. Faire tout en simultané mène à l'épuisement et à zéro résultat.",
      },
      {
        id: "1-17",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-18",
        type: "quiz-inline",
        question: "À quel palier est-il pertinent de commencer à déléguer la production à un freelance ?",
        options: [
          { id: "a", text: "Dès le premier client, pour aller plus vite" },
          { id: "b", text: "Entre 3K et 5K€/mois, quand la méthode est documentée et reproductible" },
          { id: "c", text: "Seulement à partir de 10K€/mois quand on a les moyens" },
          { id: "d", text: "Jamais, une agence IA solo c'est plus rentable" },
        ],
        correctId: "b",
        explanation: "Déléguer trop tôt (avant d'avoir une méthode documentée) crée le chaos — tu délègues du flou. Déléguer trop tard freine ta croissance. Le sweet spot : quand tu as livré 3 à 5 projets similaires et que tu peux écrire une SOP claire pour le freelance.",
      },
      {
        id: "1-19",
        type: "checklist",
        title: "Checklist — Où en es-tu sur la roadmap ?",
        items: [
          { id: "c1", text: "J'ai identifié mon palier actuel (0-1K / 1-3K / 3-5K / 5-10K)" },
          { id: "c2", text: "Je connais LA priorité unique de mon palier actuel" },
          { id: "c3", text: "J'ai un objectif chiffré pour les 30 prochains jours" },
          { id: "c4", text: "Je sais quelle erreur classique de mon palier je dois éviter" },
          { id: "c5", text: "J'ai noté ma timeline personnelle réaliste vers 10K€/mois" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Ouvre un doc vierge. Écris ton palier actuel en grand, puis réponds à ces 3 questions : (1) Quel est le seul indicateur qui prouve que tu passes au palier suivant ? (2) Quelle est l'action que tu évites depuis trop longtemps à ce stade ? (3) Dans combien de semaines veux-tu atteindre le palier suivant — et qu'est-ce que tu feras différemment cette semaine pour y arriver ? Garde ce doc ouvert pendant les 4 prochaines leçons.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le tarif cible recommandé pour ton tout premier client au palier 0-1K€/mois ?", options: JSON.stringify(["2000-3000€ par projet", "500-1000€ par projet", "100-200€ par projet", "5000€ par projet minimum"]), correctAnswer: "500-1000€ par projet", explanation: "Au palier 0-1K€, le tarif cible est volontairement bas (500-1000€) pour acheter de la preuve sociale : un témoignage, un cas d'usage concret, et la confiance pour monter ses prix ensuite." },
      { type: "true_false", question: "Au palier 3K-5K€/mois, la priorité est de rester généraliste pour attirer un maximum de clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est l'inverse : au palier 3K-5K€, la spécialisation est le levier clé. Choisir un secteur vertical et une offre signature permet de passer de 1500€ à 3000-4000€ par mission." },
      { type: "mcq", question: "Quelle est la timeline réaliste médiane pour atteindre 10K€/mois selon la roadmap ?", options: JSON.stringify(["1 à 2 mois", "7 à 9 mois", "12 à 18 mois", "3 à 4 mois"]), correctAnswer: "7 à 9 mois", explanation: "La projection réaliste est : premier client mois 1-2, puis montée progressive palier par palier jusqu'à 10K€/mois autour du mois 7-9. L'important est de ne pas sauter les paliers." },
      { type: "true_false", question: "Il est recommandé de créer son site web et son logo avant de prospecter son premier client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "L'erreur #1 est d'attendre d'être prêt. Le premier client forge les compétences. Il faut prospecter dès que possible, pas peaufiner son image de marque." },
      { type: "mcq", question: "Vous êtes à 4 500€/mois avec 3 clients récurrents. Vous n'avez plus le temps de prospecter car vous livrez tout vous-même. Que faites-vous pour passer le cap des 10K€/mois ?", options: JSON.stringify(["Vous travaillez 80h par semaine pour prendre plus de clients", "Vous augmentez vos prix sur les nouveaux clients et vous déléguez la production à un freelance pour libérer du temps de prospection", "Vous arrêtez les clients actuels pour vous concentrer sur la prospection", "Vous lancez un SaaS pour remplacer le service client"]), correctAnswer: "Vous augmentez vos prix sur les nouveaux clients et vous déléguez la production à un freelance pour libérer du temps de prospection", explanation: "Le plafond de verre est classique : trop de production, plus de temps pour vendre. Les deux leviers pour le casser sont d'augmenter les prix (même travail, plus de valeur) et de déléguer la production (un freelance à 500€ sur un projet facturé 1 500€ vous libère pour vendre)." },
    ],
  },
  {
    order: 2,
    module: 13,
    title: "Recruter et déléguer : tes premiers freelances",
    slug: "recruter-deleguer-premiers-freelances",
    duration: "25 min",
    description: "Quand embaucher ton premier freelance, où le trouver, combien le payer, comment déléguer sans perdre la qualité ni te noyer dans le management.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Le moment exact où tu dois recruter",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Il y a un signe infaillible que tu dois recruter : <strong>tu refuses des clients ou tu livres en retard</strong>. À partir de là, tu perds de l'argent en restant seul. Le deuxième signe, c'est quand tu passes plus de temps à <em>faire</em> qu'à <em>vendre</em> — ce qui ralentit toute ta croissance.</p><p>Règle de base : quand tu génères <strong>plus de 3000€/mois de façon stable</strong> pendant 2 mois consécutifs, il est temps de recruter ton premier exécutant. Pas avant — tu n'as pas encore les marges pour absorber une mauvaise embauche.</p>",
      },
      {
        id: "2-3",
        type: "callout",
        variant: "info",
        html: "<strong>Le bon ordre :</strong> Toi → tu vends ET livres. Puis toi → tu vends, freelance → il livre. Puis toi → tu vends et supervises, 2 freelances → ils livrent. C'est le chemin vers 10K€ sans t'épuiser.",
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "Où trouver les bons freelances",
      },
      {
        id: "2-5",
        type: "steps",
        steps: [
          {
            title: "Malt (meilleur pour la France)",
            description: "Cherche 'automatisation Make', 'développeur n8n', 'intégration Zapier', 'chatbot IA'. Filtre par 'Moins de 2 ans d'expérience' pour avoir des tarifs raisonnables (300-500€/jour) et des gens encore faim de prouver leur valeur.",
          },
          {
            title: "Upwork (meilleur rapport qualité/prix mondial)",
            description: "Profils d'Europe de l'Est ou d'Asie du Sud-Est : 15-40€/h pour des compétences Make, n8n, Python. Poste une offre avec un mini-test technique (30 min de travail réel) pour filtrer les candidats.",
          },
          {
            title: "Ton réseau LinkedIn direct",
            description: "Cherche 'automation consultant' ou 'no-code developer' dans tes connexions de 2e degré. Un message direct personnalisé convertit 3x mieux qu'une plateforme. Propose un premier projet test à tarif fixe.",
          },
          {
            title: "Communautés spécialisées",
            description: "Discord Make (officiel), Slack n8n Community, groupes Facebook 'No-Code France'. Les gens qui trainent là sont déjà passionnés — ils livrent mieux et communiquent mieux qu'un prestataire lambda.",
          },
          {
            title: "Ton cercle de formation (ici même)",
            description: "Les autres apprenants de cette formation sont des candidats naturels. Proposer un projet à quelqu'un qui a suivi la même formation, c'est une base commune qui facilite la collaboration.",
          },
        ],
      },
      {
        id: "2-6",
        type: "heading",
        level: 2,
        text: "Combien payer — les grilles réelles",
      },
      {
        id: "2-7",
        type: "comparison",
        headers: ["Profil", "Plateforme", "Tarif indicatif", "Cas d'usage"],
        rows: [
          { cells: ["Automatisateur junior Make/Zapier", "Malt / réseau", "300-450€/jour", "Automatisations simples, flux email, CRM"] },
          { cells: ["Développeur n8n mid-level", "Upwork", "25-50€/h", "Automatisations complexes, API custom"] },
          { cells: ["Prompt engineer / IA specialist", "Malt / LinkedIn", "400-600€/jour", "Chatbots, RAG, workflows GPT"] },
          { cells: ["Copywriter spécialisé IA", "Réseau / Malt", "80-150€/texte", "Pages de vente, séquences email"] },
          { cells: ["VA (assistant virtuel)", "Fiverr / Upwork", "5-15€/h", "Admin, suivi clients, reporting"] },
        ],
      },
      {
        id: "2-8",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce marge :</strong> Charge 3x le coût freelance à ton client. Si ton freelance coûte 500€ pour livrer un projet, facture 1500€ minimum. La marge couvre ton temps de gestion, les révisions, et ta prise de risque.",
      },
      {
        id: "2-9",
        type: "heading",
        level: 2,
        text: "Comment déléguer sans perdre la qualité",
      },
      {
        id: "2-10",
        type: "text",
        html: "<p>La délégation qui foire, c'est toujours la même histoire : tu expliques le projet en 5 minutes, le freelance livre quelque chose d'approximatif, tu perds du temps à corriger, tu te dis que c'était plus vite de faire seul. Le problème, c'est pas le freelance — c'est le brief.</p><p>Une délégation réussie repose sur <strong>3 documents</strong> :</p><ul><li><strong>Le brief projet</strong> : contexte client, objectif final, contraintes techniques, exemples de ce que tu veux (et de ce que tu ne veux pas)</li><li><strong>La SOP de livraison</strong> : étapes exactes dans l'ordre, avec captures d'écran de référence</li><li><strong>La checklist de validation</strong> : les 5-10 critères que le livrable doit cocher avant que tu l'envoies au client</li></ul>",
      },
      {
        id: "2-11",
        type: "code",
        language: "text",
        filename: "template_brief_freelance.txt",
        code: `BRIEF PROJET — [Nom du projet]
================================
CLIENT : [Nom / secteur]
OBJECTIF : [Ce que l'automatisation doit accomplir en 1 phrase]
CONTEXTE : [Ce que le client fait, quel problème il a aujourd'hui]

PÉRIMÈTRE TECHNIQUE :
- Outil principal : [Make / n8n / Zapier / autre]
- Intégrations requises : [CRM, email, Slack, etc.]
- Volume estimé : [X opérations/jour]

LIVRABLES ATTENDUS :
1. [Livrable 1 — ex : scénario Make fonctionnel]
2. [Livrable 2 — ex : documentation d'utilisation]
3. [Livrable 3 — ex : vidéo de démo 5 min]

EXEMPLES DE RÉFÉRENCE :
- [Lien ou capture d'un projet similaire que tu as déjà livré]

CE QU'ON NE VEUT PAS :
- [Erreur classique à éviter]

DEADLINE : [Date]
BUDGET : [Montant fixe ou forfait]
POINT DE CONTACT : [Ton nom + méthode préférée (Slack / email)]`,
      },
      {
        id: "2-12",
        type: "heading",
        level: 2,
        text: "Le rituel de suivi hebdomadaire",
      },
      {
        id: "2-13",
        type: "text",
        html: "<p>Un freelance sans suivi, c'est une garantie de surprise en fin de sprint. Un suivi trop lourd, c'est du micro-management qui démotive. Le sweet spot : <strong>un point hebdomadaire de 20 minutes</strong>, structuré ainsi :</p><ol><li><strong>5 min</strong> — Ce qui a été livré cette semaine vs ce qui était prévu</li><li><strong>5 min</strong> — Les blocages rencontrés et comment les résoudre</li><li><strong>5 min</strong> — Ce qui est prévu la semaine prochaine</li><li><strong>5 min</strong> — Questions ouvertes / ajustements</li></ol><p>Utilise un canal Slack dédié par freelance + un doc Notion de suivi partagé. C'est ton seul outil de management nécessaire quand tu démarres.</p>",
      },
      {
        id: "2-14",
        type: "callout",
        variant: "warning",
        html: "<strong>Erreur fatale — Payer à la livraison finale uniquement.</strong> Divise toujours en 3 tranches : 30% au démarrage, 40% à mi-parcours (après validation d'une première version), 30% à la livraison finale validée. Ça protège les deux parties et maintient la motivation du freelance tout au long du projet.",
      },
      {
        id: "2-15",
        type: "separator",
        style: "line",
      },
      {
        id: "2-16",
        type: "quiz-inline",
        question: "Tu génères 3500€/mois stable depuis 2 mois. Tu as refusé 2 clients ce mois-ci faute de temps. Quelle est ta priorité immédiate ?",
        options: [
          { id: "a", text: "Augmenter tes prix pour réduire le nombre de clients et rester seul" },
          { id: "b", text: "Attendre d'atteindre 5000€/mois avant de recruter pour avoir plus de marge" },
          { id: "c", text: "Recruter un premier freelance exécutant pour les tâches de livraison que tu maîtrises" },
          { id: "d", text: "Créer du contenu pour attirer plus de clients en automatique" },
        ],
        correctId: "c",
        explanation: "Refuser des clients à 3500€/mois stable, c'est laisser de l'argent sur la table. C'est exactement le signal pour recruter. Augmenter les prix seul peut fonctionner, mais ça plafonne plus vite. La bonne réponse à la saturation, c'est la délégation — pas l'évitement.",
      },
      {
        id: "2-17",
        type: "checklist",
        title: "Checklist — Prêt à déléguer ?",
        items: [
          { id: "c1", text: "J'ai identifié la première tâche que je vais déléguer (la plus répétitive)" },
          { id: "c2", text: "J'ai créé un brief projet template réutilisable" },
          { id: "c3", text: "J'ai listé 3 plateformes où je vais chercher mon premier freelance" },
          { id: "c4", text: "J'ai calculé ma marge cible (tarif client / 3 = coût freelance max)" },
          { id: "c5", text: "J'ai prévu un point hebdomadaire de 20 min dans mon agenda" },
          { id: "c6", text: "J'ai structuré mon paiement en 3 tranches (30/40/30)" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Choisis la tâche que tu fais le plus souvent en ce moment (ex : construire un scénario Make, rédiger un prompt, configurer un chatbot). Écris un brief de 200 mots pour cette tâche comme si tu devais la confier à quelqu'un dès demain. Inclus : l'objectif, les étapes clés, un exemple de livrable attendu, et 2 critères de validation. Ce brief deviendra ton modèle de délégation numéro 1.</p>",
    quiz: [
      { type: "mcq", question: "À partir de quel seuil de revenus mensuels stables est-il recommandé de recruter son premier freelance ?", options: JSON.stringify(["Dès le premier client", "Plus de 3000€/mois stables pendant 2 mois", "À partir de 10K€/mois", "Dès que tu as un site web professionnel"]), correctAnswer: "Plus de 3000€/mois stables pendant 2 mois", explanation: "Le signal pour recruter est quand tu génères plus de 3000€/mois de façon stable pendant 2 mois consécutifs. Avant, tu n'as pas les marges pour absorber une mauvaise embauche." },
      { type: "true_false", question: "Il est recommandé de payer un freelance uniquement à la livraison finale du projet.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est une erreur fatale. Il faut toujours diviser en 3 tranches : 30% au démarrage, 40% à mi-parcours après validation, et 30% à la livraison finale. Cela protège les deux parties." },
      { type: "mcq", question: "Quelle est la règle de marge recommandée quand tu délègues à un freelance ?", options: JSON.stringify(["Facturer 1.5x le coût freelance au client", "Facturer 3x le coût freelance au client", "Facturer au même prix que le freelance plus 10%", "Facturer 5x le coût freelance au client"]), correctAnswer: "Facturer 3x le coût freelance au client", explanation: "La règle est de charger 3x le coût freelance au client. Si le freelance coûte 500€, tu factures 1500€ minimum. La marge couvre ton temps de gestion, les révisions et ta prise de risque." },
      { type: "true_false", question: "Le point de suivi hebdomadaire avec un freelance doit durer environ 20 minutes et être structuré en 4 parties.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le sweet spot est un point hebdomadaire de 20 minutes structuré : 5 min ce qui a été livré, 5 min les blocages, 5 min ce qui est prévu, 5 min questions ouvertes." },
      { type: "mcq", question: "Vous venez de recruter votre premier freelance pour livrer un chatbot à 1 500€. Le freelance vous coûte 500€. À mi-parcours, le livrable ne correspond pas du tout au brief. Comment gérez-vous la situation ?", options: JSON.stringify(["Vous payez le freelance en totalité et refaites le travail vous-même", "Vous retenez la 2ème tranche (40%), faites un point structuré sur les écarts avec le brief, et donnez des consignes claires pour corriger avant de continuer", "Vous rompez le contrat immédiatement sans payer", "Vous livrez le travail médiocre au client en espérant qu'il ne remarque pas"]), correctAnswer: "Vous retenez la 2ème tranche (40%), faites un point structuré sur les écarts avec le brief, et donnez des consignes claires pour corriger avant de continuer", explanation: "Le paiement en 3 tranches (30/40/30) protège exactement pour ce cas. La 2ème tranche n'est payée qu'après validation à mi-parcours. Un point structuré (ce qui est OK / ce qui doit changer / deadline) recadre le freelance sans conflit." },
    ],
  },
  {
    order: 3,
    module: 13,
    title: "Systématiser ton agence",
    slug: "systematiser-agence",
    duration: "25 min",
    description: "SOPs, templates, onboarding automatisé, CRM, facturation sans friction : construis les systèmes qui font tourner ton agence même quand tu n'es pas là.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Pourquoi les systèmes font la différence",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Une agence sans systèmes, c'est un emploi déguisé. Tu es indispensable à chaque étape, tu réinventes la roue à chaque client, et ton revenu s'arrête si tu t'arrêtes. Une agence avec des systèmes, c'est une machine : les clients entrent, les livrables sortent, les factures tombent — avec ou sans toi dans la boucle à chaque instant.</p><p>La différence entre un freelance solo à 3K€/mois et une agence à 10K€/mois, c'est rarement les compétences techniques. C'est <strong>la documentation, les process, et l'automatisation des frictions</strong>.</p>",
      },
      {
        id: "3-3",
        type: "heading",
        level: 2,
        text: "Les SOPs : ta bible opérationnelle",
      },
      {
        id: "3-4",
        type: "text",
        html: "<p>Une SOP (Standard Operating Procedure) est un document qui décrit <strong>comment faire une tâche récurrente, étape par étape</strong>, de façon si claire qu'une personne compétente mais qui ne connaît pas ton agence peut la suivre sans te déranger. C'est le document que tu aurais aimé avoir quand tu as commencé.</p><p>Tu as besoin d'une SOP pour chaque process que tu fais plus de 3 fois. Au minimum :</p><ul><li>SOP Onboarding client (du contrat signé au premier livrable)</li><li>SOP Livraison projet (de la réception du brief à la livraison finale)</li><li>SOP Prospection (de l'identification du prospect au closing)</li><li>SOP Facturation (de la validation du livrable au paiement encaissé)</li><li>SOP Offboarding / Upsell (du projet terminé à la prochaine proposition)</li></ul>",
      },
      {
        id: "3-5",
        type: "code",
        language: "text",
        filename: "SOP_onboarding_client.txt",
        code: `SOP — ONBOARDING CLIENT
Version : 1.0 | Mise à jour : [date]
================================

DÉCLENCHEUR : Contrat signé + acompte reçu

ÉTAPE 1 — J0 (Jour de signature)
□ Envoyer email de bienvenue (template "welcome_client.txt")
□ Créer espace client dans Notion (dupliquer template "client_workspace")
□ Inviter le client dans son espace Notion
□ Créer channel Slack #client-[nom] ou thread WhatsApp dédié
□ Programmer le kick-off meeting dans les 48h (Calendly)

ÉTAPE 2 — Kick-off meeting (J1-J2)
□ Envoyer questionnaire onboarding 24h avant le call (Typeform)
□ Préparer les accès nécessaires (liste dans template "accès_requis")
□ Mener le call selon le script "script_kickoff.txt" (45 min)
□ Envoyer compte-rendu dans les 2h après le call

ÉTAPE 3 — Setup technique (J2-J5)
□ Obtenir les accès (CRM, outils, APIs)
□ Documenter l'environnement dans l'espace Notion client
□ Partager la roadmap des 2 premières semaines

ÉTAPE 4 — Premier livrable intermédiaire (J7)
□ Livrer une version bêta ou un premier élément tangible
□ Recueillir le feedback dans les 48h
□ Ajuster si nécessaire

RESPONSABLE : [Ton nom / freelance désigné]
DURÉE TOTALE ESTIMÉE : 3-4h de travail sur J0 à J7`,
      },
      {
        id: "3-6",
        type: "heading",
        level: 2,
        text: "Ton stack d'outils minimum viable",
      },
      {
        id: "3-7",
        type: "comparison",
        headers: ["Besoin", "Outil recommandé", "Prix", "Ce que ça remplace"],
        rows: [
          { cells: ["CRM & suivi clients", "Notion + base de données", "Gratuit / 10€/mois", "Tableur Excel chaotique"] },
          { cells: ["Signature de contrats", "Docusign / Yousign", "25-30€/mois", "PDF par email + scan"] },
          { cells: ["Facturation automatisée", "Pennylane / Fresha / Dolibarr", "Gratuit → 30€/mois", "Factures Word manuelles"] },
          { cells: ["Prise de RDV", "Calendly / Cal.com", "Gratuit → 12€/mois", "Allers-retours email"] },
          { cells: ["Onboarding client", "Typeform + Notion", "0-25€/mois", "Email questionnaire manuel"] },
          { cells: ["Communication équipe", "Slack (plan gratuit)", "Gratuit", "Email + WhatsApp"] },
          { cells: ["Gestion de projets", "Notion / Trello", "Gratuit", "Post-its mentaux"] },
        ],
      },
      {
        id: "3-8",
        type: "callout",
        variant: "tip",
        html: "<strong>Budget stack total : 50-80€/mois</strong> pour une agence de 0 à 10K€/mois. Ne sobre pas sur les outils de facturation et de signature — les frictions administratives te coûtent bien plus en temps et en clients perdus.",
      },
      {
        id: "3-9",
        type: "heading",
        level: 2,
        text: "L'onboarding automatisé : zéro friction dès le premier contact",
      },
      {
        id: "3-10",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "Contrat signé",
            description: "Signature électronique → déclencheur automatique",
          },
          {
            id: "n2",
            label: "Email de bienvenue auto",
            description: "Make/n8n envoie l'email template + lien questionnaire Typeform",
          },
          {
            id: "n3",
            label: "Espace Notion créé",
            description: "Template dupliqué automatiquement avec le nom du client",
          },
          {
            id: "n4",
            label: "Kick-off booké",
            description: "Lien Calendly dans l'email → client choisit son créneau",
          },
          {
            id: "n5",
            label: "Questionnaire reçu",
            description: "Typeform → Notion (données client centralisées automatiquement)",
          },
          {
            id: "n6",
            label: "Facture d'acompte envoyée",
            description: "Pennylane crée et envoie la facture dès signature",
          },
        ],
      },
      {
        id: "3-11",
        type: "text",
        html: "<p>Ce flow s'implémente en <strong>2-3 heures sur Make</strong> avec des webhooks. Une fois en place, l'onboarding d'un nouveau client te prend 15 minutes au lieu de 2-3 heures. Sur 10 clients/an, tu récupères 20+ heures productives.</p>",
      },
      {
        id: "3-12",
        type: "heading",
        level: 2,
        text: "La facturation sans friction",
      },
      {
        id: "3-13",
        type: "text",
        html: "<p>La facturation manuelle tue les agences. Pas parce qu'elle est difficile, mais parce qu'on l'oublie, on la reporte, on ne relance pas assez vite — et la trésorerie en pâtit. Automatise le maximum :</p><ul><li><strong>Acompte 30%</strong> : envoyé automatiquement à la signature du contrat</li><li><strong>Solde 70%</strong> : envoyé automatiquement à la livraison finale (déclencheur manuel dans ton CRM)</li><li><strong>Relances</strong> : rappel J+7 et J+14 automatiques pour les factures impayées</li><li><strong>Récurrent</strong> : pour les retainers mensuels, facturation le 1er de chaque mois via Pennylane ou GoCardless</li></ul>",
      },
      {
        id: "3-14",
        type: "callout",
        variant: "info",
        html: "<strong>CGV et mentions légales :</strong> Intègre toujours tes Conditions Générales de Vente dans ton contrat. Délai de paiement 30 jours max, pénalités de retard 3x taux légal, clause de propriété intellectuelle. Un avocat spécialisé digital peut rédiger ce pack pour 300-500€ — ça vaut chaque centime.",
      },
      {
        id: "3-15",
        type: "separator",
        style: "space",
      },
      {
        id: "3-16",
        type: "quiz-inline",
        question: "Quelle est la définition correcte d'une SOP utile ?",
        options: [
          { id: "a", text: "Un document de 50 pages décrivant tous les process de l'entreprise" },
          { id: "b", text: "Une présentation PowerPoint pour les nouveaux freelances" },
          { id: "c", text: "Un guide étape par étape qu'une personne compétente externe peut suivre sans te déranger" },
          { id: "d", text: "Un tableau Excel de suivi des tâches en cours" },
        ],
        correctId: "c",
        explanation: "Une SOP n'a de valeur que si elle est utilisable par quelqu'un d'autre. Le test ultime : donne ta SOP à quelqu'un qui ne connaît pas ton agence et regarde s'il peut exécuter la tâche sans te poser de question. Si oui, ta SOP est bonne. Sinon, complète-la.",
      },
      {
        id: "3-17",
        type: "checklist",
        title: "Checklist — Les systèmes essentiels à mettre en place",
        items: [
          { id: "c1", text: "SOP Onboarding client rédigée (utilise le template ci-dessus)" },
          { id: "c2", text: "SOP Livraison projet rédigée" },
          { id: "c3", text: "Espace Notion client template créé et dupliquable" },
          { id: "c4", text: "Calendly (ou Cal.com) configuré pour les kick-offs" },
          { id: "c5", text: "Outil de facturation automatisé en place (Pennylane recommandé)" },
          { id: "c6", text: "Contrat type + CGV rédigés (au moins une version simple)" },
          { id: "c7", text: "Flow Make/n8n d'onboarding automatique planifié" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Prends ton prochain client (réel ou fictif). Simule son onboarding complet en rédigeant : (1) l'email de bienvenue (max 150 mots, chaleureux et pro), (2) les 5 premières étapes de ta SOP onboarding adaptées à ton offre, (3) la liste des accès que tu lui demanderas lors du kick-off. Ce n'est pas un exercice théorique — c'est le document que tu utiliseras pour ton prochain vrai client.</p>",
    quiz: [
      { type: "mcq", question: "Qu'est-ce qu'une SOP (Standard Operating Procedure) dans le contexte d'une agence IA ?", options: JSON.stringify(["Un logiciel de gestion de projet", "Un guide étape par étape qu'une personne externe peut suivre sans te déranger", "Un document marketing pour attirer des clients", "Un rapport financier mensuel"]), correctAnswer: "Un guide étape par étape qu'une personne externe peut suivre sans te déranger", explanation: "Une SOP est un document qui décrit comment faire une tâche récurrente, étape par étape, de façon si claire qu'une personne compétente mais qui ne connaît pas ton agence peut la suivre sans te déranger." },
      { type: "true_false", question: "Le budget total des outils pour une agence de 0 à 10K€/mois est généralement de 50 à 80€ par mois.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Le stack d'outils minimum viable (Notion, Calendly, facturation, signature, communication) coûte entre 50 et 80€/mois. Il ne faut pas lésiner sur les outils de facturation et de signature." },
      { type: "mcq", question: "Quel est le déclencheur de l'onboarding automatisé d'un nouveau client ?", options: JSON.stringify(["La première prise de contact par email", "Le contrat signé + acompte reçu", "La fin du projet précédent", "La publication d'un post LinkedIn"]), correctAnswer: "Le contrat signé + acompte reçu", explanation: "Le flow d'onboarding automatisé se déclenche à la signature du contrat et à la réception de l'acompte. Cela lance l'email de bienvenue, la création de l'espace Notion, la prise de RDV, etc." },
      { type: "true_false", question: "La différence entre un freelance à 3K€/mois et une agence à 10K€/mois tient principalement aux compétences techniques.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La différence est rarement les compétences techniques. C'est la documentation, les process et l'automatisation des frictions qui font la différence entre un freelance solo et une agence structurée." },
      { type: "mcq", question: "Un nouveau client vient de signer et payer l'acompte. Vous devez l'onboarder mais vous êtes en plein rush sur un autre projet. Comment gérez-vous la situation sans dégrader l'expérience client ?", options: JSON.stringify(["Vous lui dites d'attendre 2 semaines que vous finissiez l'autre projet", "Votre scénario Make d'onboarding automatique se déclenche : email de bienvenue, espace Notion créé, lien Calendly envoyé — le tout en 15 minutes sans intervention manuelle", "Vous déléguez l'onboarding à votre freelance sans processus défini", "Vous envoyez un email rapide et improvisez le reste plus tard"]), correctAnswer: "Votre scénario Make d'onboarding automatique se déclenche : email de bienvenue, espace Notion créé, lien Calendly envoyé — le tout en 15 minutes sans intervention manuelle", explanation: "L'onboarding automatisé passe de 2-3h manuelles à 15 min sans intervention. Le client reçoit immédiatement un accueil professionnel (email, espace projet, prise de RDV) même quand vous êtes occupé. C'est la différence entre un freelance solo et une agence structurée." },
    ],
  },
  {
    order: 4,
    module: 13,
    title: "Les revenus passifs : formations, templates, SaaS",
    slug: "revenus-passifs-formations-templates-saas",
    duration: "25 min",
    description: "Comment diversifier tes revenus au-delà du service client en créant des assets qui se vendent en dormant : templates, micro-formations, et micro-SaaS.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Pourquoi diversifier quand le service marche bien ?",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Le service client est la voie la plus rapide vers les premiers revenus. Mais il a une limite structurelle : <strong>tu échanges du temps contre de l'argent</strong>. Si tu stops, les revenus stopent. Une agence solide à 10K€/mois construite uniquement sur le service reste fragile — un grand client qui part, une maladie, et c'est la chute.</p><p>Les revenus complémentaires (templates, formations, SaaS) créent une couche de résilience ET amplifient ta crédibilité. Un client qui t'a acheté un template avant de te contacter arrive déjà convaincu. C'est le levier invisible.</p>",
      },
      {
        id: "4-3",
        type: "comparison",
        headers: ["Type de revenu", "Temps de création", "Potentiel mensuel", "Effort continu"],
        rows: [
          { cells: ["Service client", "Immédiat", "Illimité mais capé par ton temps", "Élevé (livraison continue)"] },
          { cells: ["Templates (Make, Notion, prompts)", "1-3 jours", "500-3000€/mois", "Faible (mise à jour trimestrielle)"] },
          { cells: ["Micro-formation vidéo", "1-3 semaines", "1000-5000€/mois", "Faible (SAV + mises à jour)"] },
          { cells: ["Micro-SaaS (outil spécialisé)", "1-3 mois", "2000-20K€/mois", "Moyen (maintenance + support)"] },
        ],
      },
      {
        id: "4-4",
        type: "heading",
        level: 2,
        text: "Les templates : l'asset le plus rapide à créer",
      },
      {
        id: "4-5",
        type: "text",
        html: "<p>Un template, c'est quelque chose que tu as déjà créé pour un client, packagé et revendu. Le travail est déjà fait. Tu documentes juste et tu mets en vente.</p><p><strong>Templates qui se vendent bien dans l'écosystème IA :</strong></p><ul><li>Scénarios Make/n8n pré-construits (ex : « Lead nurturing automatique pour coaches »)</li><li>Templates de prompts GPT thématiques (ex : « 50 prompts copywriting e-commerce »)</li><li>Workspace Notion pour agence IA (CRM + suivi projets + onboarding)</li><li>Templates d'emails de prospection IA (séquences testées)</li><li>Chatbot template pour secteur spécifique (immobilier, restaurant, cabinet conseil)</li></ul><p><strong>Où vendre :</strong> Gumroad (rapide), Lemon Squeezy (meilleur pour l'EU/TVA), Notion Market, ta propre page Framer/Webflow.</p><p><strong>Prix indicatifs :</strong> Template simple : 19-49€. Pack complet : 97-197€. Bundle secteur : 197-497€.</p>",
      },
      {
        id: "4-6",
        type: "callout",
        variant: "tip",
        html: "<strong>Le hack de validation rapide :</strong> Avant de créer un template, poste sur LinkedIn : « Je suis en train de créer [template X] pour [cible Y]. Qui serait intéressé ? Commente 'oui' ou DM moi. » Si tu as 20+ réactions en 24h, tu as la validation. Crée ensuite — jamais avant.",
      },
      {
        id: "4-7",
        type: "heading",
        level: 2,
        text: "La micro-formation : monétiser ton expertise",
      },
      {
        id: "4-8",
        type: "steps",
        steps: [
          {
            title: "Choisis un problème hyper-spécifique",
            description: "Pas 'Comment utiliser l'IA' mais 'Comment automatiser son SAV Shopify avec Make et GPT en 48h'. Plus c'est précis, plus ça se vend. La niche bat le général à chaque fois.",
          },
          {
            title: "Structure en 5-7 modules de 10-15 min",
            description: "Chaque module = un résultat tangible. Les gens ne paient pas pour des heures de vidéo, ils paient pour des transformations. Format recommandé : 1h30 de vidéo totale max, accompagnée de ressources téléchargeables.",
          },
          {
            title: "Enregistre avec Loom ou OBS",
            description: "Pas besoin d'un studio. Webcam + micro-casque correct + fond propre. La qualité du contenu prime largement sur la production. 80% des formations qui se vendent bien sont des enregistrements d'écran avec voix.",
          },
          {
            title: "Héberge sur Podia, Systeme.io ou Gumroad",
            description: "Systeme.io est le meilleur rapport qualité/prix en France (plan gratuit jusqu'à 2000€/mois de CA). Podia pour une expérience plus premium. Gumroad pour le plus simple et le plus rapide.",
          },
          {
            title: "Lance avec un prix d'early bird",
            description: "Première semaine : 50% de réduction pour tes premiers acheteurs. Ils valident le contenu, tu obtiens des témoignages, et la preuve sociale fait le reste. Remonte le prix ensuite.",
          },
        ],
      },
      {
        id: "4-9",
        type: "callout",
        variant: "info",
        html: "<strong>Projection réaliste pour une micro-formation :</strong> Formation à 197€. 10 ventes/mois (très atteignable avec 500+ abonnés LinkedIn actifs) = <strong>1970€/mois passifs</strong>. 30 ventes/mois avec une audience engagée = 5910€/mois. Ce n'est pas de la magie — c'est de la distribution.",
      },
      {
        id: "4-10",
        type: "heading",
        level: 2,
        text: "Le micro-SaaS : l'asset le plus puissant (et le plus exigeant)",
      },
      {
        id: "4-11",
        type: "text",
        html: "<p>Un micro-SaaS, c'est un petit outil web à abonnement qui résout un problème très précis. Avec les outils no-code actuels (Bubble, Softr, Glide + Make/n8n en backend), tu peux lancer un micro-SaaS fonctionnel en <strong>4 à 8 semaines sans dev</strong>.</p><p><strong>Exemples de micro-SaaS dans l'écosystème IA :</strong></p><ul><li>Générateur de propositions commerciales IA pour agences (abonnement 49€/mois)</li><li>Outil de création de chatbots sans code pour PME (abonnement 79€/mois)</li><li>Analyseur de leads IA pour commerciaux (abonnement 39€/mois)</li><li>Automatiseur de newsletters IA pour créateurs (abonnement 29€/mois)</li></ul><p><strong>Le modèle économique :</strong> 50 clients à 49€/mois = 2450€ MRR récurrent. 200 clients = 9800€ MRR. C'est scalable sans limite de temps.</p>",
      },
      {
        id: "4-12",
        type: "diagram",
        variant: "tree",
        nodes: [
          {
            id: "n1",
            label: "Revenus de ton agence IA",
            description: "La diversification optimale",
          },
          {
            id: "n2",
            label: "Service (70%)",
            description: "Projets + retainers clients — revenu principal et réactif",
          },
          {
            id: "n3",
            label: "Templates (10%)",
            description: "Vente passive, crédibilité, lead magnet qualifié",
          },
          {
            id: "n4",
            label: "Formation (10%)",
            description: "Monétisation de l'expertise, audience, autorité",
          },
          {
            id: "n5",
            label: "Micro-SaaS (10%)",
            description: "MRR récurrent, actif long terme, valorisation future",
          },
        ],
      },
      {
        id: "4-13",
        type: "callout",
        variant: "warning",
        html: "<strong>Piège à éviter :</strong> Ne commence PAS par le SaaS. La séquence correcte est : service → templates → formation → SaaS. Chaque étape valide ton audience et ta niche. Sauter directement au SaaS sans audience ni validation, c'est construire pour personne.",
      },
      {
        id: "4-14",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-15",
        type: "quiz-inline",
        question: "Quelle est la première chose à créer pour diversifier tes revenus quand tu es à 3000€/mois en service ?",
        options: [
          { id: "a", text: "Un micro-SaaS, car c'est le plus scalable" },
          { id: "b", text: "Une formation complète de 10h pour asseoir ton autorité" },
          { id: "c", text: "Un template basé sur quelque chose que tu as déjà livré à un client" },
          { id: "d", text: "Un podcast pour construire ton audience d'abord" },
        ],
        correctId: "c",
        explanation: "Le template est le point d'entrée idéal : tu recyclas un travail existant, tu testes la demande rapidement, et tu crées ta première preuve sociale de vente digitale. C'est 1-3 jours de travail pour un asset qui peut rapporter des mois. Le SaaS et la formation viennent après, une fois que tu as validé ta niche et ton audience.",
      },
      {
        id: "4-16",
        type: "checklist",
        title: "Checklist — Diversifier ses revenus",
        items: [
          { id: "c1", text: "J'ai identifié un livrable client que je pourrais packager en template" },
          { id: "c2", text: "J'ai validé l'intérêt pour ce template avant de le créer (post LinkedIn ou sondage)" },
          { id: "c3", text: "J'ai créé un compte Gumroad ou Lemon Squeezy (5 min)" },
          { id: "c4", text: "J'ai une idée de micro-formation sur un problème hyper-spécifique de ma niche" },
          { id: "c5", text: "J'ai noté l'idée de micro-SaaS que je lancerai dans 6 mois (même si c'est flou)" },
          { id: "c6", text: "Je comprends que les revenus passifs amplifient le service, ils ne le remplacent pas (au début)" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> En 30 minutes chrono, crée ton premier template vendable. Prends un prompt, un scénario Make, un Notion template ou une séquence email que tu utilises déjà. Mets-le en forme dans un fichier propre (PDF ou fichier téléchargeable), écris une description de 3 lignes qui explique ce que ça fait et pour qui, fixe un prix (entre 19 et 49€), et mets-le en ligne sur Gumroad. Pas besoin que ce soit parfait — le premier asset en ligne est toujours le plus difficile. Après, c'est du muscle.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la séquence correcte pour diversifier ses revenus en tant qu'agence IA ?", options: JSON.stringify(["SaaS → Formation → Templates → Service", "Service → Templates → Formation → SaaS", "Formation → Service → SaaS → Templates", "Templates → SaaS → Service → Formation"]), correctAnswer: "Service → Templates → Formation → SaaS", explanation: "La séquence correcte est : service d'abord (validation et revenus), puis templates (recyclage de travaux existants), puis formation (monétisation d'expertise), puis micro-SaaS (le plus exigeant). Chaque étape valide l'audience et la niche." },
      { type: "true_false", question: "Un micro-SaaS est le premier asset à créer dès qu'on atteint 3000€/mois en service.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "C'est un piège courant. Le premier asset à créer est un template basé sur un travail déjà livré à un client (1-3 jours de travail). Le SaaS vient en dernier dans la séquence de diversification." },
      { type: "mcq", question: "Quel est le prix indicatif recommandé pour un template simple vendu sur Gumroad ?", options: JSON.stringify(["1-5€", "19-49€", "200-500€", "1000€+"]), correctAnswer: "19-49€", explanation: "Les prix indicatifs sont : template simple 19-49€, pack complet 97-197€, bundle secteur 197-497€. Ces prix permettent un bon volume de ventes tout en valorisant le contenu." },
      { type: "true_false", question: "Pour valider l'intérêt d'un template, il est conseillé de le créer d'abord puis de demander des avis ensuite.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le hack de validation rapide est de poster sur LinkedIn AVANT de créer le template pour tester l'intérêt. Si tu obtiens 20+ réactions en 24h, tu as la validation. Il ne faut jamais créer avant de valider." },
      { type: "mcq", question: "Vous avez livré 5 chatbots pour des restaurants avec le même scénario Make. Un follower LinkedIn vous demande si vous vendez votre template. Quelle est la meilleure approche pour monétiser cet asset ?", options: JSON.stringify(["Vous envoyez le template gratuitement pour vous faire connaître", "Vous postez un teaser sur LinkedIn pour valider l'intérêt, et si vous obtenez 20+ réactions en 24h, vous packagez le template à 49€ sur Gumroad", "Vous créez immédiatement un SaaS complet autour de ce template", "Vous ignorez la demande car les templates ne rapportent rien"]), correctAnswer: "Vous postez un teaser sur LinkedIn pour valider l'intérêt, et si vous obtenez 20+ réactions en 24h, vous packagez le template à 49€ sur Gumroad", explanation: "Le hack de validation rapide : poster AVANT de créer pour tester l'intérêt. 20+ réactions en 24h = validation. Ensuite, packagez proprement le template que vous utilisez déjà (1-3 jours de travail) et vendez sur Gumroad. C'est du recyclage de travail déjà livré." },
    ],
  },
  {
    order: 5,
    module: 13,
    title: "Ton plan d'action à 90 jours",
    slug: "plan-action-90-jours",
    duration: "20 min",
    description: "Le plan semaine par semaine, les KPIs à suivre, les objectifs SMART, et tout ce qu'il faut pour sortir de cette formation avec une feuille de route qui tient debout.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "La formation n'est pas la fin — c'est le début",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p>Beaucoup de gens finissent une formation, se sentent bien, et reprennent leur vie d'avant. Le savoir sans exécution ne vaut rien. Ce que tu viens de faire sur ces 13 modules — comprendre l'IA, les automatisations, les offres, la prospection, les systèmes — tout ça ne devient réel que dans les <strong>90 prochains jours d'action</strong>.</p><p>Cette leçon est différente des autres. Il n'y a pas d'informations nouvelles à mémoriser. C'est un contrat avec toi-même. Lis-le, adapte-le à ta situation, et exécute.</p>",
      },
      {
        id: "5-3",
        type: "heading",
        level: 2,
        text: "Les KPIs à suivre chaque semaine",
      },
      {
        id: "5-4",
        type: "text",
        html: "<p>Ce qui n'est pas mesuré n'est pas géré. Voici les 5 indicateurs qui comptent vraiment au stade d'une agence en démarrage :</p>",
      },
      {
        id: "5-5",
        type: "comparison",
        headers: ["KPI", "Définition", "Objectif semaine 1-4", "Objectif semaine 5-12"],
        rows: [
          { cells: ["Messages de prospection envoyés", "Nombre de prises de contact ciblées par semaine", "20/semaine minimum", "30-50/semaine"] },
          { cells: ["Appels de découverte tenus", "Appels qualifiés avec prospects réels", "1-2/semaine", "3-5/semaine"] },
          { cells: ["Propositions commerciales envoyées", "Offres chiffrées envoyées après qualification", "1/semaine", "2-4/semaine"] },
          { cells: ["Taux de conversion proposition→client", "% des propositions qui signent", "Baseline à établir", "20-30% cible"] },
          { cells: ["Revenus encaissés", "Argent réellement reçu ce mois", "0 → 500€ mois 1", "Doubler chaque mois"] },
        ],
      },
      {
        id: "5-6",
        type: "callout",
        variant: "tip",
        html: "<strong>Suivi hebdomadaire :</strong> Chaque vendredi, ouvre ton tableau de bord (même un simple Notion) et renseigne tes 5 KPIs. Si un KPI est en dessous de l'objectif, pose-toi UNE seule question : qu'est-ce que je change la semaine prochaine ?",
      },
      {
        id: "5-7",
        type: "heading",
        level: 2,
        text: "Le plan semaine par semaine — Mois 1",
      },
      {
        id: "5-8",
        type: "steps",
        steps: [
          {
            title: "Semaine 1 — Fondations",
            description: "Finalise ton offre signature (1 phrase). Définis ta cible (1 secteur, 1 type d'entreprise). Configure ton outil de prise de RDV (Calendly). Rédige ton script de prospection. Objectif : 20 messages envoyés d'ici vendredi.",
          },
          {
            title: "Semaine 2 — Premier contact",
            description: "Continue la prospection (20 messages/jour). Tiens ton premier appel de découverte. Envoie ta première proposition commerciale. Crée ton espace Notion client template. Objectif : 1 proposition envoyée.",
          },
          {
            title: "Semaine 3 — Premier closing",
            description: "Relance les prospects des semaines 1-2. Continue la prospection. Tiens 2 appels de découverte. Objectif : 1 client signé OU 2 propositions en cours. Si pas de client encore : analyse ce qui bloque (offre ? prix ? cible ?).",
          },
          {
            title: "Semaine 4 — Premier livrable",
            description: "Si client signé : livrer le premier livrable avec excellence totale. Si pas encore signé : doubler la cadence de prospection, retravailler le script. Objectif fin du mois : 500-1000€ encaissés.",
          },
        ],
      },
      {
        id: "5-9",
        type: "heading",
        level: 2,
        text: "Le plan semaine par semaine — Mois 2 et 3",
      },
      {
        id: "5-10",
        type: "code",
        language: "text",
        filename: "plan_90_jours.txt",
        code: `MOIS 2 — OBJECTIF : 1500-3000€/mois
======================================
Semaine 5 :
  □ Demander témoignage au client du mois 1
  □ Publier 2 posts LinkedIn basés sur ton expérience client
  □ Continuer prospection (20/jour) + ajouter une source (ex : passer de LinkedIn à LinkedIn + email)
  □ Objectif : 2e client signé

Semaine 6 :
  □ Standardiser ta méthode de livraison (rédiger ta SOP livraison)
  □ Créer ton template de brief client
  □ Proposer un retainer mensuel à ton 1er client
  □ Objectif : 2 clients actifs simultanément

Semaine 7 :
  □ Tester une offre retainer (ex : 1200€/mois pour maintenance + 2 nouvelles automatisations)
  □ Automatiser le suivi de tes propositions commerciales (Make + email)
  □ Objectif : 2000€+ encaissés ce mois

Semaine 8 :
  □ Créer ton premier template vendable (voir leçon 4)
  □ Mettre en ligne sur Gumroad
  □ Analyser tes KPIs des 2 premiers mois et ajuster
  □ Objectif : 2500-3000€ encaissés ce mois

MOIS 3 — OBJECTIF : 3000-5000€/mois
======================================
Semaine 9 :
  □ Identifier ta spécialisation (quel secteur répond le mieux à tes offres ?)
  □ Adapter ton messaging pour ce secteur
  □ Prospecter uniquement dans ce secteur cette semaine
  □ Objectif : 1 nouveau client dans ta niche cible

Semaine 10 :
  □ Publier 3 posts LinkedIn ciblant ta niche (cas client, résultat, insight)
  □ Identifier ton premier freelance potentiel (Malt / réseau)
  □ Objectif : 3 clients actifs ou 3500€ encaissés

Semaine 11 :
  □ Briefer et tester ton premier freelance sur un projet réel
  □ Monter tes prix de 30% sur les nouvelles propositions
  □ Objectif : 4000€ encaissés

Semaine 12 :
  □ Faire un bilan complet des 90 jours (KPIs, apprentissages, ajustements)
  □ Définir tes objectifs pour les 90 jours suivants
  □ Célébrer — tu as accompli quelque chose que 95% des gens ne font jamais
  □ Objectif : 4000-5000€ encaissés`,
      },
      {
        id: "5-11",
        type: "heading",
        level: 2,
        text: "Tes objectifs SMART pour les 90 jours",
      },
      {
        id: "5-12",
        type: "text",
        html: "<p>Un objectif vague est un voeu pieux. Un objectif SMART est un engagement. Voici le format que tu dois utiliser pour chaque objectif des 90 prochains jours :</p><ul><li><strong>Spécifique</strong> : « Signer 3 clients » pas « avoir plus de clients »</li><li><strong>Mesurable</strong> : chiffré, avec une unité (€, clients, messages, appels)</li><li><strong>Atteignable</strong> : ambitieux mais réaliste (pas 10K€ dès le mois 1)</li><li><strong>Relevant</strong> : aligné avec ton palier actuel sur la roadmap</li><li><strong>Temporel</strong> : avec une deadline précise (J30, J60, J90)</li></ul>",
      },
      {
        id: "5-13",
        type: "code",
        language: "text",
        filename: "mes_objectifs_smart_90_jours.txt",
        code: `MES OBJECTIFS SMART — 90 JOURS
================================
J30 (fin mois 1) :
  → Envoyer 400 messages de prospection ciblés
  → Tenir 8 appels de découverte
  → Signer 1 client payant à minimum 500€
  → Encaisser 500-1000€

J60 (fin mois 2) :
  → Avoir 2 clients actifs simultanément
  → Générer 2000-3000€ encaissés ce mois
  → Avoir 1 témoignage client écrit ou vidéo
  → Publier 8 posts LinkedIn (2/semaine)
  → Avoir 1 template en vente (même à 19€)

J90 (fin mois 3) :
  → Avoir 3-4 clients actifs ou 2 retainers mensuels
  → Générer 4000-5000€ encaissés ce mois
  → Avoir testé 1 freelance sur un projet réel
  → Avoir une spécialisation sectorielle définie
  → Avoir récupéré le lien de 3 témoignages clients

Objectif financier global M1+M2+M3 :
  → Minimum : 6000€ de CA cumulé
  → Cible : 10000€ de CA cumulé
  → Ambitieux : 15000€ de CA cumulé`,
      },
      {
        id: "5-14",
        type: "heading",
        level: 2,
        text: "L'accountability : le multiplicateur invisible",
      },
      {
        id: "5-15",
        type: "text",
        html: "<p>L'accountability, c'est rendre des comptes à quelqu'un en dehors de toi. Les études montrent qu'on est <strong>65% plus susceptible d'atteindre un objectif</strong> si on le partage avec quelqu'un, et <strong>95% plus susceptible</strong> si on a des check-ins réguliers avec cette personne.</p><p>Options concrètes :</p><ul><li>Un partenaire d'accountability de la même formation (DM quelqu'un ici)</li><li>Un groupe privé (WhatsApp, Discord) avec 3-5 personnes au même stade</li><li>Un mentor qui a déjà fait ce chemin</li><li>Rendre public tes objectifs sur LinkedIn (le regard des autres comme levier de motivation)</li></ul>",
      },
      {
        id: "5-16",
        type: "callout",
        variant: "success",
        html: "<strong>Tu es à la fin de la formation. Et c'est maintenant que tout commence.</strong><br><br>Tu as les outils. Tu as les méthodes. Tu as la roadmap. La seule variable qui reste, c'est toi. Est-ce que dans 90 jours, tu regardes en arrière et tu te demandes pourquoi tu n'as pas commencé plus tôt — ou est-ce que tu es fier de ce que tu as construit ?<br><br>La réponse dépend de ce que tu fais dans les 24 prochaines heures. Commence maintenant.",
      },
      {
        id: "5-17",
        type: "separator",
        style: "dots",
      },
      {
        id: "5-18",
        type: "quiz-inline",
        question: "Quelle est la première action à faire dans les 24 heures suivant la fin de cette formation ?",
        options: [
          { id: "a", text: "Revoir tous les modules depuis le début pour être sûr d'avoir tout compris" },
          { id: "b", text: "Créer son site web et son logo pour paraître professionnel" },
          { id: "c", text: "Envoyer ses 20 premiers messages de prospection ciblés" },
          { id: "d", text: "Chercher des partenaires avant de prospecter" },
        ],
        correctId: "c",
        explanation: "L'action commerciale prime sur tout le reste au stade 0-1K€. Ton site, ton logo, ta marque — tout ça peut venir après ton premier client. Ce qui crée la dynamique, c'est le premier contact prospect envoyé. Les 24 premières heures après une formation sont celles où la motivation est au plus haut — utilise cette énergie pour prospecter, pas pour peaufiner.",
      },
      {
        id: "5-19",
        type: "checklist",
        title: "Checklist finale — Tu es prêt à démarrer",
        items: [
          { id: "c1", text: "J'ai écrit mes 3 objectifs SMART (J30, J60, J90) avec des chiffres précis" },
          { id: "c2", text: "J'ai identifié mon palier actuel sur la roadmap et ma priorité unique" },
          { id: "c3", text: "J'ai préparé mon script de prospection et ma liste de 50 prospects cibles" },
          { id: "c4", text: "J'ai configuré mon Calendly pour les appels de découverte" },
          { id: "c5", text: "J'ai trouvé au moins 1 partenaire d'accountability (ou je vais le chercher aujourd'hui)" },
          { id: "c6", text: "J'ai bloqué dans mon agenda les créneaux de prospection de la semaine 1" },
          { id: "c7", text: "J'enverrai mes 20 premiers messages dans les 24 prochaines heures" },
          { id: "c8", text: "Je sais que la formation était le début, pas la fin" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice final (et le plus important de toute la formation) :</strong> Ouvre un nouveau document. En haut, écris la date d'aujourd'hui et la date dans 90 jours. Puis complète ces 3 phrases :<br><br>(1) « Dans 90 jours, j'aurai généré ___€ de chiffre d'affaires avec mon agence IA. »<br>(2) « La seule chose qui pourrait m'empêcher d'y arriver est ___, et je vais l'éviter en faisant ___ dès cette semaine. »<br>(3) « Mon premier message de prospection part à [HEURE] aujourd'hui/demain. Il cible [TYPE D'ENTREPRISE] et dit [PREMIÈRE PHRASE]. »<br><br>Ensuite, ferme la formation et envoie ce premier message. C'est tout. Le reste suivra.</p>",
    quiz: [
      { type: "mcq", question: "Combien de messages de prospection par semaine sont recommandés pendant le premier mois du plan à 90 jours ?", options: JSON.stringify(["5 par semaine", "20 par semaine minimum", "50 par jour", "10 par mois"]), correctAnswer: "20 par semaine minimum", explanation: "L'objectif en semaine 1-4 est d'envoyer au minimum 20 messages de prospection ciblés par semaine. Ce volume augmente ensuite à 30-50 par semaine dans les semaines 5-12." },
      { type: "true_false", question: "Un objectif SMART doit être spécifique, mesurable, atteignable, relevant et temporel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "SMART signifie Spécifique (chiffré), Mesurable (avec une unité), Atteignable (ambitieux mais réaliste), Relevant (aligné avec ton palier actuel) et Temporel (avec une deadline précise)." },
      { type: "mcq", question: "Quel est l'objectif de CA cible pour le mois 3 du plan à 90 jours ?", options: JSON.stringify(["500-1000€", "1500-2000€", "4000-5000€", "10 000€"]), correctAnswer: "4000-5000€", explanation: "Le plan prévoit : mois 1 = 500-1000€, mois 2 = 2500-3000€, mois 3 = 4000-5000€. L'objectif global cible sur 3 mois est de 10 000€ de CA cumulé." },
      { type: "true_false", question: "Avoir un partenaire d'accountability avec des check-ins réguliers augmente significativement les chances d'atteindre un objectif.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Plusieurs études en psychologie comportementale montrent que le fait de s'engager publiquement et d'avoir des check-ins réguliers avec un partenaire augmente fortement les chances d'atteindre ses objectifs." },
      { type: "mcq", question: "Vous êtes à la fin du mois 1 de votre plan à 90 jours. Vous avez envoyé 80 messages de prospection, obtenu 4 réponses positives, fait 2 appels découverte, et signé 0 client. Votre ami dit que ça ne marche pas. Que concluez-vous de ces chiffres ?", options: JSON.stringify(["Votre ami a raison, il faut tout changer", "Vos chiffres sont dans la norme : le taux de réponse est bon (5%), il faut augmenter le volume de prospection et améliorer le taux de conversion des appels en propositions", "Vous devez baisser vos prix car les prospects ne signent pas", "Vous devriez arrêter la prospection et investir dans la publicité payante"]), correctAnswer: "Vos chiffres sont dans la norme : le taux de réponse est bon (5%), il faut augmenter le volume de prospection et améliorer le taux de conversion des appels en propositions", explanation: "5% de taux de réponse est dans la norme. Le problème est le volume (80 messages au lieu de 80-100 minimum) et le taux de conversion appels→propositions. En passant à 20+ messages/semaine et en améliorant le script d'appel, les résultats suivront. La prospection est un jeu de chiffres et de régularité." },
    ],
  },
];
