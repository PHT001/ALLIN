// Phase 2 : Setup OpenClaw — Modules 3 et 5 (12 leçons)

export const LESSONS = [
  // ═══════════════════════════════════════════════════
  // MODULE 3 : Installer et Configurer OpenClaw (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 14,
    module: 3,
    title: "OpenClaw : qu'est-ce que c'est et pourquoi c'est révolutionnaire",
    slug: "openclaw-introduction-revolution",
    duration: "45 min",
    description: "Comprendre ce qu'est OpenClaw et pourquoi c'est un game-changer.",
    content: `<h2>OpenClaw n'est PAS un chatbot</h2>
<p>Avant de plonger dans le vif du sujet, il faut que tu comprennes une chose fondamentale : OpenClaw n'a <strong>rien à voir</strong> avec ChatGPT, Gemini ou n'importe quel chatbot que tu as déjà utilisé. Un chatbot, c'est un outil passif — tu lui poses une question, il te répond, point final. OpenClaw, c'est un <strong>agent IA autonome</strong> qui tourne en continu — 24h/24, 7j/7 — sur ton ordinateur ou un serveur cloud.</p>
<p>Concrètement, OpenClaw se connecte à WhatsApp, Telegram ou Discord et <strong>prend des actions réelles en ton nom</strong>. Il envoie des emails, écrit et déploie du code, gère des calendriers, ouvre des pull requests GitHub et navigue sur le web. Tout ça pendant que tu dors, que tu es en réunion, ou que tu profites de ton week-end.</p>
<p>Imagine la différence entre une calculatrice et un comptable. La calculatrice attend que tu tapes des chiffres. Le comptable, lui, va chercher les factures, fait les calculs, prépare les déclarations et t'envoie un résumé. OpenClaw, c'est ton comptable numérique — mais pour <strong>toutes</strong> tes tâches répétitives.</p>
<p><strong>Exemple concret :</strong> Un freelance développeur a configuré OpenClaw pour surveiller ses emails clients. Quand un client envoie une demande de devis, l'agent analyse la demande, génère un devis basé sur les tarifs enregistrés, et l'envoie au client — le tout en moins de 3 minutes, même à 2h du matin. Le freelance se réveille le lendemain avec un devis envoyé et un client impressionné par sa réactivité.</p>
<p><strong>Astuce :</strong> Pour bien comprendre la puissance d'OpenClaw, fais cet exercice mental : liste toutes les tâches que tu fais de manière répétitive chaque semaine. Emails, relances, rapports, veille, tri d'informations... Chacune de ces tâches est un candidat pour l'automatisation par un agent.</p>

<h2>La mémoire persistante</h2>
<p>C'est LA feature qui change absolument tout et qui sépare OpenClaw de tous les autres outils IA du marché. Contrairement à un chatbot classique qui repart de zéro à chaque conversation (tu dois ré-expliquer qui tu es, ce que tu fais, tes préférences à chaque fois...), OpenClaw possède une <strong>mémoire persistante</strong>. Il apprend tes préférences, ton contexte, ton style de communication et tes habitudes au fil du temps.</p>
<p>Pense à ça comme un assistant humain que tu embauches. Le premier jour, il ne connaît rien de toi ni de ton business. Tu dois tout lui expliquer. Après une semaine, il commence à connaître tes habitudes. Après un mois, il anticipe tes besoins avant même que tu les exprimes. C'est exactement la même dynamique avec OpenClaw : après 5-6 projets, l'agent comprend tes standards de qualité, tes clients habituels et ta façon de travailler suffisamment bien pour opérer avec un minimum de supervision.</p>
<p><strong>Comment ça marche en pratique :</strong> Tu dis à ton agent "Envoie un email à Marc pour le projet Dupont". Un chatbot classique te demanderait "Qui est Marc ? Quel est son email ? De quel projet parlez-vous ?". OpenClaw, lui, sait déjà que Marc c'est marc.durand@entreprise.fr, que le projet Dupont c'est la refonte du site e-commerce, et qu'il faut écrire dans un ton professionnel mais cordial parce que Marc est un client de longue date. Pas besoin de tout ré-expliquer à chaque fois.</p>
<p><strong>Attention :</strong> La mémoire persistante est une arme à double tranchant. Si tu donnes une mauvaise information à ton agent (un mauvais tarif, un mauvais contact), il s'en souviendra et l'utilisera. Corrige les erreurs rapidement. Un agent mal entraîné peut devenir un problème plutôt qu'une solution. Prends l'habitude de vérifier régulièrement ce que ton agent "sait" en lui demandant de résumer ses connaissances.</p>

<h2>Pourquoi ça change la donne</h2>
<p>Tu te demandes peut-être : "OK, c'est cool, mais en quoi c'est vraiment différent de ce qui existe déjà ?" Voici les 5 raisons pour lesquelles OpenClaw représente un changement de paradigme complet :</p>
<ul>
<li><strong>Travail 24/7 sans interruption</strong> : L'agent ne dort pas, ne prend pas de vacances, ne tombe pas malade, n'a pas de "mauvais jours". Il est aussi performant à 3h du matin un dimanche qu'à 14h un mardi. Pour tes clients internationaux dans des fuseaux horaires différents, c'est un avantage compétitif énorme. Un client au Japon t'envoie un message à 4h du matin heure française ? Ton agent répond en 30 secondes.</li>
<li><strong>Coût dérisoire</strong> : Un serveur cloud coûte 4-10€/mois. Compare ça à un salaire d'assistant (1 500-3 000€/mois minimum) ou même à un stagiaire. Le rapport qualité/prix est tout simplement imbattable. Pour le prix d'un café par semaine, tu as un assistant qui ne dort jamais et ne demande jamais d'augmentation.</li>
<li><strong>Scalable à l'infini</strong> : Tu peux lancer 3, 5, 10 agents en parallèle, chacun gérant un client ou un workflow différent. Essaie de faire ça avec des employés humains — ça te coûterait une fortune en recrutement, formation et salaires. Avec OpenClaw, chaque nouvel agent c'est juste 10€ de plus par mois et quelques heures de configuration.</li>
<li><strong>Open-source et transparent</strong> : Pas de lock-in chez un fournisseur, pas de surprises sur les prix, pas de features retirées du jour au lendemain parce qu'un CEO a décidé de "pivoter". La communauté est active, le code est transparent, et tu peux modifier absolument ce que tu veux. Si l'entreprise derrière OpenClaw disparaît demain, ton agent continue de tourner.</li>
<li><strong>Multi-canal natif</strong> : Telegram, WhatsApp, Discord — tes clients te contactent où ILS veulent, pas où TU décides. C'est du service premium sans effort supplémentaire. Plus besoin de vérifier 5 plateformes différentes : ton agent centralise tout.</li>
</ul>
<p><strong>Exemple parlant :</strong> Une agence web de 3 personnes a déployé un agent OpenClaw sur WhatsApp pour gérer le support client niveau 1. Résultat après 2 mois : temps de réponse passé de 4 heures en moyenne à 30 secondes, satisfaction client en hausse de 40%, et l'équipe se concentre désormais sur les demandes complexes à forte valeur ajoutée au lieu de répondre aux mêmes questions basiques 50 fois par jour.</p>

<h2>L'écosystème OpenClaw</h2>
<p>OpenClaw n'est pas un outil isolé — c'est tout un écosystème qui s'articule autour de plusieurs composants complémentaires. Comprendre cet écosystème est essentiel pour en tirer le maximum :</p>
<ul>
<li><strong>OpenClaw Core</strong> : C'est l'agent principal, le "cerveau" qui tourne sur ta machine ou ton serveur. Il gère la logique, la mémoire et toutes les interactions. C'est la fondation sur laquelle tout le reste repose. Sans Core, rien ne fonctionne — c'est le moteur de ta voiture.</li>
<li><strong>ClawHub</strong> : Le marketplace communautaire de skills — pense à ça comme l'App Store de ton agent IA. Tu y trouves des centaines de skills gratuites et payantes créées par la communauté mondiale. Et surtout, tu peux y <strong>publier et vendre tes propres skills</strong> (on verra ça en détail dans le Module 5 — c'est là que les revenus passifs commencent).</li>
<li><strong>Agent Communication Protocol (ACP)</strong> : Le protocole standardisé qui permet à tes agents de se parler entre eux et de collaborer. C'est ce qui te permet de passer d'un seul agent à un véritable système multi-agents coordonné, comme une équipe virtuelle où chaque agent a sa spécialité.</li>
<li><strong>Skills</strong> : Des packs de compétences plug-and-play que tu peux installer ou créer toi-même. Une skill, c'est un ensemble d'instructions et de code qui apprend à ton agent à faire quelque chose de nouveau : gérer un CRM, surveiller GitHub, rédiger des rapports, analyser des données, etc.</li>
</ul>
<p><strong>Analogie :</strong> Pense à OpenClaw Core comme un smartphone neuf sorti de la boîte. Les Skills, ce sont les applications que tu installes dessus. Le ClawHub, c'est l'App Store où tu les trouves. Et l'ACP, c'est le Bluetooth/WiFi qui permet à tes appareils de communiquer entre eux. Tout seul, le smartphone est utile. Avec les bonnes apps et connexions, il devient indispensable.</p>
<p><strong>Conseil pro :</strong> Ne te disperse pas au début. Commence par maîtriser OpenClaw Core avec 1-2 skills simples. Une fois que tu es à l'aise et que tu comprends la logique, explore le ClawHub et l'ACP. Rome ne s'est pas construite en un jour, et un agent bien configuré vaut mieux que 10 agents bâclés.</p>

<h2>Ce que tu peux faire avec OpenClaw</h2>
<p>Pour que tu visualises concrètement le potentiel et que tu commences déjà à imaginer tes propres cas d'usage, voici des exemples réels de ce que des utilisateurs font aujourd'hui avec OpenClaw :</p>
<ul>
<li><strong>Agent commercial WhatsApp</strong> : Un agent qui répond automatiquement aux demandes de devis sur WhatsApp, pose les bonnes questions de qualification ("Quel est votre budget ?", "Pour quand en avez-vous besoin ?"), et génère un devis personnalisé en quelques minutes. Un artisan plombier l'utilise et a doublé ses prises de rendez-vous parce qu'il ne rate plus jamais un prospect qui écrit le soir ou le week-end.</li>
<li><strong>Agent e-réputation</strong> : Un agent qui surveille les avis Google de tes clients 24/7, analyse le sentiment (positif, négatif, neutre), et rédige des réponses appropriées — remerciement chaleureux pour les positifs, gestion de crise diplomatique pour les négatifs. Une agence de communication gère ainsi les avis de 15 restaurants simultanément avec un seul agent.</li>
<li><strong>Agent reporting automatisé</strong> : Un agent qui génère des rapports hebdomadaires à partir de données Notion, Google Sheets ou Airtable, les met en forme avec des graphiques, et les envoie par email à tes clients chaque lundi matin à 8h. Tes clients sont impressionnés par ta rigueur et pensent que tu as travaillé tout le week-end — alors que tout est automatisé.</li>
<li><strong>Agent de veille stratégique</strong> : Un agent qui fait de la veille concurrentielle sur les réseaux sociaux, les sites d'actualité et les forums spécialisés, et te prépare un résumé quotidien des tendances, des mentions de tes concurrents et des opportunités de ton secteur.</li>
<li><strong>Agent inbox intelligent</strong> : Un agent qui gère ton inbox, trie les emails par priorité (urgent/important/informatif/spam), rédige des brouillons de réponse pour les emails courants, et te signale uniquement ce qui nécessite ton attention personnelle. Fini les 200 emails non lus le lundi matin — ton agent les a déjà triés et pré-traités.</li>
</ul>
<p><strong>Astuce :</strong> Le meilleur premier projet avec OpenClaw, c'est d'automatiser une tâche que TU fais toi-même de manière répétitive et qui ne nécessite pas de jugement créatif complexe. Identifie cette tâche, automatise-la, constate le gain de temps, puis passe à la suivante. Procède par petites victoires.</p>

<h2>Le marché est grand ouvert</h2>
<p>Le projet a accumulé plus de 263 000 stars GitHub en moins de 3 semaines — c'est du jamais vu dans l'histoire de l'open-source, surpassant même les débuts de projets légendaires comme TensorFlow ou React. Le ClawHub en est à ses tout débuts — comme l'App Store iOS dans sa première année, quand une simple application lampe torche pouvait se classer dans le top 10 des ventes.</p>
<p>Ce que ça signifie concrètement pour toi : <strong>les meilleures opportunités vont à ceux qui arrivent tôt</strong>. Les créateurs de skills qui se positionnent maintenant auront un avantage de premier arrivé (first-mover advantage) considérable : plus d'avis positifs, plus de visibilité dans les résultats de recherche, plus de crédibilité auprès des acheteurs.</p>
<p>L'histoire se répète : les premiers développeurs d'applications iOS sont devenus millionnaires avec des apps relativement basiques. Les premiers créateurs de thèmes WordPress ont bâti des entreprises à 7 chiffres de revenus annuels. Les premiers YouTubeurs ont construit des empires médiatiques avec du contenu amateur. À chaque nouvelle plateforme, la même fenêtre d'opportunité s'ouvre — et elle se referme au bout de quelques années quand le marché se sature.</p>
<p><strong>Attention :</strong> Cela ne veut pas dire que c'est facile ou garanti. Il faut du travail, de la persévérance et de la qualité. Mais la fenêtre d'opportunité est grande ouverte <em>maintenant</em>. Dans 2-3 ans, le marché sera saturé de skills médiocres et il sera beaucoup plus difficile de se faire une place. Le moment d'agir, c'est aujourd'hui.</p>

<blockquote>OpenClaw est à l'automatisation ce que l'iPhone était aux applications mobiles en 2008. Le timing est parfait pour se positionner. La question n'est pas "est-ce que ça vaut le coup ?" mais "est-ce que je peux me permettre de ne PAS y être ?"</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Va sur le site officiel d'OpenClaw et explore la documentation.</li>
<li>Parcours le ClawHub et identifie 5 skills populaires. Note ce qu'ils font et comment ils sont structurés.</li>
<li>Liste 3 problèmes dans ta vie quotidienne ou professionnelle qu'un agent 24/7 pourrait résoudre.</li>
<li>Pour chaque problème, imagine comment l'agent fonctionnerait : quel canal (Telegram, WhatsApp, Discord), quelle action, quelle fréquence.</li>
</ol>`,
  },
  {
    order: 15,
    module: 3,
    title: "Installation sur ton ordinateur",
    slug: "openclaw-installation-ordinateur",
    duration: "50 min",
    description: "Installer OpenClaw sur Mac, Windows ou Linux en moins de 20 minutes.",
    content: `<h2>Pré-requis</h2>
<p>L'installation d'OpenClaw est plus simple que la plupart des gens ne le pensent. Si tu sais installer une application sur ton ordinateur, tu sais installer OpenClaw. Pas besoin d'être développeur ou expert technique — l'installeur automatique gère 90% du travail pour toi.</p>
<p>Voici ce dont tu as besoin avant de commencer :</p>
<ul>
<li><strong>Un ordinateur moderne</strong> : Mac, Windows ou Linux — même un Raspberry Pi fonctionne pour des usages légers. Pas besoin d'une machine de guerre : un ordinateur portable standard avec 4 Go de RAM suffit largement. L'essentiel du travail est fait par les API cloud (Claude, GPT-4), pas par ta machine.</li>
<li><strong>Un abonnement Claude ou GPT-4</strong> : C'est le "cerveau" derrière ton agent. OpenClaw est le corps, le modèle IA est le cerveau. Claude est recommandé pour sa qualité de raisonnement, mais GPT-4 fonctionne aussi très bien. Compte environ 20€/mois pour un abonnement API.</li>
<li><strong>Telegram installé sur ton téléphone</strong> : C'est le canal le plus simple pour commencer à communiquer avec ton agent. Tu pourras ajouter WhatsApp et Discord plus tard (leçon suivante), mais Telegram est le point de départ idéal parce que la configuration est gratuite et prend 2 minutes.</li>
<li><strong>20 minutes de ton temps</strong> : C'est tout ce qu'il faut. Sérieusement. Si tu prends plus de 30 minutes, c'est que quelque chose ne va pas — consulte la section troubleshooting en bas de cette leçon.</li>
</ul>
<p><strong>Astuce :</strong> Avant de commencer l'installation, assure-toi d'avoir tes identifiants API (clé Claude ou GPT-4) sous la main. Les chercher en plein milieu de l'installation est la première cause de frustration chez les débutants. Prépare aussi ton téléphone avec Telegram ouvert.</p>
<p><strong>Attention :</strong> Si tu es sur un ordinateur professionnel, vérifie que ton entreprise autorise l'installation de logiciels tiers. Certains pare-feux d'entreprise peuvent bloquer les connexions API. Dans ce cas, utilise un ordinateur personnel ou un serveur cloud (voir leçon 18).</p>

<h2>Installation en un clic</h2>
<p>OpenClaw propose un installeur automatique qui gère absolument tout pour toi — c'est la méthode recommandée pour 95% des utilisateurs. Pas besoin de toucher à un terminal ou de taper des commandes :</p>
<ol>
<li><strong>Va sur openclaw.ai</strong> — c'est le site officiel du projet. Attention aux sites imitateurs (vérifie bien l'URL).</li>
<li><strong>Clique sur le bouton d'installation</strong> correspondant à ton système d'exploitation (Mac/Windows/Linux). Le site détecte automatiquement ton OS et te propose le bon bouton.</li>
<li><strong>L'installeur se télécharge et se lance</strong>. Il va automatiquement installer les dépendances nécessaires (Node.js si besoin, les librairies requises, etc.), configurer les dossiers, et préparer l'environnement. C'est comme installer Spotify ou Discord — tu cliques "Suivant" et ça se fait tout seul.</li>
<li><strong>Suis les instructions à l'écran</strong> pour connecter ton compte Claude ou GPT-4. L'installeur te demandera de coller ta clé API — c'est la seule étape qui demande un peu d'attention.</li>
</ol>
<p><strong>Sur Mac :</strong> Si macOS te dit que l'application "n'est pas identifiée", va dans Préférences Système > Sécurité et clique sur "Ouvrir quand même". C'est normal pour les applications open-source qui ne sont pas signées par Apple.</p>
<p><strong>Sur Windows :</strong> Windows Defender peut afficher un avertissement "SmartScreen". Clique sur "Informations complémentaires" puis "Exécuter quand même". Là encore, c'est normal pour un logiciel open-source récent.</p>
<p><strong>Conseil pro :</strong> Fais une capture d'écran de chaque étape pendant l'installation. Si quelque chose se passe mal, tu pourras facilement identifier où le problème s'est produit et demander de l'aide sur le Discord communautaire.</p>

<h2>Installation manuelle (pour les plus techniques)</h2>
<p>Si tu préfères tout contrôler, que tu es développeur, ou que l'installeur automatique ne fonctionne pas sur ta configuration, voici la méthode manuelle. Elle prend 10-15 minutes de plus mais te donne un contrôle total :</p>
<ol>
<li><strong>Clone le repo GitHub</strong> : <code>git clone https://github.com/openclaw/openclaw</code> — Ça télécharge tout le code source sur ta machine. Si tu n'as pas git installé, tu peux aussi télécharger le ZIP depuis la page GitHub du projet.</li>
<li><strong>Installe les dépendances</strong> : <code>npm install</code> ou <code>pip install -r requirements.txt</code> selon ton environnement. Node.js 18+ est recommandé. Si tu n'as pas Node.js, télécharge-le sur nodejs.org (prends la version LTS).</li>
<li><strong>Configure le fichier .env</strong> : Copie le fichier <code>.env.example</code> en <code>.env</code> et remplis-le avec tes clés API. Ce fichier contient tes secrets (clés API, tokens) — ne le partage JAMAIS et ne le commite JAMAIS sur GitHub.</li>
<li><strong>Lance l'agent</strong> : <code>openclaw start</code> — Et c'est parti. Tu devrais voir dans le terminal un message confirmant que l'agent est démarré et connecté.</li>
</ol>
<p><strong>Attention :</strong> Le fichier <code>.env</code> contient des informations sensibles (clés API qui donnent accès à tes comptes). Traite-le comme un mot de passe : ne le partage jamais, ne le mets jamais dans un dossier partagé, et ne le commite jamais dans un repo Git. Si tu le perds ou qu'il est compromis, régénère immédiatement toutes tes clés API.</p>
<p><strong>Astuce développeur :</strong> Si tu comptes modifier le code d'OpenClaw ou contribuer au projet, fork le repo avant de le cloner. Comme ça, tu pourras soumettre des pull requests et contribuer à la communauté.</p>

<h2>Configuration initiale</h2>
<p>À la première exécution, OpenClaw te pose quelques questions essentielles pour personnaliser ton expérience. Prends le temps de bien répondre — ces choix influencent directement la qualité de ton agent :</p>
<ul>
<li><strong>Modèle IA</strong> : Claude (recommandé pour la qualité du raisonnement et la gestion du français) ou GPT-4 (alternative solide, parfois plus rapide). Tu pourras changer plus tard, mais commence avec un seul pour simplifier. Si tu hésites, prends Claude — il est meilleur pour les tâches qui demandent de la nuance et de la compréhension contextuelle.</li>
<li><strong>Canal de communication</strong> : Telegram est le plus simple pour commencer. L'intégration est gratuite, la configuration prend 2 minutes, et l'application est disponible sur tous les appareils. Tu ajouteras WhatsApp et Discord dans la prochaine leçon.</li>
<li><strong>Niveau d'autonomie</strong> : C'est un réglage crucial. Il détermine combien de liberté tu donnes à ton agent. <strong>Commence TOUJOURS en mode conservateur</strong> (l'agent demande confirmation avant chaque action importante). Tu augmenteras progressivement l'autonomie au fur et à mesure que tu fais confiance à ton agent. C'est comme apprendre à conduire : on commence en ville à 30 km/h avant de prendre l'autoroute.</li>
<li><strong>Permissions</strong> : Quels outils l'agent peut utiliser — email, fichiers, navigation web, etc. Là encore, commence avec le minimum nécessaire. Tu pourras toujours ajouter des permissions plus tard. Le principe : ne donne jamais plus d'accès que ce dont l'agent a besoin pour sa tâche actuelle.</li>
</ul>
<p><strong>Conseil crucial :</strong> Le niveau d'autonomie est le paramètre le plus important. Un agent trop autonome trop tôt peut envoyer des emails inappropriés ou faire des actions non souhaitées. Un agent pas assez autonome te demandera confirmation pour chaque virgule. Trouve le bon équilibre progressivement : commence conservateur, puis augmente semaine après semaine.</p>

<h2>Vérifier que tout marche</h2>
<p>L'installation est terminée ? Parfait. Maintenant, vérifions que tout fonctionne correctement avant de passer à la suite. C'est comme un contrôle technique — on vérifie les points essentiels :</p>
<ol>
<li><strong>Ouvre Telegram</strong> sur ton téléphone ou ton ordinateur.</li>
<li><strong>Trouve ton bot OpenClaw</strong> dans tes conversations (cherche le nom que tu lui as donné lors de la configuration).</li>
<li><strong>Envoie un message simple</strong> : "Bonjour, présente-toi". L'agent devrait répondre en se présentant et en expliquant ce qu'il peut faire.</li>
<li><strong>Si l'agent répond de manière cohérente</strong>, félicitations — tout est configuré correctement !</li>
<li><strong>Teste une commande plus avancée</strong> : "Quelle heure est-il ?" ou "Fais-moi un résumé de la page wikipedia.org/wiki/France". Si ça marche, ton agent est opérationnel.</li>
</ol>
<p><strong>Astuce :</strong> Garde le terminal ouvert pendant tes premiers tests. Tu pourras voir les logs en temps réel et comprendre ce que l'agent fait "sous le capot". C'est très instructif pour comprendre comment il raisonne et traite tes demandes. Tu verras quand il appelle l'API, quand il accède à un outil, et quand il formule sa réponse.</p>
<p><strong>Si l'agent ne répond pas dans les 30 secondes :</strong> Ne panique pas. Vérifie d'abord que le terminal où tourne OpenClaw est toujours actif (pas de message d'erreur rouge). Ensuite, vérifie ta connexion internet. Enfin, consulte la section troubleshooting ci-dessous.</p>

<h2>Troubleshooting courant</h2>
<p>Même avec le meilleur installeur du monde, il arrive que quelque chose ne fonctionne pas du premier coup. Voici les problèmes les plus fréquents et leurs solutions — dans 95% des cas, la solution est ici :</p>
<ul>
<li><strong>L'agent ne répond pas du tout</strong> : Vérifie que le processus OpenClaw tourne bien dans ton terminal (le terminal doit rester ouvert et actif, pas fermé ni en veille). Sur Windows, vérifie que ton pare-feu ne bloque pas les connexions sortantes. Sur Mac, vérifie que le terminal a les autorisations réseau dans Préférences Système > Sécurité.</li>
<li><strong>Erreur "API key invalid" ou "Authentication failed"</strong> : Ta clé API Claude ou GPT-4 dans le fichier .env est incorrecte ou expirée. Va sur le dashboard de ton fournisseur (console.anthropic.com pour Claude, platform.openai.com pour GPT-4), vérifie ta clé, et remplace-la dans le fichier .env. Attention aux espaces en trop avant ou après la clé — c'est la cause numéro 1 de ce problème.</li>
<li><strong>Telegram ne se connecte pas</strong> : Le token du bot est probablement incorrect. Retourne sur Telegram, cherche @BotFather, utilise la commande <code>/mybots</code> pour voir tes bots existants, et récupère le bon token. Si ça ne marche toujours pas, supprime le bot et recrée-en un nouveau.</li>
<li><strong>Erreur "Port already in use"</strong> : Un autre programme utilise le même port. Change le port dans la configuration d'OpenClaw ou ferme le programme qui occupe le port.</li>
<li><strong>L'agent répond très lentement (>30 secondes)</strong> : C'est généralement lié à la latence de l'API IA. Vérifie ta connexion internet. Si le problème persiste, essaie de changer de modèle (passe de GPT-4 à Claude ou inversement) pour voir si c'est un problème côté fournisseur.</li>
</ul>
<p><strong>Si rien ne marche :</strong> Rejoins le Discord communautaire d'OpenClaw. La communauté est très active et quelqu'un aura probablement déjà rencontré et résolu ton problème. Quand tu poses ta question, inclus : ton OS, la méthode d'installation utilisée, et le message d'erreur exact (copie-colle, ne paraphrase pas).</p>

<blockquote>L'installation prend 5-20 minutes. La valeur que tu en retires est illimitée. Ne laisse pas un setup technique te bloquer — si tu coinces, demande de l'aide. La communauté est là pour ça.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Installe OpenClaw sur ton ordinateur en suivant la méthode de ton choix.</li>
<li>Connecte-le à Telegram.</li>
<li>Envoie 5 messages différents pour tester : une question simple, une demande de recherche web, une demande de code, un rappel, et une conversation libre.</li>
<li>Note les forces et les limites que tu observes.</li>
<li>Si tu rencontres un bug, documente-le et cherche la solution dans la documentation ou le Discord communautaire.</li>
</ol>`,
  },
  {
    order: 16,
    module: 3,
    title: "Connecter Telegram, WhatsApp et Discord",
    slug: "openclaw-connecter-canaux",
    duration: "45 min",
    description: "Configurer les canaux de communication pour ton agent OpenClaw.",
    content: `<h2>Multi-canal = Multi-usage</h2>
<p>OpenClaw peut se connecter à plusieurs canaux de communication simultanément — et c'est l'une de ses forces les plus sous-estimées. Chaque canal a ses avantages, son public et ses cas d'usage optimaux. Comprendre ces différences, c'est la clé pour offrir un service irréprochable à tes clients.</p>
<ul>
<li><strong>Telegram</strong> : Le plus simple à configurer, idéal pour un usage personnel et professionnel. Supporte les fichiers volumineux (jusqu'à 2 Go), les images, les messages longs et les bots avancés. C'est le canal préféré de la communauté tech et des early adopters. Configuration 100% gratuite.</li>
<li><strong>WhatsApp</strong> : Parfait pour les clients qui utilisent déjà WhatsApp au quotidien — restaurants, artisans, commerces de proximité, professions libérales. C'est le canal le plus naturel pour le business local en France et dans les pays francophones, avec plus de 2 milliards d'utilisateurs dans le monde. Tes clients n'ont rien à installer de nouveau.</li>
<li><strong>Discord</strong> : Idéal pour les équipes, les communautés en ligne et les workflows collaboratifs. Supporte les channels thématiques, les rôles, les fils de discussion et les intégrations avancées. Parfait si tu travailles avec des développeurs, des gamers ou des communautés en ligne.</li>
</ul>
<p><strong>Analogie :</strong> Pense aux canaux comme à des langues. Telegram, c'est l'anglais — universel et pratique. WhatsApp, c'est la langue locale — tout le monde la parle dans le quartier. Discord, c'est le jargon professionnel — parfait pour communiquer en équipe sur des sujets techniques. Un bon agent est polyglotte.</p>
<p><strong>Astuce stratégique :</strong> Pour un service client, utilise toujours le canal que TES clients utilisent déjà. Ne force personne à installer une nouvelle app. Si tes clients sont des commerçants, c'est WhatsApp. Si ce sont des développeurs, c'est Discord. Si c'est ton usage perso, Telegram est imbattable.</p>

<h2>Configurer Telegram</h2>
<p>Telegram est le point de départ recommandé. La configuration est gratuite, prend 5 minutes, et le résultat est immédiat. Voici le processus étape par étape :</p>
<ol>
<li><strong>Ouvre Telegram</strong> et cherche <strong>@BotFather</strong> dans la barre de recherche. C'est le bot officiel de Telegram qui permet de créer et gérer d'autres bots. Il a une coche bleue de vérification — assure-toi de parler au vrai BotFather.</li>
<li><strong>Envoie la commande</strong> <code>/newbot</code> — BotFather va te guider dans la création de ton bot.</li>
<li><strong>Choisis un nom d'affichage</strong> pour ton bot (ex: "Mon Agent IA", "Assistant Pro", "AgenceBot"). Ce nom sera visible par les personnes qui interagissent avec le bot. Choisis quelque chose de professionnel si c'est pour des clients.</li>
<li><strong>Choisis un username unique</strong> (ex: "mon_agent_ia_bot"). Il doit obligatoirement se terminer par "_bot" ou "Bot". Ce username permet de retrouver ton bot via la recherche Telegram.</li>
<li><strong>BotFather te donne un token</strong> — c'est une longue chaîne de caractères qui ressemble à <code>123456789:ABCdefGHIjklMNOpqr</code>. <strong>Copie-le précieusement</strong>. Ce token est comme le mot de passe de ton bot — quiconque l'a peut contrôler ton bot.</li>
<li><strong>Colle le token</strong> dans la configuration OpenClaw (fichier .env ou interface de configuration, selon ta méthode d'installation).</li>
<li><strong>Redémarre l'agent OpenClaw</strong> — ton bot Telegram est maintenant opérationnel. Envoie-lui un message pour vérifier.</li>
</ol>
<p><strong>Attention :</strong> Ne partage JAMAIS ton token de bot. Si quelqu'un l'obtient, il peut envoyer des messages en tant que ton bot. Si tu penses que ton token est compromis, va sur BotFather et utilise <code>/revoke</code> pour en générer un nouveau immédiatement.</p>
<p><strong>Conseil pro :</strong> Configure aussi une photo de profil et une description pour ton bot via BotFather (commandes <code>/setuserpic</code> et <code>/setdescription</code>). Un bot avec une photo de profil professionnelle inspire plus confiance qu'un bot avec l'icône par défaut.</p>

<h2>Configurer WhatsApp</h2>
<p>WhatsApp nécessite quelques étapes supplémentaires par rapport à Telegram, mais le jeu en vaut la chandelle — c'est là que se trouvent la majorité de tes futurs clients B2C. Voici comment procéder :</p>
<ol>
<li><strong>Crée un compte WhatsApp Business</strong> (ou utilise ton compte existant). Télécharge l'application WhatsApp Business (gratuite) depuis l'App Store ou le Play Store. C'est une version distincte de WhatsApp classique, conçue pour les professionnels.</li>
<li><strong>Configure l'API WhatsApp Business</strong> via le provider recommandé par OpenClaw (les providers populaires incluent Twilio, 360dialog, ou MessageBird). Ces providers font le pont entre WhatsApp et ton agent OpenClaw.</li>
<li><strong>Génère les clés d'accès</strong> sur le dashboard de ton provider et entre-les dans la configuration OpenClaw. Suis la documentation du provider — chacun a une interface légèrement différente.</li>
<li><strong>Teste avec un message depuis un autre numéro</strong>. Demande à un ami ou utilise un deuxième téléphone pour envoyer un message à ton numéro WhatsApp Business et vérifie que l'agent répond.</li>
</ol>
<p><strong>Attention coûts :</strong> L'API WhatsApp Business n'est pas gratuite. Les providers facturent généralement par message envoyé (environ 0,005-0,08€ par message selon le pays et le type). Pour un usage modéré (quelques dizaines de messages par jour), compte 10-30€/mois. C'est un investissement, mais si tu l'utilises pour des clients, facture-le dans ton tarif.</p>
<p><strong>Astuce :</strong> WhatsApp impose des règles strictes sur les messages sortants (anti-spam). Tu ne peux pas envoyer de messages promotionnels non sollicités. Les conversations doivent être initiées par le client. C'est une bonne chose — ça garantit que tes clients ne sont pas spammés et ça protège ta réputation.</p>
<p><strong>Exemple concret :</strong> Un restaurateur a connecté OpenClaw à WhatsApp Business. Les clients envoient "Je voudrais réserver pour samedi soir, 4 personnes" et l'agent vérifie la disponibilité, confirme la réservation, et envoie un rappel la veille. Le restaurateur n'a plus besoin de décrocher le téléphone 30 fois par jour pour des réservations.</p>

<h2>Configurer Discord</h2>
<p>Discord est idéal pour les usages en équipe, les communautés, et les projets collaboratifs. Si tu travailles avec des développeurs ou si tu gères une communauté en ligne, c'est ton meilleur allié :</p>
<ol>
<li><strong>Va sur le Discord Developer Portal</strong> (discord.com/developers/applications) et connecte-toi avec ton compte Discord.</li>
<li><strong>Crée une nouvelle application</strong> — donne-lui un nom clair et professionnel.</li>
<li><strong>Dans la section "Bot"</strong>, clique sur "Add Bot" pour créer le bot associé à ton application. Copie le token qui s'affiche — comme pour Telegram, garde-le secret.</li>
<li><strong>Active les "Message Content Intent"</strong> dans les paramètres du bot. Sans cette option, le bot ne pourra pas lire le contenu des messages — il verra les messages arriver mais ne pourra pas les lire. C'est une mesure de sécurité de Discord.</li>
<li><strong>Génère un lien d'invitation OAuth2</strong> avec les permissions nécessaires (lecture et envoi de messages au minimum) et utilise ce lien pour ajouter le bot à ton serveur Discord.</li>
<li><strong>Configure le token dans OpenClaw</strong> et redémarre l'agent.</li>
</ol>
<p><strong>Conseil avancé :</strong> Sur Discord, tu peux configurer ton agent pour qu'il ne réponde que dans certains channels spécifiques. Par exemple, un channel #support pour le support client, un channel #rapports pour les rapports automatiques, et un channel #general où l'agent ne répond que quand on le mentionne avec @. Ça évite que l'agent pollue toutes les conversations.</p>

<h2>Multi-canal simultané</h2>
<p>La vraie magie d'OpenClaw, c'est que tu peux activer tous les canaux en même temps — et l'agent maintient une mémoire cohérente à travers tous les canaux. C'est transparent et automatique.</p>
<p>Concrètement : si tu parles d'un projet sur Telegram le matin, tu peux continuer la conversation sur Discord l'après-midi sans rien ré-expliquer. L'agent sait exactement de quoi tu parlais, quelles décisions ont été prises, et quel est le contexte. C'est comme parler à un collègue humain — peu importe si tu lui envoies un SMS, un email ou si tu l'appelles, il se souvient de vos échanges précédents.</p>
<p><strong>Exemple concret :</strong> Tu reçois un message d'un client sur WhatsApp demandant l'avancement d'un projet. Tu réponds via WhatsApp. Plus tard, sur Discord, tu demandes à l'agent de mettre à jour le rapport pour ce même client. L'agent sait déjà de quel client et de quel projet il s'agit — pas besoin de contextualiser à nouveau.</p>
<p><strong>Attention :</strong> La mémoire multi-canal est puissante mais peut créer de la confusion si tu gères plusieurs clients sur le même agent. Assure-toi que les conversations sont bien séparées par client. Pour les usages professionnels avec plusieurs clients, il est souvent préférable d'avoir un agent dédié par client (on verra ça plus tard).</p>

<h2>Quel canal pour quel usage ?</h2>
<p>Voici un guide de décision rapide pour choisir le bon canal selon ton cas d'usage. La règle d'or : va là où tes utilisateurs sont déjà, ne leur demande pas de changer leurs habitudes.</p>
<ul>
<li><strong>Ton usage personnel</strong> : Telegram — rapide, flexible, gratuit, pas de limitations. C'est ton "téléphone direct" avec ton agent. Tu peux envoyer des messages, des fichiers, des photos, des vocaux.</li>
<li><strong>Clients B2C (particuliers, commerces)</strong> : WhatsApp — c'est là où sont les gens. Ta boulangère, ton plombier, ton avocat — tout le monde utilise WhatsApp. C'est le canal qui a le meilleur taux de réponse parce que les gens le consultent 50 fois par jour.</li>
<li><strong>Équipes et communautés</strong> : Discord — channels thématiques, rôles, permissions, fils de discussion. Parfait pour structurer les échanges dans un contexte professionnel ou communautaire.</li>
<li><strong>Multi-clients professionnel</strong> : Un canal par client, ou idéalement un agent par client pour une séparation totale des données. C'est plus propre, plus sécurisé, et ça évite les fuites d'information entre clients.</li>
</ul>
<p><strong>Astuce combinaison gagnante :</strong> La configuration la plus populaire chez les freelances et petites agences : Telegram pour ton usage perso (tes propres demandes à l'agent), WhatsApp pour l'interface client (tes clients t'écrivent là), Discord pour le travail en équipe (coordination avec tes collaborateurs).</p>

<blockquote>Le multi-canal est un avantage compétitif énorme. Tes clients te contactent où ILS veulent, pas où TU décides. C'est du service premium qui ne te coûte rien en effort supplémentaire. Et quand un prospect voit qu'il peut te joindre sur WhatsApp, Telegram ET Discord, il comprend qu'il a affaire à un professionnel sérieux.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Configure au moins 2 canaux pour ton agent OpenClaw (Telegram + un autre).</li>
<li>Envoie le même message sur les deux canaux et vérifie que l'agent répond de manière cohérente.</li>
<li>Teste un scénario multi-canal : commence une conversation sur Telegram, puis continue-la sur Discord. L'agent maintient-il le contexte ?</li>
<li>Configure un agent pour un cas d'usage client fictif : un chatbot WhatsApp pour un restaurant qui prend les réservations.</li>
</ol>`,
  },
  {
    order: 17,
    module: 3,
    title: "La mémoire persistante : enseigner tes préférences",
    slug: "openclaw-memoire-persistante",
    duration: "45 min",
    description: "Configurer la mémoire d'OpenClaw pour qu'il apprenne ton style et tes préférences.",
    content: `<h2>Le premier soir avec ton agent</h2>
<p>La mémoire persistante est ce qui sépare fondamentalement OpenClaw d'un simple chatbot. Mais elle ne se remplit pas toute seule par magie — tu dois l'entraîner activement. Pense à ça exactement comme le premier jour d'un nouvel employé : tu ne le lâches pas dans la nature en espérant qu'il devine comment tu travailles. Tu l'informes, tu lui montres tes process, tu lui présentes tes clients, tu lui expliques tes standards de qualité.</p>
<p>La bonne nouvelle, c'est que contrairement à un vrai employé, OpenClaw n'oublie <strong>jamais</strong> ce que tu lui dis. Il ne confond pas les clients, ne mélange pas les projets, et n'a pas besoin qu'on lui répète les choses trois fois. Un investissement de quelques heures au départ te fait gagner des centaines d'heures sur le long terme.</p>
<p><strong>Analogie :</strong> Imagine que tu embauches un assistant virtuel sur Fiverr. Le premier jour, tu passes une heure à lui expliquer ton business, tes clients, tes process. Le lendemain, il démissionne. Tu en embauches un autre — et tu dois TOUT ré-expliquer. Avec un chatbot classique, c'est exactement ça : chaque conversation repart de zéro. Avec OpenClaw, c'est le même assistant qui reste, apprend et s'améliore chaque jour.</p>
<p><strong>Astuce :</strong> Bloque un créneau de 1-2 heures dans ton agenda pour cette session d'onboarding. Traite ça comme un investissement business, pas comme une corvée technique. Plus ton briefing initial est complet, plus vite ton agent devient autonome et performant.</p>

<h2>Ce que tu dois enseigner à OpenClaw</h2>
<p>Pour que ton agent soit véritablement utile, il a besoin de connaître plusieurs catégories d'informations essentielles. Voici la liste complète, par ordre de priorité :</p>
<ol>
<li><strong>Ton identité complète</strong> : Ton nom, le nom de ton entreprise, ton rôle exact, tes coordonnées professionnelles (email, téléphone), ton site web, tes réseaux sociaux. L'agent doit pouvoir se présenter en ton nom et fournir les bonnes informations de contact quand un client les demande.</li>
<li><strong>Ton style de communication</strong> : Es-tu formel ou décontracté ? Concis ou détaillé ? Tu utilises des emojis ou jamais ? Tu vouvoies ou tutoies tes clients ? Tu signes tes emails "Cordialement" ou "À bientôt" ? Ces détails font la différence entre un agent qui sonne comme TOI et un agent qui sonne comme un robot générique.</li>
<li><strong>Tes outils et services</strong> : Quels logiciels tu utilises au quotidien — Gmail, Notion, GitHub, Slack, Trello, Google Sheets, Figma, etc. Pour chaque outil, explique comment tu l'utilises et dans quel contexte. L'agent doit savoir quel outil utiliser pour quelle tâche.</li>
<li><strong>Tes objectifs actuels</strong> : Ce que tu veux accomplir cette semaine, ce mois-ci, ce trimestre. Un agent qui connaît tes objectifs peut prioriser les tâches de manière intelligente et te rappeler ce qui est important quand tu te perds dans le quotidien.</li>
<li><strong>Tes préférences détaillées</strong> : Tes horaires de travail (ne pas déranger après 20h), tes langues de travail (français pour les clients, anglais pour le code), tes formats préférés (rapports en PDF, données en CSV, notes en Markdown), ta timezone, etc.</li>
<li><strong>Tes clients et contacts clés</strong> : Pour chaque client régulier, donne le nom, l'entreprise, le type de projet, le canal de communication préféré, le niveau de formalité, et les particularités à connaître ("M. Dupont est toujours pressé, va droit au but", "Mme Martin préfère les explications détaillées").</li>
</ol>
<p><strong>Attention :</strong> Ne donne pas d'informations financières sensibles à l'agent (numéros de carte bancaire, mots de passe de comptes bancaires). Les informations de contact et les préférences de travail sont sans risque, mais les données financières doivent rester hors de la mémoire de l'agent.</p>

<h2>La session d'onboarding</h2>
<p>Passe une soirée entière à "briefer" ton agent. C'est l'investissement le plus rentable que tu feras avec OpenClaw. Voici un template éprouvé que tu peux adapter :</p>
<p><em>"Voici qui je suis : [nom complet], [métier/titre], [nom de l'entreprise]. Mon entreprise fait [activité principale]. Mon objectif principal ce mois-ci est [objectif]. Je communique de manière [style — ex: professionnelle mais chaleureuse, toujours en tutoyant]. Mes outils principaux sont [liste]. Mes clients actuels sont [description de chaque client avec contexte]. Quand je te demande [type de tâche X], je veux [format/approche Y]. Ne fais jamais [interdictions — ex: ne contacte jamais un client sans ma validation, n'envoie jamais d'email après 21h]."</em></p>
<p><strong>Conseil pro :</strong> Ne fais pas tout en un seul message énorme. Procède thème par thème : un message sur ton identité, un message sur tes outils, un message par client, etc. Après chaque thème, demande à l'agent de résumer ce qu'il a compris. Ça te permet de vérifier et de corriger immédiatement les malentendus.</p>
<p><strong>Exemple concret de session d'onboarding :</strong></p>
<p>Message 1 : "Je suis Pierre Martin, développeur web freelance. Mon entreprise s'appelle PixelCraft. Je fais des sites web et des applications pour des PME. Mon email pro est pierre@pixelcraft.fr."</p>
<p>Message 2 : "Mon style de communication : je tutoie mes clients proches (Marc, Sophie), je vouvoie les nouveaux clients. Je suis direct et concis dans mes emails. Je signe toujours 'Pierre - PixelCraft'. Pas d'emojis dans les emails pro."</p>
<p>Message 3 : "Mon client principal est Marc Durand de la société Durand & Fils (marc@durandfils.fr). Son projet : refonte de son site vitrine. Budget : 5 000€. Deadline : fin du mois prochain. Marc est sympathique mais impatient — il faut lui donner des updates réguliers."</p>

<h2>Comment la mémoire fonctionne</h2>
<p>Comprendre le fonctionnement technique de la mémoire t'aidera à l'utiliser plus efficacement. OpenClaw utilise trois types de mémoire distincts :</p>
<ul>
<li><strong>Mémoire à court terme</strong> : C'est la conversation en cours, le contexte immédiat. Elle contient les derniers messages échangés et le sujet actuel de discussion. Elle disparaît quand la conversation se termine. C'est comme ta mémoire de travail quand tu es au téléphone — tu sais de quoi tu parles en ce moment, mais tu ne te souviendras pas de chaque mot demain.</li>
<li><strong>Mémoire à long terme</strong> : Tes préférences, tes projets, tes habitudes, tes clients — tout ce qui persiste entre les conversations. C'est la mémoire la plus précieuse. OpenClaw la stocke dans une base de données locale et la consulte au début de chaque nouvelle conversation pour contextualiser ses réponses. C'est comme la mémoire d'un assistant qui te connaît depuis des mois.</li>
<li><strong>Mémoire factuelle</strong> : Les informations concrètes et précises que tu lui donnes — noms, dates, chiffres, tarifs, adresses email, numéros de téléphone. Ces données sont stockées de manière structurée pour être retrouvées rapidement et précisément. Pas de flou, pas d'approximation.</li>
</ul>
<p><strong>Analogie :</strong> La mémoire à court terme, c'est ton post-it sur le bureau. La mémoire à long terme, c'est ton carnet de notes que tu gardes depuis des années. La mémoire factuelle, c'est ton carnet d'adresses avec tous les contacts bien classés.</p>
<p><strong>Point technique :</strong> Toute la mémoire est stockée dans une base de données locale sur ta machine (ou ton serveur cloud si tu as déployé dans le cloud). Il n'y a pas de "cloud mystérieux" — les données sont chez toi. C'est un avantage majeur en termes de confidentialité et de contrôle.</p>

<h2>Entraîner la mémoire au quotidien</h2>
<p>La mémoire s'améliore naturellement avec l'usage au fil du temps. Mais tu peux considérablement accélérer le processus avec quelques bonnes pratiques :</p>
<ul>
<li><strong>Corrige-le systématiquement</strong> quand il se trompe — "Non, Marc préfère qu'on le contacte par email, pas par téléphone". L'agent apprend de ses erreurs et ne refera pas la même deux fois. Ne laisse jamais passer une erreur sans la corriger, sinon elle se fossilise dans la mémoire.</li>
<li><strong>Confirme explicitement</strong> quand il fait bien — "Oui, c'est exactement le bon ton pour ce client, continue comme ça". Le renforcement positif aide l'agent à consolider les bons comportements. C'est comme former un junior : le feedback positif est aussi important que le négatif.</li>
<li><strong>Mets à jour proactivement</strong> les informations obsolètes — "J'ai un nouveau client, voici ses infos...", "Le projet Dupont est terminé, on passe au projet suivant...", "Mon tarif horaire a changé, c'est maintenant 80€/h". Si tu ne mets pas à jour, l'agent travaillera avec des informations périmées.</li>
<li><strong>Teste régulièrement</strong> ce que l'agent retient — "Qu'est-ce que tu sais sur mon client Marc ?", "Résume mes projets en cours", "Quelles sont mes préférences de communication ?". C'est le meilleur moyen de détecter les lacunes et les erreurs dans la mémoire.</li>
<li><strong>Ajoute du contexte progressivement</strong> — ne cherche pas à tout enseigner le premier jour. Ajoute des informations au fur et à mesure que les situations se présentent. "Tiens, pour les devis de plus de 5 000€, je fais toujours un appel téléphonique avant d'envoyer."</li>
</ul>
<p><strong>Fréquence recommandée :</strong> Fais un "check mémoire" une fois par semaine pendant le premier mois, puis une fois par mois ensuite. Demande simplement à ton agent : "Fais-moi un résumé complet de tout ce que tu sais sur moi et mon business." Lis le résumé, corrige les erreurs, ajoute les manques.</p>

<h2>Privacy et sécurité de la mémoire</h2>
<p>Question légitime que tout le monde se pose : "Où vont mes données ? Qui peut y accéder ?" La réponse est rassurante :</p>
<p>Toute la mémoire est stockée <strong>localement sur ta machine</strong>. Rien ne part dans un cloud tiers (sauf évidemment les messages que tu envoies à l'API Claude ou GPT-4 pour obtenir des réponses, mais ceux-ci ne sont pas stockés de manière permanente par les fournisseurs d'API — vérifie leurs conditions d'utilisation pour les détails).</p>
<p>Tu contrôles totalement quelles informations sont gardées en mémoire. Tu peux à tout moment demander à l'agent d'oublier une information spécifique, vider une catégorie de mémoire, ou même faire un reset complet.</p>
<p><strong>Bonnes pratiques de sécurité pour la mémoire :</strong></p>
<ul>
<li>Ne stocke jamais de mots de passe dans la mémoire de l'agent</li>
<li>Sauvegarde régulièrement la base de données de mémoire (un export par semaine)</li>
<li>Si tu déploies sur un serveur cloud, chiffre le disque dur du serveur</li>
<li>Si tu travailles pour des clients, informe-les que tu utilises un agent IA et explique comment leurs données sont protégées</li>
</ul>
<p><strong>Point RGPD :</strong> Si tu gères des données de clients européens, assure-toi que le stockage de la mémoire est conforme au RGPD. Comme les données restent sur ta machine (ou ton serveur en Europe), tu es en bonne position — mais documente ton process et sois transparent avec tes clients.</p>

<blockquote>Un agent avec 2 mois de mémoire est 10x plus utile qu'un agent fraîchement installé. L'investissement initial de temps se rembourse dès la première semaine. Ne néglige pas cette étape — c'est la différence entre un outil gadget et un vrai assistant qui te connaît.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Fais une session d'onboarding complète avec ton agent OpenClaw (30+ minutes).</li>
<li>Enseigne-lui : ton identité, ton style, 3 projets en cours, 3 clients fictifs.</li>
<li>24h plus tard, teste sa mémoire : "Qu'est-ce que tu sais sur moi ?", "Résume mes projets en cours".</li>
<li>Corrige les erreurs et ajoute les informations manquantes.</li>
<li>Répète le test dans 3 jours — la mémoire s'est-elle améliorée ?</li>
</ol>`,
  },
  {
    order: 18,
    module: 3,
    title: "Déployer sur un serveur cloud",
    slug: "openclaw-deployer-cloud",
    duration: "50 min",
    description: "Faire tourner ton agent 24/7 sur un serveur cloud pour 4€ par mois.",
    content: `<h2>Pourquoi déployer dans le cloud ?</h2>
<p>Tant que OpenClaw tourne sur ton laptop, il s'arrête dès que tu fermes le couvercle, que ton ordinateur se met en veille, ou que tu perds ta connexion WiFi. Pour un vrai agent 24/7 qui répond à tes clients à 3h du matin un dimanche, tu as besoin d'un serveur qui ne s'éteint <strong>jamais</strong>.</p>
<p>Bonne nouvelle : ça coûte presque rien. Un serveur cloud basique coûte entre 4 et 10€ par mois — littéralement moins qu'un abonnement Netflix, moins qu'un café par semaine, moins que ce que tu dépenses en chewing-gums par mois.</p>
<p><strong>Analogie :</strong> Ton laptop, c'est comme un magasin qui n'ouvre que quand tu es présent. Un serveur cloud, c'est comme avoir un magasin ouvert 24/7 avec un employé permanent. Le coût est dérisoire comparé au chiffre d'affaires que tu perds en étant "fermé" 16 heures par jour.</p>
<p><strong>Exemple concret :</strong> Un consultant a perdu un client de 3 000€ parce qu'il n'a pas répondu à un email urgent reçu à 22h — le client est allé voir un concurrent plus réactif. Avec un agent OpenClaw sur un serveur cloud à 4€/mois, cette situation ne serait jamais arrivée. Le ROI se calcule en secondes.</p>
<p><strong>Quand déployer dans le cloud :</strong> Tu n'es pas obligé de le faire dès le premier jour. Commence par faire tourner OpenClaw sur ton ordinateur pour apprendre et tester. Une fois que tu es satisfait de la configuration et que tu veux passer en "mode production", déploie dans le cloud. Pour la plupart des gens, c'est après 1-2 semaines d'utilisation locale.</p>

<h2>Les options de déploiement</h2>
<p>Plusieurs hébergeurs cloud proposent des serveurs adaptés à OpenClaw. Voici les plus populaires dans la communauté, avec leurs avantages et inconvénients :</p>
<ul>
<li><strong>Hetzner</strong> (recommandé par la communauté OpenClaw) : À partir de 4€/mois, serveurs en Europe (Allemagne, Finlande), excellentes performances, excellent rapport qualité/prix. C'est le choix numéro 1 pour les utilisateurs européens — données hébergées en Europe (bon pour le RGPD), prix imbattables, et fiabilité éprouvée. Interface en anglais mais très intuitive.</li>
<li><strong>DigitalOcean</strong> : À partir de 6$/mois, interface très simple et documentation excellente. Idéal si tu débutes avec les serveurs cloud. Le dashboard est l'un des plus intuitifs du marché. Serveurs principalement aux USA et en Europe.</li>
<li><strong>AWS Lightsail</strong> : À partir de 5$/mois, fait partie de l'écosystème Amazon Web Services. Bon choix si tu utilises déjà d'autres services AWS. Interface un peu plus complexe mais très puissante.</li>
<li><strong>Oracle Cloud</strong> : Offre un tier gratuit très généreux (serveur ARM avec 4 CPU et 24 Go de RAM gratuits) — parfait pour commencer sans dépenser un centime. La contrepartie : l'interface est moins intuitive et le support moins réactif.</li>
</ul>
<p><strong>Notre recommandation :</strong> Hetzner pour le meilleur rapport qualité/prix et la conformité RGPD. Oracle Cloud si tu veux commencer gratuitement. DigitalOcean si tu veux l'interface la plus simple.</p>
<p><strong>Attention :</strong> Méfie-toi des offres "gratuites" qui deviennent payantes après la période d'essai sans prévenir. Lis toujours les conditions tarifaires. Configure des alertes de facturation pour éviter les mauvaises surprises.</p>

<h2>Déploiement sur Hetzner (pas-à-pas)</h2>
<p>Voici le guide complet pour déployer sur Hetzner, qui est la solution recommandée. Même si tu n'as jamais touché à un serveur de ta vie, ces étapes sont faisables en 30-45 minutes :</p>
<ol>
<li><strong>Crée un compte</strong> sur hetzner.com — tu auras besoin d'une carte bancaire pour la vérification (rien n'est débité avant la création du serveur).</li>
<li><strong>Crée un nouveau serveur</strong> dans le dashboard : choisis <strong>Ubuntu 22.04</strong> comme système d'exploitation (le plus compatible avec OpenClaw), et le plan <strong>CX11</strong> à 4€/mois (2 vCPU, 4 Go RAM, 40 Go SSD). C'est largement suffisant pour un agent OpenClaw.</li>
<li><strong>Choisis un datacenter en Europe</strong> (Nuremberg ou Helsinki) pour minimiser la latence si tes clients sont en Europe et rester conforme au RGPD.</li>
<li><strong>Note l'adresse IP</strong> de ton serveur et le mot de passe root fourni par Hetzner.</li>
<li><strong>Connecte-toi en SSH</strong> : Ouvre ton terminal et tape <code>ssh root@ton_ip_serveur</code>. Sur Windows, utilise PowerShell ou installe PuTTY. Sur Mac/Linux, le terminal suffit. Entre le mot de passe quand demandé.</li>
<li><strong>Installe les prérequis</strong> : Node.js, npm et git. Tu peux utiliser ces commandes :
<code>curl -fsSL https://deb.nodesource.com/setup_20.x | bash -</code> puis <code>apt-get install -y nodejs git</code></li>
<li><strong>Clone OpenClaw</strong> : <code>git clone https://github.com/openclaw/openclaw && cd openclaw && npm install</code></li>
<li><strong>Configure le fichier .env</strong> : Copie ton fichier .env local (avec tes clés API et tokens) sur le serveur. Utilise <code>nano .env</code> pour le créer et coller le contenu.</li>
<li><strong>Lance avec pm2</strong> pour que l'agent tourne en permanence, même si tu fermes ta session SSH : <code>npm install -g pm2 && pm2 start openclaw && pm2 startup && pm2 save</code></li>
</ol>
<p><strong>Astuce :</strong> Après le déploiement, déconnecte-toi du serveur (<code>exit</code>) et envoie un message à ton agent sur Telegram. S'il répond, ton déploiement cloud est réussi. Le serveur tourne maintenant 24/7 de manière autonome.</p>
<p><strong>Attention sécurité :</strong> Dès que ton serveur est en ligne, change le mot de passe root par défaut et configure une authentification par clé SSH plutôt que par mot de passe. Les serveurs exposés sur internet sont constamment scannés par des bots malveillants. On détaille la sécurité dans la prochaine leçon.</p>

<h2>Docker (méthode recommandée)</h2>
<p>Pour plus de sécurité, de portabilité et de facilité de gestion, Docker est la méthode recommandée pour le déploiement en production. Docker "emballe" ton agent dans un container isolé — pense à ça comme une boîte hermétique qui contient tout ce dont l'agent a besoin pour fonctionner.</p>
<ol>
<li><strong>Installe Docker</strong> sur ton serveur : <code>curl -fsSL https://get.docker.com | sh</code></li>
<li><strong>Utilise le Dockerfile</strong> fourni par OpenClaw dans le repo — il est pré-configuré et optimisé.</li>
<li><strong>Lance le container</strong> : <code>docker compose up -d</code> — et c'est parti. Le flag <code>-d</code> lance le container en arrière-plan.</li>
</ol>
<p><strong>Pourquoi Docker est supérieur à pm2 :</strong></p>
<ul>
<li><strong>Isolation totale</strong> : Si quelque chose tourne mal dans l'agent, ça n'affecte pas le reste du serveur. C'est comme avoir un coffre-fort : même si le contenu explose, la pièce autour est intacte.</li>
<li><strong>Reproductibilité</strong> : Tu peux dupliquer exactement la même configuration sur un autre serveur en une commande. Pas de "ça marchait sur mon serveur mais pas sur l'autre".</li>
<li><strong>Mises à jour simplifiées</strong> : <code>docker compose pull && docker compose up -d</code> — deux commandes et ton agent est à jour.</li>
<li><strong>Redémarrage automatique</strong> : Docker redémarre automatiquement le container s'il crash. Pas besoin de surveiller manuellement.</li>
</ul>
<p><strong>Astuce :</strong> Si tu gères plusieurs agents (un par client), Docker est indispensable. Tu peux lancer 5, 10, 20 containers sur le même serveur, chacun isolé des autres. Un fichier <code>docker-compose.yml</code> bien structuré te permet de tout gérer en une seule commande.</p>

<h2>Monitoring et maintenance</h2>
<p>Un agent déployé dans le cloud, c'est comme une voiture : ça tourne tout seul, mais il faut quand même faire la maintenance. Voici ce que tu dois surveiller régulièrement :</p>
<ul>
<li><strong>Logs de l'agent</strong> : Consulte les logs au moins une fois par semaine pour détecter les erreurs, les comportements anormaux ou les tentatives d'abus. Avec pm2 : <code>pm2 logs</code>. Avec Docker : <code>docker logs openclaw</code>. Les logs sont ta fenêtre sur ce que fait ton agent quand tu ne regardes pas.</li>
<li><strong>Monitoring d'uptime</strong> : Utilise un service comme UptimeRobot (gratuit jusqu'à 50 monitors) ou BetterStack pour être alerté par email/SMS si ton agent tombe en panne. Configure un check toutes les 5 minutes. Tu ne veux pas que ton agent soit down pendant 6 heures sans que tu le saches.</li>
<li><strong>Mises à jour régulières</strong> : OpenClaw évolue vite. Mets à jour au moins une fois par mois. Avec pm2 : <code>git pull && npm install && pm2 restart openclaw</code>. Avec Docker : <code>docker compose pull && docker compose up -d</code>. Teste toujours après une mise à jour.</li>
<li><strong>Sauvegardes de la mémoire</strong> : La mémoire de ton agent contient des semaines ou des mois d'apprentissage. Sauvegarde la base de données régulièrement (au moins une fois par semaine). Un crash serveur sans sauvegarde signifie que tu perds toute la mémoire de ton agent — et tu repars de zéro.</li>
<li><strong>Surveillance des coûts API</strong> : Les appels à l'API Claude/GPT-4 sont facturés à l'usage. Configure des alertes de budget sur le dashboard de ton fournisseur IA pour éviter les factures surprises. Un bug qui fait boucler ton agent peut générer des centaines de dollars d'appels API en une nuit.</li>
</ul>
<p><strong>Conseil pro :</strong> Crée un rituel de maintenance mensuel : le premier lundi de chaque mois, consacre 30 minutes à vérifier les logs, les coûts, les mises à jour, et les sauvegardes. C'est 30 minutes qui peuvent t'éviter des heures de galère.</p>

<h2>Coût réel d'un agent 24/7</h2>
<p>Soyons transparents sur les coûts réels pour que tu puisses faire ton business plan. Voici le détail mensuel :</p>
<ul>
<li><strong>Serveur cloud</strong> : 4-10€/mois (Hetzner CX11 à CX21 selon tes besoins)</li>
<li><strong>API Claude/GPT-4</strong> : 10-80€/mois selon le volume d'utilisation. Un agent peu sollicité (10-20 interactions/jour) coûte environ 10-15€/mois. Un agent très actif (100+ interactions/jour) peut monter à 50-80€/mois.</li>
<li><strong>WhatsApp Business API</strong> (si applicable) : 10-30€/mois selon le volume de messages</li>
<li><strong>Monitoring (optionnel)</strong> : Gratuit avec UptimeRobot, ou 5-10€/mois pour des solutions premium</li>
<li><strong>Total réaliste : 15-90€/mois</strong> pour un assistant virtuel qui travaille 24h/24, 7j/7, 365 jours par an</li>
</ul>
<p>Pour mettre ça en perspective : un assistant humain à mi-temps, c'est minimum 800€/mois. Un freelance pour des tâches administratives, c'est 25-50€/heure. Ton agent OpenClaw fait le même travail pour 15-90€/mois <strong>sans limites d'heures</strong>.</p>
<p><strong>Le calcul du ROI :</strong> Si ton agent génère ne serait-ce qu'UN seul client supplémentaire par mois (mettons 500€ de valeur), ton ROI est de 5x à 30x. Un seul devis envoyé automatiquement à 23h qui se transforme en client — et ton agent est rentabilisé pour l'année entière.</p>

<blockquote>Si un agent génère ne serait-ce que 500€ de valeur par mois (un seul client supplémentaire), le ROI est de 5-30x. C'est l'un des meilleurs investissements business possibles en 2025-2026. Le coût est négligeable, le potentiel est illimité.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un compte sur Hetzner (ou le provider de ton choix).</li>
<li>Déploie OpenClaw sur un serveur cloud en suivant les étapes ci-dessus.</li>
<li>Vérifie que l'agent répond 24/7 en lui envoyant un message à 3h du matin (ou programme un message).</li>
<li>Configure pm2 ou Docker pour le redémarrage automatique.</li>
<li>Si le budget est un souci, commence par laisser l'agent tourner sur ton ordi pendant le jour et planifie le déploiement cloud pour plus tard.</li>
</ol>`,
  },
  {
    order: 19,
    module: 3,
    title: "Sécurité et permissions : protéger ton agent",
    slug: "openclaw-securite-permissions",
    duration: "40 min",
    description: "Configurer la sécurité d'OpenClaw pour protéger tes données et tes comptes.",
    content: `<h2>La sécurité n'est pas optionnelle</h2>
<p>OpenClaw tourne sur ta machine avec un accès réel à tes comptes, tes fichiers et tes services. C'est exactement ce qui le rend incroyablement puissant — mais c'est aussi ce qui le rend potentiellement dangereux si tu ne fais pas attention à la sécurité. Un agent mal configuré avec trop de permissions, c'est comme laisser les clés de ta voiture, de ta maison et de ton bureau sur un banc public.</p>
<p>La bonne nouvelle : sécuriser OpenClaw n'est ni compliqué ni chronophage. En suivant les règles de cette leçon, tu auras un agent sûr en 30 minutes. La sécurité n'est pas un frein — c'est un accélérateur. Un agent sécurisé, c'est un agent en qui tu peux avoir confiance, et donc un agent à qui tu peux donner plus d'autonomie.</p>
<p><strong>Analogie :</strong> Pense à ton agent comme à un coffre-fort. Plus le coffre est solide (sécurité), plus tu oses y mettre des choses de valeur (permissions et accès). Un coffre-fort en carton, tu n'y mets rien d'important. Un coffre-fort blindé, tu y mets tout sans hésiter.</p>
<p><strong>Attention :</strong> Les incidents de sécurité les plus courants ne viennent pas de hackers sophistiqués mais de mauvaises configurations : des clés API partagées accidentellement, des permissions trop larges, des skills non vérifiées installées à la va-vite. 95% des problèmes de sécurité sont évitables avec du bon sens.</p>

<h2>Règles de sécurité fondamentales</h2>
<p>Ces quatre règles sont non négociables. Grave-les dans ta mémoire et applique-les systématiquement, dès le premier jour :</p>
<ol>
<li><strong>N'installe que des skills de sources fiables</strong> : Le ClawHub a un système de réputation et de vérification, mais ce n'est pas infaillible. Avant d'installer une skill d'un créateur que tu ne connais pas, vérifie toujours : le nombre de téléchargements, les reviews, et idéalement le code source. Une skill malveillante pourrait accéder à tes emails, tes fichiers ou tes comptes. C'est comme installer une application sur ton téléphone — tu ne télécharges pas n'importe quoi de n'importe qui.</li>
<li><strong>Utilise Docker</strong> quand c'est possible : Docker isole l'agent dans un container séparé du reste de ton système. Même si une skill malveillante s'exécute, elle ne peut pas accéder à tes fichiers personnels, tes autres applications ou ton système d'exploitation. C'est la mesure de sécurité la plus impactante avec le moins d'effort.</li>
<li><strong>Sois délibéré avec les permissions</strong> : Applique le "principe du moindre privilège" — ne donne à l'agent que les permissions strictement nécessaires pour ses tâches actuelles. Si l'agent gère tes emails, il n'a pas besoin d'accéder à tes fichiers bancaires. Si il fait de la veille concurrentielle, il n'a pas besoin d'envoyer des emails. Chaque permission supplémentaire est un risque supplémentaire.</li>
<li><strong>Limite les actions automatiques pour les actions sensibles</strong> : Pour tout ce qui est irréversible ou à fort impact — envoi d'email à un client, publication sur les réseaux sociaux, exécution de transactions, déploiement de code — configure une étape de validation manuelle. L'agent prépare l'action, te la montre, et attend ta confirmation avant de l'exécuter. Tu pourras relâcher cette contrainte progressivement quand tu auras confiance.</li>
</ol>
<p><strong>Règle d'or :</strong> En cas de doute, refuse la permission. Tu pourras toujours l'ajouter plus tard si c'est nécessaire. Tu ne pourras pas annuler un email envoyé à tort ou un fichier supprimé par erreur.</p>

<h2>Le système de permissions OpenClaw</h2>
<p>OpenClaw intègre un système de permissions granulaire qui te donne un contrôle fin sur ce que ton agent peut et ne peut pas faire. Comprendre ces niveaux est essentiel pour une configuration sécurisée :</p>
<ul>
<li><strong>Lecture seule (Read)</strong> : L'agent peut consulter les données mais pas les modifier. Exemple : il peut lire tes emails mais pas en envoyer, consulter ton calendrier mais pas créer d'événements, voir tes fichiers mais pas les modifier. C'est le niveau le plus sûr — idéal pour commencer.</li>
<li><strong>Lecture + écriture (Read/Write)</strong> : L'agent peut consulter ET créer/modifier des données. Exemple : lire et envoyer des emails, consulter et créer des événements, lire et modifier des fichiers. C'est le niveau standard pour un agent opérationnel — mais assure-toi que chaque permission en écriture est justifiée.</li>
<li><strong>Exécution (Execute)</strong> : L'agent peut exécuter des scripts, des commandes système et des programmes. C'est un niveau puissant qui permet l'automatisation avancée mais qui comporte des risques réels. Ne donne cette permission que si tu sais exactement ce que l'agent va exécuter et pourquoi.</li>
<li><strong>Administration (Admin)</strong> : Accès complet sans restriction. <strong>À éviter absolument</strong> sauf cas très spécifique et contrôlé. Un agent en mode admin peut faire littéralement n'importe quoi sur ton système — installer des logiciels, supprimer des fichiers, modifier des configurations. C'est comme donner le code de la bombe nucléaire.</li>
</ul>
<p><strong>Recommandation pour débuter :</strong> Commence en mode "Lecture seule" pour chaque service, puis ajoute les permissions en écriture une par une quand tu constates que l'agent en a besoin. C'est l'approche la plus sûre et elle te force à comprendre exactement ce que ton agent fait avec chaque service.</p>
<p><strong>Exemple pratique :</strong> Pour un agent qui gère tes emails, la configuration idéale pour débuter : lecture des emails (oui), envoi d'emails (en mode brouillon uniquement — l'agent prépare, tu valides et envoies). Après 2 semaines sans erreur, tu passes en envoi direct avec validation pour les emails importants uniquement.</p>

<h2>Bonnes pratiques de sécurité</h2>
<p>Au-delà des règles fondamentales, voici les bonnes pratiques adoptées par les utilisateurs les plus expérimentés d'OpenClaw :</p>
<ul>
<li><strong>Clés API séparées et dédiées</strong> : Crée des clés API spécifiquement dédiées à OpenClaw avec des permissions limitées. Ne réutilise jamais tes clés API personnelles ou de production. Si une clé est compromise, tu ne veux pas que ça affecte tout ton système. C'est comme avoir une clé séparée pour chaque serrure de ta maison.</li>
<li><strong>Rotation régulière des clés</strong> : Change tes clés API tous les 3 mois maximum. C'est une habitude qui prend 10 minutes et qui réduit considérablement le risque de compromission. Mets un rappel récurrent dans ton calendrier.</li>
<li><strong>Audit des logs d'activité</strong> : Consulte régulièrement ce que l'agent fait — les actions qu'il prend, les services qu'il contacte, les données qu'il traite. Les logs sont ton journal de bord. Un comportement anormal (pic d'activité soudain, accès à des services inhabituels) doit déclencher une investigation.</li>
<li><strong>Mode sandbox pour les tests</strong> : Avant de mettre une nouvelle skill en production, teste-la dans un environnement isolé (sandbox). Crée un agent de test avec des données fictives et des permissions limitées. Vérifie que la skill fait bien ce qu'elle prétend faire — et rien d'autre.</li>
<li><strong>Sauvegardes chiffrées</strong> : Sauvegarde la configuration et la mémoire de ton agent régulièrement, et chiffre ces sauvegardes. Utilise un outil comme <code>gpg</code> ou un service de backup chiffré. Si ton serveur est compromis, tes sauvegardes restent protégées.</li>
<li><strong>Mises à jour de sécurité</strong> : Applique les mises à jour d'OpenClaw et de ton système d'exploitation dès qu'elles sont disponibles, surtout les patches de sécurité. Les vulnérabilités connues sont les premières exploitées par les attaquants.</li>
</ul>

<h2>Sécurité pour les clients</h2>
<p>Si tu déploies OpenClaw pour des clients (ce qui est l'objectif de cette formation), la sécurité n'est pas juste une bonne pratique — c'est une obligation légale et commerciale. Voici les règles à suivre impérativement :</p>
<ul>
<li><strong>Un agent par client, jamais de partage</strong> : Chaque client a sa propre instance d'OpenClaw, avec sa propre mémoire, ses propres clés API et ses propres permissions. Jamais, au grand jamais, deux clients ne doivent partager le même agent. Une fuite de données d'un client vers un autre serait catastrophique pour ta réputation.</li>
<li><strong>Isolation complète des données</strong> : Les données d'un client ne doivent jamais être accessibles par l'agent d'un autre client. Si tu utilises Docker, chaque client a son propre container. Si tu utilises des serveurs séparés, c'est encore mieux.</li>
<li><strong>Documentation des permissions</strong> : Pour chaque client, documente précisément quelles permissions sont accordées à l'agent, quels services sont connectés, et quelles données sont traitées. C'est utile pour toi (traçabilité), pour ton client (transparence), et en cas d'audit (conformité).</li>
<li><strong>Contrat de confidentialité</strong> : Mets en place un contrat de confidentialité (NDA) avec chaque client avant de configurer l'agent. Cela protège les deux parties et pose un cadre professionnel. Un template de NDA adapté coûte 50-100€ à faire rédiger par un avocat — c'est un investissement indispensable.</li>
<li><strong>Procédure de décommissionnement</strong> : Quand un contrat client se termine, aie une procédure claire pour supprimer toutes les données du client : mémoire de l'agent, logs, sauvegardes, clés API. Le client doit pouvoir demander la suppression de ses données à tout moment (obligation RGPD).</li>
</ul>
<p><strong>Conseil business :</strong> Fais de la sécurité un argument commercial. Quand tu présentes tes services à un prospect, explique ta politique de sécurité : isolation des données, chiffrement, NDA, conformité RGPD. La plupart de tes concurrents ne font rien de tout ça. C'est un différenciateur majeur qui justifie des tarifs plus élevés.</p>

<blockquote>La confiance de tes clients repose sur ta capacité à protéger leurs données. Prends la sécurité au sérieux dès le premier jour — ça te différenciera de 99% des concurrents qui bricolent sans process. Un incident de sécurité peut détruire une réputation en 24 heures. Une bonne hygiène de sécurité construit une réputation en or sur le long terme.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Fais un audit des permissions de ton agent OpenClaw. Liste ce à quoi il a accès.</li>
<li>Réduis les permissions au minimum nécessaire pour tes cas d'usage actuels.</li>
<li>Si tu n'utilises pas Docker, installe-le et migre ton agent dans un container.</li>
<li>Configure une alerte (email ou Telegram) pour être notifié quand l'agent effectue une action sensible.</li>
<li>Écris une "politique de sécurité" en 10 points que tu pourras présenter à tes futurs clients.</li>
</ol>`,
  },

  // ═══════════════════════════════════════════════════
  // MODULE 5 : Créer et Publier des Skills OpenClaw (6 leçons)
  // ═══════════════════════════════════════════════════
  {
    order: 26,
    module: 5,
    title: "Architecture des Skills OpenClaw et ClawHub",
    slug: "architecture-skills-openclaw-clawhub",
    duration: "45 min",
    description: "Comprendre l'architecture des skills OpenClaw et le marketplace ClawHub.",
    content: `<h2>Les Skills OpenClaw</h2>
<p>Les Skills sont des packs de compétences plug-and-play pour OpenClaw. Tu les installes en quelques secondes, et ton agent sait immédiatement faire de nouvelles choses. C'est exactement comme ajouter des applications à ton smartphone : ton téléphone ne sait pas naviguer sur Maps tout seul — tu installes l'app, et soudain il devient GPS.</p>
<p>Chaque skill encapsule une capacité spécifique : gérer des emails, surveiller GitHub, créer des pages Notion, poster sur les réseaux sociaux, analyser des données, etc. Une skill bien conçue transforme un agent généraliste en spécialiste d'un domaine particulier.</p>
<p><strong>Analogie :</strong> Imagine un employé polyvalent. Il sait faire beaucoup de choses de manière basique. Maintenant, donne-lui une formation spécialisée en comptabilité — il devient comptable expert. Donne-lui une formation en marketing — il devient marketeur. Les skills, ce sont ces formations spécialisées pour ton agent.</p>
<p><strong>Pourquoi c'est important pour toi :</strong> Les skills sont au coeur du modèle économique d'OpenClaw. D'un côté, tu les utilises pour rendre tes agents plus performants (et donc offrir un meilleur service à tes clients). De l'autre, tu peux <strong>créer et vendre tes propres skills</strong> sur le ClawHub — c'est le chemin le plus direct vers des revenus passifs dans l'écosystème IA.</p>
<p><strong>Astuce :</strong> Avant de créer une skill de zéro, vérifie toujours si une skill similaire existe déjà sur le ClawHub. Tu gagneras du temps en partant d'une base existante, et tu éviteras de réinventer la roue. Si une skill existe mais est incomplète ou mal faite, c'est une opportunité pour toi : crée une meilleure version.</p>

<h2>Structure d'une Skill OpenClaw</h2>
<p>Chaque skill suit une structure standardisée — c'est ce qui permet l'interopérabilité et la facilité d'installation. Comprendre cette structure est indispensable pour créer tes propres skills. Voici les fichiers qu'on retrouve dans chaque skill :</p>
<ul>
<li><strong>manifest.json</strong> : Le fichier d'identité de la skill. Il contient toutes les métadonnées essentielles — nom, version, description, auteur, permissions requises, compatibilité, déclencheurs (triggers), et dépendances. C'est la première chose que le ClawHub et OpenClaw lisent quand ils installent une skill. Pense à ça comme la carte d'identité de ta skill.</li>
<li><strong>main.py / main.js</strong> : Le code principal de la skill — c'est ici que toute la logique s'exécute. C'est le "cerveau" de ta skill. Tu peux écrire en Python ou en JavaScript selon ta préférence. Le fichier principal contient les fonctions qui s'exécutent quand la skill est déclenchée.</li>
<li><strong>config.yaml</strong> : Le fichier de configuration par défaut. Il contient les paramètres ajustables par l'utilisateur sans toucher au code — horaires d'exécution, seuils d'alerte, formats de sortie, etc. Un bon config.yaml rend ta skill flexible et adaptable à différents cas d'usage.</li>
<li><strong>README.md</strong> : La documentation pour les utilisateurs. C'est souvent ce qui fait la différence entre une skill qui se vend et une skill ignorée. Un bon README inclut : une description claire du problème résolu, des screenshots, un guide d'installation pas-à-pas, des exemples d'utilisation, et une FAQ.</li>
<li><strong>tests/</strong> : Le dossier contenant les tests automatisés. Les skills avec des tests inspirent confiance et sont mieux notées sur le ClawHub. Les tests prouvent que ta skill fonctionne comme prévu et facilitent la maintenance lors des mises à jour.</li>
</ul>
<p><strong>Conseil pro :</strong> La qualité de ta documentation (README.md) est souvent plus importante que la qualité de ton code pour le succès commercial d'une skill. Un code parfait avec une documentation nulle ne se vendra pas. Un code correct avec une documentation exceptionnelle se vendra très bien. Investis du temps dans ton README.</p>
<p><strong>Astuce technique :</strong> Utilise le template officiel de skill OpenClaw (disponible sur GitHub) comme point de départ. Il inclut une structure de fichiers pré-configurée, un manifest.json d'exemple, et des tests de base. Ça te fait gagner 30 minutes à chaque nouvelle skill.</p>

<h2>ClawHub : le marketplace</h2>
<p>ClawHub est le marketplace communautaire officiel d'OpenClaw — c'est l'endroit où convergent les créateurs de skills et les utilisateurs. Pense au ClawHub comme à un mélange entre l'App Store d'Apple et GitHub : un espace où tu peux découvrir, télécharger, acheter, publier et vendre des skills.</p>
<ul>
<li><strong>Télécharger des skills</strong> gratuites ou payantes en un clic. L'installation est automatique — la skill se configure et se connecte à ton agent sans intervention manuelle dans la plupart des cas.</li>
<li><strong>Publier tes propres skills</strong> et les monétiser. Tu fixes ton prix, tu gères tes mises à jour, et ClawHub s'occupe du paiement, de la distribution et du support technique de base.</li>
<li><strong>Noter et commenter</strong> les skills des autres créateurs. Le système de notation est crucial : les skills bien notées apparaissent en premier dans les recherches. Chaque bonne review augmente ta visibilité.</li>
<li><strong>Collaborer</strong> avec d'autres créateurs sur des skills open-source, proposer des améliorations, signaler des bugs et contribuer à l'écosystème.</li>
</ul>
<p><strong>Chiffres clés :</strong> Le ClawHub accueille déjà des milliers de skills, mais la demande dépasse largement l'offre dans de nombreuses catégories. Les skills les plus populaires ont des milliers de téléchargements et génèrent des revenus significatifs pour leurs créateurs.</p>
<p><strong>Analogie business :</strong> Le ClawHub est à OpenClaw ce que Shopify est au e-commerce : une plateforme qui te permet de vendre sans te soucier de la logistique technique (paiement, hébergement, distribution). Tu crées, tu publies, et les ventes arrivent pendant que tu dors.</p>

<h2>Catégories populaires sur ClawHub</h2>
<p>Pour te donner une idée des opportunités et t'aider à identifier ta niche, voici les catégories les plus populaires sur le ClawHub, avec des exemples concrets de skills à succès :</p>
<ul>
<li><strong>Productivité</strong> : Gmail briefings quotidiens, gestion intelligente de calendrier, triage d'inbox automatisé, résumés de réunions, gestion de to-do lists. Ce sont les skills les plus téléchargées car elles apportent une valeur immédiate à tout le monde. Marché très large mais concurrence croissante.</li>
<li><strong>Développement</strong> : Monitoring de repos GitHub, automatisation CI/CD, code review assisté par IA, gestion de déploiements, alerte sur les issues critiques. Très prisé par les développeurs et les agences tech. Marché plus niche mais clients prêts à payer cher.</li>
<li><strong>Business et ventes</strong> : Automatisation CRM (HubSpot, Pipedrive), lead generation, suivi de prospects, rapports financiers automatiques, facturation. Énorme potentiel commercial car chaque euro gagné est directement mesurable.</li>
<li><strong>Social Media</strong> : Monitoring de mentions, planification de publications, analyse de performance, détection de tendances, réponse aux commentaires. Très demandé par les community managers et les agences de communication.</li>
<li><strong>Data et Analytics</strong> : Web scraping intelligent, analyse de données, génération de rapports, dashboards automatisés, alertes sur les KPIs. Catégorie en forte croissance avec l'explosion de la data.</li>
</ul>
<p><strong>Astuce pour trouver ta niche :</strong> Les meilleures opportunités ne sont pas dans les catégories les plus populaires (trop de concurrence), mais dans les niches spécialisées. "Gestion de rendez-vous pour dentistes", "Suivi de commandes pour e-commerce Shopify", "Monitoring de prix pour agents immobiliers" — ce sont des skills très ciblées avec peu de concurrence et des clients prêts à payer.</p>

<h2>Modèle économique des Skills</h2>
<p>Tu peux monétiser tes skills de plusieurs façons sur le ClawHub. Le choix du modèle dépend de la complexité de ta skill, du public visé, et de ta stratégie long terme :</p>
<ul>
<li><strong>Gratuit (open-source)</strong> : Parfait pour construire ta réputation, attirer des utilisateurs, et te faire connaître dans l'écosystème. Les skills gratuites génèrent du trafic vers tes skills payantes et établissent ta crédibilité comme créateur. C'est un investissement marketing, pas une perte de revenus.</li>
<li><strong>Achat unique (one-time purchase)</strong> : 5-100€ par skill selon la complexité. L'utilisateur paie une fois et a accès à la skill pour toujours. Simple à comprendre, facile à vendre. Inconvénient : pas de revenus récurrents et les utilisateurs attendent quand même des mises à jour.</li>
<li><strong>Abonnement mensuel</strong> : 2-20€/mois pour des skills avec maintenance régulière, mises à jour fréquentes et support. C'est le modèle le plus rentable sur le long terme. Un skill à 10€/mois avec 100 abonnés = 1 000€/mois de revenus récurrents. L'inconvénient : il faut maintenir la skill activement.</li>
<li><strong>Freemium</strong> : Version de base gratuite avec des limitations (nombre d'actions/jour, fonctionnalités basiques), version premium payante sans limitations. C'est le meilleur des deux mondes : tu attires avec le gratuit, tu convertis avec le premium. Les taux de conversion typiques sont de 2-5% — il te faut donc du volume.</li>
</ul>
<p>Le ClawHub prend une commission de 15-30% sur les ventes (similaire aux app stores classiques). C'est le prix pour l'accès à la plateforme, au système de paiement et à la base d'utilisateurs.</p>
<p><strong>Conseil stratégique :</strong> Commence avec 1-2 skills gratuites de qualité pour construire ta réputation et comprendre le marché. Puis lance une skill premium basée sur les retours de tes utilisateurs gratuits. Ils te diront exactement ce dont ils ont besoin et combien ils sont prêts à payer.</p>

<h2>Pourquoi créer des skills est une opportunité en or</h2>
<p>Le marketplace ClawHub est en phase de lancement — et c'est précisément pour ça que l'opportunité est exceptionnelle. Il y a aujourd'hui très peu de skills disponibles par rapport à la demande explosive. C'est exactement la même dynamique que créer des apps iPhone en 2008 ou des thèmes WordPress en 2010 : un marché affamé avec peu de fournisseurs.</p>
<p>Voici pourquoi tu devrais prendre cette opportunité au sérieux :</p>
<ul>
<li><strong>Barrière à l'entrée basse</strong> : Tu n'as pas besoin d'être un développeur senior pour créer une skill utile. Avec Claude Code et les outils de cette formation, tu peux créer une skill fonctionnelle en quelques heures.</li>
<li><strong>Revenus passifs réels</strong> : Une skill bien faite se vend toute seule sur le ClawHub. Tu la crées une fois, tu la maintiens quelques heures par mois, et elle génère des revenus 24/7. C'est le rêve du revenu passif — et contrairement à beaucoup de "revenus passifs" vendus sur internet, celui-ci est réel et accessible.</li>
<li><strong>Effet composé</strong> : Plus tu as de skills publiées, plus ta visibilité augmente sur le ClawHub, plus tes skills se vendent, plus tu peux en créer. C'est un cercle vertueux.</li>
<li><strong>Double usage</strong> : Chaque skill que tu crées, tu peux aussi l'utiliser pour tes propres clients. C'est un outil de productivité ET un produit commercial. Tu es payé pour créer des outils que tu utilises toi-même.</li>
</ul>
<p><strong>Le facteur temps :</strong> La fenêtre est ouverte maintenant. Dans 18-24 mois, le ClawHub sera saturé de skills dans les catégories principales. Les créateurs qui se positionnent aujourd'hui auront un avantage considérable en termes de reviews, de visibilité et de crédibilité. Ne procrastine pas.</p>

<blockquote>Tu construis une fois. Ça se vend indéfiniment. C'est le revenu passif ultime pour un créateur dans l'écosystème IA. Et contrairement à la plupart des "business en ligne", ici la demande est réelle, croissante et sous-servie.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Explore le ClawHub et identifie les 10 skills les plus populaires. Analyse pourquoi elles marchent.</li>
<li>Identifie 3 niches de skills qui n'existent pas encore mais qui auraient de la demande.</li>
<li>Crée la structure de base d'une skill (manifest.json + README.md) pour une des idées identifiées.</li>
<li>Étudie le code source d'une skill open-source populaire pour comprendre les patterns.</li>
</ol>`,
  },
  {
    order: 27,
    module: 5,
    title: "Créer un skill de briefing Gmail automatisé",
    slug: "skill-briefing-gmail-automatise",
    duration: "55 min",
    description: "Construire de zéro une skill qui résume automatiquement tes emails importants.",
    content: `<h2>Le projet : Gmail Daily Briefing</h2>
<p>Dans cette leçon, tu vas créer de A à Z une skill concrète et immédiatement utile : un briefing quotidien intelligent de ta boîte Gmail. C'est l'une des skills les plus demandées sur le ClawHub, et pour cause — elle résout un problème que tout le monde a : la surcharge d'emails.</p>
<p>Chaque matin à 8h (ou l'heure de ton choix), ton agent analyse automatiquement ta boîte Gmail et t'envoie sur Telegram un résumé structuré avec :</p>
<ul>
<li>Les emails urgents à traiter en priorité (avec un résumé d'une ligne pour chacun)</li>
<li>Un résumé des newsletters importantes (les infos clés sans avoir à les lire en entier)</li>
<li>Les follow-ups en attente (les emails que tu dois relancer)</li>
<li>Les deadlines à venir mentionnées dans les emails (pour ne jamais en rater une)</li>
</ul>
<p><strong>Pourquoi cette skill :</strong> En moyenne, un professionnel passe 2h30 par jour à gérer ses emails. Cette skill réduit ce temps à 15 minutes en te montrant exactement ce qui compte et en ignorant le bruit. C'est 2 heures gagnées par jour — 10 heures par semaine — 40 heures par mois. Le ROI est massif.</p>
<p><strong>Exemple concret :</strong> Avant cette skill, tu ouvrais Gmail le matin et tu voyais 47 emails non lus. Panique. Tu passais 45 minutes à tout parcourir pour identifier les 3 emails urgents cachés au milieu des newsletters et des notifications. Avec la skill, tu ouvres Telegram et tu vois : "3 emails urgents (détails ci-dessous), 2 follow-ups en retard, 1 deadline demain". En 2 minutes, tu sais exactement quoi faire.</p>

<h2>Étape 1 : Le manifest</h2>
<p>Crée un dossier <code>gmail-daily-briefing/</code> et commence par le fichier <code>manifest.json</code>. C'est la carte d'identité de ta skill — OpenClaw et le ClawHub l'utilisent pour comprendre ce que fait ta skill et de quoi elle a besoin.</p>
<p>Le manifest doit définir précisément :</p>
<ul>
<li><strong>Le nom et la version</strong> de ta skill (ex: "Gmail Daily Briefing v1.0.0")</li>
<li><strong>Les permissions nécessaires</strong> : lecture Gmail (pour accéder aux emails) et envoi Telegram (pour envoyer le briefing). Sois précis sur les permissions — ne demande que le strict nécessaire. Une skill qui demande trop de permissions fait peur aux utilisateurs.</li>
<li><strong>Le déclencheur (trigger)</strong> : un cron quotidien à 8h. Le format cron <code>0 8 * * *</code> signifie "tous les jours à 8h00".</li>
<li><strong>Les dépendances</strong> : les librairies nécessaires (client Gmail API, client Telegram, etc.)</li>
<li><strong>La configuration par défaut</strong> : nombre d'emails à analyser, critères d'urgence, format du briefing</li>
</ul>
<p><strong>Astuce :</strong> Ajoute aussi une option de configuration pour l'heure du briefing. Tout le monde ne commence pas sa journée à 8h. Rendre ce paramètre configurable augmente considérablement l'attrait de ta skill auprès d'un public plus large.</p>
<p><strong>Attention :</strong> L'API Gmail nécessite une configuration OAuth2 (autorisation Google). C'est l'étape la plus complexe techniquement. Documente-la très clairement dans ton README, avec des captures d'écran. C'est le premier point de friction pour les utilisateurs — si cette étape est mal documentée, tu perdras 80% des installations.</p>

<h2>Étape 2 : La logique principale</h2>
<p>La skill suit un workflow séquentiel en 6 étapes bien définies. Chaque étape a un rôle précis et doit être testable indépendamment :</p>
<ol>
<li><strong>Connexion</strong> : Se connecte à Gmail via l'API Google avec les tokens OAuth2. Gère aussi le renouvellement automatique des tokens expirés — c'est un point souvent oublié qui cause des pannes silencieuses.</li>
<li><strong>Filtrage</strong> : Récupère les emails des dernières 24h (depuis le dernier briefing). Ignore les spams, les emails marketing déjà lus, et les notifications automatiques (GitHub, Jira, etc.) sauf si elles contiennent des mentions directes.</li>
<li><strong>Catégorisation IA</strong> : C'est la partie la plus critique — l'IA analyse chaque email et le classe par urgence (urgent, important, informatif, ignorable). La qualité de cette catégorisation dépend directement de la qualité de ton prompt. On verra ça à l'étape 3.</li>
<li><strong>Extraction d'informations</strong> : Pour chaque email catégorisé, l'IA extrait les actions requises ("répondre à Marc avant vendredi"), les deadlines mentionnées ("livraison prévue le 15 mars"), et les informations clés.</li>
<li><strong>Génération du résumé</strong> : L'IA compile toutes les informations extraites en un briefing structuré, lisible en 30 secondes, rédigé en français clair et concis.</li>
<li><strong>Envoi</strong> : Envoie le briefing formaté sur Telegram avec des emojis pour faciliter la lecture rapide (rouge pour urgent, orange pour important, vert pour informatif).</li>
</ol>
<p><strong>Conseil technique :</strong> Gère les erreurs à chaque étape. Si Gmail est inaccessible, l'agent doit t'envoyer un message d'erreur sur Telegram au lieu de crasher silencieusement. Si un email est trop long pour être analysé, tronque-le au lieu de faire planter la catégorisation. La robustesse est ce qui sépare une skill amateur d'une skill professionnelle.</p>
<p><strong>Performance :</strong> Si tu as beaucoup d'emails (50+/jour), la catégorisation peut coûter cher en appels API. Optimise en regroupant les emails (batch processing) plutôt que de les analyser un par un. Tu peux envoyer 5-10 emails dans un seul prompt et demander à l'IA de les catégoriser tous en même temps.</p>

<h2>Étape 3 : Le prompt de catégorisation</h2>
<p>La partie clé de ta skill est le prompt qui guide l'IA dans la catégorisation des emails. Un bon prompt fait la différence entre un briefing utile et un briefing inutile. Voici un exemple de prompt efficace et les principes derrière :</p>
<p><em>"Analyse cet email et catégorise-le selon ces critères stricts :<br/>- URGENT : nécessite une réponse ou une action dans les 4 prochaines heures. Exemples : client mécontent, problème technique en production, deadline aujourd'hui.<br/>- IMPORTANT : nécessite une action cette semaine mais pas immédiatement. Exemples : demande de devis, proposition de rendez-vous, feedback à intégrer.<br/>- INFORMATIF : newsletter, notification, mise à jour — utile à savoir mais aucune action requise de ma part.<br/>- IGNORABLE : spam, promotion, notification automatique sans contenu pertinent.<br/>Extrais également : toute deadline mentionnée (avec la date exacte), toute action explicitement requise de ma part, et le nom de l'expéditeur avec son organisation."</em></p>
<p><strong>Principes d'un bon prompt de catégorisation :</strong></p>
<ul>
<li><strong>Critères précis et mesurables</strong> : "4 heures" est précis, "bientôt" est vague. L'IA a besoin de critères clairs pour catégoriser de manière cohérente.</li>
<li><strong>Exemples concrets</strong> : Donne des exemples pour chaque catégorie. L'IA comprend beaucoup mieux avec des exemples qu'avec des définitions abstraites.</li>
<li><strong>Extraction structurée</strong> : Demande explicitement les informations à extraire (deadlines, actions, expéditeur). Si tu ne demandes pas, l'IA ne le fera pas systématiquement.</li>
<li><strong>Adaptation à TON contexte</strong> : Ce qui est "urgent" pour un développeur (bug en production) n'est pas "urgent" pour un commercial (demande de rendez-vous). Personnalise les critères en fonction de ton métier et de tes priorités.</li>
</ul>
<p><strong>Astuce avancée :</strong> Ajoute dans ton prompt les noms de tes contacts VIP (ton plus gros client, ton boss, ton partenaire principal). Tout email de ces personnes est automatiquement classé "urgent" ou "important", peu importe le contenu. "Si l'expéditeur est marc@durandfils.fr ou sophie@agencexyz.com, catégorise TOUJOURS comme IMPORTANT minimum."</p>

<h2>Étape 4 : Le format du briefing</h2>
<p>Un briefing est utile seulement s'il est lisible rapidement. Tu devrais pouvoir le scanner en 30 secondes et savoir exactement quoi faire. Voici la structure recommandée :</p>
<ul>
<li><strong>Ligne d'en-tête</strong> : Date du jour + nombre total d'emails reçus dans les dernières 24h. Exemple : "Briefing du 15 mars — 34 emails reçus"</li>
<li><strong>Section URGENT</strong> (en rouge) : Les emails qui nécessitent une action immédiate, avec un résumé d'une ligne pour chacun. Maximum 5 emails — si tu as plus de 5 emails "urgents" par jour, tes critères sont trop larges.</li>
<li><strong>Section ACTIONS REQUISES</strong> : La liste de tout ce que tu dois faire, extraite de tous les emails. Format bullet point avec le nom de la personne et la deadline si applicable. "Répondre à Marc Durand sur le devis — deadline vendredi", "Envoyer les maquettes à Sophie — pas de deadline explicite".</li>
<li><strong>Section DEADLINES</strong> : Les échéances à venir mentionnées dans les emails, triées par date. "Aujourd'hui : livraison rapport Dupont. Demain : call avec fournisseur à 14h. Vendredi : deadline devis Martin."</li>
<li><strong>Section INFORMATIF</strong> : Un résumé en 2-3 lignes des newsletters et mises à jour importantes. Juste les faits saillants, pas le détail.</li>
<li><strong>Section IGNORÉS</strong> : Le nombre d'emails ignorés en toute sécurité ("22 emails ignorés : 15 promotions, 5 notifications GitHub, 2 newsletters déjà lues"). Ça te rassure de savoir que rien d'important n'a été raté.</li>
</ul>
<p><strong>Astuce UX :</strong> Utilise des emojis en début de chaque section pour faciliter le scan visuel. Par exemple : "🔴 URGENT", "🟡 ACTIONS", "📅 DEADLINES", "📋 INFO", "✅ IGNORÉS". Sur Telegram, les emojis rendent le briefing beaucoup plus lisible qu'un mur de texte.</p>

<h2>Étape 5 : Test et raffinement</h2>
<p>Une skill n'est jamais parfaite du premier coup. L'étape de test et de raffinement est cruciale — c'est ce qui transforme un prototype bancal en un outil fiable et professionnel.</p>
<p>Lance la skill manuellement plusieurs fois (pas besoin d'attendre 8h du matin — déclenche-la à la demande pour les tests). Voici ce que tu dois vérifier et ajuster :</p>
<ul>
<li><strong>Précision de la catégorisation</strong> : Est-ce que les emails urgents sont vraiment urgents ? Est-ce que des emails importants sont classés comme "informatifs" ? Ajuste ton prompt en conséquence. Un taux de précision de 90%+ est l'objectif.</li>
<li><strong>Qualité des résumés</strong> : Les résumés sont-ils suffisamment informatifs pour agir sans ouvrir l'email original ? Sinon, demande à l'IA d'inclure plus de détails dans ses résumés.</li>
<li><strong>Extraction des deadlines</strong> : L'IA capture-t-elle toutes les dates mentionnées dans les emails ? Teste avec des formats variés ("le 15 mars", "vendredi prochain", "dans 3 jours", "fin de semaine").</li>
<li><strong>Temps d'exécution</strong> : Combien de temps la skill met-elle à générer le briefing ? Si c'est plus de 2 minutes, optimise (batch processing, réduction du nombre d'emails analysés).</li>
<li><strong>Coût par exécution</strong> : Calcule combien d'appels API chaque briefing coûte. 30 emails x 1 appel API = ~0,05-0,10€ par briefing. C'est raisonnable. Si c'est plus, optimise.</li>
</ul>
<p><strong>Processus d'itération recommandé :</strong> Utilise la skill pendant 5 jours. Chaque jour, note ce qui est bien et ce qui pourrait être amélioré. Après 5 jours, fais un lot d'ajustements. Répète une deuxième semaine. Après 2 semaines de raffinement, ta skill devrait être prête pour la publication.</p>
<p><strong>Attention :</strong> Ce qui est "urgent" pour toi n'est pas forcément urgent pour quelqu'un d'autre. Si tu publies cette skill sur le ClawHub, rends les critères de catégorisation configurables (via le fichier config.yaml). Chaque utilisateur doit pouvoir personnaliser les seuils selon ses propres priorités.</p>

<blockquote>Cette skill à elle seule te fait gagner 15-30 minutes chaque jour. Sur un an, c'est plus de 100 heures récupérées. Et tu peux la vendre sur ClawHub ou l'intégrer comme service premium pour tes clients. Un investissement de quelques heures de développement pour des années de gain de temps.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée le dossier et la structure de la skill gmail-daily-briefing.</li>
<li>Écris le manifest avec les bonnes permissions.</li>
<li>Implémente la logique principale (ou demande à Claude Code de t'aider).</li>
<li>Teste avec ton propre Gmail : le briefing est-il pertinent ? Les priorités sont-elles correctes ?</li>
<li>Itère sur le prompt de catégorisation jusqu'à obtenir un résultat qui te convient parfaitement.</li>
</ol>`,
  },
  {
    order: 28,
    module: 5,
    title: "Créer un skill de workflow Notion",
    slug: "skill-workflow-notion",
    duration: "50 min",
    description: "Construire une skill qui automatise tes workflows Notion avec OpenClaw.",
    content: `<h2>Notion + OpenClaw = Productivité x10</h2>
<p>Notion est devenu l'outil de gestion préféré des freelances, des startups et des agences. C'est un couteau suisse de la productivité : notes, bases de données, gestion de projets, wiki, CRM... Mais cette polyvalence a un prix : beaucoup de tâches répétitives. Créer des pages projet, suivre les deadlines, mettre à jour les statuts, générer des rapports — tout ça prend du temps, chaque jour.</p>
<p>En connectant Notion à OpenClaw, tu automatises toutes ces tâches répétitives et tu transformes Notion d'un outil passif en un système intelligent qui travaille pour toi. L'agent ne remplace pas Notion — il le <strong>supercharge</strong>.</p>
<p><strong>Exemple parlant :</strong> Un chef de projet passait 45 minutes chaque lundi matin à créer les pages de suivi de la semaine dans Notion, copier les tâches en retard, et envoyer un résumé à son équipe. Avec la skill Notion + OpenClaw, tout ça se fait automatiquement à 8h le lundi. Le chef de projet arrive au bureau avec tout prêt et gagne 3 heures par semaine.</p>
<p><strong>Pourquoi cette skill est stratégique :</strong> Notion a plus de 30 millions d'utilisateurs. Parmi eux, des millions cherchent des moyens d'automatiser leurs workflows. Une skill Notion bien faite a un marché énorme sur le ClawHub — et très peu de concurrence pour le moment.</p>
<p><strong>Astuce :</strong> Avant de coder, passe du temps à identifier les tâches Notion que TU fais de manière répétitive. Ce sont tes meilleurs candidats pour l'automatisation. Si tu le fais manuellement, d'autres le font aussi — et ils paieront pour une solution automatisée.</p>

<h2>Cas d'usage de la skill</h2>
<p>Cette skill Notion couvre les 4 automatisations les plus demandées par les utilisateurs de Notion. Chaque cas d'usage est implémenté comme une "commande" que tu peux déclencher via Telegram :</p>
<ul>
<li><strong>Création automatique de pages projet</strong> : Tu envoies "Nouveau projet [nom du projet]" sur Telegram, et l'agent crée instantanément une page Notion structurée avec toutes les sections nécessaires (objectifs, timeline, livrables, notes de réunion). Fini les 15 minutes à copier-coller un template et remplir les en-têtes. En 3 secondes, ta page est prête avec le bon formatage et la bonne structure.</li>
<li><strong>Suivi intelligent des tâches</strong> : Chaque matin, l'agent parcourt tes bases de données Notion, identifie les tâches en retard et les deadlines du jour, et t'envoie un résumé sur Telegram. "Tu as 3 tâches en retard et 5 tâches dues aujourd'hui." Plus besoin d'ouvrir Notion et de filtrer manuellement chaque base de données.</li>
<li><strong>Notes de réunion automatiques</strong> : Tu envoies "Meeting avec [personne] sur [sujet]" et l'agent crée automatiquement une page de notes de réunion dans Notion avec un template pré-rempli : date, participants, ordre du jour, espace pour les notes, et section "actions à suivre". Après la réunion, tu dictes tes notes à l'agent qui les structure proprement.</li>
<li><strong>Reporting hebdomadaire automatisé</strong> : Chaque vendredi, l'agent génère un rapport de la semaine à partir des données Notion : tâches complétées, tâches en retard, taux de complétion, points de blocage, et recommandations pour la semaine suivante. Le rapport est sauvegardé dans Notion ET envoyé par email/Telegram à qui tu veux.</li>
</ul>
<p><strong>Astuce :</strong> Commence par implémenter un seul cas d'usage (le plus utile pour toi), perfectionne-le, puis ajoute les autres un par un. C'est plus efficace que d'essayer de tout construire en même temps et de finir avec 4 fonctionnalités médiocres au lieu d'une excellente.</p>

<h2>Connexion à l'API Notion</h2>
<p>Pour que ton agent puisse interagir avec Notion, tu dois créer une "intégration" (c'est le nom que Notion donne à ses connexions API). Voici le processus détaillé :</p>
<ol>
<li><strong>Va sur notion.so/my-integrations</strong> — c'est la page de gestion des intégrations Notion. Connecte-toi avec ton compte Notion.</li>
<li><strong>Crée une nouvelle intégration</strong> : Donne-lui un nom clair (ex: "OpenClaw Agent"), sélectionne le workspace Notion dans lequel l'intégration aura accès, et choisis les permissions (lecture du contenu, mise à jour du contenu, insertion de contenu).</li>
<li><strong>Partage les pages/databases avec l'intégration</strong> : C'est l'étape souvent oubliée. Par défaut, l'intégration n'a accès à AUCUNE page. Tu dois explicitement partager chaque page ou database avec ton intégration (clic sur "..." en haut à droite de la page > Connexions > sélectionne ton intégration).</li>
<li><strong>Copie le token d'intégration</strong> (Internal Integration Token) — il commence par <code>ntn_</code> ou <code>secret_</code>. Garde-le précieusement, c'est ton clé d'accès.</li>
<li><strong>Configure le token</strong> dans les variables d'environnement d'OpenClaw (fichier .env). La variable s'appelle généralement <code>NOTION_TOKEN</code> ou <code>NOTION_API_KEY</code>.</li>
</ol>
<p><strong>Attention piège courant :</strong> Si ta skill ne trouve aucune page dans Notion, c'est probablement parce que tu n'as pas partagé les pages avec l'intégration (étape 3). C'est le problème numéro 1 signalé par les utilisateurs. L'API Notion ne voit que les pages explicitement partagées avec l'intégration — ce n'est pas un accès global au workspace.</p>
<p><strong>Astuce :</strong> Crée un dossier parent "Projets" dans Notion et partage ce dossier parent avec l'intégration. Toutes les sous-pages hériteront automatiquement de l'accès. C'est plus pratique que de partager chaque page individuellement.</p>
<p><strong>Conseil sécurité :</strong> Crée une intégration séparée pour chaque usage/client. Ne réutilise pas la même intégration pour tout. Si un token est compromis, tu ne veux pas que ça affecte tous tes workspaces.</p>

<h2>Structure de la skill</h2>
<p>Cette skill est organisée autour de plusieurs "commandes" que l'utilisateur peut déclencher via Telegram (ou n'importe quel canal connecté). Chaque commande a une syntaxe simple et intuitive :</p>
<ul>
<li><code>/nouveau-projet [nom]</code> : Crée une page projet complète avec template dans Notion. L'agent confirme sur Telegram avec un lien direct vers la page créée.</li>
<li><code>/taches-du-jour</code> : Scanne toutes les bases de données Notion et liste les tâches dont la deadline est aujourd'hui. Affiche le nom de la tâche, le projet associé, et la priorité.</li>
<li><code>/retards</code> : Liste toutes les tâches dont la deadline est dépassée, triées par ancienneté du retard. Parfait pour le suivi et les relances.</li>
<li><code>/rapport-semaine</code> : Génère un rapport complet de la semaine avec statistiques, accomplissements et recommandations.</li>
</ul>
<p><strong>Astuce de conception :</strong> En plus des commandes explicites, ajoute des déclencheurs automatiques. Par exemple : tous les matins à 9h, l'agent envoie automatiquement les tâches du jour (comme un <code>/taches-du-jour</code> automatique). Tous les vendredis à 17h, il envoie le rapport de la semaine. L'utilisateur n'a même pas besoin d'y penser — l'information vient à lui.</p>
<p><strong>Conseil UX :</strong> Ajoute une commande <code>/aide</code> qui liste toutes les commandes disponibles avec des exemples. Les utilisateurs oublient toujours les commandes exactes — une aide contextuelle réduit la frustration et augmente l'adoption.</p>

<h2>Le template de page projet</h2>
<p>Quand l'agent crée un nouveau projet, il ne se contente pas de créer une page vide — il génère automatiquement une structure professionnelle complète qui standardise tous tes projets :</p>
<ul>
<li><strong>Header</strong> avec le nom du projet, la date de création, et un statut (En cours / En attente / Terminé)</li>
<li><strong>Section "Informations client"</strong> avec les champs pré-remplis : nom du client, contact principal, email, budget, deadline globale</li>
<li><strong>Section "Objectifs"</strong> avec des bullet points à compléter — "Qu'est-ce qu'on cherche à accomplir ?"</li>
<li><strong>Section "Timeline"</strong> avec les étapes clés du projet sous forme de tableau : étape, responsable, deadline, statut</li>
<li><strong>Section "Livrables"</strong> avec une checklist : chaque livrable avec sa date de livraison prévue</li>
<li><strong>Section "Notes de réunion"</strong> : un espace dédié où chaque réunion est documentée avec date, participants et décisions prises</li>
<li><strong>Section "Budget et facturation"</strong> : suivi des heures, des coûts et des factures émises</li>
</ul>
<p><strong>Pourquoi standardiser :</strong> Quand tous tes projets ont la même structure, tu gagnes en efficacité (tu sais toujours où trouver l'info), en qualité (rien n'est oublié), et en professionnalisme (tes clients voient un suivi rigoureux). C'est la différence entre un artisan organisé et un artisan qui travaille "à l'arrache".</p>
<p><strong>Astuce :</strong> Rends le template configurable via le fichier config.yaml. Chaque utilisateur de ta skill devrait pouvoir personnaliser les sections selon ses besoins spécifiques. Un développeur n'a pas les mêmes sections qu'un consultant ou qu'un designer.</p>

<h2>Automatisation du reporting</h2>
<p>Le rapport hebdomadaire est la feature "wow" de cette skill — celle qui impressionne le plus les clients et les utilisateurs. Il est généré automatiquement chaque vendredi à l'heure que tu choisis :</p>
<ol>
<li><strong>Collecte</strong> : L'agent parcourt toutes les tâches créées, modifiées ou complétées pendant la semaine à travers toutes les bases de données Notion partagées.</li>
<li><strong>Analyse quantitative</strong> : Il calcule le taux de complétion (tâches terminées / tâches prévues), le nombre de nouvelles tâches créées, le nombre de tâches en retard, et la tendance par rapport à la semaine précédente (amélioration ou dégradation).</li>
<li><strong>Détection des blocages</strong> : Il identifie les tâches qui stagnent (pas de mise à jour depuis 3+ jours), les projets en danger (taux de complétion < 50% avec deadline proche), et les surcharges (une personne avec trop de tâches assignées).</li>
<li><strong>Génération du rapport</strong> : L'IA compile tout en un rapport structuré avec un résumé exécutif (3 lignes), les chiffres clés, les accomplissements, les alertes, et des recommandations concrètes pour la semaine suivante.</li>
<li><strong>Distribution</strong> : Le rapport est automatiquement sauvegardé dans une page Notion dédiée (historique des rapports), et envoyé sur Telegram (et/ou par email si configuré). Tes clients ou ton équipe reçoivent le rapport sans que tu aies à lever le petit doigt.</li>
</ol>
<p><strong>Exemple de rapport généré :</strong> "Semaine du 10 au 14 mars — 23 tâches complétées sur 28 prévues (82%, +5% vs semaine dernière). 2 tâches en retard critique (maquettes projet Martin, déploiement site Dupont). Recommandation : prioriser le déploiement Dupont lundi matin, deadline client mercredi."</p>
<p><strong>Conseil business :</strong> Si tu vends des services à des clients, envoie-leur ce rapport hebdomadaire automatique. C'est le meilleur moyen de justifier tes tarifs — le client voit chaque semaine exactement ce qui a été fait, ce qui est en cours, et ce qui est prévu. La transparence génère la confiance, et la confiance génère des contrats renouvelés.</p>

<blockquote>L'automatisation Notion est l'une des skills les plus demandées sur ClawHub. Si tu la construis bien, tu peux la vendre ou l'utiliser comme base pour un service client premium. Un rapport hebdomadaire automatique, c'est ce qui fait dire à un client "je ne peux plus me passer de ce freelance".</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée une intégration Notion et connecte-la à OpenClaw.</li>
<li>Implémente au moins 2 commandes : /nouveau-projet et /taches-du-jour.</li>
<li>Teste avec ton propre Notion : les pages sont-elles bien créées ? Les tâches bien listées ?</li>
<li>Ajoute une fonctionnalité de rappel : l'agent t'envoie un message à 9h avec les tâches du jour.</li>
</ol>`,
  },
  {
    order: 29,
    module: 5,
    title: "Créer un skill de monitoring GitHub",
    slug: "skill-monitoring-github",
    duration: "50 min",
    description: "Construire une skill qui surveille tes repos GitHub et t'alerte sur l'important.",
    content: `<h2>Pourquoi monitorer GitHub ?</h2>
<p>Si tu travailles sur des projets de développement — que ce soit des projets open-source, du code pour des clients, ou tes propres produits — rester au courant de l'activité GitHub est absolument crucial. Nouvelles issues, pull requests en attente, alertes de sécurité, activité de la communauté... Le flux d'informations est constant et grandissant.</p>
<p>Mais vérifier manuellement chaque repo plusieurs fois par jour, c'est une perte de temps monumentale. Un développeur passe en moyenne 30-60 minutes par jour à naviguer entre ses repos GitHub pour rester à jour. C'est du temps qui devrait être consacré à écrire du code, pas à lire des notifications.</p>
<p><strong>Exemple concret :</strong> Un développeur freelance gère 8 repos actifs pour différents clients. Chaque matin, il ouvrait GitHub, visitait chaque repo, vérifiait les issues, les PR, et les alertes de sécurité. 45 minutes perdues avant même de commencer à coder. Avec cette skill, il reçoit un briefing structuré sur Telegram en 30 secondes — et il ne code les 45 minutes supplémentaires que quand il y a vraiment quelque chose qui nécessite son attention.</p>
<p><strong>Pour qui cette skill est indispensable :</strong> Développeurs freelances, lead devs, CTO de startups, mainteneurs de projets open-source, agences de développement. Si tu écris du code ou gères des équipes qui écrivent du code, cette skill est un must-have.</p>
<p><strong>Potentiel commercial :</strong> Sur le ClawHub, les skills orientées développeurs se vendent très bien parce que les développeurs comprennent la valeur de l'automatisation et sont prêts à payer pour gagner du temps. C'est un public avec un fort pouvoir d'achat et une faible résistance au prix pour les bons outils.</p>

<h2>Ce que la skill fait</h2>
<p>La skill de monitoring GitHub surveille en continu tes repos et te tient informé de tout ce qui compte, sans le bruit. Voici les 5 axes de surveillance :</p>
<ul>
<li><strong>Surveillance des issues</strong> : Nouvelles issues créées, issues où tu es mentionné, issues tagguées "critical" ou "bug", issues assignées à toi. L'agent résume chaque issue en une ligne pour que tu saches immédiatement de quoi il s'agit sans ouvrir GitHub.</li>
<li><strong>Pull requests</strong> : Nouvelles PR soumises, PR en attente de ta review (avec l'âge de chaque PR — "PR #42 attend ta review depuis 3 jours"), PR récemment mergées, PR avec des conflits. Parfait pour ne jamais laisser une PR moisir pendant des semaines.</li>
<li><strong>Releases et versions</strong> : Nouvelles versions publiées des projets que tu suis (dépendances, librairies, frameworks). Quand React sort une nouvelle version, tu le sais dans la minute.</li>
<li><strong>Alertes de sécurité (Dependabot)</strong> : Vulnérabilités détectées dans tes dépendances, avec le niveau de sévérité (critical, high, medium, low). Les alertes critiques sont signalées immédiatement — pas le lendemain.</li>
<li><strong>Métriques de popularité</strong> : Suivi des stars, forks, et clones de tes projets. Parfait pour suivre la traction de tes projets open-source ou des produits que tu publies.</li>
</ul>
<p><strong>Ce que la skill ne fait PAS :</strong> Elle ne modifie rien sur GitHub. C'est une skill en lecture seule — elle observe et rapporte, mais ne crée pas d'issues, ne merge pas de PR, et ne pousse pas de code. C'est un choix de sécurité délibéré. Tu peux ajouter des actions en écriture plus tard si tu le souhaites, mais commence toujours en lecture seule.</p>

<h2>Configuration</h2>
<p>La configuration de cette skill est simple mais importante — elle détermine ce que l'agent surveille et comment il te notifie :</p>
<ol>
<li><strong>Génère un Personal Access Token (PAT)</strong> GitHub avec les permissions nécessaires. Va sur GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic). Génère un nouveau token avec les scopes : <code>repo</code> (accès aux repos privés), <code>notifications</code> (lecture des notifications). Pour les repos publics uniquement, <code>public_repo</code> suffit.</li>
<li><strong>Configure la liste des repos à surveiller</strong> dans le fichier config.yaml de la skill. Tu peux lister des repos spécifiques (<code>monuser/monrepo</code>) ou surveiller tous les repos d'une organisation (<code>monorg/*</code>). Commence avec 2-3 repos pour tester, puis ajoute les autres.</li>
<li><strong>Définis les règles d'alerte</strong> pour chaque type d'événement. C'est la partie la plus importante — tu ne veux pas être spammé de notifications pour chaque commit trivial, mais tu ne veux pas non plus rater une alerte de sécurité critique. L'étape suivante détaille les niveaux d'alerte recommandés.</li>
</ol>
<p><strong>Attention sécurité :</strong> Ton Personal Access Token GitHub donne accès à tes repos (y compris les repos privés si tu as coché <code>repo</code>). Traite-le comme un mot de passe. Ne le commite jamais dans un repo, ne le partage jamais, et configure une date d'expiration (90 jours recommandé). GitHub t'avertira quand le token expire pour que tu puisses en générer un nouveau.</p>
<p><strong>Astuce :</strong> Si tu gères des repos pour des clients, crée un token séparé pour chaque client. Comme ça, si un token est compromis, seuls les repos d'un seul client sont affectés. C'est le principe de l'isolation des accès qu'on a vu dans la leçon sur la sécurité.</p>

<h2>Niveaux d'alerte</h2>
<p>La clé d'un bon monitoring, c'est de distinguer ce qui est urgent de ce qui peut attendre. Voici la configuration d'alertes recommandée, classée par niveau de priorité :</p>
<ul>
<li><strong>IMMÉDIAT (notification instantanée sur Telegram)</strong> : Alertes de sécurité critiques ou high, mentions directes dans les issues ou PR (@tonpseudo), échecs de CI/CD sur la branche principale (le build est cassé), PR mergées sur main/master (quelque chose est déployé en production). Ce sont les événements qui nécessitent ton attention dans l'heure.</li>
<li><strong>Résumé horaire</strong> : Nouvelles PR qui attendent ta review (tu dois les examiner dans la journée), issues assignées à toi (nouvelles tâches), commentaires sur tes PR (feedback à lire). Regroupés dans un message horaire pour ne pas te bombarder.</li>
<li><strong>Résumé quotidien (le briefing du matin)</strong> : Activité générale — nouvelles issues ouvertes et fermées, PR mergées, nouvelles stars et forks, statut global des CI/CD. C'est le "journal quotidien" de tes projets.</li>
<li><strong>Résumé hebdomadaire (le vendredi)</strong> : Statistiques de la semaine — nombre de commits, contributeurs actifs, ratio issues ouvertes/fermées, évolution des stars, temps moyen de review des PR. C'est le rapport pour ta rétrospective hebdomadaire.</li>
</ul>
<p><strong>Conseil pro :</strong> Commence avec des alertes très filtrées (uniquement IMMÉDIAT et résumé quotidien). Si tu constates que tu rates des choses importantes, ajoute progressivement les niveaux intermédiaires. Il vaut mieux ajouter des alertes que devoir en supprimer parce que tu es noyé de notifications. La fatigue d'alerte est réelle et contre-productive.</p>

<h2>Le briefing quotidien GitHub</h2>
<p>Chaque matin à l'heure de ton choix, l'agent compile et t'envoie un briefing structuré couvrant toute l'activité de tes repos dans les dernières 24 heures :</p>
<ul>
<li><strong>Section sécurité</strong> (en premier, toujours) : Nombre d'alertes de sécurité actives, avec détail des nouvelles alertes. Si tout est OK : "Aucune alerte de sécurité". C'est la première chose que tu dois voir.</li>
<li><strong>Section CI/CD</strong> : Statut des builds de tes projets principaux — vert (tout passe), rouge (échec), jaune (en cours). Si un build est cassé, l'agent te dit depuis quand et quel commit a causé la casse.</li>
<li><strong>Section PR en attente</strong> : Liste des PR qui attendent ta review, triées par ancienneté. "PR #42 (feat: nouveau dashboard) — attend depuis 3 jours, par @colleague". Les PR de plus de 48h sont mises en évidence.</li>
<li><strong>Section issues</strong> : Nombre de nouvelles issues (avec tags de priorité si disponibles), issues qui te sont assignées, issues où tu es mentionné.</li>
<li><strong>Section activité notable</strong> : Gros commits, nouvelles branches de feature, merges importants. Un résumé en 2-3 lignes de l'activité significative.</li>
<li><strong>Section popularité</strong> (pour les projets open-source) : Évolution des stars, nouveaux forks, nouveaux contributeurs.</li>
</ul>
<p><strong>Astuce formatage :</strong> Utilise des emojis pour rendre le briefing scannable instantanément. "🟢 CI OK | 🔴 2 alertes sécu | 📋 3 PR en attente | 🆕 5 issues". En un coup d'oeil, tu sais si ta matinée va être tranquille ou intense.</p>

<h2>Actions automatiques</h2>
<p>Au-delà du monitoring passif, tu peux configurer des actions automatiques qui font gagner encore plus de temps à toi et à ton équipe :</p>
<ul>
<li><strong>Auto-labeling des issues</strong> : L'IA analyse le contenu de chaque nouvelle issue et ajoute automatiquement les labels appropriés (bug, feature, documentation, question). Fini le tri manuel des issues. L'IA est souvent plus cohérente qu'un humain pour cette tâche.</li>
<li><strong>Notification intelligente</strong> : L'agent notifie automatiquement la bonne personne selon le type d'issue. Bug front-end ? Notification au développeur front. Bug API ? Notification au développeur back. L'agent fait le routing intelligent basé sur les règles que tu définis.</li>
<li><strong>Résumé automatique des PR longues</strong> : Quand une PR dépasse 500 lignes de changements, l'agent génère automatiquement un résumé des modifications pour faciliter la review. Les reviewers gagnent du temps et les reviews sont de meilleure qualité.</li>
<li><strong>Rappel pour les PR inactives</strong> : Si une PR n'a pas eu de review ou de commentaire depuis 48 heures, l'agent envoie un rappel poli sur Telegram (ou Discord) au reviewer assigné. Plus de PR qui traînent pendant des semaines dans l'oubli.</li>
</ul>
<p><strong>Attention :</strong> Les actions automatiques sont puissantes mais peuvent être intrusives si mal configurées. Commence par les activer en "mode observation" — l'agent te propose l'action (par exemple : "Je suggère d'ajouter le label 'bug' à l'issue #23") et attend ta confirmation. Une fois que tu es satisfait de la qualité des suggestions, passe en mode automatique.</p>

<blockquote>Pour les développeurs et les agences tech, cette skill est indispensable. Elle te fait gagner 30-60 minutes par jour, tu ne rates plus jamais un bug critique ou une alerte de sécurité, et ton équipe gagne en réactivité. C'est l'outil que tout développeur rêve d'avoir — et maintenant tu sais le construire.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Crée un Personal Access Token GitHub avec les bonnes permissions.</li>
<li>Configure la skill pour surveiller 2-3 repos (les tiens ou des repos open-source populaires).</li>
<li>Définis 3 règles d'alerte différentes (immédiat, quotidien, hebdomadaire).</li>
<li>Teste en créant une issue dans un de tes repos — l'alerte arrive-t-elle ?</li>
<li>Ajoute une feature : l'agent résume automatiquement les longues discussions sur les issues.</li>
</ol>`,
  },
  {
    order: 30,
    module: 5,
    title: "Agent Communication Protocol : faire communiquer tes agents",
    slug: "agent-communication-protocol",
    duration: "50 min",
    description: "Utiliser le protocole de communication pour orchestrer plusieurs agents.",
    content: `<h2>Du solo au système</h2>
<p>Jusqu'ici, tu as travaillé avec un seul agent qui fait une chose à la fois. C'est déjà puissant — mais c'est comme avoir un seul employé polyvalent. Imagine maintenant une équipe complète : un réceptionniste, un commercial, un technicien, un comptable, et un chef de projet qui coordonne le tout. Chacun est spécialiste de son domaine, et ensemble ils accomplissent 10 fois plus qu'une seule personne.</p>
<p>C'est exactement ce que permet le <strong>Agent Communication Protocol (ACP)</strong> d'OpenClaw. L'ACP est le système qui permet à plusieurs agents de collaborer, de se transmettre des tâches, de partager des informations et de s'orchestrer de manière coordonnée.</p>
<p><strong>Analogie :</strong> L'ACP, c'est comme le système de communication interne d'une entreprise. Slack pour les messages, un CRM pour les données clients, et un organigramme qui définit qui fait quoi. Sans système de communication, même les meilleurs employés travaillent en silos et gaspillent du temps. Avec un bon système, l'équipe fonctionne comme une machine bien huilée.</p>
<p><strong>Pourquoi c'est un game-changer :</strong> Un agent seul est limité par sa capacité à tout faire. Un système multi-agents te permet de spécialiser chaque agent, de paralléliser les tâches, et de gérer une charge de travail bien plus importante. C'est la différence entre un freelance solo et une agence avec une équipe. Et le coût ? Quelques dizaines d'euros par mois de plus — pas quelques milliers.</p>
<p><strong>Quand passer au multi-agents :</strong> Tu n'as pas besoin de multi-agents dès le premier jour. Commence avec un seul agent, maîtrise-le parfaitement, puis ajoute des agents quand tu identifies des cas d'usage qui justifient la spécialisation. Le passage au multi-agents est naturel quand tu gères plusieurs clients ou plusieurs types de tâches très différents.</p>

<h2>Comment ça marche</h2>
<p>L'ACP définit un ensemble de règles et de formats pour que les agents puissent communiquer de manière fiable et prévisible. Concrètement, l'ACP permet à tes agents de :</p>
<ul>
<li><strong>Se transmettre des tâches (delegation)</strong> : L'agent A détecte un problème qu'il ne sait pas résoudre et le transmet à l'agent B qui est spécialisé. Exemple : l'agent réceptionniste reçoit un message technique sur WhatsApp ("Mon site affiche une erreur 500") et le transmet à l'agent technique avec tout le contexte nécessaire. L'agent technique analyse, résout ou escalade à un humain.</li>
<li><strong>Partager des informations (broadcast)</strong> : Un agent qui découvre une information utile la partage avec les autres. L'agent de veille détecte qu'un concurrent a baissé ses prix et partage cette info avec l'agent commercial qui peut ajuster sa stratégie de prospection.</li>
<li><strong>Orchestrer des workflows séquentiels (pipeline)</strong> : Les tâches passent d'un agent à l'autre dans un ordre défini. Exemple : un lead arrive (agent réceptionniste) → qualification du lead (agent commercial) → envoi du devis (agent administratif) → suivi et relance (agent commercial). Chaque agent fait sa partie et passe le relais.</li>
<li><strong>Escalader vers un humain</strong> : Si un agent ne sait pas gérer une situation (demande ambiguë, plainte sérieuse, décision stratégique), il escalade à un humain avec un résumé de la situation et les options identifiées. L'humain décide, et l'agent exécute. C'est le filet de sécurité qui garantit que rien ne tombe entre les mailles.</li>
</ul>
<p><strong>Point technique :</strong> La communication entre agents se fait via des messages structurés (JSON) qui contiennent le type de message, le contenu, le contexte, la priorité, et l'expéditeur. C'est standardisé pour que n'importe quel agent puisse comprendre les messages de n'importe quel autre agent, même s'ils sont développés par des créateurs différents.</p>
<p><strong>Astuce :</strong> Définis toujours des "règles de fallback" — que se passe-t-il si un agent ne répond pas ? Si un message est mal formaté ? Si une tâche est transmise à un agent qui ne sait pas la gérer ? Les systèmes robustes prévoient les cas d'erreur, pas seulement les cas normaux.</p>

<h2>Architecture multi-agents typique</h2>
<p>Voici un exemple concret d'architecture multi-agents pour une agence IA (le type d'entreprise que tu pourrais créer avec cette formation). C'est une architecture éprouvée que tu peux adapter à tes propres besoins :</p>
<ul>
<li><strong>Agent Réceptionniste</strong> : C'est le point d'entrée. Il reçoit TOUS les messages entrants (WhatsApp, email, Discord) et les analyse pour déterminer leur nature : demande commerciale, problème technique, question administrative, spam. Puis il route le message vers le bon agent spécialisé. C'est ton standardiste virtuel qui ne se trompe jamais de poste.</li>
<li><strong>Agent Commercial</strong> : Spécialisé dans la vente et la relation prospect/client. Il gère les demandes de devis (génère un devis personnalisé), les relances (suit les prospects qui n'ont pas répondu), la qualification de leads (pose les bonnes questions pour évaluer le potentiel), et le suivi de satisfaction (demande un feedback après chaque projet).</li>
<li><strong>Agent Technique</strong> : Spécialisé dans le support technique. Il gère les demandes de support (diagnostique les problèmes), les rapports de bugs (crée des tickets structurés), la documentation (cherche et fournit les réponses dans la base de connaissances), et l'escalade vers un développeur humain quand le problème dépasse ses compétences.</li>
<li><strong>Agent Reporting</strong> : Spécialisé dans l'analyse et les rapports. Il génère les rapports hebdomadaires, les dashboards de KPIs, les bilans financiers, et les analyses de tendances. Il collecte les données de tous les autres agents pour avoir une vue d'ensemble.</li>
<li><strong>Agent Orchestrateur</strong> : Le chef d'orchestre qui coordonne tout le système. Il surveille la santé des autres agents, gère les files d'attente, s'assure qu'aucune tâche n'est perdue, et escalade vers toi (l'humain) quand une situation nécessite ton jugement. C'est l'agent le plus important — s'il tombe, tout le système est affecté.</li>
</ul>
<p><strong>Attention :</strong> Cette architecture est pour une agence mature. Ne commence pas avec 5 agents le premier jour. Commence avec 2 (par exemple : Réceptionniste + Commercial), valide que ça fonctionne bien, puis ajoute les autres progressivement. Chaque nouvel agent ajoute de la complexité au système — ajoute-la de manière contrôlée.</p>
<p><strong>Exemple concret de workflow :</strong> Un prospect envoie "Bonjour, je cherche quelqu'un pour créer un site web pour ma boulangerie" sur WhatsApp → Agent Réceptionniste identifie que c'est une demande commerciale → transmet à l'Agent Commercial → l'Agent Commercial pose des questions de qualification (budget, deadline, fonctionnalités souhaitées) → génère un devis personnalisé → l'envoie au prospect → programme une relance dans 3 jours si pas de réponse. Tout ça sans que tu aies levé le petit doigt.</p>

<h2>Configuration de la communication</h2>
<p>Dans la configuration de chaque agent, tu définis précisément ses règles de communication. C'est le "contrat de travail" de ton agent — il sait exactement avec qui il peut parler, de quoi, et dans quelles conditions :</p>
<ul>
<li><strong>Agents autorisés</strong> : Avec quels autres agents il peut communiquer. L'agent Réceptionniste peut parler à tous les agents. L'agent Technique ne parle qu'à l'agent Orchestrateur et à l'agent Reporting. Cette restriction évite les communications anarchiques.</li>
<li><strong>Types de messages</strong> : Quels types de messages il peut envoyer et recevoir. Par exemple, l'agent Commercial peut envoyer des "demandes de devis" et recevoir des "données client", mais pas envoyer des "commandes de déploiement" (c'est le rôle de l'agent Technique).</li>
<li><strong>Règles de routage</strong> : Les conditions qui déterminent quel message va à quel agent. "Si le message contient les mots 'bug', 'erreur' ou 'ne fonctionne pas' → router vers Agent Technique. Si le message contient 'prix', 'devis' ou 'combien' → router vers Agent Commercial." Ces règles peuvent être basées sur des mots-clés, des regex, ou de la classification IA.</li>
<li><strong>Conditions d'escalade</strong> : Quand l'agent doit escalader vers un humain au lieu de traiter lui-même. "Si le client est mécontent (sentiment négatif détecté) → escalade immédiate. Si le montant du devis dépasse 10 000€ → validation humaine requise. Si l'agent ne comprend pas la demande après 2 tentatives → escalade."</li>
</ul>
<p><strong>Conseil pro :</strong> Documente toutes tes règles de routage et d'escalade dans un document centralisé. Quand tu as 5 agents avec chacun 10 règles, ça fait 50 règles à gérer. Sans documentation, tu perds le fil en une semaine. Avec documentation, tu peux débuguer n'importe quel problème de routage en 5 minutes.</p>

<h2>Patterns de communication</h2>
<p>Il existe 4 patterns (modèles) de communication principaux pour les systèmes multi-agents. Chacun a ses avantages et ses cas d'usage optimaux :</p>
<ul>
<li><strong>Hub-and-spoke (étoile)</strong> : Un agent central (le hub) distribue les tâches aux agents spécialisés (les spokes). C'est le pattern le plus simple et le plus courant. Idéal pour débuter. L'avantage : un seul point de contrôle. L'inconvénient : si le hub tombe, tout s'arrête. C'est l'architecture que tu utilises avec un Agent Orchestrateur central.</li>
<li><strong>Pipeline (chaîne)</strong> : Les tâches passent d'un agent à l'autre dans un ordre défini, comme une chaîne de montage. Idéal pour les workflows linéaires : lead → qualification → devis → suivi. L'avantage : chaque agent se concentre sur une étape. L'inconvénient : si un maillon de la chaîne est lent, tout le pipeline est ralenti.</li>
<li><strong>Peer-to-peer (pair-à-pair)</strong> : Les agents communiquent directement entre eux sans passer par un hub central. Plus flexible et résilient (pas de point unique de défaillance), mais plus complexe à configurer et à débuguer. Recommandé pour les systèmes avancés avec des agents très autonomes.</li>
<li><strong>Event-driven (événementiel)</strong> : Les agents réagissent à des événements plutôt qu'à des commandes directes. Quand un événement se produit (nouvel email, nouvelle issue GitHub, nouveau message WhatsApp), les agents intéressés par cet événement sont automatiquement notifiés et agissent. C'est le pattern le plus scalable et le plus découplé — parfait pour les systèmes complexes.</li>
</ul>
<p><strong>Recommandation :</strong> Commence avec un Hub-and-spoke simple. Quand tu maîtrises ce pattern, évolue vers un Pipeline pour tes workflows linéaires. L'Event-driven et le Peer-to-peer sont pour plus tard — quand tu gères 5+ agents avec des interactions complexes.</p>
<p><strong>Analogie :</strong> Hub-and-spoke, c'est une pizzeria avec un seul serveur qui prend les commandes et les distribue en cuisine. Pipeline, c'est une chaîne de montage McDonald's. Peer-to-peer, c'est un groupe de freelances qui collaborent directement. Event-driven, c'est une salle de marché où chaque trader réagit aux événements en temps réel.</p>

<h2>Coût d'un système multi-agents</h2>
<p>Le coût augmente linéairement avec le nombre d'agents, mais la valeur créée augmente souvent de manière exponentielle. Voici le détail réaliste :</p>
<ul>
<li><strong>Par agent</strong> : 10-80€/mois (serveur + API IA), selon l'activité de chaque agent. Un agent peu sollicité (monitoring) coûte 10-15€/mois. Un agent très actif (support client) coûte 40-80€/mois.</li>
<li><strong>Système de 3 agents</strong> : 30-200€/mois — suffisant pour gérer un petit business ou 3-5 clients.</li>
<li><strong>Système de 5 agents</strong> : 50-400€/mois — pour une agence IA en pleine croissance avec 5-10 clients.</li>
<li><strong>Infrastructure partagée</strong> : Tous les agents peuvent tourner sur le même serveur (un Hetzner CX21 à 6€/mois suffit pour 3-5 agents légers), ce qui réduit considérablement les coûts d'infrastructure.</li>
</ul>
<p><strong>Le calcul business :</strong> Si chaque agent contribue à générer 500€+ de valeur client par mois (un seul client supplémentaire, un seul gain de temps significatif, une seule amélioration de la satisfaction client), l'équation est largement favorable. Un système à 5 agents qui coûte 200€/mois et gère 5 clients à 500€/mois = 2 500€ de revenus pour 200€ de coûts = marge de 92%.</p>
<p><strong>Conseil stratégique :</strong> Facture le coût de tes agents dans tes tarifs clients. Un client qui paie 500€/mois pour un service d'automatisation ne sait pas (et n'a pas besoin de savoir) que l'agent qui gère son compte ne te coûte que 30€/mois. C'est ton expertise de configuration, de maintenance et d'optimisation qui a de la valeur — pas le coût brut de l'infrastructure.</p>

<blockquote>Le passage du mono-agent au multi-agents, c'est le passage du freelance solo à l'agence structurée. C'est là que tu commences vraiment à scaler ton business et à servir plus de clients sans travailler plus d'heures. Un seul toi, une armée d'agents.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Dessine sur papier un schéma de 3 agents qui collaborent pour un cas d'usage de ton choix.</li>
<li>Définis les messages que chaque agent peut envoyer et recevoir.</li>
<li>Configure 2 agents OpenClaw qui communiquent entre eux (si tu as les ressources).</li>
<li>Teste un workflow simple : l'agent A détecte quelque chose, transmet à l'agent B qui agit.</li>
<li>Documente les résultats et les ajustements nécessaires.</li>
</ol>`,
  },
  {
    order: 31,
    module: 5,
    title: "Publier et vendre tes skills sur ClawHub",
    slug: "publier-vendre-skills-clawhub",
    duration: "45 min",
    description: "Packager, publier et monétiser tes skills sur le marketplace ClawHub.",
    content: `<h2>De créateur à vendeur</h2>
<p>Tu as créé des skills qui fonctionnent. Tu les utilises au quotidien et elles te font gagner du temps. Maintenant, il est temps de franchir le cap le plus excitant de cette formation : <strong>transformer tes créations en produits commerciaux</strong>. ClawHub est ton canal de distribution — c'est là que tes skills rencontrent les acheteurs.</p>
<p>Ce passage de "créateur" à "vendeur" est un changement de mentalité fondamental. Tu ne crées plus seulement pour toi — tu crées pour un marché. Ça implique de penser en termes de problème résolu (pas de fonctionnalité technique), d'expérience utilisateur (pas juste de code qui marche), et de valeur perçue (pas juste de coût de développement).</p>
<p><strong>Analogie :</strong> C'est la différence entre cuisiner pour toi-même et ouvrir un restaurant. Chez toi, tu fais des pâtes au beurre et c'est très bien. Au restaurant, tu fais des tagliatelles au beurre de truffe avec une présentation soignée, un nom évocateur, et un prix qui reflète l'expérience — pas le coût des ingrédients.</p>
<p><strong>Les chiffres qui motivent :</strong> Les créateurs de skills les plus actifs sur ClawHub génèrent entre 500€ et 5 000€ par mois en revenus passifs. Pas besoin de milliers de ventes — 50 clients à 20€/mois = 1 000€/mois de revenus récurrents. Et une fois la skill publiée, l'effort de maintenance est minime (quelques heures par mois).</p>
<p><strong>Attention réalisme :</strong> Les revenus ne viennent pas du jour au lendemain. Les premières semaines, tu auras peu de ventes. C'est normal. La clé, c'est la persévérance, la qualité, et le marketing. Les créateurs qui réussissent sont ceux qui publient régulièrement, écoutent les retours utilisateurs, et améliorent continuellement leurs skills.</p>

<h2>Préparer ta skill pour la publication</h2>
<p>Une skill qui marche sur ta machine n'est pas forcément prête pour la publication. Voici les 5 étapes de préparation qui séparent une skill amateur d'une skill professionnelle :</p>
<ol>
<li><strong>Documentation complète et soignée</strong> : Un README exemplaire avec des captures d'écran annotées, des exemples concrets d'utilisation, les prérequis clairement listés, un guide d'installation pas-à-pas (assume que l'utilisateur est débutant), une FAQ répondant aux questions les plus courantes, et un changelog. La documentation est la vitrine de ta skill — si elle est bâclée, personne n'achètera.</li>
<li><strong>Configuration ultra-simple</strong> : L'utilisateur doit pouvoir installer et configurer ta skill en moins de 5 minutes — idéalement 2 minutes. Chaque minute supplémentaire, tu perds 20% des utilisateurs potentiels. Automatise tout ce qui peut l'être. Fournis des valeurs par défaut intelligentes. Minimise le nombre de configurations obligatoires.</li>
<li><strong>Tests robustes et automatisés</strong> : Des tests automatisés qui prouvent que la skill fonctionne dans différentes conditions : données normales, données manquantes, cas limites, erreurs réseau. Les tests inspirent confiance aux acheteurs et te protègent des régressions lors des mises à jour.</li>
<li><strong>Versioning sémantique</strong> : Utilise le semantic versioning (MAJOR.MINOR.PATCH) — 1.0.0 pour la première version stable, 1.1.0 pour les nouvelles fonctionnalités, 1.1.1 pour les corrections de bugs, 2.0.0 pour les changements majeurs. Ça communique de la maturité et du professionnalisme.</li>
<li><strong>Licence appropriée</strong> : MIT ou Apache pour les skills open-source gratuites (ça encourage les contributions et les forks). Licence propriétaire pour les skills payantes (ça protège ta propriété intellectuelle). Si tu hésites, consulte le guide de choix de licence sur ClawHub.</li>
</ol>
<p><strong>Astuce qualité :</strong> Avant de publier, fais tester ta skill par 3-5 personnes qui ne sont PAS toi. Demande-leur d'installer et de configurer la skill en suivant uniquement ta documentation, sans aide supplémentaire. Si ils bloquent quelque part, améliore ta doc. Ce test utilisateur est le meilleur investissement que tu puisses faire.</p>

<h2>La page de vente de ta skill</h2>
<p>Sur ClawHub, ta skill a une page de présentation — c'est ta vitrine commerciale. La qualité de cette page détermine directement ton taux de conversion (visiteurs → acheteurs). Voici les éléments indispensables, dans l'ordre d'importance :</p>
<ul>
<li><strong>Titre accrocheur et descriptif</strong> : Le titre doit dire exactement ce que fait la skill en 5-8 mots. "Gmail Daily Briefing — Résumé intelligent de ta boîte mail" est bon. "Email Skill v2" est mauvais. Le titre est la première (et parfois la seule) chose que les gens lisent.</li>
<li><strong>Description du problème en 2 phrases</strong> : Pas la solution, le PROBLÈME. "Tu perds 2 heures par jour à trier tes emails ? Cette skill analyse ta boîte Gmail et t'envoie un briefing de 30 secondes chaque matin." Les gens achètent des solutions à leurs problèmes — montre que tu comprends leur douleur.</li>
<li><strong>Screenshots et GIFs animés</strong> : Montre la skill en action. Un GIF de 10 secondes montrant un briefing Telegram est 10 fois plus convaincant que 500 mots de description. "Show, don't tell" — c'est la règle d'or du marketing produit.</li>
<li><strong>Liste des features</strong> : Claire, précise, avec des checkmarks. Pas de jargon technique — parle le langage de l'utilisateur. "Catégorisation automatique des emails par urgence" plutôt que "NLP-based email classification using transformer architecture".</li>
<li><strong>Prérequis explicites</strong> : Quels comptes et API sont nécessaires (Gmail, Telegram, clé API Claude/GPT-4). Sois transparent — un utilisateur qui achète et découvre ensuite qu'il a besoin d'un compte payant supplémentaire sera frustré et laissera un mauvais avis.</li>
<li><strong>Changelog visible</strong> : Un changelog à jour montre que la skill est activement maintenue. Les utilisateurs fuient les skills abandonnées. Un changelog avec des entrées récentes dit "ce créateur est là, il s'en occupe".</li>
</ul>
<p><strong>Conseil copywriting :</strong> Écris ta page de vente du point de vue de l'utilisateur, pas du développeur. L'utilisateur ne se soucie pas de ton architecture technique élégante. Il se soucie de savoir : "Est-ce que ça va résoudre MON problème ?", "Est-ce que c'est facile à installer ?", "Est-ce que ça vaut le prix ?". Réponds à ces 3 questions clairement et tu vendras.</p>

<h2>Stratégies de pricing</h2>
<p>Le pricing est un art autant qu'une science. Voici les fourchettes de prix recommandées selon la complexité de ta skill, avec la logique derrière :</p>
<ul>
<li><strong>Skills simples (5-20€)</strong> : Un seul workflow, une seule intégration, configuration rapide. Exemples : alerteur de mentions Twitter, rappel de deadlines, formateur de texte. Le volume compense le prix unitaire bas. Idéal pour commencer et construire ta réputation.</li>
<li><strong>Skills complexes (20-100€)</strong> : Multi-workflow, multi-intégration, configurations avancées et personnalisables. Exemples : briefing Gmail complet, monitoring GitHub avancé, workflow Notion automatisé. C'est le sweet spot pour le rapport effort/revenu. La plupart de tes skills devraient être dans cette gamme.</li>
<li><strong>Skills premium (100€+ ou 10-50€/mois)</strong> : Solutions complètes pour un secteur spécifique — "Pack complet gestion d'agence immobilière", "Suite e-commerce Shopify", "Kit consultant indépendant". Inclut plusieurs skills intégrées, des templates, de la documentation sectorielle, et du support. C'est le haut de gamme — moins de ventes, mais des marges excellentes.</li>
</ul>
<p><strong>Règle de pricing :</strong> Ne fixe jamais ton prix en fonction du temps que tu as passé à développer. Fixe-le en fonction de la valeur que ta skill apporte à l'utilisateur. Si ta skill fait gagner 2 heures par jour à quelqu'un qui facture 50€/heure, elle vaut 100€/jour — soit 2 000€/mois. Un prix de 50€/mois est une affaire extraordinaire pour l'acheteur et un excellent revenu pour toi.</p>
<p><strong>Astuce psychologie du prix :</strong> Les prix qui finissent par 7 ou 9 convertissent mieux que les chiffres ronds. 19€ se vend mieux que 20€. 47€ se vend mieux que 50€. C'est idiot mais ça marche — des décennies de recherche en psychologie du consommateur le confirment.</p>

<h2>Maximiser les ventes</h2>
<p>Publier une skill sur ClawHub ne suffit pas — il faut la promouvoir activement et la maintenir pour maximiser les ventes sur le long terme. Voici les stratégies qui fonctionnent :</p>
<ul>
<li><strong>Modèle Freemium</strong> : Offre une version de base gratuite avec des limitations (3 emails analysés/jour au lieu de illimité, pas de personnalisation des critères) pour attirer les utilisateurs. Quand ils voient la valeur, ils upgradent vers la version premium payante. C'est la stratégie la plus efficace pour les nouvelles skills — elle réduit la barrière à l'entrée à zéro.</li>
<li><strong>Support inclus de qualité</strong> : Offre 30 jours de support par email ou Telegram avec chaque achat. Le support justifie un prix plus élevé et réduit les demandes de remboursement. Les utilisateurs qui ont une bonne expérience de support laissent de bonnes reviews — et les bonnes reviews vendent.</li>
<li><strong>Mises à jour régulières et visibles</strong> : Les skills activement maintenues se vendent 3-5 fois mieux que les skills abandonnées. Publie une mise à jour au moins une fois par mois, même si c'est juste une amélioration mineure. Mets à jour ton changelog. Montre que tu es là.</li>
<li><strong>Social proof (preuve sociale)</strong> : Encourage activement les reviews et les témoignages de tes utilisateurs satisfaits. Après 2 semaines d'utilisation, envoie un email sympathique : "Comment ça se passe avec la skill ? Si tu es satisfait, un avis sur ClawHub m'aiderait énormément." 10 reviews positives, et ta skill se vend toute seule.</li>
<li><strong>Content marketing</strong> : Écris des articles de blog, fais des vidéos YouTube, poste des threads Twitter/LinkedIn montrant ta skill en action. "Comment j'ai économisé 10 heures par semaine grâce à mon briefing Gmail automatisé" — ce type de contenu attire des acheteurs qualifiés qui cherchent exactement ce que tu vends.</li>
<li><strong>Bundles et cross-selling</strong> : Si tu as plusieurs skills complémentaires, vends-les en bundle à prix réduit. "Pack Productivité : Gmail Briefing + Notion Workflow + GitHub Monitor pour 79€ au lieu de 120€". Les bundles augmentent le panier moyen et incitent les acheteurs à découvrir tes autres créations.</li>
</ul>

<h2>Processus de publication</h2>
<p>Voici le processus concret pour publier ta skill sur le ClawHub, de la création de ton compte à ta première vente :</p>
<ol>
<li><strong>Crée un compte développeur</strong> sur ClawHub : Renseigne tes informations professionnelles, ta bio, et connecte ton compte de paiement (Stripe généralement) pour recevoir les revenus de tes ventes. La création de compte est gratuite.</li>
<li><strong>Prépare ton package</strong> : Assure-toi que tous les fichiers sont prêts — manifest.json complet et validé, code testé, documentation finalisée, screenshots préparés, changelog à jour.</li>
<li><strong>Uploade ta skill</strong> sur le dashboard développeur. ClawHub vérifie automatiquement la structure (manifest valide, fichiers requis présents, pas de code malveillant détecté).</li>
<li><strong>Remplis la fiche produit</strong> : Titre accrocheur, description percutante, screenshots annotés, prix, catégorie, tags de recherche. C'est ta page de vente — soigne chaque détail.</li>
<li><strong>Soumets pour review</strong> : L'équipe ClawHub vérifie manuellement que ta skill respecte les guidelines (pas de code malveillant, documentation minimum, qualité acceptable). La review prend généralement 1-5 jours ouvrés.</li>
<li><strong>Publication et lancement</strong> : Ta skill est live ! Partage le lien sur tous tes canaux — réseaux sociaux, newsletter, communautés Discord/Telegram, blog. Les premières ventes et reviews arrivent généralement dans la première semaine si tu fais un lancement actif.</li>
</ol>
<p><strong>Conseil de lancement :</strong> Ne publie pas ta skill en silence. Prépare un mini-plan de lancement : un post LinkedIn expliquant le problème que ta skill résout, un thread Twitter avec des screenshots, un message dans les communautés OpenClaw pertinentes. Les premières 48 heures sont cruciales — c'est là que l'algorithme du ClawHub décide si ta skill mérite de la visibilité.</p>
<p><strong>Astuce long terme :</strong> Après la publication, programme un check mensuel : lis les reviews, réponds aux questions, publie une mise à jour, et analyse les stats de vente. 2 heures par mois suffisent pour maintenir une skill et la garder pertinente. C'est le vrai revenu passif — un petit effort récurrent pour des revenus continus.</p>

<blockquote>La première vente est la plus dure — mais aussi la plus gratifiante. Après, c'est du momentum. Une bonne skill avec de bonnes reviews se vend toute seule, mois après mois, pendant des années. Tu construis un actif digital qui travaille pour toi pendant que tu dors. C'est ça, le vrai pouvoir de l'économie des créateurs IA.</blockquote>`,
    exercise: `<h3>Exercice pratique</h3>
<ol>
<li>Prends la meilleure skill que tu as créée dans ce module.</li>
<li>Écris une documentation complète (README) avec des exemples et des screenshots.</li>
<li>Crée une fiche produit convaincante : titre, description, features, prix.</li>
<li>Si tu es prêt, publie-la sur ClawHub.</li>
<li>Sinon, publie-la sur GitHub en open-source pour commencer à construire ta réputation.</li>
<li>Partage le lien sur Twitter/LinkedIn avec une démo de ta skill.</li>
</ol>`,
  },
];
