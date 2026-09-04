---
title: "Puntatori in C++: Guida alla Gestione della Memoria"
description: "Impara il funzionamento dei puntatori in C++, gli indirizzi di memoria, la dereferenziazione, l'allocazione dinamica e le best practice."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Puntatori in C++: Guida alla Gestione della Memoria

La gestione diretta della memoria è uno dei pilastri fondamentali del C++. A differenza dei linguaggi con garbage collector, il C++ offre controllo totale sulla memoria RAM mediante i **puntatori**.

---

## 1. Cos'è un Puntatore?

Ogni variabile in C++ occupa una locazione di memoria caratterizzata da un indirizzo esadecimale (es. `0x7ffee3bbf7ac`). Un **puntatore** è una variabile che memorizza l'indirizzo di un'altra variabile.

```cpp
int* ptr; // Dichiara un puntatore a un intero
```

---

## 2. Operatori di Indirizzo (`&`) e Dereferenziazione (`*`)

```cpp
int eta = 21;
int* etaPtr = &eta; // '&' ottiene l'indirizzo di memoria di 'eta'

std::cout << *etaPtr << std::endl; // '*' accede al valore: 21

*etaPtr = 25; // Modifica direttamente il valore di 'eta'
std::cout << eta << std::endl; // 25
```

---

## 3. Allocazione Dinamica (`new` e `delete`)

```cpp
int* dinamico = new int(100);
std::cout << *dinamico << std::endl;

delete dinamico;
dinamico = nullptr; // Previene puntatori pendenti
```

---

## 4. Puntatori Intelligenti (Smart Pointers)

Nel C++ moderno si raccomanda l'uso di `std::unique_ptr` e `std::shared_ptr` per la gestione automatica e sicura della memoria (RAII).
