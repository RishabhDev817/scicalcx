import type { CalculatorPedagogyData } from '../calculatorData';

export const enPedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Mathematical Foundations',
    conceptTitle: 'Algebraic Hierarchy & Floating-Point Number Systems',
    conceptDescription: [
      'A scientific calculator evaluates compound mathematical expressions by adhering to strict operator precedence rules, commonly formalized as PEMDAS or BODMAS (Parentheses, Exponents, Multiplication & Division, Addition & Subtraction). When evaluating nested formulas like 3 + 4 × 2 / (1 - 5)^2, the engine must defer lower-precedence addition until all parenthetical sub-expressions, powers, and products are evaluated.',
      'Modern digital microprocessors perform floating-point arithmetic using the IEEE 754 standard for binary double-precision (float64). Because certain base-10 fractions (such as 0.1 or 0.2) have repeating expansions in base-2 binary, raw binary arithmetic inevitably introduces infinitesimal round-off noise (e.g., 0.1 + 0.2 = 0.30000000000000004). SciCalcX applies custom epsilon-threshold sanitization to preserve accurate 12-decimal decimal representations.',
      'Trigonometric functions (sine, cosine, tangent) operate on continuous angular measures. Understanding whether your input represents circular radians (where 2π corresponds to 360°) or sexagesimal degrees is critical for accurate calculations in physics, geometry, and electrical engineering.'
    ],
    howToSteps: [
      'Select your angular unit: Toggle the DEG/RAD capsule in the status bar to choose Degrees or Radians.',
      'Enter your expression: Type directly with your physical keyboard or click the on-screen keypad buttons.',
      'Use parentheses for compound terms: Group numerator or denominator terms to enforce intended evaluation order.',
      'Execute: Press "=" on the keypad or press Enter on your keyboard to evaluate the expression.',
      'Format the output: Use the S-D toggle key to cycle between decimal floating-point representations and exact fractions.'
    ],
    formulas: [
      {
        title: 'Operator Precedence (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Operators of equal rank evaluate from left to right, while unary negation and powers evaluate with right-associativity.'
      },
      {
        title: 'Trigonometric Degree-to-Radian Conversion',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'All internal trigonometric functions in digital processors evaluate inputs in radians. In DEG mode, SciCalcX converts degrees to radians prior to evaluation.'
      },
      {
        title: 'Logarithm Base Change Identity',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'Natural logarithms (ln) use base e ≈ 2.71828, while common logarithms (log) use base 10.'
      },
      {
        title: 'Epsilon Precision Normalization',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'Epsilon threshold sanitization strips binary IEEE-754 round-off noise to present clean decimal expansions.'
      }
    ],
    workedExample: {
      title: 'Worked Example: Multi-Operation Compound Formula',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Step 1: Trigonometry', expression: 'sin(30°) = 0.5', note: 'In DEG mode, sin(30°) evaluates to 1/2' },
        { label: 'Step 2: Multiplication', expression: '4 × 0.5 = 2.0', note: 'Evaluate left-hand product' },
        { label: 'Step 3: Square Root', expression: '√(25) = 5.0', note: 'Evaluate radical function' },
        { label: 'Step 4: Exponentiation', expression: '2^3 = 8.0', note: 'Evaluate power 2 cubed' },
        { label: 'Step 5: Summation', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Addition and subtraction evaluated left-to-right' }
      ],
      result: '-1',
      explanation: 'By following operator precedence, parentheses, radicals, and powers are calculated prior to linear addition and subtraction, yielding exactly -1.'
    },
    howItWorks: {
      title: 'How SciCalcX Computes Expressions Client-Side',
      paragraphs: [
        'SciCalcX uses a two-phase parsing engine implemented entirely in client-side TypeScript. In the first phase (lexical tokenization), raw input strings are scanned into discrete tokens representing numbers, variables, constants (π, e), operators (+, -, *, /, ^), and functions (sin, cos, tan, ln, log, sqrt).',
        'In the second phase, a Shunting-Yard parser converts infix notation into Reverse Polish Notation (RPN) using operator and operand stacks. Parentheses are matched in real-time, and unbalanced braces are reported before numerical evaluation.',
        'Finally, an RPN stack machine evaluates the linear queue with double-precision IEEE-754 float64 registers, applying epsilon thresholding before formatting the output onto the live display.'
      ]
    },
    limitations: {
      title: 'Accuracy Limits & Numerical Boundaries',
      points: [
        'Floating-Point Overflow: Numbers exceeding ±1.7976931348623157 × 10³⁰⁸ overflow to Infinity.',
        'Floating-Point Underflow: Non-zero values smaller than ±5.0 × 10⁻³²⁴ underflow to 0.',
        'Domain Restrictions: Taking the square root of a negative value or computing ln(x) for x ≤ 0 returns an explicit domain error.',
        'Trigonometric Singularity: Functions such as tan(90°) or tan(270°) evaluate to extremely large finite values or undefined due to floating-point representation of π/2.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Unbalanced Parentheses: e.g. Entering "(2 + 3 * (4 - 1)"',
        fix: 'Check the parenthesis status counter in the lower-left display to verify all open brackets "(" are closed with ")".'
      },
      {
        mistake: 'Degree vs Radian Confusion: sin(90) returning 0.89399 instead of 1',
        fix: '0.89399 is sin(90 rad). Toggle the slider capsule at the top to DEG mode to get sin(90°) = 1.'
      },
      {
        mistake: 'Implicit Multiplication Ambiguity: Entering "2(3+4)" without an explicit multiplication operator',
        fix: 'Use an explicit operator: "2 * (3 + 4)" to ensure unambiguous AST tokenization.'
      }
    ],
    useCases: [
      {
        title: 'Physics & Kinematics',
        desc: 'Resolving force vectors into orthogonal components using sine and cosine functions and computing parabolic projectile paths.'
      },
      {
        title: 'Electrical Engineering',
        desc: 'Calculating alternating current (AC) reactive impedances, phase angles, and decibel logarithmic ratios (20 log(V_out / V_in)).'
      },
      {
        title: 'Academic Calculus & STEM',
        desc: 'Verifying algebraic derivations, evaluating fractional polynomials, and calculating exponential growth curves.'
      }
    ],
    relatedTools: [
      { title: 'Matrix Calculator', desc: 'Solve systems of linear equations, determinants, and matrix inverses.', href: '/matrix', badge: 'Linear Algebra' },
      { title: 'Calculus Calculator', desc: 'Compute definite integrals via Simpson\'s rule and numerical derivatives.', href: '/calculus', badge: 'Analysis' },
      { title: 'Graphing Calculator', desc: 'Plot 2D Cartesian curves and inspect roots and asymptotes dynamically.', href: '/graphing', badge: 'Geometry' }
    ]
  },

  matrix: {
    conceptBadge: 'Linear Algebra Foundations',
    conceptTitle: 'Matrix Transformations, Determinants & Vector Spaces',
    conceptDescription: [
      'A matrix is a rectangular array of numerical elements arranged in m rows and n columns. In modern mathematics and computer science, matrices represent linear transformations that scale, rotate, reflect, or shear multi-dimensional vector spaces.',
      'Matrix multiplication is fundamentally non-commutative: for two matrices A and B, A × B is generally not equal to B × A. Furthermore, matrix multiplication requires compatible inner dimensions: an m × k matrix can only multiply a k × n matrix, producing an m × n product matrix where each element is the dot product of row i of A and column j of B.',
      'The determinant, det(A), is a scalar value that characterizes square matrices. Geometrically, it represents the scaling factor by which a linear transformation alters area (in 2D) or volume (in 3D). A matrix is invertible if and only if its determinant is non-zero (det(A) ≠ 0). When det(A) = 0, the transformation collapses dimensions, rendering the matrix singular with no unique inverse.'
    ],
    howToSteps: [
      'Select matrix dimensions: Use the 2x2 or 3x3 dimension toggles for Matrix A and Matrix B.',
      'Enter matrix elements: Type numerical coefficients into the corresponding input cells (supports integers and decimals).',
      'Choose an operation: Click Matrix Addition (A + B), Subtraction (A - B), or Multiplication (A × B) for binary operations.',
      'Compute unary properties: Click Determinant, Inverse, or Transpose on Matrix A to evaluate intrinsic matrix metrics.',
      'Inspect intermediate steps: Review the step-by-step breakdown below the result grid to verify cofactor expansions.'
    ],
    formulas: [
      {
        title: 'Matrix Multiplication Rule',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Each entry in the product matrix C is computed as the dot product between row i of Matrix A and column j of Matrix B.'
      },
      {
        title: '2×2 Determinant Formula',
        math: '\\det(A) = ad - bc \\quad \\text{for } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'The difference between the product of the main diagonal and the product of the anti-diagonal.'
      },
      {
        title: '3×3 Laplace Cofactor Expansion',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Expanding along the first row using alternating signs and 2×2 minor determinants.'
      },
      {
        title: 'Matrix Inverse via Adjugate',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'The inverse exists only when det(A) ≠ 0. It is the transposed cofactor matrix divided by the determinant scalar.'
      }
    ],
    workedExample: {
      title: 'Worked Example: 2×2 Matrix Inversion',
      input: 'Matrix A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Step 1: Determinant', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, so inverse exists' },
        { label: 'Step 2: Swap Main Diagonals', expression: 'a ↔ d: [6, 4]', note: 'Swap elements A[0,0] and A[1,1]' },
        { label: 'Step 3: Negate Anti-Diagonals', expression: 'b → -7, c → -2', note: 'Negate elements A[0,1] and A[1,0]' },
        { label: 'Step 4: Adjugate Matrix', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Construct adjugate matrix' },
        { label: 'Step 5: Scalar Division', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Multiply every element by 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Verification: A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], the 2×2 Identity Matrix.'
    },
    howItWorks: {
      title: 'How SciCalcX Computes Matrix Operations Client-Side',
      paragraphs: [
        'SciCalcX executes all matrix operations directly within the client browser using typed JavaScript arrays. Grid inputs are validated for numeric type correctness, handling negative values and decimal floating-point numbers seamlessly.',
        'For determinant calculations, 2×2 matrices use the closed-form ad - bc relation, while 3×3 systems evaluate Laplace expansion along the first row. Inversion uses the adjugate matrix method with strict zero-determinant checks (|det| < 1e-12) to catch singular matrices before division occurs.',
        'Resulting values undergo epsilon normalization to reduce common binary floating-point round-off display artifacts, ensuring near-integer results (like det = 0) do not display as artifacts like 1e-16.'
      ]
    },
    limitations: {
      title: 'Accuracy Limits & Linear Algebra Boundaries',
      points: [
        'Singular Matrices: If det(A) = 0, the matrix has no inverse. The calculator reports an explicit "Singular Matrix (det = 0)" message.',
        'Ill-Conditioned Systems: Matrices with determinants extremely close to zero (e.g., 1e-15) can experience numerical instability in floating-point division.',
        'Dimension Constraints: This tool is optimized for 2×2 and 3×3 linear transformations, the standard dimensions used in undergraduate coursework and 3D computer graphics.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Assuming Matrix Multiplication is Commutative (A × B = B × A)',
        fix: 'Matrix multiplication depends on row-by-column ordering. In general, A × B ≠ B × A.'
      },
      {
        mistake: 'Attempting to Invert a Singular Matrix',
        fix: 'Verify the determinant first. If det(A) = 0, the rows are linearly dependent and no inverse exists.'
      },
      {
        mistake: 'Confusing Matrix Transpose with Matrix Inverse',
        fix: 'Transpose (Aᵀ) merely swaps rows and columns. Inverse (A⁻¹) satisfies A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: '3D Computer Graphics',
        desc: 'Calculating model-view-projection (MVP) transformations, camera rotations, and scaling matrices for rendering pipelines.'
      },
      {
        title: 'Linear Systems of Equations',
        desc: 'Solving simultaneous equations Ax = b via matrix inversion x = A⁻¹b or Cramer\'s rule.'
      },
      {
        title: 'Structural & Circuit Analysis',
        desc: 'Setting up nodal conductance matrices and mesh current equations in electrical engineering networks.'
      }
    ],
    relatedTools: [
      { title: 'Scientific Calculator', desc: 'Perform multi-line scientific calculations and trigonometric conversions.', href: '/', badge: 'Arithmetic' },
      { title: 'Calculus Calculator', desc: 'Compute definite integrals and numerical derivatives.', href: '/calculus', badge: 'Analysis' },
      { title: 'Statistics Suite', desc: 'Analyze data distributions, variance, and linear regression models.', href: '/statistics', badge: 'Data Science' }
    ]
  },

  calculus: {
    conceptBadge: 'Mathematical Analysis',
    conceptTitle: 'Differential Rates of Change & Numerical Quadrature',
    conceptDescription: [
      'Calculus is the mathematical study of continuous change. Differential calculus focuses on instantaneous rates of change (derivatives, representing curve slopes), while integral calculus focuses on accumulation of quantities (integrals, representing area under a curve).',
      'While symbolic differentiation and integration find closed-form algebraic expressions, many real-world functions (or sensor data streams) lack elementary antiderivatives. Numerical calculus approximates rates and areas using high-precision discrete sampling algorithms.',
      'SciCalcX implements fourth-order numerical quadrature via Composite Simpson\'s 1/3 Rule for integration, and symmetric central difference quotients for differentiation, delivering fast and accurate results directly in your browser.'
    ],
    howToSteps: [
      'Enter your mathematical function f(x): Use standard algebraic syntax (e.g., x^2, sin(x), e^x, 2*x + 1).',
      'For Definite Integration: Specify lower limit (a) and upper limit (b), then click "Compute Definite Integral".',
      'For Numerical Differentiation: Specify the evaluation point x₀, then click "Calculate Derivative f\'(x₀)".',
      'For Polynomial Root Solving: Enter coefficients for quadratic (degree 2) or cubic (degree 3) polynomials and click "Find Roots".',
      'Inspect the numerical readout: Review calculated limits and check for potential domain discontinuities.'
    ],
    formulas: [
      {
        title: 'Symmetric Difference Quotient (Derivative)',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'SciCalcX evaluates central differences using step size h = 10⁻⁶, canceling second-order error terms for O(h²) accuracy.'
      },
      {
        title: 'Composite Simpson\'s 1/3 Rule (Integral)',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ odd}} f(x_i) + 2\\sum_{i \\text{ even}} f(x_i) + f(x_n) \\right]',
        explanation: 'Divides interval [a, b] into n = 1000 subintervals (h = (b - a)/n), fitting parabolic arcs over adjacent triplets for fourth-order O(h⁴) convergence.'
      },
      {
        title: 'Quadratic Formula (Degree 2 Roots)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Discriminant Δ = b² - 4ac determines real distinct roots (Δ > 0), repeated roots (Δ = 0), or complex conjugate pairs (Δ < 0).'
      },
      {
        title: 'Fundamental Theorem of Calculus',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{where } F\'(x) = f(x)',
        explanation: 'Connects differentiation and integration: definite accumulated area equals the change in antiderivative.'
      }
    ],
    workedExample: {
      title: 'Worked Example: Definite Integral of a Parabolic Curve',
      input: 'f(x) = x^2 on interval [0, 3]',
      steps: [
        { label: 'Analytical Antiderivative', expression: '∫ x² dx = x³ / 3 + C', note: 'Standard power rule of integration' },
        { label: 'Evaluate at Upper Limit', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'Substitute b = 3' },
        { label: 'Evaluate at Lower Limit', expression: 'F(0) = 0³ / 3 = 0.0', note: 'Substitute a = 0' },
        { label: 'Exact Analytical Result', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Net area under curve' },
        { label: 'SciCalcX Simpson\'s 1/3 Output', expression: 'n = 1000 slices, h = 0.003 ⟹ Result = 9.000000', note: 'Simpson\'s rule exact for polynomials up to degree 3' }
      ],
      result: '9.000',
      explanation: 'Because Simpson\'s rule fits parabolic segments, it integrates quadratic and cubic polynomials with zero truncation error, matching the exact analytical value 9.'
    },
    howItWorks: {
      title: 'How SciCalcX Computes Calculus Client-Side',
      paragraphs: [
        'When you enter f(x), SciCalcX tokenizes the string and compiles an executable Reverse Polish Notation (RPN) abstract syntax tree that supports mathematical functions including sin, cos, tan, exp, ln, log, sqrt, and powers.',
        'For definite integration, the engine divides [a, b] into n = 1000 equal subintervals with step size h = (b - a)/1000. It evaluates the function at each boundary point, applying weighting coefficients (1, 4, 2, 4, ..., 1) according to Simpson\'s composite formula.',
        'For derivatives, it evaluates f(x + h) and f(x - h) with h = 10⁻⁶. By subtracting these symmetric evaluations, linear round-off cancels out, leaving a robust numerical slope.'
      ]
    },
    limitations: {
      title: 'Accuracy Limits & Numerical Approximation Bounds',
      points: [
        'Non-Differentiable Cusps: Numerical differentiation assumes f(x) is smooth. At sharp points like f(x) = |x| at x = 0, the central difference produces an erroneous average.',
        'Vertical Asymptotes & Singularities: Integrating across poles (e.g., 1/x from -1 to 1) results in numerical instability or infinite sums.',
        'Step-Size Truncation: While h = 10⁻⁶ is optimal for double-precision differentiation, extremely small h (< 10⁻¹²) causes subtractive cancellation errors.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Inverting Integration Limits (Setting lower limit > upper limit)',
        fix: 'Remember that integrating from b to a produces the negative of integrating from a to b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Entering Non-Standard Variable Names (e.g., typing f(t) instead of f(x))',
        fix: 'The calculus engine evaluates with respect to variable "x". Ensure expressions use "x" or "X".'
      },
      {
        mistake: 'Expecting Closed-Form Symbolic Outputs for Definite Integrals',
        fix: 'SciCalcX computes numerical definite values (e.g. 3.14159) via quadrature rather than symbolic algebra.'
      }
    ],
    useCases: [
      {
        title: 'Physics & Work Calculations',
        desc: 'Evaluating mechanical work W = ∫ F(x) dx when force varies continuously as a function of position.'
      },
      {
        title: 'Probability & Cumulative Density',
        desc: 'Computing cumulative distribution functions (CDF) by integrating probability density functions over defined intervals.'
      },
      {
        title: 'Signal Processing & RMS Voltage',
        desc: 'Calculating root-mean-square (RMS) values of periodic alternating waveforms over one complete cycle.'
      }
    ],
    relatedTools: [
      { title: 'Graphing Calculator', desc: 'Visualize curves, local extrema, and tangent slopes dynamically.', href: '/graphing', badge: 'Cartesian Studio' },
      { title: 'Scientific Calculator', desc: 'Evaluate high-precision trigonometric and exponential expressions.', href: '/', badge: 'Arithmetic' },
      { title: 'Code Tutor & Compiler', desc: 'Write and test numerical simulation scripts in Python and C++.', href: '/compiler', badge: 'Sandbox' }
    ]
  },

  graphing: {
    conceptBadge: 'Analytical Geometry',
    conceptTitle: '2D Function Plotting & Cartesian Coordinate Analysis',
    conceptDescription: [
      'A 2D graphing calculator translates abstract algebraic equations into visual geometric curves on a Cartesian coordinate plane. By mapping input values (x) to corresponding outputs (y = f(x)), users can observe function behaviors such as continuity, roots, local extrema, and asymptotic boundaries.',
      'Digital plotting relies on high-resolution numerical sampling. An engine samples discrete x-coordinates across the screen pixel width, evaluates the function value, and renders connecting line segments onto an HTML5 Canvas viewport.',
      'A major challenge in computerized function plotting is handling vertical asymptotes and discontinuities (such as tan(x) or 1/x). Without intelligent slope-detection algorithms, simple plotters mistakenly draw spurious vertical connecting lines across infinite discontinuities. SciCalcX includes automated asymptote suppression for clean, mathematically sound plots.'
    ],
    howToSteps: [
      'Define function f(x): Enter an algebraic expression using variable x (e.g., x^2 - 4, sin(x), e^(-x^2)).',
      'Add a second curve g(x): Optionally enter a secondary expression to compare curves and locate intersection points.',
      'Adjust the viewport: Use the zoom control buttons (+ / -) or drag with your mouse/touchscreen to pan the coordinate plane.',
      'Inspect key analytics: Review the real-time Analytics card to check detected x-intercepts (roots), y-intercepts, and local extrema.',
      'Reset coordinates: Click "Reset View" anytime to restore the default [-10, 10] coordinate frame.'
    ],
    formulas: [
      {
        title: 'Pixel-to-Cartesian Coordinate Mapping',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Converts screen pixel column px (0 to canvas width) into the continuous mathematical x-coordinate.'
      },
      {
        title: 'Cartesian-to-Pixel Canvas Translation',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Because HTML5 canvas coordinates measure y downwards from the top, the y-axis must be inverted.'
      },
      {
        title: 'Critical Point (Extrema) Condition',
        math: 'f\'(x) = 0 \\quad \\text{and} \\quad f\'\'(x) \\neq 0',
        explanation: 'Local maxima occur where f\'(x) = 0 and f\'\'(x) < 0; local minima occur where f\'(x) = 0 and f\'\'(x) > 0.'
      },
      {
        title: 'Discontinuity Slope Threshold',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Lift Pen}',
        explanation: 'Suppresses connecting lines across vertical asymptotes where the numerical slope exceeds a physical gradient limit.'
      }
    ],
    workedExample: {
      title: 'Worked Example: Complete Analysis of Parabola f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Y-Intercept', expression: 'f(0) = 0² - 4 = -4', note: 'Coordinates: (0, -4)' },
        { label: 'X-Intercepts (Roots)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Coordinates: (-2, 0) and (2, 0)' },
        { label: 'Derivative f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'One critical stationary point at x = 0' },
        { label: 'Second Derivative f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Positive curvature indicates a global minimum' },
        { label: 'Vertex & Global Extrema', expression: 'Minimum at (0, -4)', note: 'Parabola opens upward with line of symmetry x = 0' }
      ],
      result: 'Roots at x = -2, 2; Vertex at (0, -4)',
      explanation: 'SciCalcX plots the continuous parabolic curve, highlighting the vertex minimum at (0, -4) and zero-crossings at x = -2 and x = 2 on the Cartesian grid.'
    },
    howItWorks: {
      title: 'How SciCalcX Plots Functions Client-Side',
      paragraphs: [
        'SciCalcX renders graphics natively using HTML5 Canvas 2D rasterization without heavy third-party plotting libraries. The canvas is redrawn dynamically on every pan, zoom, or expression update.',
        'For each horizontal pixel column, the engine converts screen coordinates into mathematical x values, passes x into the RPN evaluation machine, and translates calculated y values back to vertical pixel rows.',
        'When consecutive points exhibit extreme vertical jumps or change sign across infinite boundaries, the path-drawing routine lifts the canvas pen, avoiding artificial bridging lines.'
      ]
    },
    limitations: {
      title: 'Accuracy Limits & Graphical Discretization Boundaries',
      points: [
        'Pixel Discretization: Features smaller than one screen pixel cannot be fully resolved without zooming in.',
        'High-Frequency Oscillation: Functions like sin(1/x) near x = 0 fluctuate faster than the pixel sampling rate, causing aliasing artifacts.',
        'Extreme Viewport Boundaries: Zooming out beyond 10¹⁰ or in below 10⁻¹² reaches IEEE-754 precision limits where round-off noise becomes visible.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Leaving Out Parentheses in Rational Denominators (e.g. typing "1/x+1")',
        fix: '"1/x+1" is parsed as (1/x) + 1. Type "1/(x+1)" to shift the vertical asymptote to x = -1.'
      },
      {
        mistake: 'Plotting Functions Outside Visible Viewport Window',
        fix: 'If your curve does not appear, click "Zoom Out" or inspect the expected y-range for large values.'
      },
      {
        mistake: 'Using Incompatible Constants',
        fix: 'Use "pi" or "π" for Archimedes\' constant, and "e" for Euler\'s number.'
      }
    ],
    useCases: [
      {
        title: 'Polynomial Curve Sketching',
        desc: 'Verifying roots, inflection points, and turning points for algebra and pre-calculus homework assignments.'
      },
      {
        title: 'Trigonometric Waveforms',
        desc: 'Visualizing amplitude modulation, frequency doubling (sin(2x)), and phase shifts in acoustics and physics.'
      },
      {
        title: 'Economics & Optimization',
        desc: 'Plotting cost, revenue, and profit curves to visually locate break-even thresholds and profit-maximizing production levels.'
      }
    ],
    relatedTools: [
      { title: 'Calculus Calculator', desc: 'Compute high-precision numerical derivatives and Simpson definite integrals.', href: '/calculus', badge: 'Analysis' },
      { title: 'Scientific Calculator', desc: 'Evaluate trigonometric ratios and logarithms in degrees or radians.', href: '/', badge: 'Arithmetic' },
      { title: 'Statistics Suite', desc: 'Calculate sample variance, standard deviation, and data regression.', href: '/statistics', badge: 'Data Science' }
    ]
  },

  statistics: {
    conceptBadge: 'Data Science & Probability',
    conceptTitle: 'Descriptive Statistics, Central Tendency & Sample Variance',
    conceptDescription: [
      'Descriptive statistics summarizes and quantifies the main characteristics of a collection of numerical data. Rather than examining hundreds of individual raw numbers, scientists use summary metrics to describe the central location (mean, median, mode) and the dispersion or spread (range, variance, standard deviation).',
      'A fundamental distinction in statistical theory is between a population (the entire group of interest) and a sample (a subset selected from the population). When calculating variance for a sample, dividing the sum of squared deviations by the sample size N systematically underestimates the true population variance because sample points cluster closer to the sample mean than to the population mean.',
      'To correct for this bias, Bessel\'s correction replaces N with N - 1 degrees of freedom when computing sample variance (s²). SciCalcX calculates both sample metrics (s², s) and population metrics (σ², σ) simultaneously, ensuring academic accuracy for lab reports and statistical studies.'
    ],
    howToSteps: [
      'Input your dataset: Enter numbers separated by commas, spaces, or newlines in the data input box.',
      'Click "Load Sample Data": Use the sample button if you want to test with a pre-configured scientific dataset.',
      'Review Central Tendency: Inspect Mean, Median, and Mode in the primary metrics grid.',
      'Analyze Dispersion: Review Range, Sample Variance (s²), Population Variance (σ²), and Standard Deviations.',
      'Save to History: Click "Save analysis to history" to preserve your statistical summary locally.'
    ],
    formulas: [
      {
        title: 'Arithmetic Mean',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'The balance point of the dataset, computed as the sum of all values divided by count n.'
      },
      {
        title: 'Sample Variance (Bessel\'s Correction)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Divides sum-of-squares by n - 1 degrees of freedom to provide an unbiased estimator of population variance.'
      },
      {
        title: 'Population Variance',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Used when the dataset represents the entire population rather than a sample.'
      },
      {
        title: 'Standard Deviation',
        math: 's = \\sqrt{s^2} \\quad \\text{and} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'The square root of variance, returning dispersion to the original measurement units.'
      }
    ],
    workedExample: {
      title: 'Worked Example: Sample Variance for Dataset [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Data: 2, 4, 4, 4, 5, 5, 7, 9  (n = 8)',
      steps: [
        { label: 'Step 1: Sum & Mean', expression: 'Sum = 40 ⟹ Mean x̄ = 40 / 8 = 5.0', note: 'Average value is 5.0' },
        { label: 'Step 2: Deviations (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Subtract mean from each element' },
        { label: 'Step 3: Squared Deviations', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Square each deviation' },
        { label: 'Step 4: Sum of Squares (SS)', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Total sum of squared deviations' },
        { label: 'Step 5: Sample Variance (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Divided by n - 1 = 7 (Bessel\'s correction)' },
        { label: 'Step 6: Sample Std Dev (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Square root of sample variance' }
      ],
      result: 'Mean = 5.0, Median = 4.5, Mode = 4, Sample s² ≈ 4.5714, Pop σ² = 4.0',
      explanation: 'Notice the difference: Population variance divides 32 by 8 (= 4.0), whereas sample variance divides 32 by 7 (≈ 4.5714) to correct for sample estimation bias.'
    },
    howItWorks: {
      title: 'How SciCalcX Computes Statistics Client-Side',
      paragraphs: [
        'SciCalcX parses your input using a regular expression that splits on commas, whitespace, and newline delimiters, casting non-empty tokens into double-precision float64 values while filtering non-numeric characters.',
        'Data is sorted using an in-place sort to determine the median (taking the midpoint element for odd counts or averaging the two middle elements for even counts) and calculate mode via a hash-frequency histogram.',
        'Sum of squared deviations is calculated using a two-pass algorithm: the first pass computes the exact arithmetic mean, and the second pass accumulates deviations (x - x̄)², avoiding numerical cancellation artifacts common in naive single-pass algorithms.'
      ]
    },
    limitations: {
      title: 'Accuracy Limits & Statistical Assumptions',
      points: [
        'Minimum Sample Size: Sample variance and standard deviation require at least two observations (n ≥ 2) because division by n - 1 with n = 1 produces division by zero.',
        'Outlier Sensitivity: The arithmetic mean and variance are sensitive to extreme outliers. For heavily skewed distributions, the median provides a more robust measure of central tendency.',
        'Multimodal Datasets: If multiple values share the highest frequency, the calculator displays multiple modes separated by commas.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Using Population Variance (σ²) Instead of Sample Variance (s²) for Lab Experiments',
        fix: 'Academic lab experiments almost always represent samples of reality. Use sample variance (s²) with Bessel\'s n - 1 correction.'
      },
      {
        mistake: 'Confusing Variance and Standard Deviation Units',
        fix: 'Variance is measured in squared units (e.g., meters²); standard deviation is in original units (meters).'
      },
      {
        mistake: 'Assuming Zero Variance Means Zero Values',
        fix: 'Zero variance means all observations are identical (e.g., [5, 5, 5]), not that the values are zero.'
      }
    ],
    useCases: [
      {
        title: 'Laboratory Experimental Error',
        desc: 'Quantifying uncertainty, measurement spread, and random error in physics, chemistry, and biology lab coursework.'
      },
      {
        title: 'Quality Control & Six Sigma',
        desc: 'Monitoring manufacturing tolerance deviations and process variability in industrial production lines.'
      },
      {
        title: 'Financial Risk & Volatility',
        desc: 'Analyzing asset return variance and calculating the standard deviation of historical stock price fluctuations.'
      }
    ],
    relatedTools: [
      { title: 'Scientific Calculator', desc: 'Perform multi-line scientific calculations and exponential powers.', href: '/', badge: 'Arithmetic' },
      { title: 'Calculus Calculator', desc: 'Integrate continuous probability density functions.', href: '/calculus', badge: 'Analysis' },
      { title: 'Graphing Calculator', desc: 'Plot distributions and visual function curves on Cartesian grids.', href: '/graphing', badge: 'Cartesian' }
    ]
  },

  programming: {
    conceptBadge: 'Computer Architecture & Systems',
    conceptTitle: 'Base-N Number Systems, Bitboards & 32-Bit Signed Arithmetic',
    conceptDescription: [
      'Digital computing hardware executes logic entirely in binary (base-2). To make machine-level binary sequences human-readable, computer scientists use hexadecimal (base-16) and octal (base-8) notations, which cleanly group bits into nibbles (4 bits) and octets (8 bits).',
      'Modern microprocessors represent negative signed integers using Two\'s Complement notation. In a 32-bit signed integer (int32), the most significant bit (bit 31) serves as the sign bit: 0 represents non-negative numbers, while 1 represents negative numbers. Inverting all bits and adding one enables identical adder hardware to perform both addition and subtraction.',
      'SciCalcX features a live 32-bit interactive visual bitboard where you can toggle individual bits from MSB (bit 31) down to LSB (bit 0), observing real-time conversions across Hexadecimal, Decimal, Octal, and Binary representations alongside bitwise operators.'
    ],
    howToSteps: [
      'Select active input base: Click any row (HEX, DEC, OCT, or BIN) to make it the active input viewport.',
      'Enter a value: Type numeric or hexadecimal (A-F) characters using your keyboard or the on-screen programmer pad.',
      'Toggle bits on the visual bitboard: Click individual bit boxes (0 to 31) to flip their binary state and observe instant decimal updates.',
      'Apply bitwise logic: Click NOT (~), LSH (<<), or RSH (>>) to perform instant bit transformations.',
      'Toggle sign: Use the "+/-" key to observe two\'s complement signed inversion.'
    ],
    formulas: [
      {
        title: 'Radix Base-N Positional Expansion',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Every number is evaluated as the sum of digit coefficients d_i multiplied by powers of radix base b (b = 2, 8, 10, or 16).'
      },
      {
        title: 'Two\'s Complement Signed Inversion',
        math: '-x = (\\sim x) + 1',
        explanation: 'Inverts all 32 bits (one\'s complement) and adds 1 to the least significant bit.'
      },
      {
        title: 'Bitwise Logical Operators',
        math: 'A \\& B \\text{ (AND)}, \\quad A \\mid B \\text{ (OR)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'Bitwise AND produces 1 only when both bits are 1; OR produces 1 when either bit is 1; XOR produces 1 when bits differ.'
      },
      {
        title: 'Bitshift Arithmetic Operations',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{and} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'Left shifting by k bits multiplies by 2ᵏ; right shifting by k bits divides by 2ᵏ (truncating toward negative infinity).'
      }
    ],
    workedExample: {
      title: 'Worked Example: Bitwise NOT and Two\'s Complement of 42',
      input: 'Decimal Value = 42',
      steps: [
        { label: 'Step 1: Binary Representation', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bits 5, 3, and 1 are high (32 + 8 + 2 = 42)' },
        { label: 'Step 2: Hexadecimal Equivalent', expression: 'Hex = 0x0000002A', note: '2 in upper nibble, A (=10) in lower nibble' },
        { label: 'Step 3: Bitwise NOT (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Every 0 flips to 1, and every 1 flips to 0' },
        { label: 'Step 4: Signed 32-Bit Evaluation', expression: '~42 = -43 in decimal (Two\'s Complement)', note: 'Formula: ~x = -(x + 1)' },
        { label: 'Step 5: Left Shift (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'Bits shift left by 1 position (multiplication by 2)' }
      ],
      result: 'Decimal 42 = Hex 2A = Bin 101010₂; ~42 = -43',
      explanation: 'SciCalcX synchronizes all 32 bits on the clickable bitboard, illustrating how Two\'s Complement signed arithmetic translates bits directly into negative decimal integers.'
    },
    howItWorks: {
      title: 'How SciCalcX Handles 32-Bit Bitwise Logic Client-Side',
      paragraphs: [
        'JavaScript bitwise operators (such as |, &, ^, ~, <<, >>) automatically convert operands into signed 32-bit integers in Two\'s Complement format prior to operation.',
        'SciCalcX maintains an internal int32 state integer. Whenever a bit is clicked or an operator is pressed, the integer is transformed, and bitwise masks ((val >>> bit) & 1) dynamically update the 32 individual button states from bit 31 (sign bit) to bit 0 (least significant bit).',
        'Conversions to Hexadecimal, Decimal, Octal, and Binary strings are evaluated locally for fast browser-based interaction, providing an immediate hardware-level visualization of bit manipulations.'
      ]
    },
    limitations: {
      title: 'Accuracy Limits & Integer Boundaries',
      points: [
        '32-Bit Signed Integer Range: Operates strictly between -2,147,483,648 (-2³¹) and +2,147,483,647 (+2³¹ - 1).',
        'Overflow Behavior: Incrementing beyond +2,147,483,647 wraps around to negative values (-2,147,483,648) conforming to standard Two\'s Complement CPU behavior.',
        'Bitshift Wrapping: Bit shifting by multiples of 32 wraps around (e.g., x << 32 is equivalent to x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Assuming Signed Right Shift (>>) Fills with Zeros for Negative Numbers',
        fix: 'Arithmetic right shift (>>) preserves the sign bit (fills with 1s). Unsigned right shift (>>>) fills with 0s.'
      },
      {
        mistake: 'Confusing Bitwise NOT (~) with Logical NOT (!)',
        fix: 'Bitwise NOT flips all 32 bits (~0 = -1). Logical NOT tests boolean truthiness.'
      },
      {
        mistake: 'Typing Invalid Characters for Selected Base (e.g. typing "8" in Octal)',
        fix: 'Octal only accepts digits 0–7; Binary only accepts 0–1; Hexadecimal accepts 0–9 and A–F.'
      }
    ],
    useCases: [
      {
        title: 'Embedded Systems & Microcontrollers',
        desc: 'Inspecting hardware control register flags, GPIO pin masks, and microcontroller bitfields.'
      },
      {
        title: 'Network Packet Header Decoding',
        desc: 'Masking and shifting IP/TCP packet headers to extract port numbers, protocol flags, and subnet masks.'
      },
      {
        title: 'Game Development & Optimization',
        desc: 'Using fast bitboards to represent chess board states or collision masks with single-cycle bitwise operations.'
      }
    ],
    relatedTools: [
      { title: 'Code Tutor & Compiler', desc: 'Write, compile, and run C++ and Python bitwise algorithms.', href: '/compiler', badge: 'Sandbox' },
      { title: 'Scientific Calculator', desc: 'Perform multi-line scientific calculations and powers.', href: '/', badge: 'Arithmetic' },
      { title: 'Matrix Calculator', desc: 'Compute linear algebra determinants and matrix operations.', href: '/matrix', badge: 'Linear Algebra' }
    ]
  }
};
