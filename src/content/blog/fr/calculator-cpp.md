---
title: "Créer une Calculatrice Scientifique de Base en C++"
description: "Apprenez à concevoir un programme de calculatrice scientifique en C++ pour effectuer des opérations arithmétiques, puissances et calculs trigonométriques."
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

Les calculatrices scientifiques sont des outils indispensables dans les disciplines scientifiques et techniques. En arrière-plan, elles interprètent des opérandes et des symboles algébriques selon les règles mathématiques formelles.

Dans ce tutoriel, nous allons concevoir une calculatrice interactive en console C++, gérant les quatre opérations élémentaires, les puissances, les racines carrées et la prévention des divisions par zéro.

---

## 1. Structuration de la Logique de Calcul

Pour construire un programme fiable, trois aspects doivent être pris en compte :
1. **Lecture et validation des entrées :** Gestion des nombres à virgule flottante (`double`) et sélection de menu.
2. **Contrôle de flux :** Traitement de l'opération choisie via une structure `switch`.
3. **Gestion des erreurs mathématiques :** Prévention de la division par zéro et de l'extraction de racines carrées négatives dans l'ensemble des réels.

---

## 2. Utilisation de la Bibliothèque Standard `<cmath>`

Pour accéder aux fonctions scientifiques, nous incluons la bibliothèque standard `<cmath>` :

* `pow(base, exposant)` : Calcule la puissance $x^y$.
* `sqrt(valeur)` : Calcule la racine carrée.
* `sin(angle)` / `cos(angle)` : Évalue les rapports trigonométriques (les angles doivent être en **radians**).

---

## 3. Code Source Complet en C++

Voici le programme complet prêt à être compilé :

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== Calculatrice SciCalcX C++ ===" << std::endl;
    std::cout << "1. Addition (+)" << std::endl;
    std::cout << "2. Soustraction (-)" << std::endl;
    std::cout << "3. Multiplication (*)" << std::endl;
    std::cout << "4. Division (/)" << std::endl;
    std::cout << "5. Puissance (x^y)" << std::endl;
    std::cout << "6. Racine Carrée (√)" << std::endl;
    std::cout << "7. Quitter" << std::endl;
    std::cout << "Sélectionnez une opération (1-7) : ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "Fermeture de la calculatrice. À bientôt !" << std::endl;
            break;
        }

        // Opération à un seul opérande
        if (choice == 6) {
            std::cout << "Entrez le nombre : ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "Erreur : La racine carrée d'un nombre négatif n'est pas définie dans les réels." << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "Résultat : " << result << std::endl << std::endl;
            }
            continue;
        }

        // Opérations à deux opérandes
        if (choice >= 1 && choice <= 5) {
            std::cout << "Entrez le premier nombre : ";
            std::cin >> num1;
            std::cout << "Entrez le deuxième nombre : ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "Résultat : " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "Résultat : " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "Résultat : " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "Erreur : Division par zéro impossible." << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "Résultat : " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "Résultat : " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "Opération non reconnue." << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "Choix de menu invalide. Réessayez." << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## Testez ce code en direct !

**[Ouvrez le Compilateur en Ligne SciCalcX](/fr/compiler/)** et copiez ce code dans la console interactive pour l'exécuter directement dans notre environnement sandbox.
