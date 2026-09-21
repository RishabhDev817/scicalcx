---
title: "Een Wetenschappelijke Rekenmachine Bouwen in C++: IEEE 754 Precisie en Expressie-evaluatie"
description: "Leer hoe u een wetenschappelijke rekenmachine in C++ programmeert. Beheers foutafhandeling, IEEE 754 zwevendekommaberekeningen en het Shunting-yard algoritme."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "Informatica & Algoritmen"
readTime: "10 min leestijd"
calculatorUrl: "/"
calculatorLabel: "SciCalcX Wetenschappelijke Rekenmachine"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "Rekenmachine", "Algoritmen", "Wiskunde", "IEEE 754", "Programmeren"]
---

Wetenschappelijke rekenmachines zijn onmisbare instrumenten in natuurwetenschappen, wiskunde en technische opleidingen. Terwijl moderne webplatforms zoals **[SciCalcX](/)** algebraïsche formules met meerdere regels direct in de browser evalueren, biedt het zelf bouwen van een console-rekenmachine in C++ diepgaand inzicht in hardwarematige zwevendekommaberekeningen, wiskundige randvoorwaarden en parser-algoritmen.

In deze complete handleiding leert u hoe de **IEEE 754-standaard** decimale breuken binair verwerkt, hoe u fouten zoals deling door nul en negatieve wortels voorkomt, hoe hoekconversies naar radialen werken en hoe het Shunting-yard algoritme algebraïsche voorrangsregels (**PEMDAS/BODMAS**) afhandelt.

---

## 1. Wiskundige Foutafhandeling en Domeincontroles

Bij numerieke berekeningen in C++ moeten ongeldige wiskundige operaties vooraf worden onderschept:

1. **Deling door Nul:** Bij gehele getallen (integers) leidt dit tot een directe crash (`SIGFPE`). Bij zwevendekommagetallen (`double`) ontstaan oneindige waarden (`inf`) of onbepaalde getallen (`NaN`). Een robuust programma controleert altijd of de deler niet nul is.
2. **Wortels van Negatieve Getallen:** De functie `std::sqrt()` in `<cmath>` resulteert in `NaN` bij negatieve reële invoer. Controleer vooraf of het grondtal $\ge 0$ is.
3. **Radialen versus Graden:** Alle trigonometrische functies in `<cmath>` (`std::sin`, `std::cos`, `std::tan`) verwachten de invoerhoek in **radialen**:
   $$\text{Radialen} = \text{Graden} \times \frac{\pi}{180}$$

---

## 2. Zwevendekommaprecisie volgens IEEE 754

Omdat computers getallen binair opslaan, kunnen breuken zoals $0.1$ of $0.2$ niet exact worden weergegeven als een eindige som van machten van twee:

## 4. Hoekeenheden in de Praktijk: Graden versus Radialen

In het onderwijs en de technische praktijk worden hoeken vaak gemeten in graden ($0^\circ$ tot $360^\circ$). Wetenschappelijke computerbibliotheken rekenen echter intern altijd met radialen.

Een volledige cirkel is $360^\circ$, wat precies gelijk is aan $2\pi$ radialen:
$$\text{Radialen} = \text{Graden} \cdot \frac{\pi}{180^\circ}$$
$$\text{Graden} = \text{Radialen} \cdot \frac{180^\circ}{\pi}$$

Als deze omrekening wordt overgeslagen, berekent `std::sin(90)` de sinus van 90 radialen ($\approx 0,893996$) in plaats van $\sin(90^\circ) = 1,0$. Een betrouwbare rekenmachine moet daarom altijd een naadloze schakeling tussen DEG en RAD bieden.

---

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // Geeft 0 (Onwaar)!
// a + b resulteert intern in 0.3000000000000000444...
```

Vergelijk zwevendekommagetallen daarom altijd met een kleine tolerantiegrens (epsilon $\epsilon$):

```cpp
#include <cmath>

bool zijnGelijk(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. Expressie-evaluatie: Het Shunting-Yard Algoritme

Om samengestelde formules met haakjes en voorrangsregels zoals $3 + 4 \times 2 / (1 - 5)^2$ te berekenen, gebruiken rekenmachines het **Shunting-yard algoritme** van Edsger Dijkstra:

1. **Tokenisatie:** Splitst de invoertekst in getallen, operatoren en haakjes.
2. **Operatorstapel:** Bepaalt de rekenvolgorde op basis van prioriteit en associativiteit.
3. **Omgekeerde Poolse Notatie (RPN):** Genereert een haakjesvrije postfix-indeling die in lineaire tijd $O(N)$ met een numerieke stack kan worden berekend.

---

## 4. Volledige C++ Broncode

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double gradenNaarRadialen(double graden) {
    return graden * (PI / 180.0);
}

void toonMenu() {
    std::cout << "\n=== SciCalcX C++ Rekenmachine ===\n";
    std::cout << "1. Optellen (+)\n";
    std::cout << "2. Aftrekken (-)\n";
    std::cout << "3. Vermenigvuldigen (*)\n";
    std::cout << "4. Delen (/)\n";
    std::cout << "5. Machtsverheffen (x^y)\n";
    std::cout << "6. Vierkantswortel (sqrt)\n";
    std::cout << "7. Sinus (graden)\n";
    std::cout << "8. Cosinus (graden)\n";
    std::cout << "9. Afsluiten\n";
    std::cout << "Kies een bewerking (1-9): ";
}

int main() {
    int keuze;
    double x, y, uitkomst;

    while (true) {
        toonMenu();
        if (!(std::cin >> keuze)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (keuze == 9) break;

        switch (keuze) {
            case 1:
                std::cout << "Voer twee getallen in: ";
                std::cin >> x >> y;
                std::cout << "Resultaat: " << x + y << "\n";
                break;
            case 4:
                std::cout << "Deeltal en deler invoeren: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "Fout: Deling door nul is niet toegestaan.\n";
                } else {
                    std::cout << "Resultaat: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "Getal voor wortel: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "Fout: Reële wortel uit negatief getal bestaat niet.\n";
                } else {
                    std::cout << "Resultaat: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "Hoek in graden: ";
                std::cin >> x;
                uitkomst = std::sin(gradenNaarRadialen(x));
                if (std::fabs(uitkomst) < 1e-12) uitkomst = 0.0;
                std::cout << "Resultaat: " << uitkomst << "\n";
                break;
            default:
                std::cout << "Ongeldige menukeuze.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. Test C++ Direct in de Browser

Wilt u deze code direct uitvoeren zonder lokale compiler? Open de **[SciCalcX C/C++ Code Tutor](/compiler/)** om programma's direct online te compileren en testen.

---

## Bronnen & Aanbevolen Literatuur

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): Gezaghebbend overzicht van de IEEE 754-standaard, binaire floating-point afrondingsfouten en precisiegrenzen.
* **cppreference** — [C++ `<cmath>` Wiskundige Functies](https://en.cppreference.com/w/cpp/header/cmath): Officiële technische specificatie van goniometrische functies, worteltrekkingen en domeinfoutafhandeling.
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): Oorspronkelijke publicatie waarin het Shunting-yard algoritme voor het parsen van rekenkundige expressies werd geïntroduceerd.
