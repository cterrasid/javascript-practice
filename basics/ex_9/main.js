"use strict";

// Imagina que vamos a la frutería y compramos lo siguiente:
// 2 kilos de kiwis a 5€ / kg
// 3 kilos de peras conferencia (no una cualquiera) a 2€ / kg
// Medio kilo de uvas a 4€ / kg

// Vamos a calcular el precio total como si lo
// hiciésemos en una hoja de papel toda la vida pero de manera
// mucho más guay. El resultado debe mostrarse en la consola del navegador.

const kiwisPerKg = 5;
const pearsPerKg = 2;
const grapesPerKg = 4;
const total = kiwisPerKg * 2 + pearsPerKg * 3 + grapesPerKg / 2;

console.log(`La compra sale en ${total} euros`);