---
title: "Construindo uma Calculadora Científica em C++: Precisão IEEE 754 e Avaliação de Expressões"
description: "Aprenda a programar uma calculadora científica em C++. Domine a validação de domínios matemáticos, a precisão de ponto flutuante IEEE 754 e o algoritmo Shunting-yard."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "Ciência da Computação"
readTime: "10 min de leitura"
calculatorUrl: "/"
calculatorLabel: "Calculadora Científica Multi-linhas SciCalcX"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "Calculadora Científica", "Algoritmos", "Matemática", "IEEE 754", "Programação"]
---

Calculadoras científicas são ferramentas indispensáveis nas ciências exatas e engenharias. Enquanto plataformas web avançadas como o **[SciCalcX](/)** avaliam fórmulas complexas de múltiplas linhas diretamente no navegador, programar uma calculadora científica em C++ proporciona uma compreensão indispensável sobre arquitetura de ponto flutuante, tratamento de exceções numéricas e algoritmos de análise sintática (parsing).

Neste guia completo, você aprenderá como o padrão **IEEE 754** armazena números decimais em binário, como prevenir falhas matemáticas críticas (divisão por zero, raízes negativas), como efetuar conversões trigonométricas entre graus e radianos, e como avaliar expressões algébricas via algoritmo Shunting-yard (**PEMDAS**).

---

## 1. Tratamento de Exceções e Domínios Matemáticos

Em C++, cálculos numéricos devem incluir verificações explícitas antes da execução:

1. **Divisão por Zero:** Em números inteiros, provoca um encerramento imediato do processo (`SIGFPE`). Em ponto flutuante (`double`), produz infinito (`inf`) ou indeterminações (`NaN`). Uma implementação profissional deve verificar se o divisor é diferente de zero.
2. **Raízes de Números Negativos:** A função `std::sqrt()` em `<cmath>` retorna `NaN` para entradas negativas no domínio real. É obrigatório checar se o radicando é $\ge 0$.
3. **Graus e Radianos:** Todas as rotinas trigonométricas em `<cmath>` (`std::sin`, `std::cos`, `std::tan`) esperam ângulos em **radianos**:
   $$\text{Radianos} = \text{Graus} \times \frac{\pi}{180}$$

---

## 2. Precisão de Ponto Flutuante e Padrão IEEE 754

Devido à representação em base 2, frações decimais como $0.1$ e $0.2$ tornam-se dízimas periódicas no computador, gerando pequenas imprecisões de arredondamento:

## 4. Unidades Angulares na Prática: Graus vs Radianos

Na engenharia e no ensino acadêmico, os ângulos são frequentemente especificados em graus ($0^\circ$ a $360^\circ$). No entanto, os processadores e as bibliotecas científicas de C++ computam funções trigonométricas estritamente em radianos.

Uma circunferência completa mede $360^\circ$, o que equivale a $2\pi$ radianos:
$$\text{Radianos} = \text{Graus} \cdot \frac{\pi}{180^\circ}$$
$$\text{Graus} = \text{Radianos} \cdot \frac{180^\circ}{\pi}$$

Se essa conversão for omitida, `std::sin(90)` avaliará o seno de 90 radianos ($\approx 0,893996$) em vez de $\sin(90^\circ) = 1,0$. Por essa razão, calculadoras científicas de nível profissional oferecem alternância intuitiva entre os modos DEG e RAD.

---

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // Imprime 0 (Falso)!
// a + b resulta internamente em 0.3000000000000000444...
```

Para comparar números de ponto flutuante com segurança, adote sempre um limite de tolerância (épsilon $\epsilon$):

```cpp
#include <cmath>

bool saoIguais(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. Avaliação de Expressões: O Algoritmo Shunting-Yard

Para processar expressões com parênteses e múltiplas operações como $3 + 4 \times 2 / (1 - 5)^2$, utiliza-se o **algoritmo Shunting-yard** de Edsger Dijkstra:

1. **Tokenização:** Divide a string em números, operadores e delimitadores.
2. **Pilha de Operadores:** Organiza a ordem de precedência e associatividade matemática.
3. **Notação Polonesa Reversa (RPN):** Gera uma sequência pós-fixada sem parênteses, avaliável em tempo linear $O(N)$ através de uma pilha numérica.

---

## 4. Código Fonte Completo em C++

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double grausParaRadianos(double graus) {
    return graus * (PI / 180.0);
}

void exibirMenu() {
    std::cout << "\n=== Calculadora Científica SciCalcX ===\n";
    std::cout << "1. Adição (+)\n";
    std::cout << "2. Subtração (-)\n";
    std::cout << "3. Multiplicação (*)\n";
    std::cout << "4. Divisão (/)\n";
    std::cout << "5. Potenciação (x^y)\n";
    std::cout << "6. Raiz Quadrada (sqrt)\n";
    std::cout << "7. Seno (graus)\n";
    std::cout << "8. Cosseno (graus)\n";
    std::cout << "9. Sair\n";
    std::cout << "Selecione a operação (1-9): ";
}

int main() {
    int opcao;
    double x, y, resultado;

    while (true) {
        exibirMenu();
        if (!(std::cin >> opcao)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (opcao == 9) break;

        switch (opcao) {
            case 1:
                std::cout << "Digite dois números: ";
                std::cin >> x >> y;
                std::cout << "Resultado: " << x + y << "\n";
                break;
            case 4:
                std::cout << "Digite dividendo e divisor: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "Erro: Divisão por zero indefinida.\n";
                } else {
                    std::cout << "Resultado: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "Número para raiz: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "Erro: Raiz de número negativo nos reais não permitida.\n";
                } else {
                    std::cout << "Resultado: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "Ângulo em graus: ";
                std::cin >> x;
                resultado = std::sin(grausParaRadianos(x));
                if (std::fabs(resultado) < 1e-12) resultado = 0.0;
                std::cout << "Resultado: " << resultado << "\n";
                break;
            default:
                std::cout << "Opção inválida.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. Execute seu Código Diretamente no Navegador

Deseja compilar e testar algoritmos sem precisar instalar compiladores localmente? Acesse o **[Tutor e Compilador C/C++ do SciCalcX](/compiler/)** para experimentar códigos em tempo real.

---

## Referências e Leituras Recomendadas

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): Artigo clássico fundamental sobre a representação IEEE 754 em ponto flutuante, erros de arredondamento e cancelamento.
* **cppreference** — [Funções Matemáticas em C++ (`<cmath>`)](https://pt.cppreference.com/w/cpp/header/cmath): Documentação técnica oficial de rotinas trigonométricas, cálculo de raízes e tratamento de exceções de domínio.
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): Publicação seminal que introduziu o algoritmo Shunting-yard para conversão de notação infixa em notação polonesa reversa.
