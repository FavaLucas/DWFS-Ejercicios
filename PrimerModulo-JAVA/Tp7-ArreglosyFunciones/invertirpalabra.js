"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro Funciones
function invertirVector(vec, n) {
    var aux = "";
    var indiceizq = 0;
    var indiceder = n - 1;
    while (indiceizq < indiceder) {
        aux = vec[indiceder];
        vec[indiceder] = vec[indiceizq];
        vec[indiceizq] = aux;
        indiceizq++;
        indiceder--;
    }
}
//Declaro Variables
var palabra = rls.question("Ingrese la palabra a invertir: ");
var cantidadLetras = palabra.length;
//No se como pasar la palabra a numeros
var vectorPalabra = Array.from(palabra);
//Inicio del Programa
invertirVector(vectorPalabra, cantidadLetras);
console.log(vectorPalabra);
