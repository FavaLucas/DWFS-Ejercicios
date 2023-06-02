"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var longitud = rls.questionInt("Ingrese la longitud deseada para su arreglo: ");
var nombres = new Array(longitud);
for (var i = 0; i < nombres.length; i++) {
    nombres[i] = rls.question("Ingrese el nombre de la posicion " + i + " : ");
}
for (var i = 0; i < nombres.length; i++) {
    console.log("El nombre de la posiocion " + i + " es: " + nombres[i]);
}
console.log(nombres);
