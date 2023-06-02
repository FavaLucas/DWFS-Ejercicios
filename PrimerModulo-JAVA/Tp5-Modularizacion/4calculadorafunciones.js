"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaracion de funciones
function dibujarGuionesN(n) {
    var i;
    var linea = "";
    for (i = 0; i < n; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}
function resultado(n1, n2, opt) {
    var res = 0;
    if (opt == 1) {
        res = n1 + n2;
    }
    else if (opt == 2) {
        res = n1 - n2;
    }
    if ((opt != 1) && (opt != 2)) {
        console.log("Ingreso operador invalido, intente nuevamente");
    }
    else
        console.log("El resultado es:", res);
}
//Declaracion de variables
var numero1 = rls.questionFloat("Ingrese Numero 1: ");
var numero2 = rls.questionFloat("Ingrese Numero 2: ");
var longitud = rls.questionFloat("Ingrese la longitud que quiera tomar: ");
var opcion = rls.questionFloat("Ingrese opcion,  1 para sumar, 2 para restar o cualquier tecla para salir: ");
//Inicio del programa
dibujarGuionesN(longitud);
resultado(numero1, numero2, opcion);
dibujarGuionesN(longitud);
// fin del programa
