# 🍕 Pizzeria - Pizza Ordering System

Welcome to **Pizzeria**, a modern and user-friendly pizza ordering system built with **Vite**, **React**, and **TailwindCSS**. This system allows customers to browse pizzas, customize orders, and experience a seamless user interface.

---

## 🚀 Features

- **Intuitive Navigation**: Pages for Home, Menu, Reviews, and About Us.
- **Dynamic Layouts**: Modular design using reusable components for dishes, buttons, and cards.
- **Custom Fonts**: Includes the *Love.otf* font for aesthetic appeal.
- **Fast and Lightweight**: Built with Vite for blazing-fast development and optimized builds.
- **TailwindCSS Styling**: Consistent, responsive, and modern UI design.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Fonts**: Custom font (*Love.otf*) and Google Fonts
- **Icons**: React Icons / SVG
- **State Management**: React Context API (or extendable to Redux)

---

## 📂 Project Structure

```plaintext
PIZZERIA/
├── .github/              # GitHub-specific files
├── node_modules/         # Dependencies
├── public/               # Static files (e.g., favicon)
├── src/
│   ├── assets/           # Images and SVGs
│   │   ├── img/          # Image assets
│   │   └── react.svg     # Example SVG
│   ├── components/       # Reusable components
│   │   ├── About.jsx
│   │   ├── Dishes.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   └── Review.jsx
│   ├── fonts/            # Custom fonts (Love.otf)
│   ├── layouts/          # UI Layouts
│   │   ├── Button.jsx
│   │   ├── DishesCard.jsx
│   │   ├── OrderForm.jsx
│   │   └── ReviewCard.jsx
│   ├── App.css           # Global styles
│   ├── App.jsx           # Root React component
│   ├── index.css         # TailwindCSS setup
│   └── main.jsx          # Entry point for Vite
├── .gitignore            # Ignored files
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Dependencies and scripts
├── postcss.config.js     # Tailwind/PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.js    # TailwindCSS configuration
└── vite.config.js        # Vite configuration
