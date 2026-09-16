---
title: "Zeitkomplexität verständlich erklärt: Die O-Notation für Einsteiger"
description: "Verstehen Sie algorithmische Effizienz. Berechnen Sie die Big-O-Laufzeitkomplexität mit praxisnahen C++-Codebeispielen."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

In der Informatik existieren für fast jede Problemstellung mehrere algorithmische Lösungsansätze. Doch wie entscheidet man objektiv, welche Implementierung am effizientesten ist?

Hierfür verwenden Entwickler die **O-Notation (Big-O-Notation)**: Sie beschreibt mathematisch, wie sich die Ausführungszeit eines Algorithmus verhält, wenn die Eingabemenge wächst.

---

## 1. Was ist die Big-O-Notation?

Die Big-O-Notation ist ein asymptotisches Modell, das die Obergrenze der Laufzeit im ungünstigsten Fall (*Worst-Case-Szenario*) quantifiziert.

Anstatt Sekunden oder Millisekunden zu stoppen (was stark von Prozessorarchitektur, Cache-Größe und Systemauslastung abhängt), misst die O-Notation die Anzahl der elementaren **Rechenschritte** in Abhängigkeit von der Eingabegröße, üblicherweise als $N$ bezeichnet.

---

## 2. Häufige Komplexitätsklassen

Nachfolgend sind die wichtigsten Komplexitätsklassen aufgeführt, sortiert von der schnellsten zur langsamsten:

### Konstante Laufzeit: $O(1)$
Die Ausführungszeit bleibt stets unverändert, unabhängig davon, wie groß die Eingabe $N$ ist.
```cpp
int getFirstElement(int arr[], int size) {
    return arr[0]; // Genau 1 Rechenschritt, O(1)
}
```

### Lineare Laufzeit: $O(N)$
Die Ausführungszeit wächst proportional zur Eingabegröße $N$. Eine Einzelschleife, die ein Array mit $N$ Elementen durchläuft, besitzt lineare Zeitkomplexität.
```cpp
void printAllElements(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << std::endl; // Wird N-mal ausgeführt, O(N)
    }
}
```

### Quadratische Laufzeit: $O(N^2)$
Die Ausführungszeit wächst quadratisch mit $N$. Dies tritt typischerweise bei verschachtelten Schleifen auf, bei denen für jedes der $N$ Elemente erneut alle $N$ Elemente durchlaufen werden.
```cpp
void printPairs(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            std::cout << arr[i] << ", " << arr[j] << std::endl; // Läuft N * N-mal, O(N^2)
        }
    }
}
```

---

## 3. Vergleich der Skalierungseffekte

Um das praktische Wachstumsverhalten nachzuvollziehen, betrachten wir die benötigten Rechenschritte bei verschiedenen Eingabegrößen:

| Komplexitätsklasse | Bezeichnung | $N = 100$ | $N = 10\,000$ | Typisches Praxisbeispiel |
| :--- | :--- | :--- | :--- | :--- |
| **$O(1)$** | Konstant | 1 Schritt | 1 Schritt | Direkter Array-Indexzugriff |
| **$O(N)$** | Linear | 100 Schritte | 10 000 Schritte | Lineare Suche in einer Liste |
| **$O(N^2)$** | Quadratisch | 10 000 Schritte | 100 000 000 Schritte | Bubble Sort, Paare vergleichen |

Veranschaulichung:
* Bei $N = 100$ erfordert $O(N^2)$ rund 10.000 Schritte – das bewältigt jede moderne CPU in Bruchteilen einer Millisekunde.
* Bei $N = 10\,000$ benötigt derselbe $O(N^2)$-Algorithmus bereits **100 Millionen Schritte**, während ein linearer Algorithmus bei lediglich 10.000 Schritten bleibt.

---

## 4. Vollständiges C++ Benchmark-Programm

Das folgende vollständige C++-Programm demonstriert die Ausführung von $O(1)$-, $O(N)$- und $O(N^2)$-Operationen in der Praxis:

```cpp
#include <iostream>
#include <vector>

// O(1)-Operation: Konstanter Zeitaufwand
void runConstantTime(const std::vector<int>& vec) {
    if (!vec.empty()) {
        int val = vec[0];
        std::cout << "O(1) Erstes Element: " << val << std::endl;
    }
}

// O(N)-Operation: Linearer Zeitaufwand
void runLinearTime(const std::vector<int>& vec) {
    long long sum = 0;
    for (size_t i = 0; i < vec.size(); i++) {
        sum += vec[i];
    }
    std::cout << "O(N) Summe aus " << vec.size() << " Elementen: " << sum << std::endl;
}

// O(N^2)-Operation: Quadratischer Zeitaufwand
void runQuadraticTime(const std::vector<int>& vec) {
    long long operations = 0;
    size_t n = vec.size();
    
    // Begrenzung der Eingabe für Konsolenläufe
    if (n > 500) {
        std::cout << "O(N^2) Übersprungen (Eingabe zu groß für schnellen Konsolentest)." << std::endl;
        return;
    }

    for (size_t i = 0; i < n; i++) {
        for (size_t j = 0; j < n; j++) {
            operations++;
        }
    }
    std::cout << "O(N^2) Gesamtzahl ausgeführter Operationen: " << operations << std::endl;
}

int main() {
    // Erzeugung eines Testvektors
    int size = 400;
    std::vector<int> numbers;
    for (int i = 0; i < size; i++) {
        numbers.push_back(i + 1);
    }

    std::cout << "--- Big-O Laufzeitkomplexität Benchmark ---" << std::endl;
    runConstantTime(numbers);
    runLinearTime(numbers);
    runQuadraticTime(numbers);

    return 0;
}
```

---

## 5. Laufzeitkurven visualisieren und vertiefen

Die theoretische Analyse wird besonders greifbar, wenn man Rechenzeiten direkt misst und Funktionsgraphen vergleicht:

- **Im Sandbox-Compiler ausführen:** Nutzen Sie den **[SciCalcX C/C++ Code-Tutor](/de/compiler/)**, um die obige Benchmark-Demonstration mit variierenden Vektorgrößen ($N=100, 200, 400$) interaktiv auszuführen.
- **Wachstumskurven grafisch plotten:** Verwenden Sie den **[SciCalcX 2D-Grafikrechner](/de/graphing/)**, um $y = x$, $y = x \log_2(x)$ und $y = x^2$ in einem gemeinsamen Koordinatensystem darzustellen und die starke Divergenz quadratischer Funktionen nachzuvollziehen.
- **Faustregeln für die Praxis:** Konstante Faktoren entfallen ($O(2N) \rightarrow O(N)$) und nur die am schnellsten wachsende Potenz bestimmt die Einstufung ($O(N^2 + N) \rightarrow O(N^2)$).
