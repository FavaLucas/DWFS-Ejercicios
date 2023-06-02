"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function esMultiplo(dividendo, divisor) {
    var resultado;
    if ((dividendo % divisor) == 0) {
        resultado = true;
        return resultado;
    }
    else if ((dividendo % divisor) > 0) {
        resultado = false;
        return resultado;
    }
    else if (divisor == 0) {
        return "No se puede dividir por 0";
    }
}
//Declaro Variables
var numero1 = rls.questionInt("Ingrese el primer numero: ");
var numero2 = rls.questionInt("Ingrese el segundo numero: ");
//Inicio del programa
console.log("El numero: ", numero1, "es multiplo del numero: ", numero2, "?");
console.log("La respuesta es: ", esMultiplo(numero1, numero2));
