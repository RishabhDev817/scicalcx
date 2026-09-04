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
    sections: { title: string; body: string }[];
  };
  privacy: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; body: string }[];
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
      missionP2: 'Our platform integrates high-precision numeric evaluation, linear algebra, calculus, and bitwise manipulation directly alongside an interactive AI coding tutor and compiler. Whether verifying matrix determinants for computer graphics or computing sample variance, SciCalcX delivers zero-latency results directly in your web browser.',
      teamBadge: 'Engineering & Editorial Team',
      teamTitle: 'Engineering & Editorial Team',
      standardsBadge: 'Accuracy & Standards',
      standardsTitle: 'Calculation Accuracy & Editorial Standards',
      standardsIntro: 'Accuracy is paramount in academic and scientific computing. We adhere to rigorous computational validation standards:',
      standards: [
        { label: 'Precision Normalization', text: 'IEEE 754 precision artifacts are eliminated via custom decimal-normalization algorithms to guarantee human-readable representations up to 12 decimal places.' },
        { label: 'Standardized Verification', text: 'Matrix transformations and Simpson\'s numerical quadrature are tested against symbolic reference solutions and linear algebra benchmark datasets.' },
        { label: 'Client-Side Privacy', text: 'Your formulas, datasets, and code scripts never leave your device. All computations execute 100% locally in your web browser.' },
      ],
      architectureBadge: 'Web Architecture',
      architectureTitle: 'Premium Web Architecture',
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
      subheading: 'Last Updated: June 11, 2026. Review rules for using SciCalcX online services.',
      sections: [
        { title: '1. Acceptance of Terms', body: 'By accessing or using SciCalcX (the "Service"), you agree to be bound by these Terms & Conditions. If you do not agree to all terms, you must cease using the Service immediately.' },
        { title: '2. Permitted Usage', body: 'SciCalcX is provided for educational, professional, and personal computation use. You agree not to misuse the site by uploading malicious scripts or scripting automated traffic flows.' },
        { title: '3. Intellectual Property', body: 'All codebase structures, UI styles, parsing logic algorithms, and brand images are the intellectual property of SciCalcX.' },
        { title: '4. Accuracy Disclaimer', body: 'While we implement precision rounding methods, calculations are provided "as-is", and we accept no liability for computational losses arising from calculated results.' },
      ],
    },
    privacy: {
      badge: 'Legal & Compliance',
      heading: 'Privacy Policy',
      subheading: 'Last Updated: July 22, 2026. Learn how we respect your computational privacy and handle data.',
      sections: [
        { title: '1. Introduction', body: 'We respect your privacy and are committed to protecting any personal information you may share with us when using our suite of calculators.' },
        { title: '2. Client-Side Computational Privacy', body: 'All computations, token parsing, and code executions run directly in your local browser engine. We never transmit or store your formulas, data arrays, or code on our servers.' },
        { title: '3. Local Storage Usage', body: 'Browser localStorage is utilized solely to store your dark/light theme preference, memory registers, and recent calculation history locally on your device.' },
        { title: '4. Google AdSense & Cookies', body: 'Third-party vendors, including Google, use cookies to serve ads based on visits. You can opt out of personalized advertising via Google Ads Settings.' },
      ],
    },
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
        { label: 'Privacidad del Lado del Cliente', text: 'Tus fórmulas, matrices y algoritmos nunca salen de tu dispositivo. Todo se ejecuta de forma 100% local en tu navegador.' },
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
      subheading: 'Última actualización: 11 de junio de 2026. Reglas para usar los servicios de SciCalcX.',
      sections: [
        { title: '1. Aceptación de Términos', body: 'Al acceder o utilizar SciCalcX, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo, debes cesar el uso de inmediato.' },
        { title: '2. Uso Permitido', body: 'SciCalcX se ofrece para fines educativos, profesionales y personales. Aceptas no subir scripts maliciosos ni sobrecargar los servidores con tráfico automatizado.' },
        { title: '3. Propiedad Intelectual', body: 'Todo el código base, estilos de interfaz, algoritmos de análisis y marca son propiedad intelectual de SciCalcX.' },
        { title: '4. Descargo de Responsabilidad', body: 'Las operaciones se suministran "tal cual". SciCalcX no asume responsabilidad por pérdidas derivadas de los resultados calculados.' },
      ],
    },
    privacy: {
      badge: 'Legal y Cumplimiento',
      heading: 'Política de Privacidad',
      subheading: 'Última actualización: 22 de julio de 2026. Conoce cómo protegemos tu privacidad computacional.',
      sections: [
        { title: '1. Introducción', body: 'Respetamos tu privacidad y estamos comprometidos con la protección de cualquier información al interactuar con nuestras herramientas.' },
        { title: '2. Privacidad del Lado del Cliente', body: 'Todas las operaciones matemáticas y ejecuciones de código corren en tu navegador. No recopilamos ni almacenamos tus fórmulas en servidores.' },
        { title: '3. Uso de Almacenamiento Local (LocalStorage)', body: 'Se utiliza exclusivamente para recordar tu preferencia de tema claro/oscuro y el historial reciente en tu propio dispositivo.' },
        { title: '4. Google AdSense y Cookies', body: 'Proveedores externos como Google emplean cookies para mostrar anuncios relevantes según las visitas previas.' },
      ],
    },
  },
  ja: {
    about: {
      badge: 'プラットフォーム概要と運営体制',
      heading: 'SciCalcXについて',
      subheading: '数学的計算とインタラクティブなプログラム実行の架け橋となる環境を提供します。',
      missionBadge: '私たちのミッション',
      missionP1: '工学および情報科学を学ぶ学生が直面する「複数の計算ツールや開発環境を行き来する煩わしさ」を解消するためにSciCalcXは開発されました。',
      missionP2: '高精度の数値演算、線形代数、微積分、ビット操作に加え、ブラウザ上で即座に実行できるAIコード指導ツールを統合。すべての処理はブラウザ内で遅延なく完結します。',
      teamBadge: '開発・執筆陣',
      teamTitle: '開発エンジニアおよび教材執筆チーム',
      standardsBadge: '計算精度と信頼性',
      standardsTitle: '計算精度および学術的検証基準',
      standardsIntro: '学術研究や工学計算において正確性は最優先事項です。以下の厳格な検証基準を徹底しています：',
      standards: [
        { label: 'エプシロン正規化', text: 'IEEE 754浮動小数点誤差を独自補正し、最大12桁まで人間に読みやすい正確な数値を保証します。' },
        { label: '標準解法による継続的検証', text: '行列演算やシンプソン積分は、記号的リファレンス解法との照合テストを定期的に実施しています。' },
        { label: 'クライアントサイドのプライバシー保護', text: '数式、データセット、プログラムコードが外部サーバーに送信されることは一切ありません。' },
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
      subheading: '最終更新日：2026年6月11日。SciCalcXの利用条件をご確認ください。',
      sections: [
        { title: '1. 規約への同意', body: '本サービスの利用を開始することにより、本規約に同意したものとみなされます。同意されない場合は利用をお控えください。' },
        { title: '2. 許可された利用範囲', body: '教育、研究、業務、個人の計算目的でご利用いただけます。不正なスクリプトの投入や過度な負荷をかける行為は禁止します。' },
        { title: '3. 知的財産権', body: 'コード構造、デザイン、アルゴリズム等はSciCalcXの知的財産です。' },
        { title: '4. 免責事項', body: '計算結果は現状有姿で提供され、計算結果に起因するいかなる損害についても責任を負いかねます。' },
      ],
    },
    privacy: {
      badge: '法務・プライバシー',
      heading: 'プライバシーポリシー',
      subheading: '最終更新日：2026年7月22日。ユーザーデータの取り扱い方針について。',
      sections: [
        { title: '1. 基本方針', body: 'SciCalcXはユーザーのプライバシーを尊重し、個人情報の保護に努めます。' },
        { title: '2. 完全な端末内処理', body: 'すべての計算やコード実行はお使いのブラウザ上で実行され、数式データがサーバーに送信・蓄積されることはありません。' },
        { title: '3. ローカルストレージ（localStorage）の利用', body: 'テーマ設定や履歴表示の保存のために端末内のローカルストレージのみを使用します。' },
        { title: '4. 広告配信とCookie', body: 'Google AdSense等の第三者配信事業者がCookieを利用して適切な広告を表示する場合があります。' },
      ],
    },
  },
  fr: {
    about: {
      badge: 'Profil de la Plateforme',
      heading: 'À Propos de SciCalcX',
      subheading: 'Combler le fossé entre calcul mathématique et programmation interactive.',
      missionBadge: 'Notre Mission',
      missionP1: 'SciCalcX a été créé pour éliminer les allers-retours fastidieux entre calculatrices isolées et environnements de programmation distants.',
      missionP2: 'Notre suite associe calcul scientifique de haute précision, algèbre matricielle, calcul infinitésimal et tuteur de code interactif avec exécution instantanée dans votre navigateur.',
      teamBadge: 'Équipe d’Ingénierie',
      teamTitle: 'Équipe d’Ingénierie & Édition',
      standardsBadge: 'Précision Numérique',
      standardsTitle: 'Normes de Précision et Rigueur Éditoriale',
      standardsIntro: 'La rigueur est essentielle dans les sciences appliquées :',
      standards: [
        { label: 'Normalisation de Précision', text: 'Suppression des artefacts IEEE 754 pour garantir un affichage exact jusqu’à 12 décimales.' },
        { label: 'Confidentialité Totale', text: 'Vos calculs et codes ne quittent jamais votre machine.' },
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
      subheading: 'Dernière mise à jour : 11 juin 2026.',
      sections: [
        { title: '1. Acceptation', body: 'L’accès à SciCalcX implique l’acceptation pleine et entière des présentes conditions.' },
        { title: '2. Usage Autorisé', body: 'Plateforme dédiée aux étudiants, ingénieurs et chercheurs.' },
      ],
    },
    privacy: {
      badge: 'Confidentialité',
      heading: 'Politique de Confidentialité',
      subheading: 'Dernière mise à jour : 22 juillet 2026.',
      sections: [
        { title: '1. Confidentialité Côté Client', body: 'Toutes les opérations s’exécutent dans votre navigateur sans transfert vers des serveurs distants.' },
      ],
    },
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
        { label: 'Lokale Ausführung', text: 'Sämtliche Formeln und Codeskripte verbleiben vollständig auf Ihrem Endgerät.' },
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
      subheading: 'Stand: 11. Juni 2026.',
      sections: [
        { title: '1. Geltungsbereich', body: 'Mit der Nutzung von SciCalcX erklären Sie sich mit diesen Bedingungen einverstanden.' },
      ],
    },
    privacy: {
      badge: 'Datenschutz',
      heading: 'Datenschutzerklärung',
      subheading: 'Stand: 22. Juli 2026.',
      sections: [
        { title: '1. Lokale Datenverarbeitung', body: 'Alle Berechnungen laufen clientseitig im Browser. Wir speichern keine Formeln auf unseren Servern.' },
      ],
    },
  },
  pt: {
    about: {
      badge: 'Perfil da Plataforma',
      heading: 'Sobre o SciCalcX',
      subheading: 'Unindo o cálculo matemático à programação interativa.',
      missionBadge: 'Nossa Missão',
      missionP1: 'O SciCalcX nasceu para eliminar a perda de tempo entre calculadoras matemáticas desconectadas e ambientes de programação remotos.',
      missionP2: 'Reunimos computação científica de alta precisão, matrizes, cálculo e operações de bits junto a um tutor de código interativo com execução instantânea no navegador.',
      teamBadge: 'Equipe de Desenvolvimento',
      teamTitle: 'Equipe de Engenharia e Conteúdo',
      standardsBadge: 'Padrões de Precisão',
      standardsTitle: 'Precisão de Cálculo e Rigor Editorial',
      standardsIntro: 'A exatidão é primordial em estudos científicos e de engenharia:',
      standards: [
        { label: 'Normalização Decimal', text: 'Correção de imprecisões binárias IEEE 754 garantindo até 12 casas decimais exatas.' },
        { label: 'Privacidade no Navegador', text: 'Suas fórmulas e códigos nunca saem do seu computador ou celular.' },
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
      subheading: 'Última atualização: 11 de junho de 2026.',
      sections: [
        { title: '1. Aceitação dos Termos', body: 'Ao utilizar o SciCalcX, você concorda com estes termos de serviço.' },
      ],
    },
    privacy: {
      badge: 'Privacidade',
      heading: 'Política de Privacidade',
      subheading: 'Última atualização: 22 de julho de 2026.',
      sections: [
        { title: '1. Processamento Local', body: 'Todas as operações são executadas diretamente no seu navegador, sem armazenamento externo de fórmulas.' },
      ],
    },
  },
  ko: {
    about: {
      badge: '플랫폼 프로필 및 운영 가이드',
      heading: 'SciCalcX 소개',
      subheading: '수학적 계산과 대화형 소프트웨어 컴파일의 경계를 허뭅니다.',
      missionBadge: '우리의 사명',
      missionP1: 'SciCalcX는 공학도들이 계산기, 통계 소프트웨어, 프로그래밍 IDE를 번갈아 오가며 겪는 비효율을 해결하기 위해 개발되었습니다.',
      missionP2: '고정밀 수치 연산, 선형대수학, 미적분, 비트 연산과 함께 대화형 AI 코드 튜터를 브라우저 내에서 즉각 실행할 수 있습니다.',
      teamBadge: '개발 및 감수팀',
      teamTitle: '엔지니어링 및 교육 콘텐츠 팀',
      standardsBadge: '연산 정밀도 기준',
      standardsTitle: '계산 정밀도 및 검증 표준',
      standardsIntro: '학술 연구와 공학 연산에서 정밀도는 무엇보다 중요합니다:',
      standards: [
        { label: '입실론 임계값 정규화', text: 'IEEE 754 부동소수점 오차를 보정하여 최대 12자리까지 정확한 소수 표기를 보장합니다.' },
        { label: '클라이언트 사이드 프라이버시', text: '사용자가 입력한 수식과 코드는 외부 서버로 전송되지 않고 브라우저 내에서만 안전하게 실행됩니다.' },
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
      subheading: '최종 업데이트: 2026년 6월 11일.',
      sections: [
        { title: '1. 약관의 동의', body: 'SciCalcX 서비스를 이용함으로써 본 이용약관에 동의하는 것으로 간주됩니다.' },
      ],
    },
    privacy: {
      badge: '개인정보 처리방침',
      heading: '개인정보 처리방침',
      subheading: '최종 업데이트: 2026년 7월 22일.',
      sections: [
        { title: '1. 로컬 연산 프라이버시', body: '모든 계산 및 코드 실행은 사용자의 웹 브라우저 로컬 환경에서만 동작합니다.' },
      ],
    },
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
        { label: 'Privacy nel Browser', text: 'Formule e script rimangono al 100% all\'interno del tuo dispositivo.' },
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
      subheading: 'Ultimo aggiornamento: 11 giugno 2026.',
      sections: [
        { title: '1. Accettazione dei Termini', body: 'L\'accesso a SciCalcX comporta l\'accettazione integrale dei presenti Termini e Condizioni.' },
      ],
    },
    privacy: {
      badge: 'Privacy e Dati',
      heading: 'Informativa sulla Privacy',
      subheading: 'Ultimo aggiornamento: 22 luglio 2026.',
      sections: [
        { title: '1. Elaborazione sul Dispositivo', body: 'Tutti i calcoli e le esecuzioni di codice avvengono all\'interno del browser web dell\'utente.' },
      ],
    },
  },
  nl: {
    about: {
      badge: 'Platformprofiel & Organisatie',
      heading: 'Over SciCalcX',
      subheading: 'De verbinding tussen geavanceerde wiskunde en interactieve software-engineering.',
      missionBadge: 'Onze Missie',
      missionP1: 'SciCalcX is opgericht om studenten techniek en informatica een naadloos platform te bieden zonder te hoeven schakelen tussen verschillende rekenmachines en IDE\'s.',
      missionP2: 'Ons platform combineert numerieke precisie, lineaire algebra, calculus en bitsgewijze logica direct met een interactieve AI-codetutor in de browser.',
      teamBadge: 'Ontwikkelingsteam',
      teamTitle: 'Ontwikkelings- en Redactieteam',
      standardsBadge: 'Precisienormen',
      standardsTitle: 'Rekenprecisie & Validatiestandaarden',
      standardsIntro: 'Precisie is essentieel voor wetenschappelijke en technische toepassingen:',
      standards: [
        { label: 'Precisie Normalisatie', text: 'IEEE-754 afrondingsfouten worden algoritmisch gecorrigeerd voor tot 12 betrouwbare decimalen.' },
        { label: 'Lokale Uitvoering', text: 'Alle berekeningen en formules worden lokaal in uw browser verwerkt zonder serververtraging.' },
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
      subheading: 'Laatst bijgewerkt: 11 juni 2026.',
      sections: [
        { title: '1. Aanvaarding van Voorwaarden', body: 'Door SciCalcX te bezoeken stemt u in met deze algemene voorwaarden.' },
        { title: '2. Toegestaan Gebruik', body: 'Ontworpen voor studenten, docenten en ingenieurs voor onderwijs- en onderzoeksdoeleinden.' },
      ],
    },
    privacy: {
      badge: 'Privacy & Gegevens',
      heading: 'Privacybeleid',
      subheading: 'Laatst bijgewerkt: 22 juli 2026.',
      sections: [
        { title: '1. Lokale Verwerking in de Browser', body: 'Alle berekeningen worden volledig in uw eigen browser uitgevoerd zonder persoonlijke gegevens op te slaan.' },
      ],
    },
  },
};

export function getInfoContent(page: keyof InfoPageContent, lang: SupportedLanguage = 'en') {
  const content = infoPages[lang] || infoPages.en;
  return content[page] || infoPages.en[page];
}
