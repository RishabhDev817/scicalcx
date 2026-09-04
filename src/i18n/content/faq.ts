import type { SupportedLanguage } from '../ui';

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: Record<SupportedLanguage, Record<string, FAQItem[]>> = {
  en: {
    scientific: [
      {
        question: 'How do I switch between Degrees (DEG) and Radians (RAD)?',
        answer: 'Switch between DEG and RAD using the slider toggle in the live status bar at the top of the calculator layout. In DEG mode, full circle angles equal 360° (so sin(90) = 1). In RAD mode, full rotations equal 2π radians (so sin(π/2) = 1). The active mode applies immediately to all trigonometric and inverse trigonometric calculations.',
      },
      {
        question: 'What is the difference between SCI, ENG, and FIX calculation modes?',
        answer: 'FIX rounds calculation outputs to a specified number of fixed decimal places. SCI (Scientific) formats outputs as a decimal coefficient multiplied by a base-10 power (e.g., 5.2 × 10⁴). ENG (Engineering) notation constrains exponents to multiples of 3 (e.g., milli, micro, kilo, mega), aligning with engineering units.',
      },
      {
        question: 'How does the free online fraction calculator work via the S-D key?',
        answer: 'The S-D key stands for Standard to Decimal conversion. Tapping it cycles calculation results between their decimal expansion, simplified improper fractions (e.g., 7/4), and mixed numbers (e.g., 1 3/4), providing exact fractional representations without precision loss.',
      },
      {
        question: 'How does the multi-line engineering calculator validate expressions?',
        answer: 'SciCalcX features a real-time mathematical expression solver with live parenthetical validation. Check the lower-left status readout under the formula viewport: it displays open and close bracket counters. Ensure all opened parentheses ( are closed with matching ), preventing calculation syntax errors.',
      },
      {
        question: 'What is the difference between the AC, CE, and DEL buttons?',
        answer: 'AC (All Clear) purges the current formula buffer and resets the accumulator. DEL functions as a backspace, deleting only the immediate last token or character. CE (Clear Entry) removes only the most recent numeric term or operator without clearing the entire formula history.',
      },
      {
        question: 'How does this advanced web calculator eliminate floating-point inaccuracies (like 0.1 + 0.2)?',
        answer: 'Standard JavaScript engines execute numeric calculations using double-precision binary floats (IEEE 754), which cannot represent base-10 fractions like 0.1 or 0.2 without binary round-off errors. SciCalcX implements custom epsilon-threshold sanitization and precision normalization to ensure calculations like 0.1 + 0.2 evaluate cleanly to 0.3.',
      },
    ],
    matrix: [
      {
        question: 'How do I calculate the determinant of a 3x3 matrix?',
        answer: 'To compute the determinant of a 3x3 matrix, SciCalcX applies Laplace cofactor expansion along the first row: det(A) = a(ei - fh) - b(di - fg) + c(dh - eg). Enter the 9 matrix elements in Matrix A and click Determinant to view the exact scalar value.',
      },
      {
        question: 'When is a matrix invertible (non-singular)?',
        answer: 'A square matrix is invertible if and only if its determinant is non-zero (det(A) ≠ 0). If det(A) = 0, the matrix is singular (its row or column vectors are linearly dependent) and no unique multiplicative inverse exists.',
      },
      {
        question: 'What are the dimensional rules for matrix multiplication (A × B)?',
        answer: 'Matrix multiplication requires the column count of Matrix A to match the row count of Matrix B. For square 3x3 matrices, the resulting matrix is also 3x3, calculated by evaluating the dot product of row i from A with column j from B.',
      },
      {
        question: 'What does the Matrix Transpose operation do?',
        answer: 'Transposing a matrix swaps its rows and columns across the main diagonal. An element located at row i, column j is mapped to row j, column i in the transposed matrix Aᵀ.',
      },
    ],
    calculus: [
      {
        question: 'How does numerical integration via Simpson\'s rule work?',
        answer: 'Simpson\'s 1/3 Rule approximates definite integrals by fitting parabolic arcs over adjacent subintervals. It provides fourth-order accuracy, outperforming trapezoidal approximations for smooth continuous functions.',
      },
      {
        question: 'Can SciCalcX solve both definite and indefinite integrals?',
        answer: 'Yes. Definite integrals compute exact numerical values between boundaries [a, b] using high-order adaptive quadrature. Indefinite integration computes polynomial antiderivatives algebraically.',
      },
      {
        question: 'How does the solver calculate polynomial roots?',
        answer: 'Roots are computed using exact algebraic closed-form methods: the quadratic formula for degree 2, and Cardano’s cubic method for degree 3, returning real and complex conjugate roots.',
      },
    ],
    graphing: [
      {
        question: 'What mathematical functions does the 2D Graphing Studio support?',
        answer: 'The studio supports standard polynomials, trigonometric ratios (sin, cos, tan), exponential curves (e^x), natural logarithms (ln(x)), and compound expressions like sin(x)*x or cos(2x)+1.',
      },
      {
        question: 'How does adaptive sampling handle vertical asymptotes?',
        answer: 'The viewport dynamically samples function coordinates and detects extreme slope discontinuities (such as tan(π/2) or 1/x at 0) to avoid drawing spurious connecting vertical lines across asymptotes.',
      },
      {
        question: 'Can I pan and zoom the Cartesian coordinate grid?',
        answer: 'Yes! Use touch gestures, mouse wheel scroll, or the on-screen zoom control buttons to inspect critical roots, local extrema, and asymptotic boundaries.',
      },
    ],
    programming: [
      {
        question: 'How does Two\'s Complement signed integer representation work?',
        answer: 'In two’s complement, the most significant bit (MSB) acts as a sign bit (1 for negative, 0 for positive). Negative integers are formed by inverting all bits and adding 1 to the least significant bit, allowing hardware adders to execute subtraction natively.',
      },
      {
        question: 'Which bitwise logic operations can I execute?',
        answer: 'SciCalcX supports 64-bit word sizing with bitwise AND, OR, XOR, NOT, Left Bitshift (<<), and Right Bitshift (>>), updated dynamically across Hex, Dec, Oct, and Bin viewports.',
      },
    ],
    statistics: [
      {
        question: 'What is Bessel\'s correction and why is it applied to sample variance?',
        answer: 'Dividing sum-of-squares deviations by N tends to systematically underestimate population variance because sample points are closer to their own sample mean. Bessel\'s correction divides by N - 1 degrees of freedom, providing an unbiased estimator s².',
      },
      {
        question: 'What does the Pearson correlation coefficient (r) indicate?',
        answer: 'The Pearson correlation coefficient ranges from -1.0 to +1.0. A value of +1.0 denotes perfect positive linear correlation, 0.0 denotes zero linear relationship, and -1.0 denotes perfect inverse linear relationship.',
      },
    ],
    compiler: [
      {
        question: 'Where is my program code executed?',
        answer: 'All code simulation and interactive algorithmic execution runs safely inside an isolated client-side browser sandbox without transmitting your source code to external servers.',
      },
      {
        question: 'Which programming languages are supported in the AI Code Tutor?',
        answer: 'SciCalcX provides code execution and interactive tutoring for C++, C, Python, and JavaScript, with real-time error diagnostics and line-by-line algorithmic feedback.',
      },
      {
        question: 'Can I provide custom standard input (stdin) to my programs?',
        answer: 'Yes! The interactive console features a dedicated stdin stream input field, allowing you to simulate user prompts, command-line arguments, and piped data structures.',
      },
    ],
  },
  es: {
    scientific: [
      {
        question: '¿Cómo funciona la calculadora científica online y el cambio entre Grados (DEG) y Radianes (RAD)?',
        answer: 'Cambia entre DEG y RAD usando el selector deslizante en la barra de estado superior de la calculadora científica online. En modo DEG, una circunferencia completa equivale a 360° (sin(90) = 1). En modo RAD, equivale a 2π radianes (sin(π/2) = 1). El modo activo se aplica inmediatamente a todas las funciones trigonométricas.',
      },
      {
        question: '¿Qué ventajas ofrece esta calculadora web avanzada con modos SCI, ENG y FIX?',
        answer: 'Nuestra calculadora web avanzada incluye modo FIX para redondear a decimales fijos, modo SCI (Científico) en potencias de 10 (ej. 5.2 × 10⁴), y modo ENG (Ingeniería) con exponentes múltiplos de 3 (mili, micro, kilo, mega).',
      },
      {
        question: '¿SciCalcX incluye una calculadora de fracciones gratuita en línea con la tecla S-D?',
        answer: '¡Sí! La tecla S-D funciona como una calculadora de fracciones gratuita en línea. Al presionarla, conmuta los resultados instantáneamente entre su valor decimal, fracción irreducible simplificada (ej. 7/4) y número mixto (ej. 1 3/4), proporcionando exactitud matemática sin pérdidas de precisión.',
      },
      {
        question: '¿Cómo opera la calculadora de ingeniería multilínea como solucionador de expresiones matemáticas?',
        answer: 'Como calculadora de ingeniería multilínea, muestra la expresión completa en el visor superior mientras calcula el resultado. Funciona como un seguro solucionador de expresiones matemáticas con validación léxica de paréntesis anidados y orden de operaciones PEMDAS en tiempo real.',
      },
      {
        question: '¿Cuál es la diferencia entre las teclas AC, CE y DEL?',
        answer: 'AC (All Clear) borra toda la fórmula y reinicia la memoria temporal. DEL borra solo el último carácter o token ingresado (retroceso). CE (Clear Entry) elimina el término o número actual sin reiniciar todo el historial de la fórmula.',
      },
      {
        question: '¿Cómo elimina esta calculadora web avanzada las imprecisiones de coma flotante (ej. 0.1 + 0.2)?',
        answer: 'Los motores estándar de JavaScript usan números flotantes binarios IEEE 754 que pueden generar artefactos de redondeo. SciCalcX aplica normalización y umbrales épsilon personalizados para que cálculos como 0.1 + 0.2 den exactamente 0.3.',
      },
    ],
    matrix: [
      {
        question: '¿Cómo calcular determinantes con la calculadora de matrices científica en 2x2 y 3x3?',
        answer: 'Nuestra calculadora de matrices científica aplica el método de cofactores de Laplace: det(A) = a(ei - fh) - b(di - fg) + c(dh - eg). Ingresa los coeficientes en la Matriz A y obtén el determinante exacto y paso a paso.',
      },
      {
        question: '¿Cuándo es invertible una matriz en la calculadora de matrices científica?',
        answer: 'Una matriz cuadrada es invertible si y solo si su determinante es diferente de cero (det(A) ≠ 0). Si det(A) = 0, la matriz es singular y no existe matriz inversa.',
      },
      {
        question: '¿Cuáles son las reglas de dimensión para la multiplicación de matrices (A × B)?',
        answer: 'La multiplicación requiere que el número de columnas de la Matriz A coincida con las filas de la Matriz B, calculando el producto escalar entre filas y columnas.',
      },
      {
        question: '¿Qué hace la operación de Transposición?',
        answer: 'Transponer una matriz intercambia sus filas por columnas a lo largo de la diagonal principal. El elemento en la fila i, columna j pasa a ocupar la fila j, columna i en la matriz Aᵀ.',
      },
    ],
    calculus: [
      {
        question: '¿Cómo resuelve derivadas e integrales esta calculadora de cálculo basada en web?',
        answer: 'Nuestra calculadora de cálculo basada en web utiliza la regla de Simpson 1/3 para integrales definidas continuas y cocientes de diferencias centrales simétricas para derivadas numéricas precisas.',
      },
      {
        question: '¿Cómo opera como solucionador de expresiones matemáticas para derivadas y límites?',
        answer: 'Como solucionador de expresiones matemáticas, evalúa antiderivadas algebraicas, derivadas instantáneas y aproximaciones de límites con visualización gráfica interactiva.',
      },
      {
        question: '¿Cómo se resuelven las raíces cuadráticas y cúbicas?',
        answer: 'Las raíces se calculan mediante fórmulas algebraicas exactas: la fórmula cuadrática clásica para grado 2 y el método de Cardano para grado 3.',
      },
    ],
    graphing: [
      {
        question: '¿Cómo graficar funciones y analizar derivadas con la calculadora de derivadas gráficas en línea?',
        answer: 'La calculadora de derivadas gráficas en línea grafica funciones en un plano cartesiano 2D interactivo, permitiendo inspeccionar pendientes, raíces, máximos, mínimos y tangentes.',
      },
      {
        question: '¿Cómo detecta discontinuidades y asíntotas?',
        answer: 'El motor muestrea dinámicamente las coordenadas y calcula el gradiente de derivadas para evitar dibujar líneas verticales espurias en asíntotas infinitas.',
      },
      {
        question: '¿Puedo hacer zoom y desplazarme por el plano cartesiano?',
        answer: '¡Sí! Usa controles de zoom, arrastra el lienzo o ajusta los límites de los ejes para un análisis gráfico completo.',
      },
    ],
    programming: [
      {
        question: '¿Cómo realizar conversiones de base y operaciones con la calculadora base-n para programadores?',
        answer: 'La calculadora base-n para programadores permite conversiones automáticas instantáneas entre Hex, Dec, Oct y Bin con representación a nivel de bits y complemento a dos.',
      },
      {
        question: '¿Qué operaciones lógicas bitwise admite?',
        answer: 'Admite AND, OR, XOR, NOT y desplazamientos de bits (shl/shr) en enteros con signo de hasta 64 bits.',
      },
    ],
    statistics: [
      {
        question: '¿Qué es la corrección de Bessel en el cálculo de varianza muestral?',
        answer: 'Dividir la suma de cuadrados por N - 1 en lugar de N corrige el sesgo intrínseco de las muestras, proporcionando un estimador no sesgado de la varianza poblacional.',
      },
      {
        question: '¿Qué indica el coeficiente de correlación de Pearson (r)?',
        answer: 'El coeficiente r varía entre -1.0 y +1.0. Un valor de +1.0 denota correlación lineal positiva perfecta, 0.0 ausencia de correlación y -1.0 correlación lineal negativa perfecta.',
      },
    ],
    compiler: [
      {
        question: '¿Cómo funciona la plataforma de tutor de código de IA para C++, C y Python?',
        answer: 'Nuestra plataforma de tutor de código de IA ejecuta y compila código de forma segura en el navegador, ofreciendo diagnósticos inteligentes de errores y explicaciones algorítmicas paso a paso.',
      },
      {
        question: '¿Puedo enviar datos al flujo estándar (stdin)?',
        answer: '¡Sí! La consola interactiva cuenta con un campo dedicado de entrada estándar para simular entradas de usuario en tiempo real.',
      },
    ],
  },
  fr: {
    scientific: [
      {
        question: 'Comment fonctionne la calculatrice scientifique en ligne et le mode d\'ingénierie multiligne ?',
        answer: 'Notre calculatrice scientifique en ligne intègre un affichage de calculatrice d\'ingénierie multiligne qui présente l\'expression mathématique complète et le résultat instantané.',
      },
      {
        question: 'Quels sont les avantages de cette calculatrice web avancée ?',
        answer: 'Cette calculatrice web avancée élimine les erreurs d\'arrondi IEEE 754 grâce à une normalisation epsilon et propose les modes d\'affichage FIX, SCI et ENG.',
      },
      {
        question: 'Cette calculatrice intègre-t-elle une calculatrice de fractions gratuite en ligne ?',
        answer: 'Oui ! La touche S-D agit comme une calculatrice de fractions gratuite en ligne pour convertir instantanément les décimales en fractions exactes simplifiées.',
      },
      {
        question: 'Comment utiliser le résolveur d\'expressions mathématiques sans erreurs de syntaxe ?',
        answer: 'Le résolveur d\'expressions mathématiques valide en temps réel les parenthèses ouvrantes et fermantes pour éviter toute erreur avant l\'évaluation.',
      },
      {
        question: 'Quelle est la différence entre AC, CE et DEL ?',
        answer: 'AC efface toute l\'expression, DEL supprime le dernier caractère saisi, et CE efface uniquement le terme actif.',
      },
    ],
    matrix: [
      {
        question: 'Comment calculer déterminants et inverses avec la calculatrice de matrices scientifique ?',
        answer: 'La calculatrice de matrices scientifique applique le développement en cofacteurs de Laplace pour déterminer la valeur scalaire exacte et calculer l\'inverse matricielle.',
      },
      {
        question: 'Quand une matrice est-elle inversible ?',
        answer: 'Une matrice carrée est inversible si et seulement si son déterminant est différent de zéro (det(A) ≠ 0).',
      },
    ],
    calculus: [
      {
        question: 'Comment fonctionne la calculatrice de calcul infinitésimal basée sur le Web ?',
        answer: 'La calculatrice de calcul infinitésimal basée sur le Web calcule les intégrales définies par la méthode de Simpson et évalue les dérivées par quotients différentiels symétriques.',
      },
    ],
    graphing: [
      {
        question: 'Comment tracer des fonctions avec la calculatrice de dérivées graphiques en ligne ?',
        answer: 'Entrez votre équation et la calculatrice de dérivées graphiques en ligne trace la courbe 2D en inspectant les racines, extremums et pentes tangentes.',
      },
    ],
    programming: [
      {
        question: 'Comment utiliser la calculatrice de base-n pour programmeurs ?',
        answer: 'La calculatrice de base-n pour programmeurs convertit instantanément entre Hex, Déc, Oct et Bin avec logique de bits 64 bits et complément à deux.',
      },
    ],
    statistics: [
      {
        question: 'Pourquoi utiliser la correction de Bessel en statistique ?',
        answer: 'Diviser par N - 1 permet d\'obtenir un estimateur sans biais de la variance d\'une population à partir d\'un échantillon.',
      },
    ],
    compiler: [
      {
        question: 'Comment fonctionne la plateforme de tuteur de code IA pour C++ et Python ?',
        answer: 'La plateforme de tuteur de code IA exécute votre code en toute sécurité dans le navigateur avec des explications d\'erreurs et des conseils guidés.',
      },
    ],
  },
  de: {
    scientific: [
      {
        question: 'Wie schalte ich zwischen Grad (DEG) und Bogenmaß (RAD) um?',
        answer: 'Wechseln Sie zwischen DEG und RAD über den Schieberegler in der oberen Statusleiste. Im DEG-Modus beträgt ein Vollkreis 360° (sin(90) = 1). Im RAD-Modus entspricht er 2π Radiant (sin(π/2) = 1). Die Einstellung gilt sofort für alle trigonometrischen Berechnungen.',
      },
      {
        question: 'Was ist der Unterschied zwischen SCI-, ENG- und FIX-Modus?',
        answer: 'FIX rundet Ausgaben auf eine feste Anzahl von Dezimalstellen. SCI (Wissenschaftlich) stellt Zahlen als Zehnerpotenz dar (z. B. 5,2 × 10⁴). ENG (Ingenieurwesen) begrenzt Exponenten auf Vielfache von 3 (Milli, Mikro, Kilo, Mega).',
      },
      {
        question: 'Was bewirkt die S-D (oder S⇔D) Taste?',
        answer: 'Die S-D-Taste wechselt zwischen Standard- und Dezimaldarstellung. Durch Drücken wird zwischen Dezimalwert, gekürztem Bruch (z. B. 7/4) und gemischter Zahl (z. B. 1 3/4) ohne Genauigkeitsverlust umgeschaltet.',
      },
      {
        question: 'Warum erhalte ich eine Syntaxfehler- oder Klammer-Meldung?',
        answer: 'SciCalcX validiert Klammern in Echtzeit. Prüfen Sie den Zähler unten links im Display: Alle geöffneten Klammern müssen geschlossen sein, und Operatoren dürfen nicht direkt aufeinander folgen (z. B. +* oder //).',
      },
      {
        question: 'Was unterscheidet AC, CE und DEL?',
        answer: 'AC (All Clear) löscht die gesamte Formel und den Zwischenspeicher. DEL löscht nur das zuletzt eingegebene Zeichen (Rücktaste). CE (Clear Entry) entfernt nur den aktuellen Term, ohne den Rest der Formel zurückzusetzen.',
      },
      {
        question: 'Wie behebt SciCalcX Gleitkomma-Ungenauigkeiten (z. B. 0,1 + 0,2)?',
        answer: 'Standard-JavaScript-Engines verwenden IEEE-754-Fließkommazahlen, die periodische Binärbrüche nicht exakt darstellen können. SciCalcX wendet Epsilon-Normalisierungen an, sodass 0,1 + 0,2 exakt als 0,3 ausgewertet wird.',
      },
    ],
    matrix: [
      {
        question: 'Wie berechne ich die Determinante einer 3x3-Matrix?',
        answer: 'SciCalcX wendet die Laplace-Entwicklung entlang der ersten Zeile an: det(A) = a(ei - fh) - b(di - fg) + c(dh - eg). Geben Sie die 9 Werte ein und klicken Sie auf Determinante.',
      },
      {
        question: 'Wann ist eine Matrix invertierbar?',
        answer: 'Eine quadratische Matrix ist genau dann invertierbar, wenn ihre Determinante ungleich null ist (det(A) ≠ 0).',
      },
    ],
    calculus: [
      {
        question: 'Wie funktioniert die numerische Integration nach Simpson?',
        answer: 'Die Simpson-Regel approximiert Integrale durch Parabelbögen über Teilintervalle mit Konvergenz vierter Ordnung.',
      },
    ],
    graphing: [
      {
        question: 'Welche mathematischen Funktionen unterstützt das Grafik-Studio?',
        answer: 'Polynome, trigonometrische Funktionen (sin, cos, tan), Exponentialfunktionen (e^x) und Logarithmen.',
      },
    ],
    programming: [
      {
        question: 'Wie funktioniert das Zweierkomplement?',
        answer: 'Das höchstwertige Bit bestimmt das Vorzeichen (1 negativ, 0 positiv). Bitinversion plus 1 ergibt die negative Zahl.',
      },
    ],
    statistics: [
      {
        question: 'Was sagt der Pearson-Korrelationskoeffizient (r) aus?',
        answer: 'Der Korrelationskoeffizient liegt zwischen -1 und +1. +1 bedeutet perfekte positive lineare Korrelation, 0 keine Korrelation und -1 perfekte negative Korrelation.',
      },
    ],
    compiler: [
      {
        question: 'Wo wird mein Programmcode ausgeführt?',
        answer: 'Alle Codesimulationen laufen direkt in einer sicheren lokalen Sandbox in Ihrem Browser ab. Es werden keine privaten Daten auf unseren Servern gespeichert.',
      },
    ],
  },
  nl: {
    scientific: [
      {
        question: 'Hoe gebruik ik deze online wetenschappelijke calculator?',
        answer: 'Schakel eenvoudig tussen graden (DEG) en radialen (RAD) via de schakelaar in de bovenste statusbalk. In DEG-modus is een cirkel 360° (sin(90) = 1) en in RAD-modus 2π radialen (sin(π/2) = 1). De calculator berekent alle goniometrische en algebraïsche bewerkingen direct in real-time.',
      },
      {
        question: 'Wat is de werking van de multi-regel technische calculator en de wiskundige expressie-oplosser?',
        answer: 'Als multi-regel technische calculator toont het bovenste scherm de volledige wiskundige expressie terwijl het onderste scherm direct het resultaat berekent. Het fungeert als een betrouwbare wiskundige expressie-oplosser die de wiskundige rekenvolgorde (PEMDAS) en haakjesparen strikt handhaaft.',
      },
      {
        question: 'Hoe werkt de gratis online breukencalculator via de S-D toets?',
        answer: 'De S-D toets (Standard to Decimal) schakelt resultaten direct om tussen decimale getallen, vereenvoudigde oneigenlijke breuken (bijv. 7/4) en gemengde getallen (bijv. 1 3/4) zonder enig verlies van numerieke precisie.',
      },
      {
        question: 'Hoe elimineert deze geavanceerde webcalculator drijvende-komma afrondingsfouten (zoals 0.1 + 0.2)?',
        answer: 'Standaard browsers gebruiken IEEE 754 binaire floats, wat kleine afrondingsfouten veroorzaakt. SciCalcX past geavanceerde epsilon-drempelnormalisatie toe zodat berekeningen zoals 0.1 + 0.2 exact als 0.3 worden weergegeven.',
      },
      {
        question: 'Wat is het verschil tussen de knoppen AC, CE en DEL?',
        answer: 'AC (All Clear) wist de gehele formule en het werkgeheugen. DEL werkt als backspace en verwijdert alleen het laatste teken. CE (Clear Entry) verwijdert de laatst ingevoerde term zonder de rest van de formule te resetten.',
      },
    ],
    matrix: [
      {
        question: 'Hoe bereken ik de determinant met de wetenschappelijke matrixcalculator?',
        answer: 'De wetenschappelijke matrixcalculator berekent de determinant van 2x2 en 3x3 matrices via Laplace-cofactorexpansie langs de eerste rij: det(A) = a(ei - fh) - b(di - fg) + c(dh - eg). Vul de elementen in en klik op Determinant.',
      },
      {
        question: 'Wanneer is een matrix inverteerbaar?',
        answer: 'Een matrix is inverteerbaar dan en slechts dan als de determinant ongelijk is aan nul (det(A) ≠ 0). Als det(A) = 0 is de matrix singulier en bestaat er geen inverse.',
      },
      {
        question: 'Ondersteunt de matrixcalculator matrixvermenigvuldiging (A × B)?',
        answer: 'Ja! Voor vermenigvuldiging moet het aantal kolommen van A gelijk zijn aan het aantal rijen van B. Het resultaat wordt berekend via het inwendig product van rijen en kolommen.',
      },
    ],
    calculus: [
      {
        question: 'Hoe berekent de webgebaseerde calculuscalculator numerieke afgeleiden?',
        answer: 'De webgebaseerde calculuscalculator gebruikt symmetrische centrale differentiequotiënten f\'(x) ≈ (f(x + h) - f(x - h)) / (2h) voor maximale precisie bij het bepalen van de raaklijnhelling.',
      },
      {
        question: 'Hoe worden bepaalde integralen geëvalueerd?',
        answer: 'Integralen worden berekend met behulp van de samengestelde 1/3-regel van Simpson over meerdere deelintervallen, wat een nauwkeurigheid van de vierde orde garandeert.',
      },
    ],
    graphing: [
      {
        question: 'Hoe gebruik ik de online grafische afgeleidingscalculator voor 2D-functies?',
        answer: 'Voer uw wiskundige functie in en het 2D-canvas plot de kromme direct. U kunt inzoomen, pannen en nulpunten, toppen, asymptoten en grafische afgeleiden inspecteren.',
      },
      {
        question: 'Hoe worden asymptoten en toppen gedetecteerd?',
        answer: 'De plotter bemonstert de functie dynamisch en analyseert hellingsveranderingen en tekenwisselingen om toppen, dalen en oneindige sprongen betrouwbaar te visualiseren.',
      },
    ],
    programming: [
      {
        question: 'Hoe werkt de programmeren base-n calculator voor hexadecimale en binaire conversies?',
        answer: 'De programmeren base-n calculator zet getallen direct om tussen Hex, Dec, Oct en Bin. U kunt ook bitsgewijze bewerkingen uitvoeren zoals AND, OR, XOR, NOT en bitshifts in 64-bits precisie.',
      },
      {
        question: 'Ondersteunt de calculator twee-complement?',
        answer: 'Ja, negatieve getallen worden weergegeven volgens de standaard twee-complement notatie op bitniveau.',
      },
    ],
    statistics: [
      {
        question: 'Hoe bereken ik het gemiddelde en de standaarddeviatie met Bessel-correctie?',
        answer: 'Voer uw getallenreeks in gescheiden door komma\'s of spaties. SciCalcX berekent direct gemiddelde, mediaan, modus, variantie en de steekproefstandaarddeviatie met Bessel-correctie (delen door N - 1).',
      },
      {
        question: 'Hoe werkt lineaire regressie in SciCalcX?',
        answer: 'Voer gepaarde data (x, y) in om de kleinste-kwadraten regressielijn y = mx + b en de Pearson-correlatiecoëfficiënt (r) te bepalen.',
      },
    ],
    compiler: [
      {
        question: 'Hoe werkt het AI-codetutorplatform voor C++, C en Python?',
        answer: 'Het AI-codetutorplatform stelt u in staat om programmacode rechtstreeks in de browser te schrijven, uit te voeren en te debuggen met directe feedback en intelligente uitleg.',
      },
      {
        question: 'Wordt de code lokaal en veilig uitgevoerd?',
        answer: 'Ja, alle simulaties en code-uitvoeringen vinden plaats in een geïsoleerde browser-sandbox zonder dat uw code naar externe servers wordt verzonden.',
      },
    ],
  },
  pt: {
    scientific: [
      {
        question: 'Como funciona esta calculadora científica online e seu display de engenharia multilinha?',
        answer: 'Nossa calculadora científica online possui visor de calculadora de engenharia multilinha que exibe simultaneamente a expressão algébrica e o resultado exato com validação de parênteses.',
      },
      {
        question: 'Quais as vantagens desta calculadora web avançada?',
        answer: 'Como calculadora web avançada, o SciCalcX previne imprecisões de ponto flutuante IEEE 754 e oferece modos de exibição FIX, SCI e ENG.',
      },
      {
        question: 'O SciCalcX inclui uma calculadora de frações gratuita online?',
        answer: 'Sim! A tecla S-D atua como uma calculadora de frações gratuita online, convertendo instantaneamente entre dízimas decimais e frações irredutíveis exatas.',
      },
      {
        question: 'Como o solucionador de expressões matemáticas previne erros de sintaxe?',
        answer: 'O solucionador de expressões matemáticas valida em tempo real a abertura e fechamento de parênteses e a ordem das operações PEMDAS.',
      },
      {
        question: 'Qual a diferença entre os botões AC, CE e DEL?',
        answer: 'AC limpa toda a fórmula e acumulador, DEL apaga o último caractere digitado e CE remove apenas a entrada atual.',
      },
    ],
    matrix: [
      {
        question: 'Como calcular determinantes com a calculadora de matrices científica?',
        answer: 'A calculadora de matrizes científica emprega expansão por cofatores de Laplace para calcular determinantes e inversas de matrizes 2x2 e 3x3.',
      },
      {
        question: 'Quando uma matriz é inversível?',
        answer: 'Uma matriz quadrada é inversível se e somente se seu determinante for diferente de zero (det(A) ≠ 0).',
      },
    ],
    calculus: [
      {
        question: 'Como funciona a calculadora de cálculo baseada na web?',
        answer: 'A calculadora de cálculo baseada na web avalia integrais definidas via regra composta de Simpson e calcula derivadas instantâneas por quocientes de diferenças simétricas.',
      },
    ],
    graphing: [
      {
        question: 'Como plotar funções com a calculadora de derivadas gráficas online?',
        answer: 'A calculadora de derivadas gráficas online plota funções em 2D, identificando raízes, extremos, assíntotas e derivadas graficamente.',
      },
    ],
    programming: [
      {
        question: 'Como usar a calculadora de base-n para programadores?',
        answer: 'A calculadora de base-n para programadores permite conversões diretas entre Hex, Dec, Oct e Bin com lógica bitwise de 64 bits.',
      },
    ],
    statistics: [
      {
        question: 'O que é a correção de Bessel para variância?',
        answer: 'Dividir por N - 1 elimina o viés amostral, fornecendo um estimador correto da variância populacional.',
      },
    ],
    compiler: [
      {
        question: 'Como funciona a plataforma de tutoria de código de IA?',
        answer: 'A plataforma de tutoria de código de IA compila C, C++ e Python diretamente no navegador com feedback explicativo de bugs.',
      },
    ],
  },
  it: {
    scientific: [
      {
        question: 'Come funziona questa calcolatrice scientifica online e il visore multilinea?',
        answer: 'Questa calcolatrice scientifica online include un visore da calcolatrice ingegneristica multilinea che mostra la formula completa e il risultato in tempo reale.',
      },
      {
        question: 'Quali vantaggi offre questa calcolatrice web avanzata?',
        answer: 'Questa calcolatrice web avanzata elimina gli errori di arrotondamento binario IEEE 754 ed include i formati FIX, SCI ed ENG.',
      },
      {
        question: 'SciCalcX include una calcolatrice di frazioni gratuita online?',
        answer: 'Sì! Il tasto S-D opera come una calcolatrice di frazioni gratuita online per alternare tra decimali e frazioni irriducibili esatte.',
      },
      {
        question: 'Come opera la calcolatrice ingegneristica multilinea come risolutore di espressioni matematiche?',
        answer: 'Come risolutore di espressioni matematiche, convalida la corretta chiusura delle parentesi e rispetta rigorosamente la gerarchia algebrica PEMDAS.',
      },
      {
        question: 'Qual è la differenza tra i tasti AC, CE e DEL?',
        answer: 'AC azzera l\'intera formula, DEL cancella l\'ultimo carattere e CE rimuove l\'ultimo numero digitato.',
      },
    ],
    matrix: [
      {
        question: 'Come calcolare determinanti con la calcolatrice di matrici scientifica?',
        answer: 'La calcolatrice di matrici scientifica applica lo sviluppo per cofattori di Laplace lungo la prima riga per matrici 2x2 e 3x3.',
      },
      {
        question: 'Quando una matrice è invertibile?',
        answer: 'Una matrice quadrata è invertibile se e solo se il suo determinante è diverso da zero (det(A) ≠ 0).',
      },
    ],
    calculus: [
      {
        question: 'Come funziona la calcolatrice di analisi matematica basata sul web?',
        answer: 'La calcolatrice di analisi matematica basata sul web calcola integrali definiti con la regola di Simpson e derivate con differenze simmetriche.',
      },
    ],
    graphing: [
      {
        question: 'Come usare la calcolatrice di derivate grafiche online?',
        answer: 'La calcolatrice di derivate grafiche online visualizza funzioni in 2D analizzando tangenti, radici ed asintoti.',
      },
    ],
    programming: [
      {
        question: 'Come opera la calcolatrice base-n per programmatori?',
        answer: 'La calcolatrice base-n per programmatori converte tra Hex, Dec, Oct e Bin supportando operatori logici a 64 bit.',
      },
    ],
    statistics: [
      {
        question: 'A cosa serve la correzione di Bessel?',
        answer: 'Dividere per N - 1 produce una stima corretta e non polarizzata della varianza della popolazione.',
      },
    ],
    compiler: [
      {
        question: 'Come funziona la piattaforma di tutor di codice IA?',
        answer: 'La piattaforma di tutor di codice IA compila ed esegue C, C++ e Python direttamente nel browser con suggerimenti intelligenti.',
      },
    ],
  },
  ja: {
    scientific: [
      {
        question: '科学用計算機 オンラインおよび高度なウェブ計算機の使い方を教えてください。`',
        answer: '当サイトのオンライン科学用計算機は、上段のステータスバーで度数法（DEG）とラジアン（RAD）を瞬時に切り替え可能。高度なウェブ計算機として浮動小数点誤差を解消した高精度計算を提供します。',
      },
      {
        question: '複数行エンジニアリング計算機と数式ソルバーの仕組みはどうなっていますか？',
        answer: '複数行エンジニアリング計算機表示により、入力数式と計算結果を同時に確認できます。厳密な数式ソルバーとして括弧の整合性をリアルタイム判定し、構文エラーを防止します。',
      },
      {
        question: 'オンライン無料分数計算機はどのように活用できますか？',
        answer: 'S-Dキーを押すことで、オンライン無料分数計算機として小数表記、既約分数、帯分数を相互に損失なく変換できます。',
      },
      {
        question: 'AC、CE、DELキーの違いは何ですか？',
        answer: 'ACは数式バッファ全体を消去、DELは直前の文字を削除（バックスペース）、CEは現在の入力数値のみをクリアします。',
      },
    ],
    matrix: [
      {
        question: '科学用行列計算機で行列式や逆行列を計算するには？',
        answer: '科学用行列計算機はラプラス余因子展開により2x2および3x3行列の行列式と逆行列をステップバイステップで計算します。',
      },
      {
        question: '逆行列が存在する条件は何ですか？',
        answer: '正方行列の行列式がゼロでない（det(A) ≠ 0）場合にのみ逆行列が存在します。',
      },
    ],
    calculus: [
      {
        question: 'ウェブベースの微積分計算機で微分や積分を解くには？',
        answer: 'ウェブベースの微積分計算機はシンプソン法による定積分と対称差分商による数値微分をサポートする数式ソルバーです。',
      },
    ],
    graphing: [
      {
        question: 'オンライングラフ微分計算機で2D関数を描画するには？',
        answer: 'オンライングラフ微分計算機に数式を入力すると、2Dプロッターが接線の傾き、極値、漸近線を瞬時にプロットします。',
      },
    ],
    programming: [
      {
        question: 'プログラマー向けN進数計算機で基数変換を行うには？',
        answer: 'プログラマー向けN進数計算機は16進数、10進数、8進数、2進数を相互変換し、64ビットのビット演算をサポートします。',
      },
    ],
    statistics: [
      {
        question: 'ベッセルの補正とは何ですか？',
        answer: '標本分散の計算で自由度 N - 1 で割ることにより、母集団分散の不偏推定量が得られます。',
      },
    ],
    compiler: [
      {
        question: 'AIコードチュータープラットフォームの機能は何ですか？',
        answer: 'AIコードチュータープラットフォームはブラウザ上でC++、C、Pythonを安全に実行し、AIによるアルゴリズム指導を提供します。',
      },
    ],
  },
  ko: {
    scientific: [
      {
        question: '온라인 공학용 계산기 및 고급 웹 계산기는 어떻게 사용하나요?',
        answer: '본 온라인 공학용 계산기는 상단 슬라이더로 도(DEG)와 라디안(RAD)을 즉시 전환할 수 있으며, 고급 웹 계산기로서 IEEE 754 부동 소수점 오차를 정규화합니다.',
      },
      {
        question: '멀티라인 공학 계산기 및 수학 수식 계산기의 연산 원리는 무엇인가요?',
        answer: '멀티라인 공학 계산기 인터페이스를 통해 입력 수식과 연산 결과를 상하 2단으로 제공하며, 괄호 검증을 갖춘 지능형 수학 수식 계산기로 작동합니다.',
      },
      {
        question: '온라인 무료 분수 계산기 기능은 어떻게 전환하나요?',
        answer: 'S-D 키를 누르면 온라인 무료 분수 계산기 기능이 활성화되어 소수점 수치와 기약 분수를 손실 없이 즉시 전환합니다.',
      },
      {
        question: 'AC, CE, DEL 버튼의 차이는 무엇인가요?',
        answer: 'AC는 수식 버퍼 전체를 초기화하고, DEL은 마지막 한 글자를 삭제하며, CE는 현재 입력 중인 숫자만 삭제합니다.',
      },
    ],
    matrix: [
      {
        question: '공학용 행렬 계산기로 역행렬과 행렬식을 계산하려면 어떻게 하나요?',
        answer: '공학용 행렬 계산기는 1행을 따른 라플라스 여인수 전개를 통해 2x2 및 3x3 행렬식과 역행렬을 정밀 계산합니다.',
      },
      {
        question: '역행렬이 존재하는 조건은 무엇인가요?',
        answer: '행렬식이 0이 아닐 때(det(A) ≠ 0)에만 역행렬이 존재합니다.',
      },
    ],
    calculus: [
      {
        question: '웹 기반 미적분 계산기로 미분과 정적분을 풀려면 어떻게 하나요?',
        answer: '웹 기반 미적분 계산기는 심슨 1/3 공식을 통한 정적분과 대칭 차분 상용 알고리즘을 통한 수치 미분을 지원합니다.',
      },
    ],
    graphing: [
      {
        question: '온라인 그래프 미분 계산기로 2D 함수 그래프를 그리려면 어떻게 하나요?',
        answer: '온라인 그래프 미분 계산기에 함수를 입력하면 2D 캔버스에 접선의 기울기, 극값, 점근선이 실시간 시각화됩니다.',
      },
    ],
    programming: [
      {
        question: '프로그래머 N진수 계산기로 진법 변환과 비트 연산을 하려면 어떻게 하나요?',
        answer: '프로그래머 N진수 계산기는 16진수, 10진수, 8진수, 2진수를 즉시 상호 변환하고 64비트 비트 논리 연산을 지원합니다.',
      },
    ],
    statistics: [
      {
        question: '표본 분산에서 베셀 보정(Bessel\'s correction)이란 무엇인가요?',
        answer: '자유도 N - 1로 나눔으로써 표본 통계량이 모분산을 과소평가하는 편향을 제거합니다.',
      },
    ],
    compiler: [
      {
        question: 'AI 코드 튜터 플랫폼은 어떤 언어를 지원하나요?',
        answer: 'AI 코드 튜터 플랫폼은 C++, C, Python, JavaScript를 브라우저 샌드박스에서 직접 실행하고 지능형 튜터링을 제공합니다.',
      },
    ],
  },
};

export function getFaqs(pageKey: string, lang: SupportedLanguage = 'en'): FAQItem[] {
  const langFaqs = faqs[lang] || faqs.en;
  return langFaqs[pageKey] || faqs.en[pageKey] || [];
}
