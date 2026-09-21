---
title: "Solving Quadratic Equations: The Quadratic Formula, Discriminant, and Graphical Roots"
description: "Master quadratic equations. Learn the derivation by completing the square, analyze the discriminant for real and complex roots, and solve step-by-step with worked examples."
pubDate: 2026-07-28
updatedDate: 2026-09-21
author: "SciCalcX"
category: "Algebra & Scientific Computation"
readTime: "9 min read"
calculatorUrl: "/"
calculatorLabel: "SciCalcX Scientific Calculator & Equation Solver"
related: ["derivative-rules", "calculator-cpp", "matrix-multiplication"]
tags: ["Algebra", "Quadratic Formula", "Discriminant", "Mathematics", "Graphing", "Polynomials"]
---

Whenever an algebraic problem involves area, gravity, or parabolic trajectories, it almost always leads to a second-degree polynomial equation. While classroom examples can often be factored by inspection, real-world quadratic equations rarely factor cleanly.

The **Quadratic Formula** is the universal tool that solves every quadratic equation without guesswork. Whether the roots are whole numbers, messy decimals with square roots, or complex numbers with imaginary components, the formula always delivers the exact answers.

---

## 1. The Standard Form of a Quadratic Equation

A quadratic equation is a second-degree polynomial in a single variable $x$, written in **standard form** as:

$$ax^2 + bx + c = 0$$

Where:
* $a$, $b$, and $c$ are real constant coefficients.
* **$a \neq 0$** (If $a = 0$, the $x^2$ term vanishes and the equation degrades into a linear equation $bx + c = 0$).

### Identifying Coefficients
Before applying any formula, always rearrange the equation so all terms sit on the left side equal to zero:
* **Example:** $3x^2 = 5x - 2 \implies 3x^2 - 5x + 2 = 0$ ($a = 3$, $b = -5$, $c = 2$).
* **Example:** $x^2 - 9 = 0 \implies x^2 + 0x - 9 = 0$ ($a = 1$, $b = 0$, $c = -9$).

---

## 2. The Quadratic Formula

For any quadratic equation $ax^2 + bx + c = 0$, the values of $x$ that satisfy the equation are given by:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

Where:
* $x$ = the unknown values (roots) that satisfy the equation
* $a$ = quadratic coefficient (must not equal $0$)
* $b$ = linear coefficient
* $c$ = constant term
* $\pm$ = indicates two possible solutions ($x_1$ adding the radical, $x_2$ subtracting it)
* $b^2 - 4ac$ = the discriminant ($\Delta$), which determines whether roots are real or complex

Explicitly, the two roots are:

$$x_1 = \frac{-b + \sqrt{b^2 - 4ac}}{2a}, \quad x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}$$

---

## 3. Algebraic Derivation: Completing the Square

The quadratic formula is not an arbitrary rule; it is derived by applying **completing the square** to the general standard form $ax^2 + bx + c = 0$:

1. **Subtract $c$ from both sides:**
   $$ax^2 + bx = -c$$

2. **Divide every term by the leading coefficient $a$:**
   $$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

3. **Complete the square:** Take half of the linear coefficient $\frac{b}{a}$, which is $\frac{b}{2a}$, square it to get $\left(\frac{b}{2a}\right)^2 = \frac{b^2}{4a^2}$, and add it to both sides:
   $$x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = \frac{b^2}{4a^2} - \frac{c}{a}$$

4. **Rewrite the left side as a perfect square and combine fractions on the right:**
   $$\left( x + \frac{b}{2a} \right)^2 = \frac{b^2 - 4ac}{4a^2}$$

5. **Take the square root of both sides:**
   $$x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a}$$

6. **Subtract $\frac{b}{2a}$ to isolate $x$:**
   $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

This completes the proof.

---

## 4. The Discriminant ($\Delta = b^2 - 4ac$)

The expression beneath the radical, denoted by the Greek capital letter delta ($\Delta$), is called the **discriminant**:

$$\Delta = b^2 - 4ac$$

The value of the discriminant determines the number, nature, and graphical behavior of the roots without needing to compute the entire formula:

| Discriminant Value ($\Delta$) | Nature of Roots | Graphical Meaning ($y = ax^2 + bx + c$) |
| :---: | :--- | :--- |
| **$\Delta > 0$** | **Two distinct real roots** | The parabola crosses the $x$-axis at **two separate points**. |
| **$\Delta = 0$** | **One repeated real root** | The parabola's vertex touches the $x$-axis at **exactly one point** (tangent). |
| **$\Delta < 0$** | **Two complex conjugate roots** ($u \pm vi$) | The parabola lies entirely above or below the $x$-axis (**zero real $x$-intercepts**). |

---

## 5. Three Worked Examples: Covering All Cases

### Case 1: Two Distinct Real Roots ($\Delta > 0$)
Solve: $2x^2 - 7x + 3 = 0$

1. Identify coefficients: $a = 2$, $b = -7$, $c = 3$.
2. Compute the discriminant:
   $$\Delta = (-7)^2 - 4(2)(3) = 49 - 24 = 25$$
   Since $\Delta = 25 > 0$, there are two distinct rational roots.
3. Apply the formula:
   $$x = \frac{-(-7) \pm \sqrt{25}}{2(2)} = \frac{7 \pm 5}{4}$$
4. Calculate individual roots:
   $$x_1 = \frac{7 + 5}{4} = \frac{12}{4} = 3$$
   $$x_2 = \frac{7 - 5}{4} = \frac{2}{4} = \frac{1}{2} = 0.5$$

**Solutions:** $x = 3$ and $x = 0.5$.

---

### Case 2: One Repeated Real Root ($\Delta = 0$)
Solve: $x^2 - 6x + 9 = 0$

1. Identify coefficients: $a = 1$, $b = -6$, $c = 9$.
2. Compute the discriminant:
   $$\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$$
   Since $\Delta = 0$, the parabola touches the $x$-axis at its vertex.
3. Apply the formula:
   $$x = \frac{-(-6) \pm \sqrt{0}}{2(1)} = \frac{6 \pm 0}{2} = 3$$

**Solution:** $x = 3$ (multiplicity 2).

---

### Case 3: Complex Conjugate Roots ($\Delta < 0$)
Solve: $x^2 + 2x + 5 = 0$

1. Identify coefficients: $a = 1$, $b = 2$, $c = 5$.
2. Compute the discriminant:
   $$\Delta = (2)^2 - 4(1)(5) = 4 - 20 = -16$$
   Since $\Delta = -16 < 0$, the solutions are complex numbers involving the imaginary unit $i = \sqrt{-1}$.
3. Apply the formula:
   $$x = \frac{-2 \pm \sqrt{-16}}{2(1)} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$$

**Solutions:** $x = -1 + 2i$ and $x = -1 - 2i$.

---

## 6. Graphical Geometry: Vertex and Axis of Symmetry

Every quadratic function graphs as a symmetric parabola:

$$y = ax^2 + bx + c$$

* If $a > 0$, the parabola opens upward (possessing an absolute minimum).
* If $a < 0$, the parabola opens downward (possessing an absolute maximum).

### The Vertex Formula
The highest or lowest turning point of the parabola, known as the **vertex**, occurs on the axis of symmetry:

$$x_{\text{vertex}} = -\frac{b}{2a}$$

To find the corresponding $y$-coordinate, substitute $x_{\text{vertex}}$ back into the original quadratic function:

$$y_{\text{vertex}} = f\left( -\frac{b}{2a} \right) = c - \frac{b^2}{4a} = -\frac{\Delta}{4a}$$

Notice that the vertex $x$-coordinate is the exact center of the two roots in the quadratic formula: $x = \frac{-b}{2a} \pm \frac{\sqrt{\Delta}}{2a}$.

---

## 7. Common Mistakes to Avoid

1. **Only Dividing the Radical by $2a$:**  
   Writing $x = -b \pm \frac{\sqrt{b^2-4ac}}{2a}$ is a formatting and calculation error. The division bar spans the entire numerator: $(-b \pm \sqrt{\Delta}) / (2a)$.
2. **Double Negative Sign Errors in $-b$:**  
   If $b = -5$, then $-b = -(-5) = +5$. Dropping the negative sign is the most frequent source of algebra errors.
3. **Squaring Negative Numbers Incorrectly:**  
   Remember that $(-b)^2$ is always positive. For example, $(-4)^2 = +16$, not $-16$.
4. **Forgetting to Set the Equation to Zero:**  
   Applying coefficients from $2x^2 + 3x = 8$ without subtracting $8$ first ($c = -8$, not $0$) invalidates the solution.

---

## 8. Frequently Asked Questions

### Can a quadratic equation have three roots?
No. By the **Fundamental Theorem of Algebra**, a polynomial equation of degree $n$ has exactly $n$ complex roots (counting multiplicity). A second-degree polynomial equation always has exactly two roots.

### What is the relationship between the roots and coefficients (Vieta's Formulas)?
For any quadratic equation $ax^2 + bx + c = 0$ with roots $r_1$ and $r_2$:
* **Sum of roots:** $r_1 + r_2 = -\frac{b}{a}$
* **Product of roots:** $r_1 \cdot r_2 = \frac{c}{a}$

This provides an immediate mental check to verify your solved roots.

---

## Solve and Graph Quadratics on SciCalcX

Need to evaluate radical expressions or visualize parabolas?
* Use the **[SciCalcX Scientific Calculator](/)** for multi-line parenthesized arithmetic and high-precision square root evaluation.
* Plot functions, find intercepts, and view tangent lines dynamically with the **[SciCalcX 2D Graphing Calculator](/graphing/)**.

---

## References & Further Reading

* **OpenStax College Algebra 2e** — [Quadratic Equations (Section 2.5)](https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations): Complete derivation by completing the square, discriminant analysis, and quadratic modeling.
* **Wolfram MathWorld** — [Quadratic Equation](https://mathworld.wolfram.com/QuadraticEquation.html): Algebraic history, radical root classifications, and Vieta's formulas.
* **NIST Digital Library of Mathematical Functions (DLMF)** — [Elementary Algebra (Section 1.2)](https://dlmf.nist.gov/1.2): Standard algebraic definitions and polynomial root properties.
