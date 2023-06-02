"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombre = rls.question("Ingrese el nombre: ");
function imprimirNombre(i) {
    console.log(i);
}
imprimirNombre(nombre);
imprimirNombre("Lucas");
