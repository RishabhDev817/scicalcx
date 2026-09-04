---
title: "Come Creare una Calcolatrice Scientifica di Base in C++"
description: "Scopri come sviluppare un programma di calcolatrice scientifica in C++ per gestire operazioni aritmetiche, potenze e funzioni trigonometriche."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Come Creare una Calcolatrice Scientifica di Base in C++

Le calcolatrici scientifiche sono strumenti indispensabili per le discipline scientifiche e ingegneristiche. Internamente, analizzano numeri e simboli algebrici valutandoli secondo precise regole matematiche.

In questo tutorial, creeremo una calcolatrice da console interattiva in C++ in grado di eseguire le quattro operazioni fondamentali, calcolare potenze, radici quadrate e prevenire errori comuni come la divisione per zero.

---

## 1. Strutturazione della Logica della Calcolatrice

Per creare un programma robusto e affidabile, occorre gestire tre passaggi fondamentali:
1. **Parsing dell'input:** Acquisizione di numeri a virgola mobile (`double`) e selezioni del menu.
2. **Controllo del flusso:** Smistamento dell'operazione scelta tramite costrutti `switch`.
3. **Gestione degli errori matematici:** Prevenzione della divisione per zero e della radice quadrata di numeri negativi nel campo reale.

---

## 2. La Libreria Standard C++ `<cmath>`

Per abilitare le funzioni scientifiche, includiamo l'header standard `<cmath>`:

* `pow(base, esponente)`: Calcola la base elevata a potenza.
* `sqrt(valore)`: Calcola la radice quadrata.
* `sin(angolo)` / `cos(angolo)`: Valuta le funzioni trigonometriche (con angoli espressi in **radianti**).

---

## 3. Codice Sorgente Completo in C++

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== Calcolatrice SciCalcX in C++ ===" << std::endl;
    std::cout << "1. Addizione (+)" << std::endl;
    std::cout << "2. Sottrazione (-)" << std::endl;
    std::cout << "3. Moltiplicazione (*)" << std::endl;
    std::cout << "4. Divisione (/)" << std::endl;
    std::cout << "5. Potenza (x^y)" << std::endl;
    std::cout << "6. Radice Quadrata (√)" << std::endl;
    std::cout << "7. Esci" << std::endl;
    std::cout << "Seleziona un'operazione (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "Chiusura della calcolatrice. Arrivederci!" << std::endl;
            break;
        }

        // Operazione a singolo operando
        if (choice == 6) {
            std::cout << "Inserisci il numero: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Errore: La radice quadrata di un numero negativo non è definita nei reali." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Risultato: " << result << std::endl << std::endl;
            }
            continue;
        }

        // Operazioni con due operandi
        if (choice >= 1 && choice <= 5) {
            std::cout << "Inserisci il primo numero: ";
            std::cin >> num1;
            std::cout << "Inserisci il secondo numero: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "Risultato: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "Risultato: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "Risultato: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "Errore: La divisione per zero non è definita." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "Risultato: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "Risultato: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "Operazione non valida." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Scelta non valida. Riprova." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## Prova questo codice online!

**[Apri il Compilatore Online SciCalcX](/it/compiler/)** e incolla il codice nel terminale interattivo per testarlo all'istante nel tuo browser!
