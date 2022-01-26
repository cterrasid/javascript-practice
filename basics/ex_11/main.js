"use strict";

// PRIMERA PARTE
// En este caso vamos a crear un código que nos diga cuántas horas en total
// hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería
// mostrar un mensaje con el número 525600.

// SEGUNDA PARTE
// Luego en vez de tener nuestra edad en una constante dentro del fichero
// de JavaScript, debemos crear un párrafo en el fichero HTML, escribir en
// él nuestra edad. Desde JavaScript debemos leer la edad para calcular el
// número de horas que hemos vivido.

// PRIMERA PARTE
// const age = 33;
// const hoursYear = 8760;
// const hoursLived = hoursYear * age;

// console.log(`Has vivido ${hoursLived} horas.`);

// SEGUNDA PARTE
const d = document;
const age = d.querySelector(".age");
const parsedAge = parseInt(age.innerHTML);
const hoursYear = 8760;
const hoursLived = hoursYear * parsedAge;

console.log(`Has vivido ${hoursLived} horas.`);