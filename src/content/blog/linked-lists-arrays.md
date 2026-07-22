---
title: "Data Structures: Linked Lists vs. Arrays in C++"
description: "Compare contiguous arrays and dynamic linked lists in C++. Learn memory layouts, Big O operations, and complete C++ implementations."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Data Structures: Linked Lists vs. Arrays in C++

When organizing data in memory, two of the most fundamental data structures are **Arrays** and **Linked Lists**. 

While they might seem to serve the same purpose (storing a list of elements), their memory layouts are completely different, resulting in vastly different performance characteristics for basic operations.

---

## 1. Array: Contiguous Memory Layout

An array stores its elements in contiguous (adjacent) blocks of memory. This allows elements to be accessed directly using an index.

```text
Memory Addresses: | 0x100 | 0x104 | 0x108 | 0x10c |
Array Elements:   |  10   |  20   |  30   |  40   |
Indices:          |  [0]  |  [1]  |  [2]  |  [3]  |
```

### Key Array Characteristics:
* **Random Access:** Extremely fast $O(1)$ access using indexes.
* **Fixed Size:** In standard C++ arrays, the size must be declared beforehand.
* **Insertion/Deletion:** Slow $O(N)$ operations since elements must be shifted in memory.

---

## 2. Linked List: Node-Based Chain

A linked list consists of separate objects called **Nodes**. Each node contains the data element and a **pointer** to the next node in the sequence. Nodes are scattered in memory, not placed adjacently.

```text
Node 1: [ 10 | NextPtr ] ---> Node 2: [ 20 | NextPtr ] ---> nullptr
```

### Key Linked List Characteristics:
* **Dynamic Size:** Can grow or shrink at runtime by allocating new nodes on the heap.
* **No Random Access:** Must traverse the list sequentially from the head node, taking $O(N)$ time.
* **Insertion/Deletion:** Fast $O(1)$ updates once the insertion position is found (simply by updating pointers).

---

## 3. Operations Complexity Comparison

| Operation | Array (Contiguous) | Linked List (Dynamic) |
|-----------|--------------------|-----------------------|
| Access (Lookup) | $O(1)$ | $O(N)$ |
| Insert at Beginning | $O(N)$ | $O(1)$ |
| Insert at End | $O(1)$ (if capacity exists) | $O(N)$ (requires traversal) |
| Space overhead | None | Extra pointer memory per node |

---

## 4. Complete C++ Array & Linked List Code

Below is a complete C++ program demonstrating array lookups and linked list node insertions:

```cpp
#include <iostream>

// Node structure for a Singly Linked List
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};

// Utility function to print a Linked List
void printList(Node* head) {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " -> ";
        temp = temp->next;
    }
    std::cout << "nullptr" << std::endl;
}

int main() {
    // 1. Array Demo
    std::cout << "--- Array Performance Demo ---" << std::endl;
    int arr[] = {10, 20, 30, 40, 50};
    int size = sizeof(arr) / sizeof(arr[0]);

    std::cout << "Random Access: arr[3] = " << arr[3] << " (Instant lookup)" << std::endl;
    std::cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl << std::endl;

    // 2. Linked List Demo
    std::cout << "--- Linked List Performance Demo ---" << std::endl;
    
    // Create nodes
    Node* head = new Node(100);
    head->next = new Node(200);
    head->next->next = new Node(300);

    std::cout << "Initial list structure: ";
    printList(head);

    // Insert at beginning: O(1)
    Node* newHead = new Node(50);
    newHead->next = head;
    head = newHead;

    std::cout << "After O(1) inserting 50 at beginning: ";
    printList(head);

    // Clean up memory
    Node* current = head;
    while (current != nullptr) {
        Node* nextNode = current->next;
        delete current;
        current = nextNode;
    }
    std::cout << "Dynamic nodes safely cleared from memory." << std::endl;

    return 0;
}
```

---

## Test This Code Live!

Reading about this concept is one thing, but running the code yourself is how you truly learn. **[Click here to open the SciCalcX AI Code Tutor](/compiler/)** and paste the code blocks above directly into the terminal to see how the output changes in real-time!
