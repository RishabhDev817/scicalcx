---
title: "Construyendo una Calculadora Científica en C++: Precisión IEEE 754 y Análisis de Expresiones"
description: "Aprende a programar una calculadora científica en C++. Domina la validación de dominios matemáticos, la precisión en punto flotante IEEE 754 y el algoritmo Shunting-yard."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "Ciencias de la Computación"
readTime: "10 min de lectura"
calculatorUrl: "/"
calculatorLabel: "Calculadora Científica Multi-línea SciCalcX"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "Calculadora Científica", "Algoritmos", "Matemáticas", "IEEE 754", "Programación"]
---

Las calculadoras científicas son herramientas fundamentales en laboratorios de investigación, ingeniería y educación matemática. Mientras que plataformas web modernas como **[SciCalcX](/)** evalúan fórmulas de múltiples líneas directamente en el navegador, programar una calculadora científica en C++ proporciona una comprensión profunda sobre arquitectura de coma flotante, manejo de errores matemáticos y algoritmos de análisis sintáctico (parsing).

En esta guía completa, aprenderás cómo el estándar **IEEE 754** maneja números decimales en binario, cómo validar operaciones indefinidas como división entre cero o raíces negativas, cómo convertir grados sexagesimales a radianes y cómo los evaluadores de expresiones procesan jerarquías de operadores (**PEMDAS**) mediante el algoritmo Shunting-yard.

---

## 1. Validación de Dominios Matemáticos y Casos Extremos

En C++, las operaciones aritméticas deben implementar protecciones explícitas para evitar fallos catastróficos durante la ejecución:

1. **División entre Cero:** En aritmética de números enteros, dividir entre cero provoca una interrupción fatal del hardware (`SIGFPE`). En coma flotante IEEE 754 (`double`), la división genera valores infinitos (`inf`) o indeterminaciones (`NaN`). Una calculadora profesional debe interceptar divisores cercanos a cero antes de operar.
2. **Raíces Pares de Números Negativos:** La función `std::sqrt()` de `<cmath>` devuelve `NaN` si recibe argumentos negativos en el dominio real. Es necesario verificar que el radicando sea $\ge 0$.
3. **Conversión de Grados a Radianes:** Las funciones trigonométricas estándar en C++ (`std::sin`, `std::cos`, `std::tan`) asumen que el ángulo de entrada se expresa en **radianes**:
   $$\text{Radianes} = \text{Grados} \times \frac{\pi}{180}$$

---

## 2. Precisión de Punto Flotante y Estándar IEEE 754

En computación digital, los números en coma flotante no pueden representar exactamente todas las fracciones decimales en base 2. Fracciones como $0.1$ o $0.2$ producen expansiones periódicas infinitas en binario:

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // ¡Imprime 0 (Falso)!
// a + b es en realidad 0.3000000000000000444...
```

Para comparar números decimales de forma robusta, se define un umbral de tolerancia ($\epsilon$ o épsilon):

```cpp
#include <cmath>

bool sonIguales(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. Análisis de Expresiones: Algoritmo Shunting-Yard

Para evaluar expresiones con paréntesis y múltiples operadores como $3 + 4 \times 2 / (1 - 5)^2$, las calculadoras modernas utilizan el **algoritmo Shunting-yard** desarrollado por Edsger Dijkstra:

1. **Tokenización:** Descompone la cadena de texto en números, operadores y paréntesis.
2. **Pila de Operadores:** Gestiona la precedencia y asociatividad de los operadores matemáticos.
3. **Notación Polaca Inversa (RPN):** Reorganiza la expresión en formato postfijo para eliminar la necesidad de paréntesis, permitiendo una evaluación lineal en tiempo $O(N)$ con una pila numérica.

---

## 4. Código Fuente Completo en C++

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double gradosARadianes(double grados) {
    return grados * (PI / 180.0);
}

void mostrarMenu() {
    std::cout << "\n=== Calculadora Científica SciCalcX ===\n";
    std::cout << "1. Suma (+)\n";
    std::cout << "2. Resta (-)\n";
    std::cout << "3. Multiplicación (*)\n";
    std::cout << "4. División (/)\n";
    std::cout << "5. Potencia (x^y)\n";
    std::cout << "6. Raíz Cuadrada (sqrt)\n";
    std::cout << "7. Seno (grados)\n";
    std::cout << "8. Coseno (grados)\n";
    std::cout << "9. Salir\n";
    std::cout << "Seleccione una opción (1-9): ";
}

int main() {
    int opcion;
    double x, y, resultado;

    while (true) {
        mostrarMenu();
        if (!(std::cin >> opcion)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (opcion == 9) break;

        switch (opcion) {
            case 1:
                std::cout << "Ingrese dos números: ";
                std::cin >> x >> y;
                std::cout << "Resultado: " << x + y << "\n";
                break;
            case 4:
                std::cout << "Ingrese dividendo y divisor: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "Error: División entre cero no permitida.\n";
                } else {
                    std::cout << "Resultado: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "Ingrese número: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "Error: Raíz de número negativo en reales.\n";
                } else {
                    std::cout << "Resultado: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "Ingrese ángulo en grados: ";
                std::cin >> x;
                resultado = std::sin(gradosARadianes(x));
                if (std::fabs(resultado) < 1e-12) resultado = 0.0;
                std::cout << "Resultado: " << resultado << "\n";
                break;
            default:
                std::cout << "Opción no válida.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. Prueba tu Código sin Instalación Local

¿Deseas compilar y ejecutar este programa inmediatamente? Abre el **[Tutor de Código C/C++ de SciCalcX](/compiler/)** para probar algoritmos directamente en tu navegador con diagnósticos del compilador en tiempo real.

---

## Referencias y Lecturas Recomendadas

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): Referencia fundamental sobre la representación binaria IEEE 754, cancelación catastrófica y redondeo numérico.
* **cppreference** — [Funciones Matemáticas en C++ (`<cmath>`)](https://es.cppreference.com/w/cpp/header/cmath): Documentación técnica oficial de funciones trigonométricas, cálculo de raíces y manejo de excepciones de dominio.
* **Edsger W. Dijkstra (1961)** — [Algol 60 Translation: The Shunting-Yard Algorithm](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): Informe técnico clásico sobre el análisis de expresiones infijas y precedencia de operadores.
