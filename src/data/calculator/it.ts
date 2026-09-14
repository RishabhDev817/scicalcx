import type { CalculatorPedagogyData } from '../calculatorData';

export const itPedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Fondamenti Matematici',
    conceptTitle: 'Gerarchia Algebrica e Sistemi di Virgola Mobile',
    conceptDescription: [
      'Una calcolatrice scientifica valuta espressioni matematiche composte attenendosi a rigorose regole di precedenza degli operatori, formalizzate come PEMDAS o BODMAS (Parentesi, Esponenti, Moltiplicazione e Divisione, Addizione e Sottrazione). Nel calcolo di formule nidificate come 3 + 4 × 2 / (1 - 5)^2, il motore posticipa l\'addizione fino alla risoluzione di tutte le parentesi, potenze e moltiplicazioni.',
      'I microprocessori moderni eseguono i calcoli in virgola mobile secondo lo standard IEEE 754 per la doppia precisione binaria (float64). Poiché alcune frazioni in base 10 (come 0.1 o 0.2) hanno espansioni periodiche infinite in binario, l\'aritmetica binaria diretta introduce inevitabili imprecisioni di arrotondamento (es. 0.1 + 0.2 = 0.30000000000000004). SciCalcX applica un algoritmo di soglia epsilon per preservare rappresentazioni decimali esatte a 12 cifre decimali.',
      'Le funzioni trigonometriche (seno, coseno, tangente) operano su scale angolari continue. Comprendere se l\'input è in radianti (dove 2π corrisponde a 360°) o in gradi sessagesimali (DEG) è fondamentale per l\'accuratezza dei calcoli in fisica, geometria e ingegneria.'
    ],
    howToSteps: [
      'Seleziona l\'unità angolare: Usa il selettore DEG/RAD nella barra di stato per scegliere Gradi o Radianti.',
      'Inserisci l\'espressione: Digita direttamente tramite tastiera fisica o clicca sui pulsanti a schermo.',
      'Usa le parentesi per raggruppare i termini: Raggruppa numeratori o denominatori per forzare l\'ordine di valutazione desiderato.',
      'Esegui il calcolo: Premi "=" sul tastierino o Invio sulla tastiera fisica.',
      'Formatta l\'output: Premi il tasto S-D per alternare tra valore decimale e frazione esatta.'
    ],
    formulas: [
      {
        title: 'Precedenza degli Operatori (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Gli operatori di pari rango sono valutati da sinistra a destra; la negazione unaria e le potenze si associano da destra.'
      },
      {
        title: 'Conversione Gradi in Radianti',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'Tutte le funzioni trigonometriche interne del processore valutano in radianti. In modalità DEG, SciCalcX effettua la conversione prima del calcolo.'
      },
      {
        title: 'Cambiamento di Base nei Logaritmi',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'Il logaritmo naturale (ln) utilizza la base e ≈ 2,71828; il logaritmo decimale (log) impiega la base 10.'
      },
      {
        title: 'Normalizzazione di Precisione Epsilon',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'Il filtro con soglia epsilon elimina il rumore di arrotondamento binario IEEE-754 per mostrare espansioni decimali pulite.'
      }
    ],
    workedExample: {
      title: 'Esempio Svolto: Espressione Composta Multi-Operazione',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Passaggio 1: Trigonometria', expression: 'sin(30°) = 0.5', note: 'In modalità DEG, sin(30°) è pari a 1/2' },
        { label: 'Passaggio 2: Moltiplicazione', expression: '4 × 0.5 = 2.0', note: 'Valutazione del prodotto a sinistra' },
        { label: 'Passaggio 3: Radice Quadrata', expression: '√(25) = 5.0', note: 'Calcolo della funzione radicale' },
        { label: 'Passaggio 4: Esponenziazione', expression: '2^3 = 8.0', note: 'Calcolo di 2 elevato alla terza' },
        { label: 'Passaggio 5: Addizione e Sottrazione', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Valutazione lineare da sinistra a destra' }
      ],
      result: '-1',
      explanation: 'Rispettando la precedenza algebrica, parentesi, radici e potenze vengono calcolate prima di addizioni e sottrazioni, restituendo esattamente -1.'
    },
    howItWorks: {
      title: 'Come SciCalcX Calcola le Espressioni nel Browser',
      paragraphs: [
        'SciCalcX adotta un motore di parsing a due stadi scritto interamente in TypeScript client-side. Nel primo stadio (tokenizzazione lessicale), la stringa di input viene scansionata in token discreti per numeri, variabili, costanti (π, e), operatori e funzioni.',
        'Nel secondo stadio, l\'algoritmo Shunting-Yard converte la notazione infissa in Notazione Polacca Inversa (RPN) mediante stack di operatori e operandi. Eventuali parentesi spaiate vengono segnalate prima dell\'esecuzione.',
        'Infine, una macchina a stack RPN valuta l\'espressione con registri float64 in doppia precisione IEEE-754, applicando la normalizzazione epsilon prima della visualizzazione.'
      ]
    },
    limitations: {
      title: 'Limiti di Precisione e Confini Numerici',
      points: [
        'Overflow in Virgola Mobile: I valori superiori a ±1,7976931348623157 × 10³⁰⁸ generano Infinity.',
        'Underflow in Virgola Mobile: Valori diversi da zero inferiori a ±5,0 × 10⁻³²⁴ convergono a 0.',
        'Restrizioni di Dominio: Radici quadrate di numeri negativi o ln(x) per x ≤ 0 producono un errore di dominio esplicito.',
        'Singolarità Trigonometriche: tan(90°) o tan(270°) restituiscono valori finiti enormi o indefiniti a causa dell\'approssimazione di π/2.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Parentesi Non Bilanciate: es. "(2 + 3 * (4 - 1)"',
        fix: 'Verifica il contatore di parentesi in basso a sinistra per accertarti che ogni "(" sia chiusa da una ")".'
      },
      {
        mistake: 'Confusione tra Gradi e Radianti: sin(90) restituisce 0.89399 anziché 1',
        fix: '0.89399 è sin(90 rad). Sposta il selettore superiore su DEG per ottenere sin(90°) = 1.'
      },
      {
        mistake: 'Moltiplicazione Implicita Ambigua: Inserire "2(3+4)" senza operatore',
        fix: 'Usa un operatore esplicito: "2 * (3 + 4)" per garantire un\'interpretazione priva di ambiguità.'
      }
    ],
    useCases: [
      {
        title: 'Fisica e Cinematica',
        desc: 'Scomposizione di vettori di forza in componenti ortogonali con seno e coseno e calcolo di traiettorie paraboliche.'
      },
      {
        title: 'Ingegneria Elettrica',
        desc: 'Calcolo di impedenze reattive in corrente alternata, angoli di sfasamento e rapporti logaritmici in decibel (20 log(V_out / V_in)).'
      },
      {
        title: 'Analisi Matematica e STEM',
        desc: 'Verifica di derivazioni algebriche, studio di polinomi fratti e modellazione di curve di crescita esponenziale.'
      }
    ],
    relatedTools: [
      { title: 'Calcolatrice per Matrici', desc: 'Risolvi sistemi lineari, determinanti e inverse di matrici.', href: '/matrix', badge: 'Algebra Lineare' },
      { title: 'Calcolatrice di Analisi', desc: 'Calcola integrali definiti con la regola di Simpson e derivate numeriche.', href: '/calculus', badge: 'Analisi' },
      { title: 'Calcolatrice Grafica', desc: 'Traccia curve cartesiane 2D e analizza zeri e asintoti dinamicamente.', href: '/graphing', badge: 'Geometria' }
    ]
  },

  matrix: {
    conceptBadge: 'Fondamenti di Algebra Lineare',
    conceptTitle: 'Trasformazioni Matriciali, Determinanti e Spazi Vettoriali',
    conceptDescription: [
      'Una matrice è una tabella rettangolare di numeri disposti su m righe e n colonne. In matematica e informatica, le matrici rappresentano trasformazioni lineari che scalano, ruotano, riflettono o deformano spazi vettoriali multidimensionali.',
      'La moltiplicazione tra matrici è non commutativa: per due matrici A e B, in generale A × B ≠ B × A. Inoltre, richiede che le dimensioni interne siano compatibili: una matrice m × k può moltiplicare solo una matrice k × n, producendo una matrice m × n.',
      'Il determinante, det(A), è uno scalare che caratterizza le matrici quadrate. Geometricamente, misura il fattore di scala con cui una trasformazione modifica aree (in 2D) o volumi (in 3D). Una matrice è invertibile se e solo se det(A) ≠ 0.'
    ],
    howToSteps: [
      'Seleziona le dimensioni: Scegli 2x2 o 3x3 per la Matrice A e la Matrice B.',
      'Inserisci i coefficienti: Digita i valori numerici (interi o decimali) nelle celle della griglia.',
      'Scegli l\'operazione binaria: Clicca su Addizione (A + B), Sottrazione (A - B) o Moltiplicazione (A × B).',
      'Calcola proprietà unarie: Clicca su Determinante, Inversa o Trasposta sulla Matrice A.',
      'Consulta i passaggi: Esamina la spiegazione dettagliata sotto la griglia dei risultati.'
    ],
    formulas: [
      {
        title: 'Regola del Prodotto Matriciale',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Ogni elemento della matrice prodotto C è il prodotto scalare tra la riga i di A e la colonna j di B.'
      },
      {
        title: 'Formula del Determinante 2×2',
        math: '\\det(A) = ad - bc \\quad \\text{per } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'Differenza tra il prodotto della diagonale principale e il prodotto della diagonale secondaria.'
      },
      {
        title: 'Sviluppo di Laplace 3×3',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Sviluppo lungo la prima riga a segni alterni utilizzando i minori complementari 2×2.'
      },
      {
        title: 'Inversa della Matrice tramite Aggiunta',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'Esiste solo se det(A) ≠ 0; corrisponde alla trasposta della matrice dei cofattori divisa per il determinante.'
      }
    ],
    workedExample: {
      title: 'Esempio Svolto: Inversione di una Matrice 2×2',
      input: 'Matrice A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Passaggio 1: Determinante', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, l\'inversa esiste' },
        { label: 'Passaggio 2: Scambio Diagonale Principale', expression: 'a ↔ d: [6, 4]', note: 'Scambio di A[0,0] con A[1,1]' },
        { label: 'Passaggio 3: Cambio Segno Diagonale Secondaria', expression: 'b → -7, c → -2', note: 'Inverte il segno di A[0,1] e A[1,0]' },
        { label: 'Passaggio 4: Matrice Aggiunta', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Costruzione della matrice aggiunta' },
        { label: 'Passaggio 5: Divisione per Scalare', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Moltiplica ogni termine per 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Verifica: A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], la matrice identità 2×2.'
    },
    howItWorks: {
      title: 'Come SciCalcX Gestisce le Matrici nel Browser',
      paragraphs: [
        'SciCalcX esegue tutti i calcoli matriciali direttamente nel browser mediante array tipizzati JavaScript. I valori inseriti vengono verificati gestendo numeri negativi e decimali con fluidità.',
        'Per matrici 2×2 il determinante applica la relazione ad - bc, mentre i sistemi 3×3 valutano lo sviluppo di Laplace. L\'inversione verifica la non singolarità (|det| < 1e-12) prima della divisione.',
        'I risultati passano attraverso una normalizzazione epsilon per evitare che residui di virgola mobile prossimi a zero vengano visualizzati come 1e-16.'
      ]
    },
    limitations: {
      title: 'Limiti di Precisione e Algebra Lineare',
      points: [
        'Matrici Singolari: Se det(A) = 0, la matrice non è invertibile. Il calcolatore mostra "Matrice Singolare (det = 0)".',
        'Sistemi Mal Condizionati: Determinanti vicinissimi allo zero possono produrre instabilità numerica nelle divisioni.',
        'Dimensioni Supportate: Lo strumento è ottimizzato per matrici 2×2 e 3×3, standard nell\'insegnamento universitario e nella grafica 3D.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Ritenere che il Prodotto Matriciale sia Commutativo (A × B = B × A)',
        fix: 'Il prodotto dipende dall\'ordine righe per colonne. In generale, A × B ≠ B × A.'
      },
      {
        mistake: 'Tentare di Invertire una Matrice Singolare',
        fix: 'Controlla prima il determinante. Se det(A) = 0, le righe sono linearmente dipendenti e l\'inversa non esiste.'
      },
      {
        mistake: 'Confondere la Trasposta con l\'Inversa',
        fix: 'La trasposta (Aᵀ) scambia righe e colonne. L\'inversa (A⁻¹) soddisfa A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: 'Grafica Computerizzata 3D',
        desc: 'Calcolo di matrici di trasformazione MVP (Model-View-Projection), rotazioni di camera e matrici di scala.'
      },
      {
        title: 'Sistemi di Equazioni Lineari',
        desc: 'Risoluzione di sistemi simultanei Ax = b tramite inversione x = A⁻¹b o regola di Cramer.'
      },
      {
        title: 'Analisi Reticolare e Circuitale',
        desc: 'Costruzione di matrici di ammettenza ai nodi e bilancio delle correnti di maglia in elettrotecnica.'
      }
    ],
    relatedTools: [
      { title: 'Calcolatrice Scientifica', desc: 'Esegui calcoli scientifici e conversioni trigonometriche.', href: '/', badge: 'Aritmetica' },
      { title: 'Calcolatrice di Analisi', desc: 'Calcola integrali definiti e derivate numeriche.', href: '/calculus', badge: 'Analisi' },
      { title: 'Suite di Statistica', desc: 'Analizza distribuzioni, varianza e modelli di regressione.', href: '/statistics', badge: 'Data Science' }
    ]
  },

  calculus: {
    conceptBadge: 'Analisi Matematica',
    conceptTitle: 'Tassi di Variazione Differenziali e Quadratura Numerica',
    conceptDescription: [
      'Il calcolo infinitesimale è lo studio matematico della variazione continua. Il calcolo differenziale studia i tassi istantanei di variazione (derivate, pendenze delle rette tangenti), mentre il calcolo integrale misura l\'accumulo di grandezze (integrali, area sottesa a una curva).',
      'Molte funzioni della pratica ingegneristica non posseggono primitive esprimibili in termini di funzioni elementari. L\'analisi numerica approssima tassi e aree mediante algoritmi di campionamento discreto ad alta precisione.',
      'SciCalcX adotta una quadratura di quarto ordine basata sulla Regola di Simpson 1/3 Composta per gli integrali e rapporti incrementali simmetrici centrali per le derivate.'
    ],
    howToSteps: [
      'Inserisci la funzione f(x): Usa la sintassi algebrica comune (es. x^2, sin(x), e^x, 2*x + 1).',
      'Per Integrali Definiti: Imposta l\'estremo inferiore (a) e superiore (b), quindi clicca su "Calcola Integrale".',
      'Per Derivate Numeriche: Specifica il punto di valutazione x₀ e clicca su "Calcola Derivata f\'(x₀)".',
      'Per Radici di Polinomi: Inserisci i coefficienti per polinomi di 2° o 3° grado e clicca su "Trova Radici".',
      'Esamina il risultato: Controlla la lettura numerica ed esamina eventuali discontinuità nel dominio.'
    ],
    formulas: [
      {
        title: 'Differenza Finita Centrale Simmetrica (Derivata)',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'Valuta differenze con passo h = 10⁻⁶, annullando gli errori di secondo ordine per una precisione O(h²).'
      },
      {
        title: 'Regola di Simpson 1/3 Composta (Integrale)',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ dispari}} f(x_i) + 2\\sum_{i \\text{ pari}} f(x_i) + f(x_n) \\right]',
        explanation: 'Suddivide [a, b] in n = 1000 sottointervalli approssimando la curva con archi parabolici a convergenza di quarto ordine O(h⁴).'
      },
      {
        title: 'Formula Risolutiva Quadratica (Radici di Grado 2)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Il discriminante Δ = b² - 4ac determina due radici reali distinte (Δ > 0), una radice doppia (Δ = 0) o radici complesse (Δ < 0).'
      },
      {
        title: 'Teorema Fondamentale del Calcolo Integrale',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{con } F\'(x) = f(x)',
        explanation: 'Lega derivazione e integrazione: l\'area netta accumulata è pari alla variazione della sua primitiva.'
      }
    ],
    workedExample: {
      title: 'Esempio Svolto: Integrale Definito della Parabola f(x) = x²',
      input: 'f(x) = x^2 nell\'intervallo [0, 3]',
      steps: [
        { label: 'Primitiva Analitica', expression: '∫ x² dx = x³ / 3 + C', note: 'Regola standard della potenza per l\'integrazione' },
        { label: 'Valutazione Estremo Superiore', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'Sostituzione di b = 3' },
        { label: 'Valutazione Estremo Inferiore', expression: 'F(0) = 0³ / 3 = 0.0', note: 'Sostituzione di a = 0' },
        { label: 'Risultato Analitico Esatto', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Area netta sottesa alla curva' },
        { label: 'Uscita Simpson di SciCalcX', expression: 'n = 1000 passi, h = 0.003 ⟹ Risultato = 9.000000', note: 'Esatto per polinomi fino al 3° grado' }
      ],
      result: '9.000',
      explanation: 'Poiché la regola di Simpson adotta archi parabolici, integra i polinomi quadratici con errore di troncamento nullo, eguagliando esattamente il valore analitico 9.'
    },
    howItWorks: {
      title: 'Come SciCalcX Calcola l\'Analisi nel Browser',
      paragraphs: [
        'All\'inserimento di f(x), SciCalcX compila un albero sintattico in Notazione Polacca Inversa che supporta sin, cos, tan, exp, ln, log, sqrt e potenze.',
        'Per gli integrali definiti, il motore divide [a, b] in n = 1000 intervalli con passo h = (b - a)/1000 e applica i coefficienti di ponderazione della regola di Simpson.',
        'Per le derivate, calcola f(x + h) e f(x - h) con h = 10⁻⁶; la differenza simmetrica cancella l\'errore lineare garantendo una stima robusta della pendenza.'
      ]
    },
    limitations: {
      title: 'Limiti di Precisione e Approssimazione Numerica',
      points: [
        'Punti Non Derivabili: La derivazione numerica assume regolarità; in punti angolosi come f(x) = |x| a x = 0, il rapporto fornisce una media imprecisa.',
        'Asintoti Verticali: L\'integrazione attraverso poli (es. 1/x da -1 a 1) produce instabilità o sommatorie divergenti.',
        'Scelta del Passo h: Sebbene h = 10⁻⁶ sia ottimale in float64, un passo inferiore a 10⁻¹² causa errori di cancellazione numerica.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Inversione degli Estremi di Integrazione (Estremo inferiore > Estremo superiore)',
        fix: 'Integrare da b ad a produce l\'opposto dell\'integrazione da a a b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Utilizzo di Nomi Variabili Errati (es. digitare f(t) invece di f(x))',
        fix: 'Il motore effettua i calcoli rispetto alla variabile "x". Assicurati di usare "x" o "X".'
      },
      {
        mistake: 'Attesa di Risultati Simbolici in Forma Chiusa',
        fix: 'SciCalcX calcola valori numerici precisi tramite quadratura numerica e non formule algebriche chiuse.'
      }
    ],
    useCases: [
      {
        title: 'Fisica e Lavoro Meccanico',
        desc: 'Calcolo del lavoro W = ∫ F(x) dx quando la forza varia con continuità in funzione della posizione.'
      },
      {
        title: 'Probabilità e Funzione di Ripartizione',
        desc: 'Integrazione numerica di funzioni di densità di probabilità (PDF) per ricavare probabilità cumulate (CDF).'
      },
      {
        title: 'Elaborazione Segnali e Valore Efficace (RMS)',
        desc: 'Calcolo del valore quadratico medio (RMS) di forme d\'onda periodiche alternate su un ciclo completo.'
      }
    ],
    relatedTools: [
      { title: 'Calcolatrice Grafica', desc: 'Visualizza curve, estremi locali e tangenti in tempo reale.', href: '/graphing', badge: 'Studio Cartesiano' },
      { title: 'Calcolatrice Scientifica', desc: 'Valuta espressioni trigonometriche ed esponenziali ad alta precisione.', href: '/', badge: 'Aritmetica' },
      { title: 'Code Tutor & Compilatore', desc: 'Scrivi ed esegui script di simulazione numerica in Python e C++.', href: '/compiler', badge: 'Sandbox' }
    ]
  },

  graphing: {
    conceptBadge: 'Geometria Analitica',
    conceptTitle: 'Tracciamento Funzioni 2D e Analisi in Coordinate Cartesiane',
    conceptDescription: [
      'Una calcolatrice grafica 2D converte equazioni algebriche astratte in curve geometriche sul piano cartesiano. Associando i valori di input (x) alle rispettive uscite (y = f(x)), è possibile visualizzare continuità, radici, estremi e asintoti.',
      'Il tracciamento digitale si basa su campionamento numerico ad alta risoluzione: il motore campiona coordinate x lungo l\'intera larghezza in pixel dello schermo, calcola i valori e disegna segmenti continui su un canvas HTML5.',
      'La gestione degli asintoti verticali e delle discontinuità (come in tan(x) o 1/x) è fondamentale: SciCalcX include algoritmi di soppressione che interrompono il tratto in corrispondenza dei salti infiniti per evitare collegamenti spuri.'
    ],
    howToSteps: [
      'Definisci la funzione f(x): Digita un\'espressione contenente la variabile x (es. x^2 - 4, sin(x), e^(-x^2)).',
      'Aggiungi una seconda curva g(x): Facoltativo per confrontare funzioni e individuare punti di intersezione.',
      'Regola la visuale: Usa i tasti di zoom (+ / -) o trascina con il mouse/touchscreen per scorrere il piano.',
      'Esamina i parametri chiave: Consulta la scheda di analisi per individuare zeri (intersezioni x), intersezioni y ed estremi.',
      'Ripristina la vista: Clicca su "Ripristina Vista" per tornare all\'inquadratura predefinita [-10, 10].'
    ],
    formulas: [
      {
        title: 'Mappatura da Pixel a Coordinate Cartesiane',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Converte la colonna di pixel dello schermo px (da 0 alla larghezza) nella coordinata cartesiana continua.'
      },
      {
        title: 'Proiezione Cartesiana su Pixel dello Schermo',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Dato che il canvas HTML5 conta l\'asse y dall\'alto verso il basso, l\'asse verticale viene invertito per allinearsi alle convenzioni matematiche.'
      },
      {
        title: 'Condizione per Punti Stazionari ed Estremi',
        math: 'f\'(x) = 0 \\quad \\text{e} \\quad f\'\'(x) \\neq 0',
        explanation: 'I massimi locali si presentano dove f\'(x) = 0 e f\'\'(x) < 0; i minimi locali dove f\'(x) = 0 e f\'\'(x) > 0.'
      },
      {
        title: 'Soglia di Pendenza per Discontinuità',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Solleva il Tratto}',
        explanation: 'Evita il tracciamento di linee spurie attraverso asintoti verticali quando la pendenza supera il limite consentito.'
      }
    ],
    workedExample: {
      title: 'Esempio Svolto: Studio Completo della Parabola f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Intersezione Asse Y', expression: 'f(0) = 0² - 4 = -4', note: 'Coordinate: (0, -4)' },
        { label: 'Intersezioni Asse X (Zeri)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Coordinate: (-2, 0) e (2, 0)' },
        { label: 'Derivata Prima f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'Un punto stazionario in x = 0' },
        { label: 'Derivata Seconda f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Curvatura positiva che indica un minimo globale' },
        { label: 'Vertice ed Estremo Globale', expression: 'Minimo in (0, -4)', note: 'Parabola con concavità verso l\'alto e asse di simmetria x = 0' }
      ],
      result: 'Zeri in x = -2, 2; Vertice in (0, -4)',
      explanation: 'SciCalcX traccia la curva evidenziando il punto di minimo (0, -4) e i punti di passaggio per lo zero in x = -2 e x = 2 sul piano cartesiano.'
    },
    howItWorks: {
      title: 'Come SciCalcX Traccia i Grafici nel Browser',
      paragraphs: [
        'SciCalcX genera i grafici nativamente con HTML5 Canvas 2D senza librerie esterne pesanti, assicurando un\'interazione fluida durante zoom e spostamenti.',
        'Per ogni colonna di pixel, il motore calcola la coordinata x, valuta l\'espressione con la macchina RPN e ritrasforma i valori calcolati di y in righe verticali di pixel.',
        'In presenza di salti verticali esagerati in prossimità di asintoti infiniti, la penna viene sollevata per evitare raccordi scorretti.'
      ]
    },
    limitations: {
      title: 'Limiti di Risoluzione e Discretizzazione Grafica',
      points: [
        'Risoluzione dei Pixel: Dettagli minori della dimensione di un singolo pixel a schermo richiedono uno zoom per essere visualizzati.',
        'Oscillazioni ad Alta Frequenza: Funzioni come sin(1/x) attorno a 0 oscillano più rapidamente del campionamento, generando aliasing.',
        'Finestre Estreme: Zoom oltre 10¹⁰ o inferiori a 10⁻¹² raggiungono i limiti di precisione dello standard IEEE-754.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Omissione delle Parentesi nei Denominatori (es. digitare "1/x+1")',
        fix: '"1/x+1" equivale a (1/x) + 1. Scrivi "1/(x+1)" per traslare l\'asintoto in x = -1.'
      },
      {
        mistake: 'Funzione Disegnata Fuori dall\'Inquadratura Visibile',
        fix: 'Se la curva non compare, premi "Rimpicciolisci" o controlla il valore atteso della funzione sull\'asse y.'
      },
      {
        mistake: 'Uso di Notazioni Incompatibili per le Costanti',
        fix: 'Usa "pi" o "π" per pi greco, e "e" per il numero di Eulero.'
      }
    ],
    useCases: [
      {
        title: 'Studio di Funzioni Polinomiali',
        desc: 'Verifica di radici, flessi e punti di massimo e minimo per compiti scolastici e universitari.'
      },
      {
        title: 'Forme d\'Onda Trigonometriche',
        desc: 'Visualizzazione di modulazione di ampiezza, raddoppio di frequenza (sin(2x)) e sfasamenti in acustica.'
      },
      {
        title: 'Economia e Ottimizzazione',
        desc: 'Tracciamento di curve di costo, ricavo e profitto per determinare il punto di pareggio e la produzione ottimale.'
      }
    ],
    relatedTools: [
      { title: 'Calcolatrice di Analisi', desc: 'Calcola derivate esatte e integrali definiti di Simpson.', href: '/calculus', badge: 'Analisi' },
      { title: 'Calcolatrice Scientifica', desc: 'Valuta rapporti trigonometrici e logaritmi.', href: '/', badge: 'Aritmetica' },
      { title: 'Suite di Statistica', desc: 'Calcola varianza campionaria, deviazione standard e regressioni.', href: '/statistics', badge: 'Data Science' }
    ]
  },

  statistics: {
    conceptBadge: 'Data Science & Probabilità',
    conceptTitle: 'Statistica Descrittiva, Misure di Posizione e Correzione di Bessel',
    conceptDescription: [
      'La statistica descrittiva sintetizza e quantifica le proprietà salienti di un insieme di dati numerici. Anziché analizzare centinaia di osservazioni grezze, gli scienziati utilizzano indici di posizione (media, mediana, moda) e indici di dispersione (campo di variazione, varianza, deviazione standard).',
      'Una distinzione cruciale è quella tra popolazione (la totalità degli elementi) e campione (un sottoinsieme estratto). Calcolando la varianza di un campione dividendo la somma dei quadrati degli scarti per N, si sottostima sistematicamente la vera varianza della popolazione.',
      'Per eliminare questa distorsione, la correzione di Bessel adotta N - 1 gradi di libertà nella varianza campionaria (s²). SciCalcX calcola contemporaneamente sia i valori campionari (s², s) sia quelli della popolazione (σ², σ).'
    ],
    howToSteps: [
      'Inserisci il dataset: Digita numeri separati da virgole, spazi o a capo nell\'area di testo.',
      'Clicca su "Carica Dati di Esempio": Usa questo tasto per provare subito un dataset scientifico preconfigurato.',
      'Esamina gli Indici di Posizione: Leggi Media, Mediana e Moda nella griglia principale.',
      'Analizza la Dispersione: Controlla Range, Varianza Campionaria (s²), Varianza di Popolazione (σ²) e Deviazioni Standard.',
      'Salva nella Cronologia: Clicca su "Salva analisi nella cronologia" per memorizzare il riepilogo in locale.'
    ],
    formulas: [
      {
        title: 'Media Aritmetica',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'Il baricentro dei dati, ottenuto sommando tutti i valori e dividendo per la numerosità n.'
      },
      {
        title: 'Varianza Campionaria (Correzione di Bessel)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Divide la somma dei quadrati degli scarti per n - 1 gradi di libertà per fornire uno stimatore corretto.'
      },
      {
        title: 'Varianza della Popolazione',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Si impiega quando il dataset copre l\'intera popolazione di riferimento.'
      },
      {
        title: 'Deviazione Standard',
        math: 's = \\sqrt{s^2} \\quad \\text{e} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'La radice quadrata della varianza, espressa nella medesima unità di misura dei dati originali.'
      }
    ],
    workedExample: {
      title: 'Esempio Svolto: Varianza Campionaria per il Dataset [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Dati: 2, 4, 4, 4, 5, 5, 7, 9 (n = 8)',
      steps: [
        { label: 'Passaggio 1: Somma e Media', expression: 'Somma = 40 ⟹ Media x̄ = 40 / 8 = 5.0', note: 'Il valore medio è 5,0' },
        { label: 'Passaggio 2: Scarti (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Sottrai la media da ciascun valore' },
        { label: 'Passaggio 3: Quadrati degli Scarti', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Eleva ogni scarto al quadrato' },
        { label: 'Passaggio 4: Somma dei Quadrati (SS)', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Totale della devianza' },
        { label: 'Passaggio 5: Varianza Campionaria (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Divisione per n - 1 = 7 (Bessel)' },
        { label: 'Passaggio 6: Deviazione Standard (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Radice quadrata della varianza campionaria' }
      ],
      result: 'Media = 5.0, Mediana = 4.5, Moda = 4, s² ≈ 4.5714, σ² = 4.0',
      explanation: 'Nota la differenza: La varianza di popolazione divide 32 per 8 (= 4,0), mentre quella campionaria divide per 7 (≈ 4,5714) per correggere la distorsione stocastica.'
    },
    howItWorks: {
      title: 'Come SciCalcX Calcola le Statistiche nel Browser',
      paragraphs: [
        'SciCalcX analizza l\'input tramite un\'espressione regolare che separa virgole, spazi e a capo, convertendo i token in valori float64.',
        'I dati vengono ordinati internamente per determinare la mediana (elemento centrale se dispari o media dei due centrali se pari) e la moda mediante tabella delle frequenze.',
        'La devianza viene calcolata con un algoritmo a due passaggi: il primo calcola la media esatta e il secondo accumula (x - x̄)², scongiurando errori di cancellazione numerica tipici dei metodi a passaggio singolo.'
      ]
    },
    limitations: {
      title: 'Limiti di Precisione e Ipotesi Statistiche',
      points: [
        'Dimensione Campionaria Minima: La varianza campionaria richiede almeno due osservazioni (n ≥ 2), poiché n - 1 con n = 1 produrrebbe una divisione per zero.',
        'Sensibilità ai Valori Anomali: Media e varianza risentono fortemente degli outlier. In presenza di forti asimmetrie, la mediana è più affidabile.',
        'Dataset Multimodali: Qualora più valori presentino la stessa frequenza massima, la calcolatrice mostra tutte le mode separate da virgole.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Usare la Varianza di Popolazione (σ²) Invece di Quella Campionaria (s²) nei Laboratori Didattici',
        fix: 'I dati sperimentali rappresentano quasi sempre campioni. Usa la varianza campionaria (s²) con correzione n - 1.'
      },
      {
        mistake: 'Confondere le Unità di Misura di Varianza e Deviazione Standard',
        fix: 'La varianza è espressa in unità al quadrato (es. m²); la deviazione standard nelle unità originarie (m).'
      },
      {
        mistake: 'Ritenere che Varianza Pari a Zero Implichi Valori Nulli',
        fix: 'Varianza zero significa che tutti i dati sono identici (es. [5, 5, 5]), non che siano pari a zero.'
      }
    ],
    useCases: [
      {
        title: 'Errori Sperimentali di Laboratorio',
        desc: 'Quantificazione delle incertezze di misura, della dispersione e degli errori casuali in fisica e chimica.'
      },
      {
        title: 'Controllo di Qualità e Six Sigma',
        desc: 'Monitoraggio delle tolleranze di lavorazione e della variabilità nei processi industriali.'
      },
      {
        title: 'Rischio Finanziario e Volatilità',
        desc: 'Analisi della dispersione dei rendimenti e misurazione della deviazione standard storica dei titoli.'
      }
    ],
    relatedTools: [
      { title: 'Calcolatrice Scientifica', desc: 'Esegui calcoli scientifici e potenze esponenziali.', href: '/', badge: 'Aritmetica' },
      { title: 'Calcolatrice di Analisi', desc: 'Integra funzioni di densità di probabilità continue.', href: '/calculus', badge: 'Analisi' },
      { title: 'Calcolatrice Grafica', desc: 'Traccia distribuzioni e curve di funzione sul piano cartesiano.', href: '/graphing', badge: 'Cartesiano' }
    ]
  },

  programming: {
    conceptBadge: 'Architettura degli Elaboratori & Sistemi',
    conceptTitle: 'Sistemi Numerici in Base-N, Bitboard e Complemento a Due a 32 Bit',
    conceptDescription: [
      'I circuiti dei computer digitali operano esclusivamente in binario (Base-2). Per rendere leggibili le sequenze di bit ai programmatori, l\'informatica ricorre alle basi esadecimale (Base-16) e ottale (Base-8), raggruppando i bit in nibble (4 bit) e byte (8 bit).',
      'I moderni microprocessori rappresentano gli interi con segno negativi tramite la notazione in Complemento a Due. In un intero a 32 bit (int32), il bit più significativo (Bit 31) funge da bit di segno: 0 per i numeri positivi o zero, 1 per i numeri negativi. Invertire tutti i bit e sommare uno consente allo stesso sommatore hardware di effettuare sia addizioni che sottrazioni.',
      'SciCalcX offre un visualizzatore di bit interattivo a 32 bit in cui attivare o disattivare ogni singolo bit da 31 a 0, osservando la sincronizzazione immediata tra le basi Esadecimale, Decimale, Ottale e Binaria.'
    ],
    howToSteps: [
      'Seleziona la base attiva: Clicca su HEX, DEC, OCT o BIN per rendere la riga corrispondente il campo di input attivo.',
      'Digita un valore: Inserisci cifre numeriche o caratteri esadecimali (A-F) da tastiera o tramite il tastierino a schermo.',
      'Attiva/Disattiva i bit: Clicca sulle caselle dei bit (da 0 a 31) per invertirne lo stato e osservare la variazione decimale in tempo reale.',
      'Applica logica bit a bit: Clicca su NOT (~), LSH (<<) o RSH (>>) per eseguire trasformazioni immediate sui registri.',
      'Inverti il segno: Usa il tasto "+/-" per visualizzare l\'inversione con segno in complemento a due.'
    ],
    formulas: [
      {
        title: 'Sviluppo Posizionale in Base-N',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Ogni numero è la somma delle cifre d_i moltiplicate per le potenze della base b (b = 2, 8, 10 o 16).'
      },
      {
        title: 'Inversione in Complemento a Due',
        math: '-x = (\\sim x) + 1',
        explanation: 'Inverte tutti i 32 bit (complemento a uno) e aggiunge 1 al bit meno significativo.'
      },
      {
        title: 'Operatori Logici Bit a Bit',
        math: 'A \\& B \\text{ (AND)}, \\quad A \\mid B \\text{ (OR)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'AND restituisce 1 solo se entrambi i bit sono 1; OR se almeno uno è 1; XOR se i bit sono discordi.'
      },
      {
        title: 'Operazioni di Scorrimento di Bit (Shift)',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{e} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'Lo scorrimento a sinistra di k bit moltiplica per 2ᵏ; lo scorrimento a destra divide per 2ᵏ (arrotondando a meno infinito).'
      }
    ],
    workedExample: {
      title: 'Esempio Svolto: NOT Bit a Bit e Complemento a Due di 42',
      input: 'Valore Decimale = 42',
      steps: [
        { label: 'Passaggio 1: Rappresentazione Binaria', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bit 5, 3 e 1 a livello alto (32 + 8 + 2 = 42)' },
        { label: 'Passaggio 2: Equivalente Esadecimale', expression: 'Hex = 0x0000002A', note: '2 nel nibble alto, A (=10) nel nibble basso' },
        { label: 'Passaggio 3: NOT Bit a Bit (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Ogni 0 diventa 1 e ogni 1 diventa 0' },
        { label: 'Passaggio 4: Valutazione con Segno a 32 Bit', expression: '~42 = -43 in decimale (Complemento a Due)', note: 'Formula: ~x = -(x + 1)' },
        { label: 'Passaggio 5: Shift a Sinistra (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'I bit scorrono a sinistra di 1 posizione (moltiplicazione per 2)' }
      ],
      result: 'Decimale 42 = Hex 2A = Bin 101010₂; ~42 = -43',
      explanation: 'SciCalcX sincronizza tutti i 32 bit sul visualizzatore, illustrando la conversione immediata tra pattern di bit e numeri decimali negativi con segno.'
    },
    howItWorks: {
      title: 'Come SciCalcX Gestisce la Logica a 32 Bit nel Browser',
      paragraphs: [
        'Gli operatori bitwise di JavaScript (|, &, ^, ~, <<, >>) convertono automaticamente gli operandi in interi con segno a 32 bit in complemento a due prima del calcolo.',
        'SciCalcX memorizza uno stato interno intero int32. Quando un bit o operatore viene attivato, opportune maschere dinamiche ((val >>> bit) & 1) aggiornano i 32 pulsanti dal bit 31 al bit 0.',
        'Le conversioni in stringhe esadecimali, decimali, ottali e binarie vengono elaborate istantaneamente in locale per offrire un\'esperienza immediata al livello dell\'hardware.'
      ]
    },
    limitations: {
      title: 'Limiti di Precisione e Confini degli Interi',
      points: [
        'Intervallo Intero a 32 Bit con Segno: Opera rigorosamente tra -2.147.483.648 (-2³¹) e +2.147.483.647 (+2³¹ - 1).',
        'Comportamento in Overflow: Incrementi oltre +2.147.483.647 ripartono dai valori negativi (-2.147.483.648), replicando l\'architettura della CPU.',
        'Shift Circolare: Scorrimenti per multipli di 32 eseguono una rotazione (es. x << 32 equivale a x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Pensare che lo Shift Aritmetico a Destra (>>) Riempia con Zeri per i Negativi',
        fix: 'Lo shift aritmetico (>>) mantiene il bit di segno (riempie con 1). Lo shift logico senza segno (>>>) riempie con 0.'
      },
      {
        mistake: 'Confondere il NOT Bit a Bit (~) con il NOT Logico (!)',
        fix: 'Il NOT bit a bit inverte tutti i 32 bit (~0 = -1). Il NOT logico verifica la verità booleana.'
      },
      {
        mistake: 'Digitare Caratteri Non Validi per la Base Selezionata (es. "8" in Ottale)',
        fix: 'L\'ottale accetta solo cifre da 0 a 7; il binario 0 e 1; l\'esadecimale da 0 a 9 e da A a F.'
      }
    ],
    useCases: [
      {
        title: 'Sistemi Embedded e Microcontrollori',
        desc: 'Ispezione di registri di controllo hardware, maschere di pin GPIO e campi di bit.'
      },
      {
        title: 'Decodifica Header di Rete',
        desc: 'Mascheramento e scorrimento di pacchetti IP/TCP per estrarre numeri di porta, flag e maschere di sottorete.'
      },
      {
        title: 'Sviluppo Videogiochi e Ottimizzazione',
        desc: 'Uso di bitboard per rappresentare scacchiere o maschere di collisione valutate in un singolo ciclo di clock.'
      }
    ],
    relatedTools: [
      { title: 'Code Tutor & Compilatore', desc: 'Scrivi, compila ed esegui algoritmi bit a bit in C++ e Python.', href: '/compiler', badge: 'Sandbox' },
      { title: 'Calcolatrice Scientifica', desc: 'Esegui calcoli scientifici ed esponenziali.', href: '/', badge: 'Aritmetica' },
      { title: 'Calcolatrice per Matrici', desc: 'Calcola determinanti e operazioni matriciali.', href: '/matrix', badge: 'Algebra Lineare' }
    ]
  }
};
