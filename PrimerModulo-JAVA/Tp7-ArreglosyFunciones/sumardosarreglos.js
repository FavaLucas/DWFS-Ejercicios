"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function cargaVectores(vec, n) {
    for (var i = 0; i < n; i++) {
        vec[i] = rls.questionInt("A continuacion ingrese los valores correspondientes a su vector: ");
    }
}
function sumaVectores(vec1, vec2, sumavec, n) {
    for (var i = 0; i < n; i++) {
        sumavec[i] = vec1[i] + vec2[i];
    }
}
//Declaro variables
var dimension = rls.questionInt("Ingrese la longitud de los vectores a sumar: ");
var vector1 = new Array(dimension);
var vector2 = new Array(dimension);
var resultadoSuma = new Array(dimension);
//Inicio del Programa
cargaVectores(vector1, dimension);
console.log(vector1);
cargaVectores(vector2, dimension);
console.log(vector2);
sumaVectores(vector1, vector2, resultadoSuma, dimension);
console.log("El resultado de la suma de sus vectores es: ", resultadoSuma);
