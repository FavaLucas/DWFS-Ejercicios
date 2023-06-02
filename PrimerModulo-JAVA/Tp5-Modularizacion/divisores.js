"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function cantidadDeDivisores(n) {
    var i;
    for (i = 0; i <= n; i++) {
        esMultiplo(n, i);
        console.log("El numero: ", i, "es multiplo de:", n, "?", esMultiplo(n, i));
    }
}
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
var numero1 = rls.questionInt("Ingrese el numero del cual quiera conocer sus divisores: ");
//Inicio del programa
cantidadDeDivisores(numero1);
