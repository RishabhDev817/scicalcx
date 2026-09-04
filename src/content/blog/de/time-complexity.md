---
title: "Zeitkomplexität verständlich erklärt: Die O-Notation für Einsteiger"
description: "Verstehen Sie algorithmische Effizienz. Berechnen Sie die Big-O-Laufzeitkomplexität mit praxisnahen C++-Codebeispielen."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# Zeitkomplexität verständlich erklärt: Die O-Notation für Einsteiger

Wie beurteilen Informatiker, welche Lösung für ein Rechenproblem am effizientesten ist? Wir nutzen die **O-Notation (Big-O)**, um das Skalierungsverhalten der Laufzeit bei wachsender Eingabegröße ($N$) unabhängig von der Prozessorleistung zu beschreiben.

---

## 1. Wichtige Komplexitätsklassen

- **$O(1)$ (Konstant):** Unabhängig von $N$, z. B. Array-Indexzugriff.
- **$O(N)$ (Linear):** Eine einfache Schleife über alle $N$ Elemente.
- **$O(\log N)$ (Logarithmisch):** Halbierung des Suchraums bei jedem Schritt (z. B. Binäre Suche).
- **$O(N^2)$ (Quadratisch):** Verschachtelte Schleifen wie beim Bubble Sort.

---

## 2. Praktische Faustregeln

Konstanten Faktoren werden gestrichen ($O(2N) = O(N)$) und nur der am schnellsten wachsende Summand bestimmt die Gesamtlaufzeit ($O(N^2 + N) = O(N^2)$).
