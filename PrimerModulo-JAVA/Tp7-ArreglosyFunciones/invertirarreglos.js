"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Declaro funciones
function cargaVectores(vec, n) {
    for (var i = 0; i < n; i++) {
        vec[i] = rls.questionInt("Ingrese el valor: ");
    }
}
function mostrarVectorInvertido(vec, n) {
    for (var i = n - 1; i >= 0; i--) {
        console.log(vec[i]);
    }
}
function invertirVector(vec, n) {
    var aux = 0;
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
var dimension = rls.questionInt("Ingrese la longitud de los vectores: ");
var vector = new Array(dimension);
//Inicio del programa
cargaVectores(vector, dimension);
console.log("Su vector es: ", vector);
console.log("Ahora invertiremos su vector");
invertirVector(vector, dimension);
console.log("Su vector invertido es: ", vector);
console.log("------------------------------");
mostrarVectorInvertido(vector, dimension);
