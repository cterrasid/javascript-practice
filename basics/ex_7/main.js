"use strict";

// Crear dos botones sencillos con los mismos estilos (padding, borde, color) y,
// usando JavaScript, al segundo añadirle una clase para que parezca que está
// desactivado (por ejemplo, aplicarle una opacidad menor).

const d = document;
const secondButton = d.querySelector(".button_2");

secondButton.classList.add("inactive");