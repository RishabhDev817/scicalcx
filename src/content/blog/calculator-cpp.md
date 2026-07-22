---
title: "Building a Basic Scientific Calculator in C++"
description: "Learn how to write a basic scientific calculator program in C++ to process mathematical operations and trigonometric functions."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Building a Basic Scientific Calculator in C++

Scientific calculators are essential utilities for science and engineering fields. Under the hood, they take numbers and operator symbols and evaluate them according to algebraic rules.

In this tutorial, we will write a C++ console calculator that processes basic arithmetic operations alongside trigonometric and power operations.

---

## 1. Structuring the Calculator Logic

To build a robust calculator, we must handle:
1. **User input parsing:** Reading variables and floating-point entries.
2. **Control Flow:** Evaluating the chosen operator using `switch` statements or conditional gates.
3. **Boundary/Error Conditions:** Mitigating mathematical issues like division by zero or taking the square root of a negative value.

For complex expressions, parsers like the **Shunting-yard algorithm** are used, but for a single-operator calculator, a clean menu-based loop works perfectly.

---

## 2. Using the C++ `<cmath>` Library

To support scientific functions like powers, square roots, and trigonometric calculations, we import the standard C++ `<cmath>` library:

* `pow(base, exponent)`: Computes base raised to power.
* `sqrt(val)`: Computes square root of value.
* `sin(angle)` / `cos(angle)`: Evaluates trigonometric ratios (angles must be passed in **radians**).

---

## 3. C++ Calculator Source Code

Below is a complete, well-commented C++ program implementing the calculator workspace:

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== SciCalcX CLI Calculator ===" << std::endl;
    std::cout << "1. Addition (+)" << std::endl;
    std::cout << "2. Subtraction (-)" << std::endl;
    std::cout << "3. Multiplication (*)" << std::endl;
    std::cout << "4. Division (/)" << std::endl;
    std::cout << "5. Power (x^y)" << std::endl;
    std::cout << "6. Square Root (v)" << std::endl;
    std::cout << "7. Exit" << std::endl;
    std::cout << "Select operation (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "Exiting calculator. Goodbye!" << std::endl;
            break;
        }

        // Handle single input operations
        if (choice == 6) {
            std::cout << "Enter number: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Error: Square root of a negative number is undefined in real domain." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Result: " << result << std::endl << std::endl;
            }
            continue;
        }

        // Handle dual input operations
        if (choice >= 1 && choice <= 5) {
            std::cout << "Enter first number: ";
            std::cin >> num1;
            std::cout << "Enter second number: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "Result: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "Result: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "Result: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "Error: Division by zero is undefined." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "Result: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "Result: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "Invalid operation." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Invalid menu choice. Try again." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## Test This Code Live!

Reading about this concept is one thing, but running the code yourself is how you truly learn. **[Click here to open the SciCalcX AI Code Tutor](/compiler/)** and paste the code blocks above directly into the terminal to see how the output changes in real-time!
