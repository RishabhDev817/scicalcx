import type { InfoPageContent } from '../infoPages';

export const ptInfo: InfoPageContent = {
  about: {
    badge: 'Perfil da Plataforma & Governança',
    heading: 'Sobre o SciCalcX',
    subheading: 'Unindo o rigor do cálculo matemático à compilação interativa de software.',
    missionBadge: 'Nossa Missão',
    missionP1: 'O SciCalcX nasceu para eliminar uma frustração recorrente de estudantes de engenharia e ciência da computação: a fricção de alternar entre calculadoras isoladas, ferramentas de estatística dispersas e ambientes de desenvolvimento externos.',
    missionP2: 'Nossa plataforma integra avaliação numérica de alta precisão, álgebra linear, cálculo e operações de bits diretamente ao lado de um tutor de código interativo e compilador, planejado para respostas rápidas e fluidas no navegador.',
    teamBadge: 'Equipe de Engenharia & Conteúdo',
    teamTitle: 'Equipe de Engenharia & Conteúdo',
    standardsBadge: 'Padrões de Precisão',
    standardsTitle: 'Precisão de Cálculo e Rigor Editorial',
    standardsIntro: 'A exatidão é primordial em estudos científicos e de engenharia. Seguimos padrões rigorosos de validação:',
    standards: [
      { label: 'Normalização Decimal', text: 'O SciCalcX aplica normalização baseada em épsilon para atenuar artefatos comuns de representação em ponto flutuante nos resultados exibidos com até 12 casas decimais.' },
      { label: 'Verificação Padronizada', text: 'Operações matriciais e quadratura numérica de Simpson são continuamente testadas contra soluções analíticas de referência e casos de álgebra linear.' },
      { label: 'Separação Arquitetural', text: 'O SciCalcX mantém uma rigorosa separação arquitetural: as ferramentas matemáticas realizam seus cálculos localmente no navegador onde suportado, permitindo que a entrada de fórmulas e o processamento permaneçam no dispositivo do usuário. O Tutor de Código é separado dos motores matemáticos: quando o usuário clica em "Executar Código", o programa é transmitido com segurança via HTTPS para um serviço de execução externo isolado (principal: Judge0 CE em ce.judge0.com, contingência: Wandbox em wandbox.org) sem armazenamento permanente em servidores.' },
    ],
    architectureBadge: 'Arquitetura Web',
    architectureTitle: 'Arquitetura Web de Alta Performance',
    architectureDesc: 'Desenvolvido segundo os padrões web modernos para garantir máxima acessibilidade, zero dependências pesadas e facilidade de uso em dispositivos móveis.',
  },
  contact: {
    badge: 'Comunicação',
    heading: 'Fale Conosco',
    subheading: 'Entre em contato com nossa equipe de suporte e desenvolvimento para dúvidas, sugestões ou relatos de bugs.',
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
    submitBtn: 'Enviar Mensagem para a Equipe',
    successNotice: 'Cliente de e-mail iniciado! Caso não abra automaticamente, envie sua mensagem para support@scicalcx.com.',
  },
  terms: {
    badge: 'Termos Legais',
    heading: 'Termos de Serviço',
    subheading: 'Última atualização: 14 de setembro de 2026. Leia as regras e diretrizes de uso da plataforma SciCalcX.',
    sections: [
      { 
        title: '1. Aceitação dos Termos', 
        paragraphs: [
          'Ao acessar ou utilizar o SciCalcX (https://scicalcx.com/), você declara ter lido, compreendido e concordado em cumprir estes Termos de Serviço. Caso não concorde com qualquer disposição, você deve interromper o uso imediatamente.',
          'Estes termos aplicam-se a todas as calculadoras científicas, ferramentas de matrizes, cálculo numérico, análise estatística e ambientes de execução em sandbox.'
        ]
      },
      { 
        title: '2. Uso Permitido Educacional e Profissional', 
        paragraphs: [
          'O SciCalcX é disponibilizado para fins educacionais, acadêmicos, profissionais e de estudo pessoal. Você tem autorização para utilizar resultados numéricos, gráficos e trechos de código em trabalhos acadêmicos, relatórios e pareceres técnicos.',
          'É expressamente proibido o uso de scrapers automáticos, ataques de negação de serviço ou mecanismos abusivos de requisição que sobrecarreguem nossa infraestrutura ou provedores parceiros.'
        ]
      },
      { 
        title: '3. Uso Responsável da Execução de Código em Sandbox', 
        paragraphs: [
          'O Tutor de Código utiliza serviços externos de execução em contêineres (Judge0 CE e API Wandbox). Ao enviar código-fonte, você concorda em não transmitir nem executar:',
          '• Malwares, vírus, worms, rootkits ou exploits de segurança.',
          '• Mineração de criptomoedas ou processamento de lotes não autorizados.',
          '• Varreduras de portas ou redes, scripts DoS ou robôs de spam.',
          '• Tentativas de escape do contêiner, leitura de arquivos do sistema hospedeiro ou adulteração do ambiente de execução.',
          'Violações resultarão na rescisão imediata do acesso e eventual comunicação às autoridades de segurança de rede.'
        ]
      },
      { 
        title: '4. Precisão Numérica e Isenção de Garantias ("No Estado")', 
        paragraphs: [
          'O SciCalcX implementa algoritmos matemáticos reconhecidos (quadratura de Simpson, derivadas por diferenças centrais e expansão de Laplace) acompanhados de normalização numérica. Entretanto, todos os serviços são fornecidos estritamente "NO ESTADO EM QUE SE ENCONTRAM" e "CONFORME DISPONÍVEIS", sem garantias de qualquer natureza.',
          'A aritmética de ponto flutuante em processadores digitais possui limites inerentes de aproximação. O SciCalcX não deve ser utilizado como ferramenta única em aplicações críticas de engenharia, aviação comercial, diagnósticos clínicos, cálculos estruturais ou operações financeiras de alto risco em que divergências possam causar danos físicos ou materiais.'
        ]
      },
      { 
        title: '5. Direitos de Propriedade Intelectual', 
        paragraphs: [
          'A marca SciCalcX, a identidade visual, os componentes de interface, algoritmos e guias didáticos são propriedade intelectual do SciCalcX e seus colaboradores. Recursos open-source são creditados sob suas respectivas licenças.',
          'Os usuários mantêm os direitos autorais exclusivos sobre as expressões e códigos-fonte inseridos na plataforma.'
        ]
      },
      { 
        title: '6. Serviços de Terceiros e Links Externos', 
        paragraphs: [
          'O SciCalcX conta com serviços de parceiros para funcionalidades específicas: Cloudflare para CDN e segurança, Judge0 CE e Wandbox para compilação remota, e Google para métricas de audiência e anúncios. O SciCalcX não controla a infraestrutura desses terceiros e não responde por interrupções temporárias ou pelo conteúdo de páginas externas.'
        ]
      },
      { 
        title: '7. Limitação de Responsabilidade', 
        paragraphs: [
          'No limite máximo permitido pela legislação aplicable, o SciCalcX, seus desenvolvedores e autores não serão responsáveis por quaisquer danos diretos, indiretos, incidentais ou punitivos decorrentes do uso ou impossibilidade de uso da plataforma, incluindo perda de dados, erros de arredondamento ou prejuízos acadêmicos.'
        ]
      },
      { 
        title: '8. Modificações e Contato', 
        paragraphs: [
          'Reservamo-nos o direito de atualizar estes termos a qualquer momento. Alterações relevantes serão destacadas pela data de atualização no início deste documento.',
          'Dúvidas sobre estes termos podem ser encaminhadas para support@scicalcx.com.'
        ]
      },
    ],
  },
  privacy: {
    badge: 'Privacidade & Dados',
    heading: 'Política de Privacidade',
    subheading: 'Última atualização: 14 de setembro de 2026. Saiba como o SciCalcX protege sua privacidade computacional e dados de navegação.',
    sections: [
      { 
        title: '1. Introdução e Escopo', 
        paragraphs: [
          'No SciCalcX (https://scicalcx.com/), acreditamos em software transparente e orientado à privacidade. Esta Política de Privacidade descreve os dados processados, o que não coletamos e o papel dos recursos do navegador e serviços terceirizados.',
          'O SciCalcX não exige contas de usuário, senhas nem formulários de registro. Você pode explorar todos os recursos e artigos técnicos livremente.'
        ]
      },
      { 
        title: '2. Processamento Matemático no Lado do Cliente', 
        paragraphs: [
          'As calculadoras matemáticas fundamentais do SciCalcX—Científica, Matrizes, Cálculo, Gráficos, Estatística e Programador—realizam seus cálculos localmente no seu navegador onde suportado.',
          'Ao digitar expressões como "sin(45)", configurar uma matriz ou calcular o desvio-padrão de uma amostra, o processamento ocorre localmente no motor JavaScript do seu aparelho. Suas fórmulas e números nunca são enviados aos nossos servidores nem salvos em bancos de dados remotos.'
        ]
      },
      { 
        title: '3. Tutor de Código e Execução Remota em Sandbox', 
        paragraphs: [
          'Diferente das calculadoras, o Tutor de Código compila e executa programas em C, C++ e Python. Navegadores não executam cadeias de compilação GCC nativamente na máquina cliente sem um ambiente remoto.',
          'Ao clicar em "Executar Código", o código-fonte, a entrada opcional (stdin) e a linguagem são transmitidos via conexão segura HTTPS para provedores de sandbox em contêineres (Judge0 CE em ce.judge0.com com fallback para a API Wandbox em wandbox.org).',
          'Esses serviços executam seu script em um contêiner descartável e retornam a saída padrão (stdout) e eventuais erros de sintaxe (stderr). Seu código é processado estritamente durante o tempo de execução da requisição e não fica armazenado permanentemente nem é utilizado para treinamento de IA.'
        ]
      },
      { 
        title: '4. Informações que Não Coletamos', 
        paragraphs: [
          '• Não coletamos nomes civis, números de telefone ou endereços residenciais.',
          '• Não solicitamos nem armazenamos números de cartão de crédito ou dados bancários.',
          '• Não vendemos nem compartilhamos dados com intermediários ou corretores de dados.'
        ]
      },
      { 
        title: '5. Armazenamento Local do Navegador (localStorage)', 
        paragraphs: [
          'O SciCalcX utiliza o recurso nativo localStorage do seu navegador apenas para oferecer conveniência durante o uso:',
          '• Tema Visual (theme): Mantém sua preferência entre modo claro e escuro.',
          '• Histórico de Cálculos (scicalcx_history): Salva os resultados recentes (até 50 itens) na memória local. Você pode limpar a qualquer momento pelo botão "[ Limpar Tudo ]".',
          '• Ciência do Banner de Cookies (scicalcx_cookie_consent): Registra a aceitação ou dispensa do aviso.',
          '• Memória da Calculadora (scicalcx_memory): Retém o valor salvo no registrador numérico (M+ / M- / MR).',
          '• Rascunhos do Tutor (scicalcx_code_draft_*, scicalcx_sandbox_draft_*, scicalcx_completed_subs): Salva seu código e progresso nas lições para evitar perdas ao atualizar a página.',
          '• Exportação de Exercício (scicalcx_student_name, scicalcx_student_roll): Grava opcionalmente o nome e matrícula para preencher o gerador de imagem de tarefas. Esses dados permanecem unicamente na memória local para renderizar a imagem PNG e nunca são transmitidos à rede.',
          'Todas as chaves de localStorage permanecem apenas no seu equipamento e podem ser excluídas a qualquer momento nas configurações do seu navegador.'
        ]
      },
      { 
        title: '6. Cookies, Métricas e Google AdSense', 
        paragraphs: [
          'O SciCalcX emprega tecnologias web consagradas para manter a estabilidade da plataforma:',
          '• Cloudflare: Utiliza cookies técnicos de segurança para mitigar ciberataques e agilizar a entrega de conteúdo.',
          '• Google Analytics 4 (ID de Medição: G-XSYVYWTGTS): Reúne dados estatísticos agregados e anônimos (páginas visualizadas, tipo de dispositivo, referenciadores) para nos ajudar a aprimorar as interfaces.',
          '• Google AdSense: Fornecedores terceirizados, incluindo o Google, utilizam cookies para veicular anúncios com base em visitas anteriores dos usuários a este e outros sites.',
          'Você pode desativar a personalização de anúncios visitando as Configurações de Anúncios do Google (https://adssettings.google.com/) ou pela Network Advertising Initiative (http://www.aboutads.info/choices/).'
        ]
      },
      { 
        title: '7. Mensagens de Contato e E-mail', 
        paragraphs: [
          'Ao enviar uma solicitação pela página de Contato ou diretamente para support@scicalcx.com, seus dados e mensagem serão utilizados unicamente para prestar o suporte técnico ou depurar falhas. Seus dados nunca são incluídos em listas comerciais.'
        ]
      },
      { 
        title: '8. Retenção de Dados e Segurança', 
        paragraphs: [
          'Como não mantemos contas ou cadastros, não existe repositório central de perfis passível de vazamento. A navegação no SciCalcX é protegida por criptografia moderna TLS/HTTPS. Registros técnicos de servidor são mantidos apenas para diagnósticos operacionais temporários.'
        ]
      },
      { 
        title: '9. Privacidade de Menores (COPPA)', 
        paragraphs: [
          'O SciCalcX é voltado para aprendizado de ciências e matemática. Não coletamos intencionalmente dados de crianças menores de 13 anos. Caso tome conhecimento de que uma criança nos enviou dados por e-mail, entre em contato com support@scicalcx.com para remoção imediata.'
        ]
      },
      { 
        title: '10. Direitos dos Usuários (LGPD / GDPR)', 
        paragraphs: [
          'De acordo com a Lei Geral de Proteção de Dados (LGPD) e legislações internacionais, você possui direitos de acesso, retificação e exclusão de seus dados. Como o SciCalcX não armazena identidades nem fórmulas em servidores, você pode excluir a quase totalidade das informações limpando o cache e o localStorage do seu navegador.',
          'Para quaisquer dúvidas de privacidade, contate support@scicalcx.com.'
        ]
      },
    ],
  },
  editorial: {
    badge: 'Padrões Acadêmicos & Editoriais',
    heading: 'Integridade Editorial e Padrões Matemáticos',
    subheading: 'Nosso compromisso com a exatidão numérica, validação de fórmulas e transparência algorítmica.',
    sections: [
      {
        title: 'Compromisso com o Rigor Acadêmico',
        paragraphs: [
          'No SciCalcX, o rigor matemático e técnico fundamenta todas as nossas ferramentas. Nossas calculadoras e artigos são criados para atender estudantes de ensino médio e superior, cientistas de dados e programadores que exigem precisão.',
          'Não publicamos afirmações sem respaldo, textos inflados artificialmente por palavras-chave ou conteúdos copiados. Cada guia tem o propósito de explicar os princípios matemáticos e de programação de forma clara e progressiva.'
        ]
      },
      {
        title: 'Verificação Numérica e Testes de Validação',
        paragraphs: [
          'Antes de disponibilizar qualquer recurso, os algoritmos são testados contra suítes analíticas de referência:',
          '• Determinantes e Inversas de Matrizes: Testados em matrizes-padrão de álgebra linear e ferramentas simbólicas em dimensões 2x2 e 3x3, incluindo matrizes singulares.',
          '• Cálculo Numérico: Nossa regra 1/3 composta de Simpson (com N=1000 subdivisões) e derivadas numéricas (h=1e-6) são verificadas contra integrais analíticas conhecidas de polinômios, funções trigonométricas e exponenciais.',
          '• Estatística Descritiva: Média, mediana, moda, variância amostral (com correção de Bessel n-1) e variância populacional são validadas contra bancos de dados de referência.'
        ]
      },
      {
        title: 'Transparência Algorítmica',
        paragraphs: [
          'Defendemos que o usuário deve saber como seu resultado foi obtido. Em vez de tratar calculadoras como caixas-pretas, o SciCalcX documenta os métodos utilizados, como o algoritmo Shunting-Yard, a normalização decimal IEEE-754 e a quadratura numérica.',
          'Também informamos abertamente as limitações técnicas, como os erros de truncamento em ponto flutuante e assíntotas.'
        ]
      },
      {
        title: 'Diretrizes sobre Ferramentas com IA',
        paragraphs: [
          'Ferramentas de auxílio ao desenvolvimento utilizadas internamente passam pela revisão cuidadosa dos desenvolvedores do SciCalcX. Nenhum código ou artigo é publicado sem conferência humana da precisão matemática e clareza pedagógica.',
          'Rejeitamos a geração em massa de artigos automáticos. Todos os materiais são elaborados com o objetivo de gerar valor real ao estudante.'
        ]
      },
      {
        title: 'Atribuição e Originalidade',
        paragraphs: [
          'Nossos tutoriais, programas de exemplo e diagramas são desenvolvidos originalmente pela nossa equipe ou adaptados de livros acadêmicos e especificações abertas dumente creditadas.'
        ]
      },
      {
        title: 'Canal de Correções e Notificação de Falhas',
        paragraphs: [
          'A matemática e a ciência evoluem pelo questionamento constante. Caso encontre qualquer divergência ou erro de cálculo, agradecemos seu reporte para que possamos investigar e corrigir prontamente.',
          'Você pode enviar suas observações para support@scicalcx.com ou abrir uma issue no nosso repositório no GitHub: github.com/RishabhDev817/scicalcx.'
        ]
      }
    ]
  }
};
