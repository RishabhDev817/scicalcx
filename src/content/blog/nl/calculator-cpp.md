---
title: "Een Wetenschappelijke Rekenmachine Programmeren in C++"
description: "Leer hoe u een wetenschappelijke console-rekenmachine in C++ bouwt voor rekenkundige bewerkingen, machten en goniometrische functies."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

Wetenschappelijke rekenmachines zijn onmisbare hulpmiddelen in de exacte wetenschappen en techniek. Intern parseren en evalueren ze expressies en wiskundige operatoren volgens formele algebraïsche regels.

In deze tutorial bouwen we een interactieve C++ console-rekenmachine die basisbewerkingen, machten, wortels en robuuste foutafhandeling implementeert.

---

## 1. Structuur van de Rekenmachinelogica

Een stabiel rekenprogramma rust op drie kernprincipes:
1. **Invoerverwerking:** Het registreren van zwevendekommagetallen (`double`) en menu-opties.
2. **Besturingsstructuur:** Toewijzing van de berekening via `switch`-structuren.
3. **Foutafhandeling:** Het afvangen van deling door nul en negatieve wortels in het reële getallendomein.

---

## 2. De C++ Standaardbibliotheek `<cmath>`

Voor wetenschappelijke berekeningen gebruiken we de header `<cmath>`:

* `pow(basis, exponent)`: Berekent machten $x^y$.
* `sqrt(waarde)`: Berekent de vierkantswortel.
* `sin(hoek)` / `cos(hoek)`: Goniometrische functies (hoek in **radialen**).

---

## 3. Volledige C++ Broncode

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== SciCalcX C++ Rekenmachine ===" << std::endl;
    std::cout << "1. Optellen (+)" << std::endl;
    std::cout << "2. Aftrekken (-)" << std::endl;
    std::cout << "3. Vermenigvuldigen (*)" << std::endl;
    std::cout << "4. Delen (/)" << std::endl;
    std::cout << "5. Machtsverheffen (x^y)" << std::endl;
    std::cout << "6. Vierkantswortel (√)" << std::endl;
    std::cout << "7. Afsluiten" << std::endl;
    std::cout << "Kies een bewerking (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "Rekenmachine afgesloten. Tot ziens!" << std::endl;
            break;
        }

        // Bewerking met één operand
        if (choice == 6) {
            std::cout << "Voer getal in: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Fout: De wortel van een negatief getal is niet gedefinieerd in reële getallen." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Resultaat: " << result << std::endl << std::endl;
            }
            continue;
        }

        // Bewerkingen met twee operanden
        if (choice >= 1 && choice <= 5) {
            std::cout << "Eerste getal: ";
            std::cin >> num1;
            std::cout << "Tweede getal: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "Resultaat: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "Resultaat: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "Resultaat: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "Fout: Deling door nul is niet toegestaan." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "Resultaat: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "Resultaat: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "Ongeldige bewerking." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Ongeldige keuze. Probeer het opnieuw." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## Test deze code live in uw browser!

**[Open de interactieve SciCalcX Online Compiler](/nl/compiler/)**, plak de bovenstaande code en voer deze direct uit!
