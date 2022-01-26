"use strict";

// Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas
// y la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más
// que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que
// pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para
// calcularlo. El resultado debe mostrarse en la consola del navegador.

const restaurantCheck = 128;
const sakeShot = 2;
const diners = 9;
const amountAll = restaurantCheck - sakeShot;
const amountPerson = amountAll / diners;
const amountAna = amountPerson + sakeShot;

console.log(
    `Cada comensal debe pagar ${amountPerson} euros, mientras que a Ana le toca pagar ${amountAna} euros.`
);