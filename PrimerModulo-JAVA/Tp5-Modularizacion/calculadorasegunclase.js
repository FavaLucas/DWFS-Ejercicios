"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Funciones
var dibujarGuiones = function (cantidad) {
    var linea = "-";
    for (var i = 1; i < cantidad; i++) {
        linea = linea + "-";
    }
    console.log(linea);
};
var calcularResultado = function (n1, n2, opt) {
    var resultado = 0;
    if (opt == 1) {
        resultado = n1 + n2;
    }
    else if (opt = 2) {
        resultado = n1 - n2;
    }
    return resultado;
};
//Variales
var numero1 = rls.questionFloat("Ingreso Numero 1: ");
var numero2 = rls.questionFloat("Ingreso Numero 2: ");
var separador = rls.questionInt("Cuantos separadores desea utlizar: ");
var opcion = rls.questionInt("Ingrese opcion,  1 para sumar, 2 para restar o cualquier letra para salir: ");
// Esta variables es para el retorno de la funcion calcularResultado
var calculado = calcularResultado(numero1, numero2, opcion);
//Inicio del programa
dibujarGuiones(separador);
console.log("Resultado: ", calculado);
dibujarGuiones(separador);
