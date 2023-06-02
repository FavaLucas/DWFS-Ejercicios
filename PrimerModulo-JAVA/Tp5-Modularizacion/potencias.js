"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function potenciarBase(b, p) {
    if (p >= 0) {
        var resultado = 1;
        var i = void 0;
        for (i = 1; i <= p; i++) {
            resultado = resultado * b;
        }
        return resultado;
    }
    else if (p == 0) {
        return "1";
    }
}
//Declaro variables
var base = rls.questionInt("Ingrese el numero que quiere elevar: ");
var potencia = rls.questionInt("Ingrese la potencia a la que lo desea elevar (solo potencias mayores o iguales a 0): ");
//Inicio del programa
console.log("El resultado es: ", potenciarBase(base, potencia));
