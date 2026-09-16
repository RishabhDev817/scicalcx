import type { CalculatorPedagogyData } from '../calculatorData';

export const dePedagogy: Record<string, CalculatorPedagogyData> = {
  scientific: {
    conceptBadge: 'Mathematische Grundlagen',
    conceptTitle: 'Algebraische Hierarchie & Gleitkommazahlensysteme',
    conceptDescription: [
      'Ein wissenschaftlicher Taschenrechner berechnet zusammengesetzte mathematische Ausdrücke unter Einhaltung strenger Operator-Rangfolgeregeln (Punkt-vor-Strich-Rechnung bzw. PEMDAS/BODMAS: Klammern, Potenzen, Multiplikation & Division, Addition & Subtraktion). Bei verschachtelten Formeln wie 3 + 4 × 2 / (1 - 5)^2 stellt der Berechnungs-Parser die niederwertige Addition zurück, bis alle Klammerausdrücke, Potenzen und Multiplikationen ausgewertet sind.',
      'Moderne digitale Prozessoren führen Gleitkommaberechnungen gemäß IEEE-754-Standard mit doppelter Genauigkeit (float64) durch. Da bestimmte Dezimalbrüche (wie 0,1 oder 0,2) im Binärsystem unendliche periodische Entwicklungen aufweisen, erzeugt die direkte Binärarithmetik minimale Rundungsartefakte (z. B. 0.1 + 0.2 = 0.30000000000000004). SciCalcX wendet eine Epsilon-basierte Normalisierung an, um typische Darstellungsartefakte der Gleitkommaarithmetik in den angezeigten Ergebnissen auf bis zu 12 Dezimalstellen zu reduzieren.',
      'Trigonometrische Funktionen (Sinus, Kosinus, Tangens) basieren auf kontinuierlichen Winkelmaßen. Die Unterscheidung zwischen Bogenmaß/Radiant (wobei 2π genau 360° entspricht) und Gradmaß (DEG) ist in Physik, Geometrie und Ingenieurwesen unabdingbar.'
    ],
    howToSteps: [
      'Winkeleinheit festlegen: Schalten Sie in der Statusleiste zwischen DEG (Grad) und RAD (Bogenmaß) um.',
      'Ausdruck eingeben: Tippen Sie direkt über die Tastatur oder nutzen Sie das Display-Tastenfeld.',
      'Klammern zur Strukturierung nutzen: Fassen Sie Zähler- oder Nennerterme ein, um die gewünschte Rangfolge sicherzustellen.',
      'Berechnen: Drücken Sie "=" auf dem Tastenfeld oder die Eingabetaste (Enter) auf Ihrer Tastatur.',
      'Ergebnis formatieren: Nutzen Sie die Taste S-D, um zwischen Dezimalbruch und exaktem Bruch zu wechseln.'
    ],
    formulas: [
      {
        title: 'Operator-Rangfolge (PEMDAS)',
        math: 'P → E (^) → M/D (*, /) → A/S (+, -)',
        explanation: 'Gleichrangige Operatoren werden von links nach rechts ausgewertet; unäres Minus und Potenzen binden von rechts.'
      },
      {
        title: 'Umrechnung Gradmaß in Bogenmaß',
        math: 'θ_rad = θ_deg × (π / 180°)',
        explanation: 'Alle internen trigonometrischen Funktionen der CPU erwarten Eingaben im Bogenmaß. Im DEG-Modus erfolgt die Umrechnung vorab.'
      },
      {
        title: 'Logarithmische Basiswechselformel',
        math: 'log_b(x) = ln(x) / ln(b)',
        explanation: 'Der natürliche Logarithmus (ln) verwendet die Basis e ≈ 2,71828; der Zehnerlogarithmus (log) die Basis 10.'
      },
      {
        title: 'Epsilon-Präzisionsnormalisierung',
        math: '|x - round(x)| < 1e-12 ⟹ x = round(x)',
        explanation: 'Die Epsilon-Bereinigung entfernt IEEE-754-Binärrundungsrauschen für saubere Dezimalanzeigen.'
      }
    ],
    workedExample: {
      title: 'Schritt-für-Schritt-Beispiel: Zusammengesetzte Formel',
      input: '4 × sin(30°) + √(25) - 2^3',
      steps: [
        { label: 'Schritt 1: Trigonometrie', expression: 'sin(30°) = 0.5', note: 'Im DEG-Modus ergibt sin(30°) genau 1/2' },
        { label: 'Schritt 2: Multiplikation', expression: '4 × 0.5 = 2.0', note: 'Berechnung des linken Produkts' },
        { label: 'Schritt 3: Quadratwurzel', expression: '√(25) = 5.0', note: 'Wurzelfunktion auswerten' },
        { label: 'Schritt 4: Potenzierung', expression: '2^3 = 8.0', note: 'Zwei hoch drei berechnen' },
        { label: 'Schritt 5: Addition & Subtraktion', expression: '2.0 + 5.0 - 8.0 = -1.0', note: 'Lineare Berechnung von links nach rechts' }
      ],
      result: '-1',
      explanation: 'Gemäß Operatorhierarchie werden Klammern, Wurzeln und Potenzen vor der linearen Addition und Subtraktion ausgewertet, was exakt -1 ergibt.'
    },
    howItWorks: {
      title: 'So berechnet SciCalcX Ausdrücke im Browser',
      paragraphs: [
        'SciCalcX nutzt eine zweistufige Parsing-Engine in clientseitigem TypeScript. Zuerst zerlegt die lexikalische Tokenisierung die Zeichenkette in Zahlen, Variablen, Konstanten (π, e), Operatoren (+, -, *, /, ^) und mathematische Funktionen.',
        'Anschließend überführt ein Shunting-Yard-Parser die Infixnotation mittels Operator- und Operanden-Stacks in die Umgekehrte Polnische Notation (UPN/RPN). Nicht geschlossene Klammern werden sofort gemeldet.',
        'Eine stackbasierte RPN-Maschine wertet die Warteschlange mit IEEE-754-Gleitkommaregistern (float64) aus und normalisiert das Ergebnis über Epsilon-Filter.'
      ]
    },
    limitations: {
      title: 'Präzisionsgrenzen & numerische Schranken',
      points: [
        'Gleitkomma-Überlauf (Overflow): Werte oberhalb ±1,7976931348623157 × 10³⁰⁸ laufen gegen Infinity.',
        'Gleitkomma-Unterlauf (Underflow): Nicht-Null-Werte unterhalb ±5,0 × 10⁻³²⁴ konvergieren zu 0.',
        'Definitionsbereichsfehler: Quadratwurzeln negativer Zahlen oder ln(x) für x ≤ 0 erzeugen einen expliziten Bereichsfehler.',
        'Trigonometrische Singularitäten: tan(90°) oder tan(270°) liefern aufgrund der Gleitkommadarstellung von π/2 extrem große oder undefinierte Werte.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Ungleichgewichtige Klammern: z. B. Eingabe von "(2 + 3 * (4 - 1)"',
        fix: 'Achten Sie auf den Klammerzähler links unten, um sicherzustellen, dass jede "(" durch ")" geschlossen ist.'
      },
      {
        mistake: 'Grad- vs. Bogenmaß-Verwechslung: sin(90) liefert 0,89399 statt 1',
        fix: '0,89399 ist sin(90 rad). Schalten Sie oben auf den DEG-Modus um, um sin(90°) = 1 zu erhalten.'
      },
      {
        mistake: 'Implizite Multiplikationsmehrdeutigkeit: Eingabe von "2(3+4)"',
        fix: 'Verwenden Sie stets ein explizites Multiplikationszeichen: "2 * (3 + 4)".'
      }
    ],
    useCases: [
      {
        title: 'Physik & Kinematik',
        desc: 'Zerlegung von Kraftvektoren in orthogonale Komponenten mittels Sinus und Kosinus sowie Wurfparabelberechnungen.'
      },
      {
        title: 'Elektrotechnik',
        desc: 'Berechnung von Blindwiderständen bei Wechselstrom, Phasenwinkeln und logarithmischen Dezibel-Verhältnissen (20 log(U_aus / U_ein)).'
      },
      {
        title: 'Akademische Analysis & MINT',
        desc: 'Prüfung algebraischer Umformungen, Auswertung gebrochener Polynome und exponentieller Wachstumsprozesse.'
      }
    ],
    relatedTools: [
      { title: 'Matrix-Rechner', desc: 'Lineare Gleichungssysteme, Determinanten und inverse Matrizen berechnen.', href: '/matrix', badge: 'Lineare Algebra' },
      { title: 'Analysis-Rechner', desc: 'Bestimmte Integrale nach Simpson und numerische Ableitungen berechnen.', href: '/calculus', badge: 'Analysis' },
      { title: 'Grafikrechner', desc: '2D-Funktionen plotten, Nullstellen und Asymptoten dynamisch analysieren.', href: '/graphing', badge: 'Geometrie' }
    ]
  },

  matrix: {
    conceptBadge: 'Grundlagen der Linearen Algebra',
    conceptTitle: 'Matrizentransformationen, Determinanten & Vektorräume',
    conceptDescription: [
      'Eine Matrix ist eine rechteckige Anordnung numerischer Elemente in m Zeilen und n Spalten. In Mathematik und Informatik repräsentieren Matrizen lineare Transformationen, die mehrdimensionale Vektorräume skalieren, rotieren, spiegeln oder scheren.',
      'Die Matrizenmultiplikation ist nicht kommutativ: Für zwei Matrizen A und B gilt im Allgemeinen A × B ≠ B × A. Zudem müssen die inneren Dimensionen übereinstimmen: Eine m × k Matrix kann nur mit einer k × n Matrix multipliziert werden, wobei jedes Element das Skalarprodukt aus Zeile i und Spalte j darstellt.',
      'Die Determinante, det(A), ist ein skalarer Wert quadratischer Matrizen. Geometrisch beschreibt sie den Skalierungsfaktor, um den eine Transformation Flächen (in 2D) oder Volumina (in 3D) verändert. Eine Matrix ist genau dann invertierbar, wenn det(A) ≠ 0 ist.'
    ],
    howToSteps: [
      'Dimensionen festlegen: Wählen Sie 2x2 oder 3x3 für Matrix A und Matrix B aus.',
      'Koeffizienten eingeben: Tragen Sie Zahlenwerte (ganzzahlig oder dezimal) in die entsprechenden Zellen ein.',
      'Rechenoperation wählen: Klicken Sie auf Addition (A + B), Subtraktion (A - B) oder Multiplikation (A × B).',
      'Unäre Eigenschaften ermitteln: Klicken Sie auf Determinante, Inverse oder Transponierte von Matrix A.',
      'Rechenweg nachvollziehen: Prüfen Sie die detaillierte Schritt-für-Schritt-Aufschlüsselung unterhalb der Ergebnismatrix.'
    ],
    formulas: [
      {
        title: 'Matrizenmultiplikation',
        math: 'C_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}',
        explanation: 'Jeder Eintrag der Produktmatrix C entsteht als Skalarprodukt von Zeile i der Matrix A mit Spalte j der Matrix B.'
      },
      {
        title: '2×2-Determinantenformel',
        math: '\\det(A) = ad - bc \\quad \\text{für } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        explanation: 'Differenz des Produkts der Hauptdiagonale und des Produkts der Nebendiagonale.'
      },
      {
        title: '3×3-Laplacescher Entwicklungssatz',
        math: '\\det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)',
        explanation: 'Entwicklung nach der ersten Zeile unter Verwendung alternierender Vorzeichen und 2×2-Unterdeterminanten.'
      },
      {
        title: 'Matrixinversion über die Adjunkte',
        math: 'A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)',
        explanation: 'Die Inverse existiert nur bei det(A) ≠ 0. Sie entspricht der transponierten Kofaktormatrix geteilt durch die Determinante.'
      }
    ],
    workedExample: {
      title: 'Schritt-für-Schritt-Beispiel: Inversion einer 2×2-Matrix',
      input: 'Matrix A = [[4, 7], [2, 6]]',
      steps: [
        { label: 'Schritt 1: Determinante', expression: 'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10', note: 'det(A) ≠ 0, Inverse existiert' },
        { label: 'Schritt 2: Hauptdiagonale tauschen', expression: 'a ↔ d: [6, 4]', note: 'Tausch von A[0,0] und A[1,1]' },
        { label: 'Schritt 3: Nebendiagonale negieren', expression: 'b → -7, c → -2', note: 'Vorzeichenwechsel für A[0,1] und A[1,0]' },
        { label: 'Schritt 4: Adjunkte Matrix', expression: 'adj(A) = [[6, -7], [-2, 4]]', note: 'Aufstellen der Adjunkten' },
        { label: 'Schritt 5: Skalare Division', expression: 'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]', note: 'Multiplikation jedes Elements mit 1/det' }
      ],
      result: '[[0.6, -0.7], [-0.2, 0.4]]',
      explanation: 'Überprüfung: A × A⁻¹ = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]] = [[1, 0], [0, 1]], die 2×2-Einheitsmatrix.'
    },
    howItWorks: {
      title: 'So führt SciCalcX Matrizenrechnungen im Browser aus',
      paragraphs: [
        'SciCalcX verarbeitet alle Matrizenoperationen direkt im Browser mittels typisierter JavaScript-Arrays. Alle Zelleingaben werden numerisch validiert und unterstützen negative sowie Dezimalwerte.',
        'Für 2×2-Determinanten wird die geschlossene Formel ad - bc genutzt, während 3×3-Systeme den Laplaceschen Entwicklungssatz anwenden. Vor der Invertierung wird die Determinante (|det| < 1e-12) auf Singularität geprüft.',
        'Ergebnisse durchlaufen eine Epsilon-Normalisierung, damit Rundungsreste bei theoretischen Nullwerten nicht als 1e-16 aufscheinen.'
      ]
    },
    limitations: {
      title: 'Präzisionsgrenzen & Schranken der Linearen Algebra',
      points: [
        'Singuläre Matrizen: Wenn det(A) = 0 ist, existiert keine inverse Matrix. Der Rechner meldet "Singuläre Matrix (det = 0)".',
        'Schlecht konditionierte Systeme: Liegt die Determinante extrem nahe bei null, können Rundungsfehler bei Divisionen auftreten.',
        'Dimensionsbeschränkung: Optimiert auf 2×2- und 3×3-Matrizen für Schule, Studium und 3D-Computergrafik.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Annahme, dass Matrizenmultiplikation kommutativ sei (A × B = B × A)',
        fix: 'Das Produkt hängt von der Zeile-mal-Spalte-Reihenfolge ab. Im Allgemeinen gilt A × B ≠ B × A.'
      },
      {
        mistake: 'Versuch, eine singuläre Matrix zu invertieren',
        fix: 'Prüfen Sie zuerst die Determinante. Ist det(A) = 0, sind die Zeilen linear abhängig und keine Inverse existiert.'
      },
      {
        mistake: 'Verwechslung von Transponierter und Inverser',
        fix: 'Die Transponierte (Aᵀ) vertauscht nur Zeilen und Spalten. Die Inverse (A⁻¹) erfüllt A × A⁻¹ = I.'
      }
    ],
    useCases: [
      {
        title: '3D-Computergrafik',
        desc: 'Berechnung von Model-View-Projection-Transformationen (MVP), Kamerarotationen und Skalierungsmatrizen.'
      },
      {
        title: 'Lineare Gleichungssysteme',
        desc: 'Lösen von Gleichungssystemen Ax = b über Matrixinversion x = A⁻¹b oder die Cramersche Regel.'
      },
      {
        title: 'Netzwerk- und Schaltkreisanalyse',
        desc: 'Aufstellen von Knotenleitwertmatrizen und Maschenstromgleichungen in der Elektrotechnik.'
      }
    ],
    relatedTools: [
      { title: 'Wissenschaftlicher Rechner', desc: 'Mehrzeilige Rechnungen und trigonometrische Konvertierungen durchführen.', href: '/', badge: 'Arithmetik' },
      { title: 'Analysis-Rechner', desc: 'Bestimmte Integrale und numerische Ableitungen bestimmen.', href: '/calculus', badge: 'Analysis' },
      { title: 'Statistik-Suite', desc: 'Datenverteilungen, Stichprobenvarianz und Regressionsmodelle analysieren.', href: '/statistics', badge: 'Datenanalyse' }
    ]
  },

  calculus: {
    conceptBadge: 'Mathematische Analysis',
    conceptTitle: 'Differentielle Änderungsraten & Numerische Quadratur',
    conceptDescription: [
      'Die Analysis untersucht kontinuierliche Veränderungen. Die Differentialrechnung befasst sich mit momentanen Änderungsraten (Ableitungen, Kurvensteigungen), während die Integralrechnung die Akkumulation von Größen (Flächen unter Kurven) betrachtet.',
      'Während symbolische Verfahren geschlossene Stammfunktionen suchen, besitzen viele praktische Funktionen keine elementare Stammfunktion. Die numerische Analysis approximiert Raten und Flächen mittels präziser diskreter Stichprobenverfahren.',
      'SciCalcX implementiert eine Quadratur 4. Ordnung nach der zusammengesetzten Simpsonschen 1/3-Regel für Integrale sowie symmetrische zentrale Differenzenquotienten für Ableitungen.'
    ],
    howToSteps: [
      'Funktion f(x) eingeben: Nutzen Sie standardmäßige algebraische Syntax (z. B. x^2, sin(x), e^x, 2*x + 1).',
      'Für Bestimmte Integrale: Geben Sie die untere Grenze (a) und obere Grenze (b) ein und klicken Sie auf "Integral berechnen".',
      'Für Numerische Ableitungen: Legen Sie den Auswertungspunkt x₀ fest und klicken Sie auf "Ableitung f\'(x₀) berechnen".',
      'Für Polynomnullstellen: Geben Sie Koeffizienten für quadratische oder kubische Polynome ein und klicken Sie auf "Nullstellen finden".',
      'Ergebnis prüfen: Kontrollieren Sie die berechneten Werte auf eventuelle Unstetigkeitsstellen im Definitionsbereich.'
    ],
    formulas: [
      {
        title: 'Symmetrischer Differenzenquotient (Ableitung)',
        math: 'f\'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}',
        explanation: 'Auswertung zentraler Differenzen mit Schrittweite h = 10⁻⁶; Fehler 2. Ordnung kürzen sich für O(h²)-Genauigkeit heraus.'
      },
      {
        title: 'Zusammengesetzte Simpson 1/3-Regel (Integral)',
        math: '\\int_a^b f(x)dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4\\sum_{i \\text{ ungerade}} f(x_i) + 2\\sum_{i \\text{ gerade}} f(x_i) + f(x_n) \\right]',
        explanation: 'Unterteilt [a, b] in n = 1000 Teilintervalle und nähert die Kurve durch Parabelbögen mit Konvergenz 4. Ordnung O(h⁴) an.'
      },
      {
        title: 'Quadratische Lösungsformel (Nullstellen Grad 2)',
        math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Die Diskriminante Δ = b² - 4ac entscheidet über zwei reelle Lösungen (Δ > 0), eine doppelte (Δ = 0) oder komplexe Lösungen (Δ < 0).'
      },
      {
        title: 'Hauptsatz der Differential- und Integralrechnung',
        math: '\\int_a^b f(x)dx = F(b) - F(a) \\quad \\text{wobei } F\'(x) = f(x)',
        explanation: 'Verbindet Ableitung und Integral: Die akkumulierte Fläche entspricht der Differenz der Stammfunktionswerte.'
      }
    ],
    workedExample: {
      title: 'Schritt-für-Schritt-Beispiel: Bestimmtes Integral einer Parabel',
      input: 'f(x) = x^2 auf dem Intervall [0, 3]',
      steps: [
        { label: 'Analytische Stammfunktion', expression: '∫ x² dx = x³ / 3 + C', note: 'Standard-Potenzregel der Integration' },
        { label: 'Obere Grenze einsetzen', expression: 'F(3) = 3³ / 3 = 27 / 3 = 9.0', note: 'b = 3 einsetzen' },
        { label: 'Untere Grenze einsetzen', expression: 'F(0) = 0³ / 3 = 0.0', note: 'a = 0 einsetzen' },
        { label: 'Exaktes analytisches Ergebnis', expression: 'F(3) - F(0) = 9.0 - 0.0 = 9.0', note: 'Nettofläche unter der Kurve' },
        { label: 'SciCalcX Simpson 1/3 Ausgabe', expression: 'n = 1000 Schritte, h = 0.003 ⟹ Ergebnis = 9.000000', note: 'Exakt für Polynome bis zum 3. Grad' }
      ],
      result: '9.000',
      explanation: 'Da die Simpson-Regel parabolische Abschnitte exakt erfasst, integriert sie quadratische Polynome ohne Abbruchfehler und trifft exakt den analytischen Wert 9.'
    },
    howItWorks: {
      title: 'So berechnet SciCalcX Analysis im Browser',
      paragraphs: [
        'Bei Eingabe von f(x) kompiliert SciCalcX die Funktion in einen abstrakten UPN-Syntaxbaum, der sin, cos, tan, exp, ln, log, sqrt und Potenzen unterstützt.',
        'Für bestimmte Integrale teilt die Engine das Intervall [a, b] in n = 1000 Segmente mit Schrittweite h = (b - a)/1000 und gewichtet die Stützstellen nach Simpsons Formel.',
        'Für Ableitungen wertet sie f(x + h) und f(x - h) mit h = 10⁻⁶ aus. Die Differenzbildung löscht lineare Rundungsfehler für eine präzise Tangentensteigung aus.'
      ]
    },
    limitations: {
      title: 'Präzisionsgrenzen & numerische Schranken',
      points: [
        'Nicht-differenzierbare Knicke: Numerische Differenziation setzt Glattheit voraus. Bei Knickstellen wie f(x) = |x| bei x = 0 entsteht ein falscher Mittelwert.',
        'Vertikale Asymptoten: Integrationen über Polstellen hinweg (z. B. 1/x von -1 bis 1) führen zu numerischer Instabilität.',
        'Schrittweiten-Kompensation: Zwar ist h = 10⁻⁶ optimal, ein h unterhalb 10⁻¹² führt jedoch zu Auslöschungsfehlern in float64.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Vertauschen der Integrationsgrenzen (Untere Grenze > Obere Grenze)',
        fix: 'Integration von b nach a ergibt das Negative der Integration von a nach b (∫_b^a f = -∫_a^b f).'
      },
      {
        mistake: 'Verwendung falscher Variablennamen (z. B. f(t) statt f(x))',
        fix: 'Die Analysis-Engine differenziert und integriert nach der Variablen "x". Verwenden Sie "x" oder "X".'
      },
      {
        mistake: 'Erwartung geschlossener symbolischer Formeln',
        fix: 'SciCalcX berechnet numerische Werte (z. B. 3,14159) via Quadratur und keine geschlossenen algebraischen Formeln.'
      }
    ],
    useCases: [
      {
        title: 'Physik & Mechanische Arbeit',
        desc: 'Berechnung von Arbeit W = ∫ F(x) dx bei ortsabhängigen kontinuierlichen Kräften.'
      },
      {
        title: 'Wahrscheinlichkeit & Verteilungsfunktionen',
        desc: 'Berechnung von Verteilungsfunktionen (CDF) durch Integration von Wahrscheinlichkeitsdichten.'
      },
      {
        title: 'Signalverarbeitung & RMS-Spannung',
        desc: 'Ermittlung des Effektivwerts (RMS) periodischer Wechselspannungen über eine Periode.'
      }
    ],
    relatedTools: [
      { title: 'Grafikrechner', desc: 'Kurven, lokale Extrema und Tangentensteigungen interaktiv visualisieren.', href: '/graphing', badge: 'Kartesisches Studio' },
      { title: 'Wissenschaftlicher Rechner', desc: 'Präzise trigonometrische und exponentielle Ausdrücke berechnen.', href: '/', badge: 'Arithmetik' },
      { title: 'Code Tutor & Compiler', desc: 'Numerische Simulationsskripte in Python und C++ ausführen.', href: '/compiler', badge: 'Sandbox' }
    ]
  },

  graphing: {
    conceptBadge: 'Analytische Geometrie',
    conceptTitle: '2D-Funktionsdarstellung & Kartesische Koordinatenanalyse',
    conceptDescription: [
      'Ein 2D-Grafikrechner übersetzt algebraische Gleichungen in geometrische Kurven auf einer kartesischen Koordinatenebene. Durch Zuordnung von Eingangswerten (x) zu Ausgangswerten (y = f(x)) lassen sich Eigenschaften wie Stetigkeit, Nullstellen, Extrema und Asymptoten erfassen.',
      'Das digitale Plotten basiert auf hochauflösender numerischer Abtastung: Entlang der horizontalen Bildschirmbreite werden diskrete x-Koordinaten abgetastet, berechnet und auf einem HTML5 Canvas gezeichnet.',
      'Eine zentrale Herausforderung stellen vertikale Asymptoten und Unstetigkeitsstellen (wie tan(x) oder 1/x) dar. SciCalcX unterdrückt automatisch künstliche Verbindungslinien an Polstellen.'
    ],
    howToSteps: [
      'Funktion f(x) definieren: Geben Sie einen Ausdruck mit der Variablen x ein (z. B. x^2 - 4, sin(x), e^(-x^2)).',
      'Zweite Kurve g(x) hinzufügen: Optional eine zweite Funktion zum Vergleich und zur Schnittpunktanalyse eintragen.',
      'Ausschnitt anpassen: Nutzen Sie die Zoom-Schaltflächen (+ / -) oder ziehen Sie die Ebene mit Maus oder Touchscreen.',
      'Kennwerte ablesen: Überprüfen Sie das Analyse-Panel auf erkannte Nullstellen (x-Schnittpunkte), y-Achsenabschnitte und Extrema.',
      'Ansicht zurücksetzen: Klicken Sie auf "Ansicht zurücksetzen", um den Standardbereich [-10, 10] wiederherzustellen.'
    ],
    formulas: [
      {
        title: 'Pixel-zu-Koordinaten-Abbildung',
        math: 'x_{math} = x_{min} + \\frac{px}{width} \\times (x_{max} - x_{min})',
        explanation: 'Konvertiert die Bildschirm-Pixelspalte px (0 bis Canvasbreite) in die mathematische x-Koordinate.'
      },
      {
        title: 'Koordinaten-zu-Pixel-Projektion',
        math: 'py = height - \\left[ \\frac{y_{math} - y_{min}}{y_{max} - y_{min}} \\times height \\right]',
        explanation: 'Da HTML5 Canvas die y-Achse nach unten misst, wird die Achse invertiert, um dem mathematischen Koordinatensystem zu entsprechen.'
      },
      {
        title: 'Bedingung für Extremstellen',
        math: 'f\'(x) = 0 \\quad \\text{und} \\quad f\'\'(x) \\neq 0',
        explanation: 'Lokale Maxima erfordern f\'(x) = 0 und f\'\'(x) < 0; lokale Minima f\'(x) = 0 und f\'\'(x) > 0.'
      },
      {
        title: 'Steigungsschwellenwert für Polstellen',
        math: '|y_{i} - y_{i-1}| > K \\times \\Delta y_{screen} \\implies \\text{Stift anheben}',
        explanation: 'Verhindert fehlerhafte Verbindungslinien an vertikalen Asymptoten, wenn die numerische Steigung das Limit überschreitet.'
      }
    ],
    workedExample: {
      title: 'Schritt-für-Schritt-Beispiel: Kurvendiskussion der Parabel f(x) = x² - 4',
      input: 'f(x) = x^2 - 4',
      steps: [
        { label: 'Y-Achsenabschnitt', expression: 'f(0) = 0² - 4 = -4', note: 'Koordinaten: (0, -4)' },
        { label: 'Nullstellen (X-Schnittpunkte)', expression: 'x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2', note: 'Koordinaten: (-2, 0) und (2, 0)' },
        { label: 'Erste Ableitung f\'(x)', expression: 'f\'(x) = 2x = 0 ⟹ x = 0', note: 'Stationärer Punkt bei x = 0' },
        { label: 'Zweite Ableitung f\'\'(x)', expression: 'f\'\'(x) = 2 > 0', note: 'Positive Krümmung kennzeichnet ein globales Minimum' },
        { label: 'Scheitelpunkt & Extremum', expression: 'Tiefpunkt bei (0, -4)', note: 'Nach oben geöffnete Parabel mit Symmetrieachse x = 0' }
      ],
      result: 'Nullstellen bei x = -2, 2; Tiefpunkt bei (0, -4)',
      explanation: 'SciCalcX plottet die stetige Parabelkurve und hebt den Scheitelpunkt bei (0, -4) sowie die Nullstellen bei x = -2 und 2 hervor.'
    },
    howItWorks: {
      title: 'So zeichnet SciCalcX Funktionsgraphen im Browser',
      paragraphs: [
        'SciCalcX rendert Graphen nativ via HTML5 Canvas 2D ohne schwere Drittbibliotheken, was flüssige Reaktionen beim Zoomen und Verschieben ermöglicht.',
        'Für jede Pixelspalte wandelt die Engine Bildschirmkoordinaten in x-Werte um, berechnet y über die RPN-Maschine und projiziert zurück auf den Bildschirm.',
        'Zeigen aufeinanderfolgende Punkte übermäßige vertikale Sprünge an Polstellen, setzt der Zeichenalgorithmus den Stift ab.'
      ]
    },
    limitations: {
      title: 'Präzisionsgrenzen & grafische Diskretisierung',
      points: [
        'Pixelauflösung: Details, die kleiner als ein Bildschirmpixel sind, erfordern ein Heranzoomen zur Betrachtung.',
        'Hochfrequente Oszillation: Funktionen wie sin(1/x) nahe 0 schwingen schneller als die Abtastrate, was zu Aliasing führt.',
        'Extrembereiche: Zoomen über 10¹⁰ hinaus oder unter 10⁻¹² erreicht die Grenzen der IEEE-754-Genauigkeit.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Vergessen von Klammern in Nennern (z. B. "1/x+1")',
        fix: '"1/x+1" wird als (1/x) + 1 interpretiert. Tippen Sie "1/(x+1)", um die Asymptote nach x = -1 zu verschieben.'
      },
      {
        mistake: 'Kurve außerhalb des sichtbaren Fensters',
        fix: 'Klicken Sie auf "Herauszoomen" oder überprüfen Sie die Wertebereiche der Funktion.'
      },
      {
        mistake: 'Inkompatible Konstantenbezeichnungen',
        fix: 'Nutzen Sie "pi" oder "π" für die Kreiszahl und "e" für die Eulersche Zahl.'
      }
    ],
    useCases: [
      {
        title: 'Polynom-Kurvendiskussion',
        desc: 'Überprüfung von Nullstellen, Wendepunkten und Extremwerten für Schul- und Studienaufgaben.'
      },
      {
        title: 'Trigonometrische Schwingungen',
        desc: 'Visualisierung von Amplitudenmodulation, Frequenzverdopplung (sin(2x)) und Phasenverschiebungen.'
      },
      {
        title: 'Wirtschaft & Optimierung',
        desc: 'Darstellung von Kosten-, Erlös- und Gewinnfunktionen zur Bestimmung von Gewinnschwellen.'
      }
    ],
    relatedTools: [
      { title: 'Analysis-Rechner', desc: 'Hochpräzise numerische Ableitungen und Simpson-Integrale berechnen.', href: '/calculus', badge: 'Analysis' },
      { title: 'Wissenschaftlicher Rechner', desc: 'Winkelfunktionen und Logarithmen in Grad oder Radiant berechnen.', href: '/', badge: 'Arithmetik' },
      { title: 'Statistik-Suite', desc: 'Stichprobenvarianz, Standardabweichung und Regression berechnen.', href: '/statistics', badge: 'Datenanalyse' }
    ]
  },

  statistics: {
    conceptBadge: 'Datenanalyse & Wahrscheinlichkeitsrechnung',
    conceptTitle: 'Deskriptive Statistik, Lagemaße & Stichprobenvarianz',
    conceptDescription: [
      'Die deskriptive Statistik fasst die wesentlichen Eigenschaften numerischer Datensätze zusammen. Anstelle unübersichtlicher Einzeltabellen liefern Kennzahlen prägnante Aussagen über die zentrale Tendenz (Mittelwert, Median, Modalwert) und die Streuung (Spannweite, Varianz, Standardabweichung).',
      'Eine grundlegende Unterscheidung besteht zwischen Grundgesamtheit (Population) und Stichprobe. Berechnet man die Varianz einer Stichprobe durch Division der quadrierten Abweichungen durch N, unterschätzt dies die wahre Populationsvarianz systematisch.',
      'Um diese Verzerrung zu beheben, nutzt die Bessel-Korrektur N - 1 Freiheitsgrade bei der Stichprobenvarianz (s²). SciCalcX berechnet Stichproben- (s², s) und Populationsmaße (σ², σ) simultan für präzise Labor- und Studienberichte.'
    ],
    howToSteps: [
      'Datensatz eingeben: Geben Sie Zahlen getrennt durch Kommas, Leerzeichen oder Zeilenumbrüche ein.',
      'Beispieldaten laden: Klicken Sie auf den Button, um einen vorkonfigurierten Datensatz zu testen.',
      'Lagemaße prüfen: Lesen Sie Mittelwert, Median und Modalwert in der Kennzahlenübersicht ab.',
      'Streuung analysieren: Überprüfen Sie Spannweite, Stichprobenvarianz (s²), Populationsvarianz (σ²) und Standardabweichungen.',
      'Im Verlauf sichern: Klicken Sie auf "Analyse im Verlauf speichern", um Ihre Werte lokal festzuhalten.'
    ],
    formulas: [
      {
        title: 'Arithmetisches Mittel',
        math: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i',
        explanation: 'Der Schwerpunkt des Datensatzes: Summe aller Werte dividiert durch die Anzahl n.'
      },
      {
        title: 'Stichprobenvarianz (Bessel-Korrektur)',
        math: 's^2 = \\frac{1}{n - 1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: 'Teilt die Abweichungsquadratsumme durch n - 1 für einen erwartungstreuen Schätzer der Populationsvarianz.'
      },
      {
        title: 'Populationsvarianz',
        math: '\\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\mu)^2',
        explanation: 'Wird angewendet, wenn der Datensatz die gesamte Grundgesamtheit umfasst.'
      },
      {
        title: 'Standardabweichung',
        math: 's = \\sqrt{s^2} \\quad \\text{und} \\quad \\sigma = \\sqrt{\\sigma^2}',
        explanation: 'Quadratwurzel der Varianz; gibt die Streuung in der ursprünglichen Maßeinheit der Daten an.'
      }
    ],
    workedExample: {
      title: 'Schritt-für-Schritt-Beispiel: Stichprobenvarianz für [2, 4, 4, 4, 5, 5, 7, 9]',
      input: 'Daten: 2, 4, 4, 4, 5, 5, 7, 9  (n = 8)',
      steps: [
        { label: 'Schritt 1: Summe & Mittelwert', expression: 'Summe = 40 ⟹ Mittelwert x̄ = 40 / 8 = 5.0', note: 'Der Durchschnittswert beträgt 5,0' },
        { label: 'Schritt 2: Abweichungen (x - x̄)', expression: '[-3, -1, -1, -1, 0, 0, +2, +4]', note: 'Mittelwert von jedem Wert subtrahieren' },
        { label: 'Schritt 3: Quadrierte Abweichungen', expression: '[9, 1, 1, 1, 0, 0, 4, 16]', note: 'Jede Abweichung quadrieren' },
        { label: 'Schritt 4: Quadratsumme (SS)', expression: '9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32.0', note: 'Gesamtsumme der quadrierten Abweichungen' },
        { label: 'Schritt 5: Stichprobenvarianz (s²)', expression: 's² = 32.0 / (8 - 1) = 32 / 7 ≈ 4.5714', note: 'Geteilt durch n - 1 = 7 (Bessel-Korrektur)' },
        { label: 'Schritt 6: Standardabweichung (s)', expression: 's = √(4.5714) ≈ 2.1381', note: 'Quadratwurzel der Stichprobenvarianz' }
      ],
      result: 'Mittelwert = 5.0, Median = 4.5, Modalwert = 4, s² ≈ 4.5714, σ² = 4.0',
      explanation: 'Der Unterschied ist bedeutsam: Die Populationsvarianz teilt 32 durch 8 (= 4,0), die Stichprobenvarianz durch 7 (≈ 4,5714), um Schätzverzerrungen auszugleichen.'
    },
    howItWorks: {
      title: 'So berechnet SciCalcX statistische Kennwerte im Browser',
      paragraphs: [
        'SciCalcX verarbeitet Eingaben über reguläre Ausdrücke, die Kommas, Leerzeichen und Umbrüche trennen und numerische Werte in float64-Gleitkommazahlen überführen.',
        'Die Daten werden intern sortiert, um den Median (mittleres Element bei ungerader Anzahl, Durchschnitt der beiden mittleren bei gerader) und den Modalwert per Häufigkeitstabelle zu bestimmen.',
        'Die Abweichungsquadratsumme wird in zwei Durchläufen ermittelt: Zuerst wird der exakte Mittelwert bestimmt, dann die Abweichungen (x - x̄)² aufsummiert, was Auslöschungsfehler vermeidet.'
      ]
    },
    limitations: {
      title: 'Präzisionsgrenzen & statistische Annahmen',
      points: [
        'Mindeststichprobengröße: Stichprobenvarianz erfordert mindestens zwei Beobachtungen (n ≥ 2), da n - 1 bei n = 1 zu einer Division durch null führt.',
        'Ausreißerempfindlichkeit: Mittelwert und Varianz reagieren empfindlich auf Extremwerte. Bei schiefen Verteilungen ist der Median robuster.',
        'Multimodale Daten: Treten mehrere Werte gleich häufig als Maximum auf, werden alle Modalwerte kommagetrennt ausgewiesen.'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Verwendung der Populationsvarianz (σ²) statt der Stichprobenvarianz (s²) im Labor',
        fix: 'Labormessungen sind fast immer Stichproben. Verwenden Sie s² mit der Bessel-Korrektur (n - 1).'
      },
      {
        mistake: 'Verwechslung der Einheiten von Varianz und Standardabweichung',
        fix: 'Varianz hat Quadrateinheiten (z. B. m²); die Standardabweichung die Originaleinheit (m).'
      },
      {
        mistake: 'Annahme, Varianz gleich null bedeute Werte gleich null',
        fix: 'Eine Varianz von null bedeutet, dass alle Werte identisch sind (z. B. [5, 5, 5]), nicht dass sie null sind.'
      }
    ],
    useCases: [
      {
        title: 'Experimentelle Laborfehler',
        desc: 'Quantifizierung von Messunsicherheiten, Streuung und Zufallsfehlern im Physik- und Chemiepraktikum.'
      },
      {
        title: 'Qualitätskontrolle & Six Sigma',
        desc: 'Überwachung von Fertigungstoleranzen und Prozessstreuungen in industriellen Produktionslinien.'
      },
      {
        title: 'Finanzrisiko & Volatilität',
        desc: 'Analyse von Renditevarianzen und Berechnung historischer Standardabweichungen von Aktienkursen.'
      }
    ],
    relatedTools: [
      { title: 'Wissenschaftlicher Rechner', desc: 'Wissenschaftliche Berechnungen und Potenzen durchführen.', href: '/', badge: 'Arithmetik' },
      { title: 'Analysis-Rechner', desc: 'Kontinuierliche Wahrscheinlichkeitsdichtefunktionen integrieren.', href: '/calculus', badge: 'Analysis' },
      { title: 'Grafikrechner', desc: 'Verteilungen und Funktionskurven auf kartesischen Koordinatengittern plotten.', href: '/graphing', badge: 'Kartesisch' }
    ]
  },

  programming: {
    conceptBadge: 'Rechnerarchitektur & Systeme',
    conceptTitle: 'Basis-N-Zahlensysteme, Bitboards & 32-Bit-Zweierkomplement',
    conceptDescription: [
      'Digitale Computerhardware arbeitet ausschließlich im Binärsystem (Basis 2). Um lange Bitfolgen für Entwickler lesbar zu machen, nutzt die Informatik das Hexadezimal- (Basis 16) und Oktalsystem (Basis 8), welche Bits in Halbbytes (Nibbles zu 4 Bit) und Bytes (8 Bit) bündeln.',
      'Moderne Prozessoren stellen vorzeichenbehaftete negative Ganzzahlen im Zweierkomplement dar. Bei einer 32-Bit-Zahl (int32) dient das höchstwertige Bit (Bit 31) als Vorzeichenbit: 0 für positive Zahlen/Null, 1 für negative Zahlen. Die Inversion aller Bits plus 1 gestattet es derselben Addierer-Hardware, Additionen und Subtraktionen auszuführen.',
      'SciCalcX bietet ein interaktives 32-Bit-Bitboard, auf dem einzelne Bits vom MSB (Bit 31) bis zum LSB (Bit 0) per Klick umgeschaltet werden können, mit sofortiger Synchronisation zwischen Hexadezimal-, Dezimal-, Oktal- und Binärwerten.'
    ],
    howToSteps: [
      'Aktive Eingabebasis wählen: Klicken Sie auf HEX, DEC, OCT oder BIN, um die Eingabezeile zu aktivieren.',
      'Wert eingeben: Tippen Sie numerische oder hexadezimale Zeichen (A-F) über Tastatur oder Display-Pad ein.',
      'Bits auf dem Bitboard toggeln: Klicken Sie auf die Bit-Felder (0 bis 31), um Bits umzuschalten und Dezimalwerte live zu sehen.',
      'Bitweise Operatoren anwenden: Nutzen Sie NOT (~), LSH (<<) oder RSH (>>), um Bitoperationen sofort auszuführen.',
      'Vorzeichen umschalten: Nutzen Sie die Taste "+/-", um die Vorzeichenumkehr im Zweierkomplement zu beobachten.'
    ],
    formulas: [
      {
        title: 'Basis-N-Stellenwertentwicklung',
        math: 'V = \\sum_{i=0}^{n-1} d_i \\times b^i',
        explanation: 'Jede Zahl ist die Summe ihrer Ziffernkoeffizienten multipliziert mit den Potenzen der Basis b (b = 2, 8, 10 oder 16).'
      },
      {
        title: 'Zweierkomplement-Vorzeichenumkehr',
        math: '-x = (\\sim x) + 1',
        explanation: 'Invertiert alle 32 Bits (Einerkomplement) und addiert 1 zum niederwertigsten Bit.'
      },
      {
        title: 'Bitweise Logikoperatoren',
        math: 'A \\& B \\text{ (UND)}, \\quad A \\mid B \\text{ (ODER)}, \\quad A \\oplus B \\text{ (XOR)}',
        explanation: 'UND ergibt 1, wenn beide Bits 1 sind; ODER, wenn mindestens eines 1 ist; XOR, wenn sie sich unterscheiden.'
      },
      {
        title: 'Bitverschiebe-Operationen (Shifts)',
        math: 'x \\ll k = x \\times 2^k \\quad \\text{und} \\quad x \\gg k = \\lfloor x / 2^k \\rfloor',
        explanation: 'Linksshift um k Bits multipliziert mit 2ᵏ; Rechtsshift dividiert durch 2ᵏ (abgerundet gegen minus unendlich).'
      }
    ],
    workedExample: {
      title: 'Schritt-für-Schritt-Beispiel: Bitweises NOT & Zweierkomplement von 42',
      input: 'Dezimalwert = 42',
      steps: [
        { label: 'Schritt 1: Binärdarstellung', expression: '42 = 0000 0000 0000 0000 0000 0000 0010 1010₂', note: 'Bits 5, 3 und 1 gesetzt (32 + 8 + 2 = 42)' },
        { label: 'Schritt 2: Hexadezimalwert', expression: 'Hex = 0x0000002A', note: '2 im oberen Nibble, A (=10) im unteren' },
        { label: 'Schritt 3: Bitweises NOT (~42)', expression: '~42 = 1111 1111 1111 1111 1111 1111 1101 0101₂', note: 'Jede 0 wird zur 1, jede 1 zur 0' },
        { label: 'Schritt 4: Vorzeichenbehaftete 32-Bit-Auswertung', expression: '~42 = -43 in Dezimal (Zweierkomplement)', note: 'Formel: ~x = -(x + 1)' },
        { label: 'Schritt 5: Linksshift (42 << 1)', expression: '42 << 1 = 84 (0x54)', note: 'Bits um 1 Position nach links verschoben (Verdopplung)' }
      ],
      result: 'Dezimal 42 = Hex 2A = Bin 101010₂; ~42 = -43',
      explanation: 'SciCalcX hält alle 32 Bits synchron auf dem Bitboard und veranschaulicht, wie das Zweierkomplement Bitmuster direkt in negative Dezimalzahlen übersetzt.'
    },
    howItWorks: {
      title: 'So führt SciCalcX 32-Bit-Logik im Browser aus',
      paragraphs: [
        'Die bitweisen Operatoren von JavaScript (|, &, ^, ~, <<, >>) wandeln Operanden vor der Ausführung automatisch in vorzeichenbehaftete 32-Bit-Ganzzahlen im Zweierkomplement um.',
        'SciCalcX verwaltet einen internen int32-Status. Bei jedem Klick auf ein Bit oder einen Operator wird der Wert modifiziert und Bitmasken ((val >>> bit) & 1) aktualisieren die 32 Schaltflächen vom Bit 31 zum Bit 0.',
        'Die Stringkonvertierungen nach Hexadezimal, Dezimal, Oktal und Binär erfolgen lokal im Browser für unmittelbares, verzögerungsfreies Feedback auf Hardware-Ebene.'
      ]
    },
    limitations: {
      title: 'Präzisionsgrenzen & Integer-Schranken',
      points: [
        'Vorzeichenbehafteter 32-Bit-Bereich: Operiert exakt zwischen -2.147.483.648 (-2³¹) und +2.147.483.647 (+2³¹ - 1).',
        'Überlaufverhalten: Inkrementieren über +2.147.483.647 springt zu negativen Werten (-2.147.483.648) gemäß CPU-Standard.',
        'Zyklische Bitshifts: Verschiebungen um Vielfache von 32 rotieren (z. B. entspricht x << 32 genau x << 0).'
      ]
    },
    commonMistakes: [
      {
        mistake: 'Annahme, arithmetischer Rechtsshift (>>) fülle bei negativen Zahlen mit Nullen auf',
        fix: 'Der arithmetische Shift (>>) behält das Vorzeichenbit bei (füllt mit 1en). Der vorzeichenlose Shift (>>>) füllt mit 0en.'
      },
      {
        mistake: 'Verwechslung von bitweisem NOT (~) und logischem NOT (!)',
        fix: 'Bitweises NOT invertiert alle 32 Bits (~0 = -1). Logisches NOT prüft boolesche Wahrheitswerte.'
      },
      {
        mistake: 'Eingabe ungültiger Zeichen für die gewählte Basis (z. B. "8" im Oktalsystem)',
        fix: 'Oktal akzeptiert nur 0–7; Binär 0 und 1; Hexadezimal 0–9 sowie A–F.'
      }
    ],
    useCases: [
      {
        title: 'Eingebettete Systeme & Mikrocontroller',
        desc: 'Prüfen von Hardware-Steuerregistern, GPIO-Pin-Masken und Bitfeldern in Mikrocontrollern.'
      },
      {
        title: 'Netzwerkpaket-Header-Dekodierung',
        desc: 'Maskierung und Verschiebung von IP/TCP-Headern zur Extraktion von Portnummern, Flags und Subnetzmasken.'
      },
      {
        title: 'Spieleentwicklung & Optimierung',
        desc: 'Nutzung schneller Bitboards zur Darstellung von Schachbrettern oder Kollisionsmasken mit Ein-Zyklus-Befehlen.'
      }
    ],
    relatedTools: [
      { title: 'Code Tutor & Compiler', desc: 'Bitweise Algorithmen in C++ und Python schreiben, kompilieren und testen.', href: '/compiler', badge: 'Sandbox' },
      { title: 'Wissenschaftlicher Rechner', desc: 'Mehrzeilige Rechenoperationen und Potenzen auswerten.', href: '/', badge: 'Arithmetik' },
      { title: 'Matrix-Rechner', desc: 'Determinanten der linearen Algebra und Matrizenoperationen berechnen.', href: '/matrix', badge: 'Lineare Algebra' }
    ]
  }
};
