"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var no1 = rls.questionInt("Ingrese el primer numero: ");
var no2 = rls.questionInt("Ingrese el segundo numero: ");
var no3 = rls.questionInt("Ingrese el tercer numero: ");
var resultado = 0;
if (no1 < 0) {
    resultado = no1 * no2 * no3;
    console.log("El resultado es: ", resultado);
}
else {
    resultado = no1 + no2 + no3;
    console.log("El resultado es: ", resultado);
}
