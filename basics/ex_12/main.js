"use strict";

// Vamos a hacer un programa que pinte en HTML lo siguiente:
// "Mi nombre es Clarette Terrasi Díaz, y está compuesto por X caracteres",
// reemplazando la X por la longitud de la cadena con el nombre.

const NAME = "Clarette Terrasi Díaz";
const D = document;
const MESSAGE = D.querySelector(".text");

MESSAGE.innerHTML = `Mi nombre es ${NAME}, y está compuesto por ${NAME.length} caracteres.`;