"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Consulto la dimension de mi arreglo
var s = rls.questionInt("Ingrese la dimension del arreglo: ");
//Creo el arreglo con dicha dimension
var v = new Array(s);
//Lo cargo con valores
for (var i = 0; i < v.length; i++) {
    v[i] = rls.questionInt("Ingrese el valor de su posicion:");
}
//Creo un vector donde guardare el resultado con la misma dimension y tipo
var invertido = new Array(s);
//unifico las funciones 1 y 2 
function invertirVector(arr, s) {
    var aux = 0;
    var i = 0;
    var d = s - 1;
    while (i < d) {
        aux = arr[d];
        arr[d] = arr[i];
        arr[i] = aux;
        i++;
        d--;
    }
    return arr;
}
console.log(v);
invertido = invertirVector(v, s);
console.log(invertido);
