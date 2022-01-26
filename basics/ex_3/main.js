"use strict";

// Hay que crear una página HTML que contenga un listado de nombres,
// y un título que diga "La persona seleccionada es: ". Usando JavaScript,
// tenemos que cambiar el título añadiendo el nombre del primer li.

const d = document;
const title = d.querySelector("h1");
const person = d.querySelector(".element");

title.innerHTML = `${title.innerHTML}${person.innerHTML}`;