---
title: "C++で基本的な関数電卓プログラムを作成する"
description: "C++を用いて数学演算や三角関数、べき乗計算を実行するコンソール関数電卓の作成手順を解説します。"
pubDate: "2026-07-22"
author: "Rishabh Raj Mahato"
---

# C++で基本的な関数電卓プログラムを作成する

関数電卓は科学技術計算や工学分野に欠かせないツールです。内部では入力された数値と演算子を代数規則に基づいて評価・処理しています。

このチュートリアルでは、基本四則演算に加え、べき乗計算や平方根計算、ゼロ除算保護を備えたインタラクティブなC++関数電卓を作成します。

---

## 1. 電卓ロジックの設計

堅牢な電卓プログラムを作成するには以下の要素が重要です：
1. **入力処理とパース:** 浮動小数点数（`double`）とメニュー選択肢の取得。
2. **制御フロー:** `switch` 文または条件分岐による選択された演算の振り分け。
3. **境界値とエラーハンドリング:** ゼロ除算や実数範囲外の負の平方根に対する例外対策。

複雑な数式計算ではダイクストラの「操車場アルゴリズム（Shunting-yard）」が使われますが、対話型メニュー形式であれば反復ループで直感的に実装可能です。

---

## 2. C++ `<cmath>` 標準ライブラリの活用

科学計算機能を活用するため、C++標準ライブラリの `<cmath>` をインクルードします：

* `pow(底, 指数)`: べき乗の計算。
* `sqrt(値)`: 平方根の計算。
* `sin(角度)` / `cos(角度)`: 三角関数（角度は**ラジアン**で指定）。

---

## 3. C++電卓の完全なソースコード

以下はすぐにコンパイルして実行できる完全なC++プログラムです：

```cpp
#include <iostream>
#include <cmath>

void showMenu() {
    std::cout << "=== SciCalcX C++ 関数電卓 ===" << std::endl;
    std::cout << "1. 足し算 (+)" << std::endl;
    std::cout << "2. 引き算 (-)" << std::endl;
    std::cout << "3. 掛け算 (*)" << std::endl;
    std::cout << "4. 割り算 (/)" << std::endl;
    std::cout << "5. べき乗 (x^y)" << std::endl;
    std::cout << "6. 平方根 (√)" << std::endl;
    std::cout << "7. 終了" << std::endl;
    std::cout << "操作を選択してください (1-7): ";
}

int main() {
    int choice;
    double num1, num2, result;

    while (true) {
        showMenu();
        std::cin >> choice;

        if (choice == 7) {
            std::cout << "電卓を終了します。ご利用ありがとうございました！" << std::endl;
            break;
        }

        // 単一オペランドの処理
        if (choice == 6) {
            std::cout << "数値を入力してください: ";
            std::cin >> num1;
            if (num1 < 0) {
                std::cout << "エラー: 実数範囲では負の数の平方根は定義されていません。" << std::endl << std::endl;
            } else {
                result = std::sqrt(num1);
                std::cout << "計算結果: " << result << std::endl << std::endl;
            }
            continue;
        }

        // 2つのオペランドの処理
        if (choice >= 1 && choice <= 5) {
            std::cout << "1つ目の数値を入力: ";
            std::cin >> num1;
            std::cout << "2つ目の数値を入力: ";
            std::cin >> num2;

            switch (choice) {
                case 1:
                    result = num1 + num2;
                    std::cout << "計算結果: " << num1 << " + " << num2 << " = " << result << std::endl;
                    break;
                case 2:
                    result = num1 - num2;
                    std::cout << "計算結果: " << num1 << " - " << num2 << " = " << result << std::endl;
                    break;
                case 3:
                    result = num1 * num2;
                    std::cout << "計算結果: " << num1 << " * " << num2 << " = " << result << std::endl;
                    break;
                case 4:
                    if (num2 == 0) {
                        std::cout << "エラー: ゼロ除算は未定義です。" << std::endl;
                    } else {
                        result = num1 / num2;
                        std::cout << "計算結果: " << num1 << " / " << num2 << " = " << result << std::endl;
                    }
                    break;
                case 5:
                    result = std::pow(num1, num2);
                    std::cout << "計算結果: " << num1 << "^" << num2 << " = " << result << std::endl;
                    break;
                default:
                    std::cout << "無効な操作です。" << std::endl;
            }
            std::cout << std::endl;
        } else {
            std::cout << "選択肢が無効です。もう一度お試しください。" << std::endl << std::endl;
        }
    }

    return 0;
}
```

---

## ブラウザ上で実際にコードを実行してみましょう！

コードを読むだけでなく、実際に動かしてみることがプログラミング習得の近道です。**[SciCalcX オンラインコンパイラ](/ja/compiler/)**を開き、上記のコードを貼り付けてリアルタイム実行を体験してください！
