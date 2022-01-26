"use strict";

// Crear una página HTML con un párrafo en el que ponga Hola y,
// usando JavaScript, vamos a cambiar ese texto por Hola Mundo.

const d = document;

const paragraph = d.querySelector(".paragraph");

paragraph.innerHTML = `${paragraph.innerHTML} Mundo.`;