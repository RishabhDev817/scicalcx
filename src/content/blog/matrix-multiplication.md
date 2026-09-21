---
title: "Matrix Multiplication Explained: Rules, Step-by-Step Worked Examples, and Properties"
description: "Learn how to multiply matrices step-by-step. Understand dimension compatibility, row-by-column dot products, 2x2 and 3x3 worked examples, and non-commutative matrix algebra."
pubDate: 2026-07-26
updatedDate: 2026-09-21
author: "SciCalcX"
category: "Linear Algebra"
readTime: "10 min read"
calculatorUrl: "/matrix"
calculatorLabel: "SciCalcX Scientific Matrix Engine"
related: ["standard-deviation", "time-complexity", "calculator-cpp"]
tags: ["Matrix", "Linear Algebra", "Matrix Multiplication", "Mathematics", "Vectors"]
---

When students first encounter matrix multiplication, their natural instinct is often to multiply matching entries side by side, exactly like adding matrices. But matrix multiplication works in a completely different way: it computes a sequence of **row-by-column dot products**.

This design isn't arbitrary. In linear algebra, a matrix represents a linear geometric transformation—such as rotating, shearing, or scaling coordinate space. Multiplying two matrices corresponds to applying one transformation right after another. Understanding this row-by-column mechanism unlocks 3D computer graphics, physics simulations, neural networks, and systems of linear equations.

---

## 1. The Dimension Compatibility Rule

Before performing any arithmetic, you must inspect the **dimensions** (orders) of the two matrices. Matrices are written as **Rows × Columns** ($m \times n$).

> **The Golden Rule of Matrix Multiplication:**  
> Two matrices $A$ and $B$ can be multiplied to form the product $AB$ **if and only if** the number of columns in the first matrix ($A$) equals the number of rows in the second matrix ($B$).

If matrix $A$ has dimensions $m \times k$ and matrix $B$ has dimensions $k \times n$:

$$\underset{(m \times \mathbf{k})}{A} \times \underset{(\mathbf{k} \times n)}{B} = \underset{(m \times n)}{C}$$

* The **inner dimensions** must match ($k = k$).
* The **outer dimensions** determine the dimensions of the resulting product matrix ($m \times n$).

### Compatibility Examples

| Matrix $A$ Dimensions | Matrix $B$ Dimensions | Inner Match? | Product $AB$ Possible? | Resulting Dimensions |
| :---: | :---: | :---: | :---: | :---: |
| $2 \times 3$ | $3 \times 2$ | Yes ($3 = 3$) | **Yes** | $2 \times 2$ |
| $3 \times 2$ | $2 \times 4$ | Yes ($2 = 2$) | **Yes** | $3 \times 4$ |
| $2 \times 2$ | $3 \times 2$ | No ($2 \neq 3$) | **No (Undefined)** | Undefined |
| $1 \times 4$ | $4 \times 1$ | Yes ($4 = 4$) | **Yes** | $1 \times 1$ (Scalar) |

---

## 2. The General Mathematical Formula

For two compatible matrices $A_{m \times k}$ and $B_{k \times n}$, each entry $C_{ij}$ in the resulting matrix $C_{m \times n}$ is computed as the dot product between **Row $i$ of $A$** and **Column $j$ of $B$**:

$$C_{ij} = \sum_{p=1}^{k} A_{ip} B_{pj} = A_{i1}B_{1j} + A_{i2}B_{2j} + \dots + A_{ik}B_{kj}$$

Where:
* $C_{ij}$ = entry in row $i$ and column $j$ of the resulting matrix $C$
* $A_{ip}$ = entry in row $i$ and column $p$ of the left matrix $A$
* $B_{pj}$ = entry in row $p$ and column $j$ of the right matrix $B$
* $k$ = shared inner dimension (columns of $A$ / rows of $B$)
* $i$ = row index in product matrix ($1 \le i \le m$)
* $j$ = column index in product matrix ($1 \le j \le n$)
* $\sum_{p=1}^k$ = summation of products across all $k$ corresponding entries

---

## 3. Worked Example: 2×2 Matrix Multiplication

Let us multiply two $2 \times 2$ matrices, $A$ and $B$:

$$A = \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$$

Because both matrices are $2 \times 2$, their inner dimensions match ($2 = 2$) and the resulting matrix $C = AB$ will be $2 \times 2$:

$$C = \begin{pmatrix} C_{11} & C_{12} \\ C_{21} & C_{22} \end{pmatrix}$$

### Step 1: Calculate Entry $C_{11}$ (Row 1 of $A$ $\cdot$ Column 1 of $B$)

Multiply Row 1 of $A$ $[2, 3]$ by Column 1 of $B$ $\begin{pmatrix} 5 \\ 7 \end{pmatrix}$:

$$C_{11} = (2 \times 5) + (3 \times 7) = 10 + 21 = 31$$

### Step 2: Calculate Entry $C_{12}$ (Row 1 of $A$ $\cdot$ Column 2 of $B$)

Multiply Row 1 of $A$ $[2, 3]$ by Column 2 of $B$ $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$:

$$C_{12} = (2 \times 6) + (3 \times 8) = 12 + 24 = 36$$

### Step 3: Calculate Entry $C_{21}$ (Row 2 of $A$ $\cdot$ Column 1 of $B$)

Multiply Row 2 of $A$ $[1, 4]$ by Column 1 of $B$ $\begin{pmatrix} 5 \\ 7 \end{pmatrix}$:

$$C_{21} = (1 \times 5) + (4 \times 7) = 5 + 28 = 33$$

### Step 4: Calculate Entry $C_{22}$ (Row 2 of $A$ $\cdot$ Column 2 of $B$)

Multiply Row 2 of $A$ $[1, 4]$ by Column 2 of $B$ $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$:

$$C_{22} = (1 \times 6) + (4 \times 8) = 6 + 32 = 38$$

### Final 2×2 Result

$$C = AB = \begin{pmatrix} 31 & 36 \\ 33 & 38 \end{pmatrix}$$

---

## 4. Worked Example: 3×3 Matrix by a 3×1 Column Vector

In physics and engineering, multiplying a $3 \times 3$ transformation matrix by a $3 \times 1$ position vector calculates coordinates after translation, rotation, or shearing:

$$M = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}, \quad v = \begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix}$$

Here, $M$ is $3 \times 3$ and $v$ is $3 \times 1$. The inner dimensions match ($3 = 3$), resulting in a $3 \times 1$ vector:

$$\text{Row 1:} \quad (1 \times 3) + (0 \times 1) + (2 \times 2) = 3 + 0 + 4 = 7$$

$$\text{Row 2:} \quad (-1 \times 3) + (3 \times 1) + (1 \times 2) = -3 + 3 + 2 = 2$$

$$\text{Row 3:} \quad (0 \times 3) + (2 \times 1) + (4 \times 2) = 0 + 2 + 8 = 10$$

$$Mv = \begin{pmatrix} 7 \\ 2 \\ 10 \end{pmatrix}$$

---

## 5. Critical Mathematical Properties of Matrix Multiplication

Matrix multiplication obeys different algebraic rules than scalar arithmetic:

### 1. Non-Commutative: $AB \neq BA$ (In General)
In ordinary algebra, $2 \times 3 = 3 \times 2$. In matrix algebra, **order matters**. Even when both $AB$ and $BA$ are defined and possess identical square dimensions, their products are almost never equal.

Using our previous matrices $A$ and $B$:

$$BA = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix} = \begin{pmatrix} 16 & 39 \\ 22 & 53 \end{pmatrix} \neq \begin{pmatrix} 31 & 36 \\ 33 & 38 \end{pmatrix} = AB$$

### 2. Associative Property: $A(BC) = (AB)C$
You can group multiplications in any sequence, provided the left-to-right order of the matrices is maintained.

### 3. Distributive Property: $A(B + C) = AB + AC$
Matrix multiplication distributes over matrix addition.

### 4. Identity Matrix Property: $AI = IA = A$
For any square matrix $A_{n \times n}$, multiplying by the identity matrix $I_n$ (ones on the main diagonal, zeroes elsewhere) leaves the matrix unchanged:

$$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

---

## 6. Common Mistakes to Avoid

1. **Multiplying Element-by-Element (Hadamard Product):**  
   Novices frequently compute $C_{ij} = A_{ij} \times B_{ij}$. While element-wise multiplication exists in programming libraries (such as NumPy's `a * b`), it is the Hadamard product, not standard algebraic matrix multiplication.
2. **Reversing Rows and Columns:**  
   Always take **horizontal rows from the left matrix** and **vertical columns from the right matrix**. Multiplying columns by rows yields an entirely incorrect result.
3. **Sign and Arithmetic Slips:**  
   Because each entry requires multiple multiplications and additions, a single negative sign mistake corrupts the entire resulting matrix. Use structured parentheses during intermediate steps.
4. **Ignoring Dimension Checks:**  
   Attempting to multiply matrices whose inner dimensions do not match is an undefined mathematical operation.

---

## 7. Frequently Asked Questions

### What happens if $AB = 0$? Does that mean $A = 0$ or $B = 0$?
No! In scalar arithmetic, $ab = 0$ implies $a = 0$ or $b = 0$ (the Zero-Product Property). In matrix algebra, two non-zero matrices can multiply to yield a zero matrix. For example:

$$\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

### Can you multiply a matrix by itself?
Only **square matrices** ($n \times n$) can be multiplied by themselves. If a matrix has dimensions $m \times n$ where $m \neq n$, the product $A \times A$ is undefined because the number of columns ($n$) does not equal the number of rows ($m$).

### How is matrix multiplication related to determinants?
For two square matrices $A$ and $B$ of identical size:

$$\det(AB) = \det(A) \times \det(B)$$

The determinant of the product matrix equals the product of their individual determinants.

---

## Solve Complex Matrices Instantly on SciCalcX

When working with large 3×3, 4×4, or rectangular matrices, computing manual dot products is time-consuming. Use the **[SciCalcX Scientific Matrix Engine](/matrix/)** to:
* Compute products ($A \times B$), sums ($A + B$), and scalar multiplications instantly.
* Evaluate determinants ($\det A$), matrix inverses ($A^{-1}$), and transposes ($A^T$).
* Solve linear equation systems with step-by-step mathematical precision.

---

## References & Further Reading

* **Gilbert Strang (MIT OpenCourseWare 18.06)** — [Multiplication and Inverse Matrices](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/): Classic lecture series on matrix algebra, column spaces, and geometric interpretations of matrix products.
* **Wolfram MathWorld** — [Matrix Multiplication](https://mathworld.wolfram.com/MatrixMultiplication.html): Formal matrix algebra definitions, dimension constraints, and tensor product connections.
* **OpenStax College Algebra 2e** — [Systems of Linear Equations: Matrices (Section 9.6)](https://openstax.org/books/college-algebra-2e/pages/9-6-solving-systems-with-gaussian-elimination): Worked examples of matrix row operations, Gaussian elimination, and practical modeling.
