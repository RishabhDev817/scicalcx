---
title: "C++로 기본 공학용 계산기 프로그램 만들기"
description: "C++을 사용하여 사칙연산, 거듭제곱 및 삼각함수 연산을 수행하는 콘솔 공학용 계산기 구현 방법을 알아봅니다."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# C++로 기본 공학용 계산기 프로그램 만들기

공학용 계산기는 이공계 및 엔지니어링 분야에서 필수적인 도구입니다. 내부적으로 입력된 숫자와 연산자를 대수학적 규칙에 따라 평가하고 연산합니다.

이 튜토리얼에서는 기본 사칙연산뿐만 아니라 거듭제곱, 제곱근, 0 나누기 예외 처리를 갖춘 인터랙티브 C++ 콘솔 계산기를 제작합니다.

---

## 1. 계산기 로직 구성하기

안정적인 계산기를 작성하려면 다음 세 가지 핵심 요소를 처리해야 합니다:
1. **입력 파싱:** 부동 소수점(`double`) 숫자 및 메뉴 선택 입력.
2. **제어 흐름:** `switch` 문을 통한 연산자 분기 처리.
3. **오류 처리:** 0 나누기 방지 및 실수 범위 내 음수 제곱근 예외 방지.

---

## 2. C++ `<cmath>` 표준 라이브러리 활용

과학 계산 기능을 지원하기 위해 표준 C++ 라이브러리 `<cmath>`를 포함합니다:

* `pow(base, exponent)`: 거듭제곱 $x^y$ 계산.
* `sqrt(val)`: 제곱근 $\sqrt{x}$ 계산.
* `sin(angle)` / `cos(angle)`: 삼각함수 연산 (각도는 **라디안** 기준).

---

## 3. C++ 계산기 전체 소스 코드

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== SciCalcX C++ 공학용 계산기 ===" << std::endl;
    std::cout << "1. 덧셈 (+)" << std::endl;
    std::cout << "2. 뺄셈 (-)" << std::endl;
    std::cout << "3. 곱셈 (*)" << std::endl;
    std::cout << "4. 나눗셈 (/)" << std::endl;
    std::cout << "5. 거듭제곱 (x^y)" << std::endl;
    std::cout << "6. 제곱근 (√)" << std::endl;
    std::cout << "7. 종료" << std::endl;
    std::cout << "연산을 선택하세요 (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "계산기를 종료합니다. 안녕히 가세요!" << std::endl;
            break;
        }

        // 단일 피연산자 연산
        if (choice == 6) {
            std::cout << "숫자를 입력하세요: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "오류: 실수 범위에서 음수의 제곱근은 정의되지 않습니다." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "결과: " << result << std::endl << std::endl;
            }
            continue;
        }

        // 이항 연산
        if (choice >= 1 && choice <= 5) {
            std::cout << "첫 번째 숫자 입력: ";
            std::cin >> num1;
            std::cout << "두 번째 숫자 입력: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "결과: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "결과: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "결과: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "오류: 0으로 나눌 수 없습니다." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "결과: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "결과: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "유효하지 않은 연산입니다." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "잘못된 메뉴 선택입니다. 다시 시도하세요." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## 지금 브라우저에서 직접 코드를 실행해보세요!

**[SciCalcX 온라인 C++ 컴파일러](/ko/compiler/)**를 열고 위 코드를 붙여넣어 실시간 실행 결과를 확인해보세요!
