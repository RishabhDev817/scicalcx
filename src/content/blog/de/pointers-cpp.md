---
title: "Zeiger in C++: Speicherverwaltung verständlich erklärt"
description: "Erfahren Sie, wie Zeiger in C++ funktionieren, verstehen Sie Speicheradressen, Dereferenzierung, dynamische Speicherverwaltung und Best Practices."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

Die manuelle Speicherverwaltung gehört zu den Kernstärken von C++. Im Gegensatz zu Sprachen mit automatischer Garbage Collection ermöglicht C++ über **Zeiger (Pointer)** den direkten Zugriff auf Arbeitsspeicheradressen.

---

## 1. Was ist ein Zeiger?

Jede Variable belegt einen bestimmten Speicherplatz mit einer eindeutigen Adresse (z. B. `0x7ffee3bbf7ac`). Ein **Zeiger** ist eine Variable, die als Wert genau diese Speicheradresse speichert.

```cpp
int* ptr; // Deklariert einen Zeiger auf einen Integer-Wert
```

---

## 2. Adressoperator (`&`) und Dereferenzierungsoperator (`*`)

```cpp
int alter = 21;
int* alterPtr = &alter; // '&' liefert die Adresse von 'alter'

std::cout << *alterPtr << std::endl; // '*' dereferenziert und liefert den Wert: 21

*alterPtr = 25; // Ändert den Wert von 'alter' direkt auf 25
std::cout << alter << std::endl; // 25
```

---

## 3. Dynamische Speicherallokation (`new` und `delete`)

```cpp
int* dynamisch = new int(100);
std::cout << *dynamisch << std::endl;

delete dynamisch;
dynamisch = nullptr; // Verhindert hängende Zeiger (Dangling Pointers)
```

---

## 4. Moderne Best Practices

Verwenden Sie im modernen C++ bevorzugt **Smart Pointer** (`std::unique_ptr`, `std::shared_ptr`) aus `<memory>`, um Speicherlecks durch RAII automatisch auszuschließen.
