---
title: "How to Calculate Standard Deviation: Formulas, Variance, and Step-by-Step Examples"
description: "Master standard deviation and variance. Learn the difference between population and sample formulas, calculate step-by-step with worked examples, and interpret statistical dispersion."
pubDate: 2026-07-25
updatedDate: 2026-09-21
author: "SciCalcX"
category: "Statistics & Probability"
readTime: "9 min read"
calculatorUrl: "/statistics"
calculatorLabel: "SciCalcX Descriptive Statistics Engine"
related: ["time-complexity", "calculator-cpp", "python-biomechanics"]
tags: ["Statistics", "Standard Deviation", "Variance", "Data Analysis", "Mathematics"]
---

Suppose two groups of students take a physics exam. Both classes finish with an identical average score of 70 out of 100. Looking only at the mean, their performance seems identical. But look at individual scores: in Class A, every student scored between 68 and 72. In Class B, scores ranged from 40 to 98. 

The arithmetic mean identifies where the center of the data sits, but it reveals nothing about how widely numbers scatter around that center. Standard deviation quantifies that spread. Because it is calculated in the **exact same units** as your original data (such as points, seconds, or meters), it gives an intuitive measure of how far a typical measurement wanders from the average.

---

## 1. What Does Standard Deviation Measure?

Standard deviation ($\sigma$ or $s$) expresses the average distance between individual observations in a dataset and their arithmetic mean. 

* **Low Standard Deviation:** Data points cluster tightly around the mean. Measurements exhibit high consistency or precision. In manufacturing, a low standard deviation indicates tight quality control.
* **High Standard Deviation:** Data points spread widely across a broad range. Measurements exhibit high variability or dispersion. In financial markets, a high standard deviation signals elevated volatility.
* **Zero Standard Deviation:** Every single number in the dataset is identical. There is no spread whatsoever.

### Standard Deviation vs. Variance

Variance is the average of the squared deviations from the mean:

$$\text{Variance} = \frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n}$$

Where:
* $x_i$ = individual observation value
* $\bar{x}$ = arithmetic mean of the dataset
* $n$ = total number of observations
* $\sum$ = sum of squared differences across all observations

Because variance squares each deviation, its resulting unit is the **square of the original units** (such as points squared, dollars squared, or seconds squared). This makes direct physical interpretation counterintuitive. 

**Standard deviation is simply the positive square root of variance:**

$$\text{Standard Deviation} = \sqrt{\text{Variance}}$$

Taking the square root restores the original units of measurement, allowing direct comparison with the mean.

---

## 2. Population vs. Sample: Choosing the Correct Formula

Before calculating standard deviation, you must determine whether your dataset represents an entire **population** or a subset drawn as a **sample**.

| Characteristic | Population Standard Deviation ($\sigma$) | Sample Standard Deviation ($s$) |
| :--- | :--- | :--- |
| **Scope** | Includes every single member of a defined group (e.g., all 500 students in a private academy). | Includes a subset selected to estimate the broader group (e.g., 40 random lab measurements). |
| **Mean Symbol** | $\mu$ (Greek letter mu) | $\bar{x}$ (x-bar) |
| **Denominator** | $N$ (Total population size) | $n - 1$ (Degrees of freedom) |
| **Bessel's Correction** | Not applied | Applied ($n - 1$) to eliminate systematic underestimation |

### Population Standard Deviation Formula

$$\sigma = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2}$$

Where:
* $\sigma$ = Population standard deviation
* $N$ = Total number of observations in the population
* $x_i$ = The $i$-th observation value
* $\mu$ = Population arithmetic mean ($\mu = \frac{1}{N} \sum x_i$)
* $\sum$ = Summation operator across all observations

### Sample Standard Deviation Formula

$$s = \sqrt{\frac{1}{n - 1} \sum_{i=1}^{n} (x_i - \bar{x})^2}$$

Where:
* $s$ = Sample standard deviation
* $n$ = Sample size
* $x_i$ = The $i$-th sample value
* $\bar{x}$ = Sample mean ($\bar{x} = \frac{1}{n} \sum x_i$)
* $n - 1$ = Degrees of freedom

> **Why Divide by $n - 1$ (Bessel's Correction)?**  
> When calculating from a sample, the sample observations cluster naturally closer to the sample mean $\bar{x}$ than they would to the true, unknown population mean $\mu$. Dividing by $n$ produces a biased estimator that systematically underestimates true population variance. Dividing by $n - 1$ mathematically corrects this bias, providing an accurate, unbiased estimate.

---

## 3. Step-by-Step Worked Calculation Example

Let us calculate the **sample standard deviation** ($s$) for a dataset of test scores obtained from a physics laboratory group:

$$\{12, 16, 18, 20, 24\}$$

Here, the sample size is $n = 5$.

### Step 1: Calculate the Sample Mean ($\bar{x}$)

Sum all values and divide by the count:

$$\bar{x} = \frac{12 + 16 + 18 + 20 + 24}{5} = \frac{90}{5} = 18$$

### Step 2: Compute Deviations from the Mean ($x_i - \bar{x}$)

Subtract the mean ($\bar{x} = 18$) from each observation:

* $12 - 18 = -6$
* $16 - 18 = -2$
* $18 - 18 = 0$
* $20 - 18 = +2$
* $24 - 18 = +6$

*(Notice: The sum of raw deviations always equals zero: $-6 - 2 + 0 + 2 + 6 = 0$. This is why deviations must be squared.)*

### Step 3: Square Each Deviation ($(x_i - \bar{x})^2$)

* $(-6)^2 = 36$
* $(-2)^2 = 4$
* $(0)^2 = 0$
* $(+2)^2 = 4$
* $(+6)^2 = 36$

### Step 4: Sum the Squared Deviations (Sum of Squares)

$$\sum_{i=1}^{5} (x_i - \bar{x})^2 = 36 + 4 + 0 + 4 + 36 = 80$$

### Step 5: Divide by Degrees of Freedom ($n - 1$) to Get Sample Variance ($s^2$)

Since $n = 5$, our degrees of freedom are $n - 1 = 4$:

$$s^2 = \frac{80}{5 - 1} = \frac{80}{4} = 20$$

The sample variance is $20$.

### Step 6: Take the Square Root to Obtain Standard Deviation ($s$)

$$s = \sqrt{20} \approx 4.4721$$

Rounding to two decimal places, the sample standard deviation is **$4.47$**.

---

## 4. Summary Calculation Table

Organizing your calculations into a structured table prevents sign errors and makes verification straightforward:

| Observation ($x_i$) | Mean ($\bar{x}$) | Deviation ($x_i - \bar{x}$) | Squared Deviation ($(x_i - \bar{x})^2$) |
| :---: | :---: | :---: | :---: |
| $12$ | $18$ | $-6$ | $36$ |
| $16$ | $18$ | $-2$ | $4$ |
| $18$ | $18$ | $0$ | $0$ |
| $20$ | $18$ | $+2$ | $4$ |
| $24$ | $18$ | $+6$ | $36$ |
| **Sum ($\sum$)** | — | **$0$** | **$80$** |

* Sample Variance: $s^2 = \frac{80}{4} = 20$
* Sample Standard Deviation: $s = \sqrt{20} \approx 4.47$
* Population Standard Deviation (if this were an entire population): $\sigma = \sqrt{\frac{80}{5}} = \sqrt{16} = 4.00$

---

## 5. Interpreting Results: The Empirical Rule (68–95–99.7)

For datasets that follow a bell-shaped **normal distribution**, the standard deviation provides exact probabilistic boundaries known as the **Empirical Rule**:

* **$68.27\%$ of all observations** fall within $\pm 1$ standard deviation of the mean ($\mu \pm 1\sigma$).
* **$95.45\%$ of all observations** fall within $\pm 2$ standard deviations of the mean ($\mu \pm 2\sigma$).
* **$99.73\%$ of all observations** fall within $\pm 3$ standard deviations of the mean ($\mu \pm 3\sigma$).

Any observation lying more than $3$ standard deviations away from the mean is statistically categorized as an extreme value or **outlier**.

---

## 6. Common Mistakes to Avoid

1. **Confusing Sample ($n-1$) and Population ($N$):**  
   Using $N$ when analyzing experimental sample data leads to underestimating real-world uncertainty. Unless you have collected data from every unit in existence, always use the sample formula ($n - 1$).
2. **Forgetting to Take the Square Root:**  
   Stopping at Step 5 yields variance ($s^2$), not standard deviation ($s$). If your final number is in squared units, you have not finished the calculation.
3. **Assuming Standard Deviation Works Well for Skewed Data:**  
   Standard deviation relies on the mean, making it sensitive to extreme outliers. For heavily skewed distributions (such as personal income or real estate prices), the **Interquartile Range (IQR)** and median provide a more resilient measure of spread.
4. **Rounding Intermediate Numbers:**  
   Rounding intermediate deviations or sums introduces compound rounding errors. Keep full precision until your final square root.

---

## 7. Frequently Asked Questions

### Can standard deviation ever be negative?
No. Because deviations from the mean are squared before being summed, the numerator is always non-negative. Taking the principal (positive) square root ensures that standard deviation is always $\ge 0$.

### When is standard deviation equal to zero?
Standard deviation is zero if and only if all numbers in the dataset are identical (e.g., $\{7, 7, 7, 7\}$). The mean is $7$, every deviation is $0$, and therefore $s = 0$.

### How does multiplying or adding a constant affect standard deviation?
* **Adding a constant $c$ to every value:** The standard deviation remains **unchanged**. The entire distribution shifts along the number line, but the spread between values is preserved.
* **Multiplying every value by a constant $c$:** The standard deviation is **multiplied by $|c|$**.

---

## Compute Instant Descriptive Statistics on SciCalcX

Computing large datasets by hand is tedious and prone to arithmetic mistakes. Use the **[SciCalcX Descriptive Statistics Engine](/statistics/)** to compute:
* Sample and population standard deviations
* Variance and mean absolute deviation
* Median, mode, quartiles, and interquartile range (IQR)
* Real-time distribution histograms and five-number summaries

---

## References & Further Reading

* **OpenStax Introductory Statistics** — [Measures of the Spread of the Data](https://openstax.org/books/introductory-statistics/pages/2-7-measures-of-the-spread-of-the-data): Clear textbook explanations of standard deviation, variance, and sample vs. population formulas.
* **NIST/SEMATECH e-Handbook of Statistical Methods** — [Measures of Dispersion (Section 1.3.5.6)](https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm): Authoritative standard for statistical dispersion definitions, sample variance, and Bessel's correction.
* **Wolfram MathWorld** — [Standard Deviation](https://mathworld.wolfram.com/StandardDeviation.html): Rigorous mathematical formulations, variance moments, and properties of normal distributions.
