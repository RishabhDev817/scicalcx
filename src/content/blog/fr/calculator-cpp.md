---
title: "Programmer une Calculatrice Scientifique en C++ : Précision IEEE 754 et Algorithmes d'Analyse"
description: "Découvrez comment concevoir une calculatrice scientifique en C++. Maîtrisez la validation mathématique, la précision flottante IEEE 754 et l'algorithme Shunting-yard."
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "Informatique & Algorithmes"
readTime: "10 min de lecture"
calculatorUrl: "/"
calculatorLabel: "Calculatrice Scientifique Multi-lignes SciCalcX"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "Calculatrice Scientifique", "Algorithmes", "Mathématiques", "IEEE 754", "Programmation"]
---

Les calculatrices scientifiques sont des outils indispensables dans les disciplines d'ingénierie et de recherche scientifique. Alors que les moteurs modernes tels que **[SciCalcX](/)** évaluent instantanément des expressions algébriques parenthésées directement dans le navigateur, développer soi-même une calculatrice en C++ permet d'appréhender le fonctionnement matériel des nombres à virgule flottante, la gestion rigoureuse des erreurs de domaine et les algorithmes d'analyse syntaxique (parsing).

Dans ce guide complet, vous découvrirez comment le standard **IEEE 754** représente les nombres décimaux en binaire, comment intercepter les indéterminations mathématiques (division par zéro, racines négatives), comment convertir les degrés en radians et comment l'algorithme Shunting-yard d'Edsger Dijkstra évalue les priorités opératoires (**PEMDAS**).

---

## 1. Gestion des Erreurs et Domaines Mathématiques

Lors de calculs numériques en C++, des protections explicites doivent être mises en place pour éviter des interruptions de processus :

1. **Division par Zéro :** Avec les entiers, la division par zéro entraîne l'arrêt brutal du programme via un signal processeur (`SIGFPE`). Avec les flottants (`double`), elle produit l'infini (`inf`) ou `NaN` ("Not a Number"). Un programme robuste doit vérifier que le dénominateur n'est pas nul avant l'opération.
2. **Racines Carrées de Nombres Négatifs :** `std::sqrt()` de la bibliothèque `<cmath>` génère `NaN` si son paramètre est négatif dans les réels. Le code doit vérifier que le radicande est $\ge 0$.
3. **Degrés et Radians :** Les fonctions trigonométriques du C++ (`std::sin`, `std::cos`, `std::tan`) prennent exclusivement des angles exprimés en **radians** :
   $$\text{Radians} = \text{Degrés} \times \frac{\pi}{180}$$

---

## 2. Précision Flottante et Standard IEEE 754

En arithmétique binaire, les ordinateurs ne peuvent pas représenter exactement certaines fractions décimales courantes comme $0.1$ ou $0.2$, car elles forment des répétitions binaires infinies :

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // Affiche 0 (Faux) !
// a + b équivaut en réalité à 0.3000000000000000444...
```

Pour comparer deux flottants de façon fiable, utilisez toujours un seuil d'écart toléré (epsilon $\epsilon$) :

```cpp
#include <cmath>

bool sontEgaux(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. Analyse Syntaxique : L'Algorithme Shunting-Yard

Pour évaluer des formules comportant des parenthèses et des priorités comme $3 + 4 \times 2 / (1 - 5)^2$, les calculateurs recourent à **l'algorithme Shunting-yard** :

1. **Tokenisation :** Scinde la chaîne de caractères en nombres, opérateurs et parenthèses.
2. **Pile d'Opérateurs :** Ordonne les opérateurs selon leur précédence et associativité.
3. **Notation Polonaise Inverse (NPI / RPN) :** Produit une formule postfixée sans ambiguïté de parenthèses, évaluable en temps linéaire $O(N)$ à l'aide d'une simple pile numérique.

---

## 4. Code Source Complet en C++

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double degVersRad(double deg) {
    return deg * (PI / 180.0);
}

void afficherMenu() {
    std::cout << "\n=== Calculatrice Scientifique SciCalcX ===\n";
    std::cout << "1. Addition (+)\n";
    std::cout << "2. Soustraction (-)\n";
    std::cout << "3. Multiplication (*)\n";
    std::cout << "4. Division (/)\n";
    std::cout << "5. Puissance (x^y)\n";
    std::cout << "6. Racine Carrée (sqrt)\n";
    std::cout << "7. Sinus (degrés)\n";
    std::cout << "8. Cosinus (degrés)\n";
    std::cout << "9. Quitter\n";
    std::cout << "Votre choix (1-9) : ";
}

int main() {
    int choix;
    double x, y, res;

    while (true) {
        afficherMenu();
        if (!(std::cin >> choix)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (choix == 9) break;

        switch (choix) {
            case 1:
                std::cout << "Entrez deux nombres : ";
                std::cin >> x >> y;
                std::cout << "Résultat : " << x + y << "\n";
                break;
            case 4:
                std::cout << "Dividende et diviseur : ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "Erreur : Division par zéro indéfinie.\n";
                } else {
                    std::cout << "Résultat : " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "Nombre pour la racine : ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "Erreur : Racine réelle d'un nombre négatif impossible.\n";
                } else {
                    std::cout << "Résultat : " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "Angle en degrés : ";
                std::cin >> x;
                res = std::sin(degVersRad(x));
                if (std::fabs(res) < 1e-12) res = 0.0;
                std::cout << "Résultat : " << res << "\n";
                break;
            default:
                std::cout << "Choix non reconnu.\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. Exécutez Votre Code en Ligne

Vous souhaitez exécuter ce programme immédiatement sans installation locale ? Ouvrez le **[Tuteur et Bac à Sable C/C++ de SciCalcX](/compiler/)** pour compiler et tester vos algorithmes directement dans votre navigateur.

---

## Références et Lectures Complémentaires

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html) : Traité fondamental sur la norme IEEE 754, l'arrondi et la précision binaire.
* **cppreference** — [Fonctions mathématiques C++ (`<cmath>`)](https://fr.cppreference.com/w/cpp/header/cmath) : Documentation technique officielle des fonctions trigonométriques et de la gestion des erreurs de domaine.
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html) : Publication originale introduisant l'algorithme Shunting-yard pour l'évaluation d'expressions algébriques.
