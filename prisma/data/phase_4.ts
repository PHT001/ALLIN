// Phase 4 : S'entrainer - Projets Pratiques — Modules 8-9 (12 lecons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 9 : Projets Pratiques avec Claude (6 lecons)
  // ═══════════════════════════════════════════════════
  {
    order: 46,
    module: 8,
    title: "Projet : Landing page de vente haute conversion",
    slug: "projet-landing-page-vente-haute-conversion",
    duration: "50 min",
    description: "Construire une landing page professionnelle avec hero, benefices, temoignages et CTA responsive.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce premier projet pratique, tu vas construire de A a Z une landing page de vente haute conversion. Ce n'est pas un exercice theorique : a la fin de cette lecon, tu auras une page prete a mettre en production, que tu pourras montrer a des clients ou utiliser dans ton portfolio.</p>
<p>Une landing page de vente est la piece maitresse de tout business en ligne. C'est la page qui transforme un visiteur en client. Les meilleures convertissent entre 5% et 15% des visiteurs. Pour atteindre ces chiffres, chaque element compte : le titre, les visuels, la preuve sociale, l'appel a l'action.</p>

<h2>Architecture de la page</h2>
<p>Avant d'ecrire la moindre ligne de code, on va planifier la structure. Une landing page haute conversion suit un schema precis :</p>
<ul>
<li><strong>Hero Section</strong> : Titre accrocheur, sous-titre, CTA principal, image ou video</li>
<li><strong>Barre de confiance</strong> : Logos de clients ou partenaires (social proof)</li>
<li><strong>Section Probleme</strong> : Decrire la douleur du client ideal</li>
<li><strong>Section Solution</strong> : Presenter ton produit/service comme LA reponse</li>
<li><strong>Benefices</strong> : 3 a 6 benefices cles avec icones</li>
<li><strong>Temoignages</strong> : 3 temoignages clients avec photos et resultats</li>
<li><strong>Tarification</strong> : Un ou plusieurs plans clairs</li>
<li><strong>FAQ</strong> : Lever les dernieres objections</li>
<li><strong>CTA final</strong> : Derniere invitation a l'action</li>
<li><strong>Footer</strong> : Liens legaux, contact, reseaux sociaux</li>
</ul>

<h2>Etape 1 : Initialiser le projet avec Claude Code</h2>
<p>Ouvre ton terminal et lance Claude Code. On va creer un projet Next.js avec Tailwind CSS :</p>
<p>Donne a Claude Code cette instruction :</p>
<blockquote>Cree un projet Next.js avec Tailwind CSS et TypeScript pour une landing page de vente. Initialise le projet avec une structure de composants : HeroSection, TrustBar, ProblemSection, SolutionSection, BenefitsSection, TestimonialsSection, PricingSection, FAQSection et FooterCTA. Chaque composant dans son propre fichier dans /components/landing/.</blockquote>
<p>Claude Code va generer l'ensemble de la structure. Verifie que tous les fichiers sont bien crees et que le projet compile sans erreur avec <code>npm run dev</code>.</p>

<h2>Etape 2 : Le Hero Section</h2>
<p>Le hero est la premiere chose que voit le visiteur. Tu as 3 secondes pour capter son attention. Voici ce qu'on va demander a Claude Code :</p>
<blockquote>Cree le composant HeroSection avec : un titre H1 de maximum 10 mots qui promet un resultat concret, un sous-titre de 2 lignes qui developpe la promesse, un bouton CTA vert avec texte "Commencer maintenant", une image placeholder a droite sur desktop et en dessous sur mobile. Utilise Tailwind CSS avec des animations subtiles au scroll.</blockquote>
<p>Claude Code va generer un composant responsive. Les points cles a verifier :</p>
<ul>
<li>Le titre est lisible sur mobile (taille de police adaptative)</li>
<li>Le bouton CTA a un contraste suffisant (rapport minimum 4.5:1)</li>
<li>L'image ne ralentit pas le chargement (utilise next/image)</li>
<li>Le layout passe bien en colonne sur mobile</li>
</ul>

<h2>Etape 3 : Preuve sociale et temoignages</h2>
<p>Demande a Claude Code :</p>
<blockquote>Cree une TrustBar avec 5 logos de partenaires en niveaux de gris qui defilent en boucle. Ensuite, cree TestimonialsSection avec 3 cartes temoignages contenant : photo ronde, nom, titre du poste, entreprise, texte du temoignage, note sur 5 etoiles. Utilise un carrousel automatique sur mobile et une grille 3 colonnes sur desktop.</blockquote>
<p>La preuve sociale est l'element le plus puissant pour augmenter les conversions. Des etudes montrent que les temoignages augmentent les conversions de 34% en moyenne. Assure-toi que les temoignages sont specifiques et mentionnent des resultats chiffres.</p>

<h2>Etape 4 : Benefices et tarification</h2>
<p>Continue avec Claude Code pour creer les sections restantes. Pour la section benefices, demande 6 cartes avec icones, titre court et description en 2 lignes. Pour la tarification, demande un tableau comparatif avec 3 plans (Starter, Pro, Enterprise) avec le plan Pro mis en avant visuellement.</p>
<p>Claude Code peut aussi generer la section FAQ avec un composant accordeon (clic pour ouvrir/fermer chaque question). Demande-lui d'inclure 6 questions frequentes avec des reponses qui levent les objections courantes.</p>

<h2>Etape 5 : Responsive et optimisation</h2>
<p>Demande a Claude Code de verifier et ajuster l'ensemble de la page :</p>
<blockquote>Verifie que toute la landing page est parfaitement responsive. Teste les breakpoints mobile (375px), tablette (768px) et desktop (1280px). Ajoute des animations au scroll avec Intersection Observer. Optimise les images avec next/image. Ajoute les meta tags SEO et Open Graph pour le partage sur les reseaux sociaux.</blockquote>
<p>Les performances sont critiques : chaque seconde de chargement en plus reduit les conversions de 7%. Utilise Lighthouse pour verifier que ton score est au-dessus de 90 sur les 4 criteres.</p>

<h2>Etape 6 : Deploiement</h2>
<p>Pour deployer ta landing page, utilise Vercel. Claude Code peut t'aider a configurer le deploiement :</p>
<blockquote>Configure le deploiement Vercel pour ce projet. Ajoute un domaine personnalise, configure les redirections et le fichier robots.txt. Ajoute aussi Google Analytics 4 pour tracker les conversions.</blockquote>
<p>Ta landing page est maintenant en ligne. Tu peux la montrer a tes clients potentiels et l'ajouter a ton portfolio. Ce projet demontre ta capacite a creer des pages web professionnelles rapidement grace a l'IA.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis un produit ou service fictif (ou reel) pour ta landing page. Definis le persona client ideal : age, metier, probleme principal, budget.</li>
<li>Utilise Claude Code pour generer l'integralite de la landing page en suivant les etapes de la lecon. Tu dois obtenir au minimum 8 sections distinctes.</li>
<li>Teste le responsive sur 3 tailles d'ecran differentes et corrige les problemes eventuels avec Claude Code.</li>
<li>Deploie la page sur Vercel et partage le lien dans le groupe de la formation.</li>
<li>Bonus : ajoute un formulaire de capture d'email avec validation et stockage dans une base de donnees.</li>
</ol>`,
  },
  {
    order: 47,
    module: 8,
    title: "Projet : Chatbot FAQ intelligent pour entreprise",
    slug: "projet-chatbot-faq-intelligent-entreprise",
    duration: "50 min",
    description: "Construire un chatbot qui repond aux questions frequentes a partir d'une base de connaissances.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un chatbot intelligent capable de repondre aux questions des visiteurs d'un site web en se basant sur une base de connaissances personnalisee. Ce n'est pas un simple chatbot avec des reponses pre-ecrites : il utilise l'API Claude pour comprendre les questions et trouver les reponses pertinentes dans tes documents.</p>
<p>Ce type de chatbot est extremement demande par les entreprises. Un chatbot FAQ bien configure peut reduire de 60 a 80% les demandes au support client. C'est un projet a forte valeur ajoutee pour ton portfolio et tes futurs clients.</p>

<h2>Architecture technique</h2>
<p>Le chatbot repose sur une architecture RAG (Retrieval Augmented Generation) simplifiee :</p>
<ul>
<li><strong>Frontend</strong> : Widget de chat en React, integrable sur n'importe quel site</li>
<li><strong>Backend</strong> : API Next.js qui recoit les questions et retourne les reponses</li>
<li><strong>Base de connaissances</strong> : Fichiers Markdown ou JSON contenant les FAQ</li>
<li><strong>Moteur IA</strong> : API Claude qui genere les reponses contextualisees</li>
</ul>
<p>Le flux est simple : l'utilisateur pose une question, le backend cherche les FAQ les plus pertinentes, les envoie a Claude avec la question, et Claude formule une reponse naturelle et precise.</p>

<h2>Etape 1 : Preparer la base de connaissances</h2>
<p>Demande a Claude Code de creer la structure du projet et la base de connaissances :</p>
<blockquote>Cree un projet Next.js avec TypeScript. Dans /data/knowledge-base/, cree 3 fichiers JSON : general.json (10 questions generales sur l'entreprise), produits.json (10 questions sur les produits/services), support.json (10 questions sur le support technique). Chaque entree doit avoir un champ question, un champ reponse et un champ categorie.</blockquote>
<p>La qualite de ta base de connaissances determine directement la qualite des reponses. Chaque reponse doit etre complete, precise et a jour. Claude Code peut t'aider a generer des FAQ realistes pour un secteur donne.</p>

<h2>Etape 2 : Creer le backend API</h2>
<p>Le backend est le cerveau du chatbot. Demande a Claude Code :</p>
<blockquote>Cree une route API /api/chat qui recoit une question en POST. La route doit : 1) Charger toutes les FAQ de la base de connaissances, 2) Calculer la similarite entre la question et chaque FAQ (utilise une recherche par mots-cles pour commencer), 3) Selectionner les 3 FAQ les plus pertinentes, 4) Envoyer a l'API Claude un prompt avec ces FAQ comme contexte et la question de l'utilisateur, 5) Retourner la reponse de Claude en streaming.</blockquote>
<p>Le streaming est important pour l'experience utilisateur : la reponse s'affiche mot par mot, comme si le chatbot "tapait" en temps reel. Claude Code va configurer le streaming avec l'API Anthropic.</p>

<h2>Etape 3 : Construire le widget de chat</h2>
<p>Le frontend doit etre professionnel et integrable. Demande a Claude Code :</p>
<blockquote>Cree un composant ChatWidget en React avec : un bouton flottant en bas a droite pour ouvrir/fermer le chat, une fenetre de chat avec header (logo + nom du bot), une zone de messages avec bulles (utilisateur a droite, bot a gauche), un champ de saisie avec bouton d'envoi, un indicateur "en train de taper..." pendant la generation, la gestion du streaming pour afficher la reponse en temps reel. Style professionnel avec Tailwind CSS.</blockquote>
<p>Le widget doit etre leger et ne pas impacter les performances du site hote. Verifie que le CSS n'entre pas en conflit avec le site parent en utilisant des classes prefixees ou un shadow DOM.</p>

<h2>Etape 4 : Ameliorer la pertinence</h2>
<p>Pour aller plus loin dans la recherche de pertinence, demande a Claude Code d'implementer un systeme de scoring plus avance. Au lieu d'une simple recherche par mots-cles, on peut utiliser l'embedding de texte pour calculer la similarite semantique entre la question et les FAQ. Claude Code peut integrer l'API d'embedding d'OpenAI ou utiliser une librairie locale comme transformers.js.</p>
<p>Ajoute aussi un systeme de fallback : si aucune FAQ ne correspond avec un score suffisant, le chatbot doit repondre honnetement qu'il ne connait pas la reponse et proposer de contacter le support humain.</p>

<h2>Etape 5 : Historique et contexte de conversation</h2>
<p>Un bon chatbot se souvient du contexte de la conversation. Demande a Claude Code :</p>
<blockquote>Ajoute la gestion de l'historique de conversation. Le chatbot doit se souvenir des messages precedents dans la session. Envoie les 5 derniers messages a l'API Claude pour maintenir le contexte. Ajoute aussi un bouton "Nouvelle conversation" pour repartir de zero.</blockquote>
<p>Le contexte permet au chatbot de repondre a des questions de suivi comme "Et pour le prix ?" sans que l'utilisateur ait besoin de repeter le produit dont il parle.</p>

<h2>Etape 6 : Integration et deploiement</h2>
<p>Pour rendre le chatbot integrable sur n'importe quel site, demande a Claude Code de creer un script d'integration en une ligne :</p>
<blockquote>Cree un script d'integration qui permet d'ajouter le chatbot sur n'importe quel site avec une seule balise script. Le script doit charger le widget dynamiquement, accepter des options de configuration (couleur, position, message d'accueil) et fonctionner sur tous les navigateurs modernes.</blockquote>
<p>Deploie le tout sur Vercel. Ton chatbot est maintenant un produit complet que tu peux vendre a des entreprises pour 500 a 2000 euros par installation, avec un abonnement mensuel pour la maintenance.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis un secteur d'activite (e-commerce, immobilier, SaaS, restaurant) et cree une base de connaissances de 30 FAQ minimum.</li>
<li>Construis le chatbot complet en suivant les 6 etapes avec Claude Code. Verifie que le streaming fonctionne correctement.</li>
<li>Teste avec 10 questions variees, dont 3 qui ne sont PAS dans ta base de connaissances (pour verifier le fallback).</li>
<li>Cree le script d'integration et integre le chatbot sur une page HTML simple pour tester.</li>
<li>Bonus : ajoute un systeme de feedback (pouce en haut / pouce en bas) pour chaque reponse et stocke les resultats pour ameliorer le chatbot.</li>
</ol>`,
  },
  {
    order: 48,
    module: 8,
    title: "Projet : Dashboard analytique interactif",
    slug: "projet-dashboard-analytique-interactif",
    duration: "45 min",
    description: "Construire un dashboard avec graphiques interactifs, filtres et donnees dynamiques.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce projet, tu vas construire un dashboard analytique complet avec des graphiques interactifs, des filtres dynamiques et des donnees en temps reel. Ce type de dashboard est utilise partout : e-commerce, SaaS, marketing digital, finance. C'est un projet qui impressionne les clients et les recruteurs car il demontre ta capacite a gerer la visualisation de donnees complexes.</p>
<p>Le dashboard que tu vas creer affichera des metriques business : chiffre d'affaires, nombre de clients, taux de conversion, evolution des ventes par mois, repartition geographique des clients, et top produits vendus.</p>

<h2>Stack technique</h2>
<p>On va utiliser une stack moderne et performante :</p>
<ul>
<li><strong>Next.js 14</strong> avec App Router pour le framework</li>
<li><strong>Recharts</strong> pour les graphiques (plus moderne et React-friendly que Chart.js)</li>
<li><strong>Tailwind CSS</strong> pour le style</li>
<li><strong>TanStack Query</strong> pour le fetching de donnees</li>
<li><strong>Mock API</strong> avec des donnees realistes generees par Claude</li>
</ul>

<h2>Etape 1 : Structure et layout du dashboard</h2>
<p>Demande a Claude Code de creer la structure :</p>
<blockquote>Cree un projet Next.js avec un layout de dashboard professionnel : sidebar fixe a gauche avec navigation (Dashboard, Ventes, Clients, Produits, Parametres), header en haut avec barre de recherche, notifications et avatar utilisateur, zone de contenu principale. Utilise Tailwind CSS avec un theme sombre/clair. La sidebar doit se replier en icones sur mobile.</blockquote>
<p>Le layout est la fondation de tout dashboard. Il doit etre clair, navigable et fonctionner sur tous les ecrans. Claude Code va generer un layout professionnel qui suit les standards UX des meilleurs dashboards du marche.</p>

<h2>Etape 2 : Generer les donnees mock</h2>
<p>Avant de creer les graphiques, on a besoin de donnees realistes. Demande a Claude Code :</p>
<blockquote>Cree un fichier /lib/mock-data.ts qui genere des donnees realistes pour un dashboard e-commerce : 12 mois de chiffre d'affaires (avec saisonnalite), 500 commandes avec date, montant, statut, produit et region, 200 clients avec nom, email, date d'inscription, total depense, et 20 produits avec nom, prix, categorie, nombre de ventes. Les donnees doivent etre coherentes entre elles et representent une entreprise en croissance.</blockquote>
<p>Des donnees realistes sont essentielles pour que le dashboard soit convaincant. Claude Code peut generer des patterns de saisonnalite (pics en novembre-decembre pour le e-commerce) et des distributions realistes.</p>

<h2>Etape 3 : Les KPI cards</h2>
<p>La premiere ligne du dashboard affiche les metriques cles. Demande a Claude Code :</p>
<blockquote>Cree un composant KPICard qui affiche : une icone, un label, une valeur principale, un pourcentage de variation par rapport au mois precedent (vert si positif, rouge si negatif), et un mini sparkline chart. Cree 4 KPI cards : Chiffre d'affaires total, Nombre de commandes, Panier moyen, Taux de conversion. Anime les chiffres au chargement avec un effet de comptage.</blockquote>
<p>Les KPI cards donnent une vue instantanee de la sante du business. L'animation de comptage ajoute un effet "wow" qui plait aux clients. Les sparklines montrent la tendance sans prendre trop de place.</p>

<h2>Etape 4 : Les graphiques interactifs</h2>
<p>C'est le coeur du dashboard. Demande a Claude Code de creer plusieurs types de graphiques avec Recharts :</p>
<blockquote>Cree les graphiques suivants avec Recharts : 1) Un graphique en ligne montrant l'evolution du CA sur 12 mois avec tooltip au survol, 2) Un graphique en barres empilees montrant les ventes par categorie de produit par mois, 3) Un graphique circulaire montrant la repartition des ventes par region, 4) Un graphique en aire montrant l'evolution du nombre de clients. Tous les graphiques doivent etre responsive et avoir des couleurs coherentes avec le theme du dashboard.</blockquote>
<p>Recharts est particulierement adapte a React car chaque element du graphique est un composant. Cela rend la personnalisation et l'interactivite beaucoup plus naturelles qu'avec Chart.js.</p>

<h2>Etape 5 : Filtres et interactivite</h2>
<p>Un bon dashboard permet de filtrer et explorer les donnees. Demande a Claude Code :</p>
<blockquote>Ajoute un systeme de filtres en haut du dashboard : selection de la periode (7 jours, 30 jours, 90 jours, 12 mois, personnalise), filtre par categorie de produit, filtre par region. Les filtres doivent mettre a jour tous les graphiques et KPI en temps reel sans rechargement de page. Ajoute aussi un tableau de donnees avec tri par colonne, recherche et pagination pour afficher le detail des commandes.</blockquote>
<p>L'interactivite est ce qui differencie un bon dashboard d'une simple page de graphiques statiques. Les filtres doivent etre rapides et reactifs. Utilise des hooks React pour gerer l'etat des filtres et filtrer les donnees cote client.</p>

<h2>Etape 6 : Export et fonctionnalites avancees</h2>
<p>Pour finaliser le dashboard, ajoute des fonctionnalites d'export et de personnalisation :</p>
<blockquote>Ajoute un bouton d'export PDF qui genere un rapport avec tous les graphiques et KPI actuels. Ajoute aussi un export CSV des donnees du tableau. Implemente un mode sombre/clair avec toggle dans le header. Enfin, ajoute un systeme de drag-and-drop pour reorganiser les widgets du dashboard.</blockquote>
<p>L'export est une fonctionnalite souvent demandee par les managers qui veulent partager les chiffres en reunion. Le drag-and-drop pour reorganiser les widgets donne un sentiment de personnalisation et de controle a l'utilisateur.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis le dashboard complet en suivant les 6 etapes avec Claude Code. Utilise Recharts pour tous les graphiques.</li>
<li>Genere des donnees mock pour un secteur de ton choix (pas forcement e-commerce : SaaS, marketing, logistique...).</li>
<li>Implemente au minimum 3 types de graphiques differents et 2 filtres fonctionnels.</li>
<li>Ajoute le mode sombre/clair et verifie que tous les graphiques sont lisibles dans les deux modes.</li>
<li>Deploie sur Vercel et partage le lien. Bonus : connecte le dashboard a une vraie API (par exemple une Google Sheet via l'API Google Sheets).</li>
</ol>`,
  },
  {
    order: 49,
    module: 8,
    title: "Projet : Mini SaaS (CRM simple)",
    slug: "projet-mini-saas-crm-simple",
    duration: "50 min",
    description: "Construire un CRM complet avec contacts, pipeline de deals, notes et CRUD.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet le plus ambitieux de cette phase : tu vas construire un mini SaaS complet. Un CRM (Customer Relationship Management) est un outil que toutes les entreprises utilisent pour gerer leurs contacts et leurs opportunites commerciales. Des outils comme HubSpot ou Salesforce facturent des centaines d'euros par mois. Tu vas en construire une version simplifiee mais fonctionnelle.</p>
<p>Ce projet couvre toutes les competences d'un developpeur full-stack : base de donnees, API, interface utilisateur, authentification, et deploiement. C'est le type de projet qui te positionne comme un professionnel capable de construire de vrais produits.</p>

<h2>Stack technique</h2>
<ul>
<li><strong>Next.js 14</strong> avec App Router</li>
<li><strong>Prisma</strong> comme ORM pour gerer la base de donnees</li>
<li><strong>SQLite</strong> pour le developpement (facile a configurer, zero serveur)</li>
<li><strong>Tailwind CSS</strong> pour le style</li>
<li><strong>NextAuth.js</strong> pour l'authentification</li>
<li><strong>React Hook Form + Zod</strong> pour les formulaires et la validation</li>
</ul>

<h2>Etape 1 : Schema de base de donnees avec Prisma</h2>
<p>Le schema de donnees est le squelette de ton application. Demande a Claude Code :</p>
<blockquote>Cree un projet Next.js avec Prisma et SQLite. Definis le schema Prisma avec les modeles suivants : User (id, email, name, password, createdAt), Contact (id, firstName, lastName, email, phone, company, position, status, notes, userId, createdAt, updatedAt), Deal (id, title, value, stage, probability, contactId, userId, expectedCloseDate, createdAt, updatedAt), Note (id, content, contactId, dealId, userId, createdAt), Activity (id, type, description, contactId, dealId, userId, createdAt). Les stages de deal sont : prospecting, qualification, proposal, negotiation, closed_won, closed_lost. Genere les migrations et le seed avec des donnees de test.</blockquote>
<p>Prisma simplifie enormement le travail avec la base de donnees. Tu ecris le schema en texte lisible, et Prisma genere les types TypeScript, les migrations et les requetes automatiquement. Claude Code maitrise parfaitement Prisma et va generer un schema propre et bien structure.</p>

<h2>Etape 2 : API CRUD completes</h2>
<p>Chaque entite du CRM a besoin d'operations Create, Read, Update, Delete. Demande a Claude Code :</p>
<blockquote>Cree les routes API pour le CRM : /api/contacts (GET liste paginee avec recherche, POST creation), /api/contacts/[id] (GET detail, PUT mise a jour, DELETE suppression), /api/deals (GET liste avec filtres par stage, POST creation), /api/deals/[id] (GET, PUT, DELETE), /api/notes (GET par contact ou deal, POST creation), /api/activities (GET timeline par contact). Chaque route doit valider les donnees avec Zod, gerer les erreurs proprement et retourner des reponses JSON standardisees.</blockquote>
<p>La validation est cruciale : ne fais jamais confiance aux donnees envoyees par le client. Zod permet de definir des schemas de validation puissants et de generer les types TypeScript correspondants automatiquement.</p>

<h2>Etape 3 : Interface contacts</h2>
<p>La page de gestion des contacts est le coeur du CRM. Demande a Claude Code :</p>
<blockquote>Cree la page /contacts avec : un tableau de contacts avec colonnes (nom, email, entreprise, statut, date de creation), tri par colonne en cliquant sur le header, recherche en temps reel, pagination, un bouton "Ajouter un contact" qui ouvre un formulaire modal avec validation. Cree aussi la page /contacts/[id] avec les details du contact, ses deals associes, ses notes et l'historique d'activite sous forme de timeline.</blockquote>
<p>L'interface doit etre fluide et professionnelle. Les actions courantes (ajouter, modifier, supprimer) doivent etre accessibles en un minimum de clics. Le feedback utilisateur est essentiel : affiche des notifications de succes ou d'erreur apres chaque action.</p>

<h2>Etape 4 : Pipeline de deals (Kanban)</h2>
<p>Le pipeline de deals est l'element le plus visuel et le plus utile du CRM. Demande a Claude Code :</p>
<blockquote>Cree la page /deals avec une vue Kanban drag-and-drop. Chaque colonne represente un stage du pipeline (Prospection, Qualification, Proposition, Negociation, Gagne, Perdu). Chaque carte de deal affiche le titre, le montant, le contact associe et la probabilite. L'utilisateur peut deplacer les deals entre les colonnes en drag-and-drop. En haut, affiche le total de la valeur du pipeline et la valeur ponderee (montant x probabilite). Utilise la librairie @hello-pangea/dnd pour le drag-and-drop.</blockquote>
<p>La vue Kanban est intuitive et permet de voir en un coup d'oeil ou en sont toutes les opportunites commerciales. Le drag-and-drop rend la mise a jour des stages naturelle et rapide. La valeur ponderee du pipeline est un indicateur business essentiel qui aide a prevoir le chiffre d'affaires.</p>

<h2>Etape 5 : Authentification et securite</h2>
<p>Un CRM contient des donnees sensibles. L'authentification est obligatoire. Demande a Claude Code :</p>
<blockquote>Integre NextAuth.js avec un provider credentials (email/mot de passe). Ajoute les pages de login et d'inscription avec formulaires valides. Protege toutes les routes API et pages avec des middlewares d'authentification. Chaque utilisateur ne voit que ses propres contacts et deals. Ajoute un hash bcrypt pour les mots de passe et un token CSRF pour les formulaires.</blockquote>
<p>La securite n'est pas optionnelle, meme pour un projet de portfolio. Un CRM sans authentification ne serait pas pris au serieux. NextAuth.js simplifie enormement l'implementation tout en suivant les bonnes pratiques de securite.</p>

<h2>Etape 6 : Deploiement et finitions</h2>
<p>Pour le deploiement, on migre de SQLite vers PostgreSQL pour la production. Demande a Claude Code :</p>
<blockquote>Adapte le schema Prisma pour supporter PostgreSQL en production (garde SQLite pour le dev). Configure le deploiement sur Vercel avec une base de donnees PostgreSQL sur Supabase ou Neon. Ajoute un dashboard de statistiques sur la page d'accueil : nombre total de contacts, deals en cours, valeur du pipeline, graphique d'evolution des deals gagnes par mois.</blockquote>
<p>Ton CRM est maintenant un produit SaaS fonctionnel. Tu peux l'utiliser toi-meme, le montrer en portfolio, ou meme le proposer a des petites entreprises qui n'ont pas le budget pour HubSpot.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis le CRM complet en suivant les 6 etapes. Chaque etape doit etre fonctionnelle avant de passer a la suivante.</li>
<li>Ajoute au minimum 20 contacts et 10 deals de test pour que le CRM semble reel.</li>
<li>Teste le pipeline Kanban : verifie que le drag-and-drop met a jour le stage en base de donnees.</li>
<li>Cree un compte utilisateur, connecte-toi et verifie que les donnees sont bien isolees par utilisateur.</li>
<li>Deploie sur Vercel avec PostgreSQL et partage le lien. Bonus : ajoute une fonctionnalite d'import/export CSV des contacts.</li>
</ol>`,
  },
  {
    order: 50,
    module: 8,
    title: "Projet : API REST complete avec authentification",
    slug: "projet-api-rest-complete-authentification",
    duration: "45 min",
    description: "Construire une API REST professionnelle avec JWT, validation, documentation et deploiement.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce projet, tu vas construire une API REST de qualite production. Pas un simple exercice avec 2 routes : une API complete avec authentification JWT, validation des donnees, gestion d'erreurs standardisee, rate limiting, documentation Swagger, tests automatises et deploiement. C'est le type d'API que tu construirais pour un vrai client ou une vraie startup.</p>
<p>L'API que tu vas creer est une API de gestion de taches collaboratives, comme une version simplifiee de Todoist ou Asana. Plusieurs utilisateurs peuvent creer des projets, ajouter des taches, assigner des taches a d'autres utilisateurs et suivre l'avancement.</p>

<h2>Architecture de l'API</h2>
<p>Une API REST bien concue suit des conventions strictes :</p>
<ul>
<li><strong>Ressources</strong> : /users, /projects, /tasks, /comments</li>
<li><strong>Verbes HTTP</strong> : GET (lire), POST (creer), PUT (modifier), DELETE (supprimer)</li>
<li><strong>Codes de statut</strong> : 200 (OK), 201 (cree), 400 (mauvaise requete), 401 (non authentifie), 403 (interdit), 404 (non trouve), 500 (erreur serveur)</li>
<li><strong>Pagination</strong> : ?page=1&limit=20 pour les listes</li>
<li><strong>Filtres</strong> : ?status=active&priority=high pour filtrer</li>
<li><strong>Relations</strong> : /projects/123/tasks pour les sous-ressources</li>
</ul>

<h2>Etape 1 : Setup du projet</h2>
<p>Demande a Claude Code de creer la base du projet :</p>
<blockquote>Cree un projet Node.js avec Express et TypeScript. Configure Prisma avec PostgreSQL (SQLite pour le dev). Installe et configure : cors, helmet (securite), morgan (logging), express-rate-limit, zod (validation), jsonwebtoken (JWT), bcryptjs (hash), swagger-jsdoc et swagger-ui-express (documentation). Structure le projet en couches : routes, controllers, services, middlewares, validators.</blockquote>
<p>La structure en couches est essentielle pour la maintenabilite. Les routes definissent les endpoints, les controllers gerent les requetes/reponses, les services contiennent la logique metier, et les middlewares gerent les preoccupations transversales (auth, validation, erreurs).</p>

<h2>Etape 2 : Authentification JWT</h2>
<p>L'authentification est la premiere brique. Demande a Claude Code :</p>
<blockquote>Implemente l'authentification JWT complete : POST /auth/register (inscription avec email, nom, mot de passe), POST /auth/login (connexion, retourne access token + refresh token), POST /auth/refresh (renouveler l'access token avec le refresh token), POST /auth/logout (invalider le refresh token). L'access token expire en 15 minutes, le refresh token en 7 jours. Hash les mots de passe avec bcrypt (12 rounds). Cree un middleware authMiddleware qui verifie le JWT sur les routes protegees.</blockquote>
<p>Le systeme de double token (access + refresh) est le standard de l'industrie. L'access token a une duree de vie courte pour limiter les risques en cas de vol. Le refresh token permet de renouveler l'access token sans redemander le mot de passe. Claude Code va implementer ce pattern correctement avec les bonnes pratiques de securite.</p>

<h2>Etape 3 : CRUD des ressources</h2>
<p>Construis les endpoints pour chaque ressource. Demande a Claude Code :</p>
<blockquote>Cree les CRUD complets pour les ressources Projects et Tasks. Pour Projects : GET /projects (liste paginee de mes projets), POST /projects (creer), GET /projects/:id (detail avec taches), PUT /projects/:id (modifier, seulement si owner), DELETE /projects/:id (supprimer, seulement si owner). Pour Tasks : GET /projects/:id/tasks (taches du projet, filtrable par status et priority), POST /projects/:id/tasks (creer une tache), PUT /tasks/:id (modifier), DELETE /tasks/:id (supprimer). Chaque endpoint valide les donnees avec Zod et retourne des erreurs structurees.</blockquote>
<p>Les reponses d'erreur doivent etre coherentes sur toute l'API. Utilise un format standardise comme <code>{"error": {"code": "VALIDATION_ERROR", "message": "...", "details": [...]}}</code>. Claude Code va creer un error handler centralise qui formate toutes les erreurs de la meme maniere.</p>

<h2>Etape 4 : Fonctionnalites avancees</h2>
<p>Ajoute des fonctionnalites qui font la difference. Demande a Claude Code :</p>
<blockquote>Ajoute les fonctionnalites suivantes : 1) Assignation de taches a un autre utilisateur du projet, 2) Commentaires sur les taches (CRUD complet), 3) Recherche full-text sur les titres et descriptions des taches, 4) Tri par date de creation, priorite ou date d'echeance, 5) Rate limiting : 100 requetes par minute par utilisateur, 6) Logging structure avec Winston pour tracer toutes les requetes.</blockquote>
<p>Le rate limiting protege ton API contre les abus. Le logging structure permet de debugger les problemes en production et de suivre l'utilisation de l'API. Ce sont des elements que les developpeurs juniors oublient souvent mais qui sont essentiels en production.</p>

<h2>Etape 5 : Documentation Swagger</h2>
<p>Une API sans documentation est inutilisable. Demande a Claude Code :</p>
<blockquote>Ajoute une documentation Swagger/OpenAPI complete accessible sur /api-docs. Chaque endpoint doit etre documente avec : description, parametres, corps de requete (avec exemples), reponses possibles (avec exemples pour chaque code de statut), et indication si l'authentification est requise. Ajoute un bouton "Try it out" pour tester les endpoints directement depuis la documentation.</blockquote>
<p>Swagger transforme ta documentation en une interface interactive. Les utilisateurs de ton API peuvent tester les endpoints directement depuis le navigateur. C'est devenu le standard de l'industrie pour la documentation d'API REST.</p>

<h2>Etape 6 : Tests et deploiement</h2>
<p>Avant de deployer, il faut tester. Demande a Claude Code :</p>
<blockquote>Ecris des tests d'integration avec Jest et Supertest pour les endpoints critiques : inscription, connexion, CRUD de projets, CRUD de taches. Chaque test doit utiliser une base de donnees SQLite en memoire. Configure le deploiement sur Railway avec une base PostgreSQL. Ajoute un pipeline CI/CD basique avec GitHub Actions qui lance les tests a chaque push.</blockquote>
<p>Les tests d'integration verifient que tes endpoints fonctionnent de bout en bout. Le pipeline CI/CD empeche de deployer du code casse. Avec Railway, le deploiement est aussi simple qu'un git push. Ton API est maintenant en production, documentee et testee.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis l'API complete en suivant les 6 etapes. Verifie chaque endpoint avec Postman ou la documentation Swagger.</li>
<li>Teste le flux complet : inscription, connexion, creation de projet, ajout de taches, assignation, commentaires.</li>
<li>Verifie que les protections fonctionnent : essaie d'acceder a un projet d'un autre utilisateur, d'envoyer des donnees invalides, de depasser le rate limit.</li>
<li>Ecris au minimum 10 tests d'integration couvrant les cas critiques et les cas d'erreur.</li>
<li>Deploie sur Railway et partage l'URL de la documentation Swagger. Bonus : ajoute des webhooks qui envoient une notification quand une tache est assignee.</li>
</ol>`,
  },
  {
    order: 51,
    module: 8,
    title: "Projet : Application full-stack deployee",
    slug: "projet-application-full-stack-deployee",
    duration: "50 min",
    description: "Construire une application complete avec frontend, backend, auth et deploiement sur Vercel.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet final du Module 7, et c'est le plus complet. Tu vas construire une application full-stack de gestion de projets, de la premiere ligne de code au deploiement en production. Cette application sera ta piece maitresse de portfolio : elle demontre que tu peux construire un produit complet, fonctionnel et deploye.</p>
<p>L'application est un gestionnaire de projets collaboratif. Chaque utilisateur peut creer des projets, ajouter des taches avec des deadlines et des priorites, organiser ses taches en colonnes Kanban, et suivre sa productivite avec un dashboard personnel.</p>

<h2>Vue d'ensemble de l'application</h2>
<p>L'application finale comprend :</p>
<ul>
<li><strong>Page d'accueil</strong> : Landing page de presentation avec CTA vers l'inscription</li>
<li><strong>Authentification</strong> : Inscription, connexion, deconnexion, page de profil</li>
<li><strong>Dashboard</strong> : Vue d'ensemble avec KPIs (taches terminees, en cours, en retard)</li>
<li><strong>Projets</strong> : Liste des projets, creation, modification, suppression</li>
<li><strong>Taches</strong> : Vue Kanban avec drag-and-drop, formulaire de creation/edition</li>
<li><strong>Profil</strong> : Modifier son nom, email, avatar, mot de passe</li>
</ul>

<h2>Etape 1 : Architecture et setup</h2>
<p>Demande a Claude Code de creer l'architecture complete :</p>
<blockquote>Cree un projet Next.js 14 avec App Router, TypeScript, Tailwind CSS, Prisma (SQLite pour dev), NextAuth.js. Structure les dossiers : /app/(auth)/login et register, /app/(dashboard)/dashboard, projects, projects/[id], profile. Cree le layout principal avec sidebar responsive. Configure Prisma avec les modeles User, Project, Task (title, description, status, priority, dueDate, projectId, assigneeId). Genere les migrations et un fichier seed.</blockquote>
<p>L'App Router de Next.js 14 permet d'organiser les routes avec des dossiers. Les groupes de routes entre parentheses (auth) et (dashboard) permettent de partager des layouts differents entre les pages publiques et les pages protegees.</p>

<h2>Etape 2 : Authentification complete</h2>
<p>L'authentification est le premier element a implementer car toutes les autres pages en dependent. Demande a Claude Code :</p>
<blockquote>Implemente l'authentification complete avec NextAuth.js : page de login avec email/mot de passe et design professionnel, page d'inscription avec validation (email valide, mot de passe 8 caracteres minimum), redirection automatique vers le dashboard apres connexion, middleware de protection des routes /dashboard/*, bouton de deconnexion dans la sidebar, affichage du nom et de l'avatar de l'utilisateur dans le header.</blockquote>
<p>Teste l'authentification en profondeur : essaie de creer un compte avec un email deja utilise, de te connecter avec un mauvais mot de passe, d'acceder au dashboard sans etre connecte. Chaque cas doit afficher un message d'erreur clair et utile.</p>

<h2>Etape 3 : Gestion des projets</h2>
<p>Demande a Claude Code de construire l'interface de gestion des projets :</p>
<blockquote>Cree la page /projects avec une grille de cartes projet. Chaque carte affiche le nom du projet, la description (tronquee), le nombre de taches total et terminees, une barre de progression, et la date de derniere mise a jour. Ajoute un bouton "Nouveau projet" qui ouvre un formulaire modal. Cree la page /projects/[id] avec le detail du projet : description complete, vue Kanban des taches, et un onglet parametres pour modifier ou supprimer le projet.</blockquote>
<p>La barre de progression sur chaque carte projet donne une vue instantanee de l'avancement. C'est un detail UX qui fait toute la difference dans un portfolio : cela montre que tu penses a l'experience utilisateur et pas seulement a la fonctionnalite.</p>

<h2>Etape 4 : Vue Kanban des taches</h2>
<p>La vue Kanban est l'element central de l'application. Demande a Claude Code :</p>
<blockquote>Cree une vue Kanban avec 4 colonnes : A faire, En cours, En review, Termine. Chaque tache est une carte draggable affichant le titre, la priorite (basse/moyenne/haute/urgente avec code couleur), la date d'echeance (rouge si depassee), et l'avatar de l'assignee. Implemente le drag-and-drop avec @hello-pangea/dnd. Quand une carte est deplacee, mets a jour le statut en base de donnees via une route API. Ajoute un formulaire de creation de tache avec titre, description, priorite, date d'echeance et assignee.</blockquote>
<p>Le drag-and-drop est l'interaction qui rend l'application vraiment agreable a utiliser. Chaque deplacement doit etre fluide, avec un feedback visuel clair (ombre portee sur la carte en cours de deplacement, highlight de la zone de depot). Claude Code va generer tout le code necessaire avec les animations appropriees.</p>

<h2>Etape 5 : Dashboard personnel</h2>
<p>Le dashboard est la page d'accueil apres connexion. Demande a Claude Code :</p>
<blockquote>Cree la page /dashboard avec : 4 KPI cards (taches a faire, en cours, terminees cette semaine, en retard), un graphique en ligne montrant les taches terminees par jour sur les 30 derniers jours (avec Recharts), une liste des 5 taches les plus urgentes (triees par date d'echeance), un apercu de l'activite recente (taches creees, deplacees, terminees). Le dashboard doit se charger rapidement en utilisant les Server Components de Next.js.</blockquote>
<p>Les Server Components de Next.js 14 permettent de charger les donnees directement cote serveur, sans API calls supplementaires. Le dashboard se charge en un seul round-trip, ce qui le rend tres rapide. Claude Code va optimiser les requetes Prisma pour charger toutes les donnees necessaires efficacement.</p>

<h2>Etape 6 : Deploiement sur Vercel</h2>
<p>Le deploiement est la derniere etape, mais pas la moindre. Demande a Claude Code :</p>
<blockquote>Configure le deploiement sur Vercel : migre la base de donnees de SQLite vers PostgreSQL en utilisant Neon (gratuit), configure les variables d'environnement (DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL), ajoute un domaine personnalise si disponible, configure les headers de securite (CSP, HSTS). Ajoute un fichier README professionnel avec screenshots, stack technique, et instructions d'installation locale.</blockquote>
<p>Ton application est maintenant en ligne. Tu as un produit complet, fonctionnel et deploye. C'est exactement ce que les clients et les recruteurs veulent voir : pas des exercices academiques, mais des vrais produits qui marchent. Ajoute le lien dans ton portfolio, sur ton LinkedIn, et dans ton CV.</p>

<blockquote>Ce projet seul demontre plus de competences techniques que 90% des portfolios de developpeurs juniors. Tu l'as construit en une journee grace a Claude Code.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis l'application complete en suivant les 6 etapes. Ne passe pas a l'etape suivante tant que l'etape en cours ne fonctionne pas parfaitement.</li>
<li>Cree 3 projets avec au minimum 10 taches chacun pour que l'application semble vivante.</li>
<li>Teste toutes les fonctionnalites : inscription, connexion, creation de projet, ajout de taches, drag-and-drop Kanban, dashboard.</li>
<li>Deploie sur Vercel avec PostgreSQL et verifie que tout fonctionne en production.</li>
<li>Prends des screenshots de l'application et cree une courte video de demo (1-2 minutes) que tu pourras montrer a des clients potentiels.</li>
</ol>`,
  },

  // ═══════════════════════════════════════════════════
  // MODULE 9 : Projets Pratiques avec OpenClaw (6 lecons)
  // ═══════════════════════════════════════════════════
  {
    order: 52,
    module: 9,
    title: "Projet : Agent de veille concurrentielle automatise",
    slug: "projet-agent-veille-concurrentielle-automatise",
    duration: "50 min",
    description: "Construire un agent qui surveille les concurrents et envoie des rapports quotidiens.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un agent OpenClaw qui fait de la veille concurrentielle 24h/24. L'agent surveille les sites web, les reseaux sociaux et les prix de tes concurrents, puis t'envoie un rapport quotidien structure avec les changements detectes. C'est un service que les agences de marketing facturent entre 500 et 2000 euros par mois, et tu vas le construire en une seule session.</p>
<p>La veille concurrentielle est cruciale pour toute entreprise. Savoir quand un concurrent lance un nouveau produit, change ses prix ou publie du contenu peut faire la difference entre gagner et perdre un marche. L'agent que tu vas creer automatise completement ce travail.</p>

<h2>Architecture de l'agent</h2>
<p>L'agent fonctionne en 3 phases :</p>
<ul>
<li><strong>Collecte</strong> : L'agent parcourt les sources definies (sites web, pages LinkedIn, comptes Twitter) a intervalles reguliers</li>
<li><strong>Analyse</strong> : L'agent compare les nouvelles donnees avec les precedentes et identifie les changements significatifs</li>
<li><strong>Rapport</strong> : L'agent genere un rapport structure et l'envoie par Telegram, email ou les deux</li>
</ul>

<h2>Etape 1 : Configurer l'agent OpenClaw</h2>
<p>Commence par creer et configurer l'agent de base. Demande a Claude Code :</p>
<blockquote>Cree un skill OpenClaw pour la veille concurrentielle. Le skill doit avoir un fichier de configuration qui definit les concurrents a surveiller : pour chacun, le nom, l'URL du site web, l'URL de la page de tarification, les comptes sociaux (LinkedIn, Twitter). Cree aussi un systeme de stockage local (fichiers JSON) pour sauvegarder les donnees collectees et les comparer dans le temps.</blockquote>
<p>La configuration doit etre facile a modifier. Un client doit pouvoir ajouter ou retirer un concurrent simplement en editant le fichier de config, sans toucher au code. Claude Code va creer une structure de configuration claire et documentee.</p>

<h2>Etape 2 : Scraping intelligent des sites web</h2>
<p>L'agent doit pouvoir lire les pages web des concurrents. Demande a Claude Code :</p>
<blockquote>Implemente la collecte de donnees pour l'agent : 1) Scraping de la page d'accueil pour detecter les changements majeurs (nouveau slogan, nouvelles offres), 2) Scraping de la page de tarification pour detecter les changements de prix, 3) Extraction des articles de blog recents (titre, date, resume), 4) Capture d'ecran automatique des pages pour comparaison visuelle. Utilise Puppeteer ou Playwright pour le rendu JavaScript et gere les protections anti-bot basiques.</blockquote>
<p>Le scraping doit etre respectueux : pas de requetes trop frequentes, respect du robots.txt, et gestion propre des erreurs. Si une page ne repond pas, l'agent doit le noter dans le rapport plutot que de planter. Claude Code va implementer des delais entre les requetes et une gestion d'erreurs robuste.</p>

<h2>Etape 3 : Suivi des reseaux sociaux</h2>
<p>Les reseaux sociaux sont une mine d'informations. Demande a Claude Code :</p>
<blockquote>Ajoute le suivi des reseaux sociaux a l'agent : 1) Recuperer les derniers posts LinkedIn d'une page entreprise (via le flux RSS ou l'API), 2) Recuperer les derniers tweets d'un compte (via l'API ou un scraper), 3) Analyser le ton et les themes des publications avec Claude API, 4) Detecter les annonces importantes (levee de fonds, nouveau produit, recrutement massif). Stocke l'historique pour detecter les tendances.</blockquote>
<p>L'analyse par l'IA est ce qui transforme des donnees brutes en informations utiles. Au lieu de simplement lister les posts, l'agent identifie les annonces strategiques et les tendances. C'est la valeur ajoutee qui justifie un prix premium pour ce service.</p>

<h2>Etape 4 : Detection des changements</h2>
<p>Le coeur de la veille, c'est la detection de ce qui a change. Demande a Claude Code :</p>
<blockquote>Implemente un systeme de detection de changements : compare les donnees actuelles avec les precedentes et categorise les changements en 3 niveaux : critique (changement de prix, nouveau produit), important (nouveau contenu, changement de message), mineur (corrections mineures, mises a jour de design). Utilise Claude API pour evaluer l'importance d'un changement en contexte business. Stocke l'historique des changements dans un fichier JSON horodate.</blockquote>
<p>La categorisation par niveau d'importance permet au client de se concentrer sur l'essentiel. Un changement de prix chez un concurrent est critique et merite une notification immediate. Un changement de couleur sur leur site est mineur et peut attendre le rapport quotidien.</p>

<h2>Etape 5 : Generation du rapport quotidien</h2>
<p>Le rapport est le livrable final de l'agent. Demande a Claude Code :</p>
<blockquote>Cree un generateur de rapport qui produit un resume structure : 1) Section "Alertes critiques" en haut avec les changements majeurs, 2) Section par concurrent avec les changements detectes, 3) Section "Tendances du marche" avec une analyse globale, 4) Section "Recommandations" avec des actions suggerees. Le rapport doit etre genere en format HTML (pour l'email) et en texte (pour Telegram). Utilise Claude API pour rediger les analyses et les recommandations.</blockquote>
<p>Le rapport doit etre concis mais complet. Un manager doit pouvoir le lire en 5 minutes et savoir exactement ce qui a change dans son marche. Les recommandations generees par l'IA ajoutent une couche de valeur strategique qui justifie un abonnement mensuel.</p>

<h2>Etape 6 : Planification et envoi automatique</h2>
<p>L'agent doit tourner de maniere autonome. Demande a Claude Code :</p>
<blockquote>Configure l'agent pour qu'il s'execute automatiquement : 1) Collecte toutes les 6 heures, 2) Rapport quotidien envoye a 8h du matin par Telegram et email, 3) Alertes immediates sur Telegram pour les changements critiques, 4) Rapport hebdomadaire resume le dimanche soir. Configure le cron dans OpenClaw et ajoute un systeme de retry en cas d'echec.</blockquote>
<p>L'automatisation complete est ce qui differencie un outil d'un service. Ton agent travaille pendant que tu dors, et le client recoit son rapport chaque matin sans rien faire. C'est un produit que tu peux vendre comme un service recurrent avec un abonnement mensuel.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Choisis 3 entreprises concurrentes dans un secteur que tu connais (ou un secteur fictif). Configure l'agent avec leurs URLs et comptes sociaux.</li>
<li>Construis l'agent complet en suivant les 6 etapes. Teste chaque phase separement avant de les combiner.</li>
<li>Lance une collecte manuelle et verifie que les donnees sont bien stockees en JSON.</li>
<li>Genere un rapport de test et verifie qu'il est lisible et pertinent. Ajuste le prompt Claude si les recommandations ne sont pas assez specifiques.</li>
<li>Configure l'envoi automatique sur Telegram et laisse l'agent tourner pendant 3 jours. Bonus : ajoute un suivi des avis Google des concurrents.</li>
</ol>`,
  },
  {
    order: 53,
    module: 9,
    title: "Projet : Agent de gestion et tri d'emails",
    slug: "projet-agent-gestion-tri-emails",
    duration: "50 min",
    description: "Construire un agent qui categorise, trie et prepare des reponses pour tes emails.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un agent OpenClaw qui gere ta boite mail de maniere intelligente. L'agent categorise automatiquement les emails entrants, flag les messages urgents, prepare des brouillons de reponse et genere un resume quotidien. Un professionnel passe en moyenne 2h30 par jour a gerer ses emails. Ton agent va reduire ce temps a 15 minutes.</p>
<p>Ce projet est particulierement demande par les entrepreneurs, les freelances et les managers qui recoivent des dizaines voire des centaines d'emails par jour. C'est un service que tu peux vendre entre 200 et 500 euros par mois a des clients individuels.</p>

<h2>Architecture de l'agent</h2>
<p>L'agent email fonctionne en boucle continue :</p>
<ul>
<li><strong>Reception</strong> : L'agent verifie la boite mail toutes les 5 minutes via IMAP ou l'API Gmail</li>
<li><strong>Analyse</strong> : Chaque nouvel email est analyse par Claude pour etre categorise et evalue en urgence</li>
<li><strong>Action</strong> : Selon la categorie, l'agent applique des regles (label, flag, brouillon de reponse)</li>
<li><strong>Rapport</strong> : Un resume quotidien est genere et envoye sur Telegram</li>
</ul>

<h2>Etape 1 : Connexion a la boite mail</h2>
<p>La premiere etape est de connecter l'agent a un compte email. Demande a Claude Code :</p>
<blockquote>Cree un skill OpenClaw pour la gestion d'emails. Configure la connexion IMAP/SMTP pour lire et envoyer des emails (compatible Gmail, Outlook, et tout fournisseur IMAP). Implemente la recuperation des nouveaux emails non lus avec leurs metadonnees : expediteur, objet, date, corps du message (texte brut et HTML), pieces jointes (noms et tailles). Stocke les emails traites dans un fichier JSON pour eviter de les retraiter.</blockquote>
<p>La connexion IMAP est universelle : elle fonctionne avec tous les fournisseurs d'email. Pour Gmail, tu peux aussi utiliser l'API Gmail qui offre plus de fonctionnalites (labels, recherche avancee). Claude Code va configurer les deux options pour que le client puisse choisir.</p>

<h2>Etape 2 : Categorisation intelligente</h2>
<p>C'est la ou l'IA entre en jeu. Demande a Claude Code :</p>
<blockquote>Implemente la categorisation automatique des emails avec Claude API. Chaque email doit etre classe dans une des categories suivantes : urgent (necessite une reponse dans les 2 heures), important (necessite une reponse dans la journee), informatif (newsletter, notification, pas de reponse requise), spam (publicite non desiree, phishing), financier (facture, devis, paiement), personnel (email d'un contact connu). L'agent doit aussi extraire les informations cles : actions demandees, deadlines mentionnees, montants financiers, noms de personnes. Stocke la categorisation et les extractions dans un JSON structure.</blockquote>
<p>Le prompt envoye a Claude est crucial pour la qualite de la categorisation. Il doit inclure le contexte de l'utilisateur : son secteur d'activite, ses clients habituels, ses priorites. Plus le prompt est specifique, plus la categorisation sera precise. Claude Code va creer un prompt template configurable par l'utilisateur.</p>

<h2>Etape 3 : Actions automatiques</h2>
<p>Selon la categorie, l'agent execute des actions differentes. Demande a Claude Code :</p>
<blockquote>Implemente les actions automatiques basees sur la categorisation : 1) Emails urgents : envoyer une notification Telegram immediate avec un resume et les actions requises, 2) Emails importants : preparer un brouillon de reponse et le sauvegarder dans les brouillons Gmail, 3) Emails informatifs : marquer comme lu et archiver, 4) Spam : deplacer dans le dossier spam, 5) Emails financiers : extraire les montants et les deadlines et les ajouter a un tableur de suivi. Chaque action doit etre configurable par l'utilisateur via le fichier de config.</blockquote>
<p>Les brouillons de reponse sont la fonctionnalite la plus apreciee. L'agent ne repond pas automatiquement (ce serait risque), mais il prepare un brouillon que l'utilisateur peut revoir, modifier et envoyer en 30 secondes au lieu de 5 minutes. Claude Code va generer des reponses professionnelles et contextuelles.</p>

<h2>Etape 4 : Regles personnalisees</h2>
<p>Chaque utilisateur a des besoins specifiques. Demande a Claude Code :</p>
<blockquote>Ajoute un systeme de regles personnalisees que l'utilisateur peut configurer : 1) Regles par expediteur (les emails de ce@client.com sont toujours urgents), 2) Regles par mot-cle (si l'objet contient "facture" ou "devis", categoriser comme financier), 3) Regles par domaine (tous les emails de @monentreprise.com sont importants), 4) Regles de silence (ne pas notifier pour les newsletters entre 22h et 7h), 5) Regles de delegation (transferer les emails techniques a tech@equipe.com). Les regles sont prioritaires sur la categorisation IA.</blockquote>
<p>Les regles personnalisees donnent le controle a l'utilisateur. Il sait que certains expediteurs sont toujours prioritaires ou que certains types d'emails n'ont jamais besoin de notification. Le systeme de regles doit etre simple a configurer, idealement via un fichier YAML ou JSON lisible.</p>

<h2>Etape 5 : Resume quotidien</h2>
<p>Le resume quotidien est le produit final de l'agent. Demande a Claude Code :</p>
<blockquote>Cree un generateur de resume quotidien envoye sur Telegram a 8h : 1) Nombre total d'emails recus, 2) Repartition par categorie, 3) Liste des emails urgents non traites avec resume, 4) Actions en attente (reponses a envoyer, factures a payer), 5) Top 3 des emails les plus importants avec resume detaille, 6) Statistiques de la semaine (comparaison avec la semaine precedente). Le resume doit etre concis et actionnable : l'utilisateur doit savoir exactement quoi faire en le lisant.</blockquote>
<p>Le resume transforme une boite mail chaotique en une liste d'actions claire. Au lieu de parcourir 50 emails un par un, l'utilisateur lit un resume de 2 minutes et sait exactement quels emails meritent son attention. C'est un gain de productivite enorme que les clients sont prets a payer.</p>

<h2>Etape 6 : Apprentissage et amelioration</h2>
<p>L'agent doit s'ameliorer avec le temps. Demande a Claude Code :</p>
<blockquote>Ajoute un systeme d'apprentissage simple : quand l'utilisateur recategorise manuellement un email (en repondant "Non, cet email est urgent" sur Telegram), l'agent stocke cette correction et l'utilise pour affiner ses futures categorisations. Implemente un fichier de feedback qui accumule les corrections et les integre dans le prompt Claude. Ajoute aussi des statistiques de precision : pourcentage d'emails correctement categorises sur les 7 derniers jours.</blockquote>
<p>L'apprentissage par feedback rend l'agent de plus en plus precis au fil du temps. Apres 2-3 semaines d'utilisation, les erreurs de categorisation deviennent rares car l'agent connait les preferences de l'utilisateur. C'est ce qui fidelise les clients et justifie un abonnement long terme.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Cree un compte email de test (Gmail recommande) et envoie-toi 20 emails de categories differentes : urgents, importants, newsletters, spam.</li>
<li>Construis l'agent complet en suivant les 6 etapes. Teste la connexion IMAP avec ton compte de test.</li>
<li>Verifie que la categorisation est correcte sur tes 20 emails de test. Ajuste le prompt si necessaire.</li>
<li>Configure 5 regles personnalisees et verifie qu'elles prennent bien le dessus sur la categorisation IA.</li>
<li>Lance l'agent pendant 2 jours et verifie les resumes quotidiens sur Telegram. Bonus : ajoute la detection de phishing avec analyse des liens suspects.</li>
</ol>`,
  },
  {
    order: 54,
    module: 9,
    title: "Projet : Agent de creation de contenu multi-plateforme",
    slug: "projet-agent-creation-contenu-multi-plateforme",
    duration: "50 min",
    description: "Construire un agent qui genere du contenu adapte pour LinkedIn, Twitter et newsletter.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un agent OpenClaw qui transforme un simple brief en contenu adapte pour plusieurs plateformes simultanement. A partir d'une idee ou d'un sujet, l'agent genere un post LinkedIn professionnel, un thread Twitter percutant, un paragraphe de newsletter et des hashtags optimises. C'est l'outil reve pour les community managers, les entrepreneurs et les createurs de contenu.</p>
<p>La creation de contenu multi-plateforme est un des services les plus demandes en freelance. Un community manager passe 3 a 4 heures par jour a adapter le meme message pour chaque plateforme. Ton agent fait ce travail en 30 secondes. C'est un produit que tu peux vendre comme un service a 300-800 euros par mois.</p>

<h2>Le probleme que l'agent resout</h2>
<p>Chaque plateforme a ses codes et ses formats :</p>
<ul>
<li><strong>LinkedIn</strong> : Ton professionnel, storytelling, 1300 caracteres max, emojis moderes, hashtags en fin de post, accroche forte sur la premiere ligne</li>
<li><strong>Twitter/X</strong> : Court et percutant, threads de 5-10 tweets, hashtags integres, ton plus decontracte, call-to-action clair</li>
<li><strong>Newsletter</strong> : Ton personnel et direct, longueur variable, structure avec sous-titres, lien vers le contenu complet</li>
</ul>
<p>Adapter manuellement un meme message pour 3 plateformes prend 30 a 60 minutes. L'agent le fait en secondes tout en respectant les specificites de chaque canal.</p>

<h2>Etape 1 : Architecture du skill</h2>
<p>Demande a Claude Code de creer la structure :</p>
<blockquote>Cree un skill OpenClaw pour la creation de contenu multi-plateforme. Le skill doit accepter un brief via Telegram (un message texte de 1 a 5 phrases decrivant le sujet). Il genere automatiquement : 1 post LinkedIn, 1 thread Twitter (5-8 tweets), 1 paragraphe newsletter. Le skill doit aussi avoir un fichier de configuration pour le tone of voice, le secteur d'activite, les hashtags recurrents et les mots a eviter.</blockquote>
<p>Le brief est l'entree de l'agent. Il peut etre aussi simple que "Parler de l'importance de l'automatisation pour les PME" ou aussi detaille qu'un brief complet avec persona, angle et objectifs. L'agent s'adapte au niveau de detail fourni.</p>

<h2>Etape 2 : Generation du contenu LinkedIn</h2>
<p>LinkedIn est souvent la plateforme prioritaire pour le B2B. Demande a Claude Code :</p>
<blockquote>Implemente la generation de posts LinkedIn avec ces specifications : accroche forte sur la premiere ligne (question, statistique choc ou affirmation audacieuse), structure en paragraphes courts (2-3 lignes max), utilisation du storytelling quand c'est pertinent, call-to-action en fin de post (question pour generer des commentaires), 5-8 hashtags pertinents, longueur optimale entre 800 et 1300 caracteres. Le prompt Claude doit inclure des exemples de posts performants comme reference de style.</blockquote>
<p>La premiere ligne est cruciale sur LinkedIn : c'est ce qui s'affiche avant le "voir plus". Si la premiere ligne n'accroche pas, personne ne clique. L'agent doit donc consacrer une attention particuliere a cette accroche. Les meilleurs posts LinkedIn commencent par une question provocante, un chiffre surprenant ou une histoire personnelle.</p>

<h2>Etape 3 : Generation du thread Twitter</h2>
<p>Twitter demande un format completement different. Demande a Claude Code :</p>
<blockquote>Implemente la generation de threads Twitter : premier tweet accrocheur qui donne envie de lire la suite (avec "Un thread" ou emoji fil), 5 a 8 tweets de maximum 280 caracteres chacun, chaque tweet apporte une information complete (pas de phrase coupee entre deux tweets), dernier tweet avec un resume et un call-to-action (follow, retweet, like), hashtags pertinents integres naturellement dans le texte ou en dernier tweet. L'agent doit aussi generer une version "tweet unique" resume pour les cas ou un thread n'est pas necessaire.</blockquote>
<p>Un bon thread Twitter raconte une histoire en episodes. Chaque tweet doit etre assez interessant pour donner envie de lire le suivant, tout en etant comprehensible seul. C'est un exercice de style que Claude maitrise bien grace a son entrainement sur des millions de tweets performants.</p>

<h2>Etape 4 : Generation du contenu newsletter</h2>
<p>La newsletter est plus longue et plus personnelle. Demande a Claude Code :</p>
<blockquote>Implemente la generation de contenu newsletter : un titre accrocheur pour l'objet de l'email, une introduction personnelle et directe (comme si tu parlais a un ami), le corps du contenu structure avec des sous-titres, une conclusion avec un call-to-action clair (cliquer sur un lien, repondre a l'email), un PS avec un bonus ou une reflexion finale. Longueur cible : 300 a 500 mots. Ton decontracte mais professionnel. Le contenu doit donner envie de repondre et de partager.</blockquote>
<p>La newsletter est le canal le plus intime. Le lecteur a donne son email, il attend du contenu de qualite. Le ton doit etre personnel et direct, comme un email a un collegue. Les meilleures newsletters ont des taux d'ouverture de 40-60% grace a des objets d'email accrocheurs et un contenu qui apporte une vraie valeur.</p>

<h2>Etape 5 : Calendrier editorial</h2>
<p>Un agent de contenu doit aussi aider a planifier. Demande a Claude Code :</p>
<blockquote>Ajoute un systeme de calendrier editorial : l'utilisateur peut envoyer un message Telegram "planifie 5 posts pour la semaine prochaine sur le theme [theme]". L'agent genere 5 briefs varies, produit le contenu pour chaque plateforme, et propose un planning avec les meilleurs jours et heures de publication. Stocke le calendrier dans un JSON et envoie un rappel Telegram 1 heure avant chaque publication prevue avec le contenu a copier-coller.</blockquote>
<p>Le calendrier editorial resout le probleme du "syndrome de la page blanche". Au lieu de chercher quoi poster chaque jour, l'agent prepare une semaine entiere de contenu en quelques minutes. L'utilisateur n'a plus qu'a valider et copier-coller au bon moment.</p>

<h2>Etape 6 : Optimisation et analyse</h2>
<p>Pour s'ameliorer, l'agent doit apprendre ce qui marche. Demande a Claude Code :</p>
<blockquote>Ajoute un systeme de feedback : l'utilisateur peut noter chaque contenu genere (1 a 5 etoiles via Telegram) et indiquer les performances (nombre de likes, commentaires, partages). L'agent stocke ces donnees et les utilise pour ajuster son style : il favorise les formats et les accroches qui performent le mieux. Genere un rapport mensuel avec les contenus les plus performants et les recommandations pour le mois suivant.</blockquote>
<p>L'analyse des performances boucle la boucle : l'agent genere du contenu, l'utilisateur le publie, les resultats sont mesures, et l'agent ajuste sa strategie. Apres quelques semaines, l'agent connait le style qui fonctionne le mieux pour chaque plateforme et chaque audience.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Configure l'agent avec un persona et un secteur d'activite de ton choix. Definis le tone of voice, les hashtags recurrents et le public cible.</li>
<li>Envoie 5 briefs differents via Telegram et analyse la qualite du contenu genere pour chaque plateforme.</li>
<li>Verifie que le contenu respecte les contraintes de chaque plateforme (longueur, format, ton).</li>
<li>Utilise la fonctionnalite de calendrier editorial pour planifier une semaine de contenu.</li>
<li>Publie au moins un post LinkedIn et un thread Twitter generes par l'agent. Note les performances et donne du feedback a l'agent. Bonus : ajoute la generation d'images avec une API comme DALL-E ou Midjourney.</li>
</ol>`,
  },
  {
    order: 55,
    module: 9,
    title: "Projet : Agent multi-canal (Telegram + Discord + WhatsApp)",
    slug: "projet-agent-multi-canal-telegram-discord-whatsapp",
    duration: "50 min",
    description: "Construire un agent disponible sur tous les canaux avec contexte partage.",
    content: `<h2>Objectif du projet</h2>
<p>Tu vas construire un agent OpenClaw qui est disponible simultanement sur Telegram, Discord et WhatsApp. Le meme agent, avec la meme personnalite et la meme memoire, accessible depuis n'importe quel canal. C'est exactement ce dont ont besoin les entreprises modernes : leurs clients les contactent sur le canal de leur choix, et l'agent repond partout de maniere coherente.</p>
<p>Ce projet est techniquement plus complexe que les precedents car il implique la gestion de plusieurs connecteurs en parallele et un systeme de memoire partage entre les canaux. Mais avec OpenClaw, la majeure partie de la complexite est deja geree par le framework.</p>

<h2>Pourquoi le multi-canal est essentiel</h2>
<p>Les habitudes de communication varient enormement selon les personnes et les contextes :</p>
<ul>
<li><strong>Telegram</strong> : Populaire chez les developpeurs, les communautes tech, les early adopters</li>
<li><strong>Discord</strong> : Standard pour les communautes, le gaming, les groupes de travail</li>
<li><strong>WhatsApp</strong> : Dominant pour le grand public, les PME, le commerce local</li>
</ul>
<p>Un agent mono-canal force tes clients a s'adapter a toi. Un agent multi-canal s'adapte a eux. C'est une proposition de valeur beaucoup plus forte et qui justifie un prix plus eleve.</p>

<h2>Etape 1 : Configuration des connecteurs</h2>
<p>Demande a Claude Code de configurer les trois canaux :</p>
<blockquote>Cree un skill OpenClaw multi-canal. Configure les trois connecteurs : 1) Telegram avec le BotFather (cree un bot, recupere le token), 2) Discord avec l'API Discord (cree une application, configure les intents, invite le bot sur un serveur), 3) WhatsApp avec l'API WhatsApp Business (via un provider comme Twilio ou l'API Meta directe). Chaque connecteur doit pouvoir envoyer et recevoir des messages texte, des images et des fichiers. Cree un fichier de configuration qui centralise les tokens et les parametres de chaque canal.</blockquote>
<p>La configuration des connecteurs est la partie la plus technique. Chaque plateforme a son propre systeme d'authentification et ses propres regles. Claude Code va generer les configurations pour chaque plateforme avec les instructions detaillees pour obtenir les tokens necessaires.</p>

<h2>Etape 2 : Couche d'abstraction des messages</h2>
<p>Pour que l'agent traite les messages de maniere uniforme, il faut une couche d'abstraction. Demande a Claude Code :</p>
<blockquote>Cree une couche d'abstraction qui normalise les messages de tous les canaux dans un format uniforme : { source: "telegram" | "discord" | "whatsapp", userId: string, userName: string, channelId: string, messageText: string, attachments: [], timestamp: Date, metadata: {} }. Cree aussi un systeme de reponse uniforme : l'agent ecrit sa reponse une seule fois, et le systeme l'adapte au format du canal d'origine (markdown pour Telegram, embeds pour Discord, texte simple pour WhatsApp).</blockquote>
<p>La couche d'abstraction est une piece d'architecture essentielle. Sans elle, tu devrais ecrire le meme code trois fois avec des variations mineures pour chaque plateforme. Avec elle, la logique de l'agent est ecrite une seule fois et fonctionne partout. C'est un pattern de design classique en ingenierie logicielle.</p>

<h2>Etape 3 : Memoire partagee entre canaux</h2>
<p>L'agent doit se souvenir des conversations quel que soit le canal. Demande a Claude Code :</p>
<blockquote>Implemente un systeme de memoire partagee : 1) Identification de l'utilisateur cross-canal (un meme utilisateur peut etre sur Telegram et WhatsApp), 2) Historique de conversation unifie : les messages de tous les canaux sont stockes dans la meme timeline, 3) Contexte persistant : si l'utilisateur parle d'un projet sur Telegram puis continue sur WhatsApp, l'agent se souvient du contexte, 4) Profil utilisateur enrichi : preferences, historique d'interactions, sujets abordes. Stocke tout dans des fichiers JSON structures par utilisateur.</blockquote>
<p>La memoire partagee est ce qui rend l'experience magique. Imagine : tu commences une conversation sur Telegram le matin, tu continues sur WhatsApp depuis ton telephone l'apres-midi, et l'agent se souvient parfaitement du contexte. Aucun chatbot classique ne fait ca. C'est une fonctionnalite qui impressionne les clients a chaque fois.</p>

<h2>Etape 4 : Gestion des specificites de chaque canal</h2>
<p>Malgre l'abstraction, chaque canal a des fonctionnalites uniques. Demande a Claude Code :</p>
<blockquote>Gere les specificites de chaque canal : 1) Telegram : boutons inline, commandes /start /help /status, messages formates en Markdown, 2) Discord : embeds riches avec couleurs et champs, reactions emoji, commandes slash, roles et permissions, 3) WhatsApp : boutons de reponse rapide, messages templates pour les notifications, gestion des medias (images, PDF, audio). L'agent doit utiliser les fonctionnalites natives de chaque plateforme pour offrir la meilleure experience possible sur chacune.</blockquote>
<p>Les boutons inline de Telegram, les embeds Discord et les reponses rapides WhatsApp rendent l'interaction beaucoup plus fluide que du texte brut. L'agent doit exploiter ces fonctionnalites natives pour offrir une experience premium sur chaque canal.</p>

<h2>Etape 5 : Commandes et fonctionnalites</h2>
<p>Definis ce que l'agent peut faire. Demande a Claude Code :</p>
<blockquote>Implemente les fonctionnalites suivantes accessibles depuis tous les canaux : 1) /help : affiche les commandes disponibles, 2) /status : affiche le statut de l'agent et les statistiques, 3) Reponse aux questions : l'agent repond aux questions basees sur une base de connaissances configurable, 4) /rappel [texte] [date] : cree un rappel qui sera envoye sur le canal choisi, 5) /note [texte] : sauvegarde une note accessible depuis tous les canaux, 6) Mode conversation naturelle : l'agent repond normalement sans avoir besoin de commandes.</blockquote>
<p>Le mode conversation naturelle est le plus important. L'utilisateur doit pouvoir parler a l'agent comme a un humain, sans memoriser des commandes. Les commandes sont la pour les fonctionnalites avancees, mais l'interaction par defaut doit etre naturelle et fluide.</p>

<h2>Etape 6 : Monitoring et administration</h2>
<p>Pour gerer l'agent en production, tu as besoin d'outils d'administration. Demande a Claude Code :</p>
<blockquote>Cree un systeme d'administration accessible uniquement par l'administrateur (toi) sur Telegram : 1) /stats : nombre de messages par canal, utilisateurs actifs, temps de reponse moyen, 2) /users : liste des utilisateurs avec leur canal prefere, 3) /broadcast [message] : envoyer un message a tous les utilisateurs sur tous les canaux, 4) /ban [user] : bloquer un utilisateur sur tous les canaux, 5) /logs : voir les derniers logs d'erreur. Ajoute aussi des alertes automatiques si l'agent ne repond pas pendant plus de 5 minutes sur un canal.</blockquote>
<p>Le monitoring est crucial en production. Tu dois savoir en permanence si l'agent fonctionne, combien de messages il traite et s'il y a des erreurs. Les alertes automatiques te permettent de reagir rapidement en cas de probleme, meme au milieu de la nuit.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Configure les trois connecteurs (Telegram, Discord, WhatsApp). Si WhatsApp est trop complexe a configurer, remplace-le par un webhook Slack.</li>
<li>Construis l'agent multi-canal complet avec la memoire partagee. Verifie que les messages de tous les canaux sont stockes dans la meme timeline.</li>
<li>Teste le cross-canal : commence une conversation sur Telegram, continue-la sur Discord, et verifie que l'agent se souvient du contexte.</li>
<li>Implemente au moins 3 commandes fonctionnelles (/help, /note, /rappel) et teste-les sur chaque canal.</li>
<li>Laisse l'agent tourner pendant 48h et consulte les statistiques. Bonus : ajoute un canal SMS via l'API Twilio.</li>
</ol>`,
  },
  {
    order: 56,
    module: 9,
    title: "Projet : Systeme multi-agents coordonnes",
    slug: "projet-systeme-multi-agents-coordonnes",
    duration: "50 min",
    description: "Construire 3 agents qui travaillent ensemble : collecte, analyse et rapport.",
    content: `<h2>Objectif du projet</h2>
<p>C'est le projet le plus avance de toute la formation. Tu vas construire un systeme de 3 agents qui travaillent ensemble de maniere coordonnee en utilisant l'Agent Communication Protocol d'OpenClaw. Chaque agent a un role specifique : un collecte les donnees, un les analyse et un genere les rapports. Ils communiquent entre eux automatiquement pour accomplir des taches complexes qu'aucun agent seul ne pourrait gerer.</p>
<p>Les systemes multi-agents sont l'avenir de l'automatisation IA. Au lieu d'un seul agent monolithique qui fait tout (et le fait moyennement), tu as des agents specialises qui excellent chacun dans leur domaine. C'est le meme principe que les microservices en developpement logiciel, applique aux agents IA.</p>

<h2>Architecture du systeme</h2>
<p>Le systeme se compose de 3 agents avec des roles distincts :</p>
<ul>
<li><strong>Agent Collecteur</strong> : Parcourt les sources de donnees (sites web, APIs, bases de donnees) et collecte les informations brutes. Il ne fait aucune analyse, il collecte et transmet.</li>
<li><strong>Agent Analyste</strong> : Recoit les donnees brutes du Collecteur, les nettoie, les structure et les analyse avec Claude API. Il identifie les tendances, les anomalies et les insights.</li>
<li><strong>Agent Rapporteur</strong> : Recoit les analyses de l'Analyste et genere des rapports lisibles, des visualisations et des recommandations. Il envoie les rapports aux destinataires.</li>
</ul>
<p>La separation des responsabilites permet a chaque agent d'etre optimise pour sa tache. Le Collecteur peut tourner toutes les heures sans mobiliser les ressources d'analyse. L'Analyste peut prendre son temps pour une analyse approfondie. Le Rapporteur peut formater le meme rapport dans differents formats sans refaire l'analyse.</p>

<h2>Etape 1 : Creer l'Agent Collecteur</h2>
<p>Demande a Claude Code de creer le premier agent :</p>
<blockquote>Cree un skill OpenClaw pour l'Agent Collecteur. Il doit : 1) Parcourir une liste d'URLs configurables et extraire le contenu textuel, 2) Interroger des APIs publiques (meteo, bourse, actualites) et stocker les reponses, 3) Lire des fichiers CSV ou JSON locaux, 4) Normaliser toutes les donnees dans un format uniforme : { source, timestamp, type, rawData }, 5) Envoyer les donnees collectees a l'Agent Analyste via l'Agent Communication Protocol, 6) Loguer chaque collecte avec le statut (succes, echec, partiel). L'agent doit tourner selon un cron configurable (par defaut toutes les 2 heures).</blockquote>
<p>Le Collecteur est l'agent le plus simple mais le plus critique. S'il tombe en panne, tout le systeme s'arrete. Il doit donc etre extremement robuste : gestion des timeouts, retry en cas d'echec, fallback vers un cache local si une source est indisponible. Claude Code va implementer toutes ces protections.</p>

<h2>Etape 2 : Creer l'Agent Analyste</h2>
<p>Demande a Claude Code de creer le deuxieme agent :</p>
<blockquote>Cree un skill OpenClaw pour l'Agent Analyste. Il doit : 1) Recevoir les donnees brutes de l'Agent Collecteur via le protocole de communication, 2) Nettoyer et structurer les donnees (supprimer les doublons, normaliser les formats), 3) Utiliser Claude API pour analyser les donnees : identifier les tendances, detecter les anomalies, extraire les insights cles, 4) Comparer avec les donnees historiques pour detecter les changements significatifs, 5) Generer un objet d'analyse structure : { summary, trends, anomalies, insights, recommendations, dataPoints }, 6) Envoyer l'analyse a l'Agent Rapporteur. L'agent doit stocker les analyses historiques pour les comparaisons futures.</blockquote>
<p>L'Analyste est le cerveau du systeme. C'est lui qui transforme des donnees brutes en informations actionnables. Le prompt envoye a Claude API doit etre precis et contextualise pour obtenir des analyses pertinentes. Claude Code va creer un systeme de prompts modulaires adaptes a chaque type de donnees.</p>

<h2>Etape 3 : Creer l'Agent Rapporteur</h2>
<p>Demande a Claude Code de creer le troisieme agent :</p>
<blockquote>Cree un skill OpenClaw pour l'Agent Rapporteur. Il doit : 1) Recevoir les analyses de l'Agent Analyste, 2) Generer un rapport HTML professionnel avec sections, graphiques (generes en SVG inline) et tableaux, 3) Generer une version texte simplifiee pour Telegram, 4) Generer une version email avec mise en forme, 5) Envoyer les rapports aux destinataires configures (Telegram, email), 6) Archiver les rapports avec un index navigable. Le rapport doit inclure un score de sante global (1 a 100) et les 3 actions prioritaires recommandees.</blockquote>
<p>Le Rapporteur est l'interface entre le systeme et les humains. La qualite du rapport determine la valeur percue de tout le systeme. Un rapport mal formate ou incomprehensible ruine le travail des deux autres agents. Claude Code va generer des templates de rapport professionnels et clairs.</p>

<h2>Etape 4 : Communication inter-agents</h2>
<p>La coordination entre les agents est la partie la plus technique. Demande a Claude Code :</p>
<blockquote>Implemente la communication entre les 3 agents en utilisant l'Agent Communication Protocol d'OpenClaw : 1) Systeme de messages asynchrones entre agents (file d'attente), 2) Format de message standardise avec type, payload, priority et timestamp, 3) Gestion des erreurs : si un agent echoue, les autres sont notifies et le systeme peut reessayer, 4) Orchestrateur central qui declenche la chaine : Collecteur puis Analyste puis Rapporteur, 5) Systeme de heartbeat pour verifier que chaque agent est vivant. Ajoute des logs structures pour tracer le parcours d'un message a travers les 3 agents.</blockquote>
<p>L'Agent Communication Protocol est la colle qui tient le systeme ensemble. Chaque agent doit pouvoir envoyer et recevoir des messages de maniere fiable, meme si un agent est temporairement indisponible. Le systeme de file d'attente garantit qu'aucun message n'est perdu.</p>

<h2>Etape 5 : Cas d'usage concret</h2>
<p>Pour tester le systeme, configure-le pour un cas d'usage reel. Demande a Claude Code :</p>
<blockquote>Configure le systeme multi-agents pour la veille sectorielle d'un marche : le Collecteur surveille 5 sources d'actualites du secteur (flux RSS, pages web), le Analyste identifie les 3 tendances majeures de la journee et les classe par impact potentiel, le Rapporteur genere un briefing matinal envoye a 7h30 sur Telegram avec un resume de 5 minutes de lecture. Ajoute des donnees de test pour simuler 7 jours d'activite et genere les rapports correspondants.</blockquote>
<p>Le cas d'usage concret permet de valider que le systeme fonctionne de bout en bout. Les donnees de test simulent une semaine complete d'activite pour verifier la coherence des analyses et la qualite des rapports dans la duree.</p>

<h2>Etape 6 : Dashboard de monitoring</h2>
<p>Pour superviser le systeme, il te faut un tableau de bord. Demande a Claude Code :</p>
<blockquote>Cree un mini dashboard web (page HTML statique) qui affiche : 1) Le statut de chaque agent (actif, en erreur, en attente), 2) Le nombre de messages echanges entre agents aujourd'hui, 3) Le dernier rapport genere avec lien de telechargement, 4) Les erreurs recentes avec detail et timestamp, 5) Un graphique montrant l'activite du systeme sur les 7 derniers jours. Le dashboard se rafraichit automatiquement toutes les 30 secondes en lisant les fichiers de logs des agents.</blockquote>
<p>Le dashboard de monitoring est ton outil de pilotage. Il te permet de verifier en un coup d'oeil que les 3 agents fonctionnent correctement et que les rapports sont generes a temps. En cas de probleme, tu vois immediatement quel agent est en erreur et pourquoi.</p>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis les 3 agents separement et teste chacun individuellement avant de les connecter.</li>
<li>Configure la communication inter-agents et verifie que les messages circulent correctement du Collecteur a l'Analyste puis au Rapporteur.</li>
<li>Simule une panne d'un agent (arrete l'Analyste) et verifie que le systeme gere l'erreur proprement sans perdre de donnees.</li>
<li>Configure le cas d'usage de veille sectorielle et laisse le systeme tourner pendant 3 jours.</li>
<li>Cree le dashboard de monitoring et verifie qu'il reflecte correctement l'etat du systeme. Bonus : ajoute un 4eme agent "Alerteur" qui envoie des notifications push en cas d'anomalie detectee.</li>
</ol>`,
  },
  {
    order: 57,
    module: 9,
    title: "Projet : Agent de reporting et analytics automatise",
    slug: "projet-agent-reporting-analytics-automatise",
    duration: "45 min",
    description: "Construire un agent qui collecte des metriques et genere des rapports business hebdomadaires.",
    content: `<h2>Objectif du projet</h2>
<p>Dans ce dernier projet, tu vas construire un agent OpenClaw qui collecte automatiquement des metriques depuis plusieurs sources, les consolide et genere des rapports business hebdomadaires professionnels. C'est le type d'agent que les CMO, les directeurs commerciaux et les entrepreneurs adorent : chaque lundi matin, ils recoivent un rapport complet sans avoir a manipuler le moindre tableur.</p>
<p>Le reporting est une tache chronophage que personne n'aime faire. Les managers passent 3 a 5 heures par semaine a compiler des donnees de differentes sources, creer des graphiques et rediger des analyses. Ton agent automatise l'integralite de ce processus. C'est un service que tu peux facturer entre 500 et 1500 euros par mois par client.</p>

<h2>Sources de donnees a connecter</h2>
<p>Un rapport business complet necessite des donnees de plusieurs sources :</p>
<ul>
<li><strong>Google Analytics</strong> : Trafic web, pages vues, taux de rebond, sources de trafic</li>
<li><strong>Reseaux sociaux</strong> : Followers, engagement, reach, top posts</li>
<li><strong>CRM / Ventes</strong> : Pipeline, deals gagnes/perdus, chiffre d'affaires</li>
<li><strong>Email marketing</strong> : Taux d'ouverture, clics, desabonnements</li>
<li><strong>Financier</strong> : Revenus, depenses, marge, tresorerie</li>
</ul>
<p>Pour ce projet, on va simuler certaines sources avec des APIs mock et des fichiers de donnees, mais l'architecture sera prete a connecter de vraies APIs en production.</p>

<h2>Etape 1 : Architecture du systeme de collecte</h2>
<p>Demande a Claude Code de creer la base du systeme :</p>
<blockquote>Cree un skill OpenClaw pour le reporting automatise. Architecture le systeme avec : 1) Un module de collecte avec des connecteurs pluggables (un connecteur par source de donnees), 2) Un module de stockage qui sauvegarde les metriques historiques dans des fichiers JSON structures par semaine, 3) Un module d'analyse qui compare les metriques semaine par semaine, 4) Un module de generation de rapports. Cree les connecteurs suivants : GoogleAnalyticsMock (genere des donnees realistes de trafic web), SocialMediaMock (genere des donnees d'engagement social), SalesMock (genere des donnees de pipeline commercial), FinanceMock (genere des donnees financieres). Chaque connecteur doit implementer une interface commune : { name, collect(), getMetrics() }.</blockquote>
<p>L'architecture pluggable est essentielle. Quand un client voudra connecter son vrai Google Analytics, tu n'auras qu'a remplacer le connecteur mock par un vrai connecteur sans toucher au reste du code. C'est un pattern de design qui montre ta maturite technique.</p>

<h2>Etape 2 : Collecte et stockage des metriques</h2>
<p>Les metriques doivent etre collectees de maniere fiable et reguliere. Demande a Claude Code :</p>
<blockquote>Implemente la collecte automatique des metriques : 1) Chaque connecteur collecte ses metriques une fois par jour a 23h (pour avoir les donnees completes de la journee), 2) Les metriques sont stockees dans un format normalise : { date, source, metrics: { key: value } }, 3) Calcule automatiquement les agregations hebdomadaires : somme, moyenne, min, max, variation par rapport a la semaine precedente, 4) Gere les erreurs de collecte : si une source est indisponible, utilise la derniere valeur connue et signale le probleme dans le rapport. Stocke 12 semaines d'historique pour les comparaisons.</blockquote>
<p>La fiabilite de la collecte est non-negociable. Un rapport avec des donnees manquantes ou incorrectes detruit la confiance du client. Le systeme doit etre resilient : meme si une source echoue, le rapport est genere avec les donnees disponibles et un avertissement clair sur les donnees manquantes.</p>

<h2>Etape 3 : Analyse et insights</h2>
<p>Les donnees brutes ne suffisent pas : il faut des analyses et des insights. Demande a Claude Code :</p>
<blockquote>Implemente l'analyse des metriques avec Claude API : 1) Pour chaque KPI, calcule la tendance (en hausse, stable, en baisse) et le pourcentage de variation, 2) Identifie les anomalies (valeurs inhabituellement hautes ou basses par rapport a la moyenne sur 4 semaines), 3) Calcule les correlations entre metriques (ex : augmentation du trafic web + augmentation des ventes = la campagne marketing fonctionne), 4) Genere 3 insights cles de la semaine en langage naturel, 5) Genere 3 recommandations actionnables basees sur les donnees. Le prompt Claude doit inclure le contexte business du client pour des analyses pertinentes.</blockquote>
<p>Les insights generes par l'IA sont la vraie valeur ajoutee du rapport. Un tableur Excel peut faire des calculs, mais il ne peut pas dire "Le pic de trafic de mercredi est correle avec votre post LinkedIn sur l'IA - vous devriez publier plus de contenu sur ce sujet". C'est cette analyse contextuelle qui differencie ton service d'un simple export de donnees.</p>

<h2>Etape 4 : Generation du rapport</h2>
<p>Le rapport doit etre professionnel et agreable a lire. Demande a Claude Code :</p>
<blockquote>Cree un generateur de rapport professionnel en HTML qui inclut : 1) Un header avec le nom du client, la periode couverte et la date de generation, 2) Un resume executif de 3 lignes genere par Claude, 3) Les KPI principaux avec des jauges visuelles (vert/orange/rouge selon la performance), 4) Des graphiques SVG inline : evolution du trafic sur 4 semaines (ligne), repartition des sources de trafic (donut), pipeline commercial (barre horizontale), evolution du CA (aire), 5) La section insights avec les 3 observations cles, 6) La section recommandations avec les 3 actions suggerees, 7) Un tableau detaille avec toutes les metriques et leur variation. Le rapport doit etre responsive et imprimable en PDF proprement.</blockquote>
<p>Les graphiques SVG inline evitent les dependances externes et s'affichent partout, y compris dans les emails. Le design doit etre sobre et professionnel, pas tape-a-l'oeil. Les couleurs doivent etre coherentes et les donnees faciles a lire en un coup d'oeil. Claude Code va generer un template de rapport digne d'une agence de consulting.</p>

<h2>Etape 5 : Distribution automatique</h2>
<p>Le rapport doit etre envoye automatiquement aux bonnes personnes. Demande a Claude Code :</p>
<blockquote>Configure la distribution automatique du rapport : 1) Envoi par email chaque lundi a 8h avec le rapport HTML en piece jointe et un resume dans le corps de l'email, 2) Envoi d'un resume sur Telegram avec les 5 KPIs les plus importants et un lien vers le rapport complet, 3) Archive du rapport dans un dossier local accessible par date, 4) Envoi de micro-rapports quotidiens sur Telegram (1 message avec les 3 metriques cles de la journee), 5) Alerte immediate si une metrique critique depasse un seuil configurable (ex : taux de rebond > 80%). Configure le cron pour l'envoi hebdomadaire et quotidien.</blockquote>
<p>La distribution multi-canal assure que le rapport atteint le destinataire quel que soit son canal prefere. Certains managers preferent l'email pour les rapports detailles, d'autres preferent un message Telegram rapide. Les micro-rapports quotidiens gardent le client informe sans le noyer sous les donnees.</p>

<h2>Etape 6 : Dashboard interactif et personnalisation</h2>
<p>Pour aller au-dela du rapport statique, ajoute un dashboard web. Demande a Claude Code :</p>
<blockquote>Cree un mini dashboard web (page HTML avec JavaScript) qui : 1) Affiche les metriques en temps reel avec les dernieres donnees collectees, 2) Permet de choisir la periode (cette semaine, mois en cours, trimestre, annee), 3) Compare deux periodes cote a cote, 4) Exporte les donnees en CSV, 5) Affiche l'historique des rapports generes avec liens de telechargement. Le dashboard lit les fichiers JSON de metriques et se rafraichit automatiquement. Ajoute aussi un systeme de configuration par client : chaque client a ses propres sources, ses seuils d'alerte et ses destinataires.</blockquote>
<p>Le dashboard interactif transforme ton service de reporting en un veritable produit SaaS. Le client peut consulter ses metriques a tout moment, pas seulement le lundi matin. La personnalisation par client te permet de gerer plusieurs clients avec le meme systeme, chacun avec ses propres sources et parametres.</p>

<blockquote>Ce projet cloture la Phase 4 de la formation. Tu as maintenant construit 12 projets complets, 6 avec Claude Code et 6 avec OpenClaw. Ton portfolio est solide, tes competences sont demontrees, et tu es pret a vendre tes services. C'est exactement ce que les clients veulent voir : des resultats concrets, pas des diplomes.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Construis le systeme de reporting complet avec les connecteurs mock. Verifie que la collecte, l'analyse et la generation de rapport fonctionnent de bout en bout.</li>
<li>Genere 4 semaines de donnees historiques et verifie que les comparaisons et les tendances sont correctes.</li>
<li>Personnalise le rapport pour un client fictif : choisis un secteur, definis les KPIs pertinents et ajuste les seuils d'alerte.</li>
<li>Configure l'envoi automatique hebdomadaire et quotidien. Laisse le systeme tourner pendant une semaine et verifie la regularite des envois.</li>
<li>Cree le dashboard interactif et verifie qu'il affiche correctement les donnees. Bonus : connecte une vraie source de donnees (Google Analytics avec l'API, ou un Google Sheet avec les metriques de ton business).</li>
</ol>`,
  },
];
