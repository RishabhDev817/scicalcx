---
title: "Cómo Crear una Calculadora Científica Básica en C++"
description: "Aprende a programar una calculadora científica básica en C++ para procesar operaciones matemáticas y funciones trigonométricas."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Cómo Crear una Calculadora Científica Básica en C++

Las calculadoras científicas son herramientas indispensables en las áreas de ciencia e ingeniería. Internamente, procesan números y símbolos de operadores algebraicos evaluándolos según las reglas matemáticas formales.

En este tutorial, programaremos una calculadora de consola interactiva en C++ capaz de procesar aritmética básica, potencias y raíces cuadradas con validaciones de errores.

---

## 1. Estructura de la Lógica de la Calculadora

Para construir una calculadora robusta y segura, debemos gestionar tres aspectos esenciales:
1. **Lectura y parseo de entradas:** Captura de números de punto flotante (`double`) y opciones del menú.
2. **Control de flujo:** Evaluación del operador elegido mediante estructuras `switch` o condicionales.
3. **Manejo de errores matemáticos:** Evitar anomalías críticas como la división por cero o la raíz cuadrada de números negativos en el dominio real.

Para analizadores de expresiones complejas se emplea el algoritmo *Shunting-yard* de Dijkstra, pero para una calculadora interactiva guiada por menú, un bucle continuo es la solución óptima y didáctica.

---

## 2. Uso de la Biblioteca Estándar `<cmath>`

Para incorporar capacidades científicas avanzadas, incluimos la cabecera estándar de C++ `<cmath>`:

* `pow(base, exponente)`: Calcula la base elevada a la potencia.
* `sqrt(valor)`: Calcula la raíz cuadrada del valor suministrado.
* `sin(ángulo)` / `cos(ángulo)`: Evalúa funciones trigonométricas (los ángulos deben especificarse en **radianes**).

---

## 3. Código Fuente Completo en C++

A continuación se presenta el programa en C++ completamente comentado y listo para compilar:

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== Calculadora SciCalcX en C++ ===" << std::endl;
    std::cout << "1. Suma (+)" << std::endl;
    std::cout << "2. Resta (-)" << std::endl;
    std::cout << "3. Multiplicación (*)" << std::endl;
    std::cout << "4. División (/)" << std::endl;
    std::cout << "5. Potencia (x^y)" << std::endl;
    std::cout << "6. Raíz Cuadrada (√)" << std::endl;
    std::cout << "7. Salir" << std::endl;
    std::cout << "Seleccione una operación (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "¡Saliendo de la calculadora! Hasta pronto." << std::endl;
            break;
        }

        // Operaciones de un solo operando
        if (choice == 6) {
            std::cout << "Ingrese el número: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Error: La raíz cuadrada de un número negativo es indefinida en los reales." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Resultado: " << result << std::endl << std::endl;
            }
            continue;
        }

        // Operaciones binarias
        if (choice >= 1 && choice <= 5) {
            std::cout << "Ingrese el primer número: ";
            std::cin >> num1;
            std::cout << "Ingrese el segundo número: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "Resultado: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "Resultado: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "Resultado: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "Error: La división entre cero no está definida." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "Resultado: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "Resultado: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "Operación no válida." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Opción de menú inválida. Inténtelo de nuevo." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## ¡Prueba este código en vivo!

Aprender programación requiere experimentar y ejecutar. **[Abre aquí el Compilador Online SciCalcX](/es/compiler/)** y pega este código en la consola interactiva para verificar su ejecución inmediata.
