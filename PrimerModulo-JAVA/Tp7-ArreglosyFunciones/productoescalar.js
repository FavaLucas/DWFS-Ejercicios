"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro Funciones
function cargaVectores(vec, n) {
    for (var i = 0; i < n; i++) {
        vec[i] = rls.questionInt("A continuacion ingrese los valores correspondientes a su vector: ");
    }
}
function productoEscalar(vec1, vec2, n) {
    var acumulador = 0;
    var i = 0;
    for (i; i < n; i++) {
        acumulador = acumulador + (vec1[i] * vec2[i]);
    }
    return acumulador;
}
//Declaro Variables
var dimension = rls.questionInt("Ingrese la dimension des arreglos: ");
var vector1 = new Array(dimension);
var vector2 = new Array(dimension);
var resultado;
//Inicio del Programa
cargaVectores(vector1, dimension);
console.log("El vector es: ", vector1);
cargaVectores(vector2, dimension);
console.log("El vector es: ", vector2);
resultado = productoEscalar(vector1, vector2, dimension);
console.log("El productor escalar de los vectores es: ", resultado);
