import type { InfoPageContent } from '../infoPages';

export const enInfo: InfoPageContent = {
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
      { label: 'Precision Normalization', text: 'SciCalcX applies epsilon-based normalization to reduce common floating-point representation artifacts in displayed results up to 12 decimal places.' },
      { label: 'Standardized Verification', text: 'Matrix transformations and Simpson\'s numerical quadrature are tested against known reference solutions and linear algebra test cases.' },
      { label: 'Architectural Separation', text: 'SciCalcX\'s mathematical tools perform their calculations locally in the browser where supported, allowing formula inputs and mathematical processing to remain on the user\'s device. The Code Tutor is separate from the mathematical engines: when a user clicks Run Code, the submitted program is securely transmitted over HTTPS to an isolated external execution service (primary: Judge0 CE at ce.judge0.com, fallback: Wandbox at wandbox.org) without permanent server storage.' },
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
          'The core mathematical tools on SciCalcX—including the Scientific Calculator, Matrix Calculator, Calculus Calculator, Graphing Calculator, Statistics Calculator, and Programmer Bitboard—perform their calculations locally in the browser where supported.',
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
          '• Theme Preference (theme): Storing your selection of "dark" or "light" mode so the interface remains consistent between visits.',
          '• Calculation History (scicalcx_history): Storing your recent calculation results (capped at the most recent 50 entries) in a local stack. You can clear this history anytime using the "[ Clear All ]" button in the history sidebar.',
          '• Cookie Notice Acknowledgment (scicalcx_cookie_consent): Remembering when you have dismissed or accepted our cookie and privacy notice banner.',
          '• Calculator Memory Register (scicalcx_memory): Retaining the active numeric value stored in the scientific calculator\'s memory register (M+ / M- / MR).',
          '• Code Tutor Drafts & Progress (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs): Saving your in-progress code and lesson completion status locally so your work is not lost on page reload.',
          '• Assignment Export Inputs (scicalcx_student_name, scicalcx_student_roll): Caching optional student name and roll number inputs locally on your device to pre-populate the assignment report generator. This information is processed strictly within browser memory to render a downloadable PNG and is never transmitted to our servers or any third-party API.',
          'All localStorage keys remain solely on your local device and can be cleared at any time through your browser\'s storage settings or via our interface controls.'
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
          'Any computational models or assistive coding tools used internally undergo review by the SciCalcX development team. No code or article is published without human verification of mathematical accuracy, grammatical clarity, and practical utility.',
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
};
