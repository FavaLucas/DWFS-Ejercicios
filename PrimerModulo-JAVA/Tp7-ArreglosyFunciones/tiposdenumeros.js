"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro Funciones
function cargaVectores(vec, n) {
    for (var i = 0; i < n; i++) {
        vec[i] = rls.questionInt("A continuacion ingrese los valores correspondientes a su vector: ");
    }
}
function tipoDeNumeros(vec, n) {
    var positivo = 0;
    var negativo = 0;
    var cero = 0;
    for (var i = 0; i < n; i++)
        if (vec[i] == 0) {
            cero = cero + 1;
        }
        else if (vec[i] < 0) {
            negativo = negativo + 1;
        }
        else if (vec[i] > 0) {
            positivo = positivo + 1;
        }
    console.log("La cantidad de ceros es de ", cero, ". La cantidad de positivos es de: ", positivo, ". La cantidad de negativos es de :", negativo);
}
//Declaro Variables
var dimension = rls.questionInt("Ingrese la longitud de su vectores: ");
var vector1 = new Array(dimension);
//Inicio del programa
cargaVectores(vector1, dimension);
console.log("Su vector es: ", vector1);
tipoDeNumeros(vector1, dimension);
