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
    aboutP2: 'SciCalcX\'s mathematical tools—including the Scientific Calculator, Matrix Algebra Suite, Calculus Engine, 2D Function Grapher, Descriptive Statistics Analyzer, and 32-Bit Programmer Bitboard—perform their calculations locally in your browser. Using standard IEEE-754 double-precision floating-point arithmetic, composite numerical integration (Simpson\'s rule), Laplace cofactor expansion, and native bitwise manipulation, mathematical processing runs locally on your device without sending your equations or datasets to external servers.',
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
        desc: 'Floating-point normalization can present common decimal results such as 0.1 + 0.2 as 0.3 when the computed value falls within the configured normalization threshold, reducing small representation artifacts.',
      },
    ],
    privacyTitle: 'Our Strict Privacy & Editorial Commitment',
    privacyText: 'SciCalcX does not monetize, record, or track your mathematical equations, matrix datasets, or statistical samples. Calculation history is stored strictly in your browser\'s private localStorage and never uploaded to any remote database. All educational articles and technical documentation are originally authored and verified against standard academic references.',
    privacyLink: 'Read Privacy Policy',
    termsLink: 'Read Terms of Service',
    editorialLink: 'Read Editorial Guidelines',
    tools: [
      {
        title: 'Scientific Calculator',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Multi-line expression evaluation, DEG/RAD sexagesimal trigonometry, powers, roots, factorials, and real-time syntax checking.',
        icon: 'fx',
      },
      {
        title: 'Matrix & Linear Algebra',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinants via recursive Laplace cofactor expansion, matrix inversion via adjugate matrices, matrix products, and transpose operations up to 4×4.',
        icon: '⊞',
      },
      {
        title: 'Calculus Suite',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Numerical differentiation using symmetric central difference quotients (O(h²)) and definite integration via composite Simpson\'s 1/3 rule (N=1000).',
        icon: '∫',
      },
      {
        title: '2D Function Graphing',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Hardware-accelerated HTML5 Canvas Cartesian plotter with dynamic grid scaling, trigonometric mapping, and mouse cursor coordinate tracking.',
        icon: '📈',
      },
      {
        title: 'Descriptive Statistics',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Comprehensive statistical distributions: arithmetic mean, median, multi-modal analysis, Bessel-corrected sample variance, and population dispersion.',
        icon: 'x̄',
      },
      {
        title: 'Programmer Bitboard',
        badge: 'Browser-Based Evaluation',
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
    aboutP2: 'Todas las suites matemáticas de SciCalcX—incluyendo la Calculadora Científica, Álgebra Matricial, Cálculo Infinitesimal, Graficador 2D, Estadística Descriptiva y Registro de Programador de 32 Bits—realizan sus cálculos localmente en tu navegador. Utilizando aritmética de punto flotante de doble precisión IEEE-754, integración de Simpson, expansión por cofactores de Laplace y manipulación a nivel de bits, el procesamiento matemático se ejecuta localmente sin enviar tus ecuaciones o datos a servidores externos.',
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
        desc: 'La normalización de punto flotante permite presentar resultados decimales comunes como 0.1 + 0.2 como 0.3 cuando el valor calculado cae dentro del umbral de normalización configurado, reduciendo pequeños artefactos de representación.',
      },
    ],
    privacyTitle: 'Nuestro Compromiso con la Privacidad y Rigor Editorial',
    privacyText: 'SciCalcX no monetiza, registra ni rastrea tus ecuaciones, matrices o muestras estadísticas. El historial de cálculo se almacena exclusivamente en el localStorage privado de tu navegador y nunca se sube a bases de datos remotas. Todo el contenido educativo es de autoría original y se valida conforme a referencias académicas estándar.',
    privacyLink: 'Ver Política de Privacidad',
    termsLink: 'Ver Términos de Servicio',
    editorialLink: 'Ver Integridad Editorial',
    tools: [
      {
        title: 'Calculadora Científica',
        badge: 'Cálculo en el Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Evaluación multilínea, trigonometría sexagesimal DEG/RAD, potencias, raíces, factoriales y validación de sintaxis en tiempo real.',
        icon: 'fx',
      },
      {
        title: 'Matrices y Álgebra Lineal',
        badge: 'Cálculo en el Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinantes por expansión de cofactores de Laplace, matrices inversas por adjuntos, multiplicación y transposición hasta 4×4.',
        icon: '⊞',
      },
      {
        title: 'Suite de Cálculo Infinitesimal',
        badge: 'Cálculo en el Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Diferenciación numérica por cocientes de diferencias centrales simétricas e integración definida mediante la regla de Simpson 1/3.',
        icon: '∫',
      },
      {
        title: 'Graficador de Funciones 2D',
        badge: 'Cálculo en el Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Trazador cartesiano interactivo en Canvas HTML5 con escala dinámica, mapeo trigonométrico y seguimiento de coordenadas del cursor.',
        icon: '📈',
      },
      {
        title: 'Estadística Descriptiva',
        badge: 'Cálculo en el Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Distribuciones estadísticas completas: media aritmética, mediana, moda múltiple, varianza muestral con corrección de Bessel y regresión lineal.',
        icon: 'x̄',
      },
      {
        title: 'Bitboard para Programadores',
        badge: 'Cálculo en el Navegador',
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
    aboutP2: 'Toutes les suites mathématiques de SciCalcX—y compris la Calculatrice Scientifique, l\'Algèbre Matricielle, le Calcul Infinitésimal, le Traceur 2D, les Statistiques Descriptives et le Bitboard 32 Bits—effectuent leurs calculs localement dans votre navigateur. Utilisant les flottants double précision IEEE-754, la méthode de Simpson et l\'expansion de Laplace, les calculs s\'exécutent localement sans aucun transfert de données vers des serveurs externes.',
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
        desc: 'La normalisation de précision permet de présenter les résultats décimaux courants comme 0.1 + 0.2 sous la forme 0.3 lorsque la valeur calculée se situe dans le seuil configuré, réduisant les petits artefacts de représentation.',
      },
    ],
    privacyTitle: 'Notre Engagement pour la Confidentialité et la Rigueur',
    privacyText: 'SciCalcX ne monétise, n\'enregistre ni ne suit vos équations, matrices ou données statistiques. L\'historique est conservé exclusivement dans le localStorage privé de votre navigateur. Toute notre documentation pédagogique est de rédaction originale et vérifiée selon les normes académiques standard.',
    privacyLink: 'Politique de Confidentialité',
    termsLink: 'Conditions d\'Utilisation',
    editorialLink: 'Intégrité Éditoriale',
    tools: [
      {
        title: 'Calculatrice Scientifique',
        badge: 'Calcul Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Évaluation d\'expressions multilignes, trigonométrie sexagésimale DEG/RAD, puissances, racines et contrôle de syntaxe en temps réel.',
        icon: 'fx',
      },
      {
        title: 'Matrices et Algèbre Linéaire',
        badge: 'Calcul Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Déterminants par cofacteurs de Laplace, inverses matricielles, produits matriciels et transpositions jusqu\'à 4×4.',
        icon: '⊞',
      },
      {
        title: 'Suite de Calcul Infinitésimal',
        badge: 'Calcul Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Dérivation numérique par quotients de différences symétriques et intégration définie par la règle de Simpson 1/3.',
        icon: '∫',
      },
      {
        title: 'Traceur de Fonctions 2D',
        badge: 'Calcul Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Traceur cartésien interactif HTML5 Canvas avec mise à l\'échelle dynamique, affichage trigonométrique et suivi des coordonnées.',
        icon: '📈',
      },
      {
        title: 'Statistiques Descriptives',
        badge: 'Calcul Côté Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Distributions statistiques complètes : moyenne, médiane, mode, variance avec correction de Bessel et régression linéaire.',
        icon: 'x̄',
      },
      {
        title: 'Bitboard pour Programmeurs',
        badge: 'Calcul Côté Client',
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
    aboutP2: 'Alle mathematischen Module auf SciCalcX—einschließlich des wissenschaftlichen Rechners, der Matrixalgebra, der Analysis-Suite, des 2D-Funktionsplotters, der deskriptiven Statistik und des 32-Bit-Programmierer-Bitboards—führen ihre Berechnungen lokal in Ihrem Browser aus. Mit IEEE-754-Fließkomma-Arithmetik, Simpson-Integration und Laplace-Entwicklung laufen mathematische Berechnungen lokal auf Ihrem Gerät ab, ohne dass Formeln oder Daten an externe Server übertragen werden.',
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
        desc: 'Die Fließkommanormalisierung kann gängige Dezimalergebnisse wie 0,1 + 0,2 als 0,3 darstellen, wenn der berechnete Wert innerhalb des konfigurierten Normalisierungsschwellenwerts liegt, und reduziert so kleine Darstellungsartefakte.',
      },
    ],
    privacyTitle: 'Unser Engagement für Datenschutz und redaktionelle Integrität',
    privacyText: 'SciCalcX monetarisiert, speichert oder verfolgt Ihre mathematischen Gleichungen, Matrizen oder Datensätze nicht. Der Verlauf wird ausschließlich im privaten localStorage Ihres Browsers abgelegt. Alle Bildungsinhalte sind Originalarbeiten und werden anhand standardisierter akademischer Referenzen gegengeprüft.',
    privacyLink: 'Datenschutzerklärung lesen',
    termsLink: 'Nutzungsbedingungen lesen',
    editorialLink: 'Redaktionelle Richtlinien lesen',
    tools: [
      {
        title: 'Wissenschaftlicher Rechner',
        badge: 'Browserbasierte Berechnung',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Mehrzeilige Formelauswertung, DEG/RAD-Trigonometrie, Potenzen, Wurzeln, Fakultäten und Echtzeit-Syntaxprüfung.',
        icon: 'fx',
      },
      {
        title: 'Matrix & Lineare Algebra',
        badge: 'Browserbasierte Berechnung',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinanten über Laplace-Entwicklung, inverse Matrizen, Matrixmultiplikation und Transpositionen bis 4×4.',
        icon: '⊞',
      },
      {
        title: 'Analysis- & Kalkül-Suite',
        badge: 'Browserbasierte Berechnung',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Numerische Differentiation über symmetrische Differenzenquotienten und bestimmte Integration nach der Simpson-Regel.',
        icon: '∫',
      },
      {
        title: '2D-Funktionsplotter',
        badge: 'Browserbasierte Berechnung',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Interaktiver HTML5-Canvas-Plotter mit dynamischer Gitterskalierung, trigonometrischen Kurven und Koordinatentracking.',
        icon: '📈',
      },
      {
        title: 'Deskriptive Statistik',
        badge: 'Browserbasierte Berechnung',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Vollständige Kennwerte: arithmetisches Mittel, Median, Modalwert, Stichprobenvarianz mit Bessel-Korrektur und lineare Regression.',
        icon: 'x̄',
      },
      {
        title: 'Programmierer-Bitboard',
        badge: 'Browserbasierte Berechnung',
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
  ja: {
    toolsTitle: '高精度計算スイート・ディレクトリ',
    toolsSubtitle: '利用したい専門計算ツールまたはプログラミング環境を選択してください。',
    launchTool: 'ツールを起動',
    aboutBadge: 'ミッションとアーキテクチャ',
    aboutTitle: 'SciCalcXとは？',
    aboutP1: 'SciCalcXは、最新のWebブラウザ上で高速かつ高精度な数学的・計算科学的解析を提供するオープンなエンジニアリング学習プラットフォームです。従来のオンライン関数電卓サイトにありがちな、煩わしいポップアップ広告、有料サブスクリプション、低速なサーバー通信、不透明なアルゴリズムを解消し、ブラウザネイティブの高速実行エンジンと透明性の高い数値計算法を融合しています。',
    aboutP2: 'SciCalcXのすべての数学計算ツール（関数電卓、行列代数、微積分エンジン、2D関数プロッター、記述統計アナライザー、32ビットプログラマービットボード）はブラウザ上でローカルに計算を実行します。IEEE-754倍精度浮動小数点演算、合成シンプソン則による数値積分、ラプラス展開、ネイティブビット演算を用い、数式やデータを外部サーバーに送信することなく、お使いの端末内で計算を処理します。',
    aboutP3: '情報科学を学ぶ学生やソフトウェアエンジニアのために、SciCalcXは数学計算にとどまらず、対話型のCode Tutor & オンラインコンパイラを統合しています。安全な一時サンドボックス（Judge0 CEおよびWandbox）を通じて、Python、C、C++のアルゴリズムを数式モデルと並行して直接作成・コンパイル・デバッグできます。完全無料で誰でもプライバシーを保ちながら利用できます。',
    audiencesBadge: '対象分野',
    audiencesTitle: 'どのような方に利用されているか',
    audiencesSubtitle: '学術研究、産業技術、ソフトウェア開発の各分野で求められる精度を満たす設計。',
    audiences: [
      {
        icon: '🎓',
        title: '理工系大学・大学院生',
        desc: '多変数微積分の課題演習、行列式や逆行列の検証、統計分布の計算、工学シミュレーションの検証を高価なハードウェア電卓なしで効率的に実行できます。',
      },
      {
        icon: '⚡',
        title: '組込み・システム開発エンジニア',
        desc: '32ビットレジスタマスクの確認、エンディアン変換、基数変換、個別ビットフラグの反転、C/C++ルーチンの動作確認をブラウザ上で即座に行えます。',
      },
      {
        icon: '📊',
        title: 'データアナリスト・科学研究者',
        desc: '標本・母集団の分散指標、ベッセル補正による不偏標準偏差、線形回帰式の算出、確率分布の検証をリアルタイムフィードバックで実行可能です。',
      },
      {
        icon: '📐',
        title: '高校・予備校の数学・物理学習者',
        desc: '2次元デカルト座標系のグラフ描画、多項式の根の分析、変化率の追跡、数値積分の直感的な理解を数式と実践ステップを通じて深められます。',
      },
    ],
    pipelineBadge: '技術パイプライン',
    pipelineTitle: 'SciCalcXの計算アーキテクチャ',
    pipelineSubtitle: '計算エンジンを支える3段階の実行ライフサイクル。',
    stages: [
      {
        stage: 'ステージ 1: 入力解析・字句解析',
        title: '字句解析とリアルタイム検証',
        desc: '入力された数式、行列要素、データ配列をローカルでトークンに分割。入力中にリアルタイムで括弧の整合性や構文エラーを検証します。',
      },
      {
        stage: 'ステージ 2: アルゴリズム評価',
        title: '決定論的アルゴリズムのローカル実行',
        desc: '操車場アルゴリズム（Shunting-Yard）、シンプソン則、ベッセル補正などを用い、ブラウザのV8エンジン上で計算を実行。コード実行のみ安全なクラウドサンドボックスへルーティングされます。',
      },
      {
        stage: 'ステージ 3: 精度正規化',
        title: 'イプシロン補正とフォーマット整形',
        desc: '浮動小数点正規化により、計算値が設定された閾値内にある場合に0.1 + 0.2などの10進結果を0.3として表示し、小さな内部表現アーティファクトを低減します。',
      },
    ],
    privacyTitle: 'プライバシー保護と厳格な編集方針',
    privacyText: 'SciCalcXは、ユーザーが入力した数式、行列データ、統計サンプルを記録・追跡・収益化することはありません。計算履歴はお使いのブラウザのlocalStorageにのみ安全に保存されます。すべての学習記事や技術ドキュメントは独自に執筆され、標準的な学術文献に基づいて確認されています。',
    privacyLink: 'プライバシーポリシーを読む',
    termsLink: '利用規約を読む',
    editorialLink: '編集ガイドラインを読む',
    tools: [
      {
        title: '関数電卓 (Scientific Calculator)',
        badge: 'ブラウザ内ローカル計算',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '複数行数式評価、度数法・弧度法（DEG/RAD）三角関数、累乗、平方根、階乗、および構文エラーのリアルタイム検出。',
        icon: 'fx',
      },
      {
        title: '行列代数スイート (Matrix Algebra)',
        badge: 'ブラウザ内ローカル計算',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'ラプラス展開による行列式計算、随伴行列を用いた逆行列、行列積、最大4×4の転置行列演算。',
        icon: '⊞',
      },
      {
        title: '微積分スイート (Calculus Suite)',
        badge: 'ブラウザ内ローカル計算',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '対称中心差分商による数値微分および合成シンプソン1/3則（N=1000）による定積分計算。',
        icon: '∫',
      },
      {
        title: '2D関数プロッター (Function Grapher)',
        badge: 'ブラウザ内ローカル計算',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'ハードウェアアクセラレーションを活用したHTML5 Canvasデカルト座標プロッター。グリッド動的伸縮および座標追跡対応。',
        icon: '📈',
      },
      {
        title: '記述統計アナライザー (Descriptive Statistics)',
        badge: 'ブラウザ内ローカル計算',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '算術平均、中央値、最頻値、ベッセル補正付き標本分散・標準偏差、最小二乗法による線形回帰。',
        icon: 'x̄',
      },
      {
        title: 'プログラマー・ビットボード (Bitboard)',
        badge: 'ブラウザ内ローカル計算',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '同期された符号付き32ビット整数レジスタ（HEX、DEC、OCT、BIN）と対話型ビット操作グリッド。',
        icon: '01',
      },
      {
        title: 'Code Tutor & オンラインコンパイラ',
        badge: '安全なリモートサンドボックス',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Python 3、C、C++20の対話型コンパイル実行環境。自動エラー解析と学習ロードマップを搭載。',
        icon: '💻',
      },
    ],
  },
  nl: {
    toolsTitle: 'Hoge-Precisie Computationele Directory',
    toolsSubtitle: 'Kies een gespecialiseerde wiskundige suite of programmeeromgeving om te beginnen.',
    launchTool: 'Tool openen',
    aboutBadge: 'Missie & Architectuur',
    aboutTitle: 'Wat is SciCalcX?',
    aboutP1: 'SciCalcX is een open didactisch rekenplatform ontworpen voor snelle, betrouwbare wiskundige en computationele analyses rechtstreeks in de webbrowser. Veel traditionele online rekenmachines hebben last van opdringerige advertenties, betaalmuren, trage servercommunicatie en onduidelijke algoritmen. SciCalcX lost deze problemen op met lokale browser-native rekenengines en transparante numerieke methoden.',
    aboutP2: 'Alle wiskundige onderdelen op SciCalcX (Wetenschappelijke Rekenmachine, Matrixalgebra, Calculus, 2D Grafieken, Beschrijvende Statistiek en Programmeurs-Bitboard) voeren hun berekeningen lokaal in uw browser uit. Dankzij IEEE-754 dubbele precisie, numerieke integratie (Simpson-regel), Laplace-expansie en native bitbewerkingen worden wiskundige berekeningen direct op uw apparaat uitgevoerd zonder dat er vergelijkingen of datasets naar externe servers gaan.',
    aboutP3: 'Voor studenten informatica en software engineers biedt SciCalcX daarnaast een geïntegreerde Code Tutor & Online Compiler. Code-uitvoering verloopt via beveiligde, tijdelijke sandbox-containers (Judge0 CE en Wandbox), zodat u algoritmen in Python, C en C++ kunt testen en debuggen. SciCalcX is gratis, privé en voor iedereen toegankelijk.',
    audiencesBadge: 'Doelgroepen',
    audiencesTitle: 'Voor Wie is SciCalcX Bedoeld?',
    audiencesSubtitle: 'Ontworpen voor betrouwbare precisie in academische studies, techniek en softwareontwikkeling.',
    audiences: [
      {
        icon: '🎓',
        title: 'Studenten Wetenschap & Techniek',
        desc: 'Los analyse- en algebra-opgaven op, verifieer determinanten en inverse matrices, bereken statistische verdelingen en controleer technische projecten zonder dure grafische rekenmachines.',
      },
      {
        icon: '⚡',
        title: 'Embedded & Systeemontwikkelaars',
        desc: 'Bekijk 32-bits hardware-registermaskers, wissel tussen hexadecimale en binaire notaties, schakel bitvlaggen om en test C/C++-routines direct in uw browser.',
      },
      {
        icon: '📊',
        title: 'Data-analisten & Onderzoekers',
        desc: 'Bereken steekproefstatistieken, standaarddeviaties met Bessel-correctie, lineaire regressievergelijkingen en kansverdelingen met realtime resultaten.',
      },
      {
        icon: '📐',
        title: 'Middelbare School Wiskunde & Natuurkunde',
        desc: 'Visualiseer 2D-functies, analyseer nulpunten en hellingen en begrijp numerieke integratie dankzij stapsgewijze voorbeelden en duidelijke formules.',
      },
    ],
    pipelineBadge: 'Technisch Proces',
    pipelineTitle: 'Hoe SciCalcX Werkt',
    pipelineSubtitle: 'Een kijkje in de drieledige computationele cyclus achter onze engines.',
    stages: [
      {
        stage: 'FASE 1: INVOER & TOKENISATIE',
        title: 'Lexicale Parsing & Validatie',
        desc: 'Formules, matrixwaarden en datareeksen worden lokaal geparseerd in afzonderlijke tokens met continue haakjes- en syntaxiscontrole tijdens het typen.',
      },
      {
        stage: 'FASE 2: BEREKENING',
        title: 'Deterministische Algoritmen',
        desc: 'Wiskundige berekeningen worden lokaal in de JavaScript-engine uitgevoerd via Shunting-Yard, kwadratuurformules of Bessel-correctie. Alleen code-uitvoering verloopt via een externe sandbox.',
      },
      {
        stage: 'FASE 3: NORMALISATIE',
        title: 'Epsilon-opschoning & Afronding',
        desc: 'Drijvende-kommanormalisatie kan gebruikelijke decimale resultaten zoals 0.1 + 0.2 weergeven als 0.3 wanneer de berekende waarde binnen de ingestelde drempel valt, waardoor weergave-artefacten worden verminderd.',
      },
    ],
    privacyTitle: 'Onze Privacybelofte & Redactionele Normen',
    privacyText: 'SciCalcX slaat uw berekeningen, matrices en datasets nooit op externe servers op en deelt deze niet met derden. Uw berekeningsgeschiedenis blijft uitsluitend bewaard in de lokale opslag (localStorage) van uw eigen browser. Al onze uitleg en technische artikelen zijn oorspronkelijk geschreven en gecontroleerd aan de hand van standaard academische bronnen.',
    privacyLink: 'Lees Privacybeleid',
    termsLink: 'Lees Algemene Voorwaarden',
    editorialLink: 'Lees Redactionele Richtlijnen',
    tools: [
      {
        title: 'Wetenschappelijke Rekenmachine',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Berekening van complexe formules, goniometrie in DEG en RAD, machten, wortels, faculteiten en realtime syntaxisvalidatie.',
        icon: 'fx',
      },
      {
        title: 'Matrix & Lineaire Algebra',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinanten via Laplace-expansie, inverse matrices via geadjugeerde matrices, matrixvermenigvuldiging en transposities tot 4×4.',
        icon: '⊞',
      },
      {
        title: 'Calculussuite',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Numeriek differentiëren via centrale differentiequotiënten en bepaalde integratie via de samengestelde Simpson-regel (N=1000).',
        icon: '∫',
      },
      {
        title: '2D Functiegrafieken',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Snelle HTML5 Canvas-plotter met dynamische assenschaal, goniometrische weergave en cursorcoördinatentracking.',
        icon: '📈',
      },
      {
        title: 'Beschrijvende Statistiek',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Gemiddelde, mediaan, modus, steekproefvariantie met Bessel-correctie, standaarddeviatie en lineaire regressie.',
        icon: 'x̄',
      },
      {
        title: 'Programmeurs-Bitboard',
        badge: 'Browser-Based Evaluation',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Synchrone 32-bits registers (HEX, DEC, OCT, BIN) met interactief bitraster voor masker- en shiftbewerkingen.',
        icon: '01',
      },
      {
        title: 'Code Tutor & Compiler',
        badge: 'Geïsoleerde Remote Sandbox',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Interactieve compiler voor Python 3, C en C++20 in veilige containers (Judge0 CE / Wandbox) met directe foutanalyse.',
        icon: '💻',
      },
    ],
  },
  pt: {
    toolsTitle: 'Diretório Computacional de Alta Precisão',
    toolsSubtitle: 'Selecione uma suite computacional especializada ou ambiente de programação para começar.',
    launchTool: 'Abrir ferramenta',
    aboutBadge: 'Missão e Arquitetura',
    aboutTitle: 'O que é o SciCalcX?',
    aboutP1: 'O SciCalcX é uma plataforma educacional aberta e de alto desempenho projetada para fornecer cálculos matemáticos e computacionais rápidos diretamente no navegador moderno. Muitas ferramentas online tradicionais sofrem com anúncios intrusivos, paywalls, requisições lentas ao servidor e algoritmos opacos. O SciCalcX foi desenvolvido para resolver esses problemas por meio de motores de avaliação locais e métodos numéricos transparentes.',
    aboutP2: 'Todas as ferramentas matemáticas do SciCalcX (Calculadora Científica, Álgebra Matricial, Cálculo, Gráficos 2D, Estatística Descritiva e Bitboard de Programador) executam seus cálculos localmente no seu navegador. Com aritmética de ponto flutuante IEEE-754 de precisão dupla, integração numérica (regra de Simpson), expansão de Laplace e operações bit a bit nativas, o processamento matemático ocorre diretamente no seu dispositivo sem envio de equações ou dados a servidores externos.',
    aboutP3: 'Para estudantes de computação e engenheiros de software, o SciCalcX inclui também o Code Tutor & Compilador Online. A execução de código é realizada através de sandboxes efêmeros e seguros (Judge0 CE e Wandbox), permitindo escrever, compilar e depurar algoritmos em Python, C e C++ ao lado dos seus modelos matemáticos. Gratuito, privativo e acessível.',
    audiencesBadge: 'Áreas de Aplicação',
    audiencesTitle: 'Para Quem o SciCalcX foi Desenvolvido?',
    audiencesSubtitle: 'Projetado com rigor técnico para ambientes acadêmicos, de engenharia e desenvolvimento.',
    audiences: [
      {
        icon: '🎓',
        title: 'Estudantes Universitários de Exatas',
        desc: 'Resolva exercícios de cálculo multivariável, verifique determinantes e matrizes inversas, calcule distribuições estatísticas e valide projetos de engenharia sem calculadoras caras.',
      },
      {
        icon: '⚡',
        title: 'Desenvolvedores de Sistemas e Embarcados',
        desc: 'Inspecione máscaras de registradores de 32 bits, converta bases numéricas (hexadecimal, binário), alterne bits individuais e teste rotinas em C/C++ diretamente no navegador.',
      },
      {
        icon: '📊',
        title: 'Cientistas e Analistas de Dados',
        desc: 'Calcule métricas de dispersão amostral e populacional, desvio padrão com correção de Bessel, regressão linear e verifique probabilidades com retorno imediato.',
      },
      {
        icon: '📐',
        title: 'Estudantes de Ensino Médio e Vestibulares',
        desc: 'Visualize curvas cartesianas em 2D, estude raízes de polinômios, taxas de variação e compreenda integração numérica por meio de fórmulas explicadas e passos práticos.',
      },
    ],
    pipelineBadge: 'Processamento Técnico',
    pipelineTitle: 'Como o SciCalcX Funciona',
    pipelineSubtitle: 'Uma visão sobre o ciclo computacional em três etapas que move nossos motores.',
    stages: [
      {
        stage: 'ETAPA 1: ENTRADA E TOKENIZAÇÃO',
        title: 'Análise Léxica e Validação',
        desc: 'Fórmulas, dados matriciais e arrays numéricos são divididos localmente em tokens, com verificação contínua de parênteses e sintaxe em tempo real enquanto digita.',
      },
      {
        stage: 'ETAPA 2: AVALIAÇÃO',
        title: 'Algoritmos Determinísticos',
        desc: 'As avaliações matemáticas rodam localmente no motor JavaScript do navegador via algoritmo Shunting-Yard, quadratura de Simpson e correção de Bessel. Apenas o código é roteado para sandboxes externos.',
      },
      {
        stage: 'ETAPA 3: NORMALIZAÇÃO',
        title: 'Limpeza de Épsilon e Formatação',
        desc: 'A normalização de ponto flutuante pode exibir resultados decimais comuns como 0.1 + 0.2 na forma 0.3 quando o valor calculado se enquadra no limiar de normalização configurado, reduzindo pequenos artefatos de representação.',
      },
    ],
    privacyTitle: 'Nosso Compromisso com a Privacidade e o Rigor Editorial',
    privacyText: 'O SciCalcX não rastreia, monetiza nem armazena as suas equações matemáticas, matrizes ou amostras estatísticas. O histórico de cálculo é gravado exclusivamente no armazenamento local (localStorage) do seu próprio navegador. Todo o conteúdo didático e as fórmulas são de autoria original e validados com base na bibliografia acadêmica padrão.',
    privacyLink: 'Ler Política de Privacidade',
    termsLink: 'Ler Termos de Serviço',
    editorialLink: 'Ler Diretrizes Editoriais',
    tools: [
      {
        title: 'Calculadora Científica',
        badge: 'Cálculo no Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Cálculo de expressões em múltiplas linhas, trigonometria em DEG e RAD, potências, raízes, fatoriais e verificação sintática instantânea.',
        icon: 'fx',
      },
      {
        title: 'Álgebra Linear e Matrizes',
        badge: 'Cálculo no Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinantes por expansão de Laplace, matrizes inversas via matriz adjunta, multiplicação matricial e transposição até 4×4.',
        icon: '⊞',
      },
      {
        title: 'Suite de Cálculo Infinitesimal',
        badge: 'Cálculo no Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Diferenciação numérica por quocientes de diferenças centrais simétricas e integração definida pela regra composta de Simpson 1/3.',
        icon: '∫',
      },
      {
        title: 'Gráficos de Funções 2D',
        badge: 'Cálculo no Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Traçador cartesiano em Canvas HTML5 acelerado por hardware com escala dinâmica de malha e rastreamento de coordenadas do cursor.',
        icon: '📈',
      },
      {
        title: 'Estatística Descritiva',
        badge: 'Cálculo no Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Média aritmética, mediana, moda, variância e desvio padrão amostral com correção de Bessel e regressão linear simples.',
        icon: 'x̄',
      },
      {
        title: 'Bitboard para Programadores',
        badge: 'Cálculo no Navegador',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Registradores sincronizados de inteiros de 32 bits (HEX, DEC, OCT, BIN) com grade visual interativa para máscaras e deslocamentos.',
        icon: '01',
      },
      {
        title: 'Tutor de Código e Compilador',
        badge: 'Sandbox Remoto Seguro',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Compilação interativa de Python 3, C e C++20 em containers isolados (Judge0 CE / Wandbox) com diagnóstico de erros em tempo real.',
        icon: '💻',
      },
    ],
  },
  ko: {
    toolsTitle: '고정밀 컴퓨팅 도구 디렉터리',
    toolsSubtitle: '원하는 전문 계산 도구 또는 프로그래밍 샌드박스를 선택하여 작업을 시작하세요.',
    launchTool: '도구 시작하기',
    aboutBadge: '미션 및 기술 아키텍처',
    aboutTitle: 'SciCalcX란 무엇인가요?',
    aboutP1: 'SciCalcX는 최신 웹 브라우저에서 직접 빠르고 정확한 수학 및 컴퓨터 공학 연산을 제공하기 위해 개발된 오픈 엔지니어링 학습 플랫폼입니다. 기존 온라인 계산기 사이트에서 흔히 볼 수 있는 광고 방해, 유료 구독 결제 유도, 느린 서버 지연 시간 및 불투명한 연산 방식을 탈피하여, 브라우저 네이티브 고속 엔진과 투명한 수치 계산 방법론을 결합했습니다.',
    aboutP2: 'SciCalcX의 모든 수학 도구(공학용 계산기, 행렬 대수 스위트, 미적분 엔진, 2D 함수 그래프, 기술 통계 분석기, 32비트 프로그래머 비트보드)는 브라우저 내부에서 로컬로 계산을 수행합니다. IEEE-754 배정밀도 부동소수점 산술, 심슨 공식을 이용한 수치 적분, 라플라스 여인수 전개 및 네이티브 비트 연산을 활용하여, 입력한 수식이나 데이터셋을 외부 서버로 전송하지 않고 기기 내에서 처리합니다.',
    aboutP3: '컴퓨터 공학도와 소프트웨어 개발자를 위해, SciCalcX는 수학 계산기뿐 아니라 대화형 Code Tutor & 온라인 컴파일러를 지원합니다. 안전하고 격리된 임시 컨테이너 샌드박스(Judge0 CE 및 Wandbox)를 통해 사용자는 수학 모델과 함께 Python, C, C++ 코드를 직접 작성하고 컴파일 및 디버깅할 수 있습니다.',
    audiencesBadge: '적용 대상 분야',
    audiencesTitle: '누가 SciCalcX를 활용할 수 있나요?',
    audiencesSubtitle: '학술 연구, 공학 시뮬레이션, 소프트웨어 엔지니어링에 최적화된 설계.',
    audiences: [
      {
        icon: '🎓',
        title: '이공계 대학생 및 연구원',
        desc: '고가의 공학용 하드웨어 계산기 없이도 다변수 미적분 문제 풀이, 행렬식과 역행렬 검증, 통계적 분포 분석 및 과제 디버깅을 손쉽게 수행할 수 있습니다.',
      },
      {
        icon: '⚡',
        title: '시스템 및 임베디드 소프트웨어 개발자',
        desc: '32비트 하드웨어 레지스터 마스크 확인, 진법 변환(HEX, DEC, BIN), 개별 비트 플래그 토글, C/C++ 알고리즘 동작 확인을 브라우저에서 바로 처리합니다.',
      },
      {
        icon: '📊',
        title: '데이터 분석가 및 연구자',
        desc: '표본 및 모집단 분산 지표, 베셀 보정이 적용된 표준편차, 선형 회귀 방정식 산출 및 확률 분포 분석을 실시간 피드백으로 검증합니다.',
      },
      {
        icon: '📐',
        title: '수학 및 물리 학습자',
        desc: '2차원 데카르트 좌표계 그래프 시각화, 다항식의 근 및 변화율 분석, 투명한 공식과 단계별 예제를 통한 수치 적분의 직관적 이해를 돕습니다.',
      },
    ],
    pipelineBadge: '기술 파이프라인',
    pipelineTitle: 'SciCalcX 작동 원리',
    pipelineSubtitle: '신뢰할 수 있는 연산 결과를 제공하는 3단계 컴퓨팅 라이프사이클.',
    stages: [
      {
        stage: '1단계: 입력 및 토큰화',
        title: '어휘 분석 및 실시간 검증',
        desc: '입력된 수식, 행렬 요소, 데이터 배열을 로컬에서 개별 토큰으로 분해합니다. 괄호 유효성 및 문법 오류가 타이핑과 동시에 실시간 검증됩니다.',
      },
      {
        stage: '2단계: 알고리즘 연산',
        title: '결정론적 알고리즘 로컬 실행',
        desc: 'Shunting-Yard 알고리즘, 심슨 수치 적분, 베셀 보정 공식 등을 통해 브라우저의 JavaScript 엔진에서 계산이 즉시 수행됩니다. 코드 실행만 격리된 샌드박스로 전송됩니다.',
      },
      {
        stage: '3단계: 정밀도 보정',
        title: '엡실론 정제 및 서식 지정',
        desc: '부동소수점 정규화를 통해 계산 결과가 설정된 정규화 임계값 범위 내에 있을 경우 0.1 + 0.2와 같은 일반적인 10진수 연산 결과를 0.3으로 표시하여 미세한 내부 표현 오차를 줄입니다.',
      },
    ],
    privacyTitle: '철저한 개인정보 보호 및 편집 원칙',
    privacyText: 'SciCalcX는 사용자가 입력한 수학 방정식, 행렬 데이터, 통계 표본을 기록하거나 추적하지 않습니다. 계산 기록은 사용자의 브라우저 localStorage에만 로컬로 안전하게 저장됩니다. 모든 교육 문서와 공식은 직접 작성되었으며 표준 학술 문헌에 근거하여 검증되었습니다.',
    privacyLink: '개인정보 처리방침 보기',
    termsLink: '이용약관 보기',
    editorialLink: '편집 가이드라인 보기',
    tools: [
      {
        title: '공학용 계산기 (Scientific Calculator)',
        badge: '브라우저 로컬 연산',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '복합 수식 평가, DEG/RAD 삼각함수, 거듭제곱, 제곱근, 팩토리얼 및 실시간 문법 오류 검사.',
        icon: 'fx',
      },
      {
        title: '행렬 대수 스위트 (Matrix Algebra)',
        badge: '브라우저 로컬 연산',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '라플라스 여인수 전개를 통한 행렬식, 수반행렬을 이용한 역행렬, 행렬 곱셈 및 전치 연산 (최대 4×4).',
        icon: '⊞',
      },
      {
        title: '미적분학 스위트 (Calculus Suite)',
        badge: '브라우저 로컬 연산',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '대칭 중심 차분몫을 이용한 수치 미분 및 복합 심슨 1/3 공식(N=1000)을 이용한 정적분 연산.',
        icon: '∫',
      },
      {
        title: '2D 함수 그래프 (Function Grapher)',
        badge: '브라우저 로컬 연산',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '하드웨어 가속 HTML5 Canvas 데카르트 플로터. 동적 그리드 크기 조절 및 마우스 좌표 추적 지원.',
        icon: '📈',
      },
      {
        title: '기술 통계 분석기 (Descriptive Statistics)',
        badge: '브라우저 로컬 연산',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '산술 평균, 중앙값, 최빈값, 베셀 보정이 적용된 표본 분산 및 표준편차, 선형 회귀 분석.',
        icon: 'x̄',
      },
      {
        title: '프로그래머 비트보드 (Bitboard)',
        badge: '브라우저 로컬 연산',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: '동기화된 부호 있는 32비트 정수 레지스터(HEX, DEC, OCT, BIN)와 비트 마스킹 및 시프트 시뮬레이터.',
        icon: '01',
      },
      {
        title: 'Code Tutor & 온라인 컴파일러',
        badge: '격리된 원격 샌드박스',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Python 3, C, C++20 코드를 작성하고 안전한 컨테이너(Judge0 CE / Wandbox)에서 실행하며 실시간 오류를 진단합니다.',
        icon: '💻',
      },
    ],
  },
  it: {
    toolsTitle: 'Directory Computazionale ad Alta Precisione',
    toolsSubtitle: 'Seleziona una suite matematica specializzata o un ambiente di programmazione per iniziare.',
    launchTool: 'Avvia strumento',
    aboutBadge: 'Missione e Architettura',
    aboutTitle: 'Cos\'è SciCalcX?',
    aboutP1: 'SciCalcX è una piattaforma didattica ad alte prestazioni progettata per offrire analisi matematiche e computazionali rapide e affidabili direttamente nel browser moderno. I tradizionali strumenti online presentano spesso pubblicità invasive, paywall, lente comunicazioni con i server e algoritmi proprietari opachi. SciCalcX risolve queste criticità combinando motori di calcolo locali e metodologie numeriche trasparenti.',
    aboutP2: 'Tutti gli strumenti matematici di SciCalcX (Calcolatrice Scientifica, Algebra Matriciale, Analisi Matematica, Grafici 2D, Statistica Descrittiva e Bitboard per Programmatori) eseguono i loro calcoli localmente nel vostro browser. Con l\'aritmetica in virgola mobile IEEE-754 a doppia precisione, l\'integrazione numerica con regola di Simpson, lo sviluppo di Laplace e operazioni bit a bit native, l\'elaborazione matematica avviene direttamente sul vostro dispositivo senza inviare formule o dati a server remoti.',
    aboutP3: 'Per studenti di informatica e sviluppatori, SciCalcX include inoltre un ambiente integrato di Code Tutor & Compilatore Online. L\'esecuzione del codice è gestita tramite sandbox sicuri ed effimeri (Judge0 CE e Wandbox), permettendo di testare e correggere algoritmi in Python, C e C++ insieme ai propri modelli matematici. Gratuito, riservato e aperto a tutti.',
    audiencesBadge: 'Discipline di Riferimento',
    audiencesTitle: 'A Chi Si Rivolge SciCalcX?',
    audiencesSubtitle: 'Progettato per garantire la massima precisione in ambito accademico, ingegneristico e nello sviluppo software.',
    audiences: [
      {
        icon: '🎓',
        title: 'Studenti Universitari STEM',
        desc: 'Risolvi problemi di analisi matematica e algebra lineare, verifica determinanti e matrici inverse, calcola distribuzioni statistiche ed esercitati senza calcolatrici fisiche costose.',
      },
      {
        icon: '⚡',
        title: 'Sviluppatori Sistemi ed Embedded',
        desc: 'Esamina maschere di registro a 32 bit, converti notazioni di base (HEX, BIN, DEC), inverti singoli flag di bit e verifica routine in C/C++ direttamente dal browser.',
      },
      {
        icon: '📊',
        title: 'Analisti di Dati e Ricercatori',
        desc: 'Calcola indici di dispersione campionari e della popolazione, deviazione standard con correzione di Bessel, regressioni lineari e distribuzioni di probabilità con riscontro immediato.',
      },
      {
        icon: '📐',
        title: 'Studenti di Scuole Superiori (Matematica & Fisica)',
        desc: 'Visualizza curve cartesiane 2D, analizza radici di polinomi, tassi di variazione e approfondisci l\'integrazione numerica con formule chiare e passaggi guidati.',
      },
    ],
    pipelineBadge: 'Pipeline Tecnica',
    pipelineTitle: 'Come Funziona SciCalcX',
    pipelineSubtitle: 'Il ciclo computazionale in tre fasi che garantisce affidabilità e precisione.',
    stages: [
      {
        stage: 'FASE 1: INPUT E TOKENIZZAZIONE',
        title: 'Parsing Lessicale e Validazione',
        desc: 'Le formule matematiche, i valori matriciali e gli array di dati vengono analizzati localmente in token, con verifica immediata di parentesi e sintassi durante la digitazione.',
      },
      {
        stage: 'FASE 2: VALUTAZIONE',
        title: 'Algoritmi Deterministici',
        desc: 'I calcoli matematici vengono eseguiti nel motore JavaScript locale tramite Shunting-Yard, quadratura di Simpson e correzione di Bessel. Solo l\'esecuzione di codice viene instradata verso sandbox isolati.',
      },
      {
        stage: 'FASE 3: NORMALIZZAZIONE',
        title: 'Pulizia Epsilon e Formattazione',
        desc: 'La normalizzazione in virgola mobile consente di visualizzare i risultati decimali comuni come 0.1 + 0.2 nella forma 0.3 quando il valore calcolato rientra nella soglia di normalizzazione configurata, riducendo i piccoli artefatti di rappresentazione.',
      },
    ],
    privacyTitle: 'Il Nostro Impegno per la Privacy e il Rigore Editoriale',
    privacyText: 'SciCalcX non registra, non monetizza e non invia a terzi le vostre equazioni matematiche, matrici o serie di dati. La cronologia dei calcoli risiede unicamente nella memoria locale (localStorage) del vostro browser. Tutti i contenuti e gli esempi didattici sono di stesura originale e verificati rispetto ai testi accademici di riferimento.',
    privacyLink: 'Leggi l\'Informativa sulla Privacy',
    termsLink: 'Leggi i Termini di Servizio',
    editorialLink: 'Leggi le Linee Guida Editoriali',
    tools: [
      {
        title: 'Calcolatrice Scientifica',
        badge: 'Calcolo Lato Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Valutazione di espressioni su più righe, trigonometria in DEG e RAD, potenze, radici, fattoriali e controllo sintattico in tempo reale.',
        icon: 'fx',
      },
      {
        title: 'Algebra Lineare & Matrici',
        badge: 'Calcolo Lato Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Determinanti tramite sviluppo di Laplace, matrici inverse con matrice aggiunta, moltiplicazione e trasposizione fino a 4×4.',
        icon: '⊞',
      },
      {
        title: 'Suite di Analisi Matematica',
        badge: 'Calcolo Lato Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Differenziazione numerica con quozienti alle differenze centrali simmetriche e integrazione definita tramite la regola di Simpson 1/3.',
        icon: '∫',
      },
      {
        title: 'Grafici di Funzioni 2D',
        badge: 'Calcolo Lato Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Plotter cartesiano su Canvas HTML5 con accelerazione grafica, scala dinamica della griglia e tracciamento delle coordinate del cursore.',
        icon: '📈',
      },
      {
        title: 'Statistica Descrittiva',
        badge: 'Calcolo Lato Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Media aritmetica, mediana, moda, varianza campionaria con correzione di Bessel, deviazione standard e regressione lineare.',
        icon: 'x̄',
      },
      {
        title: 'Bitboard per Programmatori',
        badge: 'Calcolo Lato Client',
        badgeColor: 'text-brand-blue-neon border-brand-blue/30 bg-brand-blue/10',
        desc: 'Registri sincronizzati per interi a 32 bit (HEX, DEC, OCT, BIN) con griglia interattiva per operazioni di mascheramento e shift.',
        icon: '01',
      },
      {
        title: 'Tutor di Codice & Compilatore',
        badge: 'Sandbox Remoto Sicuro',
        badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
        desc: 'Compilazione interattiva di codice Python 3, C e C++20 in ambienti isolati (Judge0 CE / Wandbox) con diagnostica immediata.',
        icon: '💻',
      },
    ],
  },
};
