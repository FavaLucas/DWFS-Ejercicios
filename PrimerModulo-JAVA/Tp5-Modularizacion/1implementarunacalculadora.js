"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var numero1 = rls.questionFloat("Ingreso Numero 1: ");
var numero2 = rls.questionFloat("Ingreso Numero 2: ");
var opcion = rls.questionFloat("Ingrese opcion,  1 para sumar, 2 para restar o cualquier tecla para salir: ");
var linea = "";

// si ingresa opcion 1 la calculadora suma
if (opcion == 1) {
    for (var i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    console.log("Resultado: ", numero1 + numero2);
    linea = "";
    for (var i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    // si ingresa la opcion 2 la calculadora resta
}
else if (opcion == 2) {
    for (var i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    console.log("Resultado: ", numero1 - numero2);
    linea = "";
    for (var i = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}
else if ((opcion != 1) && (opcion != 2)) {
    console.log("Ha pulsado una operacion invalida, vuelva a ingresar.");
}
