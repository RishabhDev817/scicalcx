---
title: "Complessità Temporale Spiegata: Notazione O-Grande per Principianti"
description: "Comprendi l'efficienza algoritmica. Impara a calcolare la complessità temporale Big O con esempi pratici in C++."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Complessità Temporale Spiegata: Notazione O-Grande per Principianti

Nell'informatica esistono quasi sempre molteplici modalità per risolvere uno specifico problema di programmazione. Ma come stabiliamo quale algoritmo sia effettivamente il più efficiente?

Utilizziamo la **Notazione O-Grande (Big O)** per analizzare e confrontare le prestazioni degli algoritmi in base a come il tempo di esecuzione scala all'aumentare della dimensione dei dati in ingresso ($N$).

---

## 1. Che cos'è la Notazione Big O?

La notazione Big O è un modello matematico che descrive il limite superiore del tempo di esecuzione di un algoritmo nello scenario peggiore (*worst-case scenario*).

Invece di misurare i secondi di clock (un valore altamente variabile a seconda della CPU, della memoria e del sistema operativo), la notazione Big O si concentra sul **numero di passaggi computazionali elementari** eseguiti in funzione della dimensione dell'input $N$.

---

## 2. Principali Classi di Complessità Temporale

Ecco le complessità temporali più diffuse nello sviluppo software, elencate dalla più veloce alla più lenta:

### Tempo Costante: $O(1)$
Il tempo di esecuzione rimane invariato a prescindere da quanto grande sia la dimensione dell'input $N$.
```cpp
int getFirstElement(int arr[], int size) {
    return arr[0]; // Esattamente 1 operazione, O(1)
}
```

### Tempo Lineare: $O(N)$
Il tempo di esecuzione cresce in proporzione diretta con la dimensione dell'input $N$. Un singolo ciclo che scorre un array di $N$ elementi ha una complessità temporale lineare.
```cpp
void printAllElements(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << std::endl; // Viene eseguito N volte, O(N)
    }
}
```

### Tempo Quadratico: $O(N^2)$
Il tempo di esecuzione cresce quadraticamente rispetto a $N$. Questa complessità si riscontra tipicamente nei cicli annidati, dove per ciascuno degli $N$ elementi viene effettuata una scansione di altri $N$ elementi.
```cpp
void printPairs(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            std::cout << arr[i] << ", " << arr[j] << std::endl; // Viene eseguito N * N volte, O(N^2)
        }
    }
}
```

---

## 3. Confronto Visivo della Crescita di Scala

Per comprendere come la dimensione dell'input influisca sul numero complessivo di operazioni:

| Complessità | Nome | $N = 100$ | $N = 10\,000$ | Esempio Pratico |
| :--- | :--- | :--- | :--- | :--- |
| **$O(1)$** | Costante | 1 operazione | 1 operazione | Accesso a indice di array |
| **$O(N)$** | Lineare | 100 operazioni | 10 000 operazioni | Ricerca lineare sequenziale |
| **$O(N^2)$** | Quadratica | 10 000 operazioni | 100 000 000 operazioni | Bubble Sort, cicli annidati |

Confronto pratico:
* Con $N = 100$, un algoritmo $O(N^2)$ richiede circa 10.000 operazioni (istantaneo sui calcolatori moderni).
* Con $N = 10\,000$, lo stesso algoritmo necessita di **100 milioni di operazioni**, causando rallentamenti tangibili, mentre la soluzione $O(N)$ gestisce l'input con soli 10.000 passaggi.

---

## 4. Programma di Benchmark Completo in C++

Di seguito riportiamo un programma C++ completo e funzionante che mette a confronto le routine $O(1)$, $O(N)$ e $O(N^2)$:

```cpp
#include <iostream>
#include <vector>

// Operazione in O(1): Tempo costante
void runConstantTime(const std::vector<int>& vec) {
    if (!vec.empty()) {
        int val = vec[0];
        std::cout << "O(1) Primo Elemento: " << val << std::endl;
    }
}

// Operazione in O(N): Tempo lineare
void runLinearTime(const std::vector<int>& vec) {
    long long sum = 0;
    for (size_t i = 0; i < vec.size(); i++) {
        sum += vec[i];
    }
    std::cout << "O(N) Somma di " << vec.size() << " elementi: " << sum << std::endl;
}

// Operazione in O(N^2): Tempo quadratico
void runQuadraticTime(const std::vector<int>& vec) {
    long long operations = 0;
    size_t n = vec.size();
    
    // Limita la dimensione per consentire un test rapido da console
    if (n > 500) {
        std::cout << "O(N^2) Saltato (input troppo grande per il test rapido)." << std::endl;
        return;
    }

    for (size_t i = 0; i < n; i++) {
        for (size_t j = 0; j < n; j++) {
            operations++;
        }
    }
    std::cout << "O(N^2) Totale operazioni eseguite: " << operations << std::endl;
}

int main() {
    // Generazione di un vettore di test
    int size = 400;
    std::vector<int> numbers;
    for (int i = 0; i < size; i++) {
        numbers.push_back(i + 1);
    }

    std::cout << "--- Benchmark di Complessità Temporale Big O ---" << std::endl;
    runConstantTime(numbers);
    runLinearTime(numbers);
    runQuadraticTime(numbers);

    return 0;
}
```

---

## 5. Visualizzare e Misurare le Curve di Complessità

La teoria asintotica offre il massimo valore pratico quando viene testata e confrontata graficamente:

- **Sperimenta nel Sandbox:** Apri il **[Tutor di Codice C/C++ SciCalcX](/it/compiler/)** per eseguire il benchmark con differenti valori del vettore ($N=100, 200, 400$) e osservare la risposta dei tempi.
- **Traccia le Funzioni su Grafico:** Utilizza la **[Calcolatrice Grafica 2D SciCalcX](/it/graphing/)** per visualizzare $y = x$, $y = x \log_2(x)$ e $y = x^2$ su piano cartesiano e verificare visivamente la rapida divergenza della complessità quadratica.
- **Regole d'Oro di Ottimizzazione:** Ignora i coefficienti costanti ($O(2N) \rightarrow O(N)$) e concentrati sempre sul termine di grado massimo ($O(N^2 + N) \rightarrow O(N^2)$).
