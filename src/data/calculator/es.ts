import type { CalculatorPedagogyData } from '../calculatorData';

export const esPedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Fundamentos Matemáticos',
    conceptTitle: 'Jerarquía Algebraica y Sistemas de Punto Flotante',
    conceptDescription: [
      'Una calculadora científica evalúa expresiones matemáticas compuestas respetando estrictas reglas de precedencia de operadores, formalizadas como PEMDAS o BODMAS (Paréntesis, Exponentes, Multiplicación y División, Suma y Resta). Al evaluar fórmulas anidadas como 3 + 4 × 2 / (1 - 5)^2, el motor posterga la suma de menor precedencia hasta evaluar todos los paréntesis, potencias y productos.',
      'Los microprocesadores modernos realizan cálculos de punto flotante usando el estándar IEEE 754 para doble precisión binaria (float64). Dado que ciertas fracciones en base 10 (como 0.1 o 0.2) tienen expansiones periódicas en binario de base 2, la aritmética binaria directa introduce pequeñas discrepancias de redondeo (ej. 0.1 + 0.2 = 0.30000000000000004). SciCalcX aplica saneamiento con umbral épsilon para preservar representaciones decimales exactas de 12 decimales.',
      'Las funciones trigonométricas (seno, coseno, tangente) operan sobre medidas angulares continuas. Reconocer si su entrada está en radianes circulares (donde 2π equivale a 360°) o grados sexagesimales es fundamental para cálculos exactos en física, geometría e ingeniería.'
    ],
    howToSteps: [
      'Seleccione la unidad angular: Alterne el indicador DEG/RAD en la barra de estado para elegir Grados o Radianes.',
      'Introduzca su expresión: Escriba directamente con su teclado físico o pulse los botones del teclado en pantalla.',
      'Use paréntesis para agrupar términos: Agrupe numeradores o denominadores para forzar el orden de evaluación deseado.',
      'Ejecute: Pulse "=" en el teclado o Enter en su teclado físico para calcular la expresión.',
      'Formatee el resultado: Utilice la tecla S-D para alternar entre representación decimal y fracción exacta.'
    ],
    formulas: [
      {
        title: 'Precedencia de Operadores (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Los operadores de igual rango se evalúan de izquierda a derecha, mientras que la negación unaria y las potencias se evalúan con asociatividad por la derecha.'
      },
      {
        title: 'Conversión de Grados a Radianes',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'Todas las funciones trigonométricas internas de los procesadores evalúan en radianes. En modo DEG, SciCalcX convierte grados a radianes antes de evaluar.'
      },
      {
        title: 'Cambio de Base de Logaritmos',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'El logaritmo natural (ln) utiliza la base e ≈ 2.71828, mientras que el logaritmo común (log) utiliza base 10.'
      },
      {
        title: 'Normalización de Precisión Épsilon',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'El umbral épsilon elimina el ruido de redondeo binario IEEE-754 para mostrar expansiones decimales limpias.'
      }
    ],
    workedExample: {
      title: 'Ejemplo Práctico: Fórmula Compuesta de Múltiples Operaciones',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Paso 1: Trigonometría', expression: 'sin(30°) = 0.5', note: 'En modo DEG, sin(30°) equivale a 1/2' },
        { label: 'Paso 2: Multiplicación', expression: '4 × 0.5 = 2.0', note: 'Evaluar el producto izquierdo' },
        { label: 'Paso 3: Raíz Cuadrada', expression: '√(25) = 5.0', note: 'Evaluar función radical' },
        { label: 'Paso 4: Exponenciación', expression: '2^3 = 8.0', note: 'Evaluar potencia 2 al cubo' },
        { label: 'Paso 5: Suma y Resta', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Suma y resta evaluadas de izquierda a derecha' }
      ],
      result: '-1',
      explanation: 'Siguiendo la jerarquía matemática, los paréntesis, radicales y potencias se resuelven antes de sumas y restas, dando exactamente -1.'
    },
    howItWorks: {
      title: 'Cómo Calcula SciCalcX en el Navegador',
      paragraphs: [
        'SciCalcX emplea un motor de análisis sintáctico de dos etapas implementado enteramente en TypeScript del lado del cliente. En la primera etapa (tokenización léxica), las cadenas de entrada se dividen en tokens discretos para números, variables, constantes (π, e), operadores (+, -, *, /, ^) y funciones (sin, cos, tan, ln, log, sqrt).',
        'En la segunda fase, un analizador Shunting-Yard convierte la notación infija en Notación Polaca Inversa (RPN) usando pilas de operadores y operandos. Los paréntesis se validan en tiempo real notificando desequilibrios antes de ejecutar.',
        'Por último, una máquina de pila RPN evalúa la secuencia con registros float64 IEEE-754 de doble precisión, aplicando filtros épsilon antes de mostrar el resultado.'
      ]
    },
    limitations: {
      title: 'Límites de Precisión y Fronteras Numéricas',
      points: [
        'Desbordamiento Superior (Overflow): Números superiores a ±1.7976931348623157 × 10³⁰⁸ desbordan a Infinity.',
        'Desbordamiento Inferior (Underflow): Valores distintos de cero menores que ±5.0 × 10⁻³²⁴ convergen a 0.',
        'Restricciones de Dominio: Calcular la raíz cuadrada de un número negativo o ln(x) para x ≤ 0 genera un error de dominio explícito.',
        'Singularidad Trigonométrica: Funciones como tan(90°) o tan(270°) generan valores extremadamente grandes o indefinidos debido a la representación finita de π/2.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Paréntesis Desbalanceados: ej. Introducir "(2 + 3 * (4 - 1)"',
        fix: 'Revise el contador de paréntesis en la parte inferior izquierda para confirmar que todo "(" esté cerrado con ")".'
      },
      {
        mistake: 'Confusión entre Grados y Radianes: sin(90) da 0.89399 en lugar de 1',
        fix: '0.89399 es sin(90 rad). Cambie el selector superior a modo DEG para obtener sin(90°) = 1.'
      },
      {
        mistake: 'Ambigüedad en Multiplicación Implícita: Ingresar "2(3+4)" sin operador explícito',
        fix: 'Use un operador explícito: "2 * (3 + 4)" para garantizar una tokenización inequívoca.'
      }
    ],
    useCases: [
      {
        title: 'Física y Cinemática',
        desc: 'Descomposición de vectores de fuerza en componentes ortogonales con seno y coseno y cálculo de trayectorias parabólicas.'
      },
      {
        title: 'Ingeniería Eléctrica',
        desc: 'Cálculo de impedancias reactivas en corriente alterna (CA), ángulos de fase y relaciones logarítmicas en decibelios (20 log(V_sal / V_ent)).'
      },
      {
        title: 'Cálculo Académico y STEM',
        desc: 'Verificación de derivaciones algebraicas, evaluación de polinomios fraccionarios y curvas de crecimiento exponencial.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora de Matrices', desc: 'Resuelva sistemas de ecuaciones lineales, determinantes e inversas matriciales.', href: '/matrix', badge: 'Álgebra Lineal' },
      { title: 'Calculadora de Cálculo', desc: 'Calcule integrales definidas por la regla de Simpson y derivadas numéricas.', href: '/calculus', badge: 'Análisis' },
      { title: 'Calculadora Gráfica', desc: 'Grafique curvas cartesianas 2D e inspeccione raíces y asíntotas dinámicamente.', href: '/graphing', badge: 'Geometría' }
    ]
  },

  matrix: {
    conceptBadge: 'Fundamentos de Álgebra Lineal',
    conceptTitle: 'Transformaciones Matriciales, Determinantes y Espacios Vectoriales',
    conceptDescription: [
      'Una matriz es una disposición rectangular de elementos numéricos organizados en m filas y n columnas. En matemáticas y ciencias de la computación, las matrices representan transformaciones lineales que escalan, rotan, reflejan o deforman espacios vectoriales multidimensionales.',
      'La multiplicación de matrices es fundamentalmente no conmutativa: para dos matrices A y B, generalmente A × B ≠ B × A. Además, requiere dimensiones internas compatibles: una matriz m × k solo puede multiplicar a una matriz k × n, produciendo una matriz m × n donde cada elemento es el producto punto de la fila i de A por la columna j de B.',
      'El determinante, det(A), es un escalar característico de las matrices cuadradas. Geométricamente, representa el factor de escala por el cual una transformación altera el área (en 2D) o el volumen (en 3D). Una matriz es invertible si y solo si su determinante es distinto de cero (det(A) ≠ 0).'
    ],
    howToSteps: [
      'Seleccione las dimensiones: Use los selectores de dimensión 2x2 o 3x3 para la Matriz A y la Matriz B.',
      'Introduzca los coeficientes: Ingrese valores numéricos (enteros o decimales) en cada celda de la cuadrícula.',
      'Seleccione una operación binaria: Haga clic en Suma (A + B), Resta (A - B) o Multiplicación (A × B).',
      'Calcule propiedades unarias: Haga clic en Determinante, Inversa o Transpuesta en la Matriz A.',
      'Revise los pasos intermedios: Examine el desglose detallado debajo de la cuadrícula de resultados.'
    ],
    formulas: [
      {
        title: 'Regla de Multiplicación Matricial',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Cada entrada en la matriz producto C es el producto escalar entre la fila i de A y la columna j de B.'
      },
      {
        title: 'Fórmula de Determinante 2×2',
        math: '\\det(A) = ad - bc \\quad \\text{para } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'Diferencia entre el producto de la diagonal principal y el de la diagonal secundaria.'
      },
      {
        title: 'Expansión de Cofactores de Laplace 3×3',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Desarrollo a lo largo de la primera fila usando signos alternos y menores de orden 2.'
      },
      {
        title: 'Inversa Matricial mediante Adjunta',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'Existe únicamente cuando det(A) ≠ 0. Es la matriz de cofactores transpuesta dividida por el determinante.'
      }
    ],
    workedExample: {
      title: 'Ejemplo Práctico: Inversión de Matriz 2×2',
      input: 'Matriz A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Paso 1: Determinante', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, por lo que la inversa existe' },
        { label: 'Paso 2: Intercambiar Diagonales', expression: 'a ↔ d: [6, 4]', note: 'Intercambiar elementos A[0,0] y A[1,1]' },
        { label: 'Paso 3: Negar Antidiagonales', expression: 'b → -7, c → -2', note: 'Cambiar signo de A[0,1] y A[1,0]' },
        { label: 'Paso 4: Matriz Adjunta', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Construcción de matriz adjunta' },
        { label: 'Paso 5: División Escalar', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Multiplicar cada elemento por 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Verificación: A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], la matriz identidad 2×2.'
    },
    howItWorks: {
      title: 'Cómo Ejecuta SciCalcX las Operaciones Matriciales',
      paragraphs: [
        'SciCalcX ejecuta todas las operaciones matriciales directamente en el navegador mediante arreglos tipados de JavaScript. Las entradas se validan numéricamente, admitiendo valores negativos y decimales con total fluidez.',
        'Para el determinante, los sistemas 2×2 emplean la relación cerrada ad - bc, mientras que los 3×3 evalúan el desarrollo de Laplace. La inversión comprueba la no singularidad (|det| < 1e-12) antes de calcular la matriz adjunta.',
        'Los resultados pasan por normalización épsilon para asegurar que valores prácticamente enteros (como det = 0) no muestren residuos como 1e-16.'
      ]
    },
    limitations: {
      title: 'Límites de Precisión y Fronteras de Álgebra Lineal',
      points: [
        'Matrices Singulares: Si det(A) = 0, no existe matriz inversa. El sistema reporta el mensaje "Matriz Singular (det = 0)".',
        'Sistemas Mal Condicionados: Matrices con determinante extremadamente cercano a cero (ej. 1e-15) pueden experimentar inestabilidad numérica en división flotante.',
        'Restricción Dimensional: Optimizado para dimensiones 2×2 y 3×3, estándar en cursos universitarios y gráficos por computadora 3D.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Asumir que la Multiplicación Matricial es Conmutativa (A × B = B × A)',
        fix: 'La multiplicación depende del orden fila por columna. En general, A × B ≠ B × A.'
      },
      {
        mistake: 'Intentar Invertir una Matriz Singular',
        fix: 'Verifique primero el determinante. Si det(A) = 0, las filas son linealmente dependientes y no existe inversa.'
      },
      {
        mistake: 'Confundir la Transpuesta con la Inversa',
        fix: 'La transpuesta (Aᵀ) solo intercambia filas por columnas. La inversa (A⁻¹) cumple A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: 'Gráficos por Computadora 3D',
        desc: 'Cálculo de transformaciones de modelo, vista y proyección (MVP), rotaciones de cámara y matrices de escala.'
      },
      {
        title: 'Sistemas de Ecuaciones Lineales',
        desc: 'Resolución de sistemas simultáneos Ax = b mediante inversión matricial x = A⁻¹b o regla de Cramer.'
      },
      {
        title: 'Análisis Estructural y de Circuitos',
        desc: 'Planteamiento de matrices de conductancia nodal y corrientes de malla en redes eléctricas.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora Científica', desc: 'Realice cálculos científicos multilínea y conversiones trigonométricas.', href: '/', badge: 'Aritmética' },
      { title: 'Calculadora de Cálculo', desc: 'Calcule integrales definidas y derivadas numéricas.', href: '/calculus', badge: 'Análisis' },
      { title: 'Suite de Estadística', desc: 'Analice distribuciones de datos, varianza y modelos de regresión lineal.', href: '/statistics', badge: 'Ciencia de Datos' }
    ]
  },

  calculus: {
    conceptBadge: 'Análisis Matemático',
    conceptTitle: 'Tasas Diferenciales de Cambio y Cuadratura Numérica',
    conceptDescription: [
      'El cálculo es el estudio matemático del cambio continuo. El cálculo diferencial se enfoca en las tasas de cambio instantáneas (derivadas, pendientes de curvas), mientras que el cálculo integral analiza la acumulación de cantidades (integrales, área bajo una curva).',
      'Aunque la derivación y la integración simbólica encuentran fórmulas cerradas, muchas funciones reales carecen de antiderivadas elementales. El cálculo numérico aproxima derivadas y áreas mediante algoritmos de muestreo discreto de alta precisión.',
      'SciCalcX implementa cuadratura numérica de cuarto orden mediante la regla de Simpson 1/3 compuesta para integración y cocientes de diferencias centrales simétricas para diferenciación.'
    ],
    howToSteps: [
      'Introduzca su función f(x): Use sintaxis algebraica estándar (ej. x^2, sin(x), e^x, 2*x + 1).',
      'Para Integración Definida: Indique el límite inferior (a) y el límite superior (b), luego pulse "Calcular Integral Definida".',
      'Para Diferenciación Numérica: Indique el punto de evaluación x₀ y pulse "Calcular Derivada f\'(x₀)".',
      'Para Raíces Polinómicas: Introduzca coeficientes para polinomios cuadráticos o cúbicos y pulse "Calcular Raíces".',
      'Inspeccione la lectura numérica: Revise los límites y verifique posibles discontinuidades de dominio.'
    ],
    formulas: [
      {
        title: 'Cociente de Diferencia Central Simétrica',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'Evalúa diferencias centrales con tamaño de paso h = 10⁻⁶, cancelando términos de error de segundo orden para una precisión O(h²).'
      },
      {
        title: 'Regla Compuesta de Simpson 1/3',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ impar}} f(x_i) + 2\\sum_{i \\text{ par}} f(x_i) + f(x_n) \\right]',
        explanation: 'Divide el intervalo [a, b] en n = 1000 subintervalos, ajustando arcos parabólicos con convergencia de cuarto orden O(h⁴).'
      },
      {
        title: 'Fórmula Cuadrática (Raíces de Grado 2)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'El discriminante Δ = b² - 4ac determina raíces reales distintas (Δ > 0), raíz doble (Δ = 0) o pares conjugados complejos (Δ < 0).'
      },
      {
        title: 'Teorema Fundamental del Cálculo',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{donde } F\'(x) = f(x)',
        explanation: 'Conecta diferenciación e integración: el área neta acumulada equivale al cambio en su antiderivada.'
      }
    ],
    workedExample: {
      title: 'Ejemplo Práctico: Integral Definida de una Curva Parabólica',
      input: 'f(x) = x^2 en el intervalo [0, 3]',
      steps: [
        { label: 'Antiderivada Analítica', expression: '∫ x² dx = x³ / 3 + C', note: 'Regla de potencias estándar de integración' },
        { label: 'Evaluar en Límite Superior', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'Sustituir b = 3' },
        { label: 'Evaluar en Límite Inferior', expression: 'F(0) = 0³ / 3 = 0.0', note: 'Sustituir a = 0' },
        { label: 'Resultado Analítico Exacto', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Área neta bajo la curva' },
        { label: 'Resultado SciCalcX Simpson 1/3', expression: 'n = 1000 subintervalos, h = 0.003 ⟹ Resultado = 9.000000', note: 'Exacto para polinomios de hasta grado 3' }
      ],
      result: '9.000',
      explanation: 'Dado que la regla de Simpson ajusta segmentos parabólicos, integra polinomios cuadráticos con error de truncamiento cero, igualando el valor analítico exacto de 9.'
    },
    howItWorks: {
      title: 'Cómo Procesa SciCalcX el Cálculo en el Navegador',
      paragraphs: [
        'Al introducir f(x), SciCalcX tokeniza la cadena y compila un árbol de sintaxis abstracta en Notación Polaca Inversa que admite funciones como sin, cos, tan, exp, ln, log, sqrt y potencias.',
        'Para la integración definida, el motor divide [a, b] en n = 1000 subintervalos de paso h = (b - a)/1000. Evalúa la función aplicando coeficientes ponderados (1, 4, 2, 4, ..., 1) según la regla de Simpson.',
        'Para las derivadas, evalúa f(x + h) y f(x - h) con h = 10⁻⁶. Al restar estas evaluaciones simétricas, el error lineal se cancela, logrando una pendiente numérica precisa.'
      ]
    },
    limitations: {
      title: 'Límites de Precisión y Aproximación Numérica',
      points: [
        'Puntos No Diferenciables: La derivación numérica asume suavidad en f(x). En picos agudos como f(x) = |x| en x = 0, produce un promedio erróneo.',
        'Asíntotas Verticales y Singularidades: Integrar a través de polos (ej. 1/x de -1 a 1) produce inestabilidad o sumas divergentes.',
        'Cancelación por Paso Excesivamente Pequeño: Si bien h = 10⁻⁶ es óptimo, un h < 10⁻¹² causa errores de cancelación sustractiva en float64.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Invertir los Límites de Integración (Límite inferior > Límite superior)',
        fix: 'Integrar de b hacia a produce el negativo de integrar de a hacia b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Usar Nombres de Variables No Estándar (ej. f(t) en lugar de f(x))',
        fix: 'El motor evalúa respecto a la variable "x". Asegúrese de usar "x" o "X".'
      },
      {
        mistake: 'Esperar Expresiones Simbólicas en Integrales Definidas',
        fix: 'SciCalcX calcula valores numéricos definidos (ej. 3.14159) mediante cuadratura, no expresiones algebraicas simbólicas.'
      }
    ],
    useCases: [
      {
        title: 'Física y Trabajo Mecánico',
        desc: 'Cálculo de trabajo mecánico W = ∫ F(x) dx cuando la fuerza varía de forma continua en función de la posición.'
      },
      {
        title: 'Probabilidad y Densidad Acumulada',
        desc: 'Cálculo de funciones de distribución acumulada (CDF) integrando funciones de densidad de probabilidad.'
      },
      {
        title: 'Procesamiento de Señales y Voltaje RMS',
        desc: 'Cálculo del valor eficaz o cuadrático medio (RMS) de ondas alternas periódicas en un ciclo completo.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora Gráfica', desc: 'Visualice curvas, extremos locales y pendientes tangentes interactivamente.', href: '/graphing', badge: 'Estudio Cartesiano' },
      { title: 'Calculadora Científica', desc: 'Evalúe expresiones trigonométricas y exponenciales con alta precisión.', href: '/', badge: 'Aritmética' },
      { title: 'Tutor de Código y Compilador', desc: 'Escriba y pruebe algoritmos de simulación numérica en Python y C++.', href: '/compiler', badge: 'Sandbox' }
    ]
  },

  graphing: {
    conceptBadge: 'Geometría Analítica',
    conceptTitle: 'Trazado de Funciones 2D y Análisis en Coordenadas Cartesianas',
    conceptDescription: [
      'Una calculadora gráfica 2D traduce ecuaciones algebraicas abstractas en curvas geométricas visuales en un plano cartesiano. Al mapear valores de entrada (x) a sus salidas correspondientes (y = f(x)), los usuarios observan propiedades como continuidad, raíces, extremos locales y límites asintóticos.',
      'El trazado digital se basa en un muestreo numérico de alta resolución. El motor muestrea coordenadas x discretas a lo largo del ancho en píxeles de la pantalla, evalúa la función y dibuja trazos continuos en un elemento HTML5 Canvas.',
      'Uno de los mayores retos al graficar es el tratamiento de asíntotas verticales y discontinuidades (como tan(x) o 1/x). SciCalcX incluye supresión automática de asíntotas para evitar líneas de conexión erróneas a través de infinitos.'
    ],
    howToSteps: [
      'Defina la función f(x): Introduzca una expresión algebraica usando la variable x (ej. x^2 - 4, sin(x), e^(-x^2)).',
      'Añada una segunda curva g(x): Opcionalmente ingrese otra función para comparar curvas e identificar intersecciones.',
      'Ajuste la vista: Use los controles de zoom (+ / -) o arrastre con el ratón o pantalla táctil para desplazar el plano.',
      'Consulte analíticas clave: Revise el panel de analíticas para ver raíces (intersecciones en x), cruces en y y extremos locales.',
      'Restablezca la vista: Haga clic en "Restablecer Vista" para volver al marco predeterminado [-10, 10].'
    ],
    formulas: [
      {
        title: 'Mapeo de Píxeles a Coordenadas Cartesianas',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Convierte la columna de píxeles en pantalla px (0 al ancho del lienzo) en la coordenada x matemática continua.'
      },
      {
        title: 'Conversión Cartesiana a Píxeles en Lienzo',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Dado que el lienzo HTML5 mide y de arriba hacia abajo, el eje vertical se invierte para coincidir con la convención matemática.'
      },
      {
        title: 'Condición de Puntos Críticos (Extremos)',
        math: 'f\'(x) = 0 \\quad \\text{y} \\quad f\'\'(x) \\neq 0',
        explanation: 'Ocurren máximos locales donde f\'(x) = 0 y f\'\'(x) < 0; ocurren mínimos locales donde f\'(x) = 0 y f\'\'(x) > 0.'
      },
      {
        title: 'Umbral de Pendiente por Discontinuidad',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Levantar Trazo}',
        explanation: 'Suprime las líneas conectoras a través de asíntotas verticales cuando la pendiente numérica excede un límite físico.'
      }
    ],
    workedExample: {
      title: 'Ejemplo Práctico: Análisis Completo de la Parábola f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Intersección en Y', expression: 'f(0) = 0² - 4 = -4', note: 'Coordenadas: (0, -4)' },
        { label: 'Intersecciones en X (Raíces)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Coordenadas: (-2, 0) y (2, 0)' },
        { label: 'Derivada f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'Punto crítico estacionario en x = 0' },
        { label: 'Segunda Derivada f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Curvatura positiva indica mínimo global' },
        { label: 'Vértice y Extremo Global', expression: 'Mínimo en (0, -4)', note: 'Parábola abierta hacia arriba con eje de simetría x = 0' }
      ],
      result: 'Raíces en x = -2, 2; Vértice en (0, -4)',
      explanation: 'SciCalcX traza la parábola continua destacando el vértice mínimo en (0, -4) y los cruces por cero en x = -2 y x = 2 sobre el plano cartesiano.'
    },
    howItWorks: {
      title: 'Cómo Traza Funciones SciCalcX en el Navegador',
      paragraphs: [
        'SciCalcX renderiza gráficos de forma nativa utilizando rasterización 2D en HTML5 Canvas sin librerías pesadas externas. El lienzo se redibuja de forma fluida ante cualquier desplazamiento, zoom o cambio en la fórmula.',
        'Para cada columna horizontal de píxeles, el motor convierte coordenadas de pantalla a valores matemáticos x, los evalúa con la máquina RPN y proyecta los valores y calculados.',
        'Si dos puntos consecutivos presentan saltos abruptos o cambian de signo a través de límites infinitos, el algoritmo levanta el trazador para no generar líneas de unión espurias.'
      ]
    },
    limitations: {
      title: 'Límites de Precisión y Discretización Gráfica',
      points: [
        'Discretización de Píxeles: Detalles menores al tamaño de un píxel físico de pantalla requieren zoom para visualizarse.',
        'Oscilaciones de Alta Frecuencia: Funciones como sin(1/x) cerca de x = 0 oscilan a mayor frecuencia que la tasa de muestreo, provocando alias.',
        'Ventana de Visualización Extrema: Alejamientos superiores a 10¹⁰ o acercamientos inferiores a 10⁻¹² alcanzan los límites del estándar IEEE-754.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Omitir Paréntesis en Denominadores Racionales (ej. escribir "1/x+1")',
        fix: '"1/x+1" se evalúa como (1/x) + 1. Escriba "1/(x+1)" para situar la asíntota vertical en x = -1.'
      },
      {
        mistake: 'Graficar Funciones Fuera de la Ventana Visible',
        fix: 'Si la curva no aparece, pulse "Alejar" o verifique el rango esperado en el eje Y.'
      },
      {
        mistake: 'Usar Constantes No Compatibles',
        fix: 'Utilice "pi" o "π" para la constante de Arquímedes, y "e" para el número de Euler.'
      }
    ],
    useCases: [
      {
        title: 'Bosquejo de Curvas Polinómicas',
        desc: 'Verificación de raíces, puntos de inflexión y extremos en tareas de álgebra y precálculo.'
      },
      {
        title: 'Formas de Onda Trigonométricas',
        desc: 'Visualización de modulación de amplitud, duplicación de frecuencia (sin(2x)) y desfases en física y acústica.'
      },
      {
        title: 'Economía y Optimización',
        desc: 'Trazado de curvas de costo, ingreso y beneficio para ubicar umbrales de equilibrio y niveles óptimos de producción.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora de Cálculo', desc: 'Calcule derivadas numéricas exactas e integrales de Simpson.', href: '/calculus', badge: 'Análisis' },
      { title: 'Calculadora Científica', desc: 'Evalúe razones trigonométricas y logaritmos en grados o radianes.', href: '/', badge: 'Aritmética' },
      { title: 'Suite de Estadística', desc: 'Calcule varianza muestral, desviación estándar y regresión lineal.', href: '/statistics', badge: 'Ciencia de Datos' }
    ]
  },

  statistics: {
    conceptBadge: 'Ciencia de Datos y Probabilidad',
    conceptTitle: 'Estadística Descriptiva, Tendencia Central y Varianza Muestral',
    conceptDescription: [
      'La estadística descriptiva resume y cuantifica las características principales de un conjunto de datos numéricos. En lugar de examinar cientos de observaciones individuales, se emplean métricas sintéticas para describir la localización central (media, mediana, moda) y la dispersión (rango, varianza, desviación estándar).',
      'Una distinción fundamental en teoría estadística es entre población (el universo completo bajo estudio) y muestra (un subconjunto representativo). Al estimar la varianza de una muestra, dividir la suma de cuadrados entre N subestima sistemáticamente la verdadera varianza poblacional.',
      'Para corregir este sesgo, la corrección de Bessel sustituye N por N - 1 grados de libertad en el cálculo de la varianza muestral (s²). SciCalcX calcula tanto métricas muestrales (s², s) como poblacionales (σ², σ) simultáneamente.'
    ],
    howToSteps: [
      'Introduzca su conjunto de datos: Escriba números separados por comas, espacios o saltos de línea en el cuadro de entrada.',
      'Pulse "Cargar Datos de Muestra": Utilice este botón si desea probar con un conjunto de datos científico preconfigurado.',
      'Consulte la Tendencia Central: Revise la Media, Mediana y Moda en la cuadrícula de métricas principales.',
      'Analice la Dispersión: Examine el Rango, la Varianza Muestral (s²), Varianza Poblacional (σ²) y Desviaciones Estándar.',
      'Guarde en el Historial: Haga clic en "Guardar análisis en el historial" para conservar su resumen localmente.'
    ],
    formulas: [
      {
        title: 'Media Aritmética',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'El punto de equilibrio del conjunto de datos, calculado como la suma de todos los valores dividida entre la cantidad n.'
      },
      {
        title: 'Varianza Muestral (Corrección de Bessel)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Divide la suma de cuadrados entre n - 1 grados de libertad para obtener un estimador insesgado de la varianza poblacional.'
      },
      {
        title: 'Varianza Poblacional',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Se utiliza cuando el conjunto de datos comprende la totalidad de la población y no solo una muestra.'
      },
      {
        title: 'Desviación Estándar',
        math: 's = \\sqrt{s^2} \\quad \\text{y} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'La raíz cuadrada de la varianza, expresando la dispersión en las mismas unidades de la medición original.'
      }
    ],
    workedExample: {
      title: 'Ejemplo Práctico: Varianza Muestral del Conjunto [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Datos: 2, 4, 4, 4, 5, 5, 7, 9  (n = 8)',
      steps: [
        { label: 'Paso 1: Suma y Media', expression: 'Suma = 40 ⟹ Media x̄ = 40 / 8 = 5.0', note: 'El valor promedio es 5.0' },
        { label: 'Paso 2: Desviaciones (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Restar la media a cada elemento' },
        { label: 'Paso 3: Desviaciones Cuadráticas', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Elevar cada desviación al cuadrado' },
        { label: 'Paso 4: Suma de Cuadrados (SS)', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Suma acumulada de desviaciones al cuadrado' },
        { label: 'Paso 5: Varianza Muestral (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Dividido por n - 1 = 7 (corrección de Bessel)' },
        { label: 'Paso 6: Desviación Estándar Muestral (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Raíz cuadrada de la varianza muestral' }
      ],
      result: 'Media = 5.0, Mediana = 4.5, Moda = 4, Varianza Muestral s² ≈ 4.5714, Varianza Poblacional σ² = 4.0',
      explanation: 'Nótese la diferencia clave: la varianza poblacional divide 32 entre 8 (= 4.0), mientras que la varianza muestral divide entre 7 (≈ 4.5714) para corregir el sesgo muestral.'
    },
    howItWorks: {
      title: 'Cómo Calcula Estadísticas SciCalcX en el Navegador',
      paragraphs: [
        'SciCalcX procesa la entrada mediante una expresión regular que separa comas, espacios en blanco y saltos de línea, convirtiendo los elementos en flotantes float64 de doble precisión mientras descarta caracteres no válidos.',
        'Los datos se ordenan internamente para determinar la mediana (tomando el elemento central en cantidades impares o promediando los dos centrales en cantidades pares) y la moda a través de un histograma de frecuencias.',
        'La suma de desviaciones al cuadrado se calcula mediante un algoritmo de dos pasadas: la primera calcula la media aritmética exacta y la segunda acumula (x - x̄)², evitando cancelaciones numéricas comunes en algoritmos de una sola pasada.'
      ]
    },
    limitations: {
      title: 'Límites de Precisión y Supuestos Estadísticos',
      points: [
        'Tamaño Muestral Mínimo: La varianza y desviación estándar muestrales requieren al menos dos observaciones (n ≥ 2), ya que n - 1 con n = 1 resulta en división por cero.',
        'Sensibilidad a Valores Atípicos: La media y la varianza son sensibles a valores extremos. Para distribuciones asimétricas, la mediana ofrece mayor robustez.',
        'Conjuntos Multimodales: Si varios valores comparten la frecuencia máxima más alta, se muestran múltiples modas separadas por comas.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Usar Varianza Poblacional (σ²) en Lugar de Muestral (s²) para Informes de Laboratorio',
        fix: 'Los experimentos académicos casi siempre representan muestras. Use varianza muestral (s²) con corrección de Bessel (n - 1).'
      },
      {
        mistake: 'Confundir las Unidades de Varianza y Desviación Estándar',
        fix: 'La varianza se expresa en unidades cuadráticas (ej. metros²); la desviación estándar en unidades lineales originales (metros).'
      },
      {
        mistake: 'Asumir que Varianza Cero Significa Datos Iguales a Cero',
        fix: 'Varianza cero significa que todas las observaciones son idénticas (ej. [5, 5, 5]), no que los valores sean cero.'
      }
    ],
    useCases: [
      {
        title: 'Error Experimental en Laboratorios',
        desc: 'Cuantificación de incertidumbre, dispersión de medidas y error aleatorio en prácticas de física y química.'
      },
      {
        title: 'Control de Calidad y Six Sigma',
        desc: 'Monitoreo de tolerancias y variabilidad en procesos industriales de manufactura.'
      },
      {
        title: 'Riesgo Financiero y Volatilidad',
        desc: 'Análisis de dispersión de rendimientos y cálculo de desviación estándar histórica en series bursátiles.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora Científica', desc: 'Realice cálculos científicos multilínea y potencias exponenciales.', href: '/', badge: 'Aritmética' },
      { title: 'Calculadora de Cálculo', desc: 'Integre funciones continuas de densidad de probabilidad.', href: '/calculus', badge: 'Análisis' },
      { title: 'Calculadora Gráfica', desc: 'Grafique distribuciones y curvas funcionales en planos cartesianos.', href: '/graphing', badge: 'Cartesiano' }
    ]
  },

  programming: {
    conceptBadge: 'Arquitectura de Computadores y Sistemas',
    conceptTitle: 'Sistemas Numéricos en Base-N, Bitboards y Aritmética Signada de 32 Bits',
    conceptDescription: [
      'El hardware computacional digital procesa datos enteramente en binario (base 2). Para que las secuencias binarias sean legibles para los programadores, se utilizan las notaciones hexadecimal (base 16) y octal (base 8), que agrupan bits en cuartetos (nibbles de 4 bits) y octetos (bytes de 8 bits).',
      'Los procesadores modernos representan números enteros negativos usando la notación en Complemento a Dos. En un entero con signo de 32 bits (int32), el bit más significativo (bit 31) actúa como bit de signo: 0 representa valores positivos o cero, y 1 representa valores negativos. Invertir todos los bits y sumar uno permite que el mismo hardware sumador realice tanto sumas como restas.',
      'SciCalcX incluye un bitboard interactivo visual de 32 bits donde puede activar y desactivar bits individuales desde el MSB (bit 31) hasta el LSB (bit 0), observando conversiones instantáneas en Hexadecimal, Decimal, Octal y Binario junto con operadores a nivel de bits.'
    ],
    howToSteps: [
      'Seleccione la base activa: Haga clic en cualquier fila (HEX, DEC, OCT o BIN) para convertirla en el campo de entrada activo.',
      'Introduzca un valor: Escriba caracteres numéricos o hexadecimales (A-F) usando el teclado o el pad en pantalla.',
      'Modifique bits en el tablero visual: Haga clic en las casillas de bits (0 a 31) para alternar su estado binario y ver cambios instantáneos.',
      'Aplique lógica a nivel de bits: Pulse NOT (~), LSH (<<) o RSH (>>) para realizar transformaciones de bits inmediatas.',
      'Alterne el signo: Use la tecla "+/-" para observar la inversión de signo mediante complemento a dos.'
    ],
    formulas: [
      {
        title: 'Expansión Posicional en Base-N',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Todo número se evalúa como la suma de sus dígitos multiplicados por las potencias de la base de numeración b (b = 2, 8, 10 o 16).'
      },
      {
        title: 'Inversión en Complemento a Dos',
        math: '-x = (\\sim x) + 1',
        explanation: 'Invierte todos los 32 bits (complemento a uno) y suma 1 al bit menos significativo.'
      },
      {
        title: 'Operadores Lógicos a Nivel de Bits',
        math: 'A \\& B \\text{ (AND)}, \\quad A \\mid B \\text{ (OR)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'AND genera 1 solo si ambos bits son 1; OR genera 1 si al menos un bit es 1; XOR genera 1 si los bits difieren.'
      },
      {
        title: 'Operaciones de Desplazamiento de Bits',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{y} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'Desplazar a la izquierda k bits multiplica por 2ᵏ; desplazar a la derecha k bits divide entre 2ᵏ (truncando hacia infinito negativo).'
      }
    ],
    workedExample: {
      title: 'Ejemplo Práctico: NOT a Nivel de Bits y Complemento a Dos de 42',
      input: 'Valor Decimal = 42',
      steps: [
        { label: 'Paso 1: Representación Binaria', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bits 5, 3 y 1 activos (32 + 8 + 2 = 42)' },
        { label: 'Paso 2: Equivalente Hexadecimal', expression: 'Hex = 0x0000002A', note: '2 en cuarteto alto, A (=10) en cuarteto bajo' },
        { label: 'Paso 3: NOT Bit a Bit (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Cada 0 se invierte a 1 y cada 1 se invierte a 0' },
        { label: 'Paso 4: Evaluación Signada de 32 Bits', expression: '~42 = -43 en decimal (Complemento a Dos)', note: 'Fórmula: ~x = -(x + 1)' },
        { label: 'Paso 5: Desplazamiento a la Izquierda (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'Bits desplazados a la izquierda 1 posición (multiplicación por 2)' }
      ],
      result: 'Decimal 42 = Hex 2A = Bin 101010₂; ~42 = -43',
      explanation: 'SciCalcX sincroniza los 32 bits en el tablero interactivo, ilustrando cómo el complemento a dos traduce patrones binarios directamente a números decimales negativos.'
    },
    howItWorks: {
      title: 'Cómo Maneja SciCalcX la Lógica de 32 Bits en el Navegador',
      paragraphs: [
        'Los operadores a nivel de bits de JavaScript (|, &, ^, ~, <<, >>) convierten automáticamente los operandos en enteros signados de 32 bits en complemento a dos antes de ejecutar.',
        'SciCalcX mantiene un estado entero int32 interno. Cuando se pulsa un bit o un operador, el entero se transforma y máscaras dinámicas ((val >>> bit) & 1) actualizan el estado de los 32 botones desde el bit 31 al bit 0.',
        'Las conversiones a cadenas Hexadecimal, Decimal, Octal y Binaria se calculan localmente en milisegundos, ofreciendo una experiencia interactiva inmediata a nivel de arquitectura de hardware.'
      ]
    },
    limitations: {
      title: 'Límites de Precisión y Fronteras de Enteros',
      points: [
        'Rango Signado de 32 Bits: Opera estrictamente entre -2,147,483,648 (-2³¹) y +2,147,483,647 (+2³¹ - 1).',
        'Comportamiento ante Desbordamiento: Incrementar más allá de +2,147,483,647 cicla a valores negativos (-2,147,483,648), replicando el hardware CPU real.',
        'Desplazamiento Cíclico: Desplazar bits por múltiplos de 32 vuelve al inicio (ej. x << 32 equivale a x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Asumir que el Desplazamiento a la Derecha con Signo (>>) Rellena con Ceros para Números Negativos',
        fix: 'El desplazamiento aritmético (>>) preserva el bit de signo (rellena con 1s). El desplazamiento sin signo (>>>) rellena con 0s.'
      },
      {
        mistake: 'Confundir el NOT a Nivel de Bits (~) con el NOT Lógico (!)',
        fix: 'NOT a nivel de bits invierte los 32 bits (~0 = -1). NOT lógico evalúa valores de verdad booleanos.'
      },
      {
        mistake: 'Escribir Caracteres No Válidos para la Base Elegida (ej. escribir "8" en Octal)',
        fix: 'Octal solo acepta dígitos del 0 al 7; Binario 0 y 1; Hexadecimal dígitos del 0 al 9 y letras A a F.'
      }
    ],
    useCases: [
      {
        title: 'Sistemas Embebidos y Microcontroladores',
        desc: 'Inspección de registros de control de hardware, máscaras de pines GPIO y campos de bits en microcontroladores.'
      },
      {
        title: 'Decodificación de Cabeceras de Red',
        desc: 'Enmascaramiento y desplazamiento de cabeceras de paquetes IP/TCP para extraer números de puerto, banderas y máscaras de subred.'
      },
      {
        title: 'Desarrollo de Videojuegos y Optimización',
        desc: 'Uso de bitboards para representar estados de tableros de ajedrez o máscaras de colisión con instrucciones de ciclo único.'
      }
    ],
    relatedTools: [
      { title: 'Tutor de Código y Compilador', desc: 'Escriba, compile y ejecute algoritmos a nivel de bits en C++ y Python.', href: '/compiler', badge: 'Sandbox' },
      { title: 'Calculadora Científica', desc: 'Realice cálculos científicos multilínea y potencias.', href: '/', badge: 'Aritmética' },
      { title: 'Calculadora de Matrices', desc: 'Calcule determinantes de álgebra lineal y operaciones matriciales.', href: '/matrix', badge: 'Álgebra Lineal' }
    ]
  }
};
