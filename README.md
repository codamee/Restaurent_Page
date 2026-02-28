# Restaurant Page

A dynamic, single-page restaurant website built entirely with **JavaScript DOM manipulation** and bundled using **Webpack**. This project focuses on the "Separation of Concerns" by modularizing UI components.

| Home Page | Menu Page |
| :---: | :---: |
| <img src="./src/assets/screenshot1.png" width="400"> | <img src="./src/assets/screenshot2.png" width="400"> |
| <img src="./src/assets/screenshot3.png" width="400"> | <img src="./src/assets/screenshot4.png" width="400"> |

## 🚀 Live Demo
[Explore the Restaurant Menu Here](https://codamee.github.io/restaurant-page/)

## 🎨 Key Features
* **Zero-HTML Content Rendering:** The `index.html` remains an empty skeleton; the entire UI—including the hero section, menus, and contact info—is generated dynamically via JavaScript.
* **Tabbed Navigation System:** Implemented a seamless tab-switching logic that clears and re-renders the `#content` container without a single page reload.
* **Modular Codebase:** Each section (Home, Menu, About) is encapsulated in its own ES6 module, keeping the `index.js` clean and focused on routing logic.
* **Bundled Assets:** Integrated Webpack to manage the dependency graph, allowing for the direct import of CSS and images into JavaScript files.

## 🛠️ Technical Skills
* **Webpack Configuration:** Set up `webpack.config.js` with `html-webpack-plugin` and dev-servers to optimize the development and build workflow.
* **ES6 Modules:** Mastered the `import` and `export` syntax to create a scalable file structure.
* **NPM & Dependency Management:** Handled project libraries and build scripts through `package.json` and a clean `.gitignore` strategy.
* **Advanced DOM Manipulation:** Built complex nested layouts using `document.createElement()`, `classList` management, and hierarchical appending.

---
*Built as part of The Odin Project JavaScript Path.*
