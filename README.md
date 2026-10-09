# 🎨 PaintCraft Calculator

**PaintCraft Calculator** is a fast, responsive, and minimal micro-web application built to simplify paint volume estimation for interior spaces, renovation projects, and local commercial painting services.

It calculates room surface areas based on standard room dimensions and determines the exact number of standard paint cans required for complete 2-coat coverage, eliminating material waste and overspending.

---

## ✨ Key Features

* **Instant Estimation:** Computes wall surface area ($A$) and required paint volume in real time.
* **Rounded Unit Precision:** Utilizes ceiling math logic (`Math.ceil`) to guarantee users always purchase sufficient paint volume without running short mid-project.
* **Minimalist & Focused UI:** Strips away unnecessary inputs to deliver an ultra-clean, single-metric outcome for maximum efficiency.
* **Responsive Utility-First Design:** Styled with **Tailwind CSS** for smooth responsiveness across mobile devices, tablets, and desktops.
* **Zero Dependencies:** Pure Vanilla JavaScript (ES6+) execution ensures instant loading speeds and lightweight performance.

---

## 🧮 Mathematical Logic & Formulas

The core calculation assumes standard interior painting parameters (2 coats of paint, $10\text{ m}^2/\text{liter}$ coverage, and $3.75\text{ liters}$ per standard gallon can):

1. **Total Wall Surface Area ($A$):**
   $$A = 2 \times (\text{Length} + \text{Width}) \times \text{Height}$$

2. **Total Paint Volume Required ($L$):**
   $$L = \frac{A \times 2}{10}$$

3. **Required Paint Cans ($Cans$):**
   $$Cans = \left\lceil \frac{L}{3.75} \right\rceil$$

---

## 🛠️ Tech Stack

* **Frontend Structure:** HTML5 (Semantic Markup)
* **Styling Framework:** Tailwind CSS
* **Logic & DOM Manipulation:** Vanilla JavaScript (ES6+)
* **Deployment Platform:** Vercel

---

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/paintcraft-calculator.git](https://github.com/your-username/paintcraft-calculator.git)
