"use strict";

// A partir de una página HTML en la que ponga "Mi contraseña es: Ada2020"
// y, usando JavaScript, tenemos que cambiar el texto 'Ada2020' por '**'.

const d = document;
const password = d.querySelector(".password");

password.innerHTML = "**";