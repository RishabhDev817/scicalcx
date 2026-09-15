import type { SupportedLanguage } from '../ui';

export interface CompilerPageLocalizedContent {
  architectureBadge: string;
  architectureHeading: string;
  architectureSubheading: string;
  architectureP1: string;
  architectureP2: string;
  sandboxTitle: string;
  sandboxDesc: string;
  terminalTitle: string;
  terminalDesc: string;
  curriculumTitle: string;
  curriculumDesc: string;
}

export const compilerContent: Record<SupportedLanguage, CompilerPageLocalizedContent> = {
  en: {
    architectureBadge: 'Execution Architecture & Security',
    architectureHeading: 'How Code Execution Works in SciCalcX',
    architectureSubheading: 'Transparent breakdown of our cloud container sandboxing and client privacy model.',
    architectureP1: 'Code execution is performed through secure HTTPS connections to isolated external sandbox services. SciCalcX uses Judge0 CE (at ce.judge0.com) for code execution, with Wandbox (at wandbox.org) used as a fallback where applicable. Your program is transmitted securely to the execution service only when you run it. SciCalcX does not claim that Code Tutor execution occurs entirely inside your browser.',
    architectureP2: 'The execution service compiles and runs your program inside an isolated, ephemeral sandbox environment with strict execution timeouts and memory limits. Standard output (stdout) and compiler diagnostic messages (stderr) are captured and returned to SciCalcX. Your code is not retained or permanently stored on our servers.',
    sandboxTitle: 'Multi-Language Sandbox',
    sandboxDesc: 'Write, test, and debug code in Python 3, C (GCC 14), and C++20. Programs execute in containerized sandboxes with immediate compiler diagnostics.',
    terminalTitle: 'Interactive Terminal & Stdin',
    terminalDesc: 'Pass dynamic standard input (stdin) lines into your programs to test array sorting, matrix traversals, and Data Structures & Algorithms (DSA) exercises.',
    curriculumTitle: 'Guided Tracks & Academic Export',
    curriculumDesc: 'Follow structured roadmap lessons with automated syntax feedback. Generate assignment submission image snapshots processed locally on your device.',
  },
  es: {
    architectureBadge: 'Arquitectura de Ejecución y Seguridad',
    architectureHeading: 'Cómo Funciona la Ejecución de Código en SciCalcX',
    architectureSubheading: 'Detalle transparente de nuestro entorno aislado en la nube y privacidad del usuario.',
    architectureP1: 'La ejecución de código se realiza mediante conexiones HTTPS seguras a servicios externos de sandbox aislados. SciCalcX utiliza Judge0 CE (en ce.judge0.com) para la ejecución de código, con Wandbox (en wandbox.org) como respaldo cuando corresponda. Tu programa solo se transmite de forma segura al servicio de ejecución en el momento en que lo ejecutas. SciCalcX no afirma que la ejecución del Tutor de Código ocurra íntegramente dentro de tu navegador.',
    architectureP2: 'El servicio externo compila y ejecuta su programa en un contenedor efímero y seguro con límites estrictos de CPU y memoria. Las salidas estándar (stdout) y diagnósticos de compilación (stderr) se devuelven a SciCalcX. Su código nunca se almacena en bases de datos persistentes.',
    sandboxTitle: 'Entorno Multilenguaje',
    sandboxDesc: 'Escriba y pruebe código en Python 3, C (GCC 14) y C++20. Los programas se ejecutan en entornos aislados con diagnósticos inmediatos.',
    terminalTitle: 'Terminal Interactiva y Stdin',
    terminalDesc: 'Envíe datos de entrada estándar (stdin) para evaluar algoritmos de ordenación, matrices y ejercicios de estructuras de datos.',
    curriculumTitle: 'Rutas Guiadas y Exportación Académica',
    curriculumDesc: 'Siga lecciones estructuradas con verificación de sintaxis. Genere capturas de tareas procesadas 100% localmente en su navegador.',
  },
  ja: {
    architectureBadge: '実行アーキテクチャとセキュリティ',
    architectureHeading: 'SciCalcXにおけるコード実行の仕組み',
    architectureSubheading: 'クラウドサンドボックス実行環境とプライバシー保護の透明な説明。',
    architectureP1: 'コード実行は、隔離された外部サンドボックスサービスへの安全なHTTPS接続を通じて行われます。SciCalcXではコード実行にJudge0 CE（ce.judge0.com）を使用し、必要に応じてフォールバックとしてWandbox（wandbox.org）を利用します。プログラムは実行時のみ安全に実行サービスへ送信されます。SciCalcXは、Code Tutorの実行がお使いのブラウザ内だけで完結するとは主張しません。',
    architectureP2: '外部サービスは厳格なCPUおよびメモリ制限下の一時的なコンテナ内でプログラムをコンパイル・実行し、標準出力（stdout）およびコンパイル診断メッセージ（stderr）をSciCalcXへ返送します。提出されたコードが当サービスのサーバー上に恒久保存されることはありません。',
    sandboxTitle: '複数言語対応サンドボックス',
    sandboxDesc: 'Python 3、C（GCC 14）、C++20のコードを作成・テスト・デバッグできます。安全なコンテナ環境で実行されます。',
    terminalTitle: 'インタラクティブターミナル（stdin）',
    terminalDesc: '標準入力（stdin）にデータを渡し、ソートアルゴリズムや行列変換、データ構造とアルゴリズムの課題を検証できます。',
    curriculumTitle: '学習ロードマップとレポート出力',
    curriculumDesc: '文法解説付きの段階的レッスンを進行。ブラウザローカルで処理される課題提出用画像エクスポート機能を搭載。',
  },
  fr: {
    architectureBadge: 'Architecture d\'Exécution et Sécurité',
    architectureHeading: 'Comment Fonctionne l\'Exécution du Code sur SciCalcX',
    architectureSubheading: 'Présentation transparente de notre environnement d\'exécution isolé et du respect de la vie privée.',
    architectureP1: 'L\'exécution du code s\'effectue via des connexions HTTPS sécurisées vers des services de bac à sable externes isolés. SciCalcX utilise Judge0 CE (sur ce.judge0.com) pour l\'exécution du code, avec Wandbox (sur wandbox.org) en basculement si nécessaire. Votre programme n\'est transmis de manière sécurisée au service d\'exécution que lorsque vous le lancez. SciCalcX n\'affirme aucunement que l\'exécution du Tuteur de Code s\'effectue entièrement dans votre navigateur.',
    architectureP2: 'Le service distant compile et exécute votre programme dans un conteneur éphémère avec des limites strictes de temps et de mémoire. La sortie standard (stdout) et les erreurs (stderr) sont retournées à SciCalcX. Votre code source n\'est jamais conservé sur nos serveurs.',
    sandboxTitle: 'Bac à Sable Multi-Langages',
    sandboxDesc: 'Rédigez, testez et déboguez du code en Python 3, C (GCC 14) et C++20 avec diagnostics d\'erreurs instantanés.',
    terminalTitle: 'Terminal Interactif & Stdin',
    terminalDesc: 'Injectez des flux d\'entrée standard (stdin) pour tester le tri de tableaux, les graphes et les exercices d\'algorithmique.',
    curriculumTitle: 'Parcours Guidé & Export Académique',
    curriculumDesc: 'Suivez des leçons étape par étape avec retours syntaxiques. Générez des rapports d\'exercices traités localement sur votre appareil.',
  },
  de: {
    architectureBadge: 'Ausführungsarchitektur & Datenschutz',
    architectureHeading: 'Wie die Code-Ausführung bei SciCalcX funktioniert',
    architectureSubheading: 'Transparente Erklärung unserer isolierten Cloud-Sandbox und Datenschutzrichtlinien.',
    architectureP1: 'Die Codeausführung erfolgt über sichere HTTPS-Verbindungen zu isolierten externen Sandbox-Diensten. SciCalcX nutzt Judge0 CE (unter ce.judge0.com) für die Codeausführung und setzt Wandbox (unter wandbox.org) als Fallback ein. Ihr Programm wird nur dann sicher an den Ausführungsdienst übermittelt, wenn Sie es ausführen. SciCalcX behauptet nicht, dass die Ausführung des Code-Tutors vollständig in Ihrem Browser stattfindet.',
    architectureP2: 'Der externe Dienst kompiliert und führt Ihr Programm in einem isolierten, kurzlebigen Container unter strikten Ressourcenlimits aus und liefert die Ausgaben (stdout/stderr) an SciCalcX zurück. Ihr Quellcode wird nicht dauerhaft auf unseren Servern gespeichert.',
    sandboxTitle: 'Multi-Sprachen Sandbox',
    sandboxDesc: 'Schreiben und testen Sie Code in Python 3, C (GCC 14) und C++20 in isolierten Containern mit sofortigen Fehlerdiagnosen.',
    terminalTitle: 'Interaktives Terminal & Stdin',
    terminalDesc: 'Übergeben Sie dynamische Standardeingaben (stdin), um Sortieralgorithmen, Matrizen und Datenstrukturen zu überprüfen.',
    curriculumTitle: 'Geführter Lernpfad & Berichts-Export',
    curriculumDesc: 'Strukturierte Lektionen mit automatischer Syntaxprüfung. Erstellen Sie Aufgabenberichte, die 100% lokal im Browser gerendert werden.',
  },
  nl: {
    architectureBadge: 'Uitvoeringsarchitectuur & Beveiliging',
    architectureHeading: 'Hoe Code-uitvoering Werkt in SciCalcX',
    architectureSubheading: 'Transparant overzicht van onze externe sandbox-omgeving en gegevensbescherming.',
    architectureP1: 'Code-uitvoering wordt uitgevoerd via beveiligde HTTPS-verbindingen met geïsoleerde externe sandboxdiensten. SciCalcX gebruikt Judge0 CE (op ce.judge0.com) voor code-uitvoering, met Wandbox (op wandbox.org) als terugvaloptie. Uw programma wordt uitsluitend veilig naar de uitvoeringsdienst verzonden wanneer u het uitvoert. SciCalcX claimt niet dat de uitvoering van de Code Tutor volledig in uw browser plaatsvindt.',
    architectureP2: 'De externe service compileert en voert uw programma uit in een geïsoleerde container met strikte tijd- en geheugenlimieten. De console-uitvoer (stdout en stderr) wordt teruggestuurd naar SciCalcX. Uw code wordt niet permanent bewaard op onze servers.',
    sandboxTitle: 'Multi-taal Sandbox',
    sandboxDesc: 'Schrijf, test en debug code in Python 3, C (GCC 14) en C++20 in een veilige sandbox met directe feedback.',
    terminalTitle: 'Interactieve Terminal & Stdin',
    terminalDesc: 'Voer dynamische standaardinvoer (stdin) in om sorteeralgoritmen, matrixbewerkingen en datastructuren te testen.',
    curriculumTitle: 'Begeleide Lessen & Academische Export',
    curriculumDesc: 'Volg gestructureerde programmeerlessen met syntaxcontrole. Genereer opdrachtenrapporten die lokaal in uw browser worden verwerkt.',
  },
  pt: {
    architectureBadge: 'Arquitetura de Execução e Segurança',
    architectureHeading: 'Como Funciona a Execução de Código no SciCalcX',
    architectureSubheading: 'Explicação transparente do nosso ambiente isolado em nuvem e privacidade.',
    architectureP1: 'A execução do código é realizada por meio de conexões HTTPS seguras para serviços externos de sandbox isolados. O SciCalcX utiliza o Judge0 CE (em ce.judge0.com) para a execução do código, com o Wandbox (em wandbox.org) utilizado como contingência quando aplicável. O seu programa é transmitido com segurança para o serviço de execução somente quando você o executa. O SciCalcX não alega que a execução do Tutor de Código ocorre inteiramente dentro do seu navegador.',
    architectureP2: 'O serviço compila e executa o código em um contêiner temporário com limites rigorosos de memória e tempo, retornando a saída (stdout/stderr) ao SciCalcX. Seu código não é armazenado permanentemente em nossos servidores.',
    sandboxTitle: 'Sandbox Multilinguagem',
    sandboxDesc: 'Escreva e teste códigos em Python 3, C (GCC 14) e C++20 em contêineres isolados com diagnósticos imediatos.',
    terminalTitle: 'Terminal Interativo & Stdin',
    terminalDesc: 'Envie entradas de dados padrão (stdin) para testar algoritmos de ordenação, matrizes e desafios de estruturas de dados.',
    curriculumTitle: 'Trilhas Guiadas e Exportação Acadêmica',
    curriculumDesc: 'Acompanhe lições estruturadas com validação de código. Exporte relatórios de tarefas processados 100% no seu navegador.',
  },
  ko: {
    architectureBadge: '실행 아키텍처 및 보안',
    architectureHeading: 'SciCalcX 코드 실행 원리',
    architectureSubheading: '클라우드 샌드박스 실행 환경 및 사용자 개인정보 보호에 대한 명확한 안내.',
    architectureP1: '코드 실행은 격리된 외부 샌드박스 서비스에 대한 안전한 HTTPS 연결을 통해 수행됩니다. SciCalcX는 코드 실행에 Judge0 CE(ce.judge0.com)를 사용하며, 필요한 경우 Wandbox(wandbox.org)를 대체 수단(폴백)으로 사용합니다. 프로그램은 사용자가 실행할 때만 실행 서비스로 안전하게 전송됩니다. SciCalcX는 Code Tutor 실행이 사용자 브라우저 내부에서만 전적으로 발생한다고 주장하지 않습니다.',
    architectureP2: '외부 서비스는 엄격한 CPU 및 메모리 제한이 적용된 임시 컨테이너에서 프로그램을 컴파일하고 실행한 후 표준 출력(stdout) 및 진단 오류(stderr)를 반환합니다. 제출된 코드는 서버에 영구 저장되지 않습니다.',
    sandboxTitle: '다국어 프로그래밍 샌드박스',
    sandboxDesc: 'Python 3, C(GCC 14), C++20 코드를 격리된 환경에서 즉각적인 진단과 함께 작성하고 디버깅하세요.',
    terminalTitle: '대화형 터미널 및 표준 입력(stdin)',
    terminalDesc: '표준 입력(stdin) 데이터를 전달하여 정렬 알고리즘, 행렬 변환, 자료구조 및 알고리즘 과제를 실시간으로 테스트하세요.',
    curriculumTitle: '단계별 로드맵 및 과제 내보내기',
    curriculumDesc: '구문 설명이 포함된 로드맵을 학습하세요. 브라우저에서 100% 로컬로 렌더링되는 과제 스냅샷 이미지를 생성할 수 있습니다.',
  },
  it: {
    architectureBadge: 'Architettura di Esecuzione e Sicurezza',
    architectureHeading: 'Come Funziona l\'Esecuzione del Codice su SciCalcX',
    architectureSubheading: 'Panoramica trasparente sul nostro ambiente di sandbox cloud e sulla protezione dei dati.',
    architectureP1: 'L\'esecuzione del codice viene eseguita tramite connessioni HTTPS sicure verso servizi sandbox esterni isolati. SciCalcX utilizza Judge0 CE (su ce.judge0.com) per l\'esecuzione del codice, con Wandbox (su wandbox.org) come soluzione di fallback ove applicabile. Il programma viene trasmesso in modo sicuro al servizio di esecuzione solo quando viene avviato. SciCalcX non afferma che l\'esecuzione del Tutor di Codice avvenga interamente all\'interno del browser.',
    architectureP2: 'Il servizio esterno compila ed esegue il programma in un container effimero con limiti rigorosi di memoria e tempo di calcolo, restituendo l\'output (stdout/stderr) a SciCalcX. Il vostro codice non viene archiviato permanentemente sui nostri server.',
    sandboxTitle: 'Sandbox Multi-Linguaggio',
    sandboxDesc: 'Scrivi e testa codice in Python 3, C (GCC 14) e C++20 in un ambiente sicuro con diagnostica immediata degli errori.',
    terminalTitle: 'Terminale Interattivo & Stdin',
    terminalDesc: 'Invia dati di input standard (stdin) per testare algoritmi di ordinamento, matrici ed esercizi su strutture dati e algoritmi.',
    curriculumTitle: 'Percorso Guidato & Esportazione Accademica',
    curriculumDesc: 'Segui lezioni con spiegazioni sintattiche. Genera resoconti di compiti ed esercitazioni elaborati al 100% in locale nel browser.',
  },
};
