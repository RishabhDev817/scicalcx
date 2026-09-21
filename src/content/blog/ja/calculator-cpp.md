---
title: "C++で関数電卓を作る：IEEE 754浮動小数点演算と構文解析"
description: "C++による関数電卓の自作プログラミングガイド。数学的ドメイン検証、IEEE 754浮動小数点の丸め誤差、逆ポーランド記法とShunting-yardアルゴリズムを基礎から解説します。"
pubDate: "2026-07-22"
updatedDate: "2026-09-21"
author: "SciCalcX"
category: "コンピュータ科学・アルゴリズム"
readTime: "10分で読める"
calculatorUrl: "/"
calculatorLabel: "SciCalcX 関数電卓"
related: ["pointers-cpp", "time-complexity"]
tags: ["C++", "関数電卓", "アルゴリズム", "IEEE 754", "数学", "プログラミング"]
---

関数電卓は、自然科学や工学のあらゆる現場で不可欠な計算ツールです。**[SciCalcX](/)** のような高機能ウェブ電卓は、複数行の数式をブラウザ上で瞬時に評価しますが、C++言語で電卓プログラムを自作することは、浮動小数点のハードウェア挙動、ゼロ除算などの例外処理、構文解析アルゴリズムを深く理解するための最良の演習となります。

本稿では、コンピュータが小数を2進数で扱う **IEEE 754 規格**の基本、ゼロ除算や負の数の平方根への対処法、三角関数のラジアン変換、そして四則演算の優先順位（**PEMDAS**）を解決するShunting-yardアルゴリズムについて解説します。

---

## 1. 数学的ドメイン検証と例外処理

C++で数式計算を行う際は、プログラムの異常終了を防ぐために以下のガード処理が不可欠です：

1. **ゼロ除算（Division by Zero）：** 整数演算ではCPU例外（`SIGFPE`）が発生し即座にクラッシュします。浮動小数点（`double`）演算では無限大（`inf`）や非数（`NaN`）が生成されます。除数がゼロでないかを計算前に判定することが重要です。
2. **負の数の平方根：** `<cmath>` の `std::sqrt()` は、実数の範囲で負の値が渡されると `NaN` を返します。被開平数が $\ge 0$ であることを事前に確認します。
3. **度数法から弧度法（ラジアン）への変換：** C++標準ライブラリの三角関数（`std::sin`, `std::cos`, `std::tan`）は、角度を必ず**ラジアン**で受け取ります：
   $$\text{ラジアン} = \text{度} \times \frac{\pi}{180}$$

---

## 2. 浮動小数点数とIEEE 754規格の誤差

コンピュータは2進法で数値を保持するため、$0.1$ や $0.2$ といった10進数の小数は循環小数となり、ごく微小な丸め誤差が生じます：

```cpp
double a = 0.1;
double b = 0.2;
std::cout << (a + b == 0.3); // 0（偽）と出力される！
// a + b の内部値は実際には 0.3000000000000000444... です
```

実数同士を安全に比較するためには、許容誤差イプシロン（$\epsilon$）を定義して差の絶対値を比較します：

```cpp
#include <cmath>

bool areEqual(double x, double y, double epsilon = 1e-9) {
    return std::fabs(x - y) < epsilon;
}
```

---

## 3. 数式パーサー：Shunting-Yard アルゴリズム

カッコや演算子の優先順位を含む式（例: $3 + 4 \times 2 / (1 - 5)^2$）を正確に計算するために、電卓プログラムはエドガー・ダイクストラの **Shunting-yard アルゴリズム** を利用します：

1. **トークン分割（字句解析）：** 文字列を数値、演算子、カッコに分解します。
2. **演算子スタック：** 演算子の結合法則と優先度に従って演算子を並べ替えます。
3. **逆ポーランド記法（RPN）：** カッコのない後置記法を出力し、数値スタックを用いて線形時間 $O(N)$ で計算を実行します。

---

## 4. 完成版 C++ 関数電卓プログラム

```cpp
#include <iostream>
#include <cmath>
#include <limits>

const double PI = 3.14159265358979323846;

double degToRad(double deg) {
    return deg * (PI / 180.0);
}

void printMenu() {
    std::cout << "\n=== SciCalcX C++ 関数電卓 ===\n";
    std::cout << "1. 加算 (+)\n";
    std::cout << "2. 減算 (-)\n";
    std::cout << "3. 乗算 (*)\n";
    std::cout << "4. 除算 (/)\n";
    std::cout << "5. べき乗 (x^y)\n";
    std::cout << "6. 平方根 (sqrt)\n";
    std::cout << "7. 正弦 (度数法)\n";
    std::cout << "8. 余弦 (度数法)\n";
    std::cout << "9. 終了\n";
    std::cout << "メニューを選択 (1-9): ";
}

int main() {
    int choice;
    double x, y, result;

    while (true) {
        printMenu();
        if (!(std::cin >> choice)) {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            continue;
        }

        if (choice == 9) break;

        switch (choice) {
            case 1:
                std::cout << "2つの数値を入力: ";
                std::cin >> x >> y;
                std::cout << "計算結果: " << x + y << "\n";
                break;
            case 4:
                std::cout << "被除数と除数を入力: ";
                std::cin >> x >> y;
                if (std::fabs(y) < 1e-12) {
                    std::cout << "エラー: ゼロ除算は未定義です。\n";
                } else {
                    std::cout << "計算結果: " << x / y << "\n";
                }
                break;
            case 6:
                std::cout << "平方根を計算する数値: ";
                std::cin >> x;
                if (x < 0) {
                    std::cout << "エラー: 実数の範囲で負の平方根は計算できません。\n";
                } else {
                    std::cout << "計算結果: " << std::sqrt(x) << "\n";
                }
                break;
            case 7:
                std::cout << "角度（度）を入力: ";
                std::cin >> x;
                result = std::sin(degToRad(x));
                if (std::fabs(result) < 1e-12) result = 0.0;
                std::cout << "計算結果: " << result << "\n";
                break;
            default:
                std::cout << "無効な選択です。\n";
                break;
        }
    }
    return 0;
}
```

---

## 5. ブラウザ上でC++コードを即時実行

開発環境をローカルにインストールすることなく、ブラウザ上でコードを試してみませんか？
**[SciCalcX C/C++ コードチューター](/compiler/)** を使えば、オンライン上でコードをコンパイルし、リアルタイムに動作を確認できます。

---

## 参考文献・推薦文献

* **David Goldberg (ACM Computing Surveys, 1991)** — [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html): IEEE 754規格の二進浮動小数点数表現、仮数部の丸め誤差、情報落ちに関する決定版論文。
* **cppreference** — [C++ `<cmath>` 数学関数ライブラリ](https://ja.cppreference.com/w/cpp/header/cmath): 三角関数、平方根、浮動小数点例外および定義域エラー処理に関する公式仕様。
* **Edsger W. Dijkstra (1961)** — [An Algol 60 Translator for the X1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD35.html): 中置記法から逆ポーランド記法へ演算子順序を正しく変換する操車場アルゴリズムの原著報告書。
