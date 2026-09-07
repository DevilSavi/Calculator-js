# 🧮 Interactive Web Calculator

A clean, modern, and responsive web-based calculator built with plain **HTML**, **CSS**, and **JavaScript**. Features custom expression parsing, full keyboard navigation, persistent state via `localStorage`, and vertical/horizontal screen centering.

---

## ✨ Features

- **Centered & Responsive UI**: Centered perfectly on the screen using CSS Flexbox with a sleek dark theme inspired by modern OS calculators.
- **Safe Math Expression Parser**: Custom token-based mathematical parser replacing `eval()` for enhanced security and protection against code injection.
- **Full Keyboard Controls**: Operates seamlessly with numeric keys, basic math operators, `Enter`, `Backspace`, and `Escape`.
- **Persistent State**: Automatically saves and restores your current calculation string using `localStorage`.
- **Division by Zero & Syntax Protection**: Built-in error handling displaying explicit error messages on invalid expressions.

---

## 📂 Project Structure

```text
├── calculator.html     # Main HTML structure
├── styles/
│   └── style.css       # Layout, styling, and Flexbox centering
└── scripts/
    └── script.js       # Core logic, math parser, and keyboard listeners
```

---

## 🚀 Getting Started

1. **Clone or Download** the repository to your local machine.
2. Open `calculator.html` in any web browser (Chrome, Firefox, Safari, Edge).
3. Start calculating using either on-screen buttons or your computer keyboard!

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| **`0` – `9`** | Input Digits |
| **`.`** | Decimal point |
| **`+` `-` `*` `/`** | Add, Subtract, Multiply, Divide |
| **`Enter`** or **`=`** | Calculate Result |
| **`Backspace`** | Delete last character |
| **`Escape`** or **`C` / `c`** | Clear display |

---

## 🛠️ Built With

* **HTML5**: Semantic tags and button structure.
* **CSS3**: Flexbox centering, modern styling, and hover states.
* **JavaScript (ES6+)**: Custom Shunting-Yard style math expression parser, Event Listeners, and LocalStorage API.
