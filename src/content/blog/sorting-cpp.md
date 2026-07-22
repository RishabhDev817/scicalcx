---
title: "Introduction to Sorting: Bubble and Selection Sort in C++"
description: "Understand the fundamentals of sorting algorithms. Learn how Bubble Sort and Selection Sort compare, complete with C++ code implementations."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Introduction to Sorting: Bubble and Selection Sort in C++

Sorting algorithms are fundamental building blocks of computer science. They rearrange elements in an array or list in a specific order (ascending or descending). 

For beginners, studying simple comparison-based algorithms like **Bubble Sort** and **Selection Sort** is a great way to build algorithmic thinking.

---

## 1. Bubble Sort: Swapping Adjacent Elements

Bubble Sort is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This pass-through is repeated until no swaps are needed.

### How Bubble Sort Works
1. Compare `array[0]` and `array[1]`. If `array[0] > array[1]`, swap them.
2. Compare `array[1]` and `array[2]`. Swap if necessary.
3. Repeat this up to the last element. The largest element "bubbles up" to the end of the array.
4. Repeat the entire process for the remaining unsorted elements.

---

## 2. Selection Sort: Finding the Minimum

Selection Sort improves on Bubble Sort by minimizing the total number of swaps. It divides the array into a sorted part and an unsorted part, repeatedly finding the smallest (or largest) element from the unsorted part and moving it to the beginning.

### How Selection Sort Works
1. Search the unsorted array to locate the smallest element.
2. Swap this minimum element with the first element of the unsorted array.
3. Move the boundary of the sorted region one element to the right.
4. Repeat until the entire array is sorted.

---

## 3. Comparing Algorithm Efficiency

Both Bubble Sort and Selection Sort are slow on large datasets. Their performance is described using **Big O notation**:

* **Bubble Sort Time Complexity:** $O(N^2)$ in worst and average cases.
* **Selection Sort Time Complexity:** $O(N^2)$ in all cases.
* **Space Complexity:** Both use $O(1)$ auxiliary space because they sort the array in-place without needing extra storage.

---

## 4. Complete C++ Sorting Demonstration

Below is a complete C++ program implementing and benchmarking both Bubble Sort and Selection Sort:

```cpp
#include <iostream>

// Utility function to print an array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

// Bubble Sort Implementation
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;
    }
}

// Selection Sort Implementation
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int data1[] = {64, 34, 25, 12, 22, 11, 90};
    int n1 = sizeof(data1) / sizeof(data1[0]);

    std::cout << "--- Bubble Sort ---" << std::endl;
    std::cout << "Original Array: ";
    printArray(data1, n1);

    bubbleSort(data1, n1);
    std::cout << "Sorted Array:   ";
    printArray(data1, n1);

    int data2[] = {29, 10, 14, 37, 13, 2, 8};
    int n2 = sizeof(data2) / sizeof(data2[0]);

    std::cout << "\n--- Selection Sort ---" << std::endl;
    std::cout << "Original Array: ";
    printArray(data2, n2);

    selectionSort(data2, n2);
    std::cout << "Sorted Array:   ";
    printArray(data2, n2);

    return 0;
}
```

---

## Test This Code Live!

Reading about this concept is one thing, but running the code yourself is how you truly learn. **[Click here to open the SciCalcX AI Code Tutor](/compiler/)** and paste the code blocks above directly into the terminal to see how the output changes in real-time!
