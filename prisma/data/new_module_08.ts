// ═══════════════════════════════════════════════════
// MODULE 8 — Agents IA autonomes
// 5 leçons — Format JSON blocs
// ═══════════════════════════════════════════════════

function blocks(b: object[]): string {
  return JSON.stringify(b);
}

export const MODULE_8_LESSONS = [
  // ─── LEÇON 1 ───
  {
    order: 1,
    module: 8,
    title: "Chatbot vs Agent : quelle différence ?",
    slug: "chatbot-vs-agent-ia-difference",
    duration: "20 min",
    description: "Un chatbot répond. Un agent agit. Comprendre l'autonomie, les outils, les boucles de raisonnement et pourquoi les agents changent tout.",
    content: blocks([
      { id: "1-1", type: "heading", level: 2, text: "Ce que tu crois savoir sur les chatbots" },
      { id: "1-2", type: "text", html: "<p>Tu utilises peut-être déjà ChatGPT ou Claude pour répondre à des questions, rédiger des emails, ou générer du code. C'est utile. Mais ce que tu fais là, c'est parler à un <strong>chatbot</strong> : tu poses une question, il répond, fin de l'histoire.</p><p>Un <strong>agent IA</strong>, c'est une autre catégorie. Il ne se contente pas de répondre — il <em>agit</em>. Il peut ouvrir un navigateur, lire une page web, envoyer un email, mettre à jour une base de données, appeler une API, et enchaîner ces actions de façon autonome pour atteindre un objectif.</p>" },
      { id: "1-3", type: "callout", variant: "info", html: "<strong>Définition simple :</strong> Un chatbot répond à tes questions. Un agent IA accomplit des tâches à ta place, sans que tu aies à lui dire chaque étape." },
      { id: "1-4", type: "separator", style: "dots" },

      { id: "1-5", type: "heading", level: 2, text: "La différence fondamentale : outils et autonomie" },
      { id: "1-6", type: "comparison", headers: ["Critère", "Chatbot classique", "Agent IA"], rows: [
        { cells: ["Ce qu'il fait", "Génère du texte", "Exécute des actions"] },
        { cells: ["Mémoire", "Contexte de la conversation", "Mémoire persistante (base de données)"] },
        { cells: ["Outils", "Aucun (texte seul)", "Web, API, fichiers, email, CRM..."] },
        { cells: ["Autonomie", "Zéro — attend tes instructions", "Peut prendre des décisions en boucle"] },
        { cells: ["Exemple", "\"Rédige un email pour moi\"", "\"Trouve 10 prospects, envoie-leur un email, note les réponses\""] },
        { cells: ["Valeur business", "Gain de temps ponctuel", "Automatisation complète de workflows"] },
      ]},
      { id: "1-7", type: "separator", style: "line" },

      { id: "1-8", type: "heading", level: 2, text: "Comment un agent raisonne : la boucle ReAct" },
      { id: "1-9", type: "text", html: "<p>La plupart des agents modernes fonctionnent selon une boucle <strong>ReAct</strong> (Reasoning + Acting). À chaque étape, l'agent :</p><ol><li><strong>Observe</strong> — il regarde l'état actuel du monde (résultat d'une action précédente, données disponibles)</li><li><strong>Réfléchit</strong> — il décide quelle action prendre ensuite pour avancer vers l'objectif</li><li><strong>Agit</strong> — il exécute l'action (appeler un outil, écrire un fichier, faire une requête API)</li><li><strong>Boucle</strong> — il recommence jusqu'à atteindre l'objectif ou une condition d'arrêt</li></ol>" },
      { id: "1-10", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Objectif", description: "L'utilisateur donne un but à l'agent" },
        { id: "n2", label: "Observation", description: "L'agent observe le contexte actuel" },
        { id: "n3", label: "Raisonnement", description: "L'agent décide de la prochaine action" },
        { id: "n4", label: "Action", description: "L'agent exécute un outil (web, API, fichier...)" },
        { id: "n5", label: "Résultat", description: "L'agent analyse le retour de l'action" },
        { id: "n6", label: "Objectif atteint ?", description: "Oui → livraison. Non → nouvelle boucle." },
      ]},
      { id: "1-11", type: "callout", variant: "tip", html: "<strong>Exemple concret :</strong> Tu demandes à un agent de 'trouver le prix de tes 3 concurrents'. Il va : (1) chercher leurs sites sur Google, (2) naviguer sur chaque site, (3) extraire les prix, (4) les formater dans un tableau, (5) te l'envoyer. Tout ça sans que tu aies fait autre chose que donner l'objectif." },
      { id: "1-12", type: "separator", style: "dots" },

      { id: "1-13", type: "heading", level: 2, text: "Exemples concrets d'agents dans une agence IA" },
      { id: "1-14", type: "steps", steps: [
        { title: "Agent de veille concurrentielle", description: "Scrape les sites concurrents chaque lundi, compare les prix et offres, t'envoie un rapport récapitulatif." },
        { title: "Agent de prospection", description: "Cherche des leads sur LinkedIn, enrichit les profils avec des données publiques, génère des messages personnalisés prêts à envoyer." },
        { title: "Agent de support client", description: "Lit les tickets entrants, consulte la base de connaissances, répond automatiquement aux questions simples, escalade les complexes." },
        { title: "Agent de reporting", description: "Récupère les données de ton CRM et Google Analytics chaque vendredi, génère un rapport PDF, l'envoie à ton client." },
        { title: "Agent de création de contenu", description: "Cherche les trending topics dans une niche, rédige 5 posts LinkedIn, les schedule via l'API Buffer." },
      ]},
      { id: "1-15", type: "callout", variant: "warning", html: "<strong>Point important :</strong> Un agent n'est pas magique. Il a besoin d'outils bien définis, d'un objectif clair, et d'une logique de gestion d'erreurs. Un agent mal conçu peut boucler indéfiniment ou prendre de mauvaises décisions. La conception compte autant que le code." },
      { id: "1-16", type: "separator", style: "line" },

      { id: "1-17", type: "quiz-inline", question: "Quelle est la principale différence entre un chatbot et un agent IA ?", options: [
        { id: "a", text: "Un agent IA est plus rapide à répondre" },
        { id: "b", text: "Un agent IA peut exécuter des actions et utiliser des outils de façon autonome" },
        { id: "c", text: "Un agent IA ne nécessite pas de modèle de langage" },
        { id: "d", text: "Un chatbot peut faire tout ce que fait un agent" },
      ], correctId: "b", explanation: "La différence clé est l'autonomie et l'accès aux outils. Un agent peut agir dans le monde réel (web, API, fichiers) en boucle pour accomplir un objectif, là où un chatbot se limite à générer du texte." },

      { id: "1-18", type: "checklist", title: "Ce que tu dois avoir compris", items: [
        { id: "c1", text: "Un chatbot génère du texte, un agent exécute des actions" },
        { id: "c2", text: "Un agent utilise des outils : navigateur, API, fichiers, email..." },
        { id: "c3", text: "La boucle ReAct (Observer → Raisonner → Agir) est le moteur d'un agent" },
        { id: "c4", text: "Les agents créent de la valeur en automatisant des workflows complets, pas juste des réponses" },
        { id: "c5", text: "La conception d'un agent (objectif clair, outils définis) est aussi importante que le code" },
      ]},
    ]),
    exercise: "<h3>Exercice : Identifie tes cas d'usage agents</h3><p>Pense à un client réel ou imaginaire (restaurant, e-commerce, cabinet conseil, etc.). Liste <strong>3 tâches répétitives</strong> que ce client fait chaque semaine qui pourraient être confiées à un agent IA. Pour chaque tâche, note : quel est l'objectif final ? Quels outils l'agent aurait-il besoin d'utiliser ? (web, email, fichier Excel, API...). On s'en servira dans les leçons suivantes.</p>",
    quiz: [
      { type: "mcq", question: "Quelle est la principale différence entre un chatbot et un agent IA ?", options: JSON.stringify(["Un agent IA est plus rapide qu'un chatbot", "Un agent IA peut exécuter des actions et utiliser des outils de façon autonome", "Un chatbot utilise un modèle de langage mais pas un agent", "Un agent IA fonctionne sans connexion internet"]), correctAnswer: "Un agent IA peut exécuter des actions et utiliser des outils de façon autonome", explanation: "Un chatbot se limite à générer du texte en réponse à des questions. Un agent IA peut agir dans le monde réel : naviguer sur le web, envoyer des emails, appeler des APIs, et enchaîner ces actions de façon autonome pour atteindre un objectif." },
      { type: "true_false", question: "La boucle ReAct (Reasoning + Acting) est le mécanisme de raisonnement utilisé par la plupart des agents IA modernes.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "La boucle ReAct est bien le mécanisme standard des agents modernes. À chaque étape, l'agent observe, réfléchit, agit, puis recommence jusqu'à atteindre l'objectif ou une condition d'arrêt." },
      { type: "mcq", question: "Parmi ces exemples, lequel illustre le mieux un agent IA dans une agence ?", options: JSON.stringify(["Un chatbot qui répond aux questions fréquentes", "Un agent qui scrape les concurrents chaque lundi, compare les prix et envoie un rapport par email", "Un formulaire de contact automatisé", "Un modèle GPT qui génère du texte à la demande"]), correctAnswer: "Un agent qui scrape les concurrents chaque lundi, compare les prix et envoie un rapport par email", explanation: "Un agent IA se distingue par sa capacité à enchaîner plusieurs actions de façon autonome (scraper, comparer, envoyer). Les autres exemples sont des outils passifs qui ne font qu'une seule tâche sans autonomie." },
      { type: "true_false", question: "Un agent IA bien conçu n'a pas besoin de gestion d'erreurs car le modèle de langage s'adapte automatiquement.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Un agent mal conçu peut boucler indéfiniment ou prendre de mauvaises décisions. La conception compte autant que le code : il faut un objectif clair, des outils bien définis, et une logique de gestion d'erreurs robuste." },
      { type: "mcq", question: "Quels sont les 4 étapes de la boucle ReAct dans le bon ordre ?", options: JSON.stringify(["Agir → Observer → Réfléchir → Boucler", "Observer → Réfléchir → Agir → Boucler", "Réfléchir → Agir → Observer → Boucler", "Boucler → Observer → Agir → Réfléchir"]), correctAnswer: "Observer → Réfléchir → Agir → Boucler", explanation: "L'agent observe d'abord l'état actuel (résultat d'une action précédente), puis réfléchit à la prochaine action, l'exécute, et recommence la boucle jusqu'à atteindre l'objectif." },
    ],
  },

  // ─── LEÇON 2 ───
  {
    order: 2,
    module: 8,
    title: "Les frameworks d'agents : LangChain, CrewAI, Claude Tools",
    slug: "frameworks-agents-langchain-crewai-claude-tools",
    duration: "25 min",
    description: "Comparaison des frameworks d'agents, quand utiliser quoi, et pourquoi le tool_use natif de Claude est souvent la meilleure option pour une agence.",
    content: blocks([
      { id: "2-1", type: "heading", level: 2, text: "Le problème avec les frameworks lourds" },
      { id: "2-2", type: "text", html: "<p>Quand on cherche 'agent IA Python', les premiers résultats parlent de LangChain, AutoGPT, ou CrewAI. Ces frameworks sont puissants — mais ils ont un coût réel : <strong>complexité d'installation, abstractions qui fuient, debugging cauchemardesque, et dépendances qui cassent</strong>.</p><p>Pour une agence qui livre des projets à des clients, la priorité c'est la <strong>fiabilité et la maintenabilité</strong>, pas les fonctionnalités les plus avancées. Un agent qui fonctionne simplement et qu'un junior peut maintenir vaut plus qu'un agent ultra-sophistiqué qui plante en prod.</p>" },
      { id: "2-3", type: "callout", variant: "warning", html: "<strong>Erreur classique :</strong> Utiliser LangChain pour un agent simple parce que 'tout le monde l'utilise'. Résultat : 300 lignes de config pour quelque chose qui se ferait en 30 lignes avec l'API directe de Claude." },
      { id: "2-4", type: "separator", style: "dots" },

      { id: "2-5", type: "heading", level: 2, text: "Comparaison des approches" },
      { id: "2-6", type: "comparison", headers: ["Framework", "Points forts", "Points faibles", "Quand l'utiliser"], rows: [
        { cells: ["LangChain", "Écosystème énorme, beaucoup d'intégrations, RAG facile", "Très verbose, abstractions complexes, debugging difficile, change souvent", "Projet RAG complexe avec beaucoup de sources de données"] },
        { cells: ["CrewAI", "Multi-agents natif, rôles clairs, bon pour orchestration", "Opinionné, moins flexible, jeune écosystème", "Équipe d'agents avec des rôles distincts (researcher, writer, reviewer...)"] },
        { cells: ["AutoGen (Microsoft)", "Conversations multi-agents puissantes, bonne mémoire", "Complexe à configurer, lourd pour des cas simples", "Agents qui collaborent et se corrigent mutuellement"] },
        { cells: ["Claude tool_use (natif)", "Simple, fiable, direct, facile à débugger, pas de dépendances", "Pas d'écosystème d'outils prêts, tu codes tes tools", "80% des cas d'usage d'agence — agent mono ou quelques outils"] },
        { cells: ["OpenAI Function Calling", "Bien documenté, similaire à Claude", "Lié à OpenAI, plus cher pour les volumes", "Si tu travailles déjà avec GPT-4"] },
      ]},
      { id: "2-7", type: "separator", style: "line" },

      { id: "2-8", type: "heading", level: 2, text: "Le tool_use de Claude : comment ça marche" },
      { id: "2-9", type: "text", html: "<p>L'API Anthropic propose un mécanisme natif appelé <code>tool_use</code>. Tu définis des outils (functions) avec leur schéma JSON, et Claude décide lui-même quand les appeler et avec quels paramètres. C'est propre, prévisible, et ne nécessite aucun framework.</p>" },
      { id: "2-10", type: "code", language: "python", filename: "claude_tool_use_basic.py", code: `import anthropic
import json

client = anthropic.Anthropic()

# 1. Définir les outils disponibles pour l'agent
tools = [
    {
        "name": "search_web",
        "description": "Cherche des informations sur le web et retourne les résultats",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "La requête de recherche"
                },
                "max_results": {
                    "type": "integer",
                    "description": "Nombre max de résultats (défaut: 5)",
                    "default": 5
                }
            },
            "required": ["query"]
        }
    },
    {
        "name": "send_email",
        "description": "Envoie un email à un destinataire",
        "input_schema": {
            "type": "object",
            "properties": {
                "to": {"type": "string", "description": "Adresse email du destinataire"},
                "subject": {"type": "string", "description": "Objet de l'email"},
                "body": {"type": "string", "description": "Corps de l'email en HTML"}
            },
            "required": ["to", "subject", "body"]
        }
    }
]

# 2. Lancer l'agent avec un objectif
messages = [
    {"role": "user", "content": "Cherche les dernières news sur l'IA en France et envoie un résumé à john@example.com"}
]

# 3. Boucle agent
while True:
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=4096,
        tools=tools,
        messages=messages
    )

    # Si Claude n'a plus d'outil à appeler → c'est terminé
    if response.stop_reason == "end_turn":
        print("Agent terminé :", response.content[0].text)
        break

    # Claude veut utiliser un outil
    if response.stop_reason == "tool_use":
        tool_calls = [b for b in response.content if b.type == "tool_use"]

        # Ajouter la réponse de Claude à l'historique
        messages.append({"role": "assistant", "content": response.content})

        # Exécuter chaque outil demandé
        tool_results = []
        for tool_call in tool_calls:
            print(f"→ Appel outil : {tool_call.name} avec {tool_call.input}")

            if tool_call.name == "search_web":
                # Ici tu appellerais ta vraie fonction de recherche
                result = {"results": ["Article 1: Les LLMs français...", "Article 2: Mistral AI lève..."]}
            elif tool_call.name == "send_email":
                # Ici tu appellerais ton service email (SendGrid, etc.)
                result = {"status": "sent", "message_id": "msg_123"}
            else:
                result = {"error": "Outil inconnu"}

            tool_results.append({
                "type": "tool_result",
                "tool_use_id": tool_call.id,
                "content": json.dumps(result)
            })

        # Ajouter les résultats des outils et continuer la boucle
        messages.append({"role": "user", "content": tool_results})
` },
      { id: "2-11", type: "callout", variant: "success", html: "<strong>Ce code est tout ce dont tu as besoin</strong> pour 80% des agents que tu vas livrer à des clients. Pas de LangChain, pas de CrewAI. Juste l'API Anthropic + une boucle while + tes fonctions Python." },
      { id: "2-12", type: "separator", style: "dots" },

      { id: "2-13", type: "heading", level: 2, text: "Quand passer à un framework ?" },
      { id: "2-14", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Ton use case", description: "Quel type d'agent tu construis ?" },
        { id: "n2", label: "Agent simple (1-3 outils)", description: "→ Claude tool_use natif. Rapide, maintenable, zéro dépendances." },
        { id: "n3", label: "RAG + sources multiples", description: "→ LangChain avec LlamaIndex. L'écosystème de retrievers vaut la complexité." },
        { id: "n4", label: "Plusieurs agents qui collaborent", description: "→ CrewAI ou AutoGen. Le multi-agent natif justifie le framework." },
        { id: "n5", label: "Prod haute fiabilité", description: "→ Construis sur l'API directe + tests unitaires sur chaque tool." },
      ]},
      { id: "2-15", type: "text", html: "<p>En pratique, pour une agence qui commence, le conseil est de <strong>maîtriser l'API native de Claude avant tout framework</strong>. Quand tu comprends la boucle ReAct à la main, tu comprends aussi ce que LangChain fait sous le capot — et tu peux débugger n'importe quoi.</p>" },
      { id: "2-16", type: "separator", style: "line" },

      { id: "2-17", type: "quiz-inline", question: "Pour livrer un agent simple (recherche web + envoi email) à un client, quelle approche privilégier ?", options: [
        { id: "a", text: "LangChain car c'est le standard de l'industrie" },
        { id: "b", text: "CrewAI car il gère les multi-agents" },
        { id: "c", text: "Le tool_use natif de Claude — simple, direct, maintenable" },
        { id: "d", text: "AutoGPT car il est entièrement autonome" },
      ], correctId: "c", explanation: "Pour un agent avec peu d'outils, l'API native de Claude est la meilleure option. Moins de dépendances, code plus clair, debugging plus simple. Les frameworks lourds ont leur place mais uniquement quand leur complexité est justifiée par le cas d'usage." },

      { id: "2-18", type: "checklist", title: "Ce que tu maîtrises maintenant", items: [
        { id: "c1", text: "Je comprends la différence entre LangChain, CrewAI et l'API native Claude" },
        { id: "c2", text: "Je sais implémenter la boucle agent de base avec tool_use" },
        { id: "c3", text: "Je sais définir un outil avec son schéma JSON (input_schema)" },
        { id: "c4", text: "Je sais quand utiliser un framework vs l'API directe" },
        { id: "c5", text: "J'ai le code de base réutilisable pour mes prochains agents" },
      ]},
    ]),
    exercise: "<h3>Exercice : Ton premier squelette d'agent</h3><p>Prends le code de la leçon et adapte-le pour créer un agent avec <strong>2 outils de ton choix</strong> (par exemple : <code>get_weather</code> et <code>save_to_file</code>). Tu n'as pas besoin d'implémenter la vraie logique — renvoie juste des données mockées. L'objectif est de maîtriser la structure : définition de l'outil, boucle while, gestion du tool_use et du end_turn. Lance le script et vérifie que la boucle se termine correctement.</p>",
    quiz: [
      { type: "mcq", question: "Pour un agent simple avec 2-3 outils livré à un client, quelle approche est recommandée ?", options: JSON.stringify(["LangChain pour son large écosystème", "CrewAI pour l'orchestration multi-agents", "Le tool_use natif de Claude — simple, direct et maintenable", "AutoGen de Microsoft pour la mémoire"]), correctAnswer: "Le tool_use natif de Claude — simple, direct et maintenable", explanation: "Pour 80% des cas d'usage d'agence avec peu d'outils, l'API native de Claude est la meilleure option. Moins de dépendances, code plus clair, debugging plus simple. Les frameworks lourds ne sont justifiés que pour des cas complexes." },
      { type: "true_false", question: "LangChain est toujours le meilleur choix pour construire un agent IA car c'est le framework le plus populaire.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "LangChain est puissant mais très verbose, avec des abstractions complexes et un debugging difficile. Pour une agence qui livre des projets, la priorité est la fiabilité et la maintenabilité, pas les fonctionnalités les plus avancées." },
      { type: "mcq", question: "Dans le code de la boucle agent, que se passe-t-il quand stop_reason == 'tool_use' ?", options: JSON.stringify(["L'agent a terminé son travail", "Claude veut utiliser un outil et attend le résultat", "La réponse a été coupée", "L'agent a rencontré une erreur"]), correctAnswer: "Claude veut utiliser un outil et attend le résultat", explanation: "Quand stop_reason == 'tool_use', Claude a décidé d'appeler un ou plusieurs outils. On doit exécuter ces outils, renvoyer les résultats, et continuer la boucle pour que Claude puisse traiter les résultats." },
      { type: "true_false", question: "Le champ input_schema dans la définition d'un outil permet à Claude de savoir quels paramètres envoyer lors de l'appel.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "L'input_schema est un schéma JSON qui décrit les paramètres attendus par l'outil (type, description, required). Claude utilise ce schéma pour générer les bons paramètres lors de l'appel de l'outil." },
      { type: "mcq", question: "Quand est-il justifié de passer à CrewAI plutôt que l'API native de Claude ?", options: JSON.stringify(["Quand on veut un agent rapide à développer", "Quand on a besoin de plusieurs agents avec des rôles distincts qui collaborent", "Quand on veut moins de dépendances", "Quand on veut du code plus simple à débugger"]), correctAnswer: "Quand on a besoin de plusieurs agents avec des rôles distincts qui collaborent", explanation: "CrewAI est conçu pour l'orchestration multi-agents avec des rôles clairs (researcher, writer, reviewer...). C'est le cas d'usage qui justifie sa complexité. Pour un agent mono ou avec quelques outils, l'API native suffit." },
    ],
  },

  // ─── LEÇON 3 ───
  {
    order: 3,
    module: 8,
    title: "Créer un agent de veille concurrentielle",
    slug: "agent-veille-concurrentielle-scraping",
    duration: "30 min",
    description: "Construire un agent qui scrape automatiquement les concurrents, analyse les données et produit un rapport structuré — avec du vrai code de function calling.",
    content: blocks([
      { id: "3-1", type: "heading", level: 2, text: "Le use case : automatiser la veille client" },
      { id: "3-2", type: "text", html: "<p>La veille concurrentielle est une tâche que chaque entreprise devrait faire mais que personne ne fait parce que c'est <strong>chronophage et répétitif</strong>. C'est exactement le use case parfait pour un agent IA.</p><p>Voici ce qu'on va construire : un agent qui, chaque semaine, analyse les sites de 3 à 5 concurrents, extrait leurs prix et offres du moment, compare les changements, et envoie un rapport HTML par email. <strong>Valeur client : 5h de travail économisées par semaine.</strong></p>" },
      { id: "3-3", type: "callout", variant: "tip", html: "<strong>Prix de vente réel :</strong> Ce type d'agent se facture entre 1 500€ et 4 000€ en one-shot + 200-500€/mois de maintenance. Un client sérieux paie volontiers pour ne plus jamais faire de veille manuellement." },
      { id: "3-4", type: "separator", style: "dots" },

      { id: "3-5", type: "heading", level: 2, text: "Architecture de l'agent" },
      { id: "3-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Déclencheur", description: "Cron job hebdomadaire (lundi 8h) ou déclenchement manuel" },
        { id: "n2", label: "scrape_page(url)", description: "Extrait le HTML d'une URL via requests + BeautifulSoup" },
        { id: "n3", label: "extract_pricing(html)", description: "Claude analyse le HTML et extrait les infos de prix en JSON structuré" },
        { id: "n4", label: "compare_with_previous(data)", description: "Compare avec les données de la semaine dernière (fichier JSON local)" },
        { id: "n5", label: "generate_report(changes)", description: "Claude rédige le rapport HTML avec les changements détectés" },
        { id: "n6", label: "send_email(report)", description: "Envoi du rapport via SendGrid ou SMTP" },
      ]},
      { id: "3-7", type: "separator", style: "line" },

      { id: "3-8", type: "heading", level: 2, text: "Le code complet de l'agent" },
      { id: "3-9", type: "code", language: "python", filename: "competitive_intelligence_agent.py", code: `import anthropic
import requests
import json
import os
from datetime import datetime
from bs4 import BeautifulSoup

client = anthropic.Anthropic()

# ── Implémentation des outils ──────────────────────────────

def scrape_page(url: str) -> dict:
    """Scrape une page web et retourne son contenu texte nettoyé"""
    try:
        headers = {"User-Agent": "Mozilla/5.0 (compatible; research-bot/1.0)"}
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")

        # Supprimer scripts/styles pour garder le texte utile
        for tag in soup(["script", "style", "nav", "footer"]):
            tag.decompose()

        text = soup.get_text(separator="\\n", strip=True)
        # Limiter à 8000 chars pour ne pas exploser le contexte
        return {"url": url, "content": text[:8000], "status": "ok"}
    except Exception as e:
        return {"url": url, "content": "", "status": f"error: {str(e)}"}


def load_previous_data(competitor_name: str) -> dict:
    """Charge les données de la semaine précédente"""
    filepath = f"./data/{competitor_name}_last.json"
    if os.path.exists(filepath):
        with open(filepath) as f:
            return json.load(f)
    return {}


def save_current_data(competitor_name: str, data: dict):
    """Sauvegarde les données actuelles pour comparaison future"""
    os.makedirs("./data", exist_ok=True)
    with open(f"./data/{competitor_name}_last.json", "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def send_email_report(to: str, subject: str, html_body: str) -> dict:
    """Envoie le rapport par email (ici avec print pour la démo)"""
    # En prod : utiliser SendGrid, Mailgun ou smtplib
    print(f"\\n📧 Email envoyé à {to}")
    print(f"Objet : {subject}")
    print(f"Corps HTML : {html_body[:200]}...")
    return {"status": "sent", "timestamp": datetime.now().isoformat()}


# ── Définition des outils pour Claude ─────────────────────

TOOLS = [
    {
        "name": "scrape_page",
        "description": "Scrape le contenu textuel d'une URL web. Retourne le texte nettoyé de la page.",
        "input_schema": {
            "type": "object",
            "properties": {
                "url": {"type": "string", "description": "URL complète à scraper"}
            },
            "required": ["url"]
        }
    },
    {
        "name": "load_previous_data",
        "description": "Charge les données de veille de la semaine précédente pour un concurrent donné",
        "input_schema": {
            "type": "object",
            "properties": {
                "competitor_name": {"type": "string", "description": "Identifiant du concurrent (ex: 'hubspot', 'salesforce')"}
            },
            "required": ["competitor_name"]
        }
    },
    {
        "name": "save_current_data",
        "description": "Sauvegarde les données extraites pour le prochain cycle de comparaison",
        "input_schema": {
            "type": "object",
            "properties": {
                "competitor_name": {"type": "string"},
                "data": {"type": "object", "description": "Données JSON à sauvegarder"}
            },
            "required": ["competitor_name", "data"]
        }
    },
    {
        "name": "send_email_report",
        "description": "Envoie le rapport de veille concurrentielle par email",
        "input_schema": {
            "type": "object",
            "properties": {
                "to": {"type": "string", "description": "Email du destinataire"},
                "subject": {"type": "string", "description": "Objet de l'email"},
                "html_body": {"type": "string", "description": "Corps HTML du rapport"}
            },
            "required": ["to", "subject", "html_body"]
        }
    }
]

# ── Routeur d'outils ───────────────────────────────────────

def execute_tool(tool_name: str, tool_input: dict) -> str:
    if tool_name == "scrape_page":
        result = scrape_page(tool_input["url"])
    elif tool_name == "load_previous_data":
        result = load_previous_data(tool_input["competitor_name"])
    elif tool_name == "save_current_data":
        save_current_data(tool_input["competitor_name"], tool_input["data"])
        result = {"status": "saved"}
    elif tool_name == "send_email_report":
        result = send_email_report(
            tool_input["to"], tool_input["subject"], tool_input["html_body"]
        )
    else:
        result = {"error": f"Outil inconnu: {tool_name}"}
    return json.dumps(result, ensure_ascii=False)


# ── Boucle principale de l'agent ──────────────────────────

def run_competitive_intelligence_agent(competitors: list, report_email: str):
    competitor_list = ", ".join([f"{c['name']} ({c['url']})" for c in competitors])

    system_prompt = """Tu es un agent de veille concurrentielle expert. Tu dois :
1. Scraper les pages de chaque concurrent
2. Extraire les informations clés : prix, offres, fonctionnalités principales
3. Comparer avec les données de la semaine précédente
4. Sauvegarder les nouvelles données
5. Rédiger un rapport HTML clair et envoyer par email

Sois méthodique. Pour chaque concurrent, scrape → extrait → compare → sauvegarde. Puis génère le rapport final."""

    messages = [
        {
            "role": "user",
            "content": f"""Effectue la veille concurrentielle hebdomadaire pour ces concurrents :
{competitor_list}

Envoie le rapport final à {report_email}.
Le rapport doit inclure : prix actuels, changements détectés, recommandations stratégiques."""
        }
    ]

    print(f"🤖 Agent de veille démarré — {len(competitors)} concurrents à analyser\\n")

    while True:
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=8096,
            system=system_prompt,
            tools=TOOLS,
            messages=messages
        )

        if response.stop_reason == "end_turn":
            final_text = next((b.text for b in response.content if hasattr(b, "text")), "")
            print("\\n✅ Agent terminé")
            print(final_text)
            break

        if response.stop_reason == "tool_use":
            messages.append({"role": "assistant", "content": response.content})
            tool_results = []

            for block in response.content:
                if block.type == "tool_use":
                    print(f"  → {block.name}({list(block.input.keys())})")
                    result = execute_tool(block.name, block.input)
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    })

            messages.append({"role": "user", "content": tool_results})


# ── Point d'entrée ─────────────────────────────────────────

if __name__ == "__main__":
    COMPETITORS = [
        {"name": "hubspot", "url": "https://www.hubspot.com/pricing"},
        {"name": "pipedrive", "url": "https://www.pipedrive.com/fr/pricing"},
        {"name": "salesforce", "url": "https://www.salesforce.com/fr/crm/pricing"},
    ]
    run_competitive_intelligence_agent(COMPETITORS, "client@monentreprise.com")
` },
      { id: "3-10", type: "callout", variant: "info", html: "<strong>Dépendances à installer :</strong> <code>pip install anthropic requests beautifulsoup4</code>. Pour la prod, ajoute <code>sendgrid</code> pour les emails et <code>schedule</code> ou un cron système pour l'automatisation hebdomadaire." },
      { id: "3-11", type: "separator", style: "dots" },

      { id: "3-12", type: "heading", level: 2, text: "Gérer les sites anti-scraping" },
      { id: "3-13", type: "text", html: "<p>Certains sites bloquent les bots. Voici les techniques progressives :</p>" },
      { id: "3-14", type: "steps", steps: [
        { title: "Niveau 1 : Headers réalistes", description: "Ajoute un User-Agent de navigateur réel. Résout 60% des blocages simples." },
        { title: "Niveau 2 : Délais aléatoires", description: "Attends entre 1 et 3 secondes entre chaque requête avec time.sleep(random.uniform(1, 3)). Évite les rate limits." },
        { title: "Niveau 3 : Playwright/Selenium", description: "Pour les sites avec JavaScript dynamique, utilise un vrai navigateur headless. Plus lent mais contourne les SPA." },
        { title: "Niveau 4 : API tierces", description: "Services comme ScraperAPI, Bright Data ou Apify gèrent la rotation de proxies et les CAPTCHAs. Comptent ~50-100€/mois." },
        { title: "Niveau 5 : APIs officielles", description: "Si disponible, toujours préférer l'API officielle (ex: HubSpot API, Stripe API). Plus fiable et légal." },
      ]},
      { id: "3-15", type: "callout", variant: "warning", html: "<strong>Légalité :</strong> Le scraping est légal pour les données publiques dans la majorité des cas, mais vérifie les CGU du site. Ne scrape jamais de données personnelles sans consentement (RGPD). Pour les clients B2B, privilégie les APIs officielles quand elles existent." },
      { id: "3-16", type: "separator", style: "line" },

      { id: "3-17", type: "quiz-inline", question: "Dans la boucle agent, que se passe-t-il quand stop_reason == 'end_turn' ?", options: [
        { id: "a", text: "L'agent a planté et tu dois le relancer" },
        { id: "b", text: "Claude veut utiliser un autre outil" },
        { id: "c", text: "Claude a terminé son travail et ne veut plus appeler d'outil" },
        { id: "d", text: "La réponse a été coupée à cause du max_tokens" },
      ], correctId: "c", explanation: "Quand stop_reason == 'end_turn', Claude a décidé qu'il avait terminé son travail. C'est le signal de sortie de la boucle while. Si stop_reason == 'max_tokens', la réponse a été coupée et tu devrais augmenter max_tokens." },

      { id: "3-18", type: "checklist", title: "Agent de veille : checklist de livraison", items: [
        { id: "c1", text: "Les outils scrape_page, load/save_data et send_email sont implémentés" },
        { id: "c2", text: "La boucle while gère correctement tool_use ET end_turn" },
        { id: "c3", text: "Les données précédentes sont sauvegardées pour comparaison" },
        { id: "c4", text: "Le rapport HTML est lisible et professionnel" },
        { id: "c5", text: "Un cron job ou scheduler est configuré pour l'exécution automatique" },
        { id: "c6", text: "Les erreurs de scraping sont gérées (try/except) sans crasher l'agent" },
      ]},
    ]),
    exercise: "<h3>Exercice : Lance ton agent de veille</h3><p>Clone le code de la leçon et teste-le sur <strong>2 concurrents réels</strong> d'un secteur que tu connais (pas forcément les CRM — ça peut être des agences, des restaurants, des e-commerces). Tu peux utiliser des pages de pricing ou des pages d'accueil. Lance l'agent, observe les appels d'outils dans le terminal, et vérifie que les fichiers JSON sont bien créés dans ./data/. Bonus : modifie le rapport HTML pour qu'il soit plus beau.</p>",
    quiz: [
      { type: "mcq", question: "Quel est le prix de vente typique d'un agent de veille concurrentielle pour un client ?", options: JSON.stringify(["100-300€ en one-shot", "1 500-4 000€ en one-shot + 200-500€/mois de maintenance", "50€/mois sans frais initial", "10 000€ minimum pour ce type de projet"]), correctAnswer: "1 500-4 000€ en one-shot + 200-500€/mois de maintenance", explanation: "Un agent de veille concurrentielle se facture entre 1 500€ et 4 000€ en one-shot plus 200-500€/mois de maintenance. C'est un investissement rentable pour le client qui économise environ 5h de travail par semaine." },
      { type: "true_false", question: "Dans la boucle agent, quand stop_reason == 'end_turn', cela signifie que Claude a terminé son travail et qu'on doit sortir de la boucle while.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Quand stop_reason == 'end_turn', Claude a décidé qu'il avait terminé son travail. C'est le signal de sortie de la boucle while. Ne pas confondre avec 'max_tokens' qui signifie que la réponse a été coupée." },
      { type: "mcq", question: "Quelle est la première technique à essayer pour contourner un site qui bloque le scraping ?", options: JSON.stringify(["Utiliser directement Playwright/Selenium", "Ajouter un User-Agent de navigateur réaliste dans les headers", "Acheter un service de proxies rotatifs", "Abandonner et chercher un autre site"]), correctAnswer: "Ajouter un User-Agent de navigateur réaliste dans les headers", explanation: "Ajouter un User-Agent réaliste est la technique de niveau 1 qui résout 60% des blocages simples. Il faut appliquer les techniques progressivement : headers réalistes, puis délais aléatoires, puis navigateur headless, puis APIs tierces." },
      { type: "true_false", question: "Le scraping de données publiques est toujours illégal en France et en Europe.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Le scraping est légal pour les données publiques dans la majorité des cas. Cependant, il faut vérifier les CGU du site et ne jamais scraper de données personnelles sans consentement (RGPD). Les APIs officielles sont toujours à privilégier quand elles existent." },
      { type: "mcq", question: "Dans l'architecture de l'agent de veille, quel est le rôle de la fonction compare_with_previous(data) ?", options: JSON.stringify(["Elle scrape les pages des concurrents", "Elle compare les données actuelles avec celles de la semaine précédente pour détecter les changements", "Elle envoie le rapport par email", "Elle génère le rapport HTML"]), correctAnswer: "Elle compare les données actuelles avec celles de la semaine précédente pour détecter les changements", explanation: "compare_with_previous charge les données de la semaine dernière (sauvegardées en fichier JSON) et les compare avec les données fraîchement scrapées pour identifier les changements de prix, nouvelles offres, etc." },
    ],
  },

  // ─── LEÇON 4 ───
  {
    order: 4,
    module: 8,
    title: "Agent de prospection LinkedIn automatisé",
    slug: "agent-prospection-linkedin-automatise",
    duration: "30 min",
    description: "Construire un agent complet de prospection : scraping de profils, enrichissement des données, génération de messages ultra-personnalisés et workflow d'envoi.",
    content: blocks([
      { id: "4-1", type: "heading", level: 2, text: "La prospection manuelle : un gouffre de temps" },
      { id: "4-2", type: "text", html: "<p>Un commercial passe en moyenne <strong>3 à 4 heures par jour</strong> sur LinkedIn : chercher des profils, les qualifier, écrire des messages. Sur 100 messages envoyés, 10% répondent, 2% convertissent. C'est mathématiquement un problème d'échelle — il faut envoyer plus, plus vite, sans perdre la personnalisation.</p><p>C'est là qu'un agent IA change complètement la donne. En automatisant la recherche, l'enrichissement et la génération de messages, tu passes de 20 prospects/jour à 200+, avec des messages <em>plus</em> personnalisés que ce qu'un humain ferait.</p>" },
      { id: "4-3", type: "callout", variant: "tip", html: "<strong>Use case agence :</strong> Propose ce service à des PME B2B pour 800-2 000€/mois. Tu gères l'agent, ils reçoivent des leads qualifiés chaque semaine. Revenu récurrent, faible effort de maintenance." },
      { id: "4-4", type: "separator", style: "dots" },

      { id: "4-5", type: "heading", level: 2, text: "Architecture du workflow de prospection" },
      { id: "4-6", type: "diagram", variant: "flow", nodes: [
        { id: "n1", label: "Critères ICP", description: "Titre, secteur, taille entreprise, localisation" },
        { id: "n2", label: "search_linkedin_profiles()", description: "Recherche via SalesNav API ou scraping avec Proxycurl" },
        { id: "n3", label: "enrich_profile()", description: "Récupère email pro, infos entreprise, activité récente" },
        { id: "n4", label: "score_lead()", description: "Score de 1-10 basé sur les critères ICP (Claude)" },
        { id: "n5", label: "generate_message()", description: "Message personnalisé basé sur le profil (Claude)" },
        { id: "n6", label: "save_to_crm()", description: "Création du contact dans HubSpot/Notion/Airtable" },
        { id: "n7", label: "schedule_outreach()", description: "Ajout à la séquence d'envoi (Lemlist, Reply.io...)" },
      ]},
      { id: "4-7", type: "separator", style: "line" },

      { id: "4-8", type: "heading", level: 2, text: "Le code complet de l'agent" },
      { id: "4-9", type: "code", language: "python", filename: "linkedin_prospecting_agent.py", code: `import anthropic
import json
import random
from datetime import datetime

client = anthropic.Anthropic()

# ── Simulation de données LinkedIn (en prod : Proxycurl API) ──

MOCK_PROFILES = [
    {
        "id": "prof_001",
        "full_name": "Sophie Martin",
        "headline": "Directrice Marketing | SaaS B2B | Growth",
        "company": "TechFlow SAS",
        "company_size": "50-200",
        "location": "Paris",
        "recent_post": "Super conférence hier sur l'automatisation marketing. On a encore du chemin à faire dans nos équipes !",
        "email": "sophie.martin@techflow.fr",
        "linkedin_url": "https://linkedin.com/in/sophie-martin-techflow"
    },
    {
        "id": "prof_002",
        "full_name": "Marc Dubois",
        "headline": "CEO & Co-founder | Startup fintech | Scaling",
        "company": "PayZen",
        "company_size": "10-50",
        "location": "Lyon",
        "recent_post": "On vient de lever notre Série A. On recrute des commerciaux seniors — beaucoup de travail à venir.",
        "email": "marc@payzen.io",
        "linkedin_url": "https://linkedin.com/in/marc-dubois-payzen"
    },
]

# ── Fonctions outils ───────────────────────────────────────

def search_linkedin_profiles(job_title: str, industry: str, location: str, limit: int = 10) -> dict:
    """En prod : appel à l'API Proxycurl ou PhantomBuster"""
    print(f"  [search] {job_title} | {industry} | {location}")
    profiles = [p for p in MOCK_PROFILES if location.lower() in p["location"].lower()]
    return {
        "profiles": profiles[:limit],
        "total_found": len(profiles),
        "query": f"{job_title} in {industry}"
    }


def enrich_profile(profile_id: str) -> dict:
    """Enrichit un profil avec des données supplémentaires"""
    profile = next((p for p in MOCK_PROFILES if p["id"] == profile_id), None)
    if not profile:
        return {"error": "Profil introuvable"}

    # En prod : appel Clearbit, Hunter.io, ou Proxycurl pour l'email
    return {
        **profile,
        "email_verified": True,
        "company_revenue": "2-10M€",
        "technologies_used": ["HubSpot", "Slack", "Notion"],
        "mutual_connections": random.randint(0, 15)
    }


def score_lead(profile_data: dict, icp_criteria: dict) -> dict:
    """Calcule un score de qualification du lead (0-10)"""
    score = 0
    reasons = []

    # Titre correspond ?
    if any(t.lower() in profile_data.get("headline", "").lower()
           for t in icp_criteria.get("target_titles", [])):
        score += 3
        reasons.append("Titre cible ✓")

    # Taille d'entreprise ?
    if profile_data.get("company_size") in icp_criteria.get("company_sizes", []):
        score += 2
        reasons.append("Taille entreprise ✓")

    # Email vérifié ?
    if profile_data.get("email_verified"):
        score += 2
        reasons.append("Email vérifié ✓")

    # Connexions mutuelles ?
    if profile_data.get("mutual_connections", 0) > 3:
        score += 1
        reasons.append(f"{profile_data['mutual_connections']} connexions mutuelles")

    # Post récent = lead chaud ?
    if profile_data.get("recent_post"):
        score += 2
        reasons.append("Activité LinkedIn récente")

    return {"score": min(score, 10), "reasons": reasons, "qualified": score >= 5}


def generate_personalized_message(profile_data: dict, sender_context: str) -> dict:
    """Génère un message LinkedIn personnalisé via Claude"""
    # Note : ceci est un appel Claude DANS l'agent Claude (nested)
    # En prod tu peux utiliser claude-haiku pour réduire les coûts
    msg_response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": f"""Rédige un message LinkedIn de connexion pour ce prospect.

PROFIL DU PROSPECT :
- Nom : {profile_data['full_name']}
- Titre : {profile_data['headline']}
- Entreprise : {profile_data['company']}
- Post récent : {profile_data.get('recent_post', 'aucun')}

CONTEXTE DE L'EXPÉDITEUR :
{sender_context}

CONSIGNES :
- Maximum 300 caractères (contrainte LinkedIn)
- Commence par une accroche personnalisée liée à leur profil ou post
- Une seule phrase de valeur proposée
- Pas de "je voulais juste...", pas de pitch direct
- Ton naturel, pas corporate
- Terminé par une question ouverte courte

Retourne UNIQUEMENT le message, rien d'autre."""
        }]
    )
    return {
        "message": msg_response.content[0].text,
        "character_count": len(msg_response.content[0].text)
    }


def save_to_crm(profile_data: dict, score_data: dict, message: str) -> dict:
    """Sauvegarde le contact dans le CRM (ici simulation)"""
    contact = {
        "id": f"crm_{profile_data['id']}_{datetime.now().strftime('%Y%m%d')}",
        "name": profile_data["full_name"],
        "email": profile_data.get("email", ""),
        "company": profile_data["company"],
        "linkedin": profile_data["linkedin_url"],
        "score": score_data["score"],
        "message_draft": message,
        "status": "to_contact",
        "created_at": datetime.now().isoformat()
    }
    # En prod : POST vers HubSpot API, Notion API, ou Airtable API
    print(f"  [CRM] Contact sauvegardé : {contact['name']} (score: {contact['score']})")
    return {"status": "saved", "contact_id": contact["id"]}


# ── Définition des outils Claude ──────────────────────────

TOOLS = [
    {
        "name": "search_linkedin_profiles",
        "description": "Recherche des profils LinkedIn selon des critères ICP",
        "input_schema": {
            "type": "object",
            "properties": {
                "job_title": {"type": "string", "description": "Titre de poste cible (ex: 'Directeur Marketing')"},
                "industry": {"type": "string", "description": "Secteur d'activité"},
                "location": {"type": "string", "description": "Ville ou région"},
                "limit": {"type": "integer", "description": "Nombre de profils à retourner", "default": 10}
            },
            "required": ["job_title", "industry", "location"]
        }
    },
    {
        "name": "enrich_profile",
        "description": "Enrichit un profil avec email, données entreprise et technologies utilisées",
        "input_schema": {
            "type": "object",
            "properties": {
                "profile_id": {"type": "string", "description": "ID du profil à enrichir"}
            },
            "required": ["profile_id"]
        }
    },
    {
        "name": "score_lead",
        "description": "Calcule un score de qualification (0-10) pour un lead",
        "input_schema": {
            "type": "object",
            "properties": {
                "profile_data": {"type": "object", "description": "Données complètes du profil"},
                "icp_criteria": {
                    "type": "object",
                    "description": "Critères ICP : target_titles, company_sizes, industries"
                }
            },
            "required": ["profile_data", "icp_criteria"]
        }
    },
    {
        "name": "generate_personalized_message",
        "description": "Génère un message LinkedIn personnalisé pour le prospect",
        "input_schema": {
            "type": "object",
            "properties": {
                "profile_data": {"type": "object", "description": "Données du profil enrichi"},
                "sender_context": {"type": "string", "description": "Contexte sur l'expéditeur et sa proposition de valeur"}
            },
            "required": ["profile_data", "sender_context"]
        }
    },
    {
        "name": "save_to_crm",
        "description": "Sauvegarde le contact qualifié dans le CRM avec le message draft",
        "input_schema": {
            "type": "object",
            "properties": {
                "profile_data": {"type": "object"},
                "score_data": {"type": "object"},
                "message": {"type": "string"}
            },
            "required": ["profile_data", "score_data", "message"]
        }
    }
]


def execute_tool(name: str, input_data: dict) -> str:
    dispatch = {
        "search_linkedin_profiles": lambda: search_linkedin_profiles(**input_data),
        "enrich_profile": lambda: enrich_profile(**input_data),
        "score_lead": lambda: score_lead(**input_data),
        "generate_personalized_message": lambda: generate_personalized_message(**input_data),
        "save_to_crm": lambda: save_to_crm(**input_data),
    }
    fn = dispatch.get(name)
    return json.dumps(fn() if fn else {"error": f"Outil inconnu: {name}"}, ensure_ascii=False)


# ── Agent principal ────────────────────────────────────────

def run_prospecting_agent(campaign_config: dict):
    messages = [{
        "role": "user",
        "content": f"""Lance une campagne de prospection LinkedIn avec ces paramètres :

CIBLE :
- Titre : {campaign_config['target_title']}
- Secteur : {campaign_config['industry']}
- Localisation : {campaign_config['location']}
- Taille entreprise : {campaign_config['company_sizes']}

EXPÉDITEUR :
{campaign_config['sender_context']}

PROCESSUS :
1. Cherche les profils correspondants
2. Pour chaque profil : enrichis les données
3. Score le lead avec les critères ICP
4. Si score >= 5 : génère un message personnalisé
5. Sauvegarde les leads qualifiés dans le CRM
6. Présente un résumé de la campagne à la fin"""
    }]

    icp = {
        "target_titles": campaign_config["target_title"].split(","),
        "company_sizes": campaign_config["company_sizes"]
    }

    while True:
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=8096,
            tools=TOOLS,
            messages=messages
        )

        if response.stop_reason == "end_turn":
            summary = next((b.text for b in response.content if hasattr(b, "text")), "")
            print("\\n✅ Campagne terminée")
            print(summary)
            break

        if response.stop_reason == "tool_use":
            messages.append({"role": "assistant", "content": response.content})
            tool_results = []
            for block in response.content:
                if block.type == "tool_use":
                    print(f"  → {block.name}")
                    result = execute_tool(block.name, block.input)
                    tool_results.append({
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": result
                    })
            messages.append({"role": "user", "content": tool_results})


if __name__ == "__main__":
    run_prospecting_agent({
        "target_title": "Directeur Marketing, CMO, Head of Growth",
        "industry": "SaaS B2B",
        "location": "Paris",
        "company_sizes": ["10-50", "50-200"],
        "sender_context": "Je suis consultant IA spécialisé en automatisation marketing. J'aide les équipes SaaS à multiplier par 3 leur pipeline avec des agents IA. J'ai récemment aidé une startup fintech à passer de 50 à 200 leads qualifiés/semaine."
    })
` },
      { id: "4-10", type: "callout", variant: "info", html: "<strong>APIs recommandées en production :</strong> <a href='https://proxycurl.com'>Proxycurl</a> pour les données LinkedIn (~0.01$ par profil), <a href='https://hunter.io'>Hunter.io</a> pour les emails, et <a href='https://www.lemlist.com'>Lemlist</a> ou <a href='https://reply.io'>Reply.io</a> pour l'envoi séquencé automatique." },
      { id: "4-11", type: "separator", style: "dots" },

      { id: "4-12", type: "heading", level: 2, text: "Respecter les limites de LinkedIn" },
      { id: "4-13", type: "steps", steps: [
        { title: "Limites natives LinkedIn", description: "Compte gratuit : 100 connexions/semaine. Sales Navigator : 2500 messages InMail/mois. Ne jamais dépasser ces limites pour éviter le ban." },
        { title: "Utiliser des APIs officielles", description: "Proxycurl utilise des méthodes conformes aux CGU. Évite les outils qui utilisent ta session LinkedIn directement (Phantombuster peut triggrer des bans)." },
        { title: "Qualité > Quantité", description: "Un agent qui envoie 30 messages ultra-personnalisés vaut mieux que 300 messages génériques. LinkedIn pénalise les faibles taux d'acceptation." },
        { title: "Warm-up du compte", description: "Sur un nouveau compte, commence par 10-20 connexions/jour pendant 2 semaines avant de monter en volume." },
      ]},
      { id: "4-14", type: "separator", style: "line" },

      { id: "4-15", type: "quiz-inline", question: "Pourquoi utilise-t-on claude-haiku dans generate_personalized_message plutôt que claude-opus ?", options: [
        { id: "a", text: "Haiku est plus créatif pour les messages courts" },
        { id: "b", text: "Haiku est 10-20x moins cher et suffisant pour une tâche de génération courte" },
        { id: "c", text: "Opus ne peut pas générer des messages LinkedIn" },
        { id: "d", text: "Haiku a une meilleure connaissance de LinkedIn" },
      ], correctId: "b", explanation: "claude-haiku est 10 à 20 fois moins cher que claude-opus pour des performances similaires sur des tâches simples comme la génération de messages courts. Dans un agent qui traite des centaines de profils, l'optimisation des coûts par modèle est cruciale." },

      { id: "4-16", type: "checklist", title: "Agent de prospection : prêt pour la prod", items: [
        { id: "c1", text: "Les critères ICP sont clairement définis (titre, secteur, taille, localisation)" },
        { id: "c2", text: "Le scoring des leads filtre automatiquement les non-qualifiés" },
        { id: "c3", text: "Les messages générés font moins de 300 caractères (limite LinkedIn)" },
        { id: "c4", text: "Les données sont sauvegardées dans le CRM avec le message draft" },
        { id: "c5", text: "Le volume d'envoi respecte les limites LinkedIn (< 100/semaine en gratuit)" },
        { id: "c6", text: "Le coût par lead est optimisé (haiku pour la génération de messages)" },
      ]},
    ]),
    exercise: "<h3>Exercice : Personnalise l'agent pour un vrai client</h3><p>Prends le code et adapte la campagne pour un secteur réel : choisissez un type d'entreprise que tu connais (agences web, restaurants, cabinets RH...). Modifie les <code>MOCK_PROFILES</code> pour qu'ils reflètent ce secteur. Lance l'agent et observe les messages générés. Sont-ils vraiment personnalisés ? Ajuste le prompt de <code>generate_personalized_message</code> jusqu'à obtenir des messages que tu enverrais toi-même. Mesure ensuite le coût de la campagne en tokens.</p>",
    quiz: [
      { type: "mcq", question: "Pourquoi utilise-t-on claude-haiku plutôt que claude-opus dans la fonction generate_personalized_message ?", options: JSON.stringify(["Haiku est plus créatif pour les messages courts", "Haiku est 10-20x moins cher et suffisant pour une tâche de génération simple", "Opus ne sait pas générer de messages LinkedIn", "Haiku a accès aux données LinkedIn"]), correctAnswer: "Haiku est 10-20x moins cher et suffisant pour une tâche de génération simple", explanation: "Dans un agent qui traite des centaines de profils, l'optimisation des coûts par modèle est cruciale. Claude-haiku est 10 à 20 fois moins cher que Claude-opus avec des performances similaires sur des tâches simples comme la génération de messages courts." },
      { type: "true_false", question: "Sur LinkedIn, un compte gratuit peut envoyer jusqu'à 500 connexions par semaine sans risque de ban.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "La limite sur un compte gratuit LinkedIn est de 100 connexions par semaine. Dépasser cette limite risque un ban du compte. Il faut aussi faire un warm-up progressif sur les nouveaux comptes (10-20 connexions/jour pendant 2 semaines)." },
      { type: "mcq", question: "Quel est le workflow complet de l'agent de prospection dans le bon ordre ?", options: JSON.stringify(["Enrichir → Chercher → Scorer → Envoyer → Sauvegarder", "Chercher profils → Enrichir données → Scorer le lead → Générer message → Sauvegarder dans CRM", "Sauvegarder → Chercher → Enrichir → Scorer → Générer", "Générer message → Chercher profils → Enrichir → Scorer → Sauvegarder"]), correctAnswer: "Chercher profils → Enrichir données → Scorer le lead → Générer message → Sauvegarder dans CRM", explanation: "L'agent suit un workflow logique : d'abord rechercher les profils correspondant aux critères ICP, enrichir avec des données supplémentaires, scorer pour qualifier le lead (score >= 5), puis générer un message personnalisé et sauvegarder dans le CRM." },
      { type: "true_false", question: "Un agent de prospection qui envoie 300 messages génériques est plus efficace qu'un agent qui envoie 30 messages ultra-personnalisés.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "LinkedIn pénalise les faibles taux d'acceptation. 30 messages ultra-personnalisés avec un bon taux de réponse valent beaucoup plus que 300 messages génériques qui risquent de faire bannir le compte et qui ont un taux de conversion très faible." },
      { type: "mcq", question: "Quel service est recommandé en production pour récupérer les données de profils LinkedIn ?", options: JSON.stringify(["Scraper directement LinkedIn avec Selenium", "Utiliser l'API Proxycurl (~0.01$/profil)", "Copier-coller manuellement les profils", "Utiliser uniquement l'API gratuite de LinkedIn"]), correctAnswer: "Utiliser l'API Proxycurl (~0.01$/profil)", explanation: "Proxycurl utilise des méthodes conformes aux CGU de LinkedIn à environ 0.01$ par profil. Scraper directement LinkedIn avec la session utilisateur (PhantomBuster, Selenium) peut déclencher des bans de compte." },
    ],
  },

  // ─── LEÇON 5 ───
  {
    order: 5,
    module: 8,
    title: "Projet : un agent multi-outils déployé",
    slug: "projet-agent-multi-outils-deploye",
    duration: "25 min",
    description: "Architecture complète d'un agent qui cherche sur le web, envoie des emails et met à jour un CRM. De l'idée au déploiement cloud.",
    content: blocks([
      { id: "5-1", type: "heading", level: 2, text: "L'agent final : un assistant business complet" },
      { id: "5-2", type: "text", html: "<p>On arrive à la pièce maîtresse du module. Jusqu'ici tu as vu des agents spécialisés (veille, prospection). Maintenant on construit un <strong>agent généraliste</strong> qu'un client peut utiliser comme assistant business : il cherche des infos sur le web, envoie des emails professionnels, et synchronise tout dans son CRM.</p><p>C'est le type d'agent que tu vas déployer sur un serveur et que ton client utilisera via une interface web ou un bot Slack. L'objectif est que tu comprennes <strong>l'architecture complète</strong> : du code au déploiement en passant par la sécurité.</p>" },
      { id: "5-3", type: "callout", variant: "info", html: "<strong>Ce que le client peut faire avec cet agent :</strong> 'Cherche les derniers articles sur [sujet], rédige un email de veille pour mon équipe et enregistre les sources dans notre Notion.' — Un workflow complet en une seule instruction." },
      { id: "5-4", type: "separator", style: "dots" },

      { id: "5-5", type: "heading", level: 2, text: "Architecture complète du système" },
      { id: "5-6", type: "diagram", variant: "tree", nodes: [
        { id: "n1", label: "Interface utilisateur", description: "FastAPI endpoint / Bot Slack / Interface web React" },
        { id: "n2", label: "Agent Core (Python)", description: "Boucle ReAct + gestion des outils + historique des conversations" },
        { id: "n3", label: "Outil : Web Search", description: "Brave Search API ou Serper.dev — résultats en temps réel" },
        { id: "n4", label: "Outil : Email", description: "SendGrid API — envoi + tracking d'ouverture" },
        { id: "n5", label: "Outil : CRM", description: "HubSpot API ou Notion API — lecture/écriture de contacts" },
        { id: "n6", label: "Outil : Mémoire", description: "Redis ou Postgres — historique de conversation persistant" },
        { id: "n7", label: "Déploiement", description: "Railway.app ou Render — container Docker, HTTPS auto, logs" },
      ]},
      { id: "5-7", type: "separator", style: "line" },

      { id: "5-8", type: "heading", level: 2, text: "Le code de l'agent multi-outils" },
      { id: "5-9", type: "code", language: "python", filename: "multi_tool_agent.py", code: `import anthropic
import requests
import json
import os
from datetime import datetime

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

# ── Outils ────────────────────────────────────────────────

def web_search(query: str, num_results: int = 5) -> dict:
    """Recherche web via Brave Search API"""
    api_key = os.environ.get("BRAVE_API_KEY", "")
    if not api_key:
        # Fallback mock pour la démo
        return {
            "results": [
                {"title": f"Résultat 1 pour '{query}'", "url": "https://example.com/1", "snippet": "Contenu pertinent..."},
                {"title": f"Résultat 2 pour '{query}'", "url": "https://example.com/2", "snippet": "Autre contenu..."},
            ]
        }

    headers = {"Accept": "application/json", "Accept-Encoding": "gzip", "X-Subscription-Token": api_key}
    response = requests.get(
        "https://api.search.brave.com/res/v1/web/search",
        params={"q": query, "count": num_results},
        headers=headers
    )
    data = response.json()
    results = [
        {"title": r["title"], "url": r["url"], "snippet": r.get("description", "")}
        for r in data.get("web", {}).get("results", [])
    ]
    return {"results": results, "query": query}


def send_email(to: str, subject: str, body_html: str, cc: str = "") -> dict:
    """Envoi email via SendGrid"""
    import sendgrid
    from sendgrid.helpers.mail import Mail

    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get("SENDGRID_API_KEY", ""))
    message = Mail(
        from_email=os.environ.get("FROM_EMAIL", "agent@monagence.fr"),
        to_emails=to,
        subject=subject,
        html_content=body_html
    )
    if cc:
        message.cc = cc

    try:
        # En mode démo, on simule l'envoi
        if not os.environ.get("SENDGRID_API_KEY"):
            print(f"  [EMAIL SIMULÉ] À: {to} | Objet: {subject}")
            return {"status": "sent_mock", "to": to, "subject": subject}
        response = sg.send(message)
        return {"status": "sent", "status_code": response.status_code, "to": to}
    except Exception as e:
        return {"status": "error", "error": str(e)}


def update_crm_contact(contact_email: str, properties: dict, notes: str = "") -> dict:
    """Met à jour ou crée un contact dans le CRM (HubSpot)"""
    hubspot_token = os.environ.get("HUBSPOT_TOKEN", "")

    if not hubspot_token:
        # Mock pour la démo
        print(f"  [CRM SIMULÉ] Contact mis à jour : {contact_email}")
        return {"status": "updated_mock", "contact_email": contact_email, "properties": properties}

    headers = {"Authorization": f"Bearer {hubspot_token}", "Content-Type": "application/json"}

    # Chercher si le contact existe
    search_resp = requests.post(
        "https://api.hubapi.com/crm/v3/objects/contacts/search",
        headers=headers,
        json={"filterGroups": [{"filters": [{"propertyName": "email", "operator": "EQ", "value": contact_email}]}]}
    )
    contacts = search_resp.json().get("results", [])

    if contacts:
        contact_id = contacts[0]["id"]
        requests.patch(
            f"https://api.hubapi.com/crm/v3/objects/contacts/{contact_id}",
            headers=headers,
            json={"properties": properties}
        )
        action = "updated"
    else:
        requests.post(
            "https://api.hubapi.com/crm/v3/objects/contacts",
            headers=headers,
            json={"properties": {"email": contact_email, **properties}}
        )
        action = "created"

    if notes:
        requests.post(
            "https://api.hubapi.com/crm/v3/objects/notes",
            headers=headers,
            json={"properties": {"hs_note_body": notes, "hs_timestamp": datetime.now().isoformat()}}
        )

    return {"status": action, "contact_email": contact_email}


def get_crm_contacts(filter_by: str = "", limit: int = 10) -> dict:
    """Récupère des contacts depuis le CRM"""
    hubspot_token = os.environ.get("HUBSPOT_TOKEN", "")
    if not hubspot_token:
        return {"contacts": [
            {"email": "alice@startup.fr", "firstname": "Alice", "lastname": "Dupont", "company": "StartupXYZ"},
            {"email": "bob@agence.com", "firstname": "Bob", "lastname": "Martin", "company": "AgenceDev"},
        ], "total": 2}

    headers = {"Authorization": f"Bearer {hubspot_token}"}
    response = requests.get(
        "https://api.hubapi.com/crm/v3/objects/contacts",
        headers=headers,
        params={"limit": limit, "properties": "email,firstname,lastname,company"}
    )
    data = response.json()
    contacts = [r["properties"] for r in data.get("results", [])]
    return {"contacts": contacts, "total": len(contacts)}


# ── Définition des outils pour Claude ─────────────────────

TOOLS = [
    {
        "name": "web_search",
        "description": "Effectue une recherche web en temps réel et retourne les résultats pertinents",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Requête de recherche"},
                "num_results": {"type": "integer", "description": "Nombre de résultats (défaut: 5)", "default": 5}
            },
            "required": ["query"]
        }
    },
    {
        "name": "send_email",
        "description": "Envoie un email HTML professionnel via SendGrid",
        "input_schema": {
            "type": "object",
            "properties": {
                "to": {"type": "string", "description": "Email du destinataire"},
                "subject": {"type": "string", "description": "Objet de l'email"},
                "body_html": {"type": "string", "description": "Corps de l'email en HTML"},
                "cc": {"type": "string", "description": "Email en copie (optionnel)", "default": ""}
            },
            "required": ["to", "subject", "body_html"]
        }
    },
    {
        "name": "update_crm_contact",
        "description": "Crée ou met à jour un contact dans HubSpot CRM avec ses propriétés et des notes",
        "input_schema": {
            "type": "object",
            "properties": {
                "contact_email": {"type": "string", "description": "Email du contact"},
                "properties": {"type": "object", "description": "Propriétés à mettre à jour (firstname, lastname, company, phone...)"},
                "notes": {"type": "string", "description": "Note interne à ajouter au contact", "default": ""}
            },
            "required": ["contact_email", "properties"]
        }
    },
    {
        "name": "get_crm_contacts",
        "description": "Récupère la liste des contacts du CRM",
        "input_schema": {
            "type": "object",
            "properties": {
                "filter_by": {"type": "string", "description": "Filtre textuel optionnel", "default": ""},
                "limit": {"type": "integer", "description": "Nombre max de contacts", "default": 10}
            }
        }
    }
]


def execute_tool(name: str, input_data: dict) -> str:
    dispatch = {
        "web_search": lambda: web_search(**input_data),
        "send_email": lambda: send_email(**input_data),
        "update_crm_contact": lambda: update_crm_contact(**input_data),
        "get_crm_contacts": lambda: get_crm_contacts(**input_data),
    }
    fn = dispatch.get(name)
    result = fn() if fn else {"error": f"Outil inconnu: {name}"}
    return json.dumps(result, ensure_ascii=False)


# ── Agent avec mémoire de conversation ────────────────────

class MultiToolAgent:
    def __init__(self):
        self.conversation_history = []
        self.system_prompt = """Tu es un assistant business IA pour une agence digitale.
Tu as accès à ces outils :
- web_search : pour trouver des informations récentes
- send_email : pour envoyer des emails professionnels
- update_crm_contact / get_crm_contacts : pour gérer les contacts clients

Sois proactif : si l'utilisateur demande quelque chose qui implique plusieurs étapes,
fais-les dans l'ordre logique sans demander de confirmation à chaque étape.
Résume toujours ce que tu as fait à la fin."""

    def chat(self, user_message: str) -> str:
        self.conversation_history.append({"role": "user", "content": user_message})

        while True:
            response = client.messages.create(
                model="claude-opus-4-5",
                max_tokens=8096,
                system=self.system_prompt,
                tools=TOOLS,
                messages=self.conversation_history
            )

            if response.stop_reason == "end_turn":
                final_text = next((b.text for b in response.content if hasattr(b, "text")), "")
                self.conversation_history.append({"role": "assistant", "content": response.content})
                return final_text

            if response.stop_reason == "tool_use":
                self.conversation_history.append({"role": "assistant", "content": response.content})
                tool_results = []
                for block in response.content:
                    if block.type == "tool_use":
                        print(f"  → {block.name}")
                        result = execute_tool(block.name, block.input)
                        tool_results.append({
                            "type": "tool_result",
                            "tool_use_id": block.id,
                            "content": result
                        })
                self.conversation_history.append({"role": "user", "content": tool_results})


# ── API FastAPI pour exposer l'agent ──────────────────────

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Multi-Tool Agent API")
agent = MultiToolAgent()


class ChatRequest(BaseModel):
    message: str
    session_id: str = "default"


@app.post("/chat")
async def chat(request: ChatRequest):
    response = agent.chat(request.message)
    return {"response": response, "session_id": request.session_id}


@app.get("/health")
async def health():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}


# ── Mode CLI pour les tests ───────────────────────────────

if __name__ == "__main__":
    agent = MultiToolAgent()
    print("Agent multi-outils prêt. Tape 'exit' pour quitter.\\n")

    while True:
        user_input = input("Toi > ").strip()
        if user_input.lower() == "exit":
            break
        if not user_input:
            continue

        print("Agent > ", end="", flush=True)
        response = agent.chat(user_input)
        print(response)
        print()
` },
      { id: "5-10", type: "separator", style: "dots" },

      { id: "5-11", type: "heading", level: 2, text: "Déployer en production" },
      { id: "5-12", type: "code", language: "text", filename: "Dockerfile", code: `FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "multi_tool_agent:app", "--host", "0.0.0.0", "--port", "8000"]
` },
      { id: "5-13", type: "code", language: "text", filename: "requirements.txt", code: `anthropic>=0.30.0
fastapi>=0.111.0
uvicorn>=0.30.0
requests>=2.31.0
pydantic>=2.0.0
sendgrid>=6.11.0
python-dotenv>=1.0.0
` },
      { id: "5-14", type: "steps", steps: [
        { title: "Créer le repo GitHub", description: "Push ton code avec un .gitignore qui exclut les .env. Ne jamais committer les API keys." },
        { title: "Créer le projet sur Railway.app", description: "Connecte ton repo GitHub. Railway détecte le Dockerfile automatiquement et build le container." },
        { title: "Configurer les variables d'environnement", description: "Dans Railway : Settings → Variables. Ajoute ANTHROPIC_API_KEY, BRAVE_API_KEY, SENDGRID_API_KEY, HUBSPOT_TOKEN." },
        { title: "Activer le domaine HTTPS", description: "Railway génère un domaine en *.up.railway.app avec HTTPS automatique. Tu peux y brancher ton domaine custom." },
        { title: "Tester l'endpoint", description: "POST /chat avec {\"message\": \"cherche les news IA du jour et envoie-moi un résumé\"} — l'agent doit répondre en moins de 30s." },
      ]},
      { id: "5-15", type: "callout", variant: "success", html: "<strong>Coût de déploiement :</strong> Railway.app coûte ~5$ par mois pour un container léger. Ajoute les API keys (~20$ Brave Search, SendGrid gratuit jusqu'à 100 emails/jour). Un déploiement complet revient à moins de 30$/mois — que tu peux refacturer 200-500€/mois au client." },
      { id: "5-16", type: "separator", style: "line" },

      { id: "5-17", type: "heading", level: 2, text: "Sécurité et bonnes pratiques" },
      { id: "5-18", type: "comparison", headers: ["Risque", "Problème", "Solution"], rows: [
        { cells: ["Injection de prompt", "Un utilisateur malveillant manipule l'agent pour faire des actions non prévues", "Limite les outils au strict nécessaire, valide les inputs avant exécution"] },
        { cells: ["Coûts non contrôlés", "L'agent boucle indéfiniment ou est appelé des milliers de fois", "Ajoute un max_iterations = 10 dans ta boucle while, rate limit l'API FastAPI"] },
        { cells: ["Fuite d'API keys", "Les clés sont dans le code committé sur GitHub", "Toujours utiliser des variables d'environnement, jamais de clés hardcodées"] },
        { cells: ["Actions irréversibles", "L'agent envoie des emails ou modifie le CRM par erreur", "Mode dry-run en dev, confirmation humaine pour les actions critiques"] },
        { cells: ["Données sensibles", "L'historique de conversation contient des données client", "Chiffre la mémoire, purge après X jours, conformité RGPD"] },
      ]},
      { id: "5-19", type: "callout", variant: "warning", html: "<strong>Règle d'or :</strong> Ajoute toujours un <code>max_iterations</code> dans ta boucle while. Un agent qui ne se termine jamais coûte de l'argent et peut faire des dégâts. 10 itérations max c'est largement suffisant pour 99% des tâches." },

      { id: "5-20", type: "quiz-inline", question: "Quel est le risque principal d'un agent déployé sans limite d'itérations ?", options: [
        { id: "a", text: "L'agent répond trop lentement" },
        { id: "b", text: "L'agent peut boucler indéfiniment, entraînant des coûts non contrôlés et des actions répétées non désirées" },
        { id: "c", text: "Les API tierces refusent les connexions" },
        { id: "d", text: "Le code devient illisible" },
      ], correctId: "b", explanation: "Sans max_iterations, un agent peut boucler indéfiniment si un outil retourne une erreur ambiguë ou si l'objectif n'est jamais atteint. Résultat : coûts API explosifs et potentiellement des dizaines d'emails envoyés ou de modifications CRM non désirées. Toujours mettre une limite." },

      { id: "5-21", type: "checklist", title: "Checklist déploiement production", items: [
        { id: "c1", text: "Toutes les API keys sont dans des variables d'environnement, jamais dans le code" },
        { id: "c2", text: "La boucle agent a un max_iterations (ex: 15)" },
        { id: "c3", text: "Les erreurs d'outils sont gérées sans crasher l'agent" },
        { id: "c4", text: "Un endpoint /health est disponible pour le monitoring" },
        { id: "c5", text: "Le Dockerfile et requirements.txt sont complets et testés" },
        { id: "c6", text: "Les variables d'environnement sont configurées sur Railway/Render" },
        { id: "c7", text: "Tu as testé l'agent en mode CLI avant de déployer" },
        { id: "c8", text: "Un rate limit est en place sur l'API FastAPI (ex: 10 req/min par IP)" },
      ]},
    ]),
    exercise: "<h3>Projet final : déploie ton agent</h3><p>C'est le projet final du module. Tu dois déployer l'agent multi-outils sur Railway.app (ou Render.app, les deux ont un tier gratuit). Étapes : (1) fork/clone le code, (2) crée un compte Railway et connecte ton GitHub, (3) configure les variables d'environnement (tu peux utiliser des clés sandbox/test), (4) déploie et teste l'endpoint /chat depuis un client HTTP (Postman, curl, ou une page HTML simple). Capture d'écran du déploiement actif pour valider l'exercice. Bonus : ajoute un 5ème outil de ton choix (ex: créer un événement Google Calendar, poster sur Slack, lire un Google Sheet).</p>",
    quiz: [
      { type: "mcq", question: "Quel est le risque principal d'un agent déployé sans max_iterations dans sa boucle while ?", options: JSON.stringify(["L'agent répond trop lentement", "L'agent peut boucler indéfiniment, causant des coûts API explosifs et des actions répétées non désirées", "Les API tierces refusent les connexions", "Le serveur manque de mémoire RAM"]), correctAnswer: "L'agent peut boucler indéfiniment, causant des coûts API explosifs et des actions répétées non désirées", explanation: "Sans max_iterations, un agent peut boucler indéfiniment si un outil retourne une erreur ambiguë ou si l'objectif n'est jamais atteint. Résultat : coûts API explosifs et potentiellement des dizaines d'emails envoyés ou de modifications CRM non désirées." },
      { type: "true_false", question: "Les API keys doivent être stockées dans des variables d'environnement, jamais directement dans le code source.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Vrai", explanation: "Les clés API hardcodées dans le code risquent d'être committées sur GitHub et exposées publiquement. Il faut toujours utiliser des variables d'environnement (fichier .env en local, configuration du cloud en production)." },
      { type: "mcq", question: "Quel est le coût mensuel approximatif pour déployer un agent multi-outils sur Railway.app ?", options: JSON.stringify(["0€ — c'est toujours gratuit", "Environ 5$/mois pour le container + coûts des API keys", "Minimum 100$/mois pour un serveur dédié", "500€/mois pour un déploiement professionnel"]), correctAnswer: "Environ 5$/mois pour le container + coûts des API keys", explanation: "Railway.app coûte environ 5$/mois pour un container léger. En ajoutant les API keys (Brave Search ~20$, SendGrid gratuit jusqu'à 100 emails/jour), un déploiement complet revient à moins de 30$/mois, refacturable 200-500€/mois au client." },
      { type: "true_false", question: "Pour protéger un agent contre l'injection de prompt, il suffit de limiter la longueur des messages utilisateur.", options: JSON.stringify(["Vrai", "Faux"]), correctAnswer: "Faux", explanation: "Limiter la longueur ne suffit pas contre l'injection de prompt. Il faut aussi limiter les outils au strict nécessaire, valider les inputs avant exécution, et utiliser un mode dry-run en développement avec confirmation humaine pour les actions critiques." },
      { type: "mcq", question: "Quelle classe Python est utilisée pour exposer l'agent via une API web ?", options: JSON.stringify(["Flask avec le décorateur @app.route", "FastAPI avec le décorateur @app.post", "Django avec les views", "Express.js avec app.post"]), correctAnswer: "FastAPI avec le décorateur @app.post", explanation: "L'agent est exposé via FastAPI avec un endpoint POST /chat qui reçoit un message et retourne la réponse de l'agent. FastAPI est rapide, moderne, et génère automatiquement la documentation API." },
    ],
  },
];
