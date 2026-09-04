---
title: "Complejidad Temporal Explicada: Notación Big O para Principiantes"
description: "Comprende la eficiencia algorítmica. Aprende a calcular la complejidad temporal Big O con ejemplos prácticos en C++."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Complejidad Temporal Explicada: Notación Big O para Principiantes

En ciencias de la computación, existen múltiples formas de resolver un mismo problema. ¿Cómo determinamos cuál solución es la más eficiente?

Utilizamos la **Notación Big O** para analizar y comparar el rendimiento de los algoritmos en función de cómo escala su tiempo de ejecución a medida que crece el tamaño de la entrada ($N$).

---

## 1. ¿Qué es la Notación Big O?

La notación Big O es un modelo matemático que describe el límite superior del tiempo de ejecución en el peor de los casos. En lugar de medir segundos reales (lo cual depende del hardware), Big O cuantifica el número de operaciones elementales en relación con $N$.

---

## 2. Complejidades Temporales Comunes

### Tiempo Constante: $O(1)$
El tiempo de ejecución no cambia, sin importar cuán grande sea la entrada:
```cpp
int obtenerPrimerElemento(int arr[], int size) {
    return arr[0]; // Exactamente 1 paso, O(1)
}
```

### Tiempo Lineal: $O(N)$
El tiempo crece en proporción directa con $N$:
```cpp
void imprimirElementos(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        std::cout << arr[i] << std::endl; // Se ejecuta N veces, O(N)
    }
}
```

### Tiempo Logarítmico: $O(\log N)$
En cada iteración, el conjunto de datos se reduce a la mitad (por ejemplo, en la búsqueda binaria):
```cpp
int busquedaBinaria(int arr[], int n, int objetivo); // O(log N)
```

### Tiempo Cuadrático: $O(N^2)$
Frecuente en algoritmos con bucles anidados como Bubble Sort:
```cpp
void compararPares(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // Se ejecuta N * N veces, O(N^2)
        }
    }
}
```

---

## 3. Resumen y Reglas de Oro

- Descarta las constantes: $O(2N) \rightarrow O(N)$.
- Quédate con el término dominante: $O(N^2 + N) \rightarrow O(N^2)$.
- Diseña algoritmos orientados a $O(1)$, $O(\log N)$ u $O(N)$ para garantizar escalabilidad en producción.
