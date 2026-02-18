import "./styles.css"
import { home } from "./modules/home/home.js"
import { contact } from "./modules/contact/contact.js"
import { about } from "./modules/about/about.js"
import { menu } from "./modules/menu/menu.js"

const nav = document.querySelector("nav")
document.querySelector("#home").classList.add("background")
home()
nav.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.tagName !== 'BUTTON') return;
    nav.querySelectorAll('button').forEach(btn => btn.classList.remove("background"));
    elem.classList.add("background");

    if (elem.id === "home") {
        home()
    } 
    else if (elem.id === "contact") contact();
    else if (elem.id === "about") about();
    else if (elem.id === "menu") menu();
});
