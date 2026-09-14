import type { SupportedLanguage } from '../ui';

export interface HandbookSection {
  title: string;
  paragraphs: string[];
  formula?: string;
  note?: string;
}

export interface HandbookData {
  badge: string;
  title: string;
  sections: HandbookSection[];
  recommendationTitle: string;
  recommendationDesc: string;
  recommendationAction: string;
  recommendationHref: string;
}

export const handbooks: Record<SupportedLanguage, Record<string, HandbookData>> = {
  en: {
    scientific: {
      badge: 'Technical Reference',
      title: 'Advanced Scientific Computation & Multi-line Precision Guide',
      sections: [
        {
          title: 'Floating-Point Precision and Decimal Sanitization',
          paragraphs: [
            'Scientific calculation requires rigorous numerical precision. Digital microprocessors execute mathematical operations using double-precision binary floats under the IEEE 754 standard. Because certain base-10 fractions (such as 0.1 or 0.2) cannot be represented finitely in binary, standard engines inevitably introduce minute round-off artifacts (such as 0.30000000000000004).',
            'SciCalcX implements custom epsilon-threshold sanitization and decimal normalization algorithms. Every intermediate accumulator operation is verified against high-precision bounds, delivering an advanced web calculator experience with an exact free online fraction calculator mode.',
          ],
        },
        {
          title: 'Operator Precedence and Mathematical Expression Solver',
          paragraphs: [
            'All input expressions follow strict mathematical algebraic hierarchy (PEMDAS/BODMAS): Parentheses, Exponents and Radicals, Multiplication and Division (evaluated left-to-right), followed by Addition and Subtraction.',
            'Our multi-line engineering calculator engine inspects matching brackets in real-time, providing an interactive mathematical expression solver that halts unbalanced parenthesis before numerical evaluation occurs.',
          ],
        },
      ],
      recommendationTitle: 'Scientific Matrix Computing',
      recommendationDesc: 'Need linear systems or determinant evaluations? Open our dedicated matrix engine.',
      recommendationAction: 'Open Scientific Matrix Calculator →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Linear Algebra',
      title: 'Scientific Matrix Computing & System Solver Guide',
      sections: [
        {
          title: 'Determinant Computation via Laplace Cofactor Expansion',
          paragraphs: [
            'The determinant is a scalar value characterizing a square matrix. It indicates whether a linear system of equations has a unique solution. A determinant of zero signifies a singular (non-invertible) matrix.',
            'For 2x2 and 3x3 matrices, Laplace expansion multiplies each row element by its signed minor determinant, computing the exact scaling factor of the linear transformation.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
        {
          title: 'Invertibility and Matrix Adjugate Computation',
          paragraphs: [
            'A matrix inverse exists if and only if det(A) ≠ 0. The inverse is calculated by dividing the transposed matrix of cofactors (the adjugate matrix) by the determinant.',
          ],
          formula: 'A⁻¹ = (1 / det(A)) · adj(A)',
        },
      ],
      recommendationTitle: 'Web-based Calculus Calculator',
      recommendationDesc: 'Solve continuous derivatives, integrals, and limits alongside discrete algebra.',
      recommendationAction: 'Open Web-based Calculus Calculator →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Analysis & Rates',
      title: 'Web-based Calculus Solver & Numerical Methods Guide',
      sections: [
        {
          title: 'Numerical Differentiation via Symmetric Difference Quotient',
          paragraphs: [
            'Evaluating derivatives numerically avoids analytical differentiation bottlenecks. SciCalcX computes rate of change using central symmetric difference quotients with high-order precision.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
        {
          title: 'Definite Integration via Simpson\'s Composite Rule',
          paragraphs: [
            'Definite integrals are evaluated by approximating the curve with parabolic segments over N subintervals, achieving fourth-order convergence precision.',
          ],
          formula: '∫[a,b] f(x)dx ≈ (h/3) [ f(x₀) + 4∑f(x_odd) + 2∑f(x_even) + f(x_n) ]',
        },
      ],
      recommendationTitle: 'Online Graphing Derivative Calculator',
      recommendationDesc: 'Inspect slope tangents, local extrema, and curves with dynamic 2D plotting.',
      recommendationAction: 'Open Online Graphing Derivative Calculator →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Analytical Geometry',
      title: 'Online Graphing Derivative & 2D Curve Studio Handbook',
      sections: [
        {
          title: 'Sampling Resolution and Discontinuity Handling',
          paragraphs: [
            'Graphing functions with asymptotic behavior (like tan(x) or 1/x) requires dynamic sampling. The engine calculates derivative gradients to detect infinite jumps and suppress invalid vertical lines.',
          ],
        },
      ],
      recommendationTitle: 'Base-N Calculator for Programmers',
      recommendationDesc: 'Working with binary data, memory addresses, or bitwise logic? Switch to Base-N.',
      recommendationAction: 'Open Base-N Calculator for Programmers →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Binary Systems',
      title: 'Base-N Calculator for Programmers & Bitwise Logic Handbook',
      sections: [
        {
          title: 'Two\'s Complement and Signed Integer Representation',
          paragraphs: [
            'Digital logic handles negative numbers via two’s complement. Inverting bits and adding one enables identical addition circuitry to handle both positive and negative values seamlessly.',
          ],
        },
      ],
      recommendationTitle: 'AI Code Tutor Platform',
      recommendationDesc: 'Run, debug, and learn C++, C, and Python algorithms in your browser.',
      recommendationAction: 'Open AI Code Tutor Platform →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Data Science',
      title: 'Descriptive Statistics & Linear Regression Handbook',
      sections: [
        {
          title: 'Variance and Bessel\'s Correction',
          paragraphs: [
            'When evaluating data samples, standard variance formulas dividing by N underestimate the true population variance. Bessel\'s correction uses N - 1 degrees of freedom to produce an unbiased sample variance estimator s².',
          ],
        },
      ],
      recommendationTitle: 'Statistical Distributions Reference',
      recommendationDesc: 'Master data analysis, standard errors, and hypothesis testing algorithms.',
      recommendationAction: 'Explore Articles →',
      recommendationHref: '/blog',
    },
  },
  es: {
    scientific: {
      badge: 'Referencia Técnica',
      title: 'Guía de Calculadora Científica Online y Computación Avanzada',
      sections: [
        {
          title: 'Calculadora Web Avanzada y Precisión de Coma Flotante',
          paragraphs: [
            'Esta calculadora científica online ofrece una arquitectura de alta precisión para estudiantes y profesionales. Los microprocesadores ejecutan operaciones mediante punto flotante IEEE 754, lo que puede causar pequeños artefactos de redondeo (como 0.30000000000000004).',
            'SciCalcX implementa algoritmos de normalización por umbral épsilon y una calculadora de fracciones gratuita en línea, garantizando resultados exactos en modo decimal o fraccionario sin pérdidas de precisión.',
          ],
        },
        {
          title: 'Calculadora de Ingeniería Multilínea y Solucionador de Expresiones',
          paragraphs: [
            'Como calculadora de ingeniería multilínea, el visor superior muestra la expresión completa mientras el acumulador inferior presenta el resultado inmediato. Funciona como un potente solucionador de expresiones matemáticas respetando estrictamente la jerarquía PEMDAS.',
            'El analizador léxico valida paréntesis anidados en tiempo real para evitar errores sintácticos antes del cómputo final.',
          ],
        },
      ],
      recommendationTitle: 'Calculadora de Matrices Científica',
      recommendationDesc: 'Resuelve sistemas lineales, determinantes e inversas con nuestro módulo especializado.',
      recommendationAction: 'Abrir Calculadora de Matrices Científica →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Álgebra Lineal',
      title: 'Guía de la Calculadora de Matrices Científica y Sistemas Lineales',
      sections: [
        {
          title: 'Cálculo de Determinantes mediante Expansión de Laplace',
          paragraphs: [
            'Nuestra calculadora de matrices científica calcula determinantes de matrices 2x2 y 3x3 mediante el método de cofactores de Laplace, verificando si el sistema de ecuaciones posee solución única o es singular.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
        {
          title: 'Matriz Inversa y Matriz Adjunta',
          paragraphs: [
            'La matriz inversa existe si det(A) ≠ 0. Se obtiene transponiendo la matriz de cofactores y dividiéndola entre el determinante escalar.',
          ],
          formula: 'A⁻¹ = (1 / det(A)) · adj(A)',
        },
      ],
      recommendationTitle: 'Calculadora de Cálculo Basada en Web',
      recommendationDesc: 'Calcula derivadas numéricas, integrales definidas y límites con curvas interactivas.',
      recommendationAction: 'Abrir Calculadora de Cálculo Basada en Web →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Análisis Matemático',
      title: 'Manual de la Calculadora de Cálculo Basada en Web',
      sections: [
        {
          title: 'Derivación Numérica y Solucionador de Expresiones Matemáticas',
          paragraphs: [
            'La calculadora de cálculo basada en web opera como un solucionador de expresiones matemáticas para evaluar derivadas instantáneas con cocientes de diferencias simétricas de alta precisión.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
        {
          title: 'Integración Definida mediante Regla Compuesta de Simpson',
          paragraphs: [
            'Las integrales definidas se aproximan ajustando arcos parabólicos con precisión de cuarto orden en los intervalos de integración.',
          ],
          formula: '∫[a,b] f(x)dx ≈ (h/3) [ f(x₀) + 4∑f(x_impar) + 2∑f(x_par) + f(x_n) ]',
        },
      ],
      recommendationTitle: 'Calculadora de Derivadas Gráficas en Línea',
      recommendationDesc: 'Grafica funciones en 2D e inspecciona tangentes, raíces y asíntotas en tiempo real.',
      recommendationAction: 'Abrir Calculadora de Derivadas Gráficas en Línea →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Geometría Cartesiana',
      title: 'Manual de la Calculadora de Derivadas Gráficas en Línea',
      sections: [
        {
          title: 'Trazado de Curvas 2D y Detección de Discontinuidades',
          paragraphs: [
            'Nuestra calculadora de derivadas gráficas en línea muestrea dinámicamente las funciones para detectar asíntotas verticales y cambios de signo en derivadas.',
          ],
        },
      ],
      recommendationTitle: 'Calculadora Base-N para Programadores',
      recommendationDesc: 'Conversión rápida entre binario, hexadecimal, octal y operaciones lógicas bitwise.',
      recommendationAction: 'Abrir Calculadora Base-N para Programadores →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Sistemas Binarios',
      title: 'Manual de la Calculadora Base-N para Programadores',
      sections: [
        {
          title: 'Complemento a Dos y Operaciones Lógicas Bitwise',
          paragraphs: [
            'La calculadora base-n para programadores permite manipular registros de 64 bits con operaciones AND, OR, XOR, NOT y conversiones entre bases.',
          ],
        },
      ],
      recommendationTitle: 'Plataforma de Tutor de Código de IA',
      recommendationDesc: 'Aprende y depura código C++, C y Python con asistencia inteligente.',
      recommendationAction: 'Abrir Plataforma de Tutor de Código de IA →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Ciencia de Datos',
      title: 'Manual de Estadística Descriptiva y Regresión Lineal',
      sections: [
        {
          title: 'Varianza y Corrección de Bessel',
          paragraphs: [
            'Al dividir por N - 1 grados de libertad, se obtiene una estimación no sesgada de la varianza poblacional.',
          ],
        },
      ],
      recommendationTitle: 'Artículos de Algoritmos y Matemáticas',
      recommendationDesc: 'Aprende sobre estructuras de datos, métodos numéricos y complejidad algorítmica.',
      recommendationAction: 'Explorar Artículos →',
      recommendationHref: '/blog',
    },
  },
  fr: {
    scientific: {
      badge: 'Référence Technique',
      title: 'Guide de Calculatrice Scientifique en Ligne & Précision Multi-ligne',
      sections: [
        {
          title: 'Calculatrice Web Avancée et Précision Virgule Flottante',
          paragraphs: [
            'Cette calculatrice scientifique en ligne constitue une calculatrice web avancée idéale pour étudiants et ingénieurs. Elle élimine les artefacts binaires IEEE 754 grâce à des algorithmes de normalisation epsilon.',
            'Elle intègre une calculatrice de fractions gratuite en ligne pour basculer en un clic entre décimales et fractions exactes irréductibles.',
          ],
        },
        {
          title: 'Calculatrice d\'Ingénierie Multiligne & Résolveur d\'Expressions',
          paragraphs: [
            'En tant que calculatrice d\'ingénierie multiligne, SciCalcX affiche l\'expression complète et le résultat simultanément. C\'est un résolveur d\'expressions mathématiques rigoureux suivant l\'ordre PEMDAS.',
          ],
        },
      ],
      recommendationTitle: 'Calculatrice de Matrices Scientifique',
      recommendationDesc: 'Résolvez des systèmes d\'équations linéaires, déterminants et matrices inverses.',
      recommendationAction: 'Ouvrir Calculatrice de Matrices Scientifique →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Algèbre Linéaire',
      title: 'Guide de la Calculatrice de Matrices Scientifique',
      sections: [
        {
          title: 'Déterminant par Développement de Laplace',
          paragraphs: [
            'La calculatrice de matrices scientifique évalue les déterminants par développement en cofacteurs le long de la première ligne.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Calculatrice de Calcul Infinitésimal Basée sur le Web',
      recommendationDesc: 'Dérivées numériques, intégrales définies et calcul de limites interactives.',
      recommendationAction: 'Ouvrir Calculatrice de Calcul Infinitésimal Basée sur le Web →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Analyse Mathématique',
      title: 'Manuel de la Calculatrice de Calcul Infinitésimal Basée sur le Web',
      sections: [
        {
          title: 'Dérivation Numérique et Résolveur d\'Expressions Mathématiques',
          paragraphs: [
            'Notre calculatrice de calcul infinitésimal basée sur le Web utilise les quotients de différences symétriques pour évaluer les taux de variation instantanés.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Calculatrice de Dérivées Graphiques en Ligne',
      recommendationDesc: 'Tracez des courbes 2D et analysez graphiquement racines, asymptotes et tangentes.',
      recommendationAction: 'Ouvrir Calculatrice de Dérivées Graphiques en Ligne →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Géométrie Cartésienne',
      title: 'Manuel de la Calculatrice de Dérivées Graphiques en Ligne',
      sections: [
        {
          title: 'Tracé de Courbes 2D et Analyse Graphique',
          paragraphs: [
            'Visualisez plusieurs fonctions et évaluez instantanément les pentes de dérivées graphiques en ligne.',
          ],
        },
      ],
      recommendationTitle: 'Calculatrice de Base-N pour Programmeurs',
      recommendationDesc: 'Conversions hexadécimal, binaire, octal et logique bit à bit.',
      recommendationAction: 'Ouvrir Calculatrice de Base-N pour Programmeurs →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Systèmes Binaires',
      title: 'Manuel de la Calculatrice de Base-N pour Programmeurs',
      sections: [
        {
          title: 'Complément à Deux et Opérations Bitwise',
          paragraphs: [
            'La calculatrice de base-n pour programmeurs gère les registres 64 bits et les opérations logiques fondamentales.',
          ],
        },
      ],
      recommendationTitle: 'Plateforme de Tuteur de Code IA',
      recommendationDesc: 'Écrivez, exécutez et comprenez le code C++, C et Python dans votre navigateur.',
      recommendationAction: 'Ouvrir Plateforme de Tuteur de Code IA →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Science des Données',
      title: 'Manuel de Statistiques Descriptives et Régression',
      sections: [
        {
          title: 'Variance et Correction de Bessel',
          paragraphs: [
            'Diviser par N - 1 produit une estimation non biaisée de la variance empirique d\'un échantillon.',
          ],
        },
      ],
      recommendationTitle: 'Articles Informatiques & Mathématiques',
      recommendationDesc: 'Explorez la complexité algorithmique et les méthodes numériques.',
      recommendationAction: 'Explorer les Articles →',
      recommendationHref: '/blog',
    },
  },
  de: {
    scientific: {
      badge: 'Technische Referenz',
      title: 'Wissenschaftlicher Taschenrechner Online & Präzisionshandbuch',
      sections: [
        {
          title: 'Präzision und Dezimalnormalisierung',
          paragraphs: [
            'Wissenschaftliche Berechnungen verlangen absolute Verlässlichkeit. SciCalcX bereinigt IEEE 754 Gleitkomma-Ungenauigkeiten und bietet exakte Bruchumwandlungen.',
          ],
        },
      ],
      recommendationTitle: 'Wissenschaftlicher Matrizenrechner',
      recommendationDesc: 'Berechne Determinanten, Inverse und lineare Gleichungssysteme.',
      recommendationAction: 'Matrizenrechner Öffnen →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Lineare Algebra',
      title: 'Handbuch für den Wissenschaftlichen Matrizenrechner',
      sections: [
        {
          title: 'Laplace-Entwicklung für Determinanten',
          paragraphs: [
            'Determinanten quadratischer Matrizen bestimmen die Lösbarkeit linearer Gleichungssysteme.',
          ],
        },
      ],
      recommendationTitle: 'Analysis & Integrationsrechner',
      recommendationDesc: 'Berechne Ableitungen, Integrale und Grenzwerte online.',
      recommendationAction: 'Analysis Rechner Öffnen →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Mathematische Analysis',
      title: 'Analysis- und Differenzialrechnung Handbuch',
      sections: [
        {
          title: 'Numerische Differentiation',
          paragraphs: [
            'Zentrale Differenzenquotienten ermöglichen die Bestimmung von Ableitungen mit minimalem Diskretisierungsfehler.',
          ],
        },
      ],
      recommendationTitle: 'Grafikrechner 2D Online',
      recommendationDesc: 'Visualisiere Funktionskurven und Tangenten dynamisch.',
      recommendationAction: 'Grafikrechner Öffnen →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Kartesische Geometrie',
      title: '2D-Funktionsplotter Handbuch',
      sections: [
        {
          title: 'Kurvendiskussion und Asymptoten',
          paragraphs: [
            'Erkenne Polstellen, Nullstellen und Extrema in interaktiven Funktionsgrafiken.',
          ],
        },
      ],
      recommendationTitle: 'Programmierer Rechner Base-N',
      recommendationDesc: 'Konvertiere Hex, Dez, Okt, Bin und führe Bitoperationen durch.',
      recommendationAction: 'Programmierer Rechner Öffnen →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Binäre Systeme',
      title: 'Base-N Programmierer Handbuch',
      sections: [
        {
          title: 'Zweierkomplement und Bitmanipulation',
          paragraphs: [
            'Vorzeichenbehaftete Ganzzahlen und Bitshifts in 32-Bit-Architekturen.',
          ],
        },
      ],
      recommendationTitle: 'KI-Programmier-Tutor',
      recommendationDesc: 'Kompiliere und lerne C++, C und Python im Browser.',
      recommendationAction: 'KI-Tutor Starten →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Statistik',
      title: 'Deskriptive Statistik & Regression Handbuch',
      sections: [
        {
          title: 'Besselsche Korrektur',
          paragraphs: [
            'Die Division durch N - 1 liefert die erwartungstreue Stichprobenvarianz.',
          ],
        },
      ],
      recommendationTitle: 'Technik-Blog & Artikel',
      recommendationDesc: 'Vertiefe dein Wissen über Algorithmen und mathematische Methoden.',
      recommendationAction: 'Artikel Entdecken →',
      recommendationHref: '/blog',
    },
  },
  nl: {
    scientific: {
      badge: 'Technische Referentie',
      title: 'Handleiding Wetenschappelijke Calculator & Multi-regel Webcalculator',
      sections: [
        {
          title: 'Geavanceerde Webcalculator en Drijvende-Kommaberekeningen',
          paragraphs: [
            'Deze online wetenschappelijke calculator is ontworpen als een geavanceerde webcalculator voor studenten en ingenieurs. Het voorkomt binaire afrondingsfouten van IEEE 754 door epsilon-normalisatie toe te passen.',
            'Inclusief een gratis online breukencalculator waarmee u met één klik schakelt tussen exacte breuken en decimale getallen.',
          ],
        },
        {
          title: 'Multi-regel Technische Calculator en Wiskundige Expressie-oplosser',
          paragraphs: [
            'Als multi-regel technische calculator toont het scherm de volledige wiskundige expressie. Het fungeert als een betrouwbare wiskundige expressie-oplosser die wiskundige rekenvolgorde (PEMDAS) en haakjesparen strikt handhaaft.',
          ],
        },
      ],
      recommendationTitle: 'Wetenschappelijke Matrixcalculator',
      recommendationDesc: 'Bereken determinanten, inverse matrices en lineaire stelsels met precisie.',
      recommendationAction: 'Open Wetenschappelijke Matrixcalculator →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Lineaire Algebra',
      title: 'Handleiding Wetenschappelijke Matrixcalculator',
      sections: [
        {
          title: 'Determinanten via Laplace-expansie',
          paragraphs: [
            'De wetenschappelijke matrixcalculator berekent determinanten van 2x2 en 3x3 matrices via cofactor-expansie langs de eerste rij.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Webgebaseerde Calculuscalculator',
      recommendationDesc: 'Bereken afgeleiden, integralen en limieten met interactieve grafieken.',
      recommendationAction: 'Open Webgebaseerde Calculuscalculator →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Wiskundige Analyse',
      title: 'Handleiding Webgebaseerde Calculuscalculator',
      sections: [
        {
          title: 'Numerieke Differentiatie en Wiskundige Expressie-oplosser',
          paragraphs: [
            'Deze webgebaseerde calculuscalculator functioneert als een wiskundige expressie-oplosser voor numerieke afgeleiden via symmetrische differentiequotiënten.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Online Grafische Afgeleidingscalculator',
      recommendationDesc: 'Plot functies in 2D en inspecteer afgeleiden, toppen en snijpunten.',
      recommendationAction: 'Open Online Grafische Afgeleidingscalculator →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Cartesiaanse Meetkunde',
      title: 'Handleiding Online Grafische Afgeleidingscalculator',
      sections: [
        {
          title: '2D Functieplotter en Grafische Afgeleiden',
          paragraphs: [
            'De online grafische afgeleidingscalculator detecteert asymptoten en hellingen dynamisch op een 2D-canvas.',
          ],
        },
      ],
      recommendationTitle: 'Programmeren Base-N Calculator',
      recommendationDesc: 'Converteer tussen hexadecimaal, binair en voer bitsgewijze bewerkingen uit.',
      recommendationAction: 'Open Programmeren Base-N Calculator →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Binaire Systemen',
      title: 'Handleiding Programmeren Base-N Calculator',
      sections: [
        {
          title: 'Twee-complement en Bitsgewijze Logica',
          paragraphs: [
            'De programmeren base-n calculator ondersteunt 32-bits bewerkingen en directe conversies tussen Hex, Dec, Oct en Bin.',
          ],
        },
      ],
      recommendationTitle: 'AI-Codetutorplatform',
      recommendationDesc: 'Schrijf, voer uit en leer C++, C en Python rechtstreeks in de browser.',
      recommendationAction: 'Open AI-Codetutorplatform →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Data Science',
      title: 'Handleiding Beschrijvende Statistiek & Regressie',
      sections: [
        {
          title: 'Variantie en Bessel-correctie',
          paragraphs: [
            'Delen door N - 1 graden van vrijheid zorgt voor een zuivere schatting van de populatievariantie.',
          ],
        },
      ],
      recommendationTitle: 'Engineering & Algoritmen Artikelen',
      recommendationDesc: 'Leer meer over tijdcomplexiteit, datastructuren en numerieke methoden.',
      recommendationAction: 'Ontdek Artikelen →',
      recommendationHref: '/blog',
    },
  },
  pt: {
    scientific: {
      badge: 'Referência Técnica',
      title: 'Guia de Calculadora Científica Online e Engenharia Multilinha',
      sections: [
        {
          title: 'Calculadora Web Avançada e Precisão de Ponto Flutuante',
          paragraphs: [
            'Esta calculadora científica online oferece uma calculadora web avançada sem imperfeições de ponto flutuante IEEE 754.',
            'Possui uma calculadora de frações gratuita online integrada para alternar instantaneamente entre dízimas e frações irredutíveis exatas.',
          ],
        },
        {
          title: 'Calculadora de Engenharia Multilinha e Solucionador de Expressões',
          paragraphs: [
            'Como calculadora de engenharia multilinha, apresenta a equação e o resultado em tempo real. Funciona como um solucionador de expressões matemáticas com validação léxica de parênteses e regra PEMDAS.',
          ],
        },
      ],
      recommendationTitle: 'Calculadora de Matrizes Científica',
      recommendationDesc: 'Calcule determinantes, inversas e multiplicação de matrizes online.',
      recommendationAction: 'Abrir Calculadora de Matrizes Científica →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Álgebra Linear',
      title: 'Guia da Calculadora de Matrizes Científica',
      sections: [
        {
          title: 'Determinantes por Expansão de Laplace',
          paragraphs: [
            'A calculadora de matrizes científica avalia matrizes 2x2 e 3x3 através de cofatores de Laplace com alta precisão.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Calculadora de Cálculo Baseada na Web',
      recommendationDesc: 'Derivadas numéricas, integrais e limites com gráficos interativos.',
      recommendationAction: 'Abrir Calculadora de Cálculo Baseada na Web →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Análise Matemática',
      title: 'Manual da Calculadora de Cálculo Baseada na Web',
      sections: [
        {
          title: 'Derivação Numérica e Solucionador de Expressões Matemáticas',
          paragraphs: [
            'A calculadora de cálculo baseada na web atua como um solucionador de expressões matemáticas para taxas instantâneas de variação.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Calculadora de Derivadas Gráficas Online',
      recommendationDesc: 'Plote funções 2D e inspecione derivadas, raízes e assíntotas graficamente.',
      recommendationAction: 'Abrir Calculadora de Derivadas Gráficas Online →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Geometria Cartesiana',
      title: 'Manual da Calculadora de Derivadas Gráficas Online',
      sections: [
        {
          title: 'Traçado de Curvas 2D e Derivadas Gráficas',
          paragraphs: [
            'A calculadora de derivadas gráficas online permite inspecionar variações e tangentes em tempo real.',
          ],
        },
      ],
      recommendationTitle: 'Calculadora de Base-N para Programadores',
      recommendationDesc: 'Conversões entre binário, hexadecimal e lógica de bits.',
      recommendationAction: 'Abrir Calculadora de Base-N para Programadores →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Sistemas Binários',
      title: 'Manual da Calculadora de Base-N para Programadores',
      sections: [
        {
          title: 'Complemento de Dois e Lógica Bitwise',
          paragraphs: [
            'A calculadora de base-n para programadores processa valores de 64 bits com operadores bit a bit.',
          ],
        },
      ],
      recommendationTitle: 'Plataforma de Tutoria de Código de IA',
      recommendationDesc: 'Escreva, teste e aprenda C++, C e Python direto no seu navegador.',
      recommendationAction: 'Abrir Plataforma de Tutoria de Código de IA →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Ciência de Dados',
      title: 'Manual de Estatística Descritiva e Regressão',
      sections: [
        {
          title: 'Variância e Correção de Bessel',
          paragraphs: [
            'Dividir por N - 1 graus de liberdade produz um estimador não tendencioso da variância.',
          ],
        },
      ],
      recommendationTitle: 'Artigos de Engenharia e Algoritmos',
      recommendationDesc: 'Aprenda sobre estruturas de dados e complexidade temporal de algoritmos.',
      recommendationAction: 'Explorar Artigos →',
      recommendationHref: '/blog',
    },
  },
  it: {
    scientific: {
      badge: 'Riferimento Tecnico',
      title: 'Guida alla Calcolatrice Scientifica Online & Calcolo Multilinea',
      sections: [
        {
          title: 'Calcolatrice Web Avanzata e Precisione Decimale',
          paragraphs: [
            'Questa calcolatrice scientifica online funge da calcolatrice web avanzata per studenti e ingegneri, correggendo gli errori IEEE 754.',
            'Include una calcolatrice di frazioni gratuita online per convertire istantaneamente valori decimali in frazioni irriducibili esatte.',
          ],
        },
        {
          title: 'Calcolatrice Ingegneristica Multilinea e Risolutore di Espressioni',
          paragraphs: [
            'Come calcolatrice ingegneristica multilinea, visualizza l\'intera formula matematica fungendo da risolutore di espressioni matematiche ad alta fedeltà.',
          ],
        },
      ],
      recommendationTitle: 'Calcolatrice di Matrici Scientifica',
      recommendationDesc: 'Calcola determinanti, matrici inverse e moltiplicazioni matriciali.',
      recommendationAction: 'Apri Calcolatrice di Matrici Scientifica →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Algebra Lineare',
      title: 'Guida alla Calcolatrice di Matrici Scientifica',
      sections: [
        {
          title: 'Calcolo dei Determinanti con Espansione di Laplace',
          paragraphs: [
            'La calcolatrice di matrici scientifica esegue l\'espansione in cofattori lungo la prima riga.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Calcolatrice di Analisi Matematica Basata sul Web',
      recommendationDesc: 'Derivate numeriche, integrali definiti e limiti con curve grafiche.',
      recommendationAction: 'Apri Calcolatrice di Analisi Matematica Basata sul Web →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Analisi Matematica',
      title: 'Manuale della Calcolatrice di Analisi Matematica Basata sul Web',
      sections: [
        {
          title: 'Derivazione Numerica e Risolutore di Espressioni Matematiche',
          paragraphs: [
            'La calcolatrice di analisi matematica basata sul web funge da risolutore di espressioni matematiche con quozienti di differenze simmetriche.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Calcolatrice di Derivate Grafiche Online',
      recommendationDesc: 'Traccia funzioni 2D e analizza derivate grafiche, tangenti ed estremi.',
      recommendationAction: 'Apri Calcolatrice di Derivate Grafiche Online →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Geometria Cartesiana',
      title: 'Manuale della Calcolatrice di Derivate Grafiche Online',
      sections: [
        {
          title: 'Grafici 2D e Derivate Grafiche',
          paragraphs: [
            'La calcolatrice di derivate grafiche online traccia curve multiple rilevando asintoti e tangenti.',
          ],
        },
      ],
      recommendationTitle: 'Calcolatrice Base-N per Programmatori',
      recommendationDesc: 'Conversioni binario, esadecimale e operazioni logiche a livello di bit.',
      recommendationAction: 'Apri Calcolatrice Base-N per Programmatori →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Sistemi Binari',
      title: 'Manuale della Calcolatrice Base-N per Programmatori',
      sections: [
        {
          title: 'Complemento a Due e Logica Bitwise',
          paragraphs: [
            'La calcolatrice base-n per programmatori esegue operazioni logiche su registri a 64 bit.',
          ],
        },
      ],
      recommendationTitle: 'Piattaforma di Tutor di Codice IA',
      recommendationDesc: 'Scrivi, esegui e impara C++, C e Python direttamente nel browser.',
      recommendationAction: 'Apri Piattaforma di Tutor di Codice IA →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'Data Science',
      title: 'Manuale di Statistica Descrittiva e Regressione',
      sections: [
        {
          title: 'Correzione di Bessel',
          paragraphs: [
            'Dividere per N - 1 gradi di libertà fornisce uno stimatore non distorto della varianza.',
          ],
        },
      ],
      recommendationTitle: 'Articoli di Ingegneria e Algoritmi',
      recommendationDesc: 'Approfondisci complessità computazionale e strutture dati.',
      recommendationAction: 'Esplora gli Articoli →',
      recommendationHref: '/blog',
    },
  },
  ja: {
    scientific: {
      badge: '技術リファレンス',
      title: '科学用計算機 オンライン＆複数行計算ガイド',
      sections: [
        {
          title: '高度なウェブ計算機と浮動小数点正規化',
          paragraphs: [
            '当サイトの科学用計算機は、工学および学習用途に最適化された高度なウェブ計算機です。IEEE 754の微細な丸め誤差を排除し、正確な演算結果を出力します。',
            'オンライン無料分数計算機機能を備えており、小数と既約分数をワンタップで相互変換できます。',
          ],
        },
        {
          title: '複数行エンジニアリング計算機と数式ソルバー',
          paragraphs: [
            '複数行エンジニアリング計算機として、入力式と計算結果を上下2段で表示。厳密なPEMDAS優先順位を守る数式ソルバーとして機能します。',
          ],
        },
      ],
      recommendationTitle: '科学用行列計算機',
      recommendationDesc: '行列式、逆行列、連立方程式を高精度に解く専用計算ツールです。',
      recommendationAction: '科学用行列計算機を開く →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: '線形代数',
      title: '科学用行列計算機＆連立方程式ガイド',
      sections: [
        {
          title: '余因子展開による行列式計算',
          paragraphs: [
            '科学用行列計算機は、第1行に沿ったラプラス余因子展開により2x2および3x3行列式を正確に算出します。',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'ウェブベースの微積分計算機',
      recommendationDesc: '数値微分、定積分、極限をグラフと共に解析します。',
      recommendationAction: 'ウェブベースの微積分計算機を開く →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: '数学解析',
      title: 'ウェブベースの微積分計算機＆数式ソルバー解説',
      sections: [
        {
          title: '数値微分と数式ソルバー',
          paragraphs: [
            'ウェブベースの微積分計算機は高度な数式ソルバーとして、対称差分商による瞬時変化率の算出をサポートします。',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'オンライングラフ微分計算機',
      recommendationDesc: '2Dグラフで接線の傾き、極値、漸近線を視覚的に確認できます。',
      recommendationAction: 'オンライングラフ微分計算機を開く →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: '直交幾何学',
      title: 'オンライングラフ微分計算機＆2Dプロッター解説',
      sections: [
        {
          title: '関数プロットとグラフ微分',
          paragraphs: [
            'オンライングラフ微分計算機により、関数の接線や微分係数をリアルタイムに描画・検証できます。',
          ],
        },
      ],
      recommendationTitle: 'プログラマー向けN進数計算機',
      recommendationDesc: '16進数、2進数の相互変換とビット論理演算。',
      recommendationAction: 'プログラマー向けN進数計算機を開く →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: '2進数システム',
      title: 'プログラマー向けN進数計算機＆ビット演算解説',
      sections: [
        {
          title: '2の補数とビット単位論理演算',
          paragraphs: [
            'プログラマー向けN進数計算機は、64ビット整数でのAND、OR、XOR演算を直感的に実行します。',
          ],
        },
      ],
      recommendationTitle: 'AIコードチュータープラットフォーム',
      recommendationDesc: 'ブラウザ上でC++、C、Pythonを直接実行・デバッグ学習。',
      recommendationAction: 'AIコードチュータープラットフォームを開く →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: 'データサイエンス',
      title: '記述統計＆線形回帰ハンドブック',
      sections: [
        {
          title: 'ベッセルの補正',
          paragraphs: [
            'N - 1の自由度で除算することで、母分散の不偏推定量が得られます。',
          ],
        },
      ],
      recommendationTitle: 'エンジニアリング＆アルゴリズム解説記事',
      recommendationDesc: 'データ構造と計算量オーダーを詳しく解説しています。',
      recommendationAction: '記事を読む →',
      recommendationHref: '/blog',
    },
  },
  ko: {
    scientific: {
      badge: '기술 레퍼런스',
      title: '온라인 공학용 계산기 & 멀티라인 연산 가이드',
      sections: [
        {
          title: '고급 웹 계산기 및 부동 소수점 정밀도 정규화',
          paragraphs: [
            '본 온라인 공학용 계산기는 공학도와 연구원을 위한 고급 웹 계산기입니다. IEEE 754 부동 소수점 오차를 입실론 임계값 알고리즘으로 자동 교정합니다.',
            '온라인 무료 분수 계산기 기능을 탑재하여 순환 소수와 기약 분수를 손실 없이 자유롭게 상호 변환할 수 있습니다.',
          ],
        },
        {
          title: '멀티라인 공학 계산기 & 수학 수식 계산기',
          paragraphs: [
            '멀티라인 공학 계산기 화면 구성을 통해 입력 수식과 누적 계산 결과를 동시에 확인합니다. 엄격한 연산 우선순위를 지원하는 수학 수식 계산기로 동작합니다.',
          ],
        },
      ],
      recommendationTitle: '공학용 행렬 계산기',
      recommendationDesc: '행렬식, 역행렬, 행렬 곱셈 및 연립일차방정식을 단계별로 정밀 계산합니다.',
      recommendationAction: '공학용 행렬 계산기 열기 →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: '선형대수학',
      title: '공학용 행렬 계산기 & 연립방정식 가이드',
      sections: [
        {
          title: '라플라스 여인수 전개를 통한 행렬식 계산',
          paragraphs: [
            '공학용 행렬 계산기는 첫 번째 행을 따른 여인수 전개를 통해 2x2 및 3x3 행렬식을 오차 없이 계산합니다.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: '웹 기반 미적분 계산기',
      recommendationDesc: '수치 미분, 정적분 및 극한값을 그래프와 함께 해석합니다.',
      recommendationAction: '웹 기반 미적분 계산기 열기 →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: '수학적 해석학',
      title: '웹 기반 미적분 계산기 & 수학 수식 계산기 가이드',
      sections: [
        {
          title: '수치 미분 및 수학 수식 계산기',
          paragraphs: [
            '웹 기반 미적분 계산기는 대칭 차분 상용 알고리즘을 적용한 고정밀 수학 수식 계산기입니다.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: '온라인 그래프 미분 계산기',
      recommendationDesc: '2D 그래프로 접선의 기울기, 극값, 점근선을 시각적으로 확인하세요.',
      recommendationAction: '온라인 그래프 미분 계산기 열기 →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: '데카르트 기하학',
      title: '온라인 그래프 미분 계산기 & 2D 플로터 가이드',
      sections: [
        {
          title: '2D 함수 플로팅 및 그래프 미분',
          paragraphs: [
            '온라인 그래프 미분 계산기를 통해 다중 곡선, 접선 및 미분 계수를 실시간으로 그립니다.',
          ],
        },
      ],
      recommendationTitle: '프로그래머 N진수 계산기',
      recommendationDesc: '16진수, 2진수 진법 변환 및 비트 단위 논리 연산.',
      recommendationAction: '프로그래머 N진수 계산기 열기 →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: '이진 시스템',
      title: '프로그래머 N진수 계산기 & 비트 연산 가이드',
      sections: [
        {
          title: '2의 보수 및 64비트 논리 연산',
          paragraphs: [
            '프로그래머 N진수 계산기는 64비트 정수 연산 및 AND, OR, XOR 비트 연산을 지원합니다.',
          ],
        },
      ],
      recommendationTitle: 'AI 코드 튜터 플랫폼',
      recommendationDesc: '브라우저에서 C++, C, Python 코드를 직접 작성하고 지능형 피드백을 받으세요.',
      recommendationAction: 'AI 코드 튜터 플랫폼 열기 →',
      recommendationHref: '/compiler',
    },
    statistics: {
      badge: '데이터 사이언스',
      title: '기술통계 및 선형 회귀 핸드북',
      sections: [
        {
          title: '베셀 보정',
          paragraphs: [
            '자유도 N - 1로 나누면 표본 분산의 불편 추정량을 정확하게 얻을 수 있습니다.',
          ],
        },
      ],
      recommendationTitle: '엔지니어링 & 알고리즘 아티클',
      recommendationDesc: '자료구조와 시간 복잡도 Big-O를 쉽게 배울 수 있습니다.',
      recommendationAction: '아티클 살펴보기 →',
      recommendationHref: '/blog',
    },
  },
};

export function getHandbook(pageKey: string, lang: SupportedLanguage = 'en'): HandbookData {
  const langHandbooks = handbooks[lang] || handbooks.en;
  return langHandbooks[pageKey] || handbooks.en[pageKey];
}
