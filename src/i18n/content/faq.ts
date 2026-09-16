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
        answer: 'The S-D key stands for Standard to Decimal conversion. Tapping it cycles calculation results between their decimal expansion, simplified improper fractions (e.g., 7/4), and mixed numbers (e.g., 1 3/4), providing simplified fractional representations for common rational results.',
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
        question: 'How does this advanced web calculator reduce common floating-point display artifacts (like 0.1 + 0.2)?',
        answer: 'Standard JavaScript engines execute numeric calculations using double-precision binary floats (IEEE 754), which cannot represent certain base-10 fractions like 0.1 or 0.2 without binary round-off noise. Floating-point normalization can present common decimal results such as 0.1 + 0.2 as 0.3 when the computed value falls within the configured normalization threshold.',
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
        answer: 'Yes. Definite integrals compute high-precision numerical approximations between boundaries [a, b] using high-order numerical quadrature (composite Simpson\'s 1/3 rule). Indefinite integration computes polynomial antiderivatives algebraically.',
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
        answer: 'SciCalcX supports 32-bit signed integer (int32) word sizing with bitwise AND, OR, XOR, NOT, Left Bitshift (<<), and Right Bitshift (>>), updated dynamically across Hex, Dec, Oct, and Bin viewports.',
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
        question: 'Where is my code executed?',
        answer: 'Code submitted through the Code Tutor and Online Compiler is executed inside isolated, ephemeral container sandboxes provided by external execution services (primary: Judge0 CE API at ce.judge0.com, with automatic fallback to Wandbox API at wandbox.org). Unlike SciCalcX mathematical calculators which perform their calculations locally in your browser, Code Tutor execution does not occur inside your browser.',
      },
      {
        question: 'Which programming languages are supported?',
        answer: 'SciCalcX Code Tutor officially supports Python 3 (CPython 3.12/3.13), C (GCC 14), and C++20 (GCC 14). Each language features an interactive syntax curriculum, automated error diagnostics, and support for standard input (stdin).',
      },
      {
        question: 'Is my code sent to an external service?',
        answer: 'Yes. When you click "Run Code", your source code, chosen language identifier, and any optional standard input (stdin) are sent over an encrypted HTTPS connection directly to the sandbox execution backend (Judge0 CE or Wandbox). Your program is transmitted only at the moment of execution.',
      },
      {
        question: 'How does SciCalcX protect code during execution?',
        answer: 'All code transmissions take place over encrypted HTTPS (TLS). Execution occurs within temporary, isolated Linux container environments with strict resource constraints, including tight execution time limits (timeouts) and memory ceilings, preventing unauthorized access or persistent state.',
      },
      {
        question: 'Does SciCalcX permanently store my source code?',
        answer: 'No. SciCalcX does not permanently store, log, or index your source code on our servers, nor is it stored in any remote database. Your drafts are saved exclusively in your own browser\'s local storage (localStorage) on your personal device. Once the execution service completes compilation and runs your script, the temporary container is destroyed.',
      },
      {
        question: 'What happens when I click Run Code?',
        answer: 'When you click "Run Code", SciCalcX packages your editor text and stdin stream and posts them securely via HTTPS to the primary execution service (Judge0 CE). The service compiles and runs the program in a sandbox container, captures the standard output (stdout) and standard error/diagnostic messages (stderr), and returns the results to be displayed directly in your terminal console.',
      },
      {
        question: 'What happens if the primary execution service is unavailable?',
        answer: 'SciCalcX features an automated fallback mechanism. If the primary Judge0 CE service experiences downtime, rate limits, or network unreachability, the client automatically re-routes the execution request over HTTPS to the secondary Wandbox API (wandbox.org), ensuring uninterrupted coding and learning.',
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
        answer: '¡Sí! La tecla S-D funciona como una calculadora de fracciones gratuita en línea. Al presionarla, conmuta los resultados instantáneamente entre su valor decimal, fracción irreducible simplificada (ej. 7/4) y número mixto (ej. 1 3/4), proporcionando representaciones fraccionarias simplificadas para resultados racionales comunes.',
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
        question: '¿Cómo reduce esta calculadora web avanzada los artefactos de coma flotante (ej. 0.1 + 0.2)?',
        answer: 'Los motores estándar de JavaScript usan números flotantes binarios IEEE 754 que pueden generar pequeñas discrepancias de redondeo. La normalización de punto flotante puede presentar resultados decimales comunes como 0.1 + 0.2 como 0.3 cuando el valor calculado cae dentro del umbral de normalización configurado.',
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
        answer: 'Admite AND, OR, XOR, NOT y desplazamientos de bits (shl/shr) en enteros con signo de 32 bits (int32).',
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
        question: '¿Dónde se ejecuta mi código?',
        answer: 'El código enviado a través del Tutor de Código y Compilador se ejecuta en contenedores sandbox aislados y efímeros gestionados por servicios externos (primario: API de Judge0 CE en ce.judge0.com, con respaldo automático en la API de Wandbox en wandbox.org). A diferencia de las calculadoras matemáticas de SciCalcX que realizan sus cálculos de forma local en el navegador, la ejecución del Tutor de Código no ocurre dentro de tu navegador.',
      },
      {
        question: '¿Qué lenguajes de programación son compatibles?',
        answer: 'SciCalcX admite oficialmente Python 3, C (GCC 14) y C++20 (GCC 14). Cada lenguaje incluye lecciones interactivas, diagnósticos de errores automáticos y compatibilidad con el flujo de entrada estándar (stdin).',
      },
      {
        question: '¿Se envía mi código a un servicio externo?',
        answer: 'Sí. Al hacer clic en «Ejecutar Código», tu código fuente, el lenguaje seleccionado y los datos opcionales de entrada estándar (stdin) se transmiten mediante una conexión cifrada HTTPS directamente al backend de ejecución en sandbox (Judge0 CE o Wandbox). El código solo se envía en el instante en que decides ejecutarlo.',
      },
      {
        question: '¿Cómo protege SciCalcX el código durante su ejecución?',
        answer: 'Toda transmisión de datos se realiza mediante HTTPS (TLS) cifrado. La ejecución se lleva a cabo en contenedores Linux temporales y estrictamente aislados con límites definidos de tiempo de CPU y consumo de memoria, impidiendo accesos no autorizados o retención de estado.',
      },
      {
        question: '¿SciCalcX almacena mi código fuente de forma permanente?',
        answer: 'No. SciCalcX no guarda, no registra ni almacena de forma persistente tu código fuente en servidores externos ni bases de datos remotas. Tus borradores se guardan únicamente en el almacenamiento local (localStorage) de tu propio navegador. Tras finalizar la ejecución, el contenedor temporal se destruye.',
      },
      {
        question: '¿Qué ocurre cuando hago clic en «Ejecutar Código»?',
        answer: 'Al pulsar «Ejecutar Código», SciCalcX empaqueta tu código fuente y entrada (stdin) y los envía por HTTPS al servicio primario (Judge0 CE). Este compila y ejecuta el script en un contenedor sandbox, captura la salida estándar (stdout) y los mensajes de diagnóstico o error (stderr), y los devuelve inmediatamente a tu consola.',
      },
      {
        question: '¿Qué sucede si el servicio de ejecución primario no está disponible?',
        answer: 'SciCalcX cuenta con un sistema de contingencia automatizado. Si el servicio primario Judge0 CE no responde, supera límites de tasa o sufre una interrupción, el sistema redirige la solicitud de ejecución de forma transparente a la API secundaria de Wandbox (wandbox.org), garantizando la continuidad de tus prácticas.',
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
        question: 'Comment cette calculatrice traite-t-elle la précision en virgule flottante ?',
        answer: 'Cette calculatrice applique une normalisation basée sur un seuil epsilon pour réduire les artefacts d\'affichage IEEE 754, permettant de formater des calculs comme 0.1 + 0.2 en 0.3 dans la limite du seuil configuré, et propose les modes FIX, SCI et ENG.',
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
        answer: 'La calculatrice de base-n pour programmeurs convertit instantanément entre Hex, Déc, Oct et Bin avec logique de bits entiers signés 32 bits (int32) et complément à deux.',
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
        question: 'Où mon code est-il exécuté ?',
        answer: 'Le code soumis via le Tuteur de Code et Compilateur est exécuté dans des conteneurs sandbox isolés et éphémères fournis par des services distants (principal : API Judge0 CE sur ce.judge0.com, avec basculement automatique vers l\'API Wandbox sur wandbox.org). Contrairement aux calculatrices mathématiques de SciCalcX qui effectuent leurs calculs localement dans votre navigateur, l\'exécution du Tuteur de Code n\'a pas lieu dans votre navigateur.',
      },
      {
        question: 'Quels langages de programmation sont pris en charge ?',
        answer: 'SciCalcX prend officiellement en charge Python 3, C (GCC 14) et C++20 (GCC 14). Chaque langage bénéficie d\'un parcours d\'apprentissage interactif, de diagnostics d\'erreurs automatiques et de la prise en charge de l\'entrée standard (stdin).',
      },
      {
        question: 'Mon code est-il transmis à un service externe ?',
        answer: 'Oui. Lorsque vous cliquez sur « Exécuter le Code », votre code source, l\'identifiant de langage et l\'éventuelle entrée standard (stdin) sont envoyés via une connexion sécurisée HTTPS chiffrée directement au backend d\'exécution sandbox (Judge0 CE ou Wandbox). Votre programme n\'est transmis qu\'au moment précis de l\'exécution.',
      },
      {
        question: 'Comment SciCalcX protège-t-il le code durant l\'exécution ?',
        answer: 'Toutes les communications s\'effectuent via HTTPS (TLS) chiffré. L\'exécution se déroule dans des conteneurs Linux temporaires et étanches avec des plafonds stricts de temps processeur et de mémoire, évitant tout accès non autorisé ou conservation d\'état.',
      },
      {
        question: 'SciCalcX conserve-t-il mon code source de manière permanente ?',
        answer: 'Non. SciCalcX ne conserve, n\'enregistre ni n\'indexe de façon permanente votre code source sur des serveurs distants ou des bases de données. Vos brouillons sont stockés uniquement dans le stockage local (localStorage) de votre navigateur sur votre appareil. Une fois l\'exécution terminée, le conteneur éphémère est détruit.',
      },
      {
        question: 'Que se passe-t-il lorsque je clique sur « Exécuter le Code » ?',
        answer: 'Lorsque vous cliquez sur « Exécuter le Code », SciCalcX transmet votre code et l\'entrée stdin via HTTPS au service principal (Judge0 CE). Celui-ci compile et exécute le programme en sandbox, capture la sortie standard (stdout) ainsi que les erreurs (stderr), puis renvoie les résultats directement sur votre console de terminal.',
      },
      {
        question: 'Que se passe-t-il si le service d\'exécution principal est indisponible ?',
        answer: 'SciCalcX intègre un mécanisme de secours automatisé. Si le service principal Judge0 CE est indisponible ou saturé, la requête d\'exécution est automatiquement redirigée via HTTPS vers l\'API secondaire Wandbox (wandbox.org), assurant un apprentissage sans interruption.',
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
        answer: 'Die S-D-Taste wechselt zwischen Standard- und Dezimaldarstellung. Durch Drücken wird zwischen Dezimalwert, gekürztem Bruch (z. B. 7/4) und gemischter Zahl (z. B. 1 3/4) für gängige rationale Ergebnisse umgeschaltet.',
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
        question: 'Wie verarbeitet SciCalcX Darstellungsartefakte der Gleitkommaarithmetik (z. B. 0,1 + 0,2)?',
        answer: 'Standard-JavaScript-Engines verwenden IEEE-754-Fließkommazahlen, die bestimmte periodische Binärbrüche nicht endlich binär abbilden können. Die Fließkomma-Normalisierung kann gängige Dezimalergebnisse wie 0,1 + 0,2 als 0,3 darstellen, wenn der berechnete Wert innerhalb des konfigurierten Schwellenwerts liegt.',
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
        answer: 'Der über den Code-Tutor eingereichte Code wird in isolierten, temporären Container-Sandboxes externer Ausführungsdienste ausgeführt (primär: Judge0 CE API unter ce.judge0.com, mit automatischem Fallback auf die Wandbox API unter wandbox.org). Im Gegensatz zu den mathematischen Rechnern von SciCalcX, die ihre Berechnungen lokal im Browser ausführen, findet die Codeausführung nicht in Ihrem Browser statt.',
      },
      {
        question: 'Welche Programmiersprachen werden unterstützt?',
        answer: 'SciCalcX unterstützt offiziell Python 3, C (GCC 14) und C++20 (GCC 14). Für jede Sprache stehen strukturierte Lektionen, automatische Syntaxdiagnosen und Unterstützung für die Standardeingabe (stdin) zur Verfügung.',
      },
      {
        question: 'Wird mein Quellcode an einen externen Dienst gesendet?',
        answer: 'Ja. Sobald Sie auf „Code Ausführen“ klicken, werden Ihr Quellcode, die gewählte Programmiersprache und optionale Standardeingaben (stdin) verschlüsselt über HTTPS direkt an den Sandbox-Dienst (Judge0 CE oder Wandbox) übertragen. Der Quelltext wird ausschließlich im Moment der Ausführung übermittelt.',
      },
      {
        question: 'Wie schützt SciCalcX den Code während der Ausführung?',
        answer: 'Die Übertragung erfolgt durchgehend über verschlüsseltes HTTPS (TLS). Die Ausführung findet in kurzlebigen, streng abgeschirmten Linux-Containern mit harten Ressourcenbegrenzungen (Ausführungszeit- und Speicherlimits) statt, wodurch Datenzugriffe Dritter und persistente Zustände ausgeschlossen sind.',
      },
      {
        question: 'Speichert SciCalcX meinen Quellcode dauerhaft?',
        answer: 'Nein. SciCalcX speichert, protokolliert oder archiviert Ihren Quellcode zu keinem Zeitpunkt dauerhaft auf Servern oder in entfernten Datenbanken. Ihre Entwürfe verbleiben ausschließlich im lokalen Speicher (localStorage) Ihres Browsers. Nach Abschluss der Programmausführung wird der temporäre Container sofort verworfen.',
      },
      {
        question: 'Was geschieht, wenn ich auf „Code Ausführen“ klicke?',
        answer: 'Beim Klick auf „Code Ausführen“ übermittelt SciCalcX Ihren Code und eventuelle stdin-Eingaben via HTTPS an den primären Ausführungsdienst (Judge0 CE). Dieser kompiliert und führt das Skript in einer sicheren Sandbox aus, erfasst die Standardausgabe (stdout) sowie Fehlermeldungen (stderr) und spiegelt sie direkt in Ihre Terminalkonsole zurück.',
      },
      {
        question: 'Was passiert, wenn der primäre Ausführungsdienst nicht erreichbar ist?',
        answer: 'SciCalcX verfügt über ein integriertes automatisches Fallback-System. Sollte die primäre Judge0 CE-Schnittstelle nicht erreichbar sein oder Ratenbegrenzungen unterliegen, wird die Anfrage automatisch und unterbrechungsfrei an die sekundäre Wandbox API (wandbox.org) umgeleitet.',
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
        answer: 'De S-D toets (Standard to Decimal) schakelt resultaten direct om tussen decimale getallen, vereenvoudigde oneigenlijke breuken (bijv. 7/4) en gemengde getallen (bijv. 1 3/4) voor veelvoorkomende rationale resultaten.',
      },
      {
        question: 'Hoe verwerkt deze webcalculator drijvende-komma weergave-artefacten (zoals 0.1 + 0.2)?',
        answer: 'Standaard browsers gebruiken IEEE 754 binaire floats, wat kleine afrondingsartefacten kan veroorzaken. Drijvende-komma normalisatie kan veelvoorkomende decimale resultaten zoals 0.1 + 0.2 als 0.3 weergeven wanneer de berekende waarde binnen de geconfigureerde drempel valt.',
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
        answer: 'De programmeren base-n calculator zet getallen direct om tussen Hex, Dec, Oct en Bin. U kunt ook bitsgewijze bewerkingen uitvoeren zoals AND, OR, XOR, NOT en bitshifts in 32-bits precisie.',
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
        question: 'Waar wordt mijn programmacode uitgevoerd?',
        answer: 'Code die via de Code Tutor wordt ingediend, wordt uitgevoerd in geïsoleerde, tijdelijke container-sandboxes van externe uitvoeringsdiensten (primair: Judge0 CE API op ce.judge0.com, met automatische terugval naar de Wandbox API op wandbox.org). In tegenstelling tot de wiskundige rekenmachines van SciCalcX die hun berekeningen lokaal in uw browser uitvoeren, vindt de code-uitvoering van de Code Tutor niet plaats in uw browser.',
      },
      {
        question: 'Welke programmeertalen worden ondersteund?',
        answer: 'SciCalcX ondersteunt officieel Python 3, C (GCC 14) en C++20 (GCC 14). Elke taal beschikt over een interactief leertraject, automatische foutdiagnose en ondersteuning voor standaardinvoer (stdin).',
      },
      {
        question: 'Wordt mijn code naar een externe dienst verzonden?',
        answer: 'Ja. Wanneer u op "Code Uitvoeren" klikt, worden uw broncode, taalkeuze en eventuele standaardinvoer (stdin) via een versleutelde HTTPS-verbinding rechtstreeks naar de sandbox-backend (Judge0 CE of Wandbox) verzonden. Uw programma wordt uitsluitend verzonden op het moment van uitvoering.',
      },
      {
        question: 'Hoe beveiligt SciCalcX code tijdens de uitvoering?',
        answer: 'Alle datacommunicatie verloopt via versleutelde HTTPS-verbindingen (TLS). De uitvoering vindt plaats binnen kortlevende, streng afgeschermde Linux-containers met strikte limieten voor verwerkingstijd en geheugen, waardoor ongeautoriseerde toegang wordt voorkomen.',
      },
      {
        question: 'Bewaart SciCalcX mijn broncode permanent?',
        answer: 'Nee. SciCalcX slaat uw broncode nooit permanent op en registreert deze niet in externe databases. Uw concepten worden uitsluitend bewaard in de lokale opslag (localStorage) van uw eigen browser. Zodra de uitvoering is voltooid, wordt de tijdelijke container vernietigd.',
      },
      {
        question: 'Wat gebeurt er als ik op "Code Uitvoeren" klik?',
        answer: 'Zodra u op "Code Uitvoeren" klikt, verzendt SciCalcX uw code en stdin-invoer via HTTPS naar de primaire dienst (Judge0 CE). Deze compileert en draait het programma in een sandbox, vangt de standaarduitvoer (stdout) en foutmeldingen (stderr) op, en toont het resultaat direct in uw console.',
      },
      {
        question: 'Wat gebeurt er als de primaire uitvoeringsdienst niet beschikbaar is?',
        answer: 'SciCalcX beschikt over een automatische uitwijkprocedure (fallback). Indien de Judge0 CE-service tijdelijk onbereikbaar is of fouten vertoont, schakelt het systeem de uitvoeringsaanvraag direct en automatisch door naar de secundaire Wandbox API (wandbox.org).',
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
        question: 'Como esta calculadora trata artefatos visuais de ponto flutuante (como 0.1 + 0.2)?',
        answer: 'A normalização de ponto flutuante pode apresentar resultados decimais comuns como 0.1 + 0.2 como 0.3 quando o valor calculado está dentro do limite configurado, e a calculadora oferece modos de exibição FIX, SCI e ENG.',
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
        answer: 'A calculadora de base-n para programadores permite conversões diretas entre Hex, Dec, Oct e Bin com lógica bitwise de inteiros com sinal de 32 bits (int32).',
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
        question: 'Onde o código do meu programa é executado?',
        answer: 'O código enviado pelo Tutor de Código e Compilador é executado em contêineres sandbox isolados e temporários fornecidos por serviços externos (primário: API do Judge0 CE em ce.judge0.com, com contingência automática para a API Wandbox em wandbox.org). Ao contrário das calculadoras matemáticas do SciCalcX, que realizam seus cálculos localmente no seu navegador, a execução do Tutor de Código não ocorre dentro do seu navegador.',
      },
      {
        question: 'Quais linguagens de programação são suportadas?',
        answer: 'O SciCalcX suporta oficialmente Python 3, C (GCC 14) e C++20 (GCC 14). Cada linguagem inclui trilhas guiadas de aprendizado, diagnósticos automatizados de sintaxe e suporte a entrada padrão (stdin).',
      },
      {
        question: 'Meu código é enviado para um serviço externo?',
        answer: 'Sim. Ao clicar em "Executar Código", o código-fonte, a linguagem selecionada e a entrada padrão (stdin) opcional são transmitidos via conexão segura HTTPS diretamente para o backend de execução em sandbox (Judge0 CE ou Wandbox). O programa só é transmitido no momento do acionamento.',
      },
      {
        question: 'Como o SciCalcX protege o código durante a execução?',
        answer: 'Todas as transmissões utilizam criptografia HTTPS (TLS). A execução é realizada em contêineres Linux efêmeros e estritamente isolados com limites rígidos de tempo de CPU e consumo de memória, prevenindo acessos indevidos e persistência de dados.',
      },
      {
        question: 'O SciCalcX armazena meu código-fonte permanentemente?',
        answer: 'Não. O SciCalcX não armazena, não registra nem indexa permanentemente seu código em servidores remotos ou bancos de dados. Seus rascunhos ficam salvos unicamente no armazenamento local (localStorage) do seu navegador. Finalizada a execução, o contêiner temporário é destruído.',
      },
      {
        question: 'O que acontece quando clico em "Executar Código"?',
        answer: 'Ao clicar em "Executar Código", o SciCalcX envia o código do editor e o fluxo stdin via HTTPS para o executor primário (Judge0 CE). O serviço compila e executa o script na sandbox, captura a saída padrão (stdout) e mensagens de erro (stderr) e exibe os resultados no console.',
      },
      {
        question: 'O que acontece se o serviço primário de execução estiver indisponível?',
        answer: 'O SciCalcX conta com um mecanismo automático de contingência (fallback). Caso o Judge0 CE apresente instabilidade ou atinja limites de requisição, o sistema redireciona a execução de forma transparente para a API secundária Wandbox (wandbox.org).',
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
        question: 'In che modo questa calcolatrice riduce gli artefatti di virgola mobile (es. 0.1 + 0.2)?',
        answer: 'La normalizzazione in virgola mobile consente di presentare risultati decimali comuni come 0.1 + 0.2 come 0.3 quando il valore calcolato rientra nella soglia configurata, e include i formati FIX, SCI ed ENG.',
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
        answer: 'La calcolatrice base-n per programmatori converte tra Hex, Dec, Oct e Bin supportando operatori logici su interi con segno a 32 bit (int32).',
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
        question: 'Dove viene eseguito il codice del mio programma?',
        answer: 'Il codice inviato tramite il Tutor di Codice e Compilatore viene eseguito all\'interno di container sandbox isolati ed effimeri gestiti da servizi remoti (principale: API Judge0 CE su ce.judge0.com, con fallback automatico all\'API Wandbox su wandbox.org). A differenza delle calcolatrici matematiche di SciCalcX che eseguono i calcoli localmente nel browser, l\'esecuzione del Tutor di Codice non avviene all\'interno del browser.',
      },
      {
        question: 'Quali linguaggi di programmazione sono supportati?',
        answer: 'SciCalcX supporta ufficialmente Python 3, C (GCC 14) e C++20 (GCC 14). Ciascun linguaggio include percorsi guidati, diagnosi automatica degli errori di sintassi e gestione del flusso di input standard (stdin).',
      },
      {
        question: 'Il mio codice viene inviato a un servizio esterno?',
        answer: 'Sì. Quando si fa clic su "Esegui Codice", il codice sorgente, l\'identificatore del linguaggio e l\'eventuale input standard (stdin) vengono trasmessi tramite connessione crittografata HTTPS direttamente al backend di sandbox (Judge0 CE o Wandbox). Il programma viene inviato unicamente all\'atto dell\'esecuzione.',
      },
      {
        question: 'Come protegge SciCalcX il codice durante l\'esecuzione?',
        answer: 'Tutte le comunicazioni avvengono tramite HTTPS (TLS) crittografato. L\'elaborazione si svolge in ambienti container Linux temporanei e isolati con tetti rigidi di tempo CPU e memoria, impedendo accessi non autorizzati o ritenzione di stato.',
      },
      {
        question: 'SciCalcX memorizza permanentemente il mio codice sorgente?',
        answer: 'No. SciCalcX non archivia né registra in modo permanente il codice sorgente sui propri server o in database remoti. Le bozze rimangono salvate esclusivamente nella memoria locale (localStorage) del browser. Al termine dell\'esecuzione, il container temporaneo viene eliminato.',
      },
      {
        question: 'Cosa succede quando si preme "Esegui Codice"?',
        answer: 'Facendo clic su "Esegui Codice", SciCalcX inoltra il codice e lo stream stdin via HTTPS al fornitore primario (Judge0 CE). Il servizio compila ed esegue il programma in sandbox, intercetta l\'output standard (stdout) e gli errori (stderr), restituendoli direttamente nella console del terminale.',
      },
      {
        question: 'Cosa succede se il servizio di esecuzione primario non è disponibile?',
        answer: 'SciCalcX adotta un meccanismo di fallback automatico. Qualora il servizio principale Judge0 CE risulti temporaneamente non raggiungibile o soggetto a limitazioni, la richiesta viene deviata in modo trasparente verso l\'API secondaria Wandbox (wandbox.org).',
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
        answer: 'S-Dキーを押すことで、オンライン無料分数計算機として小数表記、既約分数、帯分数を相互に変換できます。一般的な有理数結果を簡約分数で表示します。',
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
        answer: 'プログラマー向けN進数計算機は16進数、10進数、8進数、2進数を相互変換し、32ビット符号付き整数のビット演算をサポートします。',
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
        question: 'プログラムコードはどこで実行されますか？',
        answer: 'Code Tutorおよびオンラインコンパイラで送信されたコードは、外部の実行サービスが提供する隔離された一時的なコンテナサンドボックス内で実行されます（プライマリ：ce.judge0.comのJudge0 CE API、自動フォールバック：wandbox.orgのWandbox API）。ブラウザ内でローカルに計算を実行するSciCalcXの数学ツールとは異なり、Code Tutorのコード実行はお使いのブラウザ内部では行われません。',
      },
      {
        question: 'サポートされているプログラミング言語は何ですか？',
        answer: 'SciCalcX Code Tutorは、Python 3、C (GCC 14)、およびC++20 (GCC 14) を公式にサポートしています。各言語には対話型カリキュラム、自動構文診断、標準入力（stdin）機能が備わっています。',
      },
      {
        question: 'ソースコードは外部サービスに送信されますか？',
        answer: 'はい。「コードを実行」ボタンをクリックすると、ソースコード、言語指定、および任意の標準入力（stdin）が、暗号化されたHTTPS通信を介してサンドボックス実行バックエンド（Judge0 CEまたはWandbox）へ直接送信されます。プログラムはお客様が実行指示を出した瞬間にのみ送信されます。',
      },
      {
        question: 'SciCalcXは実行中のコードをどのように保護しますか？',
        answer: 'すべての通信は暗号化されたHTTPS (TLS) を経由します。実行はCPU実行時間とメモリ消費量が厳格に制限された使い捨ての安全なLinuxコンテナ内で行われ、外部からの不正アクセスやデータの恒久的な残留を防止します。',
      },
      {
        question: 'SciCalcXはソースコードをサーバーに永続保存しますか？',
        answer: 'いいえ。SciCalcXがユーザーのソースコードをサーバーや外部データベースに恒久的に保存・記録・収集することはありません。作成中の下書きはお使いの端末のブラウザ内（localStorage）にのみ保存されます。実行完了後、一時的なコンテナ環境は破棄されます。',
      },
      {
        question: '「コードを実行」をクリックすると何が起こりますか？',
        answer: '「コードを実行」をクリックすると、SciCalcXはエディタのコードとstdin入力をHTTPS経由でプライマリサービス（Judge0 CE）に送信します。サービス側でコンパイルとサンドボックス実行が行われ、標準出力（stdout）やエラー診断（stderr）がターミナルコンソールにリアルタイムで返送されます。',
      },
      {
        question: 'プライマリ実行サービスが利用できない場合はどうなりますか？',
        answer: 'SciCalcXには自動フォールバック機能が実装されています。プライマリのJudge0 CEサービスがメンテナンスや一時的な障害、レート制限等で応答しない場合、システムは自動的にセカンダリのWandbox API（wandbox.org）へ実行リクエストを再ルーティングし、中断のない学習環境を維持します。',
      },
    ],
  },
  ko: {
    scientific: [
      {
        question: '공학용 계산기는 어떻게 사용하나요?',
        answer: '본 온라인 공학용 계산기는 상단 슬라이더로 도(DEG)와 라디안(RAD)을 편리하게 전환할 수 있으며, 엡실론 정규화를 적용하여 표시되는 부동 소수점 아티팩트를 줄입니다.',
      },
      {
        question: '멀티라인 공학 계산기 및 수학 수식 계산기의 연산 원리는 무엇인가요?',
        answer: '멀티라인 공학 계산기 인터페이스를 통해 입력 수식과 연산 결과를 상하 2단으로 제공하며, 괄호 검증을 갖춘 지능형 수학 수식 계산기로 작동합니다.',
      },
      {
        question: '온라인 무료 분수 계산기 기능은 어떻게 전환하나요?',
        answer: 'S-D 키를 누르면 온라인 무료 분수 계산기 기능이 활성화되어 소수점 수치와 기약 분수를 즉시 전환합니다. 일반적인 유리수 결과를 기약 분수로 표시합니다.',
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
        answer: '프로그래머 N진수 계산기는 16진수, 10진수, 8진수, 2진수를 즉시 상호 변환하고 32비트 부호 있는 정수 비트 논리 연산을 지원합니다.',
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
        question: '프로그램 코드는 어디에서 실행되나요?',
        answer: 'Code Tutor 및 온라인 컴파일러를 통해 제출된 코드는 외부 실행 서비스가 제공하는 격리된 임시 컨테이너 샌드박스에서 실행됩니다(기본: ce.judge0.com의 Judge0 CE API, 자동 폴백: wandbox.org의 Wandbox API). 브라우저 내부에서 로컬로 연산을 수행하는 SciCalcX의 수학 계산기와 달리, Code Tutor의 코드 실행은 브라우저 내부에서 이루어지지 않습니다.',
      },
      {
        question: '지원되는 프로그래밍 언어는 무엇인가요?',
        answer: 'SciCalcX Code Tutor는 Python 3, C (GCC 14), C++20 (GCC 14)을 공식 지원합니다. 각 언어별로 단계별 커리큘럼, 자동 구문 진단 및 표준 입력(stdin) 스트림을 지원합니다.',
      },
      {
        question: '내 코드가 외부 서비스로 전송되나요?',
        answer: '네, 전송됩니다. \'코드 실행\' 버튼을 클릭하면 소스 코드, 선택된 언어 식별자 및 표준 입력값(stdin)이 암호화된 HTTPS 연결을 통해 샌드박스 실행 백엔드(Judge0 CE 또는 Wandbox)로 안전하게 전송됩니다. 코드는 사용자가 실행 버튼을 누른 순간에만 전송됩니다.',
      },
      {
        question: '실행 중인 코드는 어떻게 보호되나요?',
        answer: '모든 데이터 전송은 암호화된 HTTPS(TLS) 통신을 거칩니다. 실행은 엄격한 CPU 시간 및 메모리 제한이 적용된 격리된 일회성 Linux 컨테이너 환경에서 이루어지므로 무단 접근이나 데이터 잔존 위험이 방지됩니다.',
      },
      {
        question: 'SciCalcX는 소스 코드를 서버에 영구 저장하나요?',
        answer: '아니요, 영구 저장하지 않습니다. SciCalcX는 사용자의 소스 코드를 원격 서버나 데이터베이스에 영구 보관, 기록 또는 색인하지 않습니다. 작성 중인 임시 코드는 오직 사용자의 브라우저 로컬 저장소(localStorage)에만 저장됩니다. 실행이 완료되면 임시 컨테이너는 즉시 폐기됩니다.',
      },
      {
        question: '\'코드 실행\'을 클릭하면 어떤 과정이 진행되나요?',
        answer: '\'코드 실행\'을 클릭하면 SciCalcX가 에디터의 코드와 stdin 스트림을 패키징하여 HTTPS를 통해 기본 서비스(Judge0 CE)로 전송합니다. 서비스가 샌드박스에서 프로그램을 컴파일 및 실행한 후 표준 출력(stdout)과 오류 진단(stderr)을 반환하여 터미널 콘솔에 즉시 표시합니다.',
      },
      {
        question: '기본 실행 서비스를 사용할 수 없는 경우 어떻게 되나요?',
        answer: 'SciCalcX에는 자동 폴백 메커니즘이 내장되어 있습니다. 기본 Judge0 CE 서비스가 일시적인 점검, 요청 제한 또는 네트워크 지연으로 응답하지 않을 경우, 시스템이 보조 실행 서비스인 Wandbox API(wandbox.org)로 요청을 자동으로 전환하여 중단 없이 코딩 학습을 이어갈 수 있도록 합니다.',
      },
    ],
  },
};

export function getFaqs(pageKey: string, lang: SupportedLanguage = 'en'): FAQItem[] {
  const langFaqs = faqs[lang] || faqs.en;
  return langFaqs[pageKey] || faqs.en[pageKey] || [];
}

