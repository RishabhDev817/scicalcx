import type { SupportedLanguage } from '../ui';

export interface InfoPageContent {
  about: {
    badge: string;
    heading: string;
    subheading: string;
    missionBadge: string;
    missionP1: string;
    missionP2: string;
    teamBadge: string;
    teamTitle: string;
    standardsBadge: string;
    standardsTitle: string;
    standardsIntro: string;
    standards: { label: string; text: string }[];
    architectureBadge: string;
    architectureTitle: string;
    architectureDesc: string;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    directTitle: string;
    emailLabel: string;
    repoLabel: string;
    responseLabel: string;
    responseTime: string;
    formTitle: string;
    nameLabel: string;
    emailInputLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    successNotice: string;
  };
  terms: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; body?: string; paragraphs?: string[] }[];
  };
  privacy: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; body?: string; paragraphs?: string[] }[];
  };
  editorial: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; paragraphs: string[] }[];
  };
}

export const infoPages: Record<SupportedLanguage, InfoPageContent> = {
  en: {
    about: {
      badge: 'Platform Profile & Governance',
      heading: 'About SciCalcX',
      subheading: 'Bridging the gap between mathematical computation and interactive software compilation.',
      missionBadge: 'Our Mission',
      missionP1: 'SciCalcX was founded to solve a persistent frustration experienced by computer science and engineering students: the friction of switching between disconnected mathematical calculators, statistical analysis tools, and detached programming IDEs.',
      missionP2: 'Our platform integrates high-precision numeric evaluation, linear algebra, calculus, and bitwise manipulation directly alongside an interactive coding tutor and compiler. Whether verifying matrix determinants for computer graphics or computing sample variance, SciCalcX delivers fast, accessible results directly in your web browser.',
      teamBadge: 'Engineering & Editorial Team',
      teamTitle: 'Engineering & Editorial Team',
      standardsBadge: 'Accuracy & Standards',
      standardsTitle: 'Calculation Accuracy & Editorial Standards',
      standardsIntro: 'Accuracy is paramount in academic and scientific computing. We adhere to rigorous computational validation standards:',
      standards: [
        { label: 'Precision Normalization', text: 'IEEE 754 precision artifacts are eliminated via custom decimal-normalization algorithms to guarantee human-readable representations up to 12 decimal places.' },
        { label: 'Standardized Verification', text: 'Matrix transformations and Simpson\'s numerical quadrature are tested against symbolic reference solutions and linear algebra benchmark datasets.' },
        { label: 'Client-Side Mathematical Privacy', text: 'Mathematical calculations, formulas, and matrices execute 100% locally in your web browser. Code Tutor executions are processed securely in isolated external sandboxes.' },
      ],
      architectureBadge: 'Web Architecture',
      architectureTitle: 'High-Performance Web Architecture',
      architectureDesc: 'SciCalcX is engineered using modern web standards for accessibility, zero-dependency speed, and mobile responsiveness.',
    },
    contact: {
      badge: 'Communications',
      heading: 'Contact Us',
      subheading: 'Reach out to our support and development team for inquiries, feedback, or bug reports.',
      directTitle: 'Direct Connect',
      emailLabel: 'Support Email',
      repoLabel: 'Open-Source',
      responseLabel: 'Response Time',
      responseTime: 'Within 24-48 business hours',
      formTitle: 'Submit Inquiry',
      nameLabel: 'Your Name',
      emailInputLabel: 'Email Address',
      subjectLabel: 'Inquiry Subject',
      messageLabel: 'Your Message',
      submitBtn: 'Send Inquiry to Support Team',
      successNotice: 'Email client initialized! If your mail app did not open automatically, please send your message directly to support@scicalcx.com.',
    },
    terms: {
      badge: 'Legal Agreements',
      heading: 'Terms & Conditions',
      subheading: 'Last Updated: September 14, 2026. Review rules and policies for using SciCalcX online services.',
      sections: [
        { 
          title: '1. Acceptance of Terms', 
          paragraphs: [
            'By accessing or using SciCalcX (https://scicalcx.com/), you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions. If you do not agree to all terms, you must cease using the service immediately.',
            'These terms govern all access to our online scientific calculators, linear algebra solvers, numerical calculus tools, statistical analyzers, programmer utilities, and code execution sandboxes.'
          ]
        },
        { 
          title: '2. Permitted Educational and Professional Use', 
          paragraphs: [
            'SciCalcX is provided for educational, academic, professional, and personal calculation and programming reference. You are permitted to use calculated outputs, graphs, and code snippets in academic coursework, lab reports, and professional evaluations.',
            'You agree not to use automated scrapers, denial-of-service scripts, or abusive crawling mechanisms that place an unreasonable burden on our infrastructure or third-party execution partners.'
          ]
        },
        { 
          title: '3. Code Execution & Sandbox Acceptable Use', 
          paragraphs: [
            'The Code Tutor and Compiler tool connects to external container execution services (Judge0 CE and Wandbox API). By submitting source code, you agree that you will not submit, execute, or transmit:',
            '• Malicious software, viruses, worms, rootkits, or exploit payloads.',
            '• Cryptocurrency mining algorithms or unauthorized automated workloads.',
            '• Unauthorized network scanners, port scanners, denial-of-service scripts, or spam bots.',
            '• Attempts to escape container sandboxes, read host system files, or tamper with execution environments.',
            'Violations will result in immediate termination of access and potential reporting to network security providers.'
          ]
        },
        { 
          title: '4. Mathematical Accuracy & As-Is Disclaimer', 
          paragraphs: [
            'SciCalcX implements rigorous mathematical algorithms (including Simpson\'s composite quadrature, central difference numerical derivatives, and Laplace matrix expansions) alongside precision normalization. However, all computational services are provided strictly on an "AS-IS" and "AS-AVAILABLE" basis without warranties of any kind.',
            'Floating-point arithmetic on digital processors carries inherent approximation limits. SciCalcX must not be used as the sole calculation engine for mission-critical engineering, commercial aviation, medical diagnostics, structural safety design, or financial investment decisions where calculation discrepancies could cause physical, environmental, or financial harm.'
          ]
        },
        { 
          title: '5. Intellectual Property Rights', 
          paragraphs: [
            'The SciCalcX brand name, visual design, custom UI components, algorithms, documentation, and tutorials are the intellectual property of SciCalcX and its contributors. Open-source components are credited and licensed under their respective open-source licenses.',
            'Users retain full copyright ownership of the source code and mathematical expressions they input into the platform.'
          ]
        },
        { 
          title: '6. Third-Party Services & External Links', 
          paragraphs: [
            'SciCalcX relies on trusted third-party providers for select features, including Cloudflare for content delivery, Judge0 CE and Wandbox for remote code execution, and Google for analytics and advertising. SciCalcX does not control third-party infrastructure and is not responsible for intermittent third-party service interruptions or content on external websites.'
          ]
        },
        { 
          title: '7. Limitation of Liability', 
          paragraphs: [
            'To the maximum extent permitted by applicable law, SciCalcX, its developers, authors, and contributors shall not be held liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from the use or inability to use the platform, including data loss, computational errors, assignment penalties, or business interruption.'
          ]
        },
        { 
          title: '8. Modifications & Contact', 
          paragraphs: [
            'We reserve the right to revise these terms at any time. Material changes will be noted with an updated "Last Updated" timestamp at the top of this document.',
            'Questions regarding these terms should be addressed to our legal and support team at support@scicalcx.com.'
          ]
        },
      ],
    },
    privacy: {
      badge: 'Legal & Compliance',
      heading: 'Privacy Policy',
      subheading: 'Last Updated: September 14, 2026. Learn how SciCalcX handles computational privacy, cookies, and data transparency.',
      sections: [
        { 
          title: '1. Introduction & Scope', 
          paragraphs: [
            'At SciCalcX (https://scicalcx.com/), we believe in transparent, privacy-first software. This Privacy Policy explains what information is collected, what information is not collected, how browser storage functions, and how third-party services operate across our platform.',
            'SciCalcX does not require user registration, logins, or passwords. You can access all calculators, reference articles, and tools freely without creating an account.'
          ]
        },
        { 
          title: '2. Client-Side Mathematical Privacy', 
          paragraphs: [
            'The core mathematical tools on SciCalcX—including the Scientific Calculator, Matrix Calculator, Calculus Calculator, Graphing Calculator, Statistics Calculator, and Programmer Bitboard—operate 100% client-side in your web browser.',
            'When you enter expressions like "sin(45)", define a 3x3 matrix, or compute standard deviation on a dataset, the mathematical evaluation is executed locally by your browser\'s JavaScript engine. Your mathematical formulas, variable values, and dataset entries are never sent to our servers, never stored in remote databases, and never inspected by third parties.'
          ]
        },
        { 
          title: '3. Code Tutor & Remote Sandbox Execution', 
          paragraphs: [
            'Unlike the mathematical calculators, the Code Tutor and Compiler tool allows users to compile and run programs written in languages such as C, C++, and Python. Browsers cannot natively execute C++ or GCC binary toolchains directly on client hardware without remote compilers.',
            'When you click "Run Code" in the Code Tutor workspace, your source code, standard input (stdin), and language identifier are transmitted via encrypted HTTPS to external container execution services (Judge0 CE at ce.judge0.com and fallback to Wandbox API at wandbox.org).',
            'These execution partners run your code inside an isolated, temporary container sandbox, collect the program\'s standard output (stdout) and compiler error messages (stderr), and return them back to your browser. Your code is processed strictly for the ephemeral duration of the execution request and is not permanently saved, sold, or used for machine learning training.'
          ]
        },
        { 
          title: '4. Information We Do Not Collect', 
          paragraphs: [
            '• We do not collect names, phone numbers, or physical addresses.',
            '• We do not require or store payment card numbers, bank credentials, or financial accounts.',
            '• We do not sell, rent, or trade user data with data brokers.'
          ]
        },
        { 
          title: '5. Browser Local Storage (localStorage)', 
          paragraphs: [
            'SciCalcX uses your browser\'s native localStorage solely to enhance your user experience locally on your device:',
            '• Theme Preference: Storing your selection of "dark" or "light" mode so the interface remains consistent between visits.',
            '• Calculation History: Storing your recent calculation results (capped at the most recent 50 entries) in a local stack. You can clear this history anytime using the "[ Clear All ]" button in the history sidebar.',
            '• Cookie Consent Acknowledgment: Remembering when you have dismissed or accepted our cookie and privacy notice banner.'
          ]
        },
        { 
          title: '6. Cookies, Analytics & Google AdSense', 
          paragraphs: [
            'SciCalcX uses standard web technologies to maintain site stability and support platform hosting:',
            '• Cloudflare: Uses technical security cookies and edge routing to prevent distributed denial-of-service (DDoS) attacks and ensure fast content delivery.',
            '• Google Analytics 4 (Measurement ID: G-XSYVYWTGTS): Collects aggregated, non-personally identifiable statistical traffic metrics (such as page views, device categories, and referrers) to help us understand which calculators are most useful and improve platform performance.',
            '• Google AdSense: Third-party advertising vendors, including Google, use cookies to serve ads based on a user\'s prior visits to this website or other websites on the internet. Google\'s use of advertising cookies enables it and its partners to serve ads to our users based on their visits to our site and/or other sites on the internet.',
            'Users may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com/) or by using the Network Advertising Initiative opt-out page (http://www.aboutads.info/choices/).'
          ]
        },
        { 
          title: '7. Contact Inquiries & Direct Email', 
          paragraphs: [
            'If you submit an inquiry through our Contact page or email us directly at support@scicalcx.com, your email address, name, and message content are used solely to reply to your inquiry, debug reported issues, and provide technical assistance. We do not add contact inquiries to marketing newsletters or sell email lists.'
          ]
        },
        { 
          title: '8. Data Retention & Security Standards', 
          paragraphs: [
            'Because we maintain no user databases or authentication accounts, there is no centralized repository of personal identities to breach. All communications between your browser and SciCalcX use modern TLS/HTTPS encryption. Edge access logs maintained by our hosting infrastructure are retained only for diagnostic and security audit windows.'
          ]
        },
        { 
          title: '9. Children\'s Online Privacy (COPPA)', 
          paragraphs: [
            'SciCalcX is an educational mathematical calculator designed for students, educators, and professionals. We do not knowingly collect personal identifiable information from children under the age of 13. If you believe a child has provided personal information to us via email, please contact support@scicalcx.com for immediate deletion.'
          ]
        },
        { 
          title: '10. International User Rights (GDPR & CCPA/CPRA)', 
          paragraphs: [
            'Depending on your geographic location, you may have statutory rights regarding personal data, including the right to access, rectify, or request deletion of data held about you. Because SciCalcX does not store user profiles, personal identifiers, or formulas, most operations can be deleted directly on your own device by clearing your browser cache and localStorage.',
            'For any questions or privacy inquiries, contact our data protection team at support@scicalcx.com.'
          ]
        },
      ],
    },
    editorial: {
      badge: 'Academic & Editorial Standards',
      heading: 'Editorial Integrity & Standards',
      subheading: 'Our commitment to mathematical rigor, verified formulas, transparent algorithms, and error correction.',
      sections: [
        {
          title: 'Commitment to Academic Rigor',
          paragraphs: [
            'At SciCalcX, mathematical and technical precision is the foundation of our work. Our educational calculators and learning articles are written and reviewed to serve secondary school students, university engineering majors, data scientists, and software developers who rely on dependable computational tools.',
            'We do not publish unsubstantiated mathematical claims, artificial keyword-stuffed articles, or copied explanations. Every guide is crafted to teach underlying algebraic, calculus, or programming principles with step-by-step clarity.'
          ]
        },
        {
          title: 'Mathematical Verification & Benchmarking',
          paragraphs: [
            'Before any calculator feature is deployed, its numerical algorithms are tested against benchmark reference suites. For example:',
            '• Matrix Determinants & Inverses: Verified against standard linear algebra test matrices and symbolic solvers for 2x2 and 3x3 configurations, including singular and ill-conditioned edge cases.',
            '• Numerical Calculus: Our Simpson\'s 1/3 composite rule implementation (evaluating N=1000 subintervals) and central difference quotients (h=1e-6) are checked against analytically known polynomial, trigonometric, and exponential integrals.',
            '• Descriptive Statistics: Mean, median, mode, sample variance (using Bessel\'s n-1 correction), and population variance are validated against standardized statistical reference datasets.'
          ]
        },
        {
          title: 'Transparent Algorithmic Disclosures',
          paragraphs: [
            'We believe learners should know how their answers are computed. Rather than treating calculators as black boxes, each SciCalcX tool includes technical documentation describing the underlying method, whether it uses the Shunting-Yard tokenization algorithm, IEEE-754 decimal normalization, or numerical quadrature.',
            'We also openly state numerical limitations, such as floating-point binary representation limits, step-size truncation errors, and domain asymptotes.'
          ]
        },
        {
          title: 'Policy on AI-Assisted Content & Tools',
          paragraphs: [
            'Any computational models or assistive coding tools used internally undergo strict human peer review by our lead engineering team. No code or article is published without human verification of mathematical accuracy, grammatical clarity, and practical utility.',
            'We do not deploy automated mass-generated content farms. Every tutorial on SciCalcX is authored to provide genuine pedagogical value.'
          ]
        },
        {
          title: 'Source Attribution & Originality',
          paragraphs: [
            'All articles, code snippets, and diagrams are developed originally by our engineering team or attributed to standard academic textbooks and open-source specifications. We respect intellectual property and adhere to ethical standards of citation.'
          ]
        },
        {
          title: 'Error Reporting & Continuous Corrections',
          paragraphs: [
            'Science and mathematics thrive on verification. If you detect any error, ambiguity, or numerical flaw in our tools or articles, we welcome your bug report. We investigate submissions promptly and publish transparent fixes.',
            'You can report errors directly by emailing support@scicalcx.com or by filing a public issue on our GitHub repository at github.com/RishabhDev817/scicalcx.'
          ]
        }
      ]
    }
  },
  es: {
    about: {
      badge: 'Perfil de Plataforma y Gobernanza',
      heading: 'Sobre SciCalcX',
      subheading: 'Uniendo la computación matemática y la compilación interactiva de software.',
      missionBadge: 'Nuestra Misión',
      missionP1: 'SciCalcX fue fundada para resolver una frustración persistente de los estudiantes de ingeniería e informática: la fricción de alternar entre calculadoras aisladas, herramientas estadísticas y entornos de programación desconectados.',
      missionP2: 'Nuestra plataforma integra evaluación numérica de alta precisión, álgebra lineal, cálculo y operaciones a nivel de bits junto a un tutor de código y compilador interactivo. Todo se ejecuta en tu navegador web con latencia cero.',
      teamBadge: 'Equipo de Desarrollo y Edición',
      teamTitle: 'Equipo de Ingeniería y Edición',
      standardsBadge: 'Precisión y Estándares',
      standardsTitle: 'Estándares de Precisión y Rigor Editorial',
      standardsIntro: 'La exactitud es primordial en el cómputo académico y científico. Nos regimos por rigurosos estándares de validación:',
      standards: [
        { label: 'Normalización de Precisión', text: 'Los artefactos binarios de IEEE 754 se eliminan mediante algoritmos de normalización para asegurar representaciones exactas de hasta 12 decimales.' },
        { label: 'Verificación Estandarizada', text: 'Las transformaciones matriciales y la cuadratura de Simpson se contrastan continuamente con soluciones simbólicas de referencia.' },
        { label: 'Privacidad Matemática en el Navegador', text: 'Las operaciones matemáticas corren 100% locales en tu navegador. Las ejecuciones de código se procesan en entornos sandbox seguros.' },
      ],
      architectureBadge: 'Arquitectura Web',
      architectureTitle: 'Arquitectura Web de Alto Rendimiento',
      architectureDesc: 'SciCalcX está construida con los estándares web más modernos para garantizar velocidad sin dependencias pesadas y máxima accesibilidad móvil.',
    },
    contact: {
      badge: 'Comunicaciones',
      heading: 'Contáctanos',
      subheading: 'Comunícate con nuestro equipo para consultas, comentarios o reportes de errores.',
      directTitle: 'Conexión Directa',
      emailLabel: 'Correo de Soporte',
      repoLabel: 'Código Abierto',
      responseLabel: 'Tiempo de Respuesta',
      responseTime: 'Entre 24 y 48 horas hábiles',
      formTitle: 'Enviar Consulta',
      nameLabel: 'Tu Nombre',
      emailInputLabel: 'Correo Electrónico',
      subjectLabel: 'Asunto de la Consulta',
      messageLabel: 'Tu Mensaje',
      submitBtn: 'Enviar Consulta al Equipo',
      successNotice: '¡Cliente de correo inicializado! Si tu aplicación no abrió automáticamente, escribe directamente a support@scicalcx.com.',
    },
    terms: {
      badge: 'Acuerdos Legales',
      heading: 'Términos y Condiciones',
      subheading: 'Última actualización: 14 de septiembre de 2026. Reglas para usar los servicios de SciCalcX.',
      sections: [
        { 
          title: '1. Aceptación de Términos', 
          paragraphs: [
            'Al acceder o utilizar SciCalcX, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo, debes cesar el uso de inmediato.',
            'Estos términos rigen el acceso a todas nuestras calculadoras matemáticas, herramientas de álgebra lineal, cálculo numérico y compilador de código.'
          ]
        },
        { 
          title: '2. Uso Permitido', 
          paragraphs: [
            'SciCalcX se ofrece para fines educativos, profesionales y personales. Aceptas no utilizar scrapers automatizados ni sobrecargar los servidores con tráfico no autorizado.'
          ]
        },
        { 
          title: '3. Reglas de Ejecución de Código', 
          paragraphs: [
            'El tutor de código utiliza contenedores de ejecución externos. Queda estrictamente prohibido enviar scripts maliciosos, minería de criptomonedas o intentos de vulnerar entornos seguros.'
          ]
        },
        { 
          title: '4. Descargo de Responsabilidad de Precisión', 
          paragraphs: [
            'Las operaciones se suministran "tal cual". SciCalcX no asume responsabilidad por pérdidas derivadas de los resultados calculados en aplicaciones críticas.'
          ]
        },
      ],
    },
    privacy: {
      badge: 'Legal y Cumplimiento',
      heading: 'Política de Privacidad',
      subheading: 'Última actualización: 14 de septiembre de 2026. Conoce cómo protegemos tu privacidad computacional.',
      sections: [
        { 
          title: '1. Introducción y Procesamiento Local', 
          paragraphs: [
            'SciCalcX no requiere cuentas de usuario ni registro. Todas las operaciones en las calculadoras matemáticas (Científica, Matrices, Cálculo, Gráficas, Estadística y Programador) se procesan 100% de forma local en tu navegador.',
            'Tus fórmulas matemáticas y datos nunca se envían a servidores remotos ni se almacenan en bases de datos externas.'
          ]
        },
        { 
          title: '2. Ejecución Remota de Código', 
          paragraphs: [
            'El Tutor de Código envía scripts de forma cifrada mediante HTTPS a servicios de ejecución en contenedores aislados (Judge0 CE y Wandbox) únicamente para compilar y mostrar resultados de forma efímera.'
          ]
        },
        { 
          title: '3. Almacenamiento Local (localStorage) y Cookies', 
          paragraphs: [
            'El almacenamiento local se utiliza exclusivamente para recordar tu preferencia de tema (claro/oscuro), el historial reciente de cálculos (máximo 50 entradas) y la aceptación del banner de privacidad.',
            'Proveedores externos, incluyendo Google AdSense y Google Analytics, emplean cookies para optimizar la entrega de contenido y mostrar anuncios conforme a las preferencias del usuario.'
          ]
        },
      ],
    },
    editorial: {
      badge: 'Estándares Editoriales',
      heading: 'Integridad Editorial y Rigor Matemático',
      subheading: 'Nuestro compromiso con la precisión de cálculo, verificación de fórmulas y corrección de errores.',
      sections: [
        {
          title: 'Rigor Académico y Verificación',
          paragraphs: [
            'En SciCalcX, la exactitud numérica es prioritaria. Nuestras herramientas y artículos se contrastan continuamente con soluciones simbólicas de referencia y estándares reconocidos.',
            'Cualquier discrepancia numérica o error tipográfico puede ser reportado a support@scicalcx.com para su corrección inmediata.'
          ]
        }
      ]
    }
  },
  ja: {
    about: {
      badge: 'プラットフォーム概要と運営体制',
      heading: 'SciCalcXについて',
      subheading: '数学的計算とインタラクティブなプログラム実行の架け橋となる環境を提供します。',
      missionBadge: '私たちのミッション',
      missionP1: '工学および情報科学を学ぶ学生が直面する「複数の計算ツールや開発環境を行き来する煩わしさ」を解消するためにSciCalcXは開発されました。',
      missionP2: '高精度の数値演算、線形代数、微積分、ビット操作に加え、ブラウザ上で即座に実行できるコード指導ツールを統合。すべて快適に動作します。',
      teamBadge: '開発・執筆陣',
      teamTitle: '開発エンジニアおよび教材執筆チーム',
      standardsBadge: '計算精度と信頼性',
      standardsTitle: '計算精度および学術的検証基準',
      standardsIntro: '学術研究や工学計算において正確性は最優先事項です。以下の厳格な検証基準を徹底しています：',
      standards: [
        { label: 'エプシロン正規化', text: 'IEEE 754浮動小数点誤差を独自補正し、最大12桁まで人間に読みやすい正確な数値を保証します。' },
        { label: '標準解法による継続的検証', text: '行列演算やシンプソン積分は、記号的リファレンス解法との照合テストを定期的に実施しています。' },
        { label: 'ブラウザ内計算のプライバシー保護', text: '数学的計算はすべてお使いのブラウザ内で100%処理されます。コード実行は安全な外部サンドボックスで処理されます。' },
      ],
      architectureBadge: 'ウェブ技術アーキテクチャ',
      architectureTitle: 'モダンウェブ標準による高速アーキテクチャ',
      architectureDesc: '高速動作、アクセシビリティ、完全レスポンシブ対応を実現しています。',
    },
    contact: {
      badge: 'お問い合わせ',
      heading: 'お問い合わせ窓口',
      subheading: 'ご質問、機能のご要望、バグ報告などお気軽にご連絡ください。',
      directTitle: 'ダイレクト連絡先',
      emailLabel: 'サポート窓口',
      repoLabel: 'オープンソース',
      responseLabel: '返答目安',
      responseTime: '24〜48営業時間以内',
      formTitle: 'お問い合わせフォーム',
      nameLabel: 'お名前',
      emailInputLabel: 'メールアドレス',
      subjectLabel: '件名',
      messageLabel: 'メッセージ本文',
      submitBtn: 'サポートチームに送信',
      successNotice: 'メールアプリが起動しました。開かない場合は support@scicalcx.com 宛に直接メールをお送りください。',
    },
    terms: {
      badge: '利用規約',
      heading: '利用規約',
      subheading: '最終更新日：2026年9月14日。SciCalcXの利用条件をご確認ください。',
      sections: [
        { 
          title: '1. 規約への同意', 
          paragraphs: [
            '本サービスの利用を開始することにより、本規約に同意したものとみなされます。同意されない場合は利用をお控えください。'
          ]
        },
        { 
          title: '2. 許可された利用範囲とコード実行', 
          paragraphs: [
            '教育、研究、業務、個人の計算目的でご利用いただけます。悪意のあるスクリプトの投入や過度な負荷をかける行為は禁止します。'
          ]
        },
        { 
          title: '3. 免責事項', 
          paragraphs: [
            '計算結果は現状有姿で提供され、計算結果に起因するいかなる損害についても責任を負いかねます。'
          ]
        }
      ],
    },
    privacy: {
      badge: '法務・プライバシー',
      heading: 'プライバシーポリシー',
      subheading: '最終更新日：2026年9月14日。ユーザーデータの取り扱い方針について。',
      sections: [
        { 
          title: '1. 数式計算の端末内処理', 
          paragraphs: [
            '関数電卓、行列、微積分、グラフ、統計などの計算はすべてお使いのブラウザ上で実行され、数式データが外部サーバーに送信・蓄積されることはありません。'
          ]
        },
        { 
          title: '2. コード実行と外部サンドボックス', 
          paragraphs: [
            'コード学習機能に入力されたソースコードは、コンパイルと実行結果取得のために外部の分離サンドボックス環境（Judge0 / Wandbox）へ暗号化通信（HTTPS）で送信されます。コードが恒久的に保存されることはありません。'
          ]
        },
        { 
          title: '3. 広告配信とCookie', 
          paragraphs: [
            'Google AdSense等の第三者配信事業者がCookieを利用して適切な広告を表示する場合があります。ユーザーは広告設定からパーソナライズ広告を無効化できます。'
          ]
        }
      ],
    },
    editorial: {
      badge: '編集方針と検証基準',
      heading: 'エディトリアル・インテグリティ',
      subheading: '計算精度の学術的担保と数式検証プロセスについて。',
      sections: [
        {
          title: '数式検証とエラー修正',
          paragraphs: [
            'SciCalcXでは、公開するすべての計算アルゴリズムおよび学習教材について厳密な検証を行っています。数値の誤りや改善点は support@scicalcx.com またはGitHubにて随時受け付けています。'
          ]
        }
      ]
    }
  },
  fr: {
    about: {
      badge: 'Profil de la Plateforme',
      heading: 'À Propos de SciCalcX',
      subheading: 'Combler le fossé entre calcul mathématique et programmation interactive.',
      missionBadge: 'Notre Mission',
      missionP1: 'SciCalcX a été créé pour éliminer les allers-retours fastidieux entre calculatrices isolées et environnements de programmation distants.',
      missionP2: 'Notre suite associe calcul scientifique de haute précision, algèbre matricielle, calcul infinitésimal et tuteur de code interactif.',
      teamBadge: 'Équipe d’Ingénierie',
      teamTitle: 'Équipe d’Ingénierie & Édition',
      standardsBadge: 'Précision Numérique',
      standardsTitle: 'Normes de Précision et Rigueur Éditoriale',
      standardsIntro: 'La rigueur est essentielle dans les sciences appliquées :',
      standards: [
        { label: 'Normalisation de Précision', text: 'Suppression des artefacts IEEE 754 pour garantir un affichage exact jusqu’à 12 décimales.' },
        { label: 'Confidentialité Mathématique', text: 'Vos calculs mathématiques s’exécutent localement dans votre navigateur. L’exécution de code est sécurisée dans des bacs à sable distants.' },
      ],
      architectureBadge: 'Architecture Web',
      architectureTitle: 'Architecture Web Moderne et Rapide',
      architectureDesc: 'Conçu avec les derniers standards du Web pour offrir accessibilité et fluidité sans dépendance lourde.',
    },
    contact: {
      badge: 'Communications',
      heading: 'Contactez-Nous',
      subheading: 'Pour toute question, suggestion ou signalement de bug.',
      directTitle: 'Contact Direct',
      emailLabel: 'Courriel Support',
      repoLabel: 'Code Source',
      responseLabel: 'Délai de Réponse',
      responseTime: 'Sous 24 à 48 heures ouvrées',
      formTitle: 'Envoyer un Message',
      nameLabel: 'Votre Nom',
      emailInputLabel: 'Adresse Courriel',
      subjectLabel: 'Objet du Message',
      messageLabel: 'Votre Message',
      submitBtn: 'Envoyer le Message',
      successNotice: 'Votre client de messagerie a été ouvert. En cas de problème, écrivez à support@scicalcx.com.',
    },
    terms: {
      badge: 'Accords Juridiques',
      heading: 'Conditions d’Utilisation',
      subheading: 'Dernière mise à jour : 14 septembre 2026.',
      sections: [
        { 
          title: '1. Acceptation et Utilisation', 
          paragraphs: [
            'L’accès à SciCalcX implique l’acceptation pleine et entière des présentes conditions. Plateforme dédiée aux étudiants, ingénieurs et chercheurs.'
          ]
        }
      ],
    },
    privacy: {
      badge: 'Confidentialité',
      heading: 'Politique de Confidentialité',
      subheading: 'Dernière mise à jour : 14 septembre 2026.',
      sections: [
        { 
          title: '1. Confidentialité Côté Client et Exécution Distante', 
          paragraphs: [
            'Les calculs mathématiques s’exécutent dans votre navigateur sans transfert de formules vers des serveurs distants. Les exécutions de code passent par des conteneurs sécurisés temporaires.'
          ]
        }
      ],
    },
    editorial: {
      badge: 'Normes Éditoriales',
      heading: 'Intégrité Éditoriale et Rigueur',
      subheading: 'Validation mathématique et exactitude des formules.',
      sections: [
        {
          title: 'Validation des Calculs',
          paragraphs: [
            'Nos méthodes numériques sont continuellement testées. Tout signalement d’anomalie peut être transmis à support@scicalcx.com.'
          ]
        }
      ]
    }
  },
  de: {
    about: {
      badge: 'Plattform-Profil & Organisation',
      heading: 'Über SciCalcX',
      subheading: 'Die Brücke zwischen mathematischer Berechnung und interaktiver Softwareentwicklung.',
      missionBadge: 'Unsere Mission',
      missionP1: 'SciCalcX wurde entwickelt, um Studierenden der Ingenieur- und Informatikwissenschaften den ständigen Wechsel zwischen isolierten Rechnern und separaten IDEs zu ersparen.',
      missionP2: 'Unsere Plattform vereint hochpräzise Numerik, Lineare Algebra, Analysis und Bit-Operationen direkt mit einem interaktiven Code-Tutor im Browser.',
      teamBadge: 'Entwicklerteam',
      teamTitle: 'Entwicklungs- und Redaktionsteam',
      standardsBadge: 'Genauigkeitsstandards',
      standardsTitle: 'Berechnungsgenauigkeit & Validierungsstandards',
      standardsIntro: 'Präzision ist in wissenschaftlichen Anwendungen unverzichtbar:',
      standards: [
        { label: 'Präzisions-Normalisierung', text: 'IEEE-754-Artefakte werden algorithmisch bereinigt, um bis zu 12 verlässliche Dezimalstellen zu gewährleisten.' },
        { label: 'Mathematische Privatsphäre im Browser', text: 'Mathematische Berechnungen verbleiben vollständig auf Ihrem Endgerät. Code-Ausführungen erfolgen in isolierten Sandboxes.' },
      ],
      architectureBadge: 'Web-Architektur',
      architectureTitle: 'Moderne Web-Architektur',
      architectureDesc: 'Entwickelt für maximale Performance, Null-Abhängigkeiten und intuitive mobile Bedienbarkeit.',
    },
    contact: {
      badge: 'Kommunikation',
      heading: 'Kontaktieren Sie uns',
      subheading: 'Kontaktieren Sie unser Support- und Entwicklungsteam bei Fragen oder Feedback.',
      directTitle: 'Direktkontakt',
      emailLabel: 'Support-E-Mail',
      repoLabel: 'Open-Source',
      responseLabel: 'Antwortzeit',
      responseTime: 'Innerhalb von 24–48 Werktagsstunden',
      formTitle: 'Anfrage senden',
      nameLabel: 'Ihr Name',
      emailInputLabel: 'E-Mail-Adresse',
      subjectLabel: 'Betreff',
      messageLabel: 'Ihre Nachricht',
      submitBtn: 'Anfrage absenden',
      successNotice: 'E-Mail-Programm geöffnet! Falls es nicht automatisch startet, schreiben Sie an support@scicalcx.com.',
    },
    terms: {
      badge: 'Rechtliches',
      heading: 'Nutzungsbedingungen',
      subheading: 'Stand: 14. September 2026.',
      sections: [
        { 
          title: '1. Geltungsbereich und Nutzung', 
          paragraphs: [
            'Mit der Nutzung von SciCalcX erklären Sie sich mit diesen Bedingungen einverstanden. Die Rechner dienen akademischen und professionellen Zwecken.'
          ]
        }
      ],
    },
    privacy: {
      badge: 'Datenschutz',
      heading: 'Datenschutzerklärung',
      subheading: 'Stand: 14. September 2026.',
      sections: [
        { 
          title: '1. Lokale Datenverarbeitung & Code-Ausführung', 
          paragraphs: [
            'Alle mathematischen Berechnungen laufen clientseitig im Browser ohne Serverübertragung. Der Code-Tutor überträgt Skripte verschlüsselt an externe Sandboxes ausschließlich zur Laufzeitausführung.'
          ]
        }
      ],
    },
    editorial: {
      badge: 'Redaktionsstandards',
      heading: 'Redaktionelle Integrität & Genauigkeit',
      subheading: 'Wissenschaftliche Validierung und Fehlerkorrektur.',
      sections: [
        {
          title: 'Validierungsstandards',
          paragraphs: [
            'Sämtliche Berechnungen werden regelmäßig gegen symbolische Referenzen geprüft. Feedback senden Sie an support@scicalcx.com.'
          ]
        }
      ]
    }
  },
  pt: {
    about: {
      badge: 'Perfil da Plataforma',
      heading: 'Sobre o SciCalcX',
      subheading: 'Unindo o cálculo matemático à programação interativa.',
      missionBadge: 'Nossa Missão',
      missionP1: 'O SciCalcX nasceu para eliminar a perda de tempo entre calculadoras matemáticas desconectadas e ambientes de programação remotos.',
      missionP2: 'Reunimos computação científica de alta precisão, matrizes, cálculo e operações de bits junto a um tutor de código interativo.',
      teamBadge: 'Equipe de Desenvolvimento',
      teamTitle: 'Equipe de Engenharia e Conteúdo',
      standardsBadge: 'Padrões de Precisão',
      standardsTitle: 'Precisão de Cálculo e Rigor Editorial',
      standardsIntro: 'A exatidão é primordial em estudos científicos e de engenharia:',
      standards: [
        { label: 'Normalização Decimal', text: 'Correção de imprecisões binárias IEEE 754 garantindo até 12 casas decimais exatas.' },
        { label: 'Privacidade no Navegador', text: 'Cálculos matemáticos rodam 100% no seu navegador. Execuções de código ocorrem em sandboxes seguras.' },
      ],
      architectureBadge: 'Arquitetura Web',
      architectureTitle: 'Arquitetura Web de Alta Velocidade',
      architectureDesc: 'Desenvolvido para garantir máxima acessibilidade e zero dependências pesadas.',
    },
    contact: {
      badge: 'Comunicação',
      heading: 'Fale Conosco',
      subheading: 'Entre em contato com a equipe de suporte para dúvidas ou sugestões.',
      directTitle: 'Contato Direto',
      emailLabel: 'E-mail de Suporte',
      repoLabel: 'Código Aberto',
      responseLabel: 'Tempo de Resposta',
      responseTime: 'Em até 24 a 48 horas úteis',
      formTitle: 'Enviar Mensagem',
      nameLabel: 'Seu Nome',
      emailInputLabel: 'Seu E-mail',
      subjectLabel: 'Assunto',
      messageLabel: 'Mensagem',
      submitBtn: 'Enviar Mensagem',
      successNotice: 'Cliente de e-mail iniciado! Caso não abra, envie diretamente para support@scicalcx.com.',
    },
    terms: {
      badge: 'Termos Legais',
      heading: 'Termos de Serviço',
      subheading: 'Última atualização: 14 de setembro de 2026.',
      sections: [
        { 
          title: '1. Aceitação dos Termos', 
          paragraphs: [
            'Ao utilizar o SciCalcX, você concorda com estes termos de serviço voltados a fins educacionais e profissionais.'
          ]
        }
      ],
    },
    privacy: {
      badge: 'Privacidade',
      heading: 'Política de Privacidade',
      subheading: 'Última atualização: 14 de setembro de 2026.',
      sections: [
        { 
          title: '1. Processamento Local e Execução Remota', 
          paragraphs: [
            'Suas fórmulas matemáticas rodam diretamente no navegador. O editor de código transmite scripts para sandboxes externas estritamente para compilação.'
          ]
        }
      ],
    },
    editorial: {
      badge: 'Padrões Editoriais',
      heading: 'Integridade Editorial e Padrões',
      subheading: 'Rigor matemático e auditoria de fórmulas.',
      sections: [
        {
          title: 'Validação Científica',
          paragraphs: [
            'Testamos nossos algoritmos contra conjuntos de referência. Reporte correções para support@scicalcx.com.'
          ]
        }
      ]
    }
  },
  ko: {
    about: {
      badge: '플랫폼 프로필 및 운영 가이드',
      heading: 'SciCalcX 소개',
      subheading: '수학적 계산과 대화형 소프트웨어 컴파일의 경계를 허뭅니다.',
      missionBadge: '우리의 사명',
      missionP1: 'SciCalcX는 공학도들이 계산기, 통계 소프트웨어, 프로그래밍 IDE를 번갈아 오가며 겪는 비효율을 해결하기 위해 개발되었습니다.',
      missionP2: '고정밀 수치 연산, 선형대수학, 미적분, 비트 연산과 함께 대화형 코드 튜터를 브라우저 내에서 즉각 실행할 수 있습니다.',
      teamBadge: '개발 및 감수팀',
      teamTitle: '엔지니어링 및 교육 콘텐츠 팀',
      standardsBadge: '연산 정밀도 기준',
      standardsTitle: '계산 정밀도 및 검증 표준',
      standardsIntro: '학술 연구와 공학 연산에서 정밀도는 무엇보다 중요합니다:',
      standards: [
        { label: '입실론 임계값 정규화', text: 'IEEE 754 부동소수점 오차를 보정하여 최대 12자리까지 정확한 소수 표기를 보장합니다.' },
        { label: '수학 연산 브라우저 로컬 프라이버시', text: '수학 계산은 브라우저 로컬에서 100% 처리되며, 코드 실행은 외부 보안 샌드박스를 통해 실행됩니다.' },
      ],
      architectureBadge: '웹 아키텍처',
      architectureTitle: '고성능 웹 아키텍처',
      architectureDesc: '빠른 반응 속도, 제로 의존성, 완벽한 모바일 접근성을 제공합니다.',
    },
    contact: {
      badge: '커뮤니케이션',
      heading: '문의하기',
      subheading: '질문, 피드백 또는 오류 제보가 있으시면 언제든지 문의해 주세요.',
      directTitle: '직접 연락',
      emailLabel: '지원 이메일',
      repoLabel: '오픈소스',
      responseLabel: '응답 시간',
      responseTime: '영업일 기준 24~48시간 이내',
      formTitle: '문의 제출',
      nameLabel: '이름',
      emailInputLabel: '이메일 주소',
      subjectLabel: '문의 제목',
      messageLabel: '문의 내용',
      submitBtn: '문의 보내기',
      successNotice: '이메일 프로그램이 실행되었습니다. 열리지 않는 경우 support@scicalcx.com 으로 직접 보내주세요.',
    },
    terms: {
      badge: '이용 약관',
      heading: '서비스 이용약관',
      subheading: '최종 업데이트: 2026년 9월 14일.',
      sections: [
        { 
          title: '1. 약관의 동의 및 사용 규칙', 
          paragraphs: [
            'SciCalcX 서비스를 이용함으로써 본 이용약관에 동의하는 것으로 간주됩니다. 교육 및 전문 연구 목적으로 제공됩니다.'
          ]
        }
      ],
    },
    privacy: {
      badge: '개인정보 처리방침',
      heading: '개인정보 처리방침',
      subheading: '최종 업데이트: 2026년 9월 14일.',
      sections: [
        { 
          title: '1. 로컬 연산 및 코드 실행 프라이버시', 
          paragraphs: [
            '수학 공식 계산은 브라우저 내에서 100% 로컬로 처리됩니다. 코드 튜터 기능의 소스 코드는 실행 결과를 얻기 위해 외부 격리 샌드박스로 안전하게 전송되어 임시 실행됩니다.'
          ]
        }
      ],
    },
    editorial: {
      badge: '편집 및 검증 기준',
      heading: '편집 투명성 및 학술 검증',
      subheading: '수식 검증 프로세스와 오류 수정 정책.',
      sections: [
        {
          title: '수학 알고리즘 검증',
          paragraphs: [
            '모든 계산기는 표준 수학 벤치마크 데이터를 통해 검증됩니다. 오류 발견 시 support@scicalcx.com 으로 제보해 주시기 바랍니다.'
          ]
        }
      ]
    }
  },
  it: {
    about: {
      badge: 'Profilo della Piattaforma',
      heading: 'Chi Siamo',
      subheading: 'Unire il calcolo matematico rigoroso e la programmazione interattiva.',
      missionBadge: 'La Nostra Missione',
      missionP1: 'SciCalcX è stato creato per risolvere la frammentazione tra calcolatrici matematiche, strumenti statistici e ambienti di codice separati.',
      missionP2: 'La nostra piattaforma integra calcolo numerico ad alta precisione, algebra lineare, analisi e manipolazione bit a bit direttamente con un tutor di codice nel browser.',
      teamBadge: 'Team di Ingegneria',
      teamTitle: 'Team di Ingegneria e Contenuti',
      standardsBadge: 'Standard di Accuratezza',
      standardsTitle: 'Accuratezza di Calcolo e Standard Editoriali',
      standardsIntro: 'La precisione è fondamentale nel calcolo ingegneristico e scientifico:',
      standards: [
        { label: 'Normalizzazione di Precisione', text: 'Eliminazione degli errori binari IEEE 754 per garantire risultati esatti fino a 12 decimali.' },
        { label: 'Privacy nel Browser', text: 'I calcoli matematici rimangono al 100% nel tuo dispositivo. Il codice viene eseguito in sandbox remote isolate.' },
      ],
      architectureBadge: 'Architettura Web',
      architectureTitle: 'Architettura Web Moderna e Rapida',
      architectureDesc: 'Progettato con i più recenti standard web per massima reattività e accessibilità su ogni dispositivo.',
    },
    contact: {
      badge: 'Comunicazioni',
      heading: 'Contattaci',
      subheading: 'Contatta il nostro team per chiarimenti, suggerimenti o segnalazioni di bug.',
      directTitle: 'Contatto Diretto',
      emailLabel: 'Email Supporto',
      repoLabel: 'Open-Source',
      responseLabel: 'Tempo di Risposta',
      responseTime: 'Entro 24-48 ore lavorative',
      formTitle: 'Invia Messaggio',
      nameLabel: 'Tuo Nome',
      emailInputLabel: 'Indirizzo Email',
      subjectLabel: 'Oggetto',
      messageLabel: 'Messaggio',
      submitBtn: 'Invia Messaggio al Supporto',
      successNotice: 'Client di posta avviato! Se non si apre automaticamente, scrivi a support@scicalcx.com.',
    },
    terms: {
      badge: 'Note Legali',
      heading: 'Termini e Condizioni',
      subheading: 'Ultimo aggiornamento: 14 settembre 2026.',
      sections: [
        { 
          title: '1. Accettazione dei Termini', 
          paragraphs: [
            'L\'accesso a SciCalcX comporta l\'accettazione integrale dei presenti Termini e Condizioni.'
          ]
        }
      ],
    },
    privacy: {
      badge: 'Privacy e Dati',
      heading: 'Informativa sulla Privacy',
      subheading: 'Ultimo aggiornamento: 14 settembre 2026.',
      sections: [
        { 
          title: '1. Elaborazione Locale ed Esecuzione Codice', 
          paragraphs: [
            'Tutti i calcoli matematici avvengono localmente nel browser. Il codice viene trasmesso a sandbox sicure unicamente per l\'esecuzione immediata.'
          ]
        }
      ],
    },
    editorial: {
      badge: 'Integrità Editoriale',
      heading: 'Standard Editoriali e Rigore Scientifico',
      subheading: 'Verifica delle formule e correzione trasparente degli errori.',
      sections: [
        {
          title: 'Verifica Algoritmica',
          paragraphs: [
            'I nostri strumenti sono validati con soluzioni di riferimento matematiche. Segnalazioni a support@scicalcx.com.'
          ]
        }
      ]
    }
  },
  nl: {
    about: {
      badge: 'Platformprofiel & Organisatie',
      heading: 'Over SciCalcX',
      subheading: 'De verbinding tussen geavanceerde wiskunde en interactieve software-engineering.',
      missionBadge: 'Onze Missie',
      missionP1: 'SciCalcX is opgericht om studenten techniek en informatica een naadloos platform te bieden zonder te hoeven schakelen tussen verschillende rekenmachines en IDE\'s.',
      missionP2: 'Ons platform combineert numerieke precisie, lineaire algebra, calculus en bitsgewijze logica direct met een interactieve codetutor in de browser.',
      teamBadge: 'Ontwikkelingsteam',
      teamTitle: 'Ontwikkelings- en Redactieteam',
      standardsBadge: 'Precisienormen',
      standardsTitle: 'Rekenprecisie & Validatiestandaarden',
      standardsIntro: 'Precisie is essentieel voor wetenschappelijke en technische toepassingen:',
      standards: [
        { label: 'Precisie Normalisatie', text: 'IEEE-754 afrondingsfouten worden algoritmisch gecorrigeerd voor tot 12 betrouwbare decimalen.' },
        { label: 'Wiskundige Privacy in de Browser', text: 'Wiskundige berekeningen worden 100% lokaal verwerkt. Code-uitvoeringen draaien in veilige externe sandboxes.' },
      ],
      architectureBadge: 'Webarchitectuur',
      architectureTitle: 'Moderne Webarchitectuur',
      architectureDesc: 'Gebouwd voor maximale snelheid, responsiviteit en nul afhankelijkheden op mobiel en desktop.',
    },
    contact: {
      badge: 'Communicatie',
      heading: 'Contact & Ondersteuning',
      subheading: 'Neem contact op met ons team voor vragen, bugrapporten of suggesties.',
      directTitle: 'Direct Contact',
      emailLabel: 'Ondersteunings-e-mail',
      repoLabel: 'Open-Source Opslagplaats',
      responseLabel: 'Reactietijd',
      responseTime: 'Binnen 24-48 werkuren',
      formTitle: 'Stuur een Bericht',
      nameLabel: 'Uw Naam',
      emailInputLabel: 'E-mailadres',
      subjectLabel: 'Onderwerp',
      messageLabel: 'Uw Bericht',
      submitBtn: 'Bericht Verzenden',
      successNotice: 'Uw e-mailclient is geopend! U kunt ook direct mailen naar support@scicalcx.com.',
    },
    terms: {
      badge: 'Juridisch',
      heading: 'Algemene Voorwaarden',
      subheading: 'Laatst bijgewerkt: 14 september 2026.',
      sections: [
        { 
          title: '1. Aanvaarding van Voorwaarden', 
          paragraphs: [
            'Door SciCalcX te bezoeken stemt u in met deze algemene voorwaarden voor educatieve en professionele doeleinden.'
          ]
        }
      ],
    },
    privacy: {
      badge: 'Privacy & Gegevens',
      heading: 'Privacybeleid',
      subheading: 'Laatst bijgewerkt: 14 september 2026.',
      sections: [
        { 
          title: '1. Lokale Verwerking en Code Sandbox', 
          paragraphs: [
            'Wiskundige berekeningen worden volledig in uw eigen browser uitgevoerd. Code wordt gecodeerd verzonden naar geïsoleerde containers enkel voor runtime-uitvoering.'
          ]
        }
      ],
    },
    editorial: {
      badge: 'Redactionele Normen',
      heading: 'Redactionele Integriteit & Validatie',
      subheading: 'Formulevalidatie en transparante correcties.',
      sections: [
        {
          title: 'Wiskundige Verificatie',
          paragraphs: [
            'Onze methoden worden continu getest tegen referentieoplossingen. Fouten kunnen worden gemeld via support@scicalcx.com.'
          ]
        }
      ]
    }
  },
};

export function getInfoContent(page: keyof InfoPageContent, lang: SupportedLanguage = 'en') {
  const content = infoPages[lang] || infoPages.en;
  return content[page] || infoPages.en[page];
}
