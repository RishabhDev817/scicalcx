import type { CalculatorPedagogyData } from '../calculatorData';

export const ptPedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Fundamentos Matemáticos',
    conceptTitle: 'Hierarquia Algébrica & Sistemas de Ponto Flutuante',
    conceptDescription: [
      'Uma calculadora científica avalia expressões matemáticas compostas aderindo a regras estritas de precedência de operadores, formalizadas como PEMDAS ou BODMAS (Parênteses, Expoentes, Multiplicação e Divisão, Adição e Subtração). Ao avaliar fórmulas aninhadas como 3 + 4 × 2 / (1 - 5)^2, o motor adia a adição de menor precedência até que todas as expressões entre parênteses, potências e produtos sejam calculadas.',
      'Os microprocessadores modernos realizam aritmética de ponto flutuante utilizando o padrão IEEE 754 para precisão dupla binária (float64). Como certas frações decimais (como 0.1 ou 0.2) possuem dízimas periódicas em binário, a aritmética binária pura introduz discrepâncias infinitesimais de arredondamento (ex.: 0.1 + 0.2 = 0.30000000000000004). O SciCalcX aplica sanitização por limite épsilon para preservar representações decimais limpas com 12 casas decimais.',
      'Funções trigonométricas (seno, cosseno, tangente) operam sobre medidas angulares contínuas. Saber se sua entrada está em radianos circulares (onde 2π corresponde a 360°) ou graus sexagesimais (DEG) é fundamental para a precisão dos cálculos em física, geometria e engenharia.'
    ],
    howToSteps: [
      'Selecione a unidade angular: Alterne a cápsula DEG/RAD na barra de status para escolher Graus ou Radianos.',
      'Digite sua expressão: Digite diretamente pelo teclado físico ou clique nos botões do teclado na tela.',
      'Use parênteses para agrupar termos: Envolva termos de numeradores ou denominadores para definir a ordem desejada.',
      'Calcule: Pressione "=" no teclado da calculadora ou Enter no teclado físico para obter o resultado.',
      'Formate o resultado: Use a tecla S-D para alternar entre a exibição decimal e a fração exata.'
    ],
    formulas: [
      {
        title: 'Precedência de Operadores (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Operadores de mesma prioridade avaliam da esquerda para a direita; negação unária e potências associam pela direita.'
      },
      {
        title: 'Conversão de Graus para Radianos',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'Todas as funções trigonométricas internas de CPUs avaliam em radianos. No modo DEG, o SciCalcX converte graus previamente.'
      },
      {
        title: 'Mudança de Base Logarítmica',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'Logaritmos naturais (ln) utilizam a base e ≈ 2,71828; logaritmos decimais (log) utilizam a base 10.'
      },
      {
        title: 'Normalização por Limite Épsilon',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'A filtragem por limiar épsilon remove ruídos de arredondamento binário do padrão IEEE-754.'
      }
    ],
    workedExample: {
      title: 'Exemplo Passo a Passo: Expressão Composta Multioperacional',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Passo 1: Trigonometria', expression: 'sin(30°) = 0.5', note: 'No modo DEG, sin(30°) é igual a 1/2' },
        { label: 'Passo 2: Multiplicação', expression: '4 × 0.5 = 2.0', note: 'Calcula o produto esquerdo' },
        { label: 'Passo 3: Raiz Quadrada', expression: '√(25) = 5.0', note: 'Avalia a função radical' },
        { label: 'Passo 4: Exponenciação', expression: '2^3 = 8.0', note: 'Calcula 2 elevado ao cubo' },
        { label: 'Passo 5: Adição e Subtração', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Avaliação linear da esquerda para a direita' }
      ],
      result: '-1',
      explanation: 'Respeitando a ordem das operações, parênteses, raízes e potências são resolvidos antes da adição e subtração, resultando exatamente em -1.'
    },
    howItWorks: {
      title: 'Como o SciCalcX Processa Expressões no Navegador',
      paragraphs: [
        'O SciCalcX utiliza um motor de análise sintática em duas fases implementado integralmente em TypeScript do lado do cliente. Na primeira fase (tokenização léxica), o texto de entrada é dividido em tokens discretos para números, variáveis, constantes (π, e), operadores e funções.',
        'Na segunda fase, um analisador Shunting-Yard converte a notação infixa em Notação Polonesa Reversa (RPN) utilizando pilhas de operadores e operandos. Parênteses não fechados são detectados em tempo real antes de qualquer avaliação.',
        'Por fim, uma máquina de pilha RPN avalia a fila com registradores float64 de precisão dupla IEEE-754, aplicando normalização épsilon antes de exibir o valor.'
      ]
    },
    limitations: {
      title: 'Limites de Precisão e Fronteiras Numéricas',
      points: [
        'Transbordamento Superior (Overflow): Números que excedem ±1,7976931348623157 × 10³⁰⁸ resultam em Infinity.',
        'Transbordamento Inferior (Underflow): Valores diferentes de zero menores que ±5,0 × 10⁻³²⁴ convergem para 0.',
        'Restrições de Domínio: Raiz quadrada de números negativos ou ln(x) para x ≤ 0 geram erro explícito de domínio.',
        'Singularidades Trigonométricas: tan(90°) ou tan(270°) retornam valores extremamente elevados ou indefinidos devido à aproximação de π/2.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Parênteses Desbalanceados: ex.: "(2 + 3 * (4 - 1)"',
        fix: 'Observe o contador de parênteses no canto inferior esquerdo para certificar-se de que todo "(" foi fechado com ")".'
      },
      {
        mistake: 'Confusão entre Graus e Radianos: sin(90) retornando 0.89399 em vez de 1',
        fix: '0.89399 é o valor em radianos (sin(90 rad)). Alterne para o modo DEG no topo para obter sin(90°) = 1.'
      },
      {
        mistake: 'Multiplicação Implícita Ambígua: Digitar "2(3+4)" sem operador',
        fix: 'Utilize um operador explícito: "2 * (3 + 4)" para garantir uma tokenização inequívoca.'
      }
    ],
    useCases: [
      {
        title: 'Física & Cinemática',
        desc: 'Decomposição de vetores de força em componentes ortogonais com seno e cosseno e cálculo de trajetórias balísticas.'
      },
      {
        title: 'Engenharia Elétrica',
        desc: 'Cálculo de impedâncias reativas em corrente alternada, ângulos de fase e relações logarítmicas em decibéis (20 log(V_out / V_in)).'
      },
      {
        title: 'Cálculo Acadêmico & STEM',
        desc: 'Verificação de derivações algébricas, polinômios fracionários e modelagem de crescimento exponencial.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora de Matrizes', desc: 'Resolva sistemas lineares, determinantes e inversão de matrizes.', href: '/matrix', badge: 'Álgebra Linear' },
      { title: 'Calculadora de Cálculo', desc: 'Calcule integrais definidas pela regra de Simpson e derivadas numéricas.', href: '/calculus', badge: 'Análise' },
      { title: 'Calculadora Gráfica', desc: 'Plote funções 2D e inspecione raízes e assíntotas dinamicamente.', href: '/graphing', badge: 'Geometria' }
    ]
  },

  matrix: {
    conceptBadge: 'Fundamentos de Álgebra Linear',
    conceptTitle: 'Transformações Matriciais, Determinantes e Espaços Vetoriais',
    conceptDescription: [
      'Uma matriz é uma disposição retangular de elementos numéricos organizados em m linhas e n colunas. Na matemática e na computação, matrizes representam transformações lineares que escalam, rotacionam, refletem ou deformam espaços vetoriais multidimensionais.',
      'A multiplicação de matrizes é não comutativa: para duas matrizes A e B, em geral A × B ≠ B × A. Além disso, as dimensões internas devem coincidir: uma matriz m × k só pode multiplicar uma matriz k × n, resultando em uma matriz produto m × n.',
      'O determinante, det(A), é um valor escalar característico de matrizes quadradas. Geometricamente, ele indica o fator de escala pelo qual a transformação altera áreas (em 2D) ou volumes (em 3D). Uma matriz é invertível se e somente se det(A) ≠ 0.'
    ],
    howToSteps: [
      'Selecione as dimensões: Use os seletores 2x2 ou 3x3 para a Matriz A e a Matriz B.',
      'Preencha os elementos: Digite números (inteiros ou decimais) nas células correspondentes.',
      'Escolha uma operação binária: Clique em Adição (A + B), Subtração (A - B) ou Multiplicação (A × B).',
      'Calcule propriedades unárias: Clique em Determinante, Inversa ou Transposta na Matriz A.',
      'Examine o passo a passo: Analise a resolução detalhada abaixo da grade de resultados.'
    ],
    formulas: [
      {
        title: 'Regra de Multiplicação de Matrizes',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Cada elemento na matriz produto C é o produto escalar da linha i de A pela coluna j de B.'
      },
      {
        title: 'Fórmula do Determinante 2×2',
        math: '\\det(A) = ad - bc \\quad \\text{para } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'Diferença entre o produto da diagonal principal e o produto da diagonal secundária.'
      },
      {
        title: 'Expansão de Laplace 3×3',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Expansão ao longo da primeira linha utilizando cofatores com alternância de sinais.'
      },
      {
        title: 'Inversão Matricial via Adjunta',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'Existe apenas se det(A) ≠ 0. Corresponde à transposta da matriz de cofatores dividida pelo determinante.'
      }
    ],
    workedExample: {
      title: 'Exemplo Passo a Passo: Inversão de Matriz 2×2',
      input: 'Matriz A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Passo 1: Determinante', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, logo a inversa existe' },
        { label: 'Passo 2: Trocar Diagonal Principal', expression: 'a ↔ d: [6, 4]', note: 'Troca elementos A[0,0] e A[1,1]' },
        { label: 'Passo 3: Trocar Sinal da Diagonal Secundária', expression: 'b → -7, c → -2', note: 'Inverte o sinal de A[0,1] e A[1,0]' },
        { label: 'Passo 4: Matriz Adjunta', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Construção da adjunta' },
        { label: 'Passo 5: Divisão Escalar', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Multiplica cada elemento por 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Verificação: A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], a matriz identidade 2×2.'
    },
    howItWorks: {
      title: 'Como o SciCalcX Executa Operações Matriciais no Navegador',
      paragraphs: [
        'O SciCalcX processa todas as operações matriciais diretamente no navegador utilizando arrays tipados em JavaScript. As entradas são validadas quanto ao tipo numérico, aceitando números negativos e decimais com alta performance.',
        'Para matrizes 2×2, o determinante utiliza a fórmula ad - bc; em matrizes 3×3, aplica a expansão de Laplace. A inversão verifica a não singularidade (|det| < 1e-12) antes de efetuar a divisão.',
        'Os resultados passam por normalização épsilon para evitar que resíduos binários próximos a zero apareçam como valores residuais como 1e-16.'
      ]
    },
    limitations: {
      title: 'Limites de Precisão e Fronteiras da Álgebra Linear',
      points: [
        'Matrizes Singulares: Se det(A) = 0, a matriz não é invertível. O sistema informa "Matriz Singular (det = 0)".',
        'Sistemas Mal Condicionados: Determinantes extremamente próximos de zero podem apresentar imprecisões decorrentes da divisão de ponto flutuante.',
        'Dimensões Suportadas: Focado em matrizes 2×2 e 3×3, amplamente adotadas no ensino superior e em computação gráfica 3D.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Supor que a Multiplicação de Matrizes é Comutativa (A × B = B × A)',
        fix: 'A multiplicação depende da ordem linhas por colunas. Em geral, A × B ≠ B × A.'
      },
      {
        mistake: 'Tentar Inverter uma Matriz Singular',
        fix: 'Verifique o determinante primeiro. Se det(A) = 0, as linhas são linearmente dependentes e não há inversa.'
      },
      {
        mistake: 'Confundir a Transposta com a Inversa',
        fix: 'A transposta (Aᵀ) apenas troca linhas por colunas. A inversa (A⁻¹) satisfaz A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: 'Computação Gráfica 3D',
        desc: 'Cálculo de matrizes de projeção, visão e modelo (MVP), rotações de câmera e transformações de escala.'
      },
      {
        title: 'Sistemas de Equações Lineares',
        desc: 'Resolução de equações Ax = b através de x = A⁻¹b ou aplicação da regra de Cramer.'
      },
      {
        title: 'Análise de Circuitos e Estruturas',
        desc: 'Montagem de matrizes de admitância nodal e equações de malha em redes elétricas.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora Científica', desc: 'Realize cálculos científicos e conversões trigonométricas.', href: '/', badge: 'Aritmética' },
      { title: 'Calculadora de Cálculo', desc: 'Calcule integrais definidas e derivadas numéricas.', href: '/calculus', badge: 'Análise' },
      { title: 'Suite de Estatística', desc: 'Analise distribuições, variância amostral e regressões lineares.', href: '/statistics', badge: 'Ciência de Dados' }
    ]
  },

  calculus: {
    conceptBadge: 'Análise Matemática',
    conceptTitle: 'Taxas Diferenciais de Variação & Quadratura Numérica',
    conceptDescription: [
      'O cálculo é o estudo da variação contínua. O cálculo diferencial investiga taxas instantâneas de variação (derivadas, inclinação de tangentes), enquanto o cálculo integral quantifica o acúmulo de quantidades (integrais, área sob a curva).',
      'Muitas funções encontradas na prática da engenharia não possuem antiderivadas expressáveis por funções elementares. O cálculo numérico aproxima taxas e áreas com algoritmos discretos de alta precisão.',
      'O SciCalcX implementa quadratura numérica de 4ª ordem pela Regra de Simpson 1/3 Composta para integrais e quocientes de diferenças centrais simétricas para derivadas.'
    ],
    howToSteps: [
      'Insira a função f(x): Use sintaxe algébrica padrão (ex.: x^2, sin(x), e^x, 2*x + 1).',
      'Para Integração Definida: Defina o limite inferior (a) e o limite superior (b), e clique em "Calcular Integral".',
      'Para Derivação Numérica: Especifique o ponto de avaliação x₀ e clique em "Calcular Derivada f\'(x₀)".',
      'Para Raízes Polinomiais: Insira os coeficientes de polinômios quadráticos ou cúbicos e clique em "Encontrar Raízes".',
      'Examine o resultado: Verifique a leitura numérica e certifique-se da continuidade no intervalo.'
    ],
    formulas: [
      {
        title: 'Quociente de Diferença Central Simétrica (Derivada)',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'Avalia diferenças com passo h = 10⁻⁶, cancelando erros de segunda ordem para alcançar precisão O(h²).'
      },
      {
        title: 'Regra de Simpson 1/3 Composta (Integral)',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ ímpar}} f(x_i) + 2\\sum_{i \\text{ par}} f(x_i) + f(x_n) \\right]',
        explanation: 'Divide [a, b] em n = 1000 subintervalos e ajusta parábolas sucessivas para convergência de quarta ordem O(h⁴).'
      },
      {
        title: 'Fórmula Quadrática (Raízes de Grau 2)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'O discriminante Δ = b² - 4ac determina duas raízes reais distintas (Δ > 0), raiz dupla (Δ = 0) ou raízes complexas (Δ < 0).'
      },
      {
        title: 'Teorema Fundamental do Cálculo',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{onde } F\'(x) = f(x)',
        explanation: 'Conecta derivação e integração: a área acumulada equivale à variação de sua antiderivada.'
      }
    ],
    workedExample: {
      title: 'Exemplo Passo a Passo: Integral Definida da Parábola f(x) = x²',
      input: 'f(x) = x^2 no intervalo [0, 3]',
      steps: [
        { label: 'Antiderivada Analítica', expression: '∫ x² dx = x³ / 3 + C', note: 'Regra da potência para integração' },
        { label: 'Avaliação no Limite Superior', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'Substitui b = 3' },
        { label: 'Avaliação no Limite Inferior', expression: 'F(0) = 0³ / 3 = 0.0', note: 'Substitui a = 0' },
        { label: 'Resultado Analítico Exato', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Área líquida sob a curva' },
        { label: 'Resultado Simpson do SciCalcX', expression: 'n = 1000 passos, h = 0.003 ⟹ Resultado = 9.000000', note: 'Exato para polinômios até grau 3' }
      ],
      result: '9.000',
      explanation: 'Como a regra de Simpson utiliza arcos parabólicos, integra polinômios quadráticos com erro de truncamento zero, igualando exatamente a solução analítica 9.'
    },
    howItWorks: {
      title: 'Como o SciCalcX Processa Cálculo no Navegador',
      paragraphs: [
        'Ao inserir f(x), o SciCalcX analisa a expressão construindo uma árvore de sintaxe em Notação Polonesa Reversa com suporte a funções trigonométricas, exponenciais, logaritmos e potências.',
        'Para integrais definidas, divide [a, b] em n = 1000 subintervalos com passo h = (b - a)/1000 e pondera os pontos com os coeficientes de Simpson.',
        'Para derivadas, calcula f(x + h) e f(x - h) com h = 10⁻⁶. A subtração simétrica anula o erro linear, proporcionando uma inclinação estável.'
      ]
    },
    limitations: {
      title: 'Limites de Precisão e Aproximações Numéricas',
      points: [
        'Pontos Não Diferenciáveis: A diferenciação supõe funções suaves. Em cúspides como f(x) = |x| em x = 0, a aproximação gera uma média equivocada.',
        'Assíntotas Verticais: Integrar através de polos (ex.: 1/x de -1 a 1) causa instabilidade ou divergência numérica.',
        'Tamanho do Passo: Embora h = 10⁻⁶ seja ideal para float64, valores excessivamente pequenos (< 10⁻¹²) provocam erros de cancelamento subtrativo.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Inverter os Limites de Integração (Limite inferior > Limite superior)',
        fix: 'Integrar de b a a resulta no oposto de integrar de a a b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Digitar Nomes de Variáveis Incorretos (ex.: f(t) em vez de f(x))',
        fix: 'O motor avalia em relação à variável "x". Utilize sempre "x" ou "X".'
      },
      {
        mistake: 'Esperar Fórmulas Simbólicas em Vez de Valores Numéricos',
        fix: 'O SciCalcX calcula valores numéricos aproximados via quadratura, sem resolução simbólica fechada.'
      }
    ],
    useCases: [
      {
        title: 'Física & Trabalho Mecânico',
        desc: 'Cálculo de trabalho mecânico W = ∫ F(x) dx quando a força varia em função da posição.'
      },
      {
        title: 'Probabilidade & Distribuição Cumulativa',
        desc: 'Cálculo de funções de distribuição acumulada (CDF) por integração de densidades de probabilidade.'
      },
      {
        title: 'Processamento de Sinais & Tensão RMS',
        desc: 'Cálculo do valor eficaz (RMS) de formas de onda periódicas ao longo de um ciclo completo.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora Gráfica', desc: 'Visualize curvas, extremos locais e inclinações de retas tangentes.', href: '/graphing', badge: 'Estúdio Cartesiano' },
      { title: 'Calculadora Científica', desc: 'Avalie expressões trigonométricas e exponenciais com alta precisão.', href: '/', badge: 'Aritmética' },
      { title: 'Tutor de Código & Compilador', desc: 'Escreva e execute rotinas numéricas em Python e C++.', href: '/compiler', badge: 'Sandbox' }
    ]
  },

  graphing: {
    conceptBadge: 'Geometria Analítica',
    conceptTitle: 'Plotagem de Funções 2D & Análise em Coordenadas Cartesianas',
    conceptDescription: [
      'Uma calculadora gráfica 2D converte equações algébricas em curvas geométricas no plano cartesiano. Ao mapear valores de entrada (x) para suas saídas (y = f(x)), os usuários compreendem visualmente propriedades como continuidade, raízes, extremos locais e assíntotas.',
      'A plotagem digital baseia-se em amostragem numérica de alta resolução. O motor avalia coordenadas x ao longo de toda a largura em pixels da tela e projeta segmentos contínuos em um elemento HTML5 Canvas.',
      'O principal desafio em traçados gráficos computadorizados é o tratamento de assíntotas verticais (como em tan(x) ou 1/x). O SciCalcX inclui supressão automática de traçado ao cruzar assíntotas infinitas para evitar linhas conectivas indevidas.'
    ],
    howToSteps: [
      'Defina a função f(x): Digite uma expressão usando a variável x (ex.: x^2 - 4, sin(x), e^(-x^2)).',
      'Adicione uma segunda curva g(x): Opcionalmente insira outra função para comparar curvas e localizar interseções.',
      'Ajuste o plano: Use os botões de zoom (+ / -) ou arraste com mouse/touch para navegar pelas coordenadas.',
      'Consulte as métricas: Veja no cartão de análise as raízes detectadas (interceptos em x), interceptos em y e extremos.',
      'Redefina a visão: Clique em "Redefinir Visão" para retornar à janela padrão [-10, 10].'
    ],
    formulas: [
      {
        title: 'Mapeamento de Pixels para Coordenadas Cartesianas',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Converte a coluna de pixel na tela px (0 à largura) na coordenada x matemática contínua.'
      },
      {
        title: 'Projeção Cartesiana para Pixels da Tela',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Como o HTML5 Canvas orienta o eixo y para baixo, o eixo vertical é invertido para coincidir com a convenção matemática.'
      },
      {
        title: 'Condição para Pontos Críticos (Extremos)',
        math: 'f\'(x) = 0 \\quad \\text{e} \\quad f\'\'(x) \\neq 0',
        explanation: 'Máximos locais ocorrem onde f\'(x) = 0 e f\'\'(x) < 0; mínimos locais onde f\'(x) = 0 e f\'\'(x) > 0.'
      },
      {
        title: 'Limiar de Inclinação para Descontinuidade',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Levantar Caneta}',
        explanation: 'Evita a formação de retas verticais falsas sobre assíntotas quando o gradiente numérico excede o limite físico.'
      }
    ],
    workedExample: {
      title: 'Exemplo Passo a Passo: Análise da Parábola f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Intercepto em Y', expression: 'f(0) = 0² - 4 = -4', note: 'Coordenadas: (0, -4)' },
        { label: 'Interceptos em X (Raízes)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Coordenadas: (-2, 0) e (2, 0)' },
        { label: 'Primeira Derivada f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'Ponto estacionário em x = 0' },
        { label: 'Segunda Derivada f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Curvatura positiva indica mínimo global' },
        { label: 'Vértice & Mínimo Global', expression: 'Mínimo em (0, -4)', note: 'Parábola com concavidade voltada para cima e eixo de simetria x = 0' }
      ],
      result: 'Raízes em x = -2, 2; Vértice em (0, -4)',
      explanation: 'O SciCalcX traça a parábola contínua destacando o vértice em (0, -4) e os cruzamentos de zero em x = -2 e x = 2 no plano cartesiano.'
    },
    howItWorks: {
      title: 'Como o SciCalcX Desenha Gráficos no Navegador',
      paragraphs: [
        'O SciCalcX desenha curvas de forma nativa com HTML5 Canvas 2D sem bibliotecas pesadas de terceiros, garantindo respostas rápidas ao arrastar e aproximar.',
        'Para cada coluna de pixel, converte coordenadas de tela em valores matemáticos x, executa a pilha RPN e mapeia os valores calculados de y de volta para a tela.',
        'Quando ocorre um salto abrupto na descontinuidade de assíntotas, a rotina interrompe o traçado para evitar conexões artificiais.'
      ]
    },
    limitations: {
      title: 'Limites de Resolução e Discretização Gráfica',
      points: [
        'Discretização em Pixels: Variações menores que um pixel da tela necessitam de zoom para visualização detalhada.',
        'Oscilações de Alta Frequência: Funções como sin(1/x) próximas de 0 oscilam em taxa superior à amostragem, gerando efeitos de aliasing.',
        'Escalas Extremas: Afastar além de 10¹⁰ ou aproximar além de 10⁻¹² atinge as restrições de precisão do padrão IEEE-754.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Omitir Parênteses em Denominadores Racionais (ex.: "1/x+1")',
        fix: '"1/x+1" é interpretado como (1/x) + 1. Digite "1/(x+1)" para posicionar a assíntota vertical em x = -1.'
      },
      {
        mistake: 'Plotar Funções Fora do Campo Visível',
        fix: 'Se a curva não aparecer, clique em "Afastar" ou verifique os valores esperados para y.'
      },
      {
        mistake: 'Uso Incorreto de Constantes',
        fix: 'Use "pi" ou "π" para pi, e "e" para a constante de Euler.'
      }
    ],
    useCases: [
      {
        title: 'Estudo de Curvas Polinomiais',
        desc: 'Verificação de raízes, pontos de inflexão e comportamento assintótico em tarefas de matemática.'
      },
      {
        title: 'Formas de Onda Trigonométricas',
        desc: 'Visualização de modulação de amplitude, duplicação de frequência (sin(2x)) e defasagens em física.'
      },
      {
        title: 'Economia & Otimização',
        desc: 'Construção de curvas de custo, receita e lucro para determinação de ponto de equilíbrio.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora de Cálculo', desc: 'Calcule derivadas numéricas de alta precisão e integrais de Simpson.', href: '/calculus', badge: 'Análise' },
      { title: 'Calculadora Científica', desc: 'Avalie razões trigonométricas e logaritmos.', href: '/', badge: 'Aritmética' },
      { title: 'Suite de Estatística', desc: 'Calcule variância amostral, desvio padrão e regressão linear.', href: '/statistics', badge: 'Ciência de Dados' }
    ]
  },

  statistics: {
    conceptBadge: 'Ciência de Dados & Probabilidade',
    conceptTitle: 'Estatística Descritiva, Tendência Central & Correção de Bessel',
    conceptDescription: [
      'A estatística descritiva resume e quantifica as propriedades essenciais de um conjunto de dados numéricos. Em vez de examinar centenas de medições isoladas, métricas síntese descrevem a tendência central (média, mediana, moda) e a dispersão (amplitude, variância, desvio padrão).',
      'Uma distinção central na teoria estatística reside entre a população (universo completo) e a amostra (subconjunto representativo). Ao calcular a variância de uma amostra dividindo a soma dos desvios quadráticos por N, subestima-se sistematicamente a variância populacional real.',
      'Para neutralizar esse viés, a correção de Bessel utiliza N - 1 graus de liberdade na variância amostral (s²). O SciCalcX calcula conjuntamente as métricas amostrais (s², s) e populacionais (σ², σ).'
    ],
    howToSteps: [
      'Insira seu conjunto de dados: Digite números separados por vírgulas, espaços ou quebras de linha.',
      'Clique em "Carregar Dados de Exemplo": Use para testar imediatamente com um conjunto de dados científico pré-formatado.',
      'Analise a Tendência Central: Observe a Média, Mediana e Moda na grade principal.',
      'Examine a Dispersão: Avalie a Amplitude, Variância Amostral (s²), Variância Populacional (σ²) e Desvios Padrão.',
      'Salve no Histórico: Clique em "Salvar análise no histórico" para preservar seu resumo localmente.'
    ],
    formulas: [
      {
        title: 'Média Aritmética',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'O ponto de equilíbrio da amostra: soma de todos os valores dividida pelo total de observações n.'
      },
      {
        title: 'Variância Amostral (Correção de Bessel)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Divide a soma dos quadrados por n - 1 graus de liberdade para obter um estimador não tendencioso da variância populacional.'
      },
      {
        title: 'Variância Populacional',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Utilizada quando o conjunto de dados engloba a totalidade da população investigada.'
      },
      {
        title: 'Desvio Padrão',
        math: 's = \\sqrt{s^2} \\quad \\text{e} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'A raiz quadrada da variância, trazendo a dispersão para a mesma unidade de medida dos dados originais.'
      }
    ],
    workedExample: {
      title: 'Exemplo Passo a Passo: Variância Amostral para [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Dados: 2, 4, 4, 4, 5, 5, 7, 9 (n = 8)',
      steps: [
        { label: 'Passo 1: Soma e Média', expression: 'Soma = 40 ⟹ Média x̄ = 40 / 8 = 5.0', note: 'O valor médio é 5,0' },
        { label: 'Passo 2: Desvios (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Subtrai a média de cada elemento' },
        { label: 'Passo 3: Desvios Quadráticos', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Eleva cada desvio ao quadrado' },
        { label: 'Passo 4: Soma dos Quadrados (SS)', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Soma total dos desvios ao quadrado' },
        { label: 'Passo 5: Variância Amostral (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Dividido por n - 1 = 7 (correção de Bessel)' },
        { label: 'Passo 6: Desvio Padrão Amostral (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Raiz quadrada da variância amostral' }
      ],
      result: 'Média = 5.0, Mediana = 4.5, Moda = 4, s² ≈ 4.5714, σ² = 4.0',
      explanation: 'Note a diferença: A variância populacional divide 32 por 8 (= 4,0), enquanto a amostral divide por 7 (≈ 4,5714) para corrigir a distorção da estimativa amostral.'
    },
    howItWorks: {
      title: 'Como o SciCalcX Calcula Estatística no Navegador',
      paragraphs: [
        'O SciCalcX processa os dados com uma expressão regular que divide em vírgulas, espaços e quebras de linha, convertendo os termos em float64.',
        'Os dados são ordenados para cálculo da mediana (elemento central em quantidades ímpares ou média dos dois centrais em quantidades pares) e apuração da moda.',
        'A soma dos desvios quadráticos utiliza um algoritmo de duas passagens: a primeira calcula a média exata e a segunda acumula (x - x̄)², evitando o cancelamento numérico de rotinas de passagem única.'
      ]
    },
    limitations: {
      title: 'Limites de Precisão e Premissas Estatísticas',
      points: [
        'Tamanho Amostral Mínimo: A variância amostral requer ao menos duas observações (n ≥ 2), pois dividir por n - 1 com n = 1 resulta em divisão por zero.',
        'Sensibilidade a Valores Discrepantes: A média e a variância são sensíveis a outliers. Em distribuições assimétricas, a mediana é mais confiável.',
        'Conjuntos Multimodais: Se múltiplos valores compartilham a frequência máxima mais alta, a calculadora exibe todas as modas separadas por vírgulas.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Usar Variância Populacional (σ²) em Vez de Amostral (s²) em Relatórios Acadêmicos',
        fix: 'Experimentos quase sempre representam amostras. Utilize s² com a correção de Bessel (n - 1).'
      },
      {
        mistake: 'Confundir as Unidades da Variância e do Desvio Padrão',
        fix: 'A variância é expressa em unidades ao quadrado (ex.: m²); o desvio padrão na unidade original (m).'
      },
      {
        mistake: 'Achar que Variância Zero Implica Valores Iguais a Zero',
        fix: 'Variância zero significa que todos os dados são idênticos (ex.: [5, 5, 5]), e não que os valores são nulos.'
      }
    ],
    useCases: [
      {
        title: 'Erros Experimentais de Laboratório',
        desc: 'Quantificação de incertezas, dispersão de medidas e erros aleatórios em aulas práticas de física e química.'
      },
      {
        title: 'Controle de Qualidade & Six Sigma',
        desc: 'Monitoramento de tolerâncias de fabricação e variabilidade de processos em linhas industriais.'
      },
      {
        title: 'Risco Financeiro & Volatilidade',
        desc: 'Análise de dispersão de retornos e cálculo do desvio padrão histórico de ações.'
      }
    ],
    relatedTools: [
      { title: 'Calculadora Científica', desc: 'Realize cálculos científicos e exponenciais.', href: '/', badge: 'Aritmética' },
      { title: 'Calculadora de Cálculo', desc: 'Integre funções de densidade de probabilidade contínuas.', href: '/calculus', badge: 'Análise' },
      { title: 'Calculadora Gráfica', desc: 'Plote distribuições e curvas de funções no plano cartesiano.', href: '/graphing', badge: 'Cartesiano' }
    ]
  },

  programming: {
    conceptBadge: 'Arquitetura de Computadores & Sistemas',
    conceptTitle: 'Sistemas Numéricos em Base-N, Bitboards & Complemento de Dois de 32 Bits',
    conceptDescription: [
      'O hardware de computação digital opera integralmente em binário (Base-2). Para que sequências de bits se tornem compreensíveis para programadores, a ciência da computação adota representações em hexadecimal (Base-16) e octal (Base-8), agrupando bits em nibbles (4 bits) e bytes (8 bits).',
      'Microprocessadores modernos representam inteiros negativos através do Complemento de Dois. Em um inteiro sinalizado de 32 bits (int32), o bit mais significativo (Bit 31) é o bit de sinal: 0 representa valores positivos ou zero, e 1 representa negativos. Inverter todos os bits e somar um permite que o mesmo hardware somador execute adições e subtrações.',
      'O SciCalcX disponibiliza um bitboard visual interativo de 32 bits onde você pode alternar individualmente os bits de 31 a 0, acompanhando conversões simultâneas entre Hexadecimal, Decimal, Octal e Binário.'
    ],
    howToSteps: [
      'Selecione a base ativa: Clique em HEX, DEC, OCT ou BIN para definir o visor como campo de entrada ativo.',
      'Digite um valor: Digite caracteres numéricos ou hexadecimais (A-F) usando o teclado ou o painel na tela.',
      'Alterne bits no tabuleiro: Clique nas caixas de bits (0 a 31) para inverter seu estado binário e ver a atualização decimal instantânea.',
      'Aplique lógica bitwise: Clique em NOT (~), LSH (<<) ou RSH (>>) para transformações imediatas de bits.',
      'Inverta o sinal: Use a tecla "+/-" para observar a inversão de sinal por complemento de dois.'
    ],
    formulas: [
      {
        title: 'Expansão Posicional em Base-N',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Todo número é avaliado como a soma de seus coeficientes multiplicados pelas potências da base b (b = 2, 8, 10 ou 16).'
      },
      {
        title: 'Inversão em Complemento de Dois',
        math: '-x = (\\sim x) + 1',
        explanation: 'Inverte todos os 32 bits (complemento de um) e adiciona 1 ao bit menos significativo.'
      },
      {
        title: 'Operadores Lógicos Bit a Bit',
        math: 'A \\& B \\text{ (AND)}, \\quad A \\mid B \\text{ (OR)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'AND resulta 1 somente se ambos forem 1; OR se pelo menos um for 1; XOR se os bits forem distintos.'
      },
      {
        title: 'Operações de Deslocamento de Bits (Shifts)',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{e} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'Deslocar k bits à esquerda multiplica por 2ᵏ; deslocar à direita divide por 2ᵏ (com arredondamento para o infinito negativo).'
      }
    ],
    workedExample: {
      title: 'Exemplo Passo a Passo: NOT Bit a Bit & Complemento de Dois de 42',
      input: 'Valor Decimal = 42',
      steps: [
        { label: 'Passo 1: Representação Binária', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bits 5, 3 e 1 ativos (32 + 8 + 2 = 42)' },
        { label: 'Passo 2: Equivalente Hexadecimal', expression: 'Hex = 0x0000002A', note: '2 no nibble superior, A (=10) no inferior' },
        { label: 'Passo 3: NOT Bit a Bit (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Todo 0 inverte para 1 e todo 1 para 0' },
        { label: 'Passo 4: Avaliação com Sinal de 32 Bits', expression: '~42 = -43 em decimal (Complemento de Dois)', note: 'Fórmula: ~x = -(x + 1)' },
        { label: 'Passo 5: Deslocamento à Esquerda (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'Bits deslocados 1 posição à esquerda (multiplica por 2)' }
      ],
      result: 'Decimal 42 = Hex 2A = Bin 101010₂; ~42 = -43',
      explanation: 'O SciCalcX sincroniza os 32 bits no tabuleiro, demonstrando como o complemento de dois traduz sequências de bits diretamente em números decimais negativos.'
    },
    howItWorks: {
      title: 'Como o SciCalcX Executa Lógica de 32 Bits no Navegador',
      paragraphs: [
        'Os operadores bitwise do JavaScript (|, &, ^, ~, <<, >>) convertem operandos automaticamente em inteiros de 32 bits com sinal em formato de complemento de dois antes do cálculo.',
        'O SciCalcX mantém um estado inteiro int32. Quando um bit ou operador é acionado, máscaras dinâmicas ((val >>> bit) & 1) redesenham os 32 botões do bit 31 ao bit 0.',
        'As conversões para strings Hexadecimal, Decimal, Octal e Binária ocorrem localmente em milissegundos para uma resposta imediata de nível de hardware.'
      ]
    },
    limitations: {
      title: 'Limites de Precisão e Fronteiras de Inteiros',
      points: [
        'Faixa de 32 Bits com Sinal: Opera estritamente entre -2.147.483.648 (-2³¹) e +2.147.483.647 (+2³¹ - 1).',
        'Comportamento em Transbordamento: Incrementar além de +2.147.483.647 retorna para valores negativos (-2.147.483.648), conforme o padrão de arquitetura de CPUs.',
        'Deslocamento Cíclico: Deslocar por múltiplos de 32 gira ciclicamente (ex.: x << 32 equivale a x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Achar que o Deslocamento Aritmético com Sinal (>>) Preenche com Zeros em Números Negativos',
        fix: 'O deslocamento aritmético (>>) preserva o bit de sinal (preenche com 1s). Para preencher com 0s use o deslocamento sem sinal (>>>).'
      },
      {
        mistake: 'Confundir NOT Bit a Bit (~) com NOT Lógico (!)',
        fix: 'NOT bit a bit inverte todos os 32 bits (~0 = -1). NOT lógico avalia valores de verdade booleanos.'
      },
      {
        mistake: 'Digitar Caracteres Inválidos para a Base Escolhida (ex.: "8" em Octal)',
        fix: 'Octal aceita somente 0–7; Binário 0 e 1; Hexadecimal 0–9 e letras A–F.'
      }
    ],
    useCases: [
      {
        title: 'Sistemas Embarcados & Microcontroladores',
        desc: 'Inspeção de registradores de controle, máscaras de pinos GPIO e campos de bits em microcontroladores.'
      },
      {
        title: 'Decodificação de Cabeçalhos de Rede',
        desc: 'Aplicação de máscaras em pacotes IP/TCP para extrair números de portas, flags e máscaras de sub-rede.'
      },
      {
        title: 'Desenvolvimento de Jogos & Otimização',
        desc: 'Uso de bitboards para representar posições de xadrez ou máscaras de colisão avaliadas em um único ciclo de instrução.'
      }
    ],
    relatedTools: [
      { title: 'Tutor de Código & Compilador', desc: 'Escreva, compile e teste algoritmos de manipulação de bits em C++ e Python.', href: '/compiler', badge: 'Sandbox' },
      { title: 'Calculadora Científica', desc: 'Realize cálculos científicos e potências.', href: '/', badge: 'Aritmética' },
      { title: 'Calculadora de Matrizes', desc: 'Calcule determinantes e operações matriciais.', href: '/matrix', badge: 'Álgebra Linear' }
    ]
  }
};
