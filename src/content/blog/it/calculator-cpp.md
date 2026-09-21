---
title: "Programmare una Calcolatrice Scientifica in C++: Precisione IEEE 754 e Parsing"
description: "Scopri come sviluppare una calcolatrice scientifica in C++. Gestione degli errori matematici, precisione a virgola mobile IEEE 754 e algoritmo Shunting-yard."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "Informatica & Algoritmi"
readTime: "10 minuti di lettura"
calculatorUrl: "/"
calculatorLabel: "Calcolatrice Scientifica Multi-riga SciCalcX"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "Calcolatrice Scientifica", "Algoritmi", "Matematica", "IEEE 754", "Programmazione"]
---

Le calcolatrici scientifiche sono strumenti indispensabili nell'ingegneria, nella ricerca scientifica e nell'istruzione matematica. Se da un lato piattaforme online moderne come **[SciCalcX](/)** elaborano espressioni matematiche complesse direttamente nel browser, programmare una calcolatrice in C++ consente di approfondire la precisione a virgola mobile hardware, la gestione delle eccezioni matematiche e gli algoritmi di parsing sintattico.

In questa guida imparerai come lo standard **IEEE 754** gestisce i numeri decimali in binario, come prevenire errori fatali come la divisione per zero e il calcolo di radici negative, come effettuare le conversioni da gradi a radianti e come valutare formule complesse tramite l'algoritmo Shunting-yard.

---

## 1. Gestione dei Domini Matematici ed Errori di Calcolo

Nel calcolo computazionale in C++, è obbligatorio prevedere controlli espliciti prima di eseguire determinate operazioni:

1. **Divisione per Zero:** Nei numeri interi provoca un segnale hardware bloccante (`SIGFPE`). Con i tipi a virgola mobile (`double`), genera valori infiniti (`inf`) o indefiniti (`NaN`). È essenziale verificare preventivamente che il divisore sia diverso da zero.
2. **Radici Quadrate Negative:** `std::sqrt()` in `<cmath>` restituisce `NaN` se riceve argomenti negativi nel campo dei reali. Bisogna sempre verificare che il radicando sia $\ge 0$.
3. **Gradi e Radianti:** Tutte le funzioni trigonometriche in `<cmath>` (`std::sin`, `std::cos`, `std::tan`) richiedono angoli espressi in **radianti**:
   $$\text{Radianti} = \text{Gradi} \times \frac{\pi}{180}$$

---

## 2. Precisione a Virgola Mobile e Standard IEEE 754

A causa della rappresentazione binaria finita, numeri come $0.1$ o $0.2$ generano espansioni periodiche infinite, producendo minuscole imprecisioni di arrotondamento:

## 4. Unità Angolari nella Pratica: Gradi vs Radianti

Nella pratica scolastica e ingegneristica, gli angoli vengono comunemente espressi in gradi sessagesimali ($0^\circ - 360^\circ$). Tuttavia, le librerie matematiche dei calcolatori elettronici operano esclusivamente in radianti.

Un angolo giro misura $360^\circ$, equivalente esattamente a $2\pi$ radianti:
$$\text{Radianti} = \text{Gradi} \cdot \frac{\pi}{180^\circ}$$
$$\text{Gradi} = \text{Radianti} \cdot \frac{180^\circ}{\pi}$$

Dimenticare questa conversione porta a calcolare `std::sin(90)` come il seno di 90 radianti ($\approx 0,893996$) anziché $\sin(90^\circ) = 1,0$. Un software di calcolo professionale deve quindi implementare la conversione trasparente tra le modalità DEG e RAD.

---

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // Stampa 0 (Falso)!
// a + b corrisponde in realtà a 0.3000000000000000444...
```

Per confrontare due valori a virgola mobile in modo affidabile, si utilizza una soglia di tolleranza epsilon ($\epsilon$):

```cpp
#include <cmath>

bool sonoQuasiUguali(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. Parsing di Espressioni: L'Algoritmo Shunting-Yard

Per elaborare espressioni contenenti parentesi e precedenze algebriche come $3 + 4 \times 2 / (1 - 5)^2$, le calcolatrici adottano l'**algoritmo Shunting-yard** di Edsger Dijkstra:

1. **Tokenizzazione:** Suddivide il testo in numeri, operatori e parentesi.
2. **Pila degli Operatori:** Gestisce precedenza e associatività degli operatori.
3. **Notazione Polacca Inversa (RPN):** Produce una sequenza priva di ambiguità valutabile in tempo lineare $O(N)$ mediante una pila numerica.

---

## 4. Codice Sorgente Completo in C++

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double gradiInRadianti(double gradi) {
    return gradi * (PI / 180.0);
}

void mostraMenu() {
    std::cout << "\n=== Calcolatrice Scientifica SciCalcX ===\n";
    std::cout << "1. Addizione (+)\n";
    std::cout << "2. Sottrazione (-)\n";
    std::cout << "3. Moltiplicazione (*)\n";
    std::cout << "4. Divisione (/)\n";
    std::cout << "5. Potenza (x^y)\n";
    std::cout << "6. Radice Quadrata (sqrt)\n";
    std::cout << "7. Seno (gradi)\n";
    std::cout << "8. Coseno (gradi)\n";
    std::cout << "9. Esci\n";
    std::cout << "Seleziona opzione (1-9): ";
}

int main() {
    int scelta;
    double x, y, risultato;

    while (true) {
        mostraMenu();
        if (!(std::cin >> scelta)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (scelta == 9) break;

        switch (scelta) {
            case 1:
                std::cout << "Inserisci due numeri: ";
                std::cin >> x >> y;
                std::cout << "Risultato: " << x + y << "\n";
                break;
            case 4:
                std::cout << "Inserisci dividendo e divisore: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "Errore: Divisione per zero non permessa.\n";
                } else {
                    std::cout << "Risultato: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "Inserisci numero: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "Errore: Radice di numero negativo nei reali non consentita.\n";
                } else {
                    std::cout << "Risultato: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "Inserisci angolo in gradi: ";
                std::cin >> x;
                risultato = std::sin(gradiInRadianti(x));
                if (std::fabs(risultato) < 1e-12) risultato = 0.0;
                std::cout << "Risultato: " << risultato << "\n";
                break;
            default:
                std::cout << "Opzione non valida.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. Esegui il Codice nel Browser

Vuoi compilare ed eseguire questo software senza configurare un ambiente di sviluppo locale? Accedi al **[Tutor e Compilatore C/C++ di SciCalcX](/compiler/)** per testare programmi direttamente online.

---

## Riferimenti e Ulteriori Letture

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): Trattato fondamentale sullo standard IEEE 754, la precisione di mantissa ed esponente e la gestione degli arrotondamenti.
* **cppreference** — [Funzioni Matematiche C++ (`<cmath>`)](https://it.cppreference.com/w/cpp/header/cmath): Documentazione ufficiale di riferimento per funzioni trigonometriche, radici e controlli di dominio.
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): Lavoro seminale che ha introdotto l'algoritmo Shunting-yard per la conversione in notazione polacca inversa.
