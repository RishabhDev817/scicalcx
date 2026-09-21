---
title: "Sorting Algorithms in C++: Bubble Sort, Selection Sort, and Stability Analysis"
description: "Master foundational sorting algorithms in C++. Compare Bubble Sort and Selection Sort with step-by-step trace tables, inversion count analysis, stability proofs, and Big-O efficiency."
pubDate: 2026-07-22
updatedDate: 2026-09-21
author: "SciCalcX"
category: "Computer Science & Systems"
readTime: "11 min read"
calculatorUrl: "/compiler"
calculatorLabel: "SciCalcX Interactive Code Tutor & Compiler"
related: ["time-complexity", "linked-lists-arrays", "cpp-basics"]
tags: ["C++", "Sorting Algorithms", "Bubble Sort", "Selection Sort", "Algorithm Analysis", "Computer Science"]
---

When you organize a hand of playing cards, you instinctively compare values and shift cards until they line up in order. In computer science, that intuitive process expands into the study of **sorting algorithms**. 

While modern production software relies on sophisticated hybrid routines like `std::sort` (Introsort), studying foundational comparison sorts like **Bubble Sort** and **Selection Sort** teaches you how algorithm analysis actually works. By comparing how each algorithm eliminates inversions, maintains loop invariants, and balances comparison steps against swap costs, you build the analytical foundation needed to understand all higher-level algorithms.

---

## 1. The Mathematics of Inversions

Every unsorted array can be characterized mathematically by its **inversion count**. An inversion is a pair of indices $(i, j)$ such that:

$$i < j \quad \text{and} \quad A[i] > A[j]$$

Where:
* $i$ and $j$ = positional indices in the array
* $A[i]$ and $A[j]$ = values stored at those indices
* An already sorted array has **$0$ inversions**
* A reverse-sorted array of size $N$ contains the maximum possible number of inversions:
  $$\text{Max Inversions} = \frac{N(N - 1)}{2} = \Theta(N^2)$$
  Where $N$ is the total number of elements.
* Any adjacent-swap sorting algorithm (like unoptimized Bubble Sort) resolves at most **one inversion per swap**. Consequently, sorting an array using only adjacent swaps requires an average runtime of $\Omega(N^2)$.

---

## 2. Bubble Sort: Sinking the Heaviest Elements

Bubble Sort iterates through the array repeatedly, comparing adjacent elements and swapping them if they are in the wrong order ($A[i] > A[i+1]$). With each complete pass, the largest remaining unsorted element "bubbles up" to its correct position at the end of the array.

### Step-by-Step Bubble Sort Trace Table
Let us trace the sorting of array: `[5, 1, 4, 2, 8]` ($N = 5$):

| Pass | Step Comparisons & Swaps | Array State at End of Pass | Inversions Remaining |
| :---: | :--- | :---: | :---: |
| **Initial** | — | `[5, 1, 4, 2, 8]` | $4$ |
| **Pass 1** | $(5>1 \to \text{swap}), (5>4 \to \text{swap}), (5>2 \to \text{swap}), (5<8)$ | `[1, 4, 2, 5, 8]` | $1$ (8 is in final place) |
| **Pass 2** | $(1<4), (4>2 \to \text{swap}), (4<5)$ | `[1, 2, 4, 5, 8]` | $0$ (5 is in final place) |
| **Pass 3** | $(1<2), (2<4)$ (No swaps detected!) | `[1, 2, 4, 5, 8]` | $0$ (Early exit triggered) |

### The Early-Exit Optimization
By introducing a boolean flag `swapped`, Bubble Sort can detect if an entire pass completed without a single swap. If no elements moved, the array is already sorted, and the algorithm terminates immediately in **$O(N)$ best-case linear time**.

---

## 3. Selection Sort: Finding the Global Minimum

Selection Sort divides the array into two logical sections: a **sorted prefix** on the left and an **unsorted suffix** on the right. In each iteration, it scans the unsorted suffix to locate the index of the absolute minimum element, and then performs a **single swap** to place it at the end of the sorted prefix.

### Step-by-Step Selection Sort Trace Table
Sorting `[64, 25, 12, 22, 11]` ($N = 5$):

| Pass | Scanned Unsorted Suffix | Minimum Found | Swap Performed | Array State After Pass |
| :---: | :---: | :---: | :---: | :---: |
| **Pass 1** | `[64, 25, 12, 22, 11]` | $11$ (at index 4) | Swap $64 \leftrightarrow 11$ | `[11, 25, 12, 22, 64]` |
| **Pass 2** | `[25, 12, 22, 64]` | $12$ (at index 2) | Swap $25 \leftrightarrow 12$ | `[11, 12, 25, 22, 64]` |
| **Pass 3** | `[25, 22, 64]` | $22$ (at index 3) | Swap $25 \leftrightarrow 22$ | `[11, 12, 22, 25, 64]` |
| **Pass 4** | `[25, 64]` | $25$ (at index 3) | Swap $25 \leftrightarrow 25$ | `[11, 12, 22, 25, 64]` |

### The Key Advantage of Selection Sort: $O(N)$ Swaps
While Bubble Sort can execute up to $O(N^2)$ swaps, Selection Sort makes **at most $N - 1$ swaps**. In embedded systems where writing to Flash memory or EEPROM is orders of magnitude slower than reading, Selection Sort can outperform algorithms with higher write frequencies.

---

## 4. Understanding Algorithm Stability

A sorting algorithm is classified as **stable** if elements with identical keys retain their relative order after sorting.

```
Initial:  [ 4_A,  2,  4_B,  1 ]
Stable:   [ 1,  2,  4_A,  4_B ]   (4_A remains before 4_B)
Unstable: [ 1,  2,  4_B,  4_A ]   (Relative order of identical keys inverted)
```

* **Bubble Sort is Stable:** Because elements are only swapped when $A[i] > A[i+1]$ (strict inequality), equal elements never leapfrog one another.
* **Selection Sort is Inherently Unstable:** Long-range swaps can jump an element across identical values. For example, sorting `[2_A, 2_B, 1]` swaps `2_A` with `1`, producing `[1, 2_B, 2_A]` and disrupting the original relative order.

---

## 5. Asymptotic Complexity Comparison

| Algorithm | Best-Case Time | Average-Case Time | Worst-Case Time | Worst-Case Space | Stability | Total Swaps |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Optimized Bubble Sort** | **$O(N)$** | $O(N^2)$ | $O(N^2)$ | $O(1)$ auxiliary | **Stable** | $O(N^2)$ |
| **Selection Sort** | $O(N^2)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ auxiliary | **Unstable** | **$O(N)$** |
| **Insertion Sort** | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ auxiliary | **Stable** | $O(N^2)$ |
| **Merge Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ auxiliary | **Stable** | $O(N \log N)$ |
| **Quick Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ stack | Unstable | $O(N \log N)$ |

---

## 6. Complete C++ Sorting Demonstration

Below is a complete, well-commented C++ program implementing both algorithms and printing pass diagnostics:

```cpp
#include <iostream>
#include <vector>
#include <utility>

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        // Early termination if array is already sorted
        if (!swapped) break;
    }
}

void selectionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; ++i) {
        int minIdx = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx != i) {
            std::swap(arr[i], arr[minIdx]);
        }
    }
}

void printArray(const std::vector<int>& arr) {
    for (int val : arr) std::cout << val << " ";
    std::cout << "\n";
}

int main() {
    std::vector<int> data1 = {64, 34, 25, 12, 22, 11, 90};
    std::cout << "Original Array: ";
    printArray(data1);

    bubbleSort(data1);
    std::cout << "After Bubble Sort:    ";
    printArray(data1);

    std::vector<int> data2 = {29, 10, 14, 37, 13};
    selectionSort(data2);
    std::cout << "After Selection Sort: ";
    printArray(data2);

    return 0;
}
```

---

## 7. Frequently Asked Questions

### Why does Selection Sort always take $O(N^2)$ time even if the array is already sorted?
Selection Sort does not check whether elements are already in order. In each pass $i$, the inner loop scans all remaining $N - 1 - i$ elements to guarantee that no smaller value exists. The total number of comparisons is always fixed:

$$\sum_{i=0}^{N-2} (N - 1 - i) = \frac{N(N - 1)}{2} = \Theta(N^2)$$

### Why is `std::sort` faster than both Bubble and Selection Sort?
The C++ standard library `std::sort` uses **Introsort**, a hybrid algorithm that begins with QuickSort ($O(N \log N)$), switches to HeapSort if recursion depth exceeds $2 \log N$ (preventing $O(N^2)$ worst cases), and finishes small partitions with Insertion Sort. For $100,000$ elements, an $O(N \log N)$ sort completes in milliseconds, while an $O(N^2)$ sort takes dozens of seconds.

---

## Test Sorting Algorithms in the SciCalcX Sandbox

Experiment with sorting routines, inspect swap frequencies, and trace execution step-by-step using the **[SciCalcX C/C++ Code Tutor](/compiler/)**. To learn more about algorithmic scaling, explore our companion guide on **[Understanding Time Complexity & Big-O Notation](/blog/time-complexity/)**.

---

## References & Further Reading

* **Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein (CLRS)** — *Introduction to Algorithms* (3rd/4th Ed., MIT Press): Foundational analysis of sorting invariants, lower bounds for comparison sorts, and divide-and-conquer recurrences.
* **Donald E. Knuth** — *The Art of Computer Programming, Volume 3: Sorting and Searching* (Addison-Wesley): Definitive mathematical analysis of inversions, permutation networks, and sorting efficiency.
* **cppreference** — [std::sort Algorithm Reference](https://en.cppreference.com/w/cpp/algorithm/sort): ISO C++ specifications for sorting requirements, computational complexity constraints, and Introsort implementation notes.
