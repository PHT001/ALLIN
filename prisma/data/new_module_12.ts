function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_12_LESSONS = [
  {
    order: 1,
    module: 12,
    title: "Le process de livraison parfait",
    slug: "process-livraison-parfait",
    duration: "25 min",
    description: "De l'onboarding au go-live : comment structurer chaque projet pour livrer à temps, sans stress, et laisser une impression irréprochable.",
    content: blocks([
      {
        id: "1-1",
        type: "heading",
        level: 2,
        text: "Pourquoi un process de livraison change tout",
      },
      {
        id: "1-2",
        type: "text",
        html: "<p>La plupart des freelances et agences perdent leurs clients non pas parce que leur travail est mauvais, mais parce que le client ne <em>sait pas où on en est</em>. L'absence de structure crée de l'anxiété, des relances intempestives, et des conflits inutiles. Un bon process de livraison, c'est ce qui transforme une prestation correcte en expérience 5 étoiles.</p>",
      },
      {
        id: "1-3",
        type: "callout",
        variant: "info",
        html: "<strong>Le principe clé :</strong> Le client ne juge pas seulement le résultat final. Il juge <em>chaque interaction</em> pendant le projet. Un projet moyen livré avec un process exemplaire vaut plus qu'un chef-d'œuvre livré dans la confusion.",
      },
      {
        id: "1-4",
        type: "heading",
        level: 2,
        text: "Les 6 étapes du process parfait",
      },
      {
        id: "1-5",
        type: "steps",
        steps: [
          {
            title: "1. L'onboarding client (Jour 1)",
            description: "Dès la signature, envoie un email de bienvenue structuré : lien vers un formulaire d'onboarding (accès, identifiants, brief détaillé), invitation au workspace partagé (Notion/Linear), et la date du kickoff meeting. Le client doit avoir l'impression d'entrer dans une machine bien huilée.",
          },
          {
            title: "2. Le kickoff meeting (Jour 2-3)",
            description: "Appel de 45-60 min pour aligner tout le monde : objectifs business, personas cibles, contraintes techniques, jalons du projet, et processus de validation. Envoie le compte-rendu dans les 2h qui suivent. Ce doc devient la référence de tout le projet.",
          },
          {
            title: "3. Les jalons intermédiaires (Semaine 1-N)",
            description: "Découpe le projet en phases avec des livrables concrets à chaque étape. Ne jamais disparaître pendant 3 semaines pour réapparaître avec le résultat final. Chaque jalon = une validation = une opportunité de rassurer le client.",
          },
          {
            title: "4. Les livrables intermédiaires",
            description: "Partage des versions de travail (wireframes, maquettes, versions bêta) en expliquant ce qui est terminé, ce qui reste à faire, et ce que tu attends comme retour. Formate tes retours en questions précises, pas en présentation ouverte.",
          },
          {
            title: "5. La recette (Phase de validation finale)",
            description: "Présente la version finale dans un environnement de test. Fournis une grille de recette : liste exhaustive des points à valider avec case à cocher. Fixe un délai de retour (ex: 5 jours ouvrés). Au-delà, le projet est considéré validé.",
          },
          {
            title: "6. La mise en production et le handover",
            description: "Go-live planifié (jamais un vendredi). Remise des accès, documentation technique, tutoriel vidéo Loom si besoin. Email récapitulatif 'Projet livré' avec tout ce qui a été fait. C'est le moment de demander le témoignage.",
          },
        ],
      },
      {
        id: "1-6",
        type: "heading",
        level: 2,
        text: "La timeline type d'un projet (exemple : site web IA, 4 semaines)",
      },
      {
        id: "1-7",
        type: "diagram",
        variant: "timeline",
        nodes: [
          {
            id: "n1",
            label: "J+0 — Signature & onboarding",
            description: "Email de bienvenue, formulaire d'accès, invitation Notion, confirmation du kickoff",
          },
          {
            id: "n2",
            label: "J+2 — Kickoff meeting",
            description: "Appel 60 min, CR envoyé dans les 2h, jalons confirmés",
          },
          {
            id: "n3",
            label: "J+7 — Livrable #1 : Structure & wireframes",
            description: "Plan du site, arborescence, wireframes basse fidélité. Validation client sous 48h.",
          },
          {
            id: "n4",
            label: "J+14 — Livrable #2 : Maquettes & contenu",
            description: "Design haute fidélité, intégration du contenu, version bêta de l'IA. Feedback client.",
          },
          {
            id: "n5",
            label: "J+21 — Livrable #3 : Version complète",
            description: "Site complet en environnement de test, grille de recette envoyée",
          },
          {
            id: "n6",
            label: "J+26 — Corrections & validation finale",
            description: "Intégration des retours (1 round), validation client signée",
          },
          {
            id: "n7",
            label: "J+28 — Go-live & handover",
            description: "Mise en production, remise des accès, documentation, demande de témoignage",
          },
        ],
      },
      {
        id: "1-8",
        type: "heading",
        level: 2,
        text: "Le template d'email de bienvenue",
      },
      {
        id: "1-9",
        type: "code",
        language: "text",
        filename: "email-bienvenue-client.txt",
        code: `Objet : 🚀 Bienvenue dans le projet [Nom du projet] — prochaines étapes

Bonjour [Prénom],

Super nouvelle — le projet est officiellement lancé ! Voici ce qui se passe maintenant :

✅ ÉTAPE 1 — Remplis ce formulaire d'onboarding (5 min)
→ [Lien Typeform/Notion]
Il me permettra de récupérer tous les accès et informations nécessaires.

✅ ÉTAPE 2 — Rejoins notre espace de travail partagé
→ [Lien Notion/Linear]
C'est là que tu suivras l'avancement en temps réel.

✅ ÉTAPE 3 — Notre kickoff meeting
→ [Lien Calendly]
Je te propose ces créneaux : [Date 1] ou [Date 2].
Durée : 45-60 min en visio.

📅 CALENDRIER PRÉVISIONNEL
- Kickoff : [Date]
- Livrable #1 (wireframes) : [Date]
- Livrable #2 (version bêta) : [Date]
- Livraison finale : [Date]

Des questions ? Réponds directement à cet email.

À très vite,
[Ton prénom]

P.S. : Je travaille du lundi au vendredi, 9h-18h.
Les retours que tu me feras dans les 48h suivant chaque livrable
nous permettront de tenir le planning.`,
      },
      {
        id: "1-10",
        type: "heading",
        level: 2,
        text: "Le compte-rendu de kickoff : le document de référence",
      },
      {
        id: "1-11",
        type: "code",
        language: "text",
        filename: "template-CR-kickoff.txt",
        code: `# COMPTE-RENDU KICKOFF — [Nom du projet]
Date : [JJ/MM/AAAA] | Participants : [Noms]

## 1. CONTEXTE & OBJECTIFS
- Objectif principal : [ex: Lancer un chatbot IA pour réduire les tickets support de 40%]
- Objectif secondaire : [ex: Améliorer l'expérience utilisateur sur mobile]
- KPIs de succès : [ex: Taux de résolution automatique > 60% dans les 3 mois]

## 2. PÉRIMÈTRE DU PROJET (ce qui est INCLUS)
- [Fonctionnalité 1]
- [Fonctionnalité 2]
- [Fonctionnalité 3]

## 3. HORS PÉRIMÈTRE (ce qui N'EST PAS inclus)
- [Élément exclu 1]
- [Élément exclu 2]

## 4. JALONS & PLANNING
| Jalon | Description | Date | Responsable |
|-------|-------------|------|-------------|
| J1 | Wireframes | [Date] | [Prestataire] |
| J2 | Version bêta | [Date] | [Prestataire] |
| J3 | Recette | [Date] | [Client] |
| J4 | Go-live | [Date] | [Les deux] |

## 5. PROCESSUS DE VALIDATION
- Les retours doivent être fournis dans les [X] jours ouvrés.
- Les retours sont consolidés en un seul document (pas d'emails multiples).
- 1 round de corrections inclus par jalon. Corrections supplémentaires : devis additionnel.

## 6. CONTACTS & COMMUNICATION
- Point de contact client : [Nom, email, téléphone]
- Outil de communication : [Email / Notion / Slack]
- Réunions de suivi : [ex: Chaque vendredi, 15 min en visio]

## 7. ACCÈS REÇUS ✅ / EN ATTENTE ⏳
- ✅ Accès hébergeur
- ⏳ Accès CRM

---
Document validé par : _________________ Date : _________`,
      },
      {
        id: "1-12",
        type: "callout",
        variant: "tip",
        html: "<strong>Astuce pro :</strong> Envoie le CR de kickoff en demandant une confirmation écrite par email ('Peux-tu me confirmer que ce document reflète bien notre accord ?'). Cette validation écrite protège les deux parties et évite les 'ah mais j'avais compris que...' 3 semaines plus tard.",
      },
      {
        id: "1-13",
        type: "heading",
        level: 2,
        text: "La grille de recette : rendre la validation simple et formelle",
      },
      {
        id: "1-14",
        type: "code",
        language: "text",
        filename: "grille-recette.txt",
        code: `# GRILLE DE RECETTE — [Nom du projet]
Version testée : [URL ou fichier]
Date limite de retour : [JJ/MM/AAAA]

INSTRUCTIONS : Pour chaque point, note ✅ (validé), ❌ (à corriger), ou ⏭ (non testé).
Si ❌, décris le problème dans la colonne "Commentaire".

## FONCTIONNEL
[ ] La page d'accueil s'affiche correctement
[ ] Le formulaire de contact envoie bien les emails
[ ] Le chatbot répond aux 5 questions-types testées
[ ] Les liens internes fonctionnent
[ ] Le paiement en ligne est opérationnel (test en mode sandbox)

## CONTENU
[ ] Les textes sont conformes au brief validé
[ ] Les images/vidéos s'affichent sans erreur
[ ] Les coordonnées sont correctes
[ ] Les mentions légales sont présentes

## PERFORMANCE & COMPATIBILITÉ
[ ] Testé sur Chrome, Firefox, Safari
[ ] Testé sur mobile (iOS + Android)
[ ] Temps de chargement < 3 secondes

## SIGNATURE DE VALIDATION
En signant ce document, le client valide la version livrée.
Toute modification demandée après signature fera l'objet d'un devis.

Signature client : _________________ Date : _________`,
      },
      {
        id: "1-15",
        type: "separator",
        style: "dots",
      },
      {
        id: "1-16",
        type: "callout",
        variant: "success",
        html: "<strong>Résultat attendu :</strong> Avec ce process, tes clients reçoivent une confirmation toutes les semaines que le projet avance. Résultat : zéro relance anxieuse, zéro conflit sur 'ce qu'on s'était dit', et une livraison finale qui ressemble à une fête plutôt qu'à un soulagement.",
      },
      {
        id: "1-17",
        type: "quiz-inline",
        question: "Quelle est la règle d'or pour la grille de recette ?",
        options: [
          { id: "a", text: "La remplir toi-même pour gagner du temps" },
          { id: "b", text: "La faire valider par le client avec une date limite et une clause de validation tacite au-delà" },
          { id: "c", text: "Ne la faire qu'à la toute fin du projet" },
          { id: "d", text: "La remettre en version papier uniquement" },
        ],
        correctId: "b",
        explanation: "La grille de recette avec date limite et validation tacite te protège juridiquement et pousse le client à se mobiliser. Sans ça, la phase de recette peut s'étirer indéfiniment.",
      },
      {
        id: "1-18",
        type: "checklist",
        title: "Checklist : mon process de livraison est en place",
        items: [
          { id: "c1", text: "J'ai un template d'email de bienvenue prêt à personnaliser" },
          { id: "c2", text: "J'ai un formulaire d'onboarding (Typeform, Notion form ou Google Form)" },
          { id: "c3", text: "J'ai un template de CR de kickoff avec périmètre et hors-périmètre" },
          { id: "c4", text: "Je découpe chaque projet en jalons avec dates précises" },
          { id: "c5", text: "J'ai une grille de recette avec clause de validation tacite" },
          { id: "c6", text: "Je planifie les go-live en début de semaine (jamais le vendredi)" },
          { id: "c7", text: "J'envoie un email de clôture avec récapitulatif et demande de témoignage" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Prends ton prochain projet (réel ou fictif) et construis son planning complet en utilisant le template de timeline vu dans ce module. Définis les 3-5 jalons avec leurs dates, le contenu de chaque livrable, et le délai de retour client. Crée le formulaire d'onboarding correspondant sur Notion ou Typeform. Durée estimée : 45 min.</p>",
    quiz: [
      { type: "mcq", question: "Combien d'étapes comporte le process de livraison parfait présenté dans cette leçon ?", options: JSON.stringify(["3 étapes : planification, développement, livraison", "6 étapes : onboarding, kickoff, jalons, livrables, recette, mise en production", "4 étapes : devis, développement, test, go-live", "2 étapes : développement et livraison"]), correctAnswer: "6 étapes : onboarding, kickoff, jalons, livrables, recette, mise en production", explanation: "Le process parfait comprend 6 étapes structurées : l'onboarding client (J1), le kickoff meeting (J2-3), les jalons intermédiaires, les livrables intermédiaires, la recette (validation finale), et la mise en production avec handover." },
      { type: "true_false", question: "Il est recommandé de planifier les mises en production (go-live) le vendredi pour avoir le week-end comme marge de sécurité.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il ne faut jamais faire un go-live le vendredi. Si un problème survient, personne n'est disponible pour le résoudre pendant le week-end. Les mises en production se planifient en début de semaine." },
      { type: "mcq", question: "Quel est le rôle principal de la grille de recette dans le process de livraison ?", options: JSON.stringify(["Vérifier que le prestataire a bien travaillé", "Fournir une liste exhaustive de points à valider avec une date limite et une clause de validation tacite", "Remplacer le cahier des charges initial", "Permettre au client de demander des modifications gratuites"]), correctAnswer: "Fournir une liste exhaustive de points à valider avec une date limite et une clause de validation tacite", explanation: "La grille de recette avec date limite et validation tacite protège juridiquement les deux parties et pousse le client à se mobiliser. Au-delà du délai, le projet est considéré validé, ce qui évite que la phase de recette s'étire indéfiniment." },
      { type: "true_false", question: "Le compte-rendu de kickoff doit être envoyé dans les 2 heures suivant l'appel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Envoyer le CR dans les 2h qui suivent le kickoff montre le professionnalisme et la réactivité. Ce document devient la référence de tout le projet et doit être validé par écrit par le client pour éviter les malentendus." },
      { type: "mcq", question: "Pourquoi faut-il découper le projet en jalons intermédiaires plutôt que de tout livrer à la fin ?", options: JSON.stringify(["Pour facturer plus cher au client", "Pour montrer au client qu'on travaille et éviter de disparaître pendant des semaines", "Pour pouvoir changer de technologie en cours de route", "Pour ralentir le projet volontairement"]), correctAnswer: "Pour montrer au client qu'on travaille et éviter de disparaître pendant des semaines", explanation: "Chaque jalon est une validation et une opportunité de rassurer le client. Ne jamais disparaître pendant 3 semaines pour réapparaître avec le résultat final : cela crée de l'anxiété et des relances intempestives." },
    ],
  },
  {
    order: 2,
    module: 12,
    title: "Gérer les attentes et éviter les conflits",
    slug: "gerer-attentes-eviter-conflits",
    duration: "20 min",
    description: "Communication proactive, scope creep, dire non sans froisser, et transformer chaque demande hors-périmètre en opportunité commerciale.",
    content: blocks([
      {
        id: "2-1",
        type: "heading",
        level: 2,
        text: "Le scope creep : le tueur silencieux de ta rentabilité",
      },
      {
        id: "2-2",
        type: "text",
        html: "<p>Le <em>scope creep</em>, c'est quand un projet grossit en dehors de ce qui était prévu, sans que le budget suive. 'On pourrait ajouter juste un petit truc…' Multiplié par 15 demandes au fil du projet, tu te retrouves à avoir travaillé le double pour le même prix. C'est la principale cause de burn-out et de projets non rentables.</p>",
      },
      {
        id: "2-3",
        type: "callout",
        variant: "warning",
        html: "<strong>Stat terrain :</strong> 70% des dépassements de budget en agence viennent de demandes hors-périmètre non facturées. Pas parce que le client est de mauvaise foi — souvent parce que le périmètre n'était pas clairement défini dès le départ.",
      },
      {
        id: "2-4",
        type: "heading",
        level: 2,
        text: "La communication proactive : couper les problèmes dans l'œuf",
      },
      {
        id: "2-5",
        type: "steps",
        steps: [
          {
            title: "Le point de suivi hebdomadaire",
            description: "Chaque vendredi (ou lundi), envoie un update en 5 lignes : ce qui a été fait cette semaine, ce qui sera fait la semaine prochaine, les points bloquants (s'il y en a), et la confirmation que le planning tient. Ça prend 10 minutes et évite 80% des emails 'où en êtes-vous ?'.",
          },
          {
            title: "Annoncer les mauvaises nouvelles tôt",
            description: "Si tu prends du retard, dis-le immédiatement avec la nouvelle date et la raison. Ne jamais attendre la date limite pour prévenir. Un client informé est un client qui peut s'adapter. Un client surpris le jour J devient un client en colère.",
          },
          {
            title: "Contextualiser chaque livrable",
            description: "Quand tu envoies quelque chose à valider, explique toujours : 'Voici ce que j'ai fait, pourquoi j'ai fait ce choix, et voilà les 3 questions précises sur lesquelles j'ai besoin de ton retour.' Ça guide le client et évite les retours vagues et inutilisables.",
          },
        ],
      },
      {
        id: "2-6",
        type: "code",
        language: "text",
        filename: "email-update-hebdomadaire.txt",
        code: `Objet : [Projet X] — Point hebdomadaire du [Date]

Bonjour [Prénom],

Voici le point rapide de la semaine :

✅ CE QUI A ÉTÉ FAIT
- [Tâche 1 terminée]
- [Tâche 2 terminée]

🔄 EN COURS / SEMAINE PROCHAINE
- [Tâche en cours — livraison prévue le X]
- [Prochaine étape]

📅 PLANNING
Le projet est sur les rails. Prochaine étape importante : [Jalon] le [Date].

⚠️ POINTS EN ATTENTE DE TA PART (si applicable)
- [Ce dont j'ai besoin de toi pour débloquer X]

Des questions ? N'hésite pas.
À la semaine prochaine,
[Prénom]`,
      },
      {
        id: "2-7",
        type: "heading",
        level: 2,
        text: "Le cahier des charges : ton bouclier contractuel",
      },
      {
        id: "2-8",
        type: "text",
        html: "<p>Un bon cahier des charges (CDC) n'est pas un document bureaucratique — c'est ce qui te permet de dire non avec élégance. Il doit définir très précisément : les fonctionnalités incluses, le nombre de pages/écrans/automations, le nombre de rounds de corrections, les délais de retour client, et tout ce qui est explicitement exclu.</p>",
      },
      {
        id: "2-9",
        type: "comparison",
        headers: ["CDC faible (problèmes garantis)", "CDC solide (conflit impossible)"],
        rows: [
          {
            cells: [
              "'Un site web avec plusieurs pages'",
              "'Un site de 5 pages (Accueil, Services, À propos, Blog, Contact)'",
            ],
          },
          {
            cells: [
              "'Un chatbot IA'",
              "'Un chatbot formé sur 3 documents PDF fournis par le client, répondant en français, intégré via widget sur le site'",
            ],
          },
          {
            cells: [
              "'Des corrections incluses'",
              "'1 round de corrections par jalon, dans les 5 jours ouvrés suivant la livraison'",
            ],
          },
          {
            cells: [
              "Pas de mention du hors-périmètre",
              "'Hors périmètre : développement mobile natif, intégrations CRM tierces, rédaction de contenu'",
            ],
          },
          {
            cells: [
              "Pas de délai de validation",
              "'Validation tacite si aucun retour sous 5 jours ouvrés'",
            ],
          },
        ],
      },
      {
        id: "2-10",
        type: "heading",
        level: 2,
        text: "Dire non poliment : les scripts qui fonctionnent",
      },
      {
        id: "2-11",
        type: "code",
        language: "text",
        filename: "scripts-dire-non.txt",
        code: `--- SCRIPT 1 : Demande hors-périmètre simple ---

"Super idée ! Ça n'était pas prévu dans notre périmètre initial,
mais je peux tout à fait ajouter ça. Je te prépare un devis
complémentaire rapidement — je pense que ça représente [X] heures
de travail. Tu veux que j'intègre ça dans le planning actuel
ou qu'on le traite en phase 2 ?"

→ Tu n'es pas en train de dire non. Tu dis oui, mais avec un prix.

--- SCRIPT 2 : Refonte complète d'un livrable validé ---

"Je comprends que tu aies changé d'avis sur la direction.
Comme le design a été validé lors de notre échange du [date],
une refonte complète représente un nouveau cycle de travail.
Je peux te faire un devis pour cette évolution — mais je ne
peux pas l'intégrer dans le budget et planning actuels sans
impacter la date de livraison. On fait comment ?"

→ Tu rappelles la validation, tu proposes une solution, tu remets le choix dans ses mains.

--- SCRIPT 3 : Client qui déborde sur les canaux de communication ---

"Pour que je puisse suivre correctement toutes tes demandes
et ne rien rater, je te propose de centraliser tout dans
[Notion/email/Linear]. Les messages WhatsApp, je les lis,
mais je ne peux pas les intégrer dans mon workflow.
C'est OK pour toi ?"

→ Tu poses une règle sans agressivité.

--- SCRIPT 4 : Client qui demande des modifications à la dernière minute ---

"Je vois ta demande. Pour bien faire les choses et ne pas
introduire de bugs à J-2 du go-live, je préfère intégrer
ça proprement après la mise en ligne. Je note dans ton contrat
de maintenance. Ça te convient ?"

→ Tu reportes sans refuser.`,
      },
      {
        id: "2-12",
        type: "heading",
        level: 2,
        text: "Le devis complémentaire : transformer les imprévus en CA",
      },
      {
        id: "2-13",
        type: "callout",
        variant: "tip",
        html: "<strong>Mindset shift :</strong> Une demande hors-périmètre n'est pas un problème — c'est une opportunité de vente. Le client qui demande 'une petite chose en plus' t'a déjà dit qu'il a confiance en toi. Ton job : chiffrer rapidement et proposer. 80% du temps, il dit oui.",
      },
      {
        id: "2-14",
        type: "code",
        language: "text",
        filename: "template-devis-complementaire.txt",
        code: `Objet : Devis complémentaire #[Numéro] — [Description courte]

Bonjour [Prénom],

Suite à ta demande du [date] concernant [description de la demande],
voici le devis correspondant :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEVIS COMPLÉMENTAIRE #[XXX]
Projet : [Nom du projet principal]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRESTATION DEMANDÉE
[Description précise de ce qui est inclus dans ce devis]

DÉTAIL
• [Tâche 1] ............ [X]h × [TJM]€ = [X]€
• [Tâche 2] ............ [X]h × [TJM]€ = [X]€

TOTAL HT : [X]€
TVA 20% : [X]€
TOTAL TTC : [X]€

DÉLAI D'EXÉCUTION : [X] jours ouvrés après validation
IMPACT SUR LE PLANNING ACTUEL : [Aucun / Décalage de X jours]

Pour valider ce devis, réponds simplement "OK" à cet email.

Cordialement,
[Prénom]`,
      },
      {
        id: "2-15",
        type: "separator",
        style: "line",
      },
      {
        id: "2-16",
        type: "callout",
        variant: "success",
        html: "<strong>À retenir :</strong> La gestion des attentes n'est pas une contrainte administrative — c'est une compétence commerciale. Les meilleurs prestataires ne sont pas ceux qui disent jamais non. Ce sont ceux qui savent toujours <em>comment</em> dire non tout en proposant une alternative rentable.",
      },
      {
        id: "2-17",
        type: "quiz-inline",
        question: "Un client validé te demande d'ajouter une fonctionnalité non prévue au contrat. Quelle est la meilleure réaction ?",
        options: [
          { id: "a", text: "Refuser poliment pour ne pas dériver du périmètre" },
          { id: "b", text: "Faire la modification gratuitement pour garder le client content" },
          { id: "c", text: "Chiffrer la demande et envoyer un devis complémentaire en la présentant comme une bonne idée" },
          { id: "d", text: "Ignorer la demande jusqu'à la fin du projet" },
        ],
        correctId: "c",
        explanation: "Dire non sans alternative crée de la frustration. Accepter sans facturer nuit à ta rentabilité. La bonne réaction : valoriser la demande, la chiffrer rapidement, et proposer. C'est du CA en plus sur un client déjà acquis.",
      },
      {
        id: "2-18",
        type: "checklist",
        title: "Checklist : ma gestion des attentes est solide",
        items: [
          { id: "c1", text: "Mon CDC définit précisément le périmètre inclus ET exclu" },
          { id: "c2", text: "Mon contrat inclut le nombre de rounds de corrections et le délai de retour" },
          { id: "c3", text: "J'envoie un point hebdomadaire proactif à chaque client actif" },
          { id: "c4", text: "J'ai les scripts pour gérer les demandes hors-périmètre" },
          { id: "c5", text: "J'ai un template de devis complémentaire prêt à l'emploi" },
          { id: "c6", text: "Je centralise toute communication client sur un seul canal" },
          { id: "c7", text: "Je préviens immédiatement en cas de retard (avant la date limite)" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Reprends le dernier projet où tu as senti que ça dérivait (ou imagine un scénario typique). Identifie les 3 moments où une meilleure communication aurait évité le problème. Écris le texte exact que tu aurais dû envoyer à chaque moment en utilisant les templates du module. Durée estimée : 30 min.</p>",
    quiz: [
      { type: "mcq", question: "Selon la leçon, quel pourcentage des dépassements de budget en agence vient de demandes hors-périmètre non facturées ?", options: JSON.stringify(["30%", "50%", "70%", "90%"]), correctAnswer: "70%", explanation: "70% des dépassements de budget en agence viennent de demandes hors-périmètre non facturées. Souvent pas par mauvaise foi du client, mais parce que le périmètre n'était pas clairement défini dès le départ dans le cahier des charges." },
      { type: "true_false", question: "Quand un client demande une fonctionnalité hors-périmètre, la meilleure réaction est de refuser poliment pour ne pas dériver.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Refuser crée de la frustration. La bonne réaction est de valoriser la demande, la chiffrer rapidement en devis complémentaire, et proposer. C'est du CA en plus sur un client déjà acquis. 80% du temps, le client accepte." },
      { type: "mcq", question: "Quelle est la différence clé entre un CDC faible et un CDC solide pour un chatbot IA ?", options: JSON.stringify(["Le CDC faible est plus court", "Le CDC solide précise exactement le nombre de documents, la langue et le mode d'intégration", "Le CDC faible est gratuit", "Le CDC solide coûte plus cher à produire"]), correctAnswer: "Le CDC solide précise exactement le nombre de documents, la langue et le mode d'intégration", explanation: "Un CDC faible dit 'Un chatbot IA'. Un CDC solide dit 'Un chatbot formé sur 3 documents PDF fournis par le client, répondant en français, intégré via widget sur le site'. Cette précision empêche tout conflit sur le périmètre." },
      { type: "true_false", question: "Si tu prends du retard sur un projet, il vaut mieux attendre le jour de la deadline pour prévenir le client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Il faut annoncer les mauvaises nouvelles immédiatement, avec la nouvelle date et la raison. Un client informé peut s'adapter. Un client surpris le jour J devient un client en colère. Ne jamais attendre la date limite pour prévenir." },
      { type: "mcq", question: "Comment transformer une demande client de dernière minute (J-2 du go-live) en opportunité ?", options: JSON.stringify(["Accepter et travailler le week-end pour l'intégrer", "Refuser catégoriquement car c'est trop tard", "Proposer de l'intégrer proprement après la mise en ligne dans le contrat de maintenance", "Ignorer la demande jusqu'après la livraison"]), correctAnswer: "Proposer de l'intégrer proprement après la mise en ligne dans le contrat de maintenance", explanation: "Plutôt que de risquer d'introduire des bugs à J-2, on propose d'intégrer la modification proprement après le go-live dans le contrat de maintenance. On ne refuse pas, on reporte intelligemment." },
    ],
  },
  {
    order: 3,
    module: 12,
    title: "Les outils de gestion de projet",
    slug: "outils-gestion-de-projet",
    duration: "20 min",
    description: "Notion, Linear ou Trello : comment choisir, configurer, et utiliser ces outils pour gérer plusieurs projets sans te noyer — et donner au client une visibilité en temps réel.",
    content: blocks([
      {
        id: "3-1",
        type: "heading",
        level: 2,
        text: "Pourquoi un outil de gestion de projet est non-négociable",
      },
      {
        id: "3-2",
        type: "text",
        html: "<p>Gérer ses projets par email et par mémoire, ça marche jusqu'à 2 projets. Au-delà, tu oublies des tâches, tu perds du temps à chercher des informations, et ton client a l'impression que tu improvises. Un bon outil de PM ne te rend pas bureaucrate — il te rend <em>prévisible</em>, ce qui est la qualité numéro 1 qu'un client attend de son prestataire.</p>",
      },
      {
        id: "3-3",
        type: "heading",
        level: 2,
        text: "Choisir l'outil adapté à ta situation",
      },
      {
        id: "3-4",
        type: "comparison",
        headers: ["Outil", "Idéal pour", "Points forts", "Limite"],
        rows: [
          {
            cells: [
              "Notion",
              "Agences 1-5 personnes, projets complexes, documentation",
              "Tout-en-un (wiki + PM + CRM), très flexible, excellent pour partager avec le client",
              "Peut devenir un désordre si mal structuré au départ",
            ],
          },
          {
            cells: [
              "Linear",
              "Projets tech/dev, équipes qui livrent en sprints",
              "Ultra rapide, conçu pour les devs, excellent pour tracker les bugs",
              "Moins adapté aux projets créatifs ou aux clients non-tech",
            ],
          },
          {
            cells: [
              "Trello",
              "Débutants, petits projets, clients qui veulent simplicité",
              "Simplicité maximale, gratuit, zéro courbe d'apprentissage",
              "Limité pour les projets complexes ou les équipes > 3 personnes",
            ],
          },
          {
            cells: [
              "Asana",
              "Équipes > 5, projets multi-clients avec dépendances",
              "Excellent pour les timelines et les dépendances inter-tâches",
              "Payant, over-kill pour les freelances solo",
            ],
          },
        ],
      },
      {
        id: "3-5",
        type: "callout",
        variant: "tip",
        html: "<strong>Recommandation :</strong> Commence avec <strong>Notion</strong>. C'est l'outil le plus polyvalent pour une agence IA solo ou en petite équipe. Il peut servir à la fois de workspace interne ET d'espace client. Une fois maîtrisé, tu peux tout gérer depuis un seul endroit.",
      },
      {
        id: "3-6",
        type: "heading",
        level: 2,
        text: "Setup Notion : la structure qui tient à l'échelle",
      },
      {
        id: "3-7",
        type: "steps",
        steps: [
          {
            title: "Page principale : l'hub de ton agence",
            description: "Crée une page 'AGENCE HUB' avec des liens vers : CRM clients, Projets en cours, Templates, Finances, Ressources. C'est ta tour de contrôle. Tout part de là.",
          },
          {
            title: "Database Clients (CRM simple)",
            description: "Une base de données avec : Nom client, Statut (Prospect/Actif/Terminé/Archivé), Chiffre d'affaires, Contact, Date de début, Prochain renouvellement, Lien vers son espace projet. Vues filtrées : 'Clients actifs', 'Renouvellements ce mois', 'Prospects chauds'.",
          },
          {
            title: "Database Tâches avec vue Kanban",
            description: "Colonnes : Backlog > À faire cette semaine > En cours > En attente de validation > Terminé. Propriétés : Client, Projet, Priorité, Date d'échéance, Temps estimé. Vue Calendrier pour voir les deadlines en un coup d'œil.",
          },
          {
            title: "Espace client partagé (par projet)",
            description: "Pour chaque projet, crée un sous-espace partagé avec le client : Brief validé, Planning avec statuts, Livrables à télécharger, Zone de commentaires/feedback, Accès transmis. Le client peut voir l'avancement sans t'envoyer d'email.",
          },
          {
            title: "Section Templates",
            description: "Stocke tous tes templates : email de bienvenue, CR de kickoff, grille de recette, devis complémentaire, email de clôture. Copier-coller en un clic au lieu de recréer à chaque fois.",
          },
        ],
      },
      {
        id: "3-8",
        type: "code",
        language: "text",
        filename: "structure-notion-agence.txt",
        code: `📁 AGENCE HUB
├── 📊 CRM Clients (Database)
│   ├── Vue : Clients actifs
│   ├── Vue : Pipeline prospects
│   └── Vue : Renouvellements à venir
│
├── ✅ Tâches & Projets (Database)
│   ├── Vue Kanban : Toutes les tâches
│   ├── Vue Calendrier : Deadlines
│   └── Vue Liste : Par client
│
├── 💼 Projets (un dossier par client)
│   ├── 📋 [Client A] — Site IA
│   │   ├── Brief & CDC validé
│   │   ├── Planning & jalons
│   │   ├── Livrables
│   │   └── 🔗 [PARTAGÉ AVEC LE CLIENT]
│   └── 📋 [Client B] — Chatbot
│
├── 📝 Templates
│   ├── Email bienvenue
│   ├── CR Kickoff
│   ├── Grille de recette
│   ├── Devis complémentaire
│   └── Email de clôture
│
├── 💰 Finances
│   ├── Devis envoyés
│   ├── Factures
│   └── MRR tracker
│
└── 📚 Ressources
    ├── Prompts IA favoris
    ├── Fournisseurs & outils
    └── Formation continue`,
      },
      {
        id: "3-9",
        type: "heading",
        level: 2,
        text: "Linear : pour les projets techniques",
      },
      {
        id: "3-10",
        type: "text",
        html: "<p>Si tu développes des apps ou des outils IA complexes, Linear est supérieur à Notion pour le tracking technique. Son modèle de cycles (sprints de 2 semaines), ses statuts personnalisables et sa rapidité d'interface en font le meilleur outil pour les projets dev. Configure un workspace par client, utilise les labels pour catégoriser (Bug, Feature, Amélioration), et intègre-le avec GitHub pour tracker les commits automatiquement.</p>",
      },
      {
        id: "3-11",
        type: "heading",
        level: 2,
        text: "Le template de suivi de projet universel",
      },
      {
        id: "3-12",
        type: "code",
        language: "text",
        filename: "template-suivi-projet.txt",
        code: `# SUIVI PROJET — [Nom du projet]
Client : [Nom] | Budget : [X]€ | Début : [Date] | Fin prévue : [Date]

## STATUT GLOBAL
🟢 Sur les rails  /  🟡 Attention  /  🔴 Problème

Dernière mise à jour : [Date]
Prochaine action : [Quoi] le [Quand]

## JALONS
| # | Jalon | Date prévue | Statut | Date réelle |
|---|-------|-------------|--------|-------------|
| 1 | Kickoff | [Date] | ✅ | [Date] |
| 2 | Wireframes | [Date] | ✅ | [Date] |
| 3 | Version bêta | [Date] | 🔄 | — |
| 4 | Recette | [Date] | ⏳ | — |
| 5 | Go-live | [Date] | ⏳ | — |

## LOG DES ÉCHANGES
| Date | Type | Résumé | Suite à donner |
|------|------|--------|----------------|
| [Date] | Email | Envoi brief | — |
| [Date] | Appel | Kickoff meeting | Envoyer CR |
| [Date] | Demande | Modification X | Devis complémentaire |

## ACCÈS & CREDENTIALS
(Stocker dans un gestionnaire de mots de passe, pas ici)
- Hébergeur : ✅ Reçu
- CMS : ✅ Reçu
- API clés : ⏳ En attente

## DEVIS COMPLÉMENTAIRES
| # | Description | Montant | Statut |
|---|-------------|---------|--------|
| DC-01 | [Description] | [X]€ | Validé |

## FACTURATION
| Facture | Montant | Date | Payée |
|---------|---------|------|-------|
| F-001 | [X]€ (acompte) | [Date] | ✅ |
| F-002 | [X]€ (solde) | [Date] | ⏳ |`,
      },
      {
        id: "3-13",
        type: "heading",
        level: 2,
        text: "Communication client dans l'outil",
      },
      {
        id: "3-14",
        type: "callout",
        variant: "info",
        html: "<strong>Règle d'or :</strong> Choisis UN seul canal de communication par client et tiens-t'y. Soit l'email, soit Notion, soit Slack — mais pas les trois. Chaque client qui te contacte sur WhatsApp à 22h est un client dont tu n'as pas clarifié les règles de communication au kickoff.",
      },
      {
        id: "3-15",
        type: "diagram",
        variant: "flow",
        nodes: [
          {
            id: "n1",
            label: "Demande client (n'importe quel canal)",
            description: "WhatsApp, email, appel, message Notion...",
          },
          {
            id: "n2",
            label: "Tu centralises dans Notion/Linear",
            description: "Crée une tâche, ajoute le contexte, la priorité et la deadline",
          },
          {
            id: "n3",
            label: "Tu réponds au client",
            description: "'J'ai bien noté ta demande, je l'ai intégrée dans notre planning. Tu peux suivre l'avancement ici : [lien]'",
          },
          {
            id: "n4",
            label: "Tu traites dans ton workflow",
            description: "La tâche suit son chemin normal dans ton Kanban",
          },
          {
            id: "n5",
            label: "Tu notifies le client quand c'est fait",
            description: "Mise à jour automatique via Notion ou email manuel",
          },
        ],
      },
      {
        id: "3-16",
        type: "separator",
        style: "space",
      },
      {
        id: "3-17",
        type: "quiz-inline",
        question: "Tu travailles seul(e) sur 4 projets simultanément. Quel setup est le plus efficace ?",
        options: [
          { id: "a", text: "Un outil différent par projet pour s'adapter à chaque client" },
          { id: "b", text: "Un seul workspace Notion centralisé avec une database par type (clients, tâches, projets)" },
          { id: "c", text: "Des feuilles Excel par projet pour plus de contrôle" },
          { id: "d", text: "Gérer par email et mémoire pour rester agile" },
        ],
        correctId: "b",
        explanation: "Un workspace centralisé te donne une vue d'ensemble immédiate sur tous tes projets. Les databases croisées (tâches liées aux clients, factures liées aux projets) t'évitent les doublons et les oublis. C'est la fondation qui te permet de scaler.",
      },
      {
        id: "3-18",
        type: "checklist",
        title: "Checklist : mon setup de gestion de projet est opérationnel",
        items: [
          { id: "c1", text: "J'ai un workspace Notion (ou Linear) configuré avec ma structure d'agence" },
          { id: "c2", text: "J'ai une database clients avec les vues filtrées essentielles" },
          { id: "c3", text: "Chaque projet actif a son espace de suivi avec jalons et statuts" },
          { id: "c4", text: "J'ai un espace partagé avec chaque client actif" },
          { id: "c5", text: "Tous mes templates sont stockés dans Notion (emails, CR, grilles)" },
          { id: "c6", text: "J'ai défini un seul canal de communication par client" },
          { id: "c7", text: "Mon tracker financier (devis, factures) est à jour" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Crée ton workspace Notion d'agence en suivant la structure vue dans ce module. Configure les 3 databases essentielles (Clients, Tâches, Projets) avec les propriétés et vues décrites. Importe un projet existant ou fictif pour tester le setup. Temps estimé : 60-90 min (investissement ponctuel, gain de temps permanent).</p>",
    quiz: [
      { type: "mcq", question: "Quel outil est recommandé comme point de départ pour une agence IA solo ou en petite équipe ?", options: JSON.stringify(["Linear pour sa rapidité", "Asana pour ses dépendances", "Notion pour sa polyvalence (workspace interne ET espace client)", "Trello pour sa simplicité"]), correctAnswer: "Notion pour sa polyvalence (workspace interne ET espace client)", explanation: "Notion est l'outil le plus polyvalent : il sert à la fois de workspace interne (CRM, tâches, finances) et d'espace client partagé. Une fois maîtrisé, tout se gère depuis un seul endroit, ce qui est la fondation pour scaler." },
      { type: "true_false", question: "Il est préférable d'utiliser un outil de gestion de projet différent pour chaque client afin de s'adapter à ses préférences.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Utiliser un outil différent par projet multiplie la complexité et fait perdre la vue d'ensemble. Un seul workspace centralisé avec une database par type (clients, tâches, projets) est beaucoup plus efficace pour gérer plusieurs projets simultanément." },
      { type: "mcq", question: "Quelles sont les colonnes du Kanban recommandé pour la database Tâches ?", options: JSON.stringify(["À faire → En cours → Terminé", "Backlog → À faire cette semaine → En cours → En attente de validation → Terminé", "Urgent → Important → Normal → En attente", "Nouveau → Assigné → En cours → Résolu"]), correctAnswer: "Backlog → À faire cette semaine → En cours → En attente de validation → Terminé", explanation: "Ce Kanban en 5 colonnes permet de distinguer le backlog général, les tâches priorisées pour la semaine, le travail en cours, et les éléments qui attendent un retour client. La colonne 'En attente de validation' est cruciale pour ne pas oublier les dépendances client." },
      { type: "true_false", question: "Gérer ses projets par email et par mémoire fonctionne bien tant qu'on a moins de 5 projets en parallèle.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Gérer par email et par mémoire ne fonctionne que jusqu'à 2 projets. Au-delà, on oublie des tâches, on perd du temps à chercher des informations, et le client a l'impression qu'on improvise. Un outil de PM est non-négociable." },
      { type: "mcq", question: "Quelle est la règle d'or concernant les canaux de communication avec les clients ?", options: JSON.stringify(["Être disponible sur tous les canaux pour être réactif", "Choisir un seul canal de communication par client et s'y tenir", "Utiliser WhatsApp pour les urgences et email pour le reste", "Laisser le client choisir le canal qu'il préfère à chaque message"]), correctAnswer: "Choisir un seul canal de communication par client et s'y tenir", explanation: "Un seul canal par client évite de perdre des informations dispersées entre WhatsApp, email, Slack et Notion. Chaque client qui contacte sur WhatsApp à 22h est un client dont on n'a pas clarifié les règles de communication au kickoff." },
    ],
  },
  {
    order: 4,
    module: 12,
    title: "Transformer un client en ambassadeur",
    slug: "transformer-client-ambassadeur",
    duration: "20 min",
    description: "Over-deliver intelligemment, collecter des témoignages qui convertissent, créer un programme de parrainage, et proposer des upsells au bon moment.",
    content: blocks([
      {
        id: "4-1",
        type: "heading",
        level: 2,
        text: "Le client satisfait ne recommande pas — le client étonné, oui",
      },
      {
        id: "4-2",
        type: "text",
        html: "<p>Un client satisfait pense : 'J'ai eu ce pour quoi j'ai payé.' C'est bien, mais ça ne suffit pas pour générer du bouche-à-oreille. Un client <em>étonné</em> pense : 'Je ne m'attendais pas à ça.' C'est lui qui parle de toi à son réseau. La différence entre les deux ? L'over-deliver — donner un peu plus que ce qui était prévu, au bon moment.</p>",
      },
      {
        id: "4-3",
        type: "heading",
        level: 2,
        text: "L'over-deliver intelligent : créer de la surprise sans se ruiner",
      },
      {
        id: "4-4",
        type: "callout",
        variant: "info",
        html: "<strong>Principe :</strong> L'over-deliver ne signifie pas travailler gratuitement. Il s'agit d'<em>insights</em> inattendus, de petites attentions, ou d'un livrable bonus à faible coût pour toi mais à haute valeur perçue pour le client.",
      },
      {
        id: "4-5",
        type: "steps",
        steps: [
          {
            title: "Le rapport d'analyse bonus",
            description: "À la livraison, joins un document d'une page : 'Ce que j'ai observé sur ton site/projet et 3 recommandations pour aller plus loin.' Ça te prend 20 minutes avec l'IA, et le client a l'impression d'avoir un consultant stratégique, pas juste un prestataire.",
          },
          {
            title: "La vidéo de walkthrough",
            description: "Enregistre une vidéo Loom de 5-10 min qui présente ce qui a été livré, explique les choix techniques, et montre comment utiliser l'outil. Les clients adorent ça. Coût : 10 minutes de ton temps. Valeur perçue : énorme.",
          },
          {
            title: "Le bonus surprise au go-live",
            description: "Ajoute une petite fonctionnalité non demandée mais évidente : une page 404 personnalisée, un favicon aux couleurs de la marque, un email de bienvenue automatique. Mentionne-le dans l'email de livraison : 'En bonus, j'ai aussi ajouté...' C'est ce dont le client parlera.",
          },
          {
            title: "Le suivi post-livraison à J+14",
            description: "'Comment tu vis avec le projet 2 semaines après le go-live ? Tu as des questions ?' 99% des prestataires disparaissent après la livraison. Ce seul email te met dans le top 1% et est souvent le déclencheur d'un prochain projet ou d'une recommandation.",
          },
        ],
      },
      {
        id: "4-6",
        type: "heading",
        level: 2,
        text: "Demander des témoignages qui convertissent",
      },
      {
        id: "4-7",
        type: "text",
        html: "<p>Un témoignage vague ('Super prestataire, je recommande !') ne convertit pas. Un témoignage spécifique avec des résultats chiffrés ('Mon taux de conversion a augmenté de 23% en 6 semaines') convertit. La différence vient de comment tu poses la question.</p>",
      },
      {
        id: "4-8",
        type: "code",
        language: "text",
        filename: "email-demande-temoignage.txt",
        code: `Objet : Une petite question avant qu'on referme le projet 🙏

Bonjour [Prénom],

Super content qu'on ait pu livrer [projet] ensemble !

Je t'écris pour te demander un service qui m'aidera beaucoup :
un court témoignage sur notre collaboration.

Pour t'aider à le formuler, voilà 3 questions auxquelles
tu peux répondre (pas besoin de toutes les traiter) :

1. Quel était ton problème/besoin avant de me contacter ?
2. Qu'est-ce que tu as le plus apprécié dans notre façon de travailler ?
3. Y a-t-il des résultats concrets que tu peux mesurer
   (gain de temps, augmentation de conversions, taux de réponse...) ?

Si tu veux, réponds juste à ces questions par email et je
m'occupe de mettre en forme le témoignage — tu n'auras
plus qu'à valider.

Ça prend 5 minutes et ça m'aide vraiment. Merci d'avance !

[Prénom]

P.S. : Si tu préfères me laisser un avis sur Google / LinkedIn,
le lien est ici → [lien direct]`,
      },
      {
        id: "4-9",
        type: "callout",
        variant: "tip",
        html: "<strong>Hack :</strong> Propose de <em>rédiger toi-même</em> le témoignage à partir des réponses du client, en lui soumettant pour validation. Les clients adorent ça car ça leur prend 2 minutes. Et toi, tu t'assures d'obtenir un texte qui mentionne les bons mots-clés pour ta cible.",
      },
      {
        id: "4-10",
        type: "heading",
        level: 2,
        text: "Le programme de parrainage : ton canal d'acquisition le moins cher",
      },
      {
        id: "4-11",
        type: "code",
        language: "text",
        filename: "email-programme-parrainage.txt",
        code: `Objet : Un deal pour toi si tu me recommandes 👋

Bonjour [Prénom],

J'espère que [le projet livré] tourne bien !

Je développe mon agence et le bouche-à-oreille est
mon meilleur canal. Du coup, j'ai mis en place
quelque chose pour mes clients satisfaits :

🤝 MON PROGRAMME DE PARRAINAGE

Pour chaque personne que tu me recommandes
et qui signe un projet :
→ Tu reçois [X]% de la prestation en bon d'avoir
   (déductible sur ta prochaine facture ou versé en cash)
→ Ton filleul obtient [X]% de réduction sur son premier projet

Aucune démarche compliquée : il te suffit de mettre
ton contact en copie de ton email de présentation,
ou de lui donner ton lien de parrainage :
→ [lien ou code : TON_PRENOM-AMI]

Des questions ? Réponds directement à cet email.

Merci de faire partie de l'aventure,
[Prénom]`,
      },
      {
        id: "4-12",
        type: "heading",
        level: 2,
        text: "L'upsell naturel : proposer plus au bon moment",
      },
      {
        id: "4-13",
        type: "comparison",
        headers: ["Mauvais moment pour upseller", "Bon moment pour upseller"],
        rows: [
          {
            cells: [
              "Pendant la phase de recette (le client est stressé)",
              "À J+14 après le go-live (le client voit les premiers résultats)",
            ],
          },
          {
            cells: [
              "Quand un problème vient d'être résolu (le client est soulagé, pas enthousiaste)",
              "Quand le client te fait un compliment spontané",
            ],
          },
          {
            cells: [
              "En ajoutant l'upsell dans une facture sans en parler avant",
              "Dans une conversation naturelle lors d'un point de suivi",
            ],
          },
          {
            cells: [
              "En proposant une prestation générique",
              "En identifiant un besoin spécifique observé pendant le projet",
            ],
          },
        ],
      },
      {
        id: "4-14",
        type: "code",
        language: "text",
        filename: "scripts-upsell-naturel.txt",
        code: `--- UPSELL : Maintenance après livraison ---

"Maintenant que le site est en ligne, tu vas avoir besoin
de quelqu'un pour les mises à jour, la surveillance des
performances et les petites évolutions. J'ai un contrat
de maintenance à [X]€/mois qui couvre tout ça.
Tu veux que je t'envoie le détail ?"

--- UPSELL : Module complémentaire ---

"En travaillant sur ton chatbot, j'ai remarqué que
tu n'as pas de séquence email automatique pour
re-engager les prospects qui n'ont pas répondu.
C'est quelque chose que je peux mettre en place
en 2 jours pour environ [X]€. Ça t'intéresse ?"

--- UPSELL : Résultats à J+30 ---

"Tu m'as dit que le chatbot a traité 847 conversations
ce mois — c'est excellent ! J'ai une idée pour aller
encore plus loin : on pourrait connecter ça à ton CRM
pour qualifier automatiquement les leads. Ça doublerait
la valeur de chaque conversation. 15 min en appel
pour t'expliquer ?"`,
      },
      {
        id: "4-15",
        type: "separator",
        style: "dots",
      },
      {
        id: "4-16",
        type: "callout",
        variant: "success",
        html: "<strong>L'effet flywheel :</strong> Over-deliver → Client étonné → Témoignage puissant → Programme de parrainage → Nouveaux clients → Upsell → Revenus récurrents. Chaque étape alimente la suivante. Un client bien traité ne vaut pas son contrat initial — il vaut potentiellement 3x ce montant sur 2 ans.",
      },
      {
        id: "4-17",
        type: "quiz-inline",
        question: "Quel type de témoignage est le plus efficace pour convertir de nouveaux clients ?",
        options: [
          { id: "a", text: "'Super expérience, je recommande vivement !'" },
          { id: "b", text: "'Très professionnel et réactif.'" },
          { id: "c", text: "'Mon chatbot répond à 73% des questions sans intervention humaine. J'ai économisé 15h/semaine de support client en 3 mois.'" },
          { id: "d", text: "'Bonne collaboration, le projet a été livré dans les délais.'" },
        ],
        correctId: "c",
        explanation: "Les témoignages avec des chiffres concrets et un avant/après sont 3 à 5x plus efficaces que les témoignages génériques. Ils permettent au prospect de se projeter avec des résultats similaires et de justifier la dépense auprès de sa direction.",
      },
      {
        id: "4-18",
        type: "checklist",
        title: "Checklist : mon système de fidélisation est actif",
        items: [
          { id: "c1", text: "J'ai identifié 1-2 petites attentions bonus à intégrer dans chaque livraison" },
          { id: "c2", text: "J'envoie systématiquement un email de suivi à J+14 après chaque go-live" },
          { id: "c3", text: "J'ai un template d'email de demande de témoignage prêt" },
          { id: "c4", text: "J'ai un programme de parrainage avec une commission claire" },
          { id: "c5", text: "J'ai un lien de parrainage trackable par client" },
          { id: "c6", text: "Je planifie mes upsells après les jalons positifs, pas pendant les phases de stress" },
          { id: "c7", text: "Mes témoignages mentionnent des résultats chiffrés" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Contacte 2 anciens clients avec l'email de demande de témoignage du module. Pour chacun, personnalise les 3 questions en fonction du projet réalisé. En parallèle, rédige le texte de ton programme de parrainage et fixe le montant de la commission. Si tu n'as pas encore de clients, prépare ces templates prêts à l'emploi pour ton premier projet. Durée estimée : 45 min.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la différence entre un client satisfait et un client qui recommande ?", options: JSON.stringify(["Le client satisfait recommande plus souvent", "Le client satisfait pense 'j'ai eu ce pour quoi j'ai payé' tandis que le client étonné par l'over-deliver parle de toi à son réseau", "Il n'y a aucune différence", "Le client qui recommande est toujours celui qui a payé le plus cher"]), correctAnswer: "Le client satisfait pense 'j'ai eu ce pour quoi j'ai payé' tandis que le client étonné par l'over-deliver parle de toi à son réseau", explanation: "Un client satisfait a obtenu ce qu'il attendait, point. C'est le client étonné, celui qui a reçu un peu plus que prévu (l'over-deliver), qui va spontanément parler de toi à son réseau et générer du bouche-à-oreille." },
      { type: "true_false", question: "Un témoignage vague comme 'Super prestataire, je recommande !' est efficace pour convertir de nouveaux clients.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Les témoignages vagues ne convertissent pas. Un témoignage spécifique avec des résultats chiffrés ('Mon taux de conversion a augmenté de 23% en 6 semaines') est 3 à 5x plus efficace car il permet au prospect de se projeter." },
      { type: "mcq", question: "Quel est le meilleur moment pour proposer un upsell à un client ?", options: JSON.stringify(["Pendant la phase de recette quand le client est stressé", "À J+14 après le go-live quand le client voit les premiers résultats positifs", "Immédiatement après avoir résolu un problème technique", "En ajoutant l'upsell directement dans la facture"]), correctAnswer: "À J+14 après le go-live quand le client voit les premiers résultats positifs", explanation: "J+14 après le go-live est le moment idéal : le client vit avec le projet, constate les résultats, et est dans un état d'esprit positif. Éviter les phases de stress (recette) ou les moments post-problème." },
      { type: "true_false", question: "Il est recommandé de rédiger toi-même le témoignage à partir des réponses du client, puis de le lui soumettre pour validation.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Proposer de rédiger le témoignage soi-même est un hack efficace : le client n'a plus qu'à valider (2 minutes de son temps), et toi tu t'assures d'obtenir un texte qui mentionne les bons mots-clés et résultats chiffrés pour ta cible." },
      { type: "mcq", question: "Quel est l'effet flywheel décrit dans la leçon pour transformer un client en ambassadeur ?", options: JSON.stringify(["Livrer → Facturer → Prospecter → Recommencer", "Over-deliver → Client étonné → Témoignage → Parrainage → Nouveaux clients → Upsell → Revenus récurrents", "Publicité → Leads → Vente → Livraison → Satisfaction", "Prospection → Devis → Signature → Livraison → Facturation"]), correctAnswer: "Over-deliver → Client étonné → Témoignage → Parrainage → Nouveaux clients → Upsell → Revenus récurrents", explanation: "Chaque étape du flywheel alimente la suivante : l'over-deliver crée la surprise, qui génère des témoignages puissants, qui alimentent le parrainage, qui apporte de nouveaux clients, sur lesquels on peut upseller pour créer des revenus récurrents." },
    ],
  },
  {
    order: 5,
    module: 12,
    title: "Créer des revenus récurrents (maintenance & SaaS)",
    slug: "revenus-recurrents-maintenance-saas",
    duration: "25 min",
    description: "Contrats de maintenance, hébergement, mises à jour, monitoring, support : comment construire un MRR stable qui t'affranchit de la course aux nouveaux projets.",
    content: blocks([
      {
        id: "5-1",
        type: "heading",
        level: 2,
        text: "Pourquoi le MRR change ta vie d'entrepreneur",
      },
      {
        id: "5-2",
        type: "text",
        html: "<p>Sans revenus récurrents, ton agence ressemble à un hamster dans une roue : tu cours en permanence après le prochain projet pour payer le mois suivant. Avec un MRR (Monthly Recurring Revenue) de 2 000€, tu te réveilles chaque 1er du mois avec une base garantie. Avec 5 000€ de MRR, tu peux te permettre de choisir tes projets. C'est le différenciel entre travailler <em>pour</em> l'argent et travailler <em>avec</em> l'argent.</p>",
      },
      {
        id: "5-3",
        type: "callout",
        variant: "info",
        html: "<strong>Objectif réaliste :</strong> 10 clients à 300€/mois = 3 000€ MRR. Avec tes outils IA, gérer 10 contrats de maintenance ne représente que 2-3 jours de travail par mois. Le reste du temps est disponible pour de nouveaux projets ou pour scaler.",
      },
      {
        id: "5-4",
        type: "heading",
        level: 2,
        text: "Les 4 piliers du contrat de maintenance",
      },
      {
        id: "5-5",
        type: "steps",
        steps: [
          {
            title: "1. Hébergement & Infrastructure",
            description: "Tu gères l'hébergement de tous tes clients sur tes propres serveurs (VPS Hetzner, DigitalOcean, Vercel Pro...). Coût réel : 5-15€/mois/client. Tu factures 50-100€/mois. Marge brute : 70-85%. Tu contrôles l'environnement, tu assures la continuité, et tu es le point de contact unique.",
          },
          {
            title: "2. Mises à jour & Sécurité",
            description: "Mises à jour des CMS (WordPress, Webflow), des dépendances npm, des APIs IA (nouveaux modèles disponibles), des règles de sécurité. Avec tes scripts automatisés, ça prend 30 min/mois par client. Valeur perçue par le client : énorme (il ne veut pas se faire hacker).",
          },
          {
            title: "3. Monitoring & Alertes",
            description: "Surveillance de la disponibilité (uptime), des performances (Core Web Vitals), des erreurs 404, des formulaires qui ne fonctionnent plus. Outils : UptimeRobot (gratuit), StatusCake, ou BetterStack. Tu envoies un rapport mensuel au client. Il se sent pris en charge sans rien faire.",
          },
          {
            title: "4. Support & Petites évolutions",
            description: "Un quota d'heures de support inclus par mois (ex: 1h pour le forfait de base, 3h pour le forfait avancé). Modifications texte, ajout d'une page, correction de bugs. Au-delà du quota : facturation au taux horaire normal.",
          },
        ],
      },
      {
        id: "5-6",
        type: "heading",
        level: 2,
        text: "Les 3 niveaux de forfait maintenance",
      },
      {
        id: "5-7",
        type: "comparison",
        headers: ["Offre", "Essentiel", "Business", "Premium"],
        rows: [
          {
            cells: ["Prix mensuel HT", "199€/mois", "349€/mois", "599€/mois"],
          },
          {
            cells: ["Hébergement", "✅ Inclus", "✅ Inclus", "✅ Inclus"],
          },
          {
            cells: ["Mises à jour sécurité", "✅ Mensuel", "✅ Hebdomadaire", "✅ En temps réel"],
          },
          {
            cells: ["Monitoring uptime", "✅ 99% garanti", "✅ 99,9% garanti", "✅ 99,99% garanti"],
          },
          {
            cells: ["Rapport mensuel", "✅ PDF", "✅ PDF + appel 15 min", "✅ Dashboard temps réel"],
          },
          {
            cells: ["Support inclus", "1h/mois", "3h/mois", "8h/mois"],
          },
          {
            cells: ["Heures sup.", "80€/h", "70€/h", "60€/h"],
          },
          {
            cells: ["Délai de réponse", "48h ouvrés", "24h ouvrés", "4h ouvrés"],
          },
          {
            cells: ["Idéal pour", "Sites vitrine, blogs", "E-commerce, chatbots", "Apps critiques, SaaS"],
          },
        ],
      },
      {
        id: "5-8",
        type: "heading",
        level: 2,
        text: "Le contrat de maintenance : cadre légal",
      },
      {
        id: "5-9",
        type: "code",
        language: "text",
        filename: "contrat-maintenance-framework.txt",
        code: `CONTRAT DE MAINTENANCE ET D'HÉBERGEMENT
Référence : MAINT-[ANNÉE]-[NUMÉRO]

PARTIES
Prestataire : [Ton nom/société], [Adresse], SIRET : [X]
Client : [Nom société], [Adresse], représenté par [Nom], [Fonction]

OBJET
Le présent contrat a pour objet la maintenance et l'hébergement
du site/application "[Nom]" accessible à l'adresse [URL].

PRESTATIONS INCLUSES (Forfait [Essentiel / Business / Premium])
✓ Hébergement sur serveur sécurisé ([Localisation])
✓ Certificat SSL valide en permanence
✓ Sauvegardes automatiques [fréquence]
✓ Surveillance uptime [fréquence] (objectif [X]% de disponibilité)
✓ Mises à jour de sécurité [fréquence]
✓ Rapport mensuel d'activité
✓ Support technique : [X]h/mois (délai de réponse : [X]h ouvrés)

PRESTATIONS EXCLUES
✗ Développements de nouvelles fonctionnalités (devis séparé)
✗ Modifications de design majeures (devis séparé)
✗ Interventions liées à des actes malveillants externes
  non couverts par nos mesures de sécurité standard

TARIF
[X]€ HT/mois, soit [X]€ TTC/mois
Prélèvement automatique le [X] de chaque mois.
Révision tarifaire possible chaque 1er janvier avec préavis de 2 mois.

DURÉE ET RÉSILIATION
Contrat à durée indéterminée.
Résiliation possible à tout moment avec un préavis de [30/60] jours,
notifié par email avec accusé de réception.
En cas de résiliation par le client, les sauvegardes sont remises
sous 30 jours dans un format standard (ZIP).

NIVEAUX DE SERVICE (SLA)
- Disponibilité cible : [X]%
- En cas d'indisponibilité > 4h consécutives :
  crédit d'1 jour de maintenance offert
- En cas d'indisponibilité > 24h consécutives :
  crédit d'1 semaine de maintenance offert

RESPONSABILITÉ
Le prestataire ne peut être tenu responsable :
- Des indisponibilités liées à des pannes chez les fournisseurs tiers
- Des dommages résultant d'un accès non autorisé causé par
  des identifiants compromis du fait du client
- Des pertes de données antérieures à la prise en charge

Fait à [Ville], le [Date]
Signature prestataire :          Signature client :`,
      },
      {
        id: "5-10",
        type: "heading",
        level: 2,
        text: "Le rapport mensuel : ton outil de rétention",
      },
      {
        id: "5-11",
        type: "code",
        language: "text",
        filename: "template-rapport-mensuel.txt",
        code: `Objet : [Projet] — Rapport de maintenance [Mois] [Année]

Bonjour [Prénom],

Voici le rapport mensuel de maintenance de [ton site/app].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 RÉSUMÉ DU MOIS — [Mois Année]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ DISPONIBILITÉ
Uptime : [99,97%]
Temps d'indisponibilité total : [4 min]
Alertes déclenchées : [0]

⚡ PERFORMANCES
Score PageSpeed (mobile) : [87/100] (vs [82/100] le mois dernier)
Temps de chargement moyen : [1,8s]

🔒 SÉCURITÉ
Mises à jour effectuées : [5] (CMS, plugins, dépendances)
Tentatives d'intrusion bloquées : [143]
Certificat SSL : Valide jusqu'au [Date]

💾 SAUVEGARDES
Dernière sauvegarde : [Date] — ✅ Succès
Sauvegardes ce mois : [28/28]

🛠️ INTERVENTIONS
- [Date] : Mise à jour de sécurité critique WordPress 6.4.2
- [Date] : Correction d'un lien cassé signalé (support)
Heures utilisées : [1h15 / 3h incluses]
Heures restantes ce mois : [1h45]

📈 ÉVOLUTIONS RECOMMANDÉES
J'ai remarqué que [observation spécifique]. Je peux t'expliquer
pourquoi ça pourrait valoir le coup de l'adresser ce trimestre.
Tu veux qu'on en parle lors d'un appel de 15 min ?

Des questions ? Réponds directement à cet email.

À le mois prochain,
[Prénom]`,
      },
      {
        id: "5-12",
        type: "heading",
        level: 2,
        text: "Vers le SaaS : monétiser tes outils IA",
      },
      {
        id: "5-13",
        type: "text",
        html: "<p>Si tu crées le même type d'outil IA pour plusieurs clients du même secteur (ex: chatbot pour cabinets d'avocat, automatisation pour agences immo), tu peux transformer cette solution en produit SaaS : une base de code que tu déploies pour chaque nouveau client en quelques heures, avec un abonnement mensuel.</p>",
      },
      {
        id: "5-14",
        type: "diagram",
        variant: "tree",
        nodes: [
          {
            id: "n1",
            label: "Modèle Agence (projet par projet)",
            description: "CA irrégulier, dépendant du pipeline, 1 client = 1 projet unique",
          },
          {
            id: "n2",
            label: "Modèle Maintenance (MRR)",
            description: "200-500€/client/mois, travail automatisé, scalable jusqu'à ~20 clients solo",
          },
          {
            id: "n3",
            label: "Modèle SaaS vertical (MRR à l'échelle)",
            description: "Même outil pour 50+ clients du même secteur, 100-300€/client/mois, coût marginal quasi nul",
          },
          {
            id: "n4",
            label: "Modèle Hybride (optimal)",
            description: "Projets sur-mesure pour financer le développement SaaS + MRR maintenance = revenus stables + croissance",
          },
        ],
      },
      {
        id: "5-15",
        type: "callout",
        variant: "tip",
        html: "<strong>Comment identifier ton SaaS vertical :</strong> Regarde tes 5 derniers projets. Est-ce qu'il y a un type de client récurrent ? Un problème que tu as résolu plusieurs fois avec des solutions similaires ? C'est là que se cache ton produit SaaS. Un chatbot pour dentistes, un outil de suivi pour coachs, un CRM simplifié pour artisans : des niches sous-servies où tu peux devenir <em>le</em> fournisseur de référence.",
      },
      {
        id: "5-16",
        type: "heading",
        level: 2,
        text: "Comment vendre le contrat de maintenance dès le projet initial",
      },
      {
        id: "5-17",
        type: "code",
        language: "text",
        filename: "script-vente-maintenance.txt",
        code: `--- LORS DU DEVIS INITIAL ---

Présente toujours 2 options dans ton devis :

OPTION A : Livraison simple
Développement + mise en ligne : [X]€ (paiement unique)
→ Après livraison, tu gères toi-même les mises à jour,
  l'hébergement et la maintenance.

OPTION B : Livraison + Maintenance (RECOMMANDÉ)
Développement + mise en ligne : [X]€ (paiement unique)
+ Contrat de maintenance Essentiel : 199€/mois
→ Je gère tout : hébergement, sécurité, mises à jour,
  1h de support/mois. Tu te concentres sur ton business.

[Note : en incluant l'hébergement dans le contrat de maintenance,
l'OPTION B réduit le coût initial de [X]€ car je renégocie
mes tarifs hébergeur sur le volume.]

--- LORS DE LA LIVRAISON ---

"Maintenant que tout est en ligne, qu'est-ce que tu fais
si WordPress sort une mise à jour de sécurité critique
à 2h du matin et que ton site est vulnérable ?
C'est exactement pour ça que j'ai créé le contrat de maintenance.
Pour [199€/mois], tu ne penses plus jamais à ça."

--- RELANCE À J+30 ---

"Ça fait un mois que ton site est en ligne — félicitations !
J'ai fait tourner un audit et j'ai repéré [observation spécifique].
Si tu veux, je peux tout prendre en charge avec le contrat de
maintenance. Ça t'intéresse ?"`,
      },
      {
        id: "5-18",
        type: "separator",
        style: "dots",
      },
      {
        id: "5-19",
        type: "callout",
        variant: "success",
        html: "<strong>La feuille de route MRR :</strong> Mois 1-3 : convertis tes clients existants en contrats de maintenance (objectif 3-5 contrats). Mois 4-6 : inclus systématiquement la maintenance dans chaque nouveau devis (objectif 8-10 contrats). Mois 7-12 : identifie ton SaaS vertical et commence à le construire en parallèle. À 12 mois : 2 500-5 000€ de MRR = tu cours moins après les projets.",
      },
      {
        id: "5-20",
        type: "quiz-inline",
        question: "Quelle est la meilleure stratégie pour vendre un contrat de maintenance ?",
        options: [
          { id: "a", text: "Attendre que le client le demande spontanément" },
          { id: "b", text: "Le proposer uniquement aux clients qui ont eu des problèmes techniques" },
          { id: "c", text: "L'intégrer dans le devis initial comme option recommandée, avec une réduction du coût d'hébergement initial" },
          { id: "d", text: "Le proposer uniquement 6 mois après la livraison" },
        ],
        correctId: "c",
        explanation: "Présenter la maintenance dans le devis initial, quand le client est dans l'état d'esprit 'investissement', est 3x plus efficace que de le proposer après. Intégrer une réduction du coût initial pour les clients qui prennent la maintenance rend l'offre encore plus attrayante.",
      },
      {
        id: "5-21",
        type: "checklist",
        title: "Checklist : mon modèle de revenus récurrents est lancé",
        items: [
          { id: "c1", text: "J'ai défini mes 3 niveaux de forfait maintenance avec des prix clairs" },
          { id: "c2", text: "Mon contrat de maintenance est rédigé et prêt à signer" },
          { id: "c3", text: "J'héberge (ou je vais héberger) mes clients sur mon infrastructure" },
          { id: "c4", text: "J'ai configuré un outil de monitoring uptime (UptimeRobot ou équivalent)" },
          { id: "c5", text: "J'ai un template de rapport mensuel à personnaliser en 10 minutes" },
          { id: "c6", text: "Mes prochains devis incluent la maintenance comme option recommandée" },
          { id: "c7", text: "J'ai identifié au moins 2 clients existants à qui proposer la maintenance dès cette semaine" },
          { id: "c8", text: "J'ai un objectif MRR à 6 mois et un plan pour l'atteindre" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Construis ton offre de maintenance complète : (1) Définis tes 3 niveaux de forfait avec les prix adaptés à ton positionnement. (2) Personalise le contrat-cadre fourni dans ce module avec tes informations et ta politique SLA. (3) Identifie 3 clients actuels ou passés à qui tu vas envoyer une proposition de maintenance cette semaine. Rédige l'email de proposition en utilisant les scripts du module. Durée estimée : 90 min.</p>",
    quiz: [
      { type: "mcq", question: "Quel objectif MRR est considéré comme réaliste avec 10 clients en contrat de maintenance ?", options: JSON.stringify(["500€/mois", "3 000€/mois (10 clients × 300€/mois)", "10 000€/mois", "50€/mois par client maximum"]), correctAnswer: "3 000€/mois (10 clients × 300€/mois)", explanation: "10 clients à 300€/mois = 3 000€ MRR. Avec les outils IA, gérer 10 contrats de maintenance ne représente que 2-3 jours de travail par mois. Le reste du temps est disponible pour de nouveaux projets." },
      { type: "true_false", question: "Le rapport mensuel de maintenance est seulement un document administratif sans impact sur la rétention client.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le rapport mensuel est un outil de rétention puissant. Il rappelle au client chaque mois la valeur de ton contrat (uptime, mises à jour, sécurité). Sans rapport, le client oublie ce qu'il paie et risque de résilier." },
      { type: "mcq", question: "Quelle est la meilleure stratégie pour vendre un contrat de maintenance ?", options: JSON.stringify(["Attendre que le client ait des problèmes techniques", "L'intégrer dans le devis initial comme option recommandée avec une réduction sur l'hébergement", "Le proposer uniquement 6 mois après la livraison", "Ne le proposer qu'aux gros clients"]), correctAnswer: "L'intégrer dans le devis initial comme option recommandée avec une réduction sur l'hébergement", explanation: "Présenter la maintenance dans le devis initial, quand le client est dans l'état d'esprit investissement, est 3x plus efficace que de le proposer après. Intégrer une réduction du coût initial pour les clients qui prennent la maintenance rend l'offre encore plus attrayante." },
      { type: "true_false", question: "Un SaaS vertical consiste à transformer une solution répétée pour plusieurs clients du même secteur en produit standardisé avec abonnement mensuel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Si tu crées le même type d'outil IA pour plusieurs clients du même secteur (ex: chatbot pour dentistes), tu peux le transformer en produit SaaS : une base de code déployée en quelques heures par client, avec un abonnement mensuel et un coût marginal quasi nul." },
      { type: "mcq", question: "Quel est le forfait maintenance intermédiaire (Business) en termes de support inclus et de délai de réponse ?", options: JSON.stringify(["1h/mois de support, réponse sous 48h", "3h/mois de support, réponse sous 24h ouvrés", "8h/mois de support, réponse sous 4h", "Support illimité, réponse immédiate"]), correctAnswer: "3h/mois de support, réponse sous 24h ouvrés", explanation: "Le forfait Business à 349€/mois inclut 3h de support par mois avec un délai de réponse de 24h ouvrés. C'est le forfait recommandé pour les e-commerces et les chatbots, entre l'Essentiel (1h, 48h) et le Premium (8h, 4h)." },
    ],
  },
  // ─── LEÇON 6 ───
  {
    order: 6,
    module: 12,
    title: "Revenus récurrents : comment atteindre 10K en MRR",
    slug: "revenus-recurrents-10k-mrr",
    duration: "30 min",
    description: "Les maths pour atteindre 10 000€/mois de revenus récurrents : mix one-shot et retainer, projection à 6 mois, et les 4 métriques clés (MRR, churn, LTV, CAC) pour piloter ta croissance.",
    content: blocks([
      {
        id: "6-1",
        type: "heading",
        level: 2,
        text: "10K€/mois : les maths derrière l'objectif",
      },
      {
        id: "6-2",
        type: "text",
        html: "<p>10 000€ de MRR (Monthly Recurring Revenue) est le seuil qui change la vie d'une agence IA. En dessous, tu survis. Au-dessus, tu construis. Mais ce chiffre fait peur parce que la plupart des gens ne décomposent jamais les maths. Quand tu le fais, l'objectif devient concret — et atteignable.</p><p>La question n'est pas <em>'comment gagner 10K/mois'</em>, c'est <strong>'combien de clients à quel tarif'</strong>.</p>",
      },
      {
        id: "6-3",
        type: "comparison",
        headers: ["Scénario", "Nombre de clients", "Retainer mensuel", "MRR total"],
        rows: [
          {
            cells: ["Scénario A : Premium", "3 clients", "3 300€/mois", "9 900€"],
          },
          {
            cells: ["Scénario B : Standard", "5 clients", "2 000€/mois", "10 000€"],
          },
          {
            cells: ["Scénario C : Volume", "10 clients", "1 000€/mois", "10 000€"],
          },
          {
            cells: ["Scénario D : Mix", "3 × 2K + 4 × 1K", "Mix", "10 000€"],
          },
        ],
      },
      {
        id: "6-4",
        type: "callout",
        variant: "info",
        html: "<strong>Le scénario le plus réaliste :</strong> Le scénario D (mix) est celui qui fonctionne pour la majorité des agences IA. 3 clients à 2 000€/mois (chatbot + automatisation + maintenance) et 4 clients à 1 000€/mois (maintenance + support). C'est 7 clients au total — parfaitement gérable en solo ou avec un assistant.",
      },
      {
        id: "6-5",
        type: "separator",
        style: "dots",
      },
      {
        id: "6-6",
        type: "heading",
        level: 2,
        text: "Le mix one-shot + récurrent : la formule gagnante",
      },
      {
        id: "6-7",
        type: "text",
        html: "<p>L'erreur classique est de vouloir passer à 100% de récurrent du jour au lendemain. Le modèle réaliste est un <strong>mix one-shot (projets) + récurrent (retainers)</strong> qui évolue progressivement vers plus de récurrent.</p>",
      },
      {
        id: "6-8",
        type: "comparison",
        headers: ["Phase", "One-shot (projets)", "Récurrent (retainers)", "CA mensuel estimé"],
        rows: [
          {
            cells: ["Mois 1-3 (lancement)", "80%", "20%", "2 000-4 000€"],
          },
          {
            cells: ["Mois 4-6 (transition)", "50%", "50%", "5 000-7 000€"],
          },
          {
            cells: ["Mois 7-9 (maturité)", "30%", "70%", "7 000-10 000€"],
          },
          {
            cells: ["Mois 10-12 (scale)", "20%", "80%", "10 000-15 000€"],
          },
        ],
      },
      {
        id: "6-9",
        type: "callout",
        variant: "tip",
        html: "<strong>Stratégie clé :</strong> chaque projet one-shot doit se transformer en contrat récurrent. Tu livres un chatbot à 2 000€ → tu proposes la maintenance à 300€/mois. Tu automatises un process à 3 000€ → tu proposes le monitoring + évolutions à 500€/mois. Le one-shot finance ton acquisition, le récurrent construit ta stabilité.",
      },
      {
        id: "6-10",
        type: "separator",
        style: "line",
      },
      {
        id: "6-11",
        type: "heading",
        level: 2,
        text: "Projection financière à 6 mois",
      },
      {
        id: "6-12",
        type: "text",
        html: "<p>Voici une projection réaliste pour atteindre 10K€/mois en partant de zéro, basée sur 2 nouveaux clients par mois avec un taux de conversion de 60% en contrat de maintenance.</p>",
      },
      {
        id: "6-13",
        type: "comparison",
        headers: ["Mois", "Nouveaux clients", "Projets one-shot", "Nouveaux retainers", "MRR cumulé", "CA total du mois"],
        rows: [
          {
            cells: ["Mois 1", "2", "2 × 2 000€ = 4 000€", "+1 × 300€", "300€", "4 300€"],
          },
          {
            cells: ["Mois 2", "2", "2 × 2 500€ = 5 000€", "+1 × 400€", "700€", "5 700€"],
          },
          {
            cells: ["Mois 3", "2", "1 × 3 000€ + 1 × 1 500€", "+2 × 350€", "1 400€", "5 900€"],
          },
          {
            cells: ["Mois 4", "3", "2 × 2 000€ + 1 × 3 500€", "+2 × 500€", "2 400€", "9 900€"],
          },
          {
            cells: ["Mois 5", "2", "1 × 3 000€ + 1 × 2 000€", "+2 × 400€", "3 200€", "8 200€"],
          },
          {
            cells: ["Mois 6", "2", "2 × 2 500€ = 5 000€", "+1 × 500€", "3 700€", "8 700€"],
          },
        ],
      },
      {
        id: "6-14",
        type: "callout",
        variant: "warning",
        html: "<strong>Attention au piège de la croissance linéaire :</strong> cette projection suppose 0% de churn (aucun client ne part). En réalité, tu perdras 5-10% de tes clients récurrents par mois. C'est pour ça que tu dois toujours signer plus de retainers que tu n'en perds. La formule magique : <strong>nouveaux retainers par mois > churn par mois</strong>. Si tu signes 2 retainers/mois et perds 0,5/mois, ton MRR net grandit de 1,5 retainer par mois.",
      },
      {
        id: "6-15",
        type: "separator",
        style: "dots",
      },
      {
        id: "6-16",
        type: "heading",
        level: 2,
        text: "Les 4 métriques qui pilotent tout",
      },
      {
        id: "6-17",
        type: "text",
        html: "<p>Tu ne peux pas améliorer ce que tu ne mesures pas. Ces 4 métriques sont ta boussole financière. Mets-les à jour chaque 1er du mois dans un Google Sheet simple.</p>",
      },
      {
        id: "6-18",
        type: "comparison",
        headers: ["Métrique", "Définition", "Comment la calculer", "Objectif cible"],
        rows: [
          {
            cells: [
              "MRR (Monthly Recurring Revenue)",
              "Revenus récurrents mensuels garantis",
              "Somme de tous les retainers actifs",
              "10 000€/mois à 12 mois",
            ],
          },
          {
            cells: [
              "Churn rate (taux d'attrition)",
              "% de clients récurrents qui partent chaque mois",
              "(Clients perdus ce mois / Clients récurrents début de mois) × 100",
              "< 5%/mois (idéal : < 3%)",
            ],
          },
          {
            cells: [
              "LTV (Lifetime Value)",
              "Revenu total moyen généré par un client sur toute la relation",
              "Retainer mensuel moyen × (1 / churn rate mensuel) + panier one-shot moyen",
              "> 5 000€ par client",
            ],
          },
          {
            cells: [
              "CAC (Customer Acquisition Cost)",
              "Coût moyen pour acquérir un nouveau client",
              "(Temps prospection en heures × taux horaire + outils) / Nombre de clients signés",
              "< 500€ (ratio LTV/CAC > 3:1)",
            ],
          },
        ],
      },
      {
        id: "6-19",
        type: "callout",
        variant: "success",
        html: "<strong>La règle du 3:1 :</strong> ton LTV doit être au moins 3 fois ton CAC. Si ton CAC est de 400€ (20h de prospection pour 1 client signé), ton LTV doit être d'au moins 1 200€. Avec un retainer de 300€/mois et une durée moyenne de 8 mois + un projet initial de 2 000€, ton LTV est de 4 400€ → ratio de 11:1. Excellent.",
      },
      {
        id: "6-20",
        type: "separator",
        style: "line",
      },
      {
        id: "6-21",
        type: "heading",
        level: 2,
        text: "Comment réduire le churn et maximiser la LTV",
      },
      {
        id: "6-22",
        type: "steps",
        steps: [
          {
            title: "1. Le rapport mensuel (rétention passive)",
            description: "Envoie chaque mois un rapport de valeur : uptime, performances, interventions, opportunités détectées. Le client voit concrètement ce qu'il paie. Sans rapport, il oublie et résilie.",
          },
          {
            title: "2. Le check-in trimestriel (rétention active)",
            description: "Un appel de 20 minutes tous les 3 mois : 'Comment ça va ? Quels sont tes objectifs pour le prochain trimestre ? Comment je peux t'aider à les atteindre ?' Ce call est aussi ton moment d'upsell naturel.",
          },
          {
            title: "3. L'upsell proactif (croissance du compte)",
            description: "Chaque rapport mensuel inclut une section 'opportunités détectées'. Tu ne vends pas — tu montres des données. Le client te demande de les exploiter. Le panier moyen par client augmente mécaniquement.",
          },
          {
            title: "4. Le contrat annuel avec réduction (lock-in)",
            description: "Propose une réduction de 15-20% pour un engagement annuel. Le client économise, tu sécurises 12 mois de MRR. Un client en contrat annuel a un churn rate 3x plus bas qu'un client mensuel.",
          },
        ],
      },
      {
        id: "6-23",
        type: "separator",
        style: "dots",
      },
      {
        id: "6-24",
        type: "heading",
        level: 2,
        text: "Le tableau de bord financier (template)",
      },
      {
        id: "6-25",
        type: "code",
        language: "text",
        filename: "dashboard-financier-mrr.txt",
        code: `═══════════════════════════════════════════════
TABLEAU DE BORD FINANCIER — [Mois] [Année]
═══════════════════════════════════════════════

REVENUS RÉCURRENTS (MRR)
┌─────────────────────────────────────────────┐
│ MRR début de mois :         [X] €           │
│ + Nouveaux retainers :      +[X] €          │
│ + Upsells / expansions :    +[X] €          │
│ - Churn (clients perdus) :  -[X] €          │
│ = MRR fin de mois :         [X] €           │
│                                             │
│ Croissance MRR net :        +[X]% vs M-1    │
└─────────────────────────────────────────────┘

REVENUS ONE-SHOT (projets)
┌─────────────────────────────────────────────┐
│ Nombre de projets livrés :  [X]             │
│ CA one-shot du mois :       [X] €           │
│ Panier moyen par projet :   [X] €           │
│ Taux de conversion en       [X]%            │
│ retainer après livraison :                  │
└─────────────────────────────────────────────┘

MÉTRIQUES CLÉS
┌─────────────────────────────────────────────┐
│ CA total du mois :          [X] €           │
│ % récurrent / total :       [X]%            │
│ Churn rate :                [X]%            │
│ LTV moyenne :               [X] €           │
│ CAC moyen :                 [X] €           │
│ Ratio LTV/CAC :             [X]:1           │
│ Nb clients récurrents :     [X]             │
│ Nb clients total (actifs) : [X]             │
└─────────────────────────────────────────────┘

OBJECTIFS vs RÉALITÉ
┌─────────────────────────────────────────────┐
│ Objectif MRR ce mois :      [X] €          │
│ MRR réel :                  [X] € ([X]%)   │
│ Objectif CA total :         [X] €          │
│ CA réel :                   [X] € ([X]%)   │
│ Prochaine milestone :       [X] € MRR      │
│ Mois estimé d'atteinte :    [Mois Année]   │
└─────────────────────────────────────────────┘

PLAN D'ACTION MOIS PROCHAIN
1. [Action prioritaire pour augmenter le MRR]
2. [Action pour réduire le churn]
3. [Action pour augmenter le panier moyen]`,
      },
      {
        id: "6-26",
        type: "separator",
        style: "dots",
      },
      {
        id: "6-27",
        type: "quiz-inline",
        question: "Quel ratio LTV/CAC est considéré comme sain pour une agence IA ?",
        options: [
          { id: "a", text: "1:1 (LTV = CAC)" },
          { id: "b", text: "Au moins 3:1 (LTV = 3× CAC)" },
          { id: "c", text: "Au moins 10:1 (LTV = 10× CAC)" },
          { id: "d", text: "Le ratio n'a pas d'importance" },
        ],
        correctId: "b",
        explanation: "Un ratio LTV/CAC d'au moins 3:1 signifie que chaque euro investi dans l'acquisition rapporte au moins 3 euros sur la durée de vie du client. En dessous de 3:1, tu dépenses trop pour acquérir des clients par rapport à ce qu'ils rapportent.",
      },
      {
        id: "6-28",
        type: "checklist",
        title: "Checklist — Ma route vers 10K€ MRR",
        items: [
          { id: "c1", text: "J'ai choisi mon scénario cible (nombre de clients × tarif mensuel)" },
          { id: "c2", text: "J'ai défini mon mix one-shot / récurrent pour les 6 prochains mois" },
          { id: "c3", text: "Ma projection financière à 6 mois est rédigée avec des chiffres réalistes" },
          { id: "c4", text: "Mon tableau de bord financier est créé (Google Sheet ou Notion)" },
          { id: "c5", text: "Je mesure les 4 métriques clés (MRR, churn, LTV, CAC) chaque 1er du mois" },
          { id: "c6", text: "J'ai un plan pour réduire le churn (rapports, check-ins, contrats annuels)" },
          { id: "c7", text: "Chaque nouveau projet est conçu pour se transformer en retainer" },
          { id: "c8", text: "Mon objectif MRR à 6 mois est écrit quelque part où je le vois chaque jour" },
        ],
      },
    ]),
    exercise: "<p><strong>Exercice :</strong> Fais ta projection financière à 6 mois. (1) Choisis ton scénario cible parmi les 4 présentés (ou crée le tien). (2) Définis ton mix one-shot/retainer pour chaque mois (en % et en euros). (3) Remplis le tableau mois par mois : nouveaux clients, projets one-shot, nouveaux retainers, MRR cumulé, CA total. (4) Calcule combien de clients il te faut pour atteindre 10 000€/mois avec ton tarif moyen. (5) Crée ton tableau de bord financier (copie le template dans un Google Sheet) et remplis la colonne 'Mois 1' avec tes chiffres actuels. Durée estimée : 60 min.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le scénario le plus réaliste pour atteindre 10K€ de MRR ?", options: JSON.stringify(["1 seul client à 10 000€/mois", "Un mix de 3 clients à 2 000€/mois et 4 clients à 1 000€/mois", "100 clients à 100€/mois", "Uniquement des projets one-shot à 10K€"]), correctAnswer: "Un mix de 3 clients à 2 000€/mois et 4 clients à 1 000€/mois", explanation: "Le scénario mix (7 clients au total avec des retainers variés) est le plus réaliste. Il est parfaitement gérable en solo ou avec un assistant, et diversifie le risque sur plusieurs clients plutôt que de dépendre d'un seul gros contrat." },
      { type: "true_false", question: "Le churn rate idéal pour une agence IA est inférieur à 5% par mois.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Un churn rate inférieur à 5% par mois (idéalement inférieur à 3%) signifie que tu perds moins de 1 client sur 20 chaque mois. Pour maintenir la croissance du MRR, il faut que les nouveaux retainers signés chaque mois dépassent les clients perdus par churn." },
      { type: "mcq", question: "Quelle est la formule pour calculer la LTV (Lifetime Value) d'un client récurrent ?", options: JSON.stringify(["Retainer mensuel × 12 mois", "Retainer mensuel moyen × (1 / churn rate mensuel) + panier one-shot moyen", "CA total / nombre de clients", "Nombre de mois de contrat × prix du projet initial"]), correctAnswer: "Retainer mensuel moyen × (1 / churn rate mensuel) + panier one-shot moyen", explanation: "La LTV combine la durée de vie moyenne du client (1 / churn rate) multipliée par le retainer mensuel, plus la valeur du projet initial. Avec un retainer de 300€/mois et un churn de 12%/mois (durée moyenne 8 mois), la LTV récurrente seule est de 2 400€." },
      { type: "true_false", question: "Passer à 100% de revenus récurrents dès le premier mois est la meilleure stratégie.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La transition doit être progressive : 80% one-shot au début (mois 1-3), puis 50/50 (mois 4-6), puis 30/70 (mois 7-9), et enfin 20/80 (mois 10-12). Les projets one-shot financent l'acquisition de clients et permettent de proposer des retainers après chaque livraison." },
      { type: "mcq", question: "Tu as actuellement 4 000€ de MRR avec 8 clients. Ce mois, tu signes 2 nouveaux retainers à 500€/mois chacun, mais 1 client à 300€/mois résilie. Quel est ton MRR en fin de mois et ta croissance nette ?", options: JSON.stringify(["4 700€ MRR, croissance nette de +700€", "5 000€ MRR, croissance nette de +1 000€", "3 700€ MRR, décroissance de -300€", "4 300€ MRR, croissance nette de +300€"]), correctAnswer: "4 700€ MRR, croissance nette de +700€", explanation: "MRR début : 4 000€. Ajout : 2 × 500€ = +1 000€. Churn : -300€. MRR fin : 4 000 + 1 000 - 300 = 4 700€. Croissance nette : +700€. Le churn rate ce mois : 1/8 = 12,5% (trop élevé, il faut investiguer pourquoi ce client part et mettre en place des actions de rétention)." },
    ],
  },
];
