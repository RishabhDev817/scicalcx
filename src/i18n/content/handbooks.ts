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
      title: 'Scientific Computation & Multi-line Evaluation Guide',
      sections: [
        {
          title: 'Floating-Point Precision and Decimal Normalization',
          paragraphs: [
            'Digital microprocessors execute arithmetic operations using double-precision binary floats under the IEEE 754 standard. Because certain decimal fractions (such as 0.1 or 0.2) have repeating binary expansions, standard computing environments inevitably introduce minute round-off artifacts (such as 0.1 + 0.2 = 0.30000000000000004).',
            'SciCalcX implements epsilon-threshold sanitization and decimal normalization to keep displayed results clean up to 12 decimal places, alongside a Standard-to-Decimal (S-D) conversion mode that approximates outputs as simplified rational fractions.',
          ],
        },
        {
          title: 'Operator Precedence and Syntax Validation',
          paragraphs: [
            'Input expressions adhere to standard algebraic precedence (PEMDAS/BODMAS): parentheses, exponents and radicals, multiplication and division evaluated left-to-right, followed by addition and subtraction.',
            'The multi-line viewport tracks open and closing brackets in real time, alerting you to unbalanced parentheses and operator conflicts before numerical evaluation occurs.',
          ],
        },
      ],
      recommendationTitle: 'Matrix Algebra',
      recommendationDesc: 'Need linear systems or determinant evaluations? Open our dedicated matrix engine.',
      recommendationAction: 'Open Matrix Calculator →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Linear Algebra',
      title: 'Matrix Algebra & Linear Systems Guide',
      sections: [
        {
          title: 'Determinant Computation via Laplace Cofactor Expansion',
          paragraphs: [
            'The determinant is a scalar value characterizing a square matrix. It indicates whether a linear system of equations has a unique solution. A determinant of zero signifies a singular (non-invertible) matrix.',
            'For 2x2 and 3x3 matrices, Laplace expansion multiplies each row element by its signed minor determinant, computing the scaling factor of the linear transformation.',
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
      recommendationTitle: 'Calculus Suite',
      recommendationDesc: 'Solve continuous derivatives, integrals, and limits alongside discrete algebra.',
      recommendationAction: 'Open Calculus Calculator →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Analysis & Rates',
      title: 'Calculus Solver & Numerical Methods Guide',
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
      recommendationTitle: '2D Graphing Studio',
      recommendationDesc: 'Inspect slope tangents, local extrema, and curves with dynamic 2D plotting.',
      recommendationAction: 'Open Graphing Calculator →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Analytical Geometry',
      title: '2D Function Grapher & Curve Studio Handbook',
      sections: [
        {
          title: 'Sampling Resolution and Discontinuity Handling',
          paragraphs: [
            'Graphing functions with asymptotic behavior (like tan(x) or 1/x) requires dynamic sampling. The engine calculates derivative gradients to detect infinite jumps and suppress invalid vertical lines.',
          ],
        },
      ],
      recommendationTitle: 'Programmer Calculator',
      recommendationDesc: 'Working with binary data, memory addresses, or bitwise logic? Switch to Base-N.',
      recommendationAction: 'Open Programmer Calculator →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Binary Systems',
      title: 'Programmer Calculator & Bitwise Logic Handbook',
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
      recommendationAction: 'Open Code Tutor →',
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
      title: 'Guía de Computación Científica y Evaluación Multilínea',
      sections: [
        {
          title: 'Precisión en Coma Flotante y Normalización Decimal',
          paragraphs: [
            'El cómputo digital se basa en operaciones de coma flotante de doble precisión según el estándar IEEE 754. Dado que ciertas fracciones decimales (como 0.1 o 0.2) tienen expansiones binarias periódicas, los procesadores introducen pequeñas discrepancias de redondeo (por ejemplo, 0.30000000000000004).',
            'SciCalcX aplica un umbral épsilon para normalizar los resultados mostrados hasta 12 decimales y ofrece la tecla S-D para convertir valores en fracciones racionales simplificadas.',
          ],
        },
        {
          title: 'Jerarquía de Operaciones y Validación de Sintaxis',
          paragraphs: [
            'Las expresiones siguen la jerarquía algebraica estándar (PEMDAS): paréntesis, exponentes y raíces, multiplicaciones y divisiones evaluadas de izquierda a derecha, y sumas y restas.',
            'El visor multilínea valida los paréntesis abiertos y cerrados en tiempo real, detectando inconsistencias sintácticas antes de iniciar la evaluación numérica.',
          ],
        },
      ],
      recommendationTitle: 'Álgebra Matricial',
      recommendationDesc: 'Resuelve sistemas lineales, determinantes e inversas con nuestro módulo especializado.',
      recommendationAction: 'Abrir Calculadora de Matrices →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Álgebra Lineal',
      title: 'Guía de Álgebra Matricial y Sistemas Lineales',
      sections: [
        {
          title: 'Cálculo de Determinantes mediante Expansión de Laplace',
          paragraphs: [
            'El determinante de matrices cuadradas 2x2 y 3x3 se calcula mediante la expansión de cofactores de Laplace, evaluando si el sistema lineal posee solución única o es singular.',
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
      recommendationTitle: 'Cálculo Infinitesimal',
      recommendationDesc: 'Calcula derivadas numéricas, integrales definidas y límites con curvas interactivas.',
      recommendationAction: 'Abrir Calculadora de Cálculo →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Análisis Matemático',
      title: 'Guía de Cálculo Numérico y Análisis',
      sections: [
        {
          title: 'Derivación Numérica y Diferencias Simétricas',
          paragraphs: [
            'Las derivadas se evalúan numéricamente mediante cocientes de diferencias centrales simétricas, garantizando convergencia de orden superior sin requerir diferenciación simbólica.',
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
      recommendationTitle: 'Graficador 2D',
      recommendationDesc: 'Grafica funciones en 2D e inspecciona tangentes, raíces y asíntotas en tiempo real.',
      recommendationAction: 'Abrir Graficador 2D →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Geometría Cartesiana',
      title: 'Manual de Visualización de Funciones 2D',
      sections: [
        {
          title: 'Trazado de Curvas 2D y Detección de Discontinuidades',
          paragraphs: [
            'El motor de renderizado muestrea dinámicamente las funciones para detectar asíntotas verticales y cambios de pendiente sin enlazar discontinuidades.',
          ],
        },
      ],
      recommendationTitle: 'Calculadora Base-N',
      recommendationDesc: 'Conversión rápida entre binario, hexadecimal, octal y operaciones lógicas bitwise.',
      recommendationAction: 'Abrir Calculadora Base-N →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Sistemas Binarios',
      title: 'Manual de Lógica Binaria y Aritmética Base-N',
      sections: [
        {
          title: 'Complemento a Dos y Operaciones Lógicas Bitwise',
          paragraphs: [
            'Permite manipular registros con signo de 32 bits (int32) con operaciones AND, OR, XOR, NOT, desplazamientos y conversiones entre bases.',
          ],
        },
      ],
      recommendationTitle: 'Plataforma de Tutor de Código de IA',
      recommendationDesc: 'Aprende y depura código C++, C y Python con asistencia inteligente.',
      recommendationAction: 'Abrir Tutor de Código →',
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
      title: 'Guide de Calcul Scientifique & Évaluation Multiligne',
      sections: [
        {
          title: 'Précision en Virgule Flottante et Normalisation Décimale',
          paragraphs: [
            'Les microprocesseurs effectuent leurs calculs numériques au moyen de nombres flottants double précision selon la norme IEEE 754. Comme certaines valeurs décimales (telles que 0.1 ou 0.2) ne possèdent pas de représentation binaire finie, les environnements d\'exécution génèrent de légers résidus d\'arrondi (par exemple, 0.30000000000000004).',
            'SciCalcX applique un seuil epsilon pour stabiliser l\'affichage jusqu\'à 12 décimales et fournit une touche de conversion S-D permettant d\'approximer le résultat sous forme de fraction rationnelle simplifiée.',
          ],
        },
        {
          title: 'Priorité des Opérateurs et Contrôle Syntaxique',
          paragraphs: [
            'L\'évaluation respecte la hiérarchie algébrique usuelle (PEMDAS) : parenthèses, exposants et racines, multiplications et divisions de gauche à droite, puis additions et soustractions.',
            'L\'afficheur multiligne vérifie en continu l\'équilibrage des parenthèses ouvrantes et fermantes pour signaler les incohérences avant tout calcul numérique.',
          ],
        },
      ],
      recommendationTitle: 'Algèbre Matricielle',
      recommendationDesc: 'Résolvez des systèmes d\'équations linéaires, déterminants et matrices inverses.',
      recommendationAction: 'Ouvrir Calculatrice de Matrices →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Algèbre Linéaire',
      title: 'Guide d\'Algèbre Matricielle',
      sections: [
        {
          title: 'Déterminant par Développement de Laplace',
          paragraphs: [
            'Le déterminant est calculé par développement en cofacteurs de Laplace le long de la première ligne pour évaluer la singularité du système.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Calcul Infinitésimal',
      recommendationDesc: 'Dérivées numériques, intégrales définies et calcul de limites interactives.',
      recommendationAction: 'Ouvrir Calculateur d\'Analyse →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Analyse Mathématique',
      title: 'Guide d\'Analyse et Méthodes Numériques',
      sections: [
        {
          title: 'Dérivation Numérique par Différences Symétriques',
          paragraphs: [
            'Les dérivées numériques sont calculées au moyen de quotients différentiels symétriques centrés pour atteindre une précision d\'ordre supérieur.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Traceur 2D',
      recommendationDesc: 'Tracez des courbes 2D et analysez graphiquement racines, asymptotes et tangentes.',
      recommendationAction: 'Ouvrir Traceur 2D →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Géométrie Cartésienne',
      title: 'Guide de Tracé de Fonctions 2D',
      sections: [
        {
          title: 'Tracé de Courbes 2D et Analyse Graphique',
          paragraphs: [
            'Le traceur échantillonne la fonction en continu pour identifier les discontinuités, asymptotes et tangentes sans relier artificiellement les branches divergentes.',
          ],
        },
      ],
      recommendationTitle: 'Calculatrice Base-N',
      recommendationDesc: 'Conversions hexadécimal, binaire, octal et logique bit à bit.',
      recommendationAction: 'Ouvrir Calculatrice Base-N →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Systèmes Binaires',
      title: 'Guide de Logique Binaire et Base-N',
      sections: [
        {
          title: 'Complément à Deux et Opérations Logiques',
          paragraphs: [
            'Permet la manipulation directe de registres signés 32 bits (int32) et les opérations logiques fondamentales (AND, OR, XOR, NOT, décalages).',
          ],
        },
      ],
      recommendationTitle: 'Plateforme de Tuteur de Code IA',
      recommendationDesc: 'Écrivez, exécutez et comprenez le code C++, C et Python dans votre navigateur.',
      recommendationAction: 'Ouvrir Sandbox Code →',
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
      title: 'Wissenschaftliche Berechnung & Mehrzeilen-Auswertung',
      sections: [
        {
          title: 'Gleitkommapräzision und Dezimalnormalisierung',
          paragraphs: [
            'Digitale Prozessoren führen arithmetische Berechnungen nach dem IEEE-754-Standard für doppelte Genauigkeit (Float64) durch. Da bestimmte periodische Dezimalbrüche (wie 0,1 oder 0,2) im Binärsystem nicht exakt darstellbar sind, entstehen minimale Rundungsabweichungen (z. B. 0,1 + 0,2 = 0,30000000000000004).',
            'SciCalcX nutzt eine Epsilon-Schwellenwert-Normalisierung zur Bereinigung der Bildschirmausgabe bis zu 12 Dezimalstellen sowie eine S-D-Taste zur Umwandlung in gekürzte Brüche.',
          ],
        },
        {
          title: 'Operatorrangfolge und Syntaxprüfung',
          paragraphs: [
            'Eingegebene Terme folgen der mathematischen Standardrangfolge (Punkt vor Strich / PEMDAS): Klammern, Potenzen und Wurzeln, Multiplikation und Division von links nach rechts, gefolgt von Addition und Subtraktion.',
            'Die mehrzeilige Anzeige prüft geöffnete und geschlossene Klammern in Echtzeit und signalisiert unvollständige Klammerpaare oder fehlerhafte Operatorfolgen vor der numerischen Auswertung.',
          ],
        },
      ],
      recommendationTitle: 'Lineare Algebra',
      recommendationDesc: 'Berechne Determinanten, Inverse und lineare Gleichungssysteme.',
      recommendationAction: 'Matrizenrechner öffnen →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Lineare Algebra',
      title: 'Handbuch für Matrizenrechnung & Lineare Systeme',
      sections: [
        {
          title: 'Laplace-Entwicklung für Determinanten',
          paragraphs: [
            'Determinanten quadratischer Matrizen bestimmen die Lösbarkeit linearer Gleichungssysteme.',
          ],
        },
      ],
      recommendationTitle: 'Analysis & Infinitesimalrechnung',
      recommendationDesc: 'Berechne Ableitungen, Integrale und Grenzwerte online.',
      recommendationAction: 'Analysis-Rechner öffnen →',
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
      recommendationTitle: 'Funktionsplotter 2D',
      recommendationDesc: 'Visualisiere Funktionskurven und Tangenten dynamisch.',
      recommendationAction: 'Grafikrechner öffnen →',
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
      recommendationTitle: 'Base-N Programmierer-Rechner',
      recommendationDesc: 'Konvertiere Hex, Dez, Okt, Bin und führe Bitoperationen durch.',
      recommendationAction: 'Programmierer-Rechner öffnen →',
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
      recommendationTitle: 'KI-Code-Tutor',
      recommendationDesc: 'Kompiliere und lerne C++, C und Python im Browser.',
      recommendationAction: 'Code-Tutor öffnen →',
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
      title: 'Handleiding Wetenschappelijke Berekeningen & Multi-regel Weergave',
      sections: [
        {
          title: 'Drijvende-Kommaberekeningen en Decimale Normalisatie',
          paragraphs: [
            'Digitale processors voeren berekeningen uit via IEEE 754 dubbele precisie (float64). Omdat decimale breuken zoals 0.1 en 0.2 repeterende binaire vormen hebben, kunnen afrondingsfoutjes optreden (bijvoorbeeld 0.1 + 0.2 = 0.30000000000000004).',
            'SciCalcX past epsilon-drempelnormalisatie toe om de weergave tot 12 decimalen schoon te houden en biedt een S-D-toets om resultaten om te zetten naar vereenvoudigde breuken.',
          ],
        },
        {
          title: 'Rekenvolgorde en Syntaxvalidatie',
          paragraphs: [
            'Berekeningen volgen de standaard wiskundige rekenvolgorde (PEMDAS): haakjes, machten en wortels, vermenigvuldigingen en delingen van links naar rechts, gevolgd door optellen en aftrekken.',
            'Het scherm controleert haakjesparen in real-time om invoerfouten en syntaxproblemen op te vangen voordat de numerieke evaluatie begint.',
          ],
        },
      ],
      recommendationTitle: 'Matrixalgebra',
      recommendationDesc: 'Bereken determinanten, inverse matrices en lineaire stelsels met precisie.',
      recommendationAction: 'Open Matrixcalculator →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Lineaire Algebra',
      title: 'Handleiding Matrixalgebra & Lineaire Stelsels',
      sections: [
        {
          title: 'Determinanten via Laplace-expansie',
          paragraphs: [
            'Determinanten van 2x2 en 3x3 matrices worden berekend via Laplace-cofactorexpansie langs de eerste rij om de oplosbaarheid van het stelsel te bepalen.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Calculus Suite',
      recommendationDesc: 'Bereken afgeleiden, integralen en limieten met interactieve grafieken.',
      recommendationAction: 'Open Calculuscalculator →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Wiskundige Analyse',
      title: 'Handleiding Numerieke Analyse & Differentiaalrekening',
      sections: [
        {
          title: 'Numerieke Differentiatie via Verschilquotiënten',
          paragraphs: [
            'Afgeleiden worden numeriek berekend via symmetrische centrale differentiequotiënten voor een hogere nauwkeurigheidsorde.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Functieplotter 2D',
      recommendationDesc: 'Plot functies in 2D en inspecteer afgeleiden, toppen en snijpunten.',
      recommendationAction: 'Open Functieplotter 2D →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Cartesiaanse Meetkunde',
      title: 'Handleiding 2D Functieplotter',
      sections: [
        {
          title: '2D Functieplotter en Dynamische Grafieken',
          paragraphs: [
            'De plotter bemonstert functies dynamisch om verticale asymptoten, toppen en snijpunten vloeiend in beeld te brengen.',
          ],
        },
      ],
      recommendationTitle: 'Programmeurscalculator Base-N',
      recommendationDesc: 'Converteer tussen hexadecimaal, binair en voer bitsgewijze bewerkingen uit.',
      recommendationAction: 'Open Programmeurscalculator →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Binaire Systemen',
      title: 'Handleiding Base-N & Binaire Bewerkingen',
      sections: [
        {
          title: 'Twee-complement en Bitsgewijze Logica',
          paragraphs: [
            'Biedt directe ondersteuning voor 32-bits registers (int32), twee-complement en bitsgewijze bewerkingen (AND, OR, XOR, NOT, verschuivingen).',
          ],
        },
      ],
      recommendationTitle: 'AI-Codetutor',
      recommendationDesc: 'Schrijf, voer uit en leer C++, C en Python rechtstreeks in de browser.',
      recommendationAction: 'Open Codetutor →',
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
      title: 'Guia de Computação Científica & Avaliação Multilinha',
      sections: [
        {
          title: 'Precisão de Ponto Flutuante e Normalização Decimal',
          paragraphs: [
            'O processamento numérico opera através de pontos flutuantes de precisão dupla conforme o padrão IEEE 754. Como frações decimais (como 0.1 ou 0.2) possuem dízimas binárias periódicas, pequenas imprecisões de arredondamento podem surgir (como 0.30000000000000004).',
            'O SciCalcX adota normalização por limiar épsilon para exibir resultados estáveis em até 12 casas decimais, acompanhado de uma tecla S-D para conversão em frações racionais simplificadas.',
          ],
        },
        {
          title: 'Precedência de Operadores e Validação de Sintaxe',
          paragraphs: [
            'A avaliação obedece à ordem matemática formal (PEMDAS): parênteses, expoentes e radicais, multiplicação e divisão da esquerda para a direita, seguidas de adição e subtração.',
            'O visor multilinha valida a correspondência de parênteses em tempo real para acusar discrepâncias sintáticas antes da resolução numérica.',
          ],
        },
      ],
      recommendationTitle: 'Álgebra Matricial',
      recommendationDesc: 'Calcule determinantes, inversas e multiplicação de matrizes online.',
      recommendationAction: 'Abrir Calculadora de Matrizes →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Álgebra Linear',
      title: 'Guia de Álgebra Matricial',
      sections: [
        {
          title: 'Determinantes por Expansão de Laplace',
          paragraphs: [
            'Avalia determinantes de matrizes 2x2 e 3x3 através de expansão por cofatores de Laplace ao longo da primeira linha.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Cálculo Diferencial e Integral',
      recommendationDesc: 'Derivadas numéricas, integrais e limites com gráficos interativos.',
      recommendationAction: 'Abrir Calculadora de Cálculo →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Análise Matemática',
      title: 'Guia de Cálculo Numérico & Análise',
      sections: [
        {
          title: 'Derivação Numérica por Diferenças Simétricas',
          paragraphs: [
            'Calcula derivadas numericamente por meio de quocientes de diferenças centrais simétricas para obter convergência de ordem superior.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Traçador Gráfico 2D',
      recommendationDesc: 'Plote funções 2D e inspecione derivadas, raízes e assíntotas graficamente.',
      recommendationAction: 'Abrir Traçador Gráfico 2D →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Geometria Cartesiana',
      title: 'Manual de Visualização Gráfica 2D',
      sections: [
        {
          title: 'Traçado de Curvas 2D e Derivadas Gráficas',
          paragraphs: [
            'Gera curvas bidimensionais dinâmicas com detecção de assíntotas verticais e visualização de tangentes.',
          ],
        },
      ],
      recommendationTitle: 'Calculadora Base-N',
      recommendationDesc: 'Conversões entre binário, hexadecimal e lógica de bits.',
      recommendationAction: 'Abrir Calculadora Base-N →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Sistemas Binários',
      title: 'Manual de Lógica Binária e Base-N',
      sections: [
        {
          title: 'Complemento de Dois e Operações Lógicas',
          paragraphs: [
            'Permite manipular inteiros sinalizados de 32 bits (int32) e aplicar operações bit a bit fundamentais (AND, OR, XOR, NOT, deslocamentos).',
          ],
        },
      ],
      recommendationTitle: 'Plataforma de Tutor de Código de IA',
      recommendationDesc: 'Escreva, teste e aprenda C++, C e Python direto no seu navegador.',
      recommendationAction: 'Abrir Tutor de Código →',
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
      title: 'Guida al Calcolo Scientifico & Valutazione Multilinea',
      sections: [
        {
          title: 'Precisione in Virgola Mobile e Normalizzazione Decimale',
          paragraphs: [
            'I microprocessori eseguono calcoli numerici sfruttando numeri in virgola mobile a doppia precisione (standard IEEE 754). Poiché alcune frazioni decimali (come 0.1 o 0.2) possiedono rappresentazioni binarie periodiche, possono emergere lievi discrepanze di arrotondamento (ad esempio 0.30000000000000004).',
            'SciCalcX adotta una normalizzazione per soglia epsilon che stabilizza i valori visualizzati fino a 12 cifre decimali, insieme al tasto S-D per convertire i valori in frazioni razionali semplificate.',
          ],
        },
        {
          title: 'Precedenza degli Operatori e Controllo della Sintassi',
          paragraphs: [
            'Le espressioni rispettano la gerarchia algebrica convenzionale (PEMDAS): parentesi, potenze e radici, moltiplicazioni e divisioni da sinistra a destra, seguite da addizioni e sottrazioni.',
            'Il display multilinea verifica in tempo reale l\'apertura e la chiusura delle parentesi, segnalando errori di sintassi prima del calcolo numerico effettivo.',
          ],
        },
      ],
      recommendationTitle: 'Algebra Matriciale',
      recommendationDesc: 'Calcola determinanti, matrici inverse e moltiplicazioni matriciali.',
      recommendationAction: 'Apri Calcolatrice di Matrici →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: 'Algebra Lineare',
      title: 'Guida all\'Algebra Matriciale',
      sections: [
        {
          title: 'Calcolo dei Determinanti con Espansione di Laplace',
          paragraphs: [
            'Calcola il determinante mediante lo sviluppo di Laplace lungo la prima riga per matrici 2x2 e 3x3.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: 'Calcolo Infinitesimale',
      recommendationDesc: 'Derivate numeriche, integrali definiti e limiti con curve grafiche.',
      recommendationAction: 'Apri Calcolatrice di Analisi →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: 'Analisi Matematica',
      title: 'Guida all\'Analisi Matematica e Metodi Numerici',
      sections: [
        {
          title: 'Derivazione Numerica con Differenze Simmetriche',
          paragraphs: [
            'Valuta derivate numeriche tramite quozienti di differenze centrali simmetriche per garantire un ordine di convergenza superiore.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: 'Grafico Funzioni 2D',
      recommendationDesc: 'Traccia funzioni 2D e analizza derivate grafiche, tangenti ed estremi.',
      recommendationAction: 'Apri Grafico Funzioni 2D →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: 'Geometria Cartesiana',
      title: 'Manuale per il Grafico di Funzioni 2D',
      sections: [
        {
          title: 'Grafici 2D e Curve Continue',
          paragraphs: [
            'Genera curve cartesiane continue identificando asintoti verticali, tangenti e punti critici in tempo reale.',
          ],
        },
      ],
      recommendationTitle: 'Calcolatrice Base-N',
      recommendationDesc: 'Conversioni binario, esadecimale e operazioni logiche a livello di bit.',
      recommendationAction: 'Apri Calcolatrice Base-N →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: 'Sistemi Binari',
      title: 'Manuale di Logica Binaria e Base-N',
      sections: [
        {
          title: 'Complemento a Due e Logica Bit a Bit',
          paragraphs: [
            'Supporta registri a 32 bit con segno (int32) e operazioni logiche a livello di bit (AND, OR, XOR, NOT, shift).',
          ],
        },
      ],
      recommendationTitle: 'Piattaforma di Tutor di Codice IA',
      recommendationDesc: 'Scrivi, esegui e impara C++, C e Python direttamente nel browser.',
      recommendationAction: 'Apri Tutor di Codice →',
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
      title: '関数電卓の基本仕様＆複数行数式計算ガイド',
      sections: [
        {
          title: '浮動小数点演算とイプシロン正規化',
          paragraphs: [
            'デジタルプロセッサはIEEE 754規格の倍精度浮動小数点数（float64）を用いて演算を行います。0.1や0.2のような10進小数は2進数で循環小数となるため、計算過程でごくわずかな丸め誤差（例：0.1 + 0.2 = 0.30000000000000004）が発生します。',
            'SciCalcXではイプシロン閾値判定を用いた10進正規化を行い、最大12桁の表示アーティファクトを抑制しています。また、S-Dキーにより一般的な有理数を簡約分数として近似表示できます。',
          ],
        },
        {
          title: '演算子の優先順位と構文チェック',
          paragraphs: [
            '入力された数式は標準的な代数階層（PEMDAS：括弧、累乗・平方根、左から右への乗除算、加減算）に厳密に従って評価されます。',
            '複数行ディスプレイは開閉括弧の対応関係をリアルタイムに追跡し、構文の不整合を評価前に検知します。',
          ],
        },
      ],
      recommendationTitle: '線形代数・行列計算',
      recommendationDesc: '行列式、逆行列、連立方程式を高精度に解く専用計算ツールです。',
      recommendationAction: '行列計算機を開く →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: '線形代数',
      title: '行列計算＆連立方程式ガイド',
      sections: [
        {
          title: '余因子展開による行列式計算',
          paragraphs: [
            'ラプラス余因子展開により2x2および3x3正方行列の行列式を計算し、システムの可逆性（特異性）を判定します。',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: '微積分スイート',
      recommendationDesc: '数値微分、定積分、極限をグラフと共に解析します。',
      recommendationAction: '微積分計算機を開く →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: '数学解析',
      title: '数値微積分＆解析ガイド',
      sections: [
        {
          title: '対称差分商による数値微分',
          paragraphs: [
            '中心対称差分商アルゴリズムを用いて、解析的微分を行わずに高次の近似精度で変化率を算出します。',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: '2Dグラフスタジオ',
      recommendationDesc: '2Dグラフで接線の傾き、極値、漸近線を視覚的に確認できます。',
      recommendationAction: '2Dグラフ描画ツールを開く →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: '直交幾何学',
      title: '2D関数グラフ＆プロッター解説',
      sections: [
        {
          title: '関数プロットと曲線解析',
          paragraphs: [
            '関数の動的サンプリングを行い、垂直漸近線や傾きの変化を滑らかな曲線として可視化します。',
          ],
        },
      ],
      recommendationTitle: '基数・ビット演算機',
      recommendationDesc: '16進数、2進数の相互変換とビット論理演算。',
      recommendationAction: '基数・ビット演算機を開く →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: '2進数システム',
      title: '基数変換＆ビット演算ハンドブック',
      sections: [
        {
          title: '2の補数表現とビット演算',
          paragraphs: [
            '32ビット符号付き整数（int32）のビット単位操作（AND、OR、XOR、NOT、シフト）および2進・16進変換を扱います。',
          ],
        },
      ],
      recommendationTitle: 'AIコードチューター',
      recommendationDesc: 'ブラウザ上でC++、C、Pythonを直接実行・デバッグ学習。',
      recommendationAction: 'コードチューターを開く →',
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
      title: '공학용 계산 및 멀티라인 수식 평가 가이드',
      sections: [
        {
          title: '부동소수점 연산과 엡실론 정규화',
          paragraphs: [
            '디지털 프로세서는 IEEE 754 표준의 배정밀도 부동소수점(float64)을 기반으로 연산을 수행합니다. 0.1이나 0.2와 같은 10진 소수는 2진법에서 무한 순환소수로 표현되므로, 연산 과정에서 미세한 반올림 오차(예: 0.1 + 0.2 = 0.30000000000000004)가 발생합니다.',
            'SciCalcX는 엡실론 임계치 기반의 10진 정규화를 적용하여 화면상에 최대 12자리까지 안정적인 결과를 표시하며, S-D 키를 통해 계산값을 기약분수로 근사 변환할 수 있습니다.',
          ],
        },
        {
          title: '연산자 우선순위와 구문 검증',
          paragraphs: [
            '수식은 표준 대수학 연산 순서(PEMDAS: 괄호, 거듭제곱과 근호, 좌에서 우로의 곱셈과 나눗셈, 덧셈과 뺄셈)를 엄격히 따릅니다.',
            '멀티라인 뷰포트는 열린 괄호와 닫힌 괄호의 짝을 실시간으로 추적하여 수식 평가 전 구문 오류를 방지합니다.',
          ],
        },
      ],
      recommendationTitle: '선형대수학 & 행렬 계산',
      recommendationDesc: '행렬식, 역행렬, 행렬 곱셈 및 연립일차방정식을 단계별로 정밀 계산합니다.',
      recommendationAction: '행렬 계산기 열기 →',
      recommendationHref: '/matrix',
    },
    matrix: {
      badge: '선형대수학',
      title: '행렬 대수 & 연립방정식 가이드',
      sections: [
        {
          title: '라플라스 여인수 전개를 통한 행렬식 계산',
          paragraphs: [
            '첫 번째 행을 따른 라플라스 여인수 전개를 통해 2x2 및 3x3 정사각 행렬의 행렬식을 정밀하게 계산하고 역행렬 존재 여부를 판별합니다.',
          ],
          formula: 'det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        },
      ],
      recommendationTitle: '미적분 스위트',
      recommendationDesc: '수치 미분, 정적분 및 극한값을 그래프와 함께 해석합니다.',
      recommendationAction: '미적분 계산기 열기 →',
      recommendationHref: '/calculus',
    },
    calculus: {
      badge: '수학적 해석학',
      title: '수치 해석 & 미적분 가이드',
      sections: [
        {
          title: '대칭 차분법을 통한 수치 미분',
          paragraphs: [
            '중심 대칭 차분 상용 알고리즘을 활용하여 해석적 미분 없이도 고차 정확도로 순간 변화율을 산출합니다.',
          ],
          formula: 'f\'(x) ≈ (f(x + h) - f(x - h)) / (2h)',
        },
      ],
      recommendationTitle: '2D 그래프 스튜디오',
      recommendationDesc: '2D 그래프로 접선의 기울기, 극값, 점근선을 시각적으로 확인하세요.',
      recommendationAction: '2D 함수 그래프 열기 →',
      recommendationHref: '/graphing',
    },
    graphing: {
      badge: '데카르트 기하학',
      title: '2D 함수 플로터 & 기하학 가이드',
      sections: [
        {
          title: '2D 함수 플로팅 및 곡선 해석',
          paragraphs: [
            '함수를 동적으로 샘플링하여 수직 점근선, 극값, 접선의 기울기를 부드러운 곡선으로 시각화합니다.',
          ],
        },
      ],
      recommendationTitle: '프로그래머 계산기',
      recommendationDesc: '16진수, 2진수 진법 변환 및 비트 단위 논리 연산.',
      recommendationAction: 'N진수 계산기 열기 →',
      recommendationHref: '/programming',
    },
    programming: {
      badge: '이진 시스템',
      title: 'N진수 변환 & 비트 연산 핸드북',
      sections: [
        {
          title: '2의 보수 및 32비트 논리 연산',
          paragraphs: [
            '32비트 부호 있는 정수(int32)를 대상으로 2의 보수 표현과 비트 단위 논리 연산(AND, OR, XOR, NOT, 시프트)을 수행합니다.',
          ],
        },
      ],
      recommendationTitle: 'AI 코드 튜터',
      recommendationDesc: '브라우저에서 C++, C, Python 코드를 직접 작성하고 지능형 피드백을 받으세요.',
      recommendationAction: '코드 튜터 열기 →',
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
