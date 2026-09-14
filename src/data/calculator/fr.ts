import type { CalculatorPedagogyData } from '../calculatorData';

export const frPedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Fondements Mathématiques',
    conceptTitle: 'Hiérarchie Algébrique et Systèmes de Nombres à Virgule Flottante',
    conceptDescription: [
      'Une calculatrice scientifique évalue les expressions mathématiques composées en respectant scrupuleusement la priorité des opérateurs, formalisée par PEMDAS ou BODMAS (Parenthèses, Exposants, Multiplication & Division, Addition & Soustraction). Lors de l\'évaluation de formules imbriquées telles que 3 + 4 × 2 / (1 - 5)^2, le moteur reporte l\'addition jusqu\'à ce que toutes les expressions entre parenthèses, puissances et multiplications soient calculées.',
      'Les microprocesseurs actuels exécutent les calculs en virgule flottante selon la norme IEEE 754 pour la double précision binaire (float64). Comme certaines fractions décimales (comme 0.1 ou 0.2) ont un développement infini en binaire, l\'arithmétique brute introduit d\'infimes écarts d\'arrondi (ex. 0.1 + 0.2 = 0.30000000000000004). SciCalcX applique un seuillage epsilon pour préserver des représentations décimales rigoureuses à 12 décimales.',
      'Les fonctions trigonométriques (sinus, cosinus, tangente) opèrent sur des mesures angulaires continues. Il est essentiel de savoir si vos données sont en radians (où 2π équivaut à 360°) ou en degrés sexagésimaux pour garantir l\'exactitude des calculs en physique, géométrie et ingénierie.'
    ],
    howToSteps: [
      'Sélectionnez l\'unité angulaire : Basculez le sélecteur DEG/RAD dans la barre d\'état pour choisir Degrés ou Radians.',
      'Saisissez votre expression : Tapez directement au clavier physique ou cliquez sur les touches à l\'écran.',
      'Utilisez des parenthèses pour regrouper les termes : Encadrez les numérateurs ou dénominateurs pour définir l\'ordre de calcul.',
      'Exécutez : Appuyez sur "=" ou sur la touche Entrée de votre clavier pour calculer l\'expression.',
      'Formatez l\'affichage : Utilisez la touche S-D pour basculer entre l\'affichage décimal et la fraction exacte.'
    ],
    formulas: [
      {
        title: 'Priorité des Opérateurs (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Les opérateurs de même rang sont évalués de gauche à droite, tandis que la négation unaire et les puissances s\'associent par la droite.'
      },
      {
        title: 'Conversion Degrés en Radians',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'Toutes les fonctions trigonométriques internes des processeurs calculent en radians. En mode DEG, SciCalcX convertit les degrés en radians avant le calcul.'
      },
      {
        title: 'Changement de Base Logarithmique',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'Le logarithme népérien (ln) utilise la base e ≈ 2.71828, alors que le logarithme décimal (log) utilise la base 10.'
      },
      {
        title: 'Normalisation de Précision Epsilon',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'Le seuillage epsilon élimine les artefacts d\'arrondi binaire IEEE-754 pour afficher des décimales nettes.'
      }
    ],
    workedExample: {
      title: 'Exemple Détaillé : Formule Composée Multi-Opérations',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Étape 1 : Trigonométrie', expression: 'sin(30°) = 0.5', note: 'En mode DEG, sin(30°) vaut 1/2' },
        { label: 'Étape 2 : Multiplication', expression: '4 × 0.5 = 2.0', note: 'Calcul du produit gauche' },
        { label: 'Étape 3 : Racine Carrée', expression: '√(25) = 5.0', note: 'Évaluation de la fonction radicale' },
        { label: 'Étape 4 : Exponentiation', expression: '2^3 = 8.0', note: 'Calcul de 2 au cube' },
        { label: 'Étape 5 : Somme & Soustraction', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Calcul linéaire de gauche à droite' }
      ],
      result: '-1',
      explanation: 'En suivant la priorité opératoire, les parenthèses, radicaux et puissances sont résolus avant l\'addition et la soustraction, donnant exactement -1.'
    },
    howItWorks: {
      title: 'Comment SciCalcX Calcule Vos Expressions Côté Client',
      paragraphs: [
        'SciCalcX utilise un moteur d\'analyse en deux étapes conçu en TypeScript côté client. Lors de la première étape (tokenisation lexicale), l\'entrée est découpée en jetons représentant nombres, variables, constantes (π, e), opérateurs (+, -, *, /, ^) et fonctions (sin, cos, tan, ln, log, sqrt).',
        'Dans la seconde étape, un parseur Shunting-Yard convertit la notation infixée en Notation Polonaise Inverse (NPI) à l\'aide de piles d\'opérateurs et d\'opérandes. Les parenthèses non appariées sont détectées avant l\'évaluation numérique.',
        'Enfin, une machine à pile NPI calcule la séquence avec des registres flottants float64 IEEE-754, appliquant la normalisation epsilon avant affichage.'
      ]
    },
    limitations: {
      title: 'Limites de Précision et Frontières Numériques',
      points: [
        'Dépassement de Capacité (Overflow) : Les nombres excédant ±1.7976931348623157 × 10³⁰⁸ dérivent vers Infinity.',
        'Sous-dépassement (Underflow) : Les valeurs non nulles inférieures à ±5.0 × 10⁻³²⁴ convergent vers 0.',
        'Restrictions de Domaine : La racine carrée d\'un nombre négatif ou ln(x) avec x ≤ 0 renvoie une erreur de domaine explicite.',
        'Singularités Trigonométriques : Les fonctions comme tan(90°) ou tan(270°) renvoient de très grands nombres finis ou un résultat indéfini en raison de l\'approximation de π/2.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Parenthèses Non Équilibrées : ex. Saisir "(2 + 3 * (4 - 1)"',
        fix: 'Vérifiez l\'indicateur de parenthèses en bas à gauche pour confirmer que chaque "(" est fermée par une ")".'
      },
      {
        mistake: 'Confusion Degrés / Radians : sin(90) donne 0.89399 au lieu de 1',
        fix: '0.89399 est sin(90 rad). Basculez en mode DEG en haut pour obtenir sin(90°) = 1.'
      },
      {
        mistake: 'Multiplication Implicite Ambiguë : Écrire "2(3+4)" sans signe de multiplication',
        fix: 'Utilisez un opérateur explicite : "2 * (3 + 4)" pour garantir une interprétation univoque.'
      }
    ],
    useCases: [
      {
        title: 'Physique & Cinématique',
        desc: 'Décomposition de vecteurs de force en composantes orthogonales avec sinus et cosinus et calcul de trajectoires paraboliques.'
      },
      {
        title: 'Génie Électrique',
        desc: 'Calcul d\'impédances réactives en courant alternatif, d\'angles de phase et de rapports logarithmiques en décibels (20 log(V_out / V_in)).'
      },
      {
        title: 'Calcul Académique & STEM',
        desc: 'Vérification de développements algébriques, de polynômes fractionnaires et modélisation de croissances exponentielles.'
      }
    ],
    relatedTools: [
      { title: 'Calculatrice de Matrices', desc: 'Résolvez des systèmes linéaires, déterminants et inverses matricielles.', href: '/matrix', badge: 'Algèbre Linéaire' },
      { title: 'Calculatrice d\'Analyse', desc: 'Calculez des intégrales définies par la méthode de Simpson et des dérivées.', href: '/calculus', badge: 'Analyse' },
      { title: 'Calculatrice Graphique', desc: 'Tracez des courbes 2D et analysez racines et asymptotes de façon dynamique.', href: '/graphing', badge: 'Géométrie' }
    ]
  },

  matrix: {
    conceptBadge: 'Fondements d\'Algèbre Linéaire',
    conceptTitle: 'Transformations Matricielles, Déterminants et Espaces Vectoriels',
    conceptDescription: [
      'Une matrice est un tableau rectangulaire d\'éléments numériques disposés en m lignes et n colonnes. En mathématiques et en informatique, les matrices représentent des applications linéaires qui étirent, font tourner, reflètent ou déforment des espaces vectoriels multidimensionnels.',
      'La multiplication matricielle est fondamentalement non commutative : pour deux matrices A et B, A × B n\'est généralement pas égal à B × A. De plus, elle requiert des dimensions intérieures compatibles : une matrice m × k ne peut multiplier qu\'une matrice k × n, produisant une matrice m × n.',
      'Le déterminant, det(A), est un scalaire associé aux matrices carrées. Géométriquement, il mesure le facteur d\'échelle par lequel une transformation modifie l\'aire (en 2D) ou le volume (en 3D). Une matrice est inversible si et seulement si son déterminant est non nul (det(A) ≠ 0).'
    ],
    howToSteps: [
      'Choisissez les dimensions : Utilisez les boutons 2x2 ou 3x3 pour la Matrice A et la Matrice B.',
      'Saisissez les coefficients : Renseignez les valeurs numériques (entiers ou décimaux) dans les cases correspondantes.',
      'Choisissez une opération : Cliquez sur Addition (A + B), Soustraction (A - B) ou Multiplication (A × B).',
      'Calculez des propriétés unaires : Cliquez sur Déterminant, Inverse ou Transposée sur la Matrice A.',
      'Consultez les étapes intermédiaires : Examinez les explications détaillées sous la grille de résultats.'
    ],
    formulas: [
      {
        title: 'Produit Matriciel',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Chaque entrée de la matrice produit C est le produit scalaire entre la ligne i de A et la colonne j de B.'
      },
      {
        title: 'Déterminant 2×2',
        math: '\\det(A) = ad - bc \\quad \\text{pour } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'Différence entre le produit de la diagonale principale et celui de l\'antidiagonale.'
      },
      {
        title: 'Développement de Laplace 3×3',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Développement le long de la première ligne avec alternance de signes et sous-déterminants 2×2.'
      },
      {
        title: 'Inverse Matricielle par la Comatrice',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'L\'inverse n\'existe que si det(A) ≠ 0. C\'est la transposée de la comatrice divisée par le déterminant.'
      }
    ],
    workedExample: {
      title: 'Exemple Détaillé : Inversion d\'une Matrice 2×2',
      input: 'Matrice A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Étape 1 : Déterminant', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, donc l\'inverse existe' },
        { label: 'Étape 2 : Échanger la Diagonale', expression: 'a ↔ d: [6, 4]', note: 'Intervertir A[0,0] et A[1,1]' },
        { label: 'Étape 3 : Nier l\'Antidiagonale', expression: 'b → -7, c → -2', note: 'Inverser le signe de A[0,1] et A[1,0]' },
        { label: 'Étape 4 : Matrice Adjointe', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Construction de la comatrice transposée' },
        { label: 'Étape 5 : Division Scalaire', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Multiplier chaque élément par 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Vérification : A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], la matrice identité 2×2.'
    },
    howItWorks: {
      title: 'Comment SciCalcX Traite les Matrices Côté Client',
      paragraphs: [
        'SciCalcX réalise tous les calculs matriciels directement dans votre navigateur via des tableaux typés JavaScript. Les entrées sont vérifiées numériquement, gérant négatifs et décimaux sans ralentissement.',
        'Pour les déterminants 2×2, la formule directe ad - bc est appliquée, tandis que les systèmes 3×3 utilisent le développement de Laplace. L\'inversion vérifie systématiquement la non-singularité (|det| < 1e-12) avant division.',
        'Les valeurs calculées subissent une normalisation epsilon pour éviter que des zéros théoriques ne s\'affichent sous forme de résidus comme 1e-16.'
      ]
    },
    limitations: {
      title: 'Limites de Précision et Contraintes en Algèbre Linéaire',
      points: [
        'Matrices Singulières : Si det(A) = 0, la matrice n\'est pas inversible. SciCalcX indique "Matrice Singulière (det = 0)".',
        'Systèmes Mal Conditionnés : Une matrice dont le déterminant est extrêmement proche de zéro peut subir une instabilité numérique.',
        'Dimensions Prises en Charge : Cet outil est optimisé pour les dimensions 2×2 et 3×3, courantes dans l\'enseignement supérieur et l\'imagerie 3D.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Considérer la Multiplication Matricielle comme Commutative (A × B = B × A)',
        fix: 'Le produit dépend de l\'ordre lignes par colonnes. En général, A × B ≠ B × A.'
      },
      {
        mistake: 'Tenter d\'Inverser une Matrice Singulière',
        fix: 'Vérifiez d\'abord le déterminant. Si det(A) = 0, les lignes sont liées et aucune inverse n\'existe.'
      },
      {
        mistake: 'Confondre Transposée et Inverse',
        fix: 'La transposée (Aᵀ) inverse lignes et colonnes. L\'inverse (A⁻¹) vérifie l\'égalité A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: 'Infographie et 3D',
        desc: 'Calcul des transformations modèle-vue-projection (MVP), des rotations de caméra et des matrices d\'échelle.'
      },
      {
        title: 'Systèmes d\'Équations Linéaires',
        desc: 'Résolution de systèmes Ax = b par inversion x = A⁻¹b ou par les formules de Cramer.'
      },
      {
        title: 'Réseaux Électriques & Structures',
        desc: 'Établissement des matrices de conductance nodale et des équations de mailles en génie électrique.'
      }
    ],
    relatedTools: [
      { title: 'Calculatrice Scientifique', desc: 'Effectuez des calculs scientifiques multilignes et conversions d\'angles.', href: '/', badge: 'Arithmétique' },
      { title: 'Calculatrice d\'Analyse', desc: 'Calculez des intégrales définies et dérivées numériques.', href: '/calculus', badge: 'Analyse' },
      { title: 'Suite Statistique', desc: 'Analysez distributions de données, variances et régressions linéaires.', href: '/statistics', badge: 'Science des Données' }
    ]
  },

  calculus: {
    conceptBadge: 'Analyse Mathématique',
    conceptTitle: 'Taux de Variation Différentiels et Quadrature Numérique',
    conceptDescription: [
      'Le calcul infinitésimal étudie les variations continues. Le calcul différentiel s\'intéresse aux taux instantanés de variation (dérivées, pentes des tangentes), tandis que le calcul intégral mesure l\'accumulation de grandeurs (intégrales, aire sous une courbe).',
      'Bien que la dérivation formelle fournisse des expressions analytiques, de nombreuses fonctions réelles ne possèdent pas de primitive élémentaire. Le calcul numérique estime ces grandeurs à l\'aide d\'algorithmes d\'échantillonnage discret à haute précision.',
      'SciCalcX intègre une quadrature d\'ordre 4 basée sur la méthode composite de Simpson 1/3 pour l\'intégration et des différences centrales symétriques pour la dérivation.'
    ],
    howToSteps: [
      'Saisissez votre fonction f(x) : Utilisez une syntaxe algébrique standard (ex. x^2, sin(x), e^x, 2*x + 1).',
      'Pour l\'Intégration Définie : Renseignez la borne inférieure (a) et supérieure (b), puis cliquez sur "Calculer l\'Intégrale".',
      'Pour la Dérivation Numérique : Indiquez le point d\'évaluation x₀ et cliquez sur "Calculer la Dérivée f\'(x₀)".',
      'Pour les Racines de Polynômes : Entrez les coefficients de polynômes de degré 2 ou 3 et cliquez sur "Trouver les Racines".',
      'Inspectez le résultat : Consultez les valeurs calculées et vérifiez d\'éventuelles discontinuités de domaine.'
    ],
    formulas: [
      {
        title: 'Quotient Différentiel Symétrique (Dérivée)',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'Évalue les différences centrales avec un pas h = 10⁻⁶, annulant les erreurs d\'ordre 2 pour une précision O(h²).'
      },
      {
        title: 'Règle de Simpson 1/3 Composite (Intégrale)',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ impair}} f(x_i) + 2\\sum_{i \\text{ pair}} f(x_i) + f(x_n) \\right]',
        explanation: 'Subdivise [a, b] en n = 1000 intervalles et approxime la fonction par des paraboles avec convergence d\'ordre 4 O(h⁴).'
      },
      {
        title: 'Formule Quadratique (Degré 2)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Le discriminant Δ = b² - 4ac détermine l\'existence de deux racines réelles (Δ > 0), d\'une racine double (Δ = 0) ou de racines complexes (Δ < 0).'
      },
      {
        title: 'Théorème Fondamental de l\'Analyse',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{où } F\'(x) = f(x)',
        explanation: 'Relie dérivation et intégration : l\'aire cumulée nette correspond à la variation de sa primitive.'
      }
    ],
    workedExample: {
      title: 'Exemple Détaillé : Intégrale Définie d\'une Courbe Parabolique',
      input: 'f(x) = x^2 sur l\'intervalle [0, 3]',
      steps: [
        { label: 'Primitive Analytique', expression: '∫ x² dx = x³ / 3 + C', note: 'Règle standard d\'intégration des puissances' },
        { label: 'Évaluation Borne Supérieure', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'Remplacer b = 3' },
        { label: 'Évaluation Borne Inférieure', expression: 'F(0) = 0³ / 3 = 0.0', note: 'Remplacer a = 0' },
        { label: 'Résultat Exact', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Aire nette sous la courbe' },
        { label: 'Sortie Simpson 1/3 SciCalcX', expression: 'n = 1000 intervalles, h = 0.003 ⟹ Résultat = 9.000000', note: 'Exact pour les polynômes jusqu\'au degré 3' }
      ],
      result: '9.000',
      explanation: 'Puisque la méthode de Simpson approxime par des arcs paraboliques, elle intègre les polynômes quadratiques avec une erreur de troncature nulle, atteignant exactement 9.'
    },
    howItWorks: {
      title: 'Comment SciCalcX Calcule l\'Analyse Côté Client',
      paragraphs: [
        'Dès la saisie de f(x), SciCalcX analyse la chaîne et génère un arbre syntaxique en Notation Polonaise Inverse compatible avec sin, cos, tan, exp, ln, log, sqrt et puissances.',
        'Pour l\'intégration définie, le moteur découpe [a, b] en n = 1000 intervalles avec un pas h = (b - a)/1000 et applique les coefficients de pondération (1, 4, 2, ..., 1) de la règle de Simpson.',
        'Pour la dérivation, il calcule f(x + h) et f(x - h) avec h = 10⁻⁶. La soustraction symétrique annule les erreurs linéaires pour fournir une pente numérique robuste.'
      ]
    },
    limitations: {
      title: 'Limites de Précision et Approximations Numériques',
      points: [
        'Points Non Dérivables : La dérivation suppose que f(x) est régulière. Sur des pointes comme f(x) = |x| en x = 0, la différence centrale produit une moyenne erronée.',
        'Asymptotes Verticales : Intégrer à travers des pôles (ex. 1/x de -1 à 1) provoque des instabilités numériques ou des divergences.',
        'Troncature du Pas : Bien que h = 10⁻⁶ soit optimal, un pas inférieur à 10⁻¹² engendre des erreurs d\'annulation en float64.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Inversion des Bornes d\'Intégration (Borne inférieure > Borne supérieure)',
        fix: 'Intégrer de b à a donne l\'opposé d\'intégrer de a à b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Utilisation de Variables Incompatibles (ex. taper f(t) au lieu de f(x))',
        fix: 'Le moteur calcule par rapport à la variable "x". Assurez-vous d\'employer "x" ou "X".'
      },
      {
        mistake: 'Attente d\'un Résultat Formel Symbolique',
        fix: 'SciCalcX calcule des valeurs numériques précises (ex. 3.14159) par quadrature et non par résolution symbolique.'
      }
    ],
    useCases: [
      {
        title: 'Physique et Travail Mécanique',
        desc: 'Calcul du travail mécanique W = ∫ F(x) dx quand la force varie continûment selon la position.'
      },
      {
        title: 'Probabilités et Densité Cumulée',
        desc: 'Calcul de fonctions de répartition (CDF) en intégrant des densités de probabilité sur des intervalles.'
      },
      {
        title: 'Traitement du Signal et Tension RMS',
        desc: 'Calcul des valeurs efficaces (RMS) de signaux périodiques alternatifs sur une période complète.'
      }
    ],
    relatedTools: [
      { title: 'Calculatrice Graphique', desc: 'Visualisez les courbes, extrema locaux et tangentes de manière interactive.', href: '/graphing', badge: 'Studio Cartésien' },
      { title: 'Calculatrice Scientifique', desc: 'Évaluez des formules trigonométriques et exponentielles à haute précision.', href: '/', badge: 'Arithmétique' },
      { title: 'Tuteur de Code & Compilateur', desc: 'Rédigez et exécutez des scripts de simulation numérique en Python et C++.', href: '/compiler', badge: 'Bac à Sable' }
    ]
  },

  graphing: {
    conceptBadge: 'Géométrie Analytique',
    conceptTitle: 'Tracé de Fonctions 2D et Analyse en Coordonnées Cartésiennes',
    conceptDescription: [
      'Une calculatrice graphique 2D convertit des équations algébriques en courbes géométriques sur un plan cartésien. En associant chaque x à sa valeur y = f(x), l\'utilisateur visualise la continuité, les racines, les extrema locaux et les asymptotes.',
      'Le tracé numérique repose sur un échantillonnage haute résolution. Le moteur échantillonne les coordonnées x sur la largeur en pixels de l\'écran, évalue f(x) et trace des segments de raccordement sur un canevas HTML5 Canvas.',
      'La détection des asymptotes verticales (comme dans tan(x) ou 1/x) représente un défi majeur. SciCalcX intègre un algorithme de détection de pente qui interrompt le tracé à travers les discontinuités infinies pour éviter les traits parasites.'
    ],
    howToSteps: [
      'Définissez la fonction f(x) : Saisissez une expression avec la variable x (ex. x^2 - 4, sin(x), e^(-x^2)).',
      'Ajoutez une seconde courbe g(x) : Facultatif pour comparer deux fonctions et repérer leurs intersections.',
      'Ajustez la vue : Utilisez les boutons de zoom (+ / -) ou glissez à la souris/au doigt pour translater le plan.',
      'Consultez les indicateurs : Consultez le panneau pour repérer les zéros (racines), ordonnées à l\'origine et extrema.',
      'Réinitialisez la vue : Cliquez sur "Réinitialiser" pour revenir au cadre par défaut [-10, 10].'
    ],
    formulas: [
      {
        title: 'Mappage Pixels vers Coordonnées Cartésiennes',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Convertit la colonne de pixel px (de 0 à la largeur) en coordonnée x mathématique continue.'
      },
      {
        title: 'Conversion Cartésienne vers Pixels d\'Écran',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Le canevas HTML5 mesurant les ordonnées vers le bas, l\'axe y est inversé pour correspondre au repère conventionnel.'
      },
      {
        title: 'Condition de Point Critique (Extrema)',
        math: 'f\'(x) = 0 \\quad \\text{et} \\quad f\'\'(x) \\neq 0',
        explanation: 'Un maximum local survient quand f\'(x) = 0 et f\'\'(x) < 0 ; un minimum quand f\'(x) = 0 et f\'\'(x) > 0.'
      },
      {
        title: 'Seuil de Pente pour Discontinuité',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Lever le Pinceau}',
        explanation: 'Supprime les segments reliant artificiellement deux branches d\'une asymptote verticale.'
      }
    ],
    workedExample: {
      title: 'Exemple Détaillé : Analyse Complète de la Parabole f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Ordonnée à l\'Origine', expression: 'f(0) = 0² - 4 = -4', note: 'Coordonnées : (0, -4)' },
        { label: 'Racines (Intersections x)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Coordonnées : (-2, 0) et (2, 0)' },
        { label: 'Dérivée Première f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'Un point stationnaire en x = 0' },
        { label: 'Dérivée Seconde f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Courbure positive indiquant un minimum global' },
        { label: 'Sommet & Extremum Global', expression: 'Minimum en (0, -4)', note: 'Parabole ouverte vers le haut d\'axe x = 0' }
      ],
      result: 'Racines en x = -2, 2 ; Sommet en (0, -4)',
      explanation: 'SciCalcX affiche la courbe parabolique continue, mettant en évidence son sommet en (0, -4) et ses zéros en x = -2 et x = 2.'
    },
    howItWorks: {
      title: 'Comment SciCalcX Trace les Courbes Côté Client',
      paragraphs: [
        'SciCalcX exploite l\'élément HTML5 Canvas en 2D native sans recourir à de lourdes bibliothèques tierces, assurant une fluidité immédiate lors des zooms et déplacements.',
        'Pour chaque colonne de pixels, le moteur convertit les coordonnées d\'écran en valeurs x, évalue l\'expression via sa pile NPI et reporte les ordonnées calculées.',
        'En présence de sauts verticaux excessifs ou de changement de signe sur des bornes infinies, le tracé s\'interrompt automatiquement pour éviter les raccords fictifs.'
      ]
    },
    limitations: {
      title: 'Limites de Résolution et Discrétisation Graphique',
      points: [
        'Résolution par Pixel : Les motifs plus fins qu\'un pixel d\'écran ne peuvent être visualisés sans zoomer.',
        'Oscillations à Haute Fréquence : Les fonctions comme sin(1/x) près de 0 oscillent plus vite que l\'échantillonnage, provoquant des effets d\'aliasing.',
        'Fenêtres Extrêmes : Dézoomer au-delà de 10¹⁰ ou zoomer en dessous de 10⁻¹² atteint les limites de précision de la norme IEEE-754.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Omission de Parenthèses dans les Fractions (ex. taper "1/x+1")',
        fix: '"1/x+1" équivaut à (1/x) + 1. Saisissez "1/(x+1)" pour décaler l\'asymptote en x = -1.'
      },
      {
        mistake: 'Fonction Située Hors du Champ de Vision',
        fix: 'Si la courbe n\'apparaît pas, cliquez sur "Dézoomer" ou vérifiez l\'ordre de grandeur des valeurs de f(x).'
      },
      {
        mistake: 'Constantes Incompatibles',
        fix: 'Utilisez "pi" ou "π" pour la constante d\'Archimède, et "e" pour le nombre d\'Euler.'
      }
    ],
    useCases: [
      {
        title: 'Étude de Fonctions Polynomiales',
        desc: 'Vérification de racines, points d\'inflexion et sens de variation pour les devoirs de mathématiques.'
      },
      {
        title: 'Formes d\'Ondes Trigonométriques',
        desc: 'Visualisation de modulation d\'amplitude, harmoniques (sin(2x)) et déphasages en acoustique et physique.'
      },
      {
        title: 'Économie et Optimisation',
        desc: 'Tracé de courbes de coût, de revenu et de bénéfice pour situer le seuil de rentabilité et l\'optimum de production.'
      }
    ],
    relatedTools: [
      { title: 'Calculatrice d\'Analyse', desc: 'Calculez des dérivées et des intégrales de Simpson précises.', href: '/calculus', badge: 'Analyse' },
      { title: 'Calculatrice Scientifique', desc: 'Évaluez des rapports trigonométriques et des logarithmes en degrés ou radians.', href: '/', badge: 'Arithmétique' },
      { title: 'Suite Statistique', desc: 'Calculez variance, écart-type et régressions linéaires.', href: '/statistics', badge: 'Science des Données' }
    ]
  },

  statistics: {
    conceptBadge: 'Science des Données & Probabilités',
    conceptTitle: 'Statistique Descriptive, Tendance Centrale et Variance Échantillonnaire',
    conceptDescription: [
      'La statistique descriptive synthétise et quantifie les propriétés majeures d\'un ensemble d\'observations numériques. Au lieu de manipuler des centaines de valeurs brutes, les chercheurs utilisent des indicateurs de position (moyenne, médiane, mode) et de dispersion (étendue, variance, écart-type).',
      'Une distinction essentielle réside entre une population complète et un échantillon représentatif. Lors du calcul de la variance d\'un échantillon, diviser la somme des écarts quadratiques par N sous-estime systématiquement la variance réelle de la population.',
      'Pour corriger ce biais, la correction de Bessel utilise N - 1 degrés de liberté pour la variance échantillonnaire (s²). SciCalcX calcule conjointement les métriques d\'échantillon (s², s) et de population (σ², σ) pour vos rapports de laboratoire et travaux académiques.'
    ],
    howToSteps: [
      'Saisissez votre jeu de données : Entrez les nombres séparés par des virgules, espaces ou retours à la ligne.',
      'Cliquez sur "Charger Données d\'Exemple" : Utilisez ce bouton pour tester rapidement un échantillon préconfiguré.',
      'Consultez la Tendance Centrale : Observez la Moyenne, Médiane et Mode dans la grille principale.',
      'Analysez la Dispersion : Examinez l\'Étendue, la Variance d\'Échantillon (s²), la Variance de Population (σ²) et l\'Écart-Type.',
      'Enregistrez dans l\'Historique : Cliquez sur "Sauvegarder l\'analyse" pour conserver localement vos métriques.'
    ],
    formulas: [
      {
        title: 'Moyenne Arithmétique',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'Le barycentre des données, obtenu en divisant la somme totale des valeurs par l\'effectif n.'
      },
      {
        title: 'Variance d\'Échantillon (Correction de Bessel)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Divise par n - 1 degrés de liberté pour fournir un estimateur non biaisé de la variance de la population.'
      },
      {
        title: 'Variance de Population',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Appliquée lorsque le jeu de données couvre l\'intégralité de la population étudiée.'
      },
      {
        title: 'Écart-Type',
        math: 's = \\sqrt{s^2} \\quad \\text{et} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'Racine carrée de la variance, exprimant la dispersion dans l\'unité de mesure d\'origine.'
      }
    ],
    workedExample: {
      title: 'Exemple Détaillé : Variance d\'Échantillon pour [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Données : 2, 4, 4, 4, 5, 5, 7, 9  (n = 8)',
      steps: [
        { label: 'Étape 1 : Somme et Moyenne', expression: 'Somme = 40 ⟹ Moyenne x̄ = 40 / 8 = 5.0', note: 'La valeur moyenne est 5.0' },
        { label: 'Étape 2 : Écarts (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Soustraire la moyenne à chaque terme' },
        { label: 'Étape 3 : Écarts au Carré', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Élever chaque écart au carré' },
        { label: 'Étape 4 : Somme des Carrés', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Somme cumulée des carrés des écarts' },
        { label: 'Étape 5 : Variance Échantillon (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Division par n - 1 = 7 (correction de Bessel)' },
        { label: 'Étape 6 : Écart-Type Échantillon (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Racine carrée de la variance d\'échantillon' }
      ],
      result: 'Moyenne = 5.0, Médiane = 4.5, Mode = 4, Variance s² ≈ 4.5714, Variance Pop σ² = 4.0',
      explanation: 'Remarquez la différence : la variance de population divise par 8 (= 4.0), alors que la variance d\'échantillon divise par 7 (≈ 4.5714) pour corriger le biais statistique.'
    },
    howItWorks: {
      title: 'Comment SciCalcX Calcule les Statistiques Côté Client',
      paragraphs: [
        'SciCalcX traite la saisie avec une expression régulière découpant virgules, espaces et retours chariot, convertissant les nombres en flottants float64 double précision.',
        'Les données sont ordonnées pour identifier la médiane (valeur centrale pour un effectif impair ou moyenne des deux valeurs centrales pour un effectif pair) et le mode par tableau de fréquences.',
        'La somme des écarts quadratiques s\'effectue en deux passes : la première détermine la moyenne exacte et la seconde accumule (x - x̄)², évitant les annulations numériques des calculs en passe unique.'
      ]
    },
    limitations: {
      title: 'Limites de Précision et Hypothèses Statistiques',
      points: [
        'Taille Minimale d\'Échantillon : La variance d\'échantillon requiert au moins deux observations (n ≥ 2), une division par n - 1 avec n = 1 provoquant une division par zéro.',
        'Sensibilité aux Valeurs Aberrantes : La moyenne et la variance sont sensibles aux extrêmes. Pour les distributions très asymétriques, la médiane est plus robuste.',
        'Séries Multimodales : Si plusieurs valeurs affichent la même fréquence maximale, le calculateur liste tous les modes séparés par des virgules.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Utiliser la Variance de Population (σ²) au Lieu de la Variance d\'Échantillon (s²) en TP',
        fix: 'Les données d\'expériences de laboratoire représentent presque toujours des échantillons. Appliquez s² avec la correction n - 1.'
      },
      {
        mistake: 'Confondre les Unités de la Variance et de l\'Écart-Type',
        fix: 'La variance est en unités au carré (ex. mètres²) ; l\'écart-type conserve les unités d\'origine (mètres).'
      },
      {
        mistake: 'Penser qu\'une Variance Nulle Signifie des Valeurs Égales à Zéro',
        fix: 'Une variance nulle indique que toutes les données sont identiques (ex. [5, 5, 5]), pas qu\'elles valent zéro.'
      }
    ],
    useCases: [
      {
        title: 'Erreurs Expérimentales en Laboratoire',
        desc: 'Quantification des incertitudes, dispersion des mesures et erreurs aléatoires en physique et chimie.'
      },
      {
        title: 'Contrôle Qualité et Six Sigma',
        desc: 'Surveillance des tolérances d\'usinage et de la variabilité des processus industriels.'
      },
      {
        title: 'Risque Financier et Volatilité',
        desc: 'Analyse de la dispersion des rendements et calcul de l\'écart-type historique des actifs financiers.'
      }
    ],
    relatedTools: [
      { title: 'Calculatrice Scientifique', desc: 'Réalisez des calculs scientifiques multilignes et puissances.', href: '/', badge: 'Arithmétique' },
      { title: 'Calculatrice d\'Analyse', desc: 'Intégrez des fonctions de densité de probabilité continues.', href: '/calculus', badge: 'Analyse' },
      { title: 'Calculatrice Graphique', desc: 'Tracez des distributions et des courbes fonctionnelles sur grille cartésienne.', href: '/graphing', badge: 'Cartésien' }
    ]
  },

  programming: {
    conceptBadge: 'Architecture des Ordinateurs & Systèmes',
    conceptTitle: 'Systèmes Numériques en Base-N, Registres Visuels et Arithmétique Signée 32 Bits',
    conceptDescription: [
      'Le matériel informatique exécute ses instructions exclusivement en binaire (base 2). Pour rendre ces suites de bits lisibles pour les développeurs, l\'informatique emploie l\'hexadécimal (base 16) et l\'octal (base 8), regroupant les bits en quartets (nibbles de 4 bits) et octets (8 bits).',
      'Les microprocesseurs actuels représentent les entiers négatifs au moyen du complément à deux. Sur un entier signé de 32 bits (int32), le bit de poids fort (bit 31) indique le signe : 0 pour les positifs ou nuls, et 1 pour les négatifs. Inverser tous les bits et ajouter 1 permet à l\'additionneur de réaliser à la fois additions et soustractions.',
      'SciCalcX intègre un visualisateur de 32 bits interactif permettant d\'activer ou désactiver chaque bit individuellement du bit 31 au bit 0, avec mise à jour en temps réel des valeurs en hexadécimal, décimal, octal et binaire.'
    ],
    howToSteps: [
      'Sélectionnez la base active : Cliquez sur la ligne souhaitée (HEX, DEC, OCT ou BIN) pour en faire la zone de saisie principale.',
      'Entrez une valeur : Saisissez des caractères numériques ou hexadécimaux (A-F) au clavier ou via le pavé numérique.',
      'Activez/désactivez les bits : Cliquez sur les cases de bits (0 à 31) pour modifier leur état et observer la conversion décimale.',
      'Appliquez des opérateurs logiques : Cliquez sur NOT (~), LSH (<<) ou RSH (>>) pour transformer les bits instantanément.',
      'Basculez le signe : Utilisez la touche "+/-" pour visualiser l\'inversion signée en complément à deux.'
    ],
    formulas: [
      {
        title: 'Décomposition Positionnelle en Base-N',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Tout nombre est la somme de ses chiffres pondérés par les puissances de la base b (b = 2, 8, 10 ou 16).'
      },
      {
        title: 'Inversion en Complément à Deux',
        math: '-x = (\\sim x) + 1',
        explanation: 'Inverse l\'ensemble des 32 bits (complément à un) et incrémente de 1 le bit de poids faible.'
      },
      {
        title: 'Opérateurs Logiques Bit à Bit',
        math: 'A \\& B \\text{ (ET)}, \\quad A \\mid B \\text{ (OU)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'ET renvoie 1 si les deux bits valent 1 ; OU renvoie 1 si au moins un bit vaut 1 ; XOR renvoie 1 s\'ils diffèrent.'
      },
      {
        title: 'Décalages Arithmétiques de Bits',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{et} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'Décaler de k bits à gauche multiplie par 2ᵏ ; décaler à droite divise par 2ᵏ (avec arrondi vers moins l\'infini).'
      }
    ],
    workedExample: {
      title: 'Exemple Détaillé : NOT Bit à Bit et Complément à Deux de 42',
      input: 'Valeur Décimale = 42',
      steps: [
        { label: 'Étape 1 : Représentation Binaire', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bits 5, 3 et 1 à l\'état haut (32 + 8 + 2 = 42)' },
        { label: 'Étape 2 : Équivalent Hexadécimal', expression: 'Hex = 0x0000002A', note: '2 dans le quartet haut, A (=10) dans le quartet bas' },
        { label: 'Étape 3 : NOT Bit à Bit (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Chaque 0 devient 1 et chaque 1 devient 0' },
        { label: 'Étape 4 : Interprétation Signée 32 Bits', expression: '~42 = -43 en décimal (Complément à Deux)', note: 'Formule : ~x = -(x + 1)' },
        { label: 'Étape 5 : Décalage à Gauche (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'Décalage d\'une position vers la gauche (multiplication par 2)' }
      ],
      result: 'Décimal 42 = Hex 2A = Bin 101010₂ ; ~42 = -43',
      explanation: 'SciCalcX synchronise les 32 bits sur le registre visuel, illustrant la conversion immédiate entre motifs binaires et entiers signés négatifs.'
    },
    howItWorks: {
      title: 'Comment SciCalcX Gère la Logique 32 Bits Côté Client',
      paragraphs: [
        'Les opérateurs bit à bit de JavaScript (|, &, ^, ~, <<, >>) convertissent automatiquement les opérandes en entiers signés de 32 bits au format complément à deux avant tout calcul.',
        'SciCalcX maintient un état interne int32. Lorsqu\'un bit ou un opérateur est actionné, la valeur se met à jour et des masques ((val >>> bit) & 1) actualisent l\'affichage des 32 boutons du bit 31 au bit 0.',
        'Les conversions en chaînes hexadécimales, décimales, octales et binaires s\'opèrent localement dans le navigateur pour une expérience instantanée fidèle à l\'architecture processeur.'
      ]
    },
    limitations: {
      title: 'Limites de Précision et Bornes d\'Entiers',
      points: [
        'Plage Signée 32 Bits : Opère strictement entre -2 147 483 648 (-2³¹) et +2 147 483 647 (+2³¹ - 1).',
        'Comportement en Débordement : Incrémenter au-delà de +2 147 483 647 reboucle vers les valeurs négatives (-2 147 483 648), conformément aux architectures CPU.',
        'Décalage Circulaire : Tout décalage par un multiple de 32 reboucle (ex. x << 32 équivaut à x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Croire que le Décalage Signé (>>) Remplit avec des Zéros pour les Négatifs',
        fix: 'Le décalage arithmétique (>>) conserve le bit de signe (remplit avec des 1). Le décalage non signé (>>>) remplit avec des 0.'
      },
      {
        mistake: 'Confondre NOT Bit à Bit (~) et NOT Logique (!)',
        fix: 'Le NOT bit à bit inverse tous les 32 bits (~0 = -1). Le NOT logique évalue la véracité booléenne.'
      },
      {
        mistake: 'Saisir des Caractères Invalides pour la Base Active (ex. "8" en Octal)',
        fix: 'L\'octal n\'accepte que les chiffres de 0 à 7 ; le binaire 0 et 1 ; l\'hexadécimal les chiffres de 0 à 9 et lettres de A à F.'
      }
    ],
    useCases: [
      {
        title: 'Systèmes Embarqués & Microcontrôleurs',
        desc: 'Inspection des registres matériels, des masques de broches GPIO et des champs de bits sur microcontrôleurs.'
      },
      {
        title: 'Décodage d\'En-têtes Réseau',
        desc: 'Masquage et décalage de paquets IP/TCP pour extraire ports de communication, fanions et masques de sous-réseau.'
      },
      {
        title: 'Développement de Jeux & Optimisation',
        desc: 'Utilisation d\'échiquiers binaires (bitboards) ou de masques de collision évalués en un seul cycle d\'instruction.'
      }
    ],
    relatedTools: [
      { title: 'Tuteur de Code & Compilateur', desc: 'Rédigez, compilez et testez des algorithmes bit à bit en C++ et Python.', href: '/compiler', badge: 'Bac à Sable' },
      { title: 'Calculatrice Scientifique', desc: 'Effectuez des calculs scientifiques multilignes et des puissances.', href: '/', badge: 'Arithmétique' },
      { title: 'Calculatrice de Matrices', desc: 'Calculez des déterminants d\'algèbre linéaire et opérations matricielles.', href: '/matrix', badge: 'Algèbre Linéaire' }
    ]
  }
};
