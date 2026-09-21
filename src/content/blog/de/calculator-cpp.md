---
title: "Einen wissenschaftlichen Taschenrechner in C++ programmieren: IEEE 754 Präzision und Parsing"
description: "Erfahren Sie, wie Sie einen wissenschaftlichen Taschenrechner in C++ erstellen. Mathematische Domänenprüfung, IEEE 754 Gleitkommapräzision und Shunting-yard Algorithmus."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "Informatik & Algorithmen"
readTime: "10 Min. Lesezeit"
calculatorUrl: "/"
calculatorLabel: "SciCalcX Mehrzeiliger Wissenschaftlicher Rechner"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "Taschenrechner", "Algorithmen", "IEEE 754", "Mathematik", "Programmierung"]
---

Wissenschaftliche Taschenrechner sind unverzichtbare Werkzeuge in Naturwissenschaften und Ingenieurwesen. Während moderne Web-Engines wie **[SciCalcX](/)** komplexe algebraische Formeln direkt im Browser auswerten, vermittelt die Eigenprogrammierung in C++ fundierte Einblicke in Gleitkomma-Hardwarearchitekturen, Fehlerbehandlung und Parser-Algorithmen.

In diesem Tutorial lernen Sie, wie der **IEEE 754-Standard** Dezimalbrüche in Binärzahlen abbildet, wie mathematische Grenzfälle (wie Division durch Null oder negative Wurzeln) abgefangen werden, wie Bogenmaßumrechnungen funktionieren und wie Ausdrücke mit dem Shunting-yard-Algorithmus nach **PEMDAS/BODMAS** ausgewertet werden.

---

## 1. Mathematische Fehlerbehandlung und Randfälle

Bei Rechenoperationen in C++ müssen potenzielle Fehlerquellen im Vorfeld abgefangen werden:

1. **Division durch Null:** Bei ganzen Zahlen führt Division durch Null zu einem sofortigen Programmabbruch (`SIGFPE`). Bei Gleitkommazahlen (`double`) entstehen Unendlichkeitswerte (`inf`) oder undefinierte Werte (`NaN`). Eine robuste Anwendung muss den Nenner vorab prüfen.
2. **Wurzeln aus negativen Zahlen:** `std::sqrt()` in `<cmath>` erzeugt bei negativen reellen Werten `NaN`. Prüfen Sie stets, ob der Radikand $\ge 0$ ist.
3. **Bogenmaß vs. Gradmaß:** Sämtliche trigonometrische Funktionen in `<cmath>` (`std::sin`, `std::cos`, `std::tan`) erwarten den Winkel im **Bogenmaß (Radiant)**:
   $$\text{Radiant} = \text{Grad} \times \frac{\pi}{180}$$

---

## 2. Gleitkommapräzision nach dem IEEE 754-Standard

Da binäre Rechner Dezimalbrüche wie $0.1$ und $0.2$ nicht exakt als endliche Summe von Zweierpotenzen darstellen können, entstehen minimale Rundungsartefakte:

## 4. Winkelmaße in der Praxis: Grad vs. Bogenmaß

In der mathematischen Praxis und im Schulunterricht werden Winkel meist im Gradmaß ($0^\circ$ bis $360^\circ$) angegeben. Computerprogramme und physikalische Simulationen rechnen intern jedoch ausnahmslos im Bogenmaß (Radiant).

Ein Vollkreis umfasst $360^\circ$, was exakt $2\pi$ Radiant entspricht:
$$\text{Radiant} = \text{Grad} \cdot \frac{\pi}{180^\circ}$$
$$\text{Grad} = \text{Radiant} \cdot \frac{180^\circ}{\pi}$$

Wird dieser Schritt vergessen, berechnet `std::sin(90)` nicht den Sinus von $90^\circ$ ($1,0$), sondern den Sinus von 90 Radiant ($\approx 0,893996$). Eine professionelle Rechner-Software muss daher stets eine explizite Modus-Umschaltung (DEG / RAD) bereitstellen.

---

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // Gibt 0 (Falsch) aus!
// a + b ergibt intern 0.3000000000000000444...
```

Vergleichen Sie Gleitkommazahlen deshalb stets mithilfe eines Epsilon-Schwellenwerts ($\epsilon$):

```cpp
#include <cmath>

bool fastGleich(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. Algebraisches Parsing: Der Shunting-yard-Algorithmus

Um komplexe Terme mit Klammern und Punkt-vor-Strich-Rechnung wie $3 + 4 \times 2 / (1 - 5)^2$ mathematisch präzise zu berechnen, setzen moderne Rechner auf den **Shunting-yard-Algorithmus** von Edsger Dijkstra:

1. **Tokenisierung (Lexing):** Der Eingabestring wird in einzelne mathematische Einheiten zerlegt: Zahlenwerte, Operatoren (`+`, `-`, `*`, `/`, `^`) und Klammern (`(`, `)`).
2. **Operator-Rangfolge (PEMDAS/BODMAS):** Potenzierung besitzt die höchste Priorität, gefolgt von Multiplikation und Division, und schließlich Addition und Subtraktion. Klammern erzwingen eine vorzeitige Auswertung der inneren Ausdrücke.
3. **Umgekehrte Polnische Notation (UPN / RPN):** Der Algorithmus überführt die Infix-Notation in eine klammerfreie Postfix-Ausgabe. Dadurch entfallen uneindeutige Klammerhierarchien vollständig.
4. **Lineare Stack-Auswertung:** Ein einzelner Durchlauf über die Postfix-Ausgabe mit einem Zahlenstapel wertet das Gesamtergebnis in linearer Zeit $O(N)$ aus.

---

## 4. Vollständiger C++ Quellcode

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double gradZuRad(double grad) {
    return grad * (PI / 180.0);
}

void zeigeMenue() {
    std::cout << "\n=== SciCalcX C++ Taschenrechner ===\n";
    std::cout << "1. Addition (+)\n";
    std::cout << "2. Subtraktion (-)\n";
    std::cout << "3. Multiplikation (*)\n";
    std::cout << "4. Division (/)\n";
    std::cout << "5. Potenzierung (x^y)\n";
    std::cout << "6. Quadratwurzel (sqrt)\n";
    std::cout << "7. Sinus (Grad)\n";
    std::cout << "8. Cosinus (Grad)\n";
    std::cout << "9. Programm beenden\n";
    std::cout << "Auswahl (1-9): ";
}

int main() {
    int wahl;
    double x, y, ergebnis;

    while (true) {
        zeigeMenue();
        if (!(std::cin >> wahl)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (wahl == 9) break;

        switch (wahl) {
            case 1:
                std::cout << "Zwei Zahlen eingeben: ";
                std::cin >> x >> y;
                std::cout << "Ergebnis: " << x + y << "\n";
                break;
            case 4:
                std::cout << "Dividend und Divisor: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "Fehler: Division durch Null undefiniert.\n";
                } else {
                    std::cout << "Ergebnis: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "Zahl fuer Wurzel: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "Fehler: Negative Wurzel im Reellen nicht definiert.\n";
                } else {
                    std::cout << "Ergebnis: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "Winkel in Grad: ";
                std::cin >> x;
                ergebnis = std::sin(gradZuRad(x));
                if (std::fabs(ergebnis) < 1e-12) ergebnis = 0.0;
                std::cout << "Ergebnis: " << ergebnis << "\n";
                break;
            default:
                std::cout << "Ungueltige Option.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. C++ Code direkt im Browser ausführen

Möchten Sie diesen Code kompilieren und ausführen, ohne eine lokale Entwicklungsumgebung einzurichten? Öffnen Sie den **[SciCalcX C/C++ Code-Tutor](/compiler/)**, um C++-Programme direkt im Browser zu testen.

---

## Quellen & Weiterführende Literatur

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): Grundlegendes Werk zu Gleitkomma-Präzision, Rundungsfehlern und dem IEEE-754-Standard.
* **cppreference** — [C++ `<cmath>` Mathematische Funktionen](https://de.cppreference.com/w/cpp/header/cmath): Offizielle Dokumentation für mathematische Standardfunktionen, Definitionsbereiche und Fehlerbehandlung.
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): Originale Ausarbeitung des Shunting-Yard-Algorithmus zur Verarbeitung mathematischer Ausdrücke.
