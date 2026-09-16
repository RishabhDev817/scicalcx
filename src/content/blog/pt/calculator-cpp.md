---
title: "Como Construir uma Calculadora Científica Básica em C++"
description: "Aprenda a desenvolver um programa de calculadora científica em C++ para operações matemáticas, potenciação e funções trigonométricas."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Como Construir uma Calculadora Científica Básica em C++

As calculadoras científicas são ferramentas fundamentais nas áreas de exatas e engenharia. Internamente, interpretam valores numéricos e operadores algébricos de acordo com axiomas matemáticos estritos.

Neste tutorial, vamos construir uma calculadora interativa no terminal C++ capaz de executar operações aritméticas básicas, potenciação, raiz quadrada e proteção contra divisão por zero.

---

## 1. Estruturação da Lógica da Calculadora

Para um programa seguro e eficiente, precisamos tratar:
1. **Entrada de dados:** Leitura de números com ponto flutuante (`double`) e opções de menu.
2. **Fluxo de execução:** Avaliação da operação via comandos `switch`.
3. **Validação de erros:** Prevenção de divisão por zero e raiz quadrada de números negativos no domínio dos reais.

---

## 2. A Biblioteca Padrão `<cmath>` do C++

Para cálculos científicos, incluímos a biblioteca `<cmath>`:

* `pow(base, expoente)`: Calcula a base elevada ao expoente.
* `sqrt(valor)`: Calcula a raiz quadrada.
* `sin(ângulo)` / `cos(ângulo)`: Calcula funções trigonométricas (ângulos devem estar em **radianos**).

---

## 3. Código-Fonte Completo em C++

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== Calculadora SciCalcX em C++ ===" << std::endl;
    std::cout << "1. Adição (+)" << std::endl;
    std::cout << "2. Subtração (-)" << std::endl;
    std::cout << "3. Multiplicação (*)" << std::endl;
    std::cout << "4. Divisão (/)" << std::endl;
    std::cout << "5. Potência (x^y)" << std::endl;
    std::cout << "6. Raiz Quadrada (√)" << std::endl;
    std::cout << "7. Sair" << std::endl;
    std::cout << "Escolha uma operação (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "Encerrando calculadora. Até logo!" << std::endl;
            break;
        }

        // Operação com um operando
        if (choice == 6) {
            std::cout << "Digite o número: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Erro: Raiz quadrada de número negativo não é definida nos reais." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Resultado: " << result << std::endl << std::endl;
            }
            continue;
        }

        // Operações com dois operandos
        if (choice >= 1 && choice <= 5) {
            std::cout << "Digite o primeiro número: ";
            std::cin >> num1;
            std::cout << "Digite o segundo número: ";
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
                        std::cout << "Erro: Divisão por zero é indefinida." << std::endl;
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
                    std::cout << "Operação inválida." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Opção inválida. Tente novamente." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## Teste Este Código ao Vivo!

**[Acesse o Compilador Online SciCalcX](/pt/compiler/)** e execute este código em tempo real em nosso sandbox!
