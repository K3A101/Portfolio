console.log("Mijn Portfolio");

let navigatieMenu = document.querySelector("header");
let hamburgerMenu = document.querySelector("header img");

console.log(navigatieMenu, hamburgerMenu);

function maakZichtbaar() {

    navigatieMenu.classList.toggle("toon-menu");

    // if (navigatieMenu.classList.contains("toon-menu")) {
    //    hamburgerMenu.classList.add("annuleren-knop");

    // }

    // else hamburgerMenu.classList.remove("annuleren-knop");
}

hamburgerMenu.addEventListener("click", maakZichtbaar);