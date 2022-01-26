"use strict";

// Crear una página HTML con una lista ul vacía y, usando JavaScript,
// añadir al contenido de esa lista tres li, el primero tendrá como
// texto 1, el segundo 2 y el tercero 3.

const d = document;
const list = d.querySelector(".list");

list.innerHTML = "<li>texto 1</li><li>texto 2</li><li>texto 3</li>";