# SciCalcX 🧮⚡

> **The Modern, High-Precision Web Computational Suite & Gamified Code Tutor**

[![Astro](https://img.shields.io/badge/Astro-v6.4-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![KaTeX](https://img.shields.io/badge/KaTeX-LaTeX_Math-00599C?logo=latex&logoColor=white)](https://katex.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Languages](https://img.shields.io/badge/Languages-9_Locales-brightgreen)](#-internationalization-i18n)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[SciCalcX](https://scicalcx.com) is an open-source, ultra-fast mathematical computation platform, educational engine, and interactive programming tutor. Built with a client-side first architecture, SciCalcX delivers zero-latency calculations, rigorous double-precision IEEE-754 arithmetic with epsilon normalization, interactive graphing, matrix linear algebra, calculus solvers, and a gamified AI code tutor for Python, C, and C++.

---

## 🌟 Feature Overview

```
                                      SciCalcX Suite
 ┌─────────────────┬──────────────────┬─────────────────┬──────────────────┐
 │ 🔬 Scientific   │ 📐 Calculus      │ 📈 Graphing     │ ⚡ Code Tutor    │
 │ • Shunting-Yard │ • Simpson's 1/3  │ • HTML5 Canvas  │ • 40 Challenges  │
 │ • Float64/PEMDAS│ • Anti-Derivative│ • Dual f(x)/g(x)│ • Python, C, C++ │
 │ • History Tape  │ • Roots (2° & 3°)│ • Live Readout  │ • PNG Assignment │
 ├─────────────────┼──────────────────┼─────────────────┼──────────────────┤
 │ 🧮 Matrix       │ 📊 Statistics    │ 💻 Programmer   │ 🌐 i18n & Blog   │
 │ • 2x2 & 3x3     │ • Central Tend.  │ • HEX/DEC/OCT   │ • 9 Languages    │
 │ • det, inv, T   │ • Sample & Pop.  │ • 32-Bit Board  │ • KaTeX / LaTeX  │
 │ • Add, Sub, Mul │ • Var & Std Dev  │ • Bitwise Ops   │ • Tech Articles  │
 └─────────────────┴──────────────────┴─────────────────┴──────────────────┘
```

---

## 🚀 Detailed Features

### 1. 🔬 Scientific Calculator (`/`)
* **Client-Side Lexical & Shunting-Yard Parser**: Evaluates compound infix mathematical expressions using an operator precedence stack (PEMDAS / BODMAS) converted to Reverse Polish Notation (RPN).
* **IEEE-754 Epsilon Normalization**: Strips floating-point round-off noise (e.g. `0.1 + 0.2 = 0.3`) for clean results up to 12 decimal places.
* **Angular Mode Toggling**: Seamless DEG (degrees) and RAD (radians) toggle switch with automatic trigonometric conversions.
* **Full Function Library**: Trigonometry (`sin`, `cos`, `tan`, `asin`, `acos`, `atan`), Logarithms (`ln`, $\log_{10}$), Exponentials ($e^x$, $10^x$, $x^y$), Radicals ($\sqrt{x}$, $\sqrt[3]{x}$), Combinatorics ($x!$), Reciprocals ($1/x$), Absolute value ($|x|$), and Percentages (`%`).
* **S-D Representation Switch**: Instantly cycles between decimal floating-point values and simplified rational fractions.
* **Memory Registers & Tape History**: Full memory operations (`MC`, `MR`, `M+`, `M-`) alongside an expandable audit history drawer with 1-click recall and clipboard copying.
* **Dual Input**: Full keyboard support (Enter, Backspace, Esc, operators) plus responsive touch/mouse keypad.

### 2. 🧮 Matrix Operations Suite (`/matrix`)
* **Dynamic Dimensions**: Real-time configuration for $2 \times 2$ and $3 \times 3$ matrices.
* **Dual Matrix Operations**: Matrix addition ($A + B$), matrix subtraction ($A - B$), and matrix multiplication ($A \times B$) with dimension compatibility checks.
* **Single Matrix Transformations**:
  * **Determinants**: Fast cofactor expansion for $\det(A)$ and $\det(B)$.
  * **Matrix Inversion**: Adjugate/determinant matrix inverse computation ($A^{-1}, B^{-1}$) with singularity detection ($\det = 0$).
  * **Transposition**: Instant row-column interchange ($A^T, B^T$).
* **Matrix Output & Pedagogical Explanations**: Visual formatted matrix display with step breakdowns.

### 3. 📐 Calculus & Polynomial Solver (`/calculus`)
* **Definite Numerical Integration**: Computes definite integrals $\int_{a}^{b} f(x) \, dx$ using Simpson's 1/3 rule and adaptive quadrature over custom intervals.
* **Indefinite Integration (Symbolic)**: Generates analytical anti-derivatives $F(x) + C$ for polynomial expressions with term-by-term power rule integration.
* **Polynomial Root Solver**:
  * **Quadratic Solver**: Solves $ax^2 + bx + c = 0$ with discriminant analysis ($\Delta = b^2 - 4ac$), yielding real or complex conjugates.
  * **Cubic Solver**: Solves $ax^3 + bx^2 + cx + d = 0$ providing all 3 real or complex roots.

### 4. 📈 Interactive Graphing Engine (`/graphing`)
* **Hardware-Accelerated Canvas**: High-performance HTML5 Canvas graphing engine with anti-aliasing and coordinate transformations.
* **Multi-Function Plotting**: Simultaneous rendering of $f(x)$ (primary blue) and $g(x)$ (secondary emerald).
* **Live Crosshair & Mouse Tracking**: Interactive crosshair hover overlay reporting exact $(x, y)$ mathematical coordinates in real time.
* **Micro-Analytics Engine**: Automatic calculation of $y$-intercepts, roots ($x$-intercepts), and continuous behavior.
* **Quick Presets**: 1-click loading for Parabolas, Cubic polynomials, Trigonometric waves, and Dampened Oscillations ($\exp(-0.2x)\sin(2x)$).

### 5. 📊 Statistical Analysis & Dispersion Engine (`/statistics`)
* **Multi-Format Input**: Accepts datasets separated by commas, spaces, or line breaks.
* **Measures of Central Tendency**: Mean (Average), Median, Mode (with multi-modal detection).
* **Measures of Dispersion & Extremes**: Minimum, Maximum, Range, Total Sum ($\sum x$), and Sum of Squares ($\sum x^2$).
* **Variance & Standard Deviation**:
  * Sample Variance ($s^2$) and Population Variance ($\sigma^2$)
  * Sample Standard Deviation ($s$) and Population Standard Deviation ($\sigma$)
* **Reactive Feedback**: Real-time item count tracker and pre-loaded sample dataset generator.

### 6. 💻 Programmer Radix Converter & 32-Bit Bitboard (`/programming`)
* **Synchronized Multi-Base Conversion**: Bi-directional conversions across Hexadecimal (HEX, base 16), Decimal (DEC, base 10), Octal (OCT, base 8), and Binary (BIN, base 2).
* **Interactive 32-Bit Visual Bitboard**: 32 individual toggleable bit cells (MSB to LSB). Clicking any bit toggles state and immediately synchronizes all number bases.
* **Bitwise Operations**: One-click Bitwise NOT ($\sim$), Left Shift ($\ll$), Right Shift ($\gg$), and Clear (AC).
* **Context-Sensitive Keyboard**: Dynamic key lockout preventing invalid digits (e.g., A–F only enabled in HEX; 8–9 disabled in OCT; 2–9 disabled in BIN).

### 7. ⚡ AI Code Tutor & Gamified Compiler (`/compiler`)
* **Gamified Curriculum**: 40 progressive interactive challenges across 4 foundational modules:
  1. **Hello World**: Standard output, formatting, escape characters (10 sub-challenges).
  2. **Variables & Data Types**: Primitive types, memory layout, string manipulation (10 sub-challenges).
  3. **Loops & Iteration**: `for` and `while` loops, accumulators, nested iterations (10 sub-challenges).
  4. **Conditionals & Branching**: Boolean logic, `if`/`else` control flow, edge casing (10 sub-challenges).
* **Multi-Language Sandbox**: Write and test solutions in **Python 3**, **C (GCC 14)**, or **C++20 (GCC 14)**.
* **Secure Sandbox Execution Architecture**: Remote sandboxed execution using Judge0 CE (primary) and Wandbox (fallback) over HTTPS.
* **AI Tutor Insights**:
  * **Logic Breakdown**: Step-by-step syntactic explanations for each language.
  * **Real-World Analogies**: Relatable conceptual intuition for beginner programmers.
  * **Smart Debugger**: Real-time syntax diagnostics and criteria validation.
* **Assignment Proof Exporter (PNG)**:
  * Generates downloadable assignment completion snapshots with Student Name, Roll Number, verified code, output, and execution timestamp.
  * **100% Client-Side Privacy**: Student details are processed only in browser memory and local cache—never transmitted to external servers.
* **Developer Experience**: Monaco-inspired source editor with line number gutter, fullscreen toggle, code reset, and local draft persistence.

### 8. 🌐 Internationalization (i18n)
Full localization across **9 languages** with dedicated route prefixes (`/[lang]/...`), automated canonical tags, and `hreflang` SEO alternates:
* 🇺🇸 **English** (`en` - Default)
* 🇪🇸 **Español** (`es`)
* 🇯🇵 **日本語** (`ja`)
* 🇫🇷 **Français** (`fr`)
* 🇩🇪 **Deutsch** (`de`)
* 🇳🇱 **Nederlands** (`nl`)
* 🇧🇷 **Português** (`pt`)
* 🇰🇷 **한국어** (`ko`)
* 🇮🇹 **Italiano** (`it`)

Every locale includes localized tool interfaces, handbook documentation, worked examples, and comprehensive FAQ accordions.

### 9. 📚 Technical Articles & Engineering Blog (`/blog`)
* 12 in-depth pedagogical guides covering topics such as:
  * *Pointers and Memory Allocation in C++*
  * *Matrix Multiplication Algorithms & Cache Locality*
  * *Derivation Rules & Calculus Fundamentals*
  * *Standard Deviation vs. Variance in Data Science*
  * *Algorithmic Time Complexity ($O(1)$ to $O(n!)$)*
  * *Data Structures: Linked Lists vs. Arrays*
* **KaTeX LaTeX Math Rendering**: Typeset formulas using `remark-math` and `rehype-katex`.
* **Dual-Theme Code Blocks**: Syntax highlighting powered by Shiki (`github-light` and `github-dark`).
* **Multi-Lingual Content**: Fully translated localized blog articles across all supported locales.

### 10. 🛡️ Design, Accessibility & SEO Architecture
* **Dark / Light Mode**: Unified theme switcher with system preference detection and localStorage persistence.
* **WCAG 2.1 AA Compliant**: Carefully curated high-contrast color palettes, accessible focus rings, ARIA labels, and keyboard navigability.
* **Schema.org Structured Data**: Automatic JSON-LD injection (`WebApplication`, `TechArticle`, `FAQPage`, and `BreadcrumbList`).
* **Zero Bloat**: Blazing-fast performance with vanilla TypeScript, Tailwind CSS v4, and Astro's static site generation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Astro v6](https://astro.build/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Math Formatting** | [KaTeX](https://katex.org/), `remark-math`, `rehype-katex` |
| **Code Highlighting** | [Shiki](https://shiki.style/) (Dual GitHub themes) |
| **Code Execution** | Judge0 CE & Wandbox REST APIs |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) via Wrangler |

---

## 📁 Project Structure

```text
scicalcx.com/
├── public/                 # Static assets, favicons, robots.txt, sitemap
├── src/
│   ├── components/         # Reusable Astro UI components
│   │   ├── pages/          # Full page view components (Scientific, Matrix, etc.)
│   │   ├── CompilerWorkspace.astro  # Interactive IDE & AI Code Tutor
│   │   ├── CalculatorPedagogy.astro # Educational math explanations
│   │   ├── FaqSection.astro         # Schema-backed FAQ accordion
│   │   ├── LanguagePicker.astro     # i18n locale switcher
│   │   └── CookieBanner.astro       # Privacy & consent banner
│   ├── content/            # Localized Markdown/MDX blog articles
│   │   └── blog/           # 12 articles translated into 9 languages
│   ├── data/               # Mathematical formulas, pedagogy, and sample datasets
│   ├── i18n/               # Translation dictionaries & routing utilities
│   │   ├── content/        # FAQs and handbooks per language
│   │   ├── ui.ts           # Core UI translation dictionary
│   │   └── utils.ts        # Path translation and locale extraction
│   ├── layouts/            # Base HTML & Layout.astro with JSON-LD schemas
│   ├── pages/              # Astro file-based routing
│   │   ├── [lang]/         # Dynamic internationalized routes
│   │   ├── index.astro     # English root landing page
│   │   ├── calculus.astro  # Calculus route
│   │   ├── compiler.astro  # Code Tutor route
│   │   ├── graphing.astro  # Graphing route
│   │   ├── matrix.astro    # Matrix route
│   │   ├── programming.astro # Programmer route
│   │   ├── statistics.astro  # Statistics route
│   │   └── blog/           # Blog index & post routes
│   └── styles/             # Global CSS and Tailwind v4 theme definitions
├── astro.config.mjs        # Astro configuration (i18n, markdown plugins, vite)
└── package.json            # Node dependencies and project scripts
```

---

## 🚦 Getting Started

### Prerequisites
* **Node.js**: `>= 22.12.0`
* **Package Manager**: `npm` (or `pnpm` / `bun`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RishabhDev817/scicalcx.git
   cd scicalcx
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 🧞 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Builds optimized production static bundle to `./dist/` |
| `npm run preview` | Locally previews the generated production build |
| `npm run astro ...` | Executes Astro CLI commands (e.g. `npm run astro check`) |
| `npm run deploy` | Builds the production bundle and deploys to Cloudflare Pages |

---

## 🚀 Deployment

The site is built as a static site and is optimized for deployment on **Cloudflare Pages**:

```bash
# Build production bundle and deploy via Wrangler
npm run deploy
```

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with ❤️ for students, educators, and engineers worldwide by <a href="https://scicalcx.com">SciCalcX</a>.</sub>
</div>
