---
title: "Einen wissenschaftlichen Taschenrechner in C++ programmieren"
description: "Erfahren Sie, wie Sie einen wissenschaftlichen Konsolen-Taschenrechner in C++ für Rechenoperationen, Potenzen und trigonometrische Funktionen erstellen."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Einen wissenschaftlichen Taschenrechner in C++ programmieren

Wissenschaftliche Taschenrechner sind unverzichtbare Werkzeuge in Naturwissenschaften und Ingenieurwesen. Intern parsen und evaluieren sie Eingaben und mathematische Symbole nach formalen algebraischen Gesetzen.

In diesem Tutorial programmieren wir einen interaktiven C++ Konsolen-Rechner, der Grundrechenarten, Potenzen, Wurzeln und Fehlerabfangroutinen implementiert.

---

## 1. Aufbau der Rechnerlogik

Ein stabiles Rechenprogramm erfordert drei Kernmechanismen:
1. **Eingabeverarbeitung:** Erfassen von Gleitkommazahlen (`double`) und Menüoptionen.
2. **Ablaufsteuerung:** Zuweisung der Rechenoperation über `switch`-Strukturen.
3. **Fehlerbehandlung:** Abfangen von Division durch Null und negativen Wurzeln im reellen Zahlenraum.

---

## 2. Die C++ Standardbibliothek `<cmath>`

Für wissenschaftliche Berechnungen binden wir die Headerdatei `<cmath>` ein:

* `pow(basis, exponent)`: Berechnet Potenzen $x^y$.
* `sqrt(wert)`: Berechnet die Quadratwurzel.
* `sin(winkel)` / `cos(winkel)`: Trigonometrische Funktionen (Winkelangabe im **Bogenmaß/Radiant**).

---

## 3. Vollständiger C++ Quellcode

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== SciCalcX C++ Taschenrechner ===" << std::endl;
    std::cout << "1. Addition (+)" << std::endl;
    std::cout << "2. Subtraktion (-)" << std::endl;
    std::cout << "3. Multiplikation (*)" << std::endl;
    std::cout << "4. Division (/)" << std::endl;
    std::cout << "5. Potenzierung (x^y)" << std::endl;
    std::cout << "6. Quadratwurzel (√)" << std::endl;
    std::cout << "7. Beenden" << std::endl;
    std::cout << "Operation wählen (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "Taschenrechner beendet. Auf Wiedersehen!" << std::endl;
            break;
        }

        // Operation mit einem Operanden
        if (choice == 6) {
            std::cout << "Zahl eingeben: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Fehler: Die Wurzel einer negativen Zahl ist im reellen Bereich nicht definiert." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Ergebnis: " << result << std::endl << std::endl;
            }
            continue;
        }

        // Operationen mit zwei Operanden
        if (choice >= 1 && choice <= 5) {
            std::cout << "Erste Zahl eingeben: ";
            std::cin >> num1;
            std::cout << "Zweite Zahl eingeben: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "Ergebnis: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "Ergebnis: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "Ergebnis: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "Fehler: Division durch Null ist undefiniert." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "Ergebnis: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "Ergebnis: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "Ungültige Operation." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Ungültige Auswahl. Bitte erneut versuchen." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## Diesen Code live in der Sandbox testen!

**[Öffnen Sie den interaktiven SciCalcX Online-Compiler](/de/compiler/)**, fügen Sie den obigen Code ein und führen Sie ihn direkt in unserer isolierten Sandbox aus!
