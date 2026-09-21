---
title: "C++ 공학용 계산기 개발: IEEE 754 부동소수점 정밀도와 수식 파싱"
description: "C++로 공학용 콘솔 계산기를 제작하는 방법을 학습하세요. 수학적 도메인 검증, IEEE 754 부동소수점 오차 처리, 션팅야드(Shunting-yard) 알고리즘을 완벽하게 다룹니다."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "컴퓨터 과학 및 알고리즘"
readTime: "10분 분량"
calculatorUrl: "/"
calculatorLabel: "SciCalcX 공학용 계산기"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "공학용 계산기", "알고리즘", "IEEE 754", "수학", "프로그래밍"]
---

공학용 계산기는 과학, 공학 및 기술 분야 전반에서 필수적인 연산 도구입니다. **[SciCalcX](/)**와 같은 최신 웹 플랫폼은 브라우저에서 다항 수식을 즉시 계산하지만, C++ 언어로 직접 계산기를 구현해보는 것은 부동소수점 하드웨어 구조, 수학적 예외 처리 및 파서 알고리즘을 깊이 이해하는 데 매우 유익합니다.

본 가이드에서는 **IEEE 754 표준**이 2진수로 소수를 표현하는 원리, 0으로 나누기 및 음수 제곱근과 같은 수학적 오류를 방지하는 방법, 라디안-도 각도 변환, 그리고 괄호와 연산자 우선순위(**PEMDAS**)를 처리하는 션팅야드(Shunting-yard) 알고리즘을 살펴봅니다.

---

## 1. 수학적 도메인 검증 및 예외 처리

C++에서 수치 계산을 수행할 때는 치명적인 프로세스 오류를 방지하기 위해 사전 검증을 거쳐야 합니다:

1. **0으로 나누기 (Division by Zero):** 정수 나눗셈에서 0으로 나누면 프로세스가 즉시 비정상 종료(`SIGFPE`)됩니다. 부동소수점(`double`) 연산에서는 무한대(`inf`)나 정의되지 않은 값(`NaN`)이 생성됩니다. 따라서 계산 전 분모가 0에 근접한지 검사해야 합니다.
2. **음수의 제곱근:** `<cmath>`의 `std::sqrt()` 함수에 음수를 전달하면 실수 도메인에서는 `NaN`이 반환됩니다. 피제곱근 수가 $\ge 0$인지 반드시 확인해야 합니다.
3. **각도 단위 변환 (라디안과 도):** C++ 표준 삼각함수(`std::sin`, `std::cos`, `std::tan`)는 입력 각도를 반드시 **라디안(Radian)** 단위로 요구합니다:
   $$\text{라디안} = \text{도} \times \frac{\pi}{180}$$

---

## 2. 부동소수점 오차와 IEEE 754 표준

컴퓨터는 2진수를 사용하므로 $0.1$이나 $0.2$와 같은 십진수 소수를 정확하게 표현하지 못하고 순환소수가 발생하여 미세한 반올림 오차가 생깁니다:

## 4. 실무에서의 각도 단위: 도(Degree)와 라디안(Radian)

수학 교육 및 공학 실무에서는 각도를 주로 60분법의 도($0^\circ \sim 360^\circ$) 단위로 표현합니다. 그러나 컴퓨터 프로세서와 C++ 표준 라이브러리는 내부적으로 오직 호도법인 라디안(Radian) 단위로 삼각함수를 연산합니다.

원 한 바퀴는 $360^\circ$이며, 이는 정확히 $2\pi$ 라디안과 같습니다:
$$\text{라디안} = \text{도} \cdot \frac{\pi}{180^\circ}$$
$$\text{도} = \text{라디안} \cdot \frac{180^\circ}{\pi}$$

이 변환 과정을 누락하면 `std::sin(90)`은 $90^\circ$의 사인값($1.0$)이 아니라 90 라디안의 사인값($\approx 0.893996$)을 연산하게 됩니다. 따라서 공학용 계산기 프로그램은 DEG 모드와 RAD 모드 간의 명확한 변환 인터페이스를 반드시 갖추어야 합니다.

---

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // 0 (거짓) 출력!
// a + b의 실제 내부 표현은 0.3000000000000000444... 입니다.
```

실수 비교 시에는 항상 엡실론($\epsilon$) 허용 오차를 적용해야 합니다:

```cpp
#include <cmath>

bool areEqual(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. 다항 수식 파싱: 션팅야드(Shunting-Yard) 알고리즘

$3 + 4 \times 2 / (1 - 5)^2$와 같이 괄호가 포함된 복합 연산을 처리하기 위해 계산기는 엣스허르 데이크스트라(Edsger Dijkstra)의 **션팅야드 알고리즘**을 사용합니다:

1. **토큰화 (Tokenization):** 문자열을 숫자, 연산자, 괄호로 분리합니다.
2. **연산자 스택:** 연산자 우선순위와 결합 법칙에 따라 연산자를 정렬합니다.
3. **역폴란드 표기법 (RPN):** 괄호가 필요 없는 후위 표기법 수식을 생성하여, 피연산자 스택을 통해 선형 시간 $O(N)$으로 즉시 결과를 도출합니다.

---

## 4. 완전한 C++ 콘솔 계산기 소스 코드

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double degToRad(double deg) {
    return deg * (PI / 180.0);
}

void printMenu() {
    std::cout << "\n=== SciCalcX C++ 공학용 계산기 ===\n";
    std::cout << "1. 덧셈 (+)\n";
    std::cout << "2. 뺄셈 (-)\n";
    std::cout << "3. 곱셈 (*)\n";
    std::cout << "4. 나눗셈 (/)\n";
    std::cout << "5. 거듭제곱 (x^y)\n";
    std::cout << "6. 제곱근 (sqrt)\n";
    std::cout << "7. 사인 (도 단위)\n";
    std::cout << "8. 코사인 (도 단위)\n";
    std::cout << "9. 종료\n";
    std::cout << "메뉴 선택 (1-9): ";
}

int main() {
    int choice;
    double x, y, result;

    while (true) {
        printMenu();
        if (!(std::cin >> choice)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (choice == 9) break;

        switch (choice) {
            case 1:
                std::cout << "두 수 입력: ";
                std::cin >> x >> y;
                std::cout << "결과: " << x + y << "\n";
                break;
            case 4:
                std::cout << "피제수와 제수 입력: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "오류: 0으로 나눌 수 없습니다.\n";
                } else {
                    std::cout << "결과: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "제곱근을 구할 수: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "오류: 실수의 음수 제곱근은 불가합니다.\n";
                } else {
                    std::cout << "결과: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "각도 입력(도): ";
                std::cin >> x;
                result = std::sin(degToRad(x));
                if (std::fabs(result) < 1e-12) result = 0.0;
                std::cout << "결과: " << result << "\n";
                break;
            default:
                std::cout << "유효하지 않은 선택입니다.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. 브라우저에서 즉시 코드 실행하기

로컬 환경에 별도 컴파일러를 설치하지 않고 C++ 코드를 실행해보고 싶으신가요?
**[SciCalcX C/C++ 코드 튜터](/compiler/)**를 활용하면 브라우저에서 직접 프로그램을 컴파일하고 실행 결과를 확인할 수 있습니다.

---

## 참고 문헌 및 추가 자료

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): IEEE 754 부동 소수점 규격, 비트 구조, 반올림 오차 및 정확도 한계에 관한 고전적 논문.
* **cppreference** — [C++ `<cmath>` 수학 라이브러리](https://en.cppreference.com/w/cpp/header/cmath): 삼각 함수, 제곱근, 부동 소수점 정의역 오류 처리에 관한 공식 표준 문서.
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): 중위 표기 수식을 후위 표기법(RPN)으로 변환하는 션팅야드(Shunting-yard) 알고리즘의 원 논문.
