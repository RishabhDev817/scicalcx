import type { CalculatorPedagogyData } from '../calculatorData';

export const nlPedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Wiskundige Grondslagen',
    conceptTitle: 'Algebraïsche Hiërarchie & Drijvendekommaberekeningen',
    conceptDescription: [
      'Een wetenschappelijke rekenmachine evalueert samengestelde wiskundige uitdrukkingen volgens strikte bewerkingsvolgordes (PEMDAS/BODMAS: Haakjes, Machten/Wortels, Vermenigvuldigen & Delen, Optellen & Aftrekken). Bij geneste formules zoals 3 + 4 × 2 / (1 - 5)^2 stelt de berekeningsmotor optellingen uit totdat alle termen binnen haakjes, machten en vermenigvuldigingen zijn berekend.',
      'Moderne microprocessoren voeren drijvendekommagetallen uit volgens de IEEE 754-standaard voor dubbele precisie (float64). Omdat bepaalde decimale breuken (zoals 0,1 of 0,2) oneindig repeterende binaire reeksen vormen, ontstaan bij binaire berekeningen minieme afrondingsfoutjes (bijv. 0.1 + 0.2 = 0.30000000000000004). SciCalcX past epsilon-drempelsanering toe om een zuivere decimale weergave tot 12 cijfers te behouden.',
      'Goniometrische functies (sinus, cosinus, tangens) werken op continue hoekmaten. Weten of uw invoer in radialen (waarbij 2π overeenkomt met 360°) of in graden (DEG) staat, is essentieel voor nauwkeurige berekeningen in de natuurkunde en techniek.'
    ],
    howToSteps: [
      'Selecteer uw hoekeenheid: Schakel in de statusbalk tussen DEG (graden) en RAD (radialen).',
      'Voer uw uitdrukking in: Typ direct met uw toetsenbord of klik op de knoppen van het schermtoetsenbord.',
      'Gebruik haakjes voor samengestelde termen: Groepeer tellers of noemers om de gewenste volgorde af te dwingen.',
      'Bereken: Druk op "=" op het toetsenpaneel of op Enter op uw fysieke toetsenbord.',
      'Formaat aanpassen: Gebruik de S-D toets om te schakelen tussen decimale weergave en exacte breuken.'
    ],
    formulas: [
      {
        title: 'Bewerkingsvolgorde (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Gelijkwaardige operatoren worden van links naar rechts geëvalueerd; unaire negatie en machten zijn rechts-associatief.'
      },
      {
        title: 'Omrekening Graden naar Radialen',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'Alle interne goniometrische CPU-functies rekenen in radialen. In DEG-modus rekent SciCalcX graden vooraf om.'
      },
      {
        title: 'Grondtalwissel bij Logaritmen',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'Natuurlijke logaritmen (ln) gebruiken grondtal e ≈ 2,71828; tiendelige logaritmen (log) grondtal 10.'
      },
      {
        title: 'Epsilon-Precisienormalisatie',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'Epsilon-drempelfiltering verwijdert binaire afrondingsruis voor zuivere decimale resultaten.'
      }
    ],
    workedExample: {
      title: 'Voorbeeld: Samengestelde Formule met Meerdere Bewerkingen',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Stap 1: Goniometrie', expression: 'sin(30°) = 0.5', note: 'In DEG-modus is sin(30°) gelijk aan 1/2' },
        { label: 'Stap 2: Vermenigvuldigen', expression: '4 × 0.5 = 2.0', note: 'Bereken linkse vermenigvuldiging' },
        { label: 'Stap 3: Worteltrekken', expression: '√(25) = 5.0', note: 'Bereken wortelfunctie' },
        { label: 'Stap 4: Machtsverheffen', expression: '2^3 = 8.0', note: 'Bereken twee tot de macht drie' },
        { label: 'Stap 5: Optellen en Aftrekken', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Van links naar rechts lineair uitrekenen' }
      ],
      result: '-1',
      explanation: 'Volgens de wiskundige rekenregels worden haakjes, wortels en machten berekend vóór optellen en aftrekken, met exact -1 als uitkomst.'
    },
    howItWorks: {
      title: 'Hoe SciCalcX Uitdrukkingen in de Browser Berekent',
      paragraphs: [
        'SciCalcX maakt gebruik van een tweetraps parser in client-side TypeScript. In de eerste fase (lexicale tokenisatie) wordt de invoertekst gescand in discrete tokens voor getallen, variabelen, constanten (π, e), operatoren en functies.',
        'In de tweede fase zet een Shunting-Yard parser de infixnotatie om in Reverse Polish Notation (RPN) met behulp van operator- en operandstacks. Niet-sluitende haakjes worden direct gesignaleerd.',
        'Ten slotte evalueert een RPN-stackmachine de rij met IEEE-754 dubbele-precisieregisters (float64) en past epsilon-normalisatie toe voor de weergave.'
      ]
    },
    limitations: {
      title: 'Precisielimieten & Numerieke Grenzen',
      points: [
        'Drijvendekommabovengrens (Overflow): Getallen groter dan ±1,7976931348623157 × 10³⁰⁸ lopen over naar Infinity.',
        'Drijvendekommaondergrens (Underflow): Getallen kleiner dan ±5,0 × 10⁻³²⁴ convergeren naar 0.',
        'Domeinbeperkingen: De wortel van een negatief getal of ln(x) met x ≤ 0 geeft een expliciete domeinfout.',
        'Goniometrische Singulariteiten: tan(90°) of tan(270°) geven extreem grote waarden of ongedefinieerd wegens afronding van π/2.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Niet-gesloten haakjes: bijv. "(2 + 3 * (4 - 1)"',
        fix: 'Kijk naar de haakjesteller linksonder om te verifiëren dat elke "(" met een ")" wordt afgesloten.'
      },
      {
        mistake: 'Verwarring tussen Graden en Radialen: sin(90) levert 0,89399 op in plaats van 1',
        fix: '0,89399 is sin(90 rad). Schakel de schuifregelaar bovenin naar DEG-modus voor sin(90°) = 1.'
      },
      {
        mistake: 'Impliciete Vermenigvuldiging: Typen van "2(3+4)" zonder operator',
        fix: 'Gebruik een expliciete operator: "2 * (3 + 4)" om eenduidige verwerking te garanderen.'
      }
    ],
    useCases: [
      {
        title: 'Natuurkunde & Kinematica',
        desc: 'Ontbinden van krachtvectoren met sinus en cosinus en berekenen van parabolische kogelbanen.'
      },
      {
        title: 'Elektrotechniek',
        desc: 'Berekenen van wisselstroomimpedanties, fasehoeken en logaritmische decibelverhoudingen (20 log(V_uit / V_in)).'
      },
      {
        title: 'Academische Wiskunde & STEM',
        desc: 'Verifiëren van algebraïsche afleidingen, breukpolynomen en exponentiële groeicurves.'
      }
    ],
    relatedTools: [
      { title: 'Matrix Calculator', desc: 'Los stelsels van lineaire vergelijkingen, determinanten en inverse matrices op.', href: '/matrix', badge: 'Lineaire Algebra' },
      { title: 'Calculus Calculator', desc: 'Bereken bepaalde integralen via de Simpson-methode en numerieke afgeleiden.', href: '/calculus', badge: 'Analyse' },
      { title: 'Grafische Rekenmachine', desc: 'Plot 2D-functies en inspecteer nulpunten en asymptoten dynamisch.', href: '/graphing', badge: 'Geometrie' }
    ]
  },

  matrix: {
    conceptBadge: 'Grondslagen van Lineaire Algebra',
    conceptTitle: 'Matrixtransformaties, Determinanten & Vectorruimten',
    conceptDescription: [
      'Een matrix is een rechthoekig rooster van numerieke getallen gerangschikt in m rijen en n kolommen. In de wiskunde en informatica representeren matrices lineaire transformaties die vectorruimten schalen, roteren, spiegelen of vervormen.',
      'Matrixvermenigvuldiging is niet-commutatief: voor twee matrices A en B geldt in het algemeen A × B ≠ B × A. Bovendien moeten de binnenste dimensies overeenkomen: een m × k matrix kan alleen vermenigvuldigd worden met een k × n matrix, met een m × n productmatrix als resultaat.',
      'De determinant, det(A), is een scalaire waarde van een vierkante matrix. Geometrisch gezien geeft het de schaalfactor weer waarmee een transformatie oppervlakte (in 2D) of volume (in 3D) verandert. Een matrix is inverteerbaar dan en slechts dan als det(A) ≠ 0.'
    ],
    howToSteps: [
      'Selecteer afmetingen: Gebruik de schakelaars 2x2 of 3x3 voor Matrix A en Matrix B.',
      'Voer matrixelementen in: Typ getallen (geheel of decimaal) in de bijbehorende cellen.',
      'Kies een bewerking: Klik op Matrixoptelling (A + B), Aftrekking (A - B) of Vermenigvuldiging (A × B).',
      'Bereken eigenschappen: Klik op Determinant, Inverse of Transponeren voor Matrix A.',
      'Bekijk tussenstappen: Lees de stapsgewijze toelichting onder het resultatenraster.'
    ],
    formulas: [
      {
        title: 'Matrixvermenigvuldigingsregel',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Elk element in productmatrix C is het inproduct van rij i van Matrix A en kolom j van Matrix B.'
      },
      {
        title: '2×2 Determinantformule',
        math: '\\det(A) = ad - bc \\quad \\text{voor } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'Verschil tussen het product van de hoofddiagonaal en het product van de nevendiagonaal.'
      },
      {
        title: '3×3 Laplace-ontwikkeling',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Ontwikkeling naar de eerste rij met afwisselende tekens en 2×2 subdeterminanten.'
      },
      {
        title: 'Matrixinversie via de Geadjungeerde',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'Bestaat alleen als det(A) ≠ 0; de getransponeerde cofactor-matrix gedeeld door de determinant.'
      }
    ],
    workedExample: {
      title: 'Voorbeeld: Inversie van een 2×2-Matrix',
      input: 'Matrix A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Stap 1: Determinant', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, dus inverse bestaat' },
        { label: 'Stap 2: Wissel Hoofddiagonaal', expression: 'a ↔ d: [6, 4]', note: 'Wissel A[0,0] en A[1,1]' },
        { label: 'Stap 3: Negatie Nevendiagonaal', expression: 'b → -7, c → -2', note: 'Keer het teken om van A[0,1] en A[1,0]' },
        { label: 'Stap 4: Geadjungeerde Matrix', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Samenstellen van de geadjungeerde' },
        { label: 'Stap 5: Scalaire Deling', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Vermenigvuldig elk element met 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Controle: A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], de 2×2-eenheidsmatrix.'
    },
    howItWorks: {
      title: 'Hoe SciCalcX Matrixberekeningen in de Browser Uitvoert',
      paragraphs: [
        'SciCalcX verwerkt alle matrixberekeningen direct in de browser met getypeerde JavaScript-arrays. Invoerwaarden worden gecontroleerd op getalnotatie en ondersteunen probleemloos negatieve waarden en decimalen.',
        'Voor 2×2-determinanten wordt de formule ad - bc toegepast; bij 3×3-systemen Laplace-ontwikkeling. Bij inversie wordt gecontroleerd op singulariteit (|det| < 1e-12) vóórdat deling plaatsvindt.',
        'De resultaten ondergaan epsilon-normalisatie zodat theoretische nullen niet worden weergegeven als artefacten zoals 1e-16.'
      ]
    },
    limitations: {
      title: 'Precisielimieten & Beperkingen in Lineaire Algebra',
      points: [
        'Singuliere Matrices: Als det(A) = 0, heeft de matrix geen inverse. De rekenmachine toont "Singuliere Matrix (det = 0)".',
        'Slecht Geconditioneerde Systemen: Matrices met determinanten dicht bij nul kunnen afrondingsfouten vertonen bij delingen.',
        'Ondersteunde Afmetingen: Geoptimaliseerd voor 2×2- en 3×3-systemen voor onderwijs en 3D-computergraphics.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Aannemen dat Matrixvermenigvuldiging Commutatief is (A × B = B × A)',
        fix: 'Matrixvermenigvuldiging is afhankelijk van rij-bij-kolom volgorde: A × B ≠ B × A.'
      },
      {
        mistake: 'Een Singuliere Matrix Proberen te Inverteren',
        fix: 'Controleer eerst de determinant. Als det(A) = 0, zijn de rijen lineair afhankelijk en bestaat er geen inverse.'
      },
      {
        mistake: 'Getransponeerde Verwisselen met de Inverse',
        fix: 'Transponeren (Aᵀ) wisselt rijen en kolommen. De inverse (A⁻¹) voldoet aan A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: '3D Computer Graphics',
        desc: 'Berekenen van model-view-projection transformaties (MVP), camerarotaties en schaalmatrices.'
      },
      {
        title: 'Lineaire Vergelijkingen',
        desc: 'Oplossen van stelsels Ax = b via matrixinversie x = A⁻¹b of de regel van Cramer.'
      },
      {
        title: 'Netwerk- en Circuitanalyse',
        desc: 'Opstellen van knooppuntmatrices en maasstroomvergelijkingen in de elektrotechniek.'
      }
    ],
    relatedTools: [
      { title: 'Wetenschappelijke Rekenmachine', desc: 'Voer wetenschappelijke berekeningen en goniometrische conversies uit.', href: '/', badge: 'Rekenkunde' },
      { title: 'Calculus Calculator', desc: 'Bereken bepaalde integralen en numerieke afgeleiden.', href: '/calculus', badge: 'Analyse' },
      { title: 'Statistiek Suite', desc: 'Analyseer datadistributies, variantie en regressiemodellen.', href: '/statistics', badge: 'Data Science' }
    ]
  },

  calculus: {
    conceptBadge: 'Wiskundige Analyse',
    conceptTitle: 'Differentiële Veranderingssnelheden & Numerieke Kwadratuur',
    conceptDescription: [
      'Calculus is de studie van continue verandering. Differentiaalrekening richt zich op instantane veranderingssnelheden (afgeleiden, raaklijnhellingen), terwijl integraalrekening de accumulatie van grootheden behandelt (oppervlakte onder een kromme).',
      'Hoewel exacte analytische primitieven elegant zijn, hebben veel praktische functies geen elementaire primitieve. Numerieke analyse benadert afgeleiden en oppervlakten met discrete steekproefalgoritmen met hoge precisie.',
      'SciCalcX implementeert vierde-orde numerieke kwadratuur via de samengestelde 1/3-regel van Simpson voor integralen en symmetrische centrale differentiequotiënten voor afgeleiden.'
    ],
    howToSteps: [
      'Voer uw functie f(x) in: Gebruik algebraïsche notatie (bijv. x^2, sin(x), e^x, 2*x + 1).',
      'Voor Bepaalde Integratie: Geef de ondergrens (a) en bovengrens (b) op en klik op "Bereken Integraal".',
      'Voor Numerieke Differentiatie: Geef het evaluatiepunt x₀ op en klik op "Bereken Afgeleide f\'(x₀)".',
      'Voor Wortels van Veeltermen: Voer coëfficiënten in voor kwadratische of derdegraads functies en klik op "Vind Nulpunten".',
      'Controleer het resultaat: Bekijk de uitkomst en verifieer eventuele discontinuïteiten in het domein.'
    ],
    formulas: [
      {
        title: 'Symmetrisch Differentiequotiënt (Afgeleide)',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'Evalueert centrale differenties met stapgrootte h = 10⁻⁶, waarbij tweede-ordefouten wegvallen voor O(h²) nauwkeurigheid.'
      },
      {
        title: 'Samengestelde 1/3-Regel van Simpson (Integraal)',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ oneven}} f(x_i) + 2\\sum_{i \\text{ even}} f(x_i) + f(x_n) \\right]',
        explanation: 'Verdeelt interval [a, b] in n = 1000 subintervallen en benadert de kromme met paraboolbogen voor vierde-orde convergentie O(h⁴).'
      },
      {
        title: 'Wortelformule (Tweedegraads Vergelijkingen)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Discriminant Δ = b² - 4ac bepaalt twee reële nulpunten (Δ > 0), één dubbel nulpunt (Δ = 0) of complexe oplossingen (Δ < 0).'
      },
      {
        title: 'Hoofdstelling van de Analyse',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{waarbij } F\'(x) = f(x)',
        explanation: 'Verbindt differentiatie met integratie: de totale oppervlakte is het verschil in primitieve waarden.'
      }
    ],
    workedExample: {
      title: 'Voorbeeld: Bepaalde Integraal van een Parabolische Kromme',
      input: 'f(x) = x^2 op interval [0, 3]',
      steps: [
        { label: 'Analytische Primitieve', expression: '∫ x² dx = x³ / 3 + C', note: 'Standaard machtsregel voor integratie' },
        { label: 'Evaluatie Bovengrens', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'Invullen b = 3' },
        { label: 'Evaluatie Ondergrens', expression: 'F(0) = 0³ / 3 = 0.0', note: 'Invullen a = 0' },
        { label: 'Exacte Analytische Waarde', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Netto-oppervlakte onder de kromme' },
        { label: 'SciCalcX Simpson-uitvoer', expression: 'n = 1000 stappen, h = 0.003 ⟹ Resultaat = 9.000000', note: 'Exact voor veeltermen tot en met graad 3' }
      ],
      result: '9.000',
      explanation: 'Omdat Simpson parabolische segmenten gebruikt, integreert de methode tweedegraadsfuncties zonder afkappingsfout en bereikt exact 9.'
    },
    howItWorks: {
      title: 'Hoe SciCalcX Analyse Client-Side Uitvoert',
      paragraphs: [
        'Zodra u f(x) invoert, zet SciCalcX de formule om in een RPN-syntaxboom die functies ondersteunt zoals sin, cos, tan, exp, ln, log, sqrt en machten.',
        'Voor bepaalde integralen verdeelt het systeem [a, b] in n = 1000 gelijke stukken en telt de gewogen punten op volgens de Simpson-formule.',
        'Voor afgeleiden evalueert het f(x + h) en f(x - h) met h = 10⁻⁶; door symmetrisch aftrekken vallen afrondingsfouten weg voor een stabiele helling.'
      ]
    },
    limitations: {
      title: 'Precisielimieten & Numerieke Benaderingsgrenzen',
      points: [
        'Niet-differentiëerbare Knipspunten: Numerieke afgeleiden veronderstellen een vloeiende functie. Bij scherpe punten zoals f(x) = |x| ontstaat een foutieve gemiddelde helling.',
        'Verticale Asymptoten: Integreren over polen heen (bijv. 1/x van -1 tot 1) leidt tot divergentie of numerieke instabiliteit.',
        'Stapgrootte-Afronding: Hoewel h = 10⁻⁶ optimaal is, leidt een te kleine h (< 10⁻¹²) tot aftrekkingsfouten in float64.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Integratiegrenzen Omdraaien (Ondergrens > Bovengrens)',
        fix: 'Integreren van b naar a levert het tegengestelde op van integreren van a naar b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Verkeerde Variabelenaam (bijv. f(t) in plaats van f(x))',
        fix: 'De motor rekent met de variabele "x". Gebruik altijd "x" of "X".'
      },
      {
        mistake: 'Verwachting van Exacte Symbolische Uitkomsten',
        fix: 'SciCalcX berekent numerieke waarden via kwadratuur en genereert geen symbolische formules.'
      }
    ],
    useCases: [
      {
        title: 'Natuurkunde & Arbeidsberekeningen',
        desc: 'Berekenen van mechanische arbeid W = ∫ F(x) dx wanneer kracht continu varieert met de positie.'
      },
      {
        title: 'Kansrekening & Cumulatieve Dichtheid',
        desc: 'Berekenen van cumulatieve verdelingsfuncties (CDF) door kansdichtheidsfuncties numeriek te integreren.'
      },
      {
        title: 'Signaalverwerking & Effectieve Spanning',
        desc: 'Bepalen van de effectieve waarde (RMS) van periodieke wisselspanningen over een volledige cyclus.'
      }
    ],
    relatedTools: [
      { title: 'Grafische Rekenmachine', desc: 'Visualiseer krommen, extrema en raaklijnen interactief.', href: '/graphing', badge: 'Cartesiaanse Studio' },
      { title: 'Wetenschappelijke Rekenmachine', desc: 'Evalueer goniometrische en exponentiële formules met hoge precisie.', href: '/', badge: 'Rekenkunde' },
      { title: 'Code Tutor & Compiler', desc: 'Schrijf en test numerieke simulatiescripts in Python en C++.', href: '/compiler', badge: 'Sandbox' }
    ]
  },

  graphing: {
    conceptBadge: 'Analytische Meetkunde',
    conceptTitle: '2D-Functieplotten & Cartesiaanse Coördinatenanalyse',
    conceptDescription: [
      'Een 2D-grafische rekenmachine vertaalt abstracte algebraïsche vergelijkingen naar visuele krommen op een Cartesiaans assenstelsel. Door x-waarden te koppelen aan y = f(x) worden continuïteit, nulpunten, extrema en asymptoten direct inzichtelijk.',
      'Digitaal plotten berust op nauwkeurige numerieke bemonstering. Over de gehele pixelbreedte van het scherm worden x-coördinaten bemonsterd, berekend en als aaneengesloten lijnstukken op een HTML5 Canvas getekend.',
      'Een grote uitdaging bij computergestuurd plotten is het omgaan met verticale asymptoten (zoals bij tan(x) of 1/x). SciCalcX bevat automatische asymptootdetectie die de tekenpen optilt bij oneindige sprongen.'
    ],
    howToSteps: [
      'Definieer functie f(x): Voer een uitdrukking in met de variabele x (bijv. x^2 - 4, sin(x), e^(-x^2)).',
      'Voeg een tweede kromme g(x) toe: Optioneel om krommen te vergelijken en snijpunten te analyseren.',
      'Pas het venster aan: Gebruik de zoomknoppen (+ / -) of sleep met muis/touchscreen om het vlak te verschuiven.',
      'Bekijk meetwaarden: Controleer het analytische paneel voor gedetecteerde nulpunten, y-snijpunten en extrema.',
      'Weergave herstellen: Klik op "Weergave herstellen" om terug te keren naar het standaardbereik [-10, 10].'
    ],
    formulas: [
      {
        title: 'Transformatie van Pixels naar Cartesiaanse Coördinaten',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Zet schermpixelkolom px om in de continue wiskundige x-waarde.'
      },
      {
        title: 'Projectie van Coördinaten naar Canvaspixels',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Omdat HTML5 Canvas y naar beneden telt, wordt de y-as geïnverteerd om aan te sluiten bij wiskundige conventies.'
      },
      {
        title: 'Voorwaarde voor Buigpunten & Extrema',
        math: 'f\'(x) = 0 \\quad \\text{en} \\quad f\'\'(x) \\neq 0',
        explanation: 'Lokale maxima treden op bij f\'(x) = 0 en f\'\'(x) < 0; lokale minima bij f\'(x) = 0 en f\'\'(x) > 0.'
      },
      {
        title: 'Drempelwaarde voor Helling bij Discontinuïteit',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Pen Optillen}',
        explanation: 'Onderdrukt verbindingslijnen over verticale asymptoten wanneer de helling een fysieke limiet overschrijdt.'
      }
    ],
    workedExample: {
      title: 'Voorbeeld: Volledige Functieanalyse van Parabool f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Y-Snijpunt', expression: 'f(0) = 0² - 4 = -4', note: 'Coördinaten: (0, -4)' },
        { label: 'Nulpunten (X-Snijpunten)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Coördinaten: (-2, 0) en (2, 0)' },
        { label: 'Afgeleide f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'Stationair punt op x = 0' },
        { label: 'Tweede Afgeleide f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Positieve kromming duidt op een globaal minimum' },
        { label: 'Top & Globaal Extremum', expression: 'Minimum op (0, -4)', note: 'Dalparabool met symmetrieas x = 0' }
      ],
      result: 'Nulpunten op x = -2, 2; Minimum op (0, -4)',
      explanation: 'SciCalcX tekent de parabool vloeiend en toont het minimum op (0, -4) en de nulpunten op x = -2 en 2 op het assenstelsel.'
    },
    howItWorks: {
      title: 'Hoe SciCalcX Functies in de Browser Plot',
      paragraphs: [
        'SciCalcX rendert grafieken direct via HTML5 Canvas 2D zonder zware externe plotbibliotheken, wat zorgt voor snelle interactie bij slepen en zoomen.',
        'Voor elke pixelkolom berekent de motor de wiskundige x-waarde, evalueert de RPN-stapel en projecteert de resulterende y-waarde terug naar het scherm.',
        'Bij extreme sprongen of tekenwisselingen over oneindige grenzen lift het tekenalgoritme de pen om valse verbindingslijnen te voorkomen.'
      ]
    },
    limitations: {
      title: 'Precisielimieten & Grafische Beperkingen',
      points: [
        'Pixelresolutie: Details die kleiner zijn dan één beeldschermpixel kunnen pas worden waargenomen na inzoomen.',
        'Hoogfrequente Oscillatie: Functies zoals sin(1/x) oscilleren nabij 0 sneller dan de bemonsteringsfrequentie, wat aliasing veroorzaakt.',
        'Extreme Schaalvensters: Uitzoomen voorbij 10¹⁰ of inzoomen onder 10⁻¹² bereikt de grenzen van IEEE-754 precisie.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Vergeten van haakjes in noemers (bijv. "1/x+1")',
        fix: '"1/x+1" wordt geïnterpreteerd als (1/x) + 1. Typ "1/(x+1)" om de asymptoot naar x = -1 te verplaatsen.'
      },
      {
        mistake: 'Functie valt buiten het Zichtbare Beeldvenster',
        fix: 'Als de grafiek niet verschijnt, klik op "Uitzoomen" of controleer de y-waarden van de functie.'
      },
      {
        mistake: 'Onjuiste Notatie van Constanten',
        fix: 'Gebruik "pi" of "π" voor pi, en "e" voor het getal van Euler.'
      }
    ],
    useCases: [
      {
        title: 'Onderzoek van Veeltermen',
        desc: 'Controleren van nulpunten, buigpunten en toppen voor huiswerkopdrachten wiskunde.'
      },
      {
        title: 'Goniometrische Golfvormen',
        desc: 'Visualiseren van amplitudemodulatie, frequentieverdubbeling (sin(2x)) en faseverschuivingen in de akoestiek.'
      },
      {
        title: 'Economie & Optimalisatie',
        desc: 'Plotten van kosten-, opbrengst- en winstfuncties om het break-even punt te bepalen.'
      }
    ],
    relatedTools: [
      { title: 'Calculus Calculator', desc: 'Bereken numerieke afgeleiden met hoge precisie en Simpson-integralen.', href: '/calculus', badge: 'Analyse' },
      { title: 'Wetenschappelijke Rekenmachine', desc: 'Evalueer goniometrische verhoudingen en logaritmen.', href: '/', badge: 'Rekenkunde' },
      { title: 'Statistiek Suite', desc: 'Bereken steekproefvariantie, standaarddeviatie en regressie.', href: '/statistics', badge: 'Data Science' }
    ]
  },

  statistics: {
    conceptBadge: 'Data Science & Kansrekening',
    conceptTitle: 'Beschrijvende Statistiek, Centrummaten & Bessel-Correctie',
    conceptDescription: [
      'Beschrijvende statistiek vat de belangrijkste kenmerken van een verzameling numerieke gegevens samen. In plaats van honderden losse waarden te bekijken, gebruiken onderzoekers centrummaten (gemiddelde, mediaan, modus) en spreidingsmaten (bereik, variantie, standaardafwijking).',
      'Een fundamenteel onderscheid in de statistiek is dat tussen de populatie (de gehele groep) en een steekproef (een deelverzameling). Bij het berekenen van de variantie van een steekproef leidt delen door N tot een systematische onderschatting van de werkelijke populatievariantie.',
      'Om deze vertekening te corrigeren, gebruikt de Bessel-correctie N - 1 vrijheidsgraden bij de steekproefvariantie (s²). SciCalcX berekent zowel steekproefmaten (s², s) als populatiematen (σ², σ) gelijktijdig.'
    ],
    howToSteps: [
      'Voer uw dataset in: Typ getallen gescheiden door komma\'s, spaties of nieuwe regels in het invoerveld.',
      'Klik op "Voorbeelddata Laden": Gebruik deze knop om direct een wetenschappelijke testdataset te laden.',
      'Bekijk Centrummaten: Inspecteer het Gemiddelde, de Mediaan en de Modus in het overzichtsrooster.',
      'Analyseer Spreiding: Bekijk het Bereik, Steekproefvariantie (s²), Populatievariantie (σ²) en Standaardafwijkingen.',
      'Opslaan in Geschiedenis: Klik op "Analyse opslaan" om uw samenvatting lokaal te bewaren.'
    ],
    formulas: [
      {
        title: 'Rekenkundig Gemiddelde',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'Het zwaartepunt van de dataset, berekend als de som van alle waarden gedeeld door het aantal n.'
      },
      {
        title: 'Steekproefvariantie (Bessel-Correctie)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Deelt de kwadratensom door n - 1 vrijheidsgraden voor een zuivere schatter van de populatievariantie.'
      },
      {
        title: 'Populatievariantie',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Wordt toegepast wanneer de dataset de volledige doelgroep vertegenwoordigt.'
      },
      {
        title: 'Standaardafwijking',
        math: 's = \\sqrt{s^2} \\quad \\text{en} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'De vierkantswortel van de variantie, waarmee de spreiding in de oorspronkelijke maateenheid wordt uitgedrukt.'
      }
    ],
    workedExample: {
      title: 'Voorbeeld: Steekproefvariantie voor [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Data: 2, 4, 4, 4, 5, 5, 7, 9  (n = 8)',
      steps: [
        { label: 'Stap 1: Som & Gemiddelde', expression: 'Som = 40 ⟹ Gemiddelde x̄ = 40 / 8 = 5.0', note: 'Het gemiddelde is 5,0' },
        { label: 'Stap 2: Afwijkingen (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Trek het gemiddelde af van elk element' },
        { label: 'Stap 3: Kwadratische Afwijkingen', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Kwadrateer elke afwijking' },
        { label: 'Stap 4: Kwadratensom (SS)', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Totale som van kwadratische afwijkingen' },
        { label: 'Stap 5: Steekproefvariantie (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Gedeeld door n - 1 = 7 (Bessel-correctie)' },
        { label: 'Stap 6: Steekproef Standaardafwijking (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Wortel van steekproefvariantie' }
      ],
      result: 'Gemiddelde = 5.0, Mediaan = 4.5, Modus = 4, s² ≈ 4.5714, σ² = 4.0',
      explanation: 'Merk het verschil op: Populatievariantie deelt 32 door 8 (= 4,0), terwijl steekproefvariantie deelt door 7 (≈ 4,5714) om schattingsvertekening te corrigeren.'
    },
    howItWorks: {
      title: 'Hoe SciCalcX Statistiek in de Browser Berekent',
      paragraphs: [
        'SciCalcX splitst invoertekst via reguliere expressies op komma\'s, spaties en witregels, en zet getallen om in float64 waarden.',
        'De gegevens worden gesorteerd om de mediaan (middelste getal bij oneven aantal of gemiddelde van de middelste twee bij even aantal) en modus via een frequentietabel te bepalen.',
        'De kwadratensom wordt in twee ronden berekend: de eerste berekent het exacte gemiddelde en de tweede telt (x - x̄)² op, wat afrondingsfouten voorkomt.'
      ]
    },
    limitations: {
      title: 'Precisielimieten & Statistische Aannamen',
      points: [
        'Minimale Steekproefomvang: Steekproefvariantie vereist minimaal twee waarnemingen (n ≥ 2) omdat delen door n - 1 bij n = 1 leidt tot deling door nul.',
        'Gevoeligheid voor Uitschieters: Gemiddelde en variantie zijn gevoelig voor uitersten. Bij scheve verdelingen biedt de mediaan een betrouwbaardere maatstaf.',
        'Multimodale Datasets: Als meerdere waarden dezelfde hoogste frequentie delen, toont de calculator alle modi gescheiden door komma\'s.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Populatievariantie (σ²) Gebruiken in Plaats van Steekproefvariantie (s²) voor Laboratoriummetingen',
        fix: 'Metingen zijn vrijwel altijd steekproeven. Gebruik steekproefvariantie (s²) met Bessel-correctie (n - 1).'
      },
      {
        mistake: 'Eenheden van Variantie en Standaardafwijking Verwisselen',
        fix: 'Variantie staat in gekwadrateerde eenheden (bijv. m²); standaardafwijking in oorspronkelijke eenheden (m).'
      },
      {
        mistake: 'Veronderstellen dat Nulvariantie Betekent dat Alle Waarden Nul Zijn',
        fix: 'Een variantie van nul betekent dat alle waarnemingen identiek zijn (bijv. [5, 5, 5]), niet dat ze nul zijn.'
      }
    ],
    useCases: [
      {
        title: 'Experimentele Meetfouten in Laboratoria',
        desc: 'Kwantificeren van meetonzekerheid, toevallige fouten en spreiding in practica natuurkunde en scheikunde.'
      },
      {
        title: 'Kwaliteitsbewaking & Six Sigma',
        desc: 'Monitoren van productietoleranties en procesvariabiliteit in industriële productielijnen.'
      },
      {
        title: 'Financieel Risico & Volatiliteit',
        desc: 'Analyseren van rendementsvariantie en berekenen van de historische standaardafwijking van aandelenkoersen.'
      }
    ],
    relatedTools: [
      { title: 'Wetenschappelijke Rekenmachine', desc: 'Wetenschappelijke berekeningen en machten uitvoeren.', href: '/', badge: 'Rekenkunde' },
      { title: 'Calculus Calculator', desc: 'Integreer continue kansdichtheidsfuncties.', href: '/calculus', badge: 'Analyse' },
      { title: 'Grafische Rekenmachine', desc: 'Plot verdelingen en functiekrommen op een assenstelsel.', href: '/graphing', badge: 'Cartesiaans' }
    ]
  },

  programming: {
    conceptBadge: 'Computerarchitectuur & Systemen',
    conceptTitle: 'Talstelsels, Bitborden & 32-Bits Two\'s Complement',
    conceptDescription: [
      'Digitale computerhardware werkt uitsluitend in het binaire stelsel (Base-2). Om lange binaire reeksen leesbaar te maken voor ontwikkelaars, gebruikt de informatica hexadecimale (Base-16) en octale (Base-8) notaties, die bits groeperen in nibbles (4 bits) en bytes (8 bits).',
      'Moderne microprocessors representeren negatieve gehele getallen met Two\'s Complement (tweescomplement). Bij een 32-bits getal (int32) fungeert bit 31 als tekenbit: 0 staat voor positief of nul, en 1 voor negatief. Door alle bits te inverteren en 1 op te tellen, kan dezelfde optelhardware zowel optellingen als aftrekkingen uitvoeren.',
      'SciCalcX beschikt over een interactief 32-bits bitbord waarop afzonderlijke bits van bit 31 tot bit 0 kunnen worden omgezet, met directe conversies tussen hexadecimaal, decimaal, octaal en binair.'
    ],
    howToSteps: [
      'Selecteer actief talstelsel: Klik op HEX, DEC, OCT of BIN om de betreffende rij als actieve invoer in te stellen.',
      'Voer een getal in: Typ cijfers of hexadecimale letters (A-F) via uw toetsenbord of het programmeerpaneel.',
      'Schakel bits om: Klik op de afzonderlijke vakjes (0 tot 31) om de bitstatus om te wisselen en realtime decimale waarden te zien.',
      'Pas bitoperaties toe: Klik op NOT (~), LSH (<<) of RSH (>>) voor directe bittransformaties.',
      'Teken wisselen: Gebruik de "+/-" knop om de tekenomkering via tweescomplement te observeren.'
    ],
    formulas: [
      {
        title: 'Positiestelsel-Ontwikkeling in Grondtal b',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Elk getal is de som van cijfercoëfficiënten d_i vermenigvuldigd met machten van grondtal b (b = 2, 8, 10 of 16).'
      },
      {
        title: 'Two\'s Complement Tekenomkering',
        math: '-x = (\\sim x) + 1',
        explanation: 'Inverteert alle 32 bits (éénscomplement) en telt 1 op bij het minst significante bit.'
      },
      {
        title: 'Bitsgewijze Logische Operatoren',
        math: 'A \\& B \\text{ (AND)}, \\quad A \\mid B \\text{ (OR)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'AND levert 1 als beide bits 1 zijn; OR als minstens één bit 1 is; XOR als de bits verschillen.'
      },
      {
        title: 'Bitverschuivingsoperaties',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{en} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'k posities naar links schuiven vermenigvuldigt met 2ᵏ; naar rechts delen door 2ᵏ (afgerond naar min oneindig).'
      }
    ],
    workedExample: {
      title: 'Voorbeeld: Bitsgewijze NOT en Two\'s Complement van 42',
      input: 'Decimale Waarde = 42',
      steps: [
        { label: 'Stap 1: Binaire Weergave', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bits 5, 3 en 1 zijn hoog (32 + 8 + 2 = 42)' },
        { label: 'Stap 2: Hexadecimale Waarde', expression: 'Hex = 0x0000002A', note: '2 in bovenste nibble, A (=10) in onderste' },
        { label: 'Stap 3: Bitsgewijze NOT (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Elke 0 wordt 1 en elke 1 wordt 0' },
        { label: 'Stap 4: 32-Bits Evaluatie met Teken', expression: '~42 = -43 in decimaal (Two\'s Complement)', note: 'Formule: ~x = -(x + 1)' },
        { label: 'Stap 5: Verschuiving naar Links (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'Bits schuiven 1 positie naar links (verdubbeling)' }
      ],
      result: 'Decimaal 42 = Hex 2A = Bin 101010₂; ~42 = -43',
      explanation: 'SciCalcX synchroniseert alle 32 bits op het bitbord en toont hoe tweescomplement bitpatronen direct omzet in negatieve gehele getallen.'
    },
    howItWorks: {
      title: 'Hoe SciCalcX 32-Bits Logica in de Browser Verwerkt',
      paragraphs: [
        'JavaScript-bitoperatoren (|, &, ^, ~, <<, >>) zetten operanden vóór berekening automatisch om naar 32-bits getallen in tweescomplementformaat.',
        'SciCalcX houdt een interne int32-status bij. Zodra een bit of operator wordt ingedrukt, transformeren bitmaskers ((val >>> bit) & 1) de status van de 32 knoppen van bit 31 tot bit 0.',
        'Conversies naar hexadecimale, decimale, octale en binaire reeksen worden lokaal in milliseconden uitgevoerd voor directe interactie op hardware-niveau.'
      ]
    },
    limitations: {
      title: 'Precisielimieten & Integergrenzen',
      points: [
        'Bereik van 32-Bits met Teken: Werkt strikt tussen -2.147.483.648 (-2³¹) en +2.147.483.647 (+2³¹ - 1).',
        'Overloopgedrag: Ophogen voorbij +2.147.483.647 springt naar negatieve waarden (-2.147.483.648), zoals bij fysieke CPU\'s.',
        'Cyclische Verschuivingen: Verschuiven met een veelvoud van 32 roteert (bijv. x << 32 is gelijk aan x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Veronderstellen dat Rekenkundige Verschuiving (>>) Vult met Nullen bij Negatieve Getallen',
        fix: 'Rekenkundige verschuiving (>>) behoudt het tekenbit (vult met 1). Logische verschuiving (>>>) vult met 0.'
      },
      {
        mistake: 'Bitsgewijze NOT (~) Verwisselen met Logische NOT (!)',
        fix: 'Bitsgewijze NOT inverteert alle 32 bits (~0 = -1). Logische NOT evalueert booleaanse waarheidswaarden.'
      },
      {
        mistake: 'Ongeldige Tekens Invoeren voor het Gekozen Talstelsel (bijv. "8" in Octaal)',
        fix: 'Octaal accepteert alleen 0–7; binair 0 en 1; hexadecimaal 0–9 en A–F.'
      }
    ],
    useCases: [
      {
        title: 'Embedded Systems & Microcontrollers',
        desc: 'Inspecteren van hardware-stuurregisters, GPIO-pinmaskers en bitvelden in microcontrollers.'
      },
      {
        title: 'Netwerkpakket-Header Decoding',
        desc: 'Maskeren en verschuiven van IP/TCP-headers om poortnummers, flags en subnetmaskers te extraheren.'
      },
      {
        title: 'Game Development & Optimalisatie',
        desc: 'Gebruik van snelle bitborden om schaakborden of collisiemaskers in één enkele instructiecyclus te evalueren.'
      }
    ],
    relatedTools: [
      { title: 'Code Tutor & Compiler', desc: 'Schrijf, compileer en voer bitsgewijze algoritmen uit in C++ en Python.', href: '/compiler', badge: 'Sandbox' },
      { title: 'Wetenschappelijke Rekenmachine', desc: 'Voer wetenschappelijke berekeningen en machten uit.', href: '/', badge: 'Rekenkunde' },
      { title: 'Matrix Calculator', desc: 'Bereken determinanten en matrixbewerkingen.', href: '/matrix', badge: 'Lineaire Algebra' }
    ]
  }
};
