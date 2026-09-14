import type { SupportedLanguage } from '../ui';

export interface DirectoryTool {
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  href: string;
  icon: string;
}

export interface DirectoryAudience {
  icon: string;
  title: string;
  desc: string;
}

export interface DirectoryStage {
  stage: string;
  title: string;
  desc: string;
}

export interface DirectoryContent {
  toolsTitle: string;
  toolsSubtitle: string;
  launchTool: string;
  aboutBadge: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  audiencesBadge: string;
  audiencesTitle: string;
  audiencesSubtitle: string;
  audiences: DirectoryAudience[];
  pipelineBadge: string;
  pipelineTitle: string;
  pipelineSubtitle: string;
  stages: DirectoryStage[];
  privacyTitle: string;
  privacyText: string;
  privacyLink: string;
  termsLink: string;
  editorialLink: string;
  tools: Omit<DirectoryTool, 'href'>[];
}

export const directoryContent: Record<SupportedLanguage, DirectoryContent> = {
  en: {
    toolsTitle: 'High-Precision Computational Directory',
    toolsSubtitle: 'Select a specialized computational suite or algorithmic playground to begin.',
    launchTool: 'Launch tool',
    aboutBadge: 'Mission & Architecture',
    aboutTitle: 'What is SciCalcX?',
    aboutP1: 'SciCalcX is a high-performance, open educational engineering platform built to deliver fast, browser-based mathematical and computational analysis directly in the modern web browser. Traditional online scientific calculators and computing websites are frequently compromised by intrusive pop-up advertisements, paid subscription walls, sluggish server-side round trips, and non-transparent proprietary algorithms. SciCalcX was architected from the ground up to solve these deficiencies by combining browser-native evaluation engines with transparent numerical methodologies.',
    aboutP2: 'Every mathematical suite on SciCalcX—including the Scientific Calculator, Matrix Algebra Suite, Calculus Engine, 2D Function Grapher, Descriptive Statistics Analyzer, and 32-Bit Programmer Bitboard—operates 100% client-side. Using standard IEEE-754 double-precision floating-point arithmetic, composite numerical integration (Simpson\'s rule), Laplace cofactor expansion, and native bitwise manipulation, calculations execute locally in your browser without a single byte of your equations or datasets being sent to external servers.',
    aboutP3: 'For computer science students and software engineers, SciCalcX extends beyond pure mathematics with an integrated Code Tutor & Online Compiler. Code execution is handled through secure, ephemeral, containerized cloud sandboxes (Judge0 CE and Wandbox), enabling users to write, compile, and debug Python, C, and C++ algorithms directly alongside their mathematical models. SciCalcX remains completely free, private, and accessible to anyone with an internet connection.',
    audiencesBadge: 'Target Disciplines',
    audiencesTitle: 'Who Can Use SciCalcX?',
    audiencesSubtitle: 'Designed for precision across academic, industrial, and software engineering domains.',
    audiences: [
      {
        icon: '🎓',
        title: 'University STEM Students',
        desc: 'Solve multi-variable calculus problem sets, verify matrix determinants and inverses, compute statistical distributions, and debug engineering coursework without expensive hardware calculators.',
      },
      {
        icon: '⚡',
        title: 'Systems & Embedded Developers',
        desc: 'Inspect 32-bit hardware register masks, translate endianness and base notations, toggle individual bit flags, and compile C/C++ verification routines right from the browser.',
      },
      {
        icon: '📊',
        title: 'Data Analysts & Scientists',
        desc: 'Calculate sample and population dispersion metrics, standard deviations with Bessel\'s correction, linear regression equations, and verify probability distributions with real-time feedback.',
      },
      {
        icon: '📐',
        title: 'High School Calculus & Physics',
        desc: 'Visualize 2D Cartesian curves, analyze polynomial roots, evaluate rates of change, and understand numerical integration through transparent formulas and interactive steps.',
      },
    ],
    pipelineBadge: 'Technical Pipeline',
    pipelineTitle: 'How SciCalcX Works',
    pipelineSubtitle: 'An inside look at the three-stage computational lifecycle powering our engines.',
    stages: [
      {
        stage: 'STAGE 1: INPUT & TOKENIZATION',
        title: 'Lexical Parsing & Validation',
        desc: 'Input formulas, matrix elements, and data arrays are parsed locally into discrete tokens. Parentheses balancing, syntax validation, and boundary verification occur in real time as you type.',
      },
      {
        stage: 'STAGE 2: EVALUATION',
        title: 'Deterministic Algorithms',
        desc: 'Math calculations run in the browser\'s JavaScript V8/JavaScriptCore engine via Shunting-Yard RPN, Simpson\'s quadrature, or Bessel correction. Code execution is routed via HTTPS to isolated sandbox containers.',
      },
      {
        stage: 'STAGE 3: NORMALIZATION',
        title: 'Epsilon Cleanup & Formatting',
        desc: 'Raw float64 results undergo precision normalization to prevent IEEE-754 binary representation artifacts (e.g. 0.1 + 0.2 = 0.30000000000000004), displaying clean, mathematically rigorous results.',
      },
    ],
    privacyTitle: 'Our Strict Privacy & Editorial Commitment',
    privacyText: 'SciCalcX does not monetize, record, or track your mathematical equations, matrix datasets, or statistical samples. Calculation history is stored strictly in your browser\'s private localStorage and never uploaded to any remote database. All educational articles and technical documentation are independently authored and verified against university-standard textbooks.',
    privacyLink: 'Read Privacy Policy',
    termsLink: 'Read Terms of Service',
    editorialLink: 'Read Editorial Guidelines',
    tools: [
      {
        title: 'Scientific Calculator',
        badge: '100% Client-Side',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Multi-line expression evaluation, DEG/RAD sexagesimal trigonometry, powers, roots, factorials, and real-time syntax checking.',
        icon: 'fx',
      },
      {
        title: 'Matrix & Linear Algebra',
        badge: '100% Client-Side',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinants via recursive Laplace cofactor expansion, matrix inversion via adjugate matrices, matrix products, and transpose operations up to 4×4.',
        icon: '⊞',
      },
      {
        title: 'Calculus Suite',
        badge: '100% Client-Side',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Numerical differentiation using symmetric central difference quotients (O(h²)) and definite integration via composite Simpson\'s 1/3 rule (N=1000).',
        icon: '∫',
      },
      {
        title: '2D Function Graphing',
        badge: '100% Client-Side',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Hardware-accelerated HTML5 Canvas Cartesian plotter with dynamic grid scaling, trigonometric mapping, and mouse cursor coordinate tracking.',
        icon: '📈',
      },
      {
        title: 'Descriptive Statistics',
        badge: '100% Client-Side',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Comprehensive statistical distributions: arithmetic mean, median, multi-modal analysis, Bessel-corrected sample variance, and population dispersion.',
        icon: 'x̄',
      },
      {
        title: 'Programmer Bitboard',
        badge: '100% Client-Side',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Synchronized 32-bit signed integer registers (HEX, DEC, OCT, BIN) with an interactive 32-bit visual bitboard for bitwise shift and mask simulation.',
        icon: '01',
      },
      {
        title: 'Code Tutor & Compiler',
        badge: 'Encrypted Remote Sandbox',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Interactive compiler supporting Python 3, C, and C++20 via isolated sandboxes (Judge0 CE / Wandbox) with automated syntax diagnostics.',
        icon: '💻',
      },
    ],
  },
  es: {
    toolsTitle: 'Directorio Computacional de Alta Precisión',
    toolsSubtitle: 'Selecciona una suite de cálculo especializado o entorno algorítmico para comenzar.',
    launchTool: 'Abrir herramienta',
    aboutBadge: 'Misión y Arquitectura',
    aboutTitle: '¿Qué es SciCalcX?',
    aboutP1: 'SciCalcX es una plataforma educativa de ingeniería abierta y de alto rendimiento, diseñada para proporcionar análisis matemáticos y computacionales rápidos directamente en el navegador web moderno. Las calculadoras científicas tradicionales suelen estar saturadas de anuncios molestos, muros de pago y algoritmos opacos. SciCalcX se construyó desde cero para resolver estos problemas combinando motores de cálculo nativos en el navegador con metodologías numéricas transparentes.',
    aboutP2: 'Todas las suites matemáticas de SciCalcX—incluyendo la Calculadora Científica, Álgebra Matricial, Cálculo Infinitesimal, Graficador 2D, Estadística Descriptiva y Registro de Programador de 32 Bits—operan 100% en el lado del cliente. Utilizando aritmética de punto flotante de doble precisión IEEE-754, integración de Simpson, expansión por cofactores de Laplace y manipulación a nivel de bits, los cálculos se ejecutan localmente sin enviar datos a servidores externos.',
    aboutP3: 'Para estudiantes de ingeniería y ciencias de la computación, SciCalcX incluye un Tutor de Código y Compilador en Línea. La ejecución del código se realiza a través de entornos sandbox seguros y aislados (Judge0 CE y Wandbox), permitiendo escribir, compilar y depurar algoritmos en Python, C y C++ de forma segura junto a sus modelos matemáticos.',
    audiencesBadge: 'Disciplinas Destinatarias',
    audiencesTitle: '¿Quién Puede Usar SciCalcX?',
    audiencesSubtitle: 'Diseñado para ofrecer precisión en el ámbito académico, industrial y de ingeniería de software.',
    audiences: [
      {
        icon: '🎓',
        title: 'Estudiantes Universitarios STEM',
        desc: 'Resuelve problemas de cálculo multivariable, verifica determinantes e inversas matriciales, calcula distribuciones estadísticas y depura trabajos prácticos sin necesidad de calculadoras físicas costosas.',
      },
      {
        icon: '⚡',
        title: 'Ingenieros de Sistemas y Embebidos',
        desc: 'Inspecciona máscaras de registro de 32 bits, convierte entre sistemas numéricos, conmuta flags de bits y compila rutinas de verificación en C/C++ desde el navegador.',
      },
      {
        icon: '📊',
        title: 'Analistas y Científicos de Datos',
        desc: 'Calcula métricas de dispersión con corrección de Bessel, varianzas muestrales, ecuaciones de regresión lineal y visualiza distribuciones con retroalimentación instantánea.',
      },
      {
        icon: '📐',
        title: 'Estudiantes de Bachillerato y Física',
        desc: 'Visualiza curvas cartesianas 2D, analiza raíces de polinomios, calcula razones de cambio y comprende la integración numérica mediante fórmulas claras y paso a paso.',
      },
    ],
    pipelineBadge: 'Flujo Técnico',
    pipelineTitle: 'Cómo Funciona SciCalcX',
    pipelineSubtitle: 'Una mirada al ciclo de vida computacional de tres etapas que impulsa nuestros motores.',
    stages: [
      {
        stage: 'ETAPA 1: ENTRADA Y TOKENIZACIÓN',
        title: 'Análisis Léxico y Validación',
        desc: 'Las fórmulas, elementos matriciales y conjuntos de datos se analizan localmente en tokens. El balanceo de paréntesis y la validación de sintaxis ocurren en tiempo real mientras escribes.',
      },
      {
        stage: 'ETAPA 2: EVALUACIÓN',
        title: 'Algoritmos Deterministas',
        desc: 'Los cálculos matemáticos se ejecutan en el motor JavaScript local mediante RPN Shunting-Yard, cuadratura de Simpson o corrección de Bessel. La ejecución de código se envía vía HTTPS a contenedores sandbox aislados.',
      },
      {
        stage: 'ETAPA 3: NORMALIZACIÓN',
        title: 'Corrección Epsilon y Formato',
        desc: 'Los resultados en float64 pasan por una normalización de precisión para evitar artefactos binarios IEEE-754 (ej. 0.1 + 0.2 = 0.30000000000000004), mostrando resultados matemáticos limpios y rigurosos.',
      },
    ],
    privacyTitle: 'Nuestro Compromiso con la Privacidad y Rigor Editorial',
    privacyText: 'SciCalcX no monetiza, registra ni rastrea tus ecuaciones, matrices o muestras estadísticas. El historial de cálculo se almacena exclusivamente en el localStorage privado de tu navegador y nunca se sube a bases de datos remotas. Todo el contenido educativo se revisa y valida conforme a los estándares académicos universitarios.',
    privacyLink: 'Ver Política de Privacidad',
    termsLink: 'Ver Términos de Servicio',
    editorialLink: 'Ver Integridad Editorial',
    tools: [
      {
        title: 'Calculadora Científica',
        badge: '100% Lado del Cliente',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Evaluación multilínea, trigonometría sexagesimal DEG/RAD, potencias, raíces, factoriales y validación de sintaxis en tiempo real.',
        icon: 'fx',
      },
      {
        title: 'Matrices y Álgebra Lineal',
        badge: '100% Lado del Cliente',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinantes por expansión de cofactores de Laplace, matrices inversas por adjuntos, multiplicación y transposición hasta 4×4.',
        icon: '⊞',
      },
      {
        title: 'Suite de Cálculo Infinitesimal',
        badge: '100% Lado del Cliente',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Diferenciación numérica por cocientes de diferencias centrales simétricas e integración definida mediante la regla de Simpson 1/3.',
        icon: '∫',
      },
      {
        title: 'Graficador de Funciones 2D',
        badge: '100% Lado del Cliente',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Trazador cartesiano interactivo en Canvas HTML5 con escala dinámica, mapeo trigonométrico y seguimiento de coordenadas del cursor.',
        icon: '📈',
      },
      {
        title: 'Estadística Descriptiva',
        badge: '100% Lado del Cliente',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Distribuciones estadísticas completas: media aritmética, mediana, moda múltiple, varianza muestral con corrección de Bessel y regresión lineal.',
        icon: 'x̄',
      },
      {
        title: 'Bitboard para Programadores',
        badge: '100% Lado del Cliente',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Registros sincronizados de enteros de 32 bits con signo (HEX, DEC, OCT, BIN) con panel interactivo para simulación de máscaras y desplazamientos.',
        icon: '01',
      },
      {
        title: 'Tutor de Código y Compilador',
        badge: 'Sandbox Remoto Aislado',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Compilador interactivo para Python 3, C y C++20 en entornos sandbox efímeros (Judge0 CE / Wandbox) con diagnóstico de sintaxis.',
        icon: '💻',
      },
    ],
  },
  fr: {
    toolsTitle: 'Répertoire de Calcul Haute Précision',
    toolsSubtitle: 'Sélectionnez une suite de calcul spécialisée ou un environnement algorithmique pour commencer.',
    launchTool: 'Lancer l\'outil',
    aboutBadge: 'Mission et Architecture',
    aboutTitle: 'Qu\'est-ce que SciCalcX ?',
    aboutP1: 'SciCalcX est une plateforme éducative d\'ingénierie ouverte et haute performance, conçue pour fournir des analyses mathématiques et informatiques rapides directement dans le navigateur moderne. Les calculatrices traditionnelles en ligne sont souvent ralenties par des publicités intrusives et des algorithmes opaques. SciCalcX a été conçu dès l\'origine pour surmonter ces défauts en combinant moteurs de calcul natifs et méthodes numériques transparentes.',
    aboutP2: 'Toutes les suites mathématiques de SciCalcX—y compris la Calculatrice Scientifique, l\'Algèbre Matricielle, le Calcul Infinitésimal, le Traceur 2D, les Statistiques Descriptives et le Bitboard 32 Bits—fonctionnent à 100% côté client. Utilisant les flottants double précision IEEE-754, la méthode de Simpson et l\'expansion de Laplace, les calculs s\'exécutent localement sans aucun transfert de données vers des serveurs externes.',
    aboutP3: 'Pour les étudiants en informatique et les développeurs, SciCalcX intègre un Tuteur de Code et Compilateur en ligne. L\'exécution s\'effectue via des bacs à sable conteneurisés temporaires et sécurisés (Judge0 CE et Wandbox), permettant d\'écrire, tester et déboguer des algorithmes Python, C et C++ en toute sécurité.',
    audiencesBadge: 'Disciplines Cibles',
    audiencesTitle: 'À Qui S\'adresse SciCalcX ?',
    audiencesSubtitle: 'Conçu pour la rigueur des domaines universitaires, industriels et du génie logiciel.',
    audiences: [
      {
        icon: '🎓',
        title: 'Étudiants Universitaires STEM',
        desc: 'Résolvez des équations de calcul différentiel, vérifiez des déterminants matriciels, calculez des distributions statistiques et préparez vos travaux pratiques sans calculatrice matérielle coûteuse.',
      },
      {
        icon: '⚡',
        title: 'Développeurs Systèmes et Embarqués',
        desc: 'Inspectez les masques de registres 32 bits, convertissez les représentations numériques, manipulez les bits et compilez du code C/C++ directement depuis votre navigateur.',
      },
      {
        icon: '📊',
        title: 'Analystes et Data Scientists',
        desc: 'Calculez les mesures de dispersion avec correction de Bessel, variances d\'échantillons et régressions linéaires avec un retour visuel instantané.',
      },
      {
        icon: '📐',
        title: 'Lycéens en Mathématiques et Physique',
        desc: 'Tracez des courbes cartésiennes 2D, trouvez les racines de polynômes et visualisez l\'intégration numérique pas à pas.',
      },
    ],
    pipelineBadge: 'Pipeline Technique',
    pipelineTitle: 'Comment Fonctionne SciCalcX',
    pipelineSubtitle: 'Le cycle de calcul en trois étapes qui alimente nos moteurs numériques.',
    stages: [
      {
        stage: 'ÉTAPE 1 : ENTRÉE ET TOKENISATION',
        title: 'Analyse Lexicale et Validation',
        desc: 'Les expressions, matrices et données sont converties localement en jetons. L\'équilibrage des parenthèses et la validation de syntaxe s\'effectuent en temps réel.',
      },
      {
        stage: 'ÉTAPE 2 : ÉVALUATION',
        title: 'Algorithmes Déterministes',
        desc: 'Les calculs s\'exécutent dans le moteur JavaScript local via RPN Shunting-Yard, quadrature de Simpson ou correction de Bessel. Le code est exécuté via HTTPS dans des conteneurs sandbox isolés.',
      },
      {
        stage: 'ÉTAPE 3 : NORMALISATION',
        title: 'Correction Epsilon et Affichage',
        desc: 'Les résultats float64 bruts sont normalisés pour éviter les anomalies de représentation binaire IEEE-754 (ex. 0.1 + 0.2 = 0.30000000000000004), garantissant un résultat rigoureux.',
      },
    ],
    privacyTitle: 'Notre Engagement pour la Confidentialité et la Rigueur',
    privacyText: 'SciCalcX ne monétise, n\'enregistre ni ne suit vos équations, matrices ou données statistiques. L\'historique est conservé exclusivement dans le localStorage privé de votre navigateur. Toute notre documentation pédagogique est vérifiée selon les normes académiques.',
    privacyLink: 'Politique de Confidentialité',
    termsLink: 'Conditions d\'Utilisation',
    editorialLink: 'Intégrité Éditoriale',
    tools: [
      {
        title: 'Calculatrice Scientifique',
        badge: '100% Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Évaluation d\'expressions multilignes, trigonométrie sexagésimale DEG/RAD, puissances, racines et contrôle de syntaxe en temps réel.',
        icon: 'fx',
      },
      {
        title: 'Matrices et Algèbre Linéaire',
        badge: '100% Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Déterminants par cofacteurs de Laplace, inverses matricielles, produits matriciels et transpositions jusqu\'à 4×4.',
        icon: '⊞',
      },
      {
        title: 'Suite de Calcul Infinitésimal',
        badge: '100% Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Dérivation numérique par quotients de différences symétriques et intégration définie par la règle de Simpson 1/3.',
        icon: '∫',
      },
      {
        title: 'Traceur de Fonctions 2D',
        badge: '100% Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Traceur cartésien interactif HTML5 Canvas avec mise à l\'échelle dynamique, affichage trigonométrique et suivi des coordonnées.',
        icon: '📈',
      },
      {
        title: 'Statistiques Descriptives',
        badge: '100% Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Distributions statistiques complètes : moyenne, médiane, mode, variance avec correction de Bessel et régression linéaire.',
        icon: 'x̄',
      },
      {
        title: 'Bitboard pour Programmeurs',
        badge: '100% Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Registres d\'entiers signés 32 bits synchronisés (HEX, DEC, OCT, BIN) avec grille interactive pour la manipulation de bits.',
        icon: '01',
      },
      {
        title: 'Tuteur de Code et Compilateur',
        badge: 'Sandbox Distant Sécurisé',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Compilateur interactif pour Python 3, C et C++20 via bacs à sable isolés (Judge0 CE / Wandbox) avec diagnostics syntaxiques.',
        icon: '💻',
      },
    ],
  },
  de: {
    toolsTitle: 'Präzisions-Berechnungsverzeichnis',
    toolsSubtitle: 'Wählen Sie eine spezialisierte Berechnungssuite oder Programmierumgebung.',
    launchTool: 'Werkzeug starten',
    aboutBadge: 'Mission und Architektur',
    aboutTitle: 'Was ist SciCalcX?',
    aboutP1: 'SciCalcX ist eine leistungsstarke, offene Bildungsplattform für Ingenieurwesen und Naturwissenschaften, die schnelle mathematische Berechnungen direkt im modernen Browser ermöglicht. Herkömmliche wissenschaftliche Online-Rechner sind oft mit aufdringlicher Werbung, Abonnementschranken und undurchsichtigen Algorithmen überladen. SciCalcX wurde von Grund auf entwickelt, um diese Mängel durch browser-native Rechenkerne und transparente numerische Methoden zu beseitigen.',
    aboutP2: 'Alle mathematischen Module auf SciCalcX—einschließlich des wissenschaftlichen Rechners, der Matrixalgebra, der Analysis-Suite, des 2D-Funktionsplotters, der deskriptiven Statistik und des 32-Bit-Programmierer-Bitboards—arbeiten zu 100% clientseitig. Mit IEEE-754-Fließkomma-Arithmetik, Simpson-Integration und Laplace-Entwicklung laufen Berechnungen lokal in Ihrem Browser ab, ohne dass Formeln an externe Server übertragen werden.',
    aboutP3: 'Für Informatikstudenten und Softwareentwickler bietet SciCalcX zusätzlich einen integrierten Code Tutor & Online-Compiler. Die Codeausführung erfolgt über sichere, isolierte Cloud-Sandbox-Container (Judge0 CE und Wandbox), sodass Python-, C- und C++-Algorithmen direkt neben den mathematischen Modellen getestet werden können.',
    audiencesBadge: 'Zielgruppen',
    audiencesTitle: 'Wer nutzt SciCalcX?',
    audiencesSubtitle: 'Entwickelt für höchste Präzision in Ausbildung, Forschung und Softwaretechnik.',
    audiences: [
      {
        icon: '🎓',
        title: 'MINT-Studenten',
        desc: 'Lösen Sie Analysis-Aufgaben, berechnen Sie Determinanten und inverse Matrizen, analysieren Sie statistische Verteilungen und überprüfen Sie Übungsaufgaben ohne teure Hardware-Rechner.',
      },
      {
        icon: '⚡',
        title: 'System- & Embedded-Entwickler',
        desc: 'Prüfen Sie 32-Bit-Registermasken, konvertieren Sie Zahlenbasen, schalten Sie Bit-Flags interaktiv um und kompilieren Sie C/C++-Routinen direkt im Browser.',
      },
      {
        icon: '📊',
        title: 'Datenanalysten & Wissenschaftler',
        desc: 'Ermitteln Sie Streuungsmaße mit Bessel-Korrektur, Stichprobenvarianzen, lineare Regressionsgeraden und analysieren Sie Verteilungen in Echtzeit.',
      },
      {
        icon: '📐',
        title: 'Gymnasiasten & Physikschüler',
        desc: 'Visualisieren Sie 2D-Funktionsgraphen, ermitteln Sie Nullstellen, berechnen Sie Ableitungen und verstehen Sie numerische Integration Schritt für Schritt.',
      },
    ],
    pipelineBadge: 'Technische Pipeline',
    pipelineTitle: 'Funktionsweise von SciCalcX',
    pipelineSubtitle: 'Ein Blick auf den dreistufigen Rechenzyklus unserer Plattform.',
    stages: [
      {
        stage: 'STUFE 1: EINGABE & TOKENISIERUNG',
        title: 'Lexikalisches Parsing & Validierung',
        desc: 'Formeln, Matrixelemente und Datenreihen werden lokal in Token zerlegt. Klammerprüfung und Syntaxvalidierung erfolgen in Echtzeit bei der Eingabe.',
      },
      {
        stage: 'STUFE 2: BERECHNUNG',
        title: 'Deterministische Algorithmen',
        desc: 'Mathematische Berechnungen laufen lokal im JavaScript-Kern über Shunting-Yard-RPN, Simpson-Quadratur oder Bessel-Korrektur. Programmcode wird per HTTPS in isolierten Containern ausgeführt.',
      },
      {
        stage: 'STUFE 3: NORMALISIERUNG',
        title: 'Epsilon-Korrektur & Formatierung',
        desc: 'Fließkommawerte werden normalisiert, um IEEE-754-Rundungsartefakte (z. B. 0,1 + 0,2 = 0,30000000000000004) zu verhindern und mathematisch exakte Ausgaben zu liefern.',
      },
    ],
    privacyTitle: 'Unser Engagement für Datenschutz und redaktionelle Integrität',
    privacyText: 'SciCalcX monetarisiert, speichert oder verfolgt Ihre mathematischen Gleichungen, Matrizen oder Datensätze nicht. Der Verlauf wird ausschließlich im privaten localStorage Ihres Browsers abgelegt. Alle Bildungsinhalte werden unabhängig nach universitären Standards geprüft.',
    privacyLink: 'Datenschutzerklärung lesen',
    termsLink: 'Nutzungsbedingungen lesen',
    editorialLink: 'Redaktionelle Richtlinien lesen',
    tools: [
      {
        title: 'Wissenschaftlicher Rechner',
        badge: '100% Clientseitig',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Mehrzeilige Formelauswertung, DEG/RAD-Trigonometrie, Potenzen, Wurzeln, Fakultäten und Echtzeit-Syntaxprüfung.',
        icon: 'fx',
      },
      {
        title: 'Matrix & Lineare Algebra',
        badge: '100% Clientseitig',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinanten über Laplace-Entwicklung, inverse Matrizen, Matrixmultiplikation und Transpositionen bis 4×4.',
        icon: '⊞',
      },
      {
        title: 'Analysis- & Kalkül-Suite',
        badge: '100% Clientseitig',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Numerische Differentiation über symmetrische Differenzenquotienten und bestimmte Integration nach der Simpson-Regel.',
        icon: '∫',
      },
      {
        title: '2D-Funktionsplotter',
        badge: '100% Clientseitig',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Interaktiver HTML5-Canvas-Plotter mit dynamischer Gitterskalierung, trigonometrischen Kurven und Koordinatentracking.',
        icon: '📈',
      },
      {
        title: 'Deskriptive Statistik',
        badge: '100% Clientseitig',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Vollständige Kennwerte: arithmetisches Mittel, Median, Modalwert, Stichprobenvarianz mit Bessel-Korrektur und lineare Regression.',
        icon: 'x̄',
      },
      {
        title: 'Programmierer-Bitboard',
        badge: '100% Clientseitig',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Synchronisierte vorzeichenbehaftete 32-Bit-Ganzzahlregister (HEX, DEC, OCT, BIN) mit interaktivem Bitfeld für Maskierungs- und Shift-Simulationen.',
        icon: '01',
      },
      {
        title: 'Code Tutor & Compiler',
        badge: 'Isolierte Remote-Sandbox',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Interaktiver Compiler für Python 3, C und C++20 in temporären Containern (Judge0 CE / Wandbox) mit automatischer Fehleranalyse.',
        icon: '💻',
      },
    ],
  },
};
