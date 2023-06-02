"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombres = new Array(2);
var numeros = new Array(3);
for (var i = 0; i < 2; i++) {
    nombres[i] = rls.question("Ingrese el nombre: ");
}
for (var i = 0; i < 3; i++) {
    numeros[i] = rls.questionInt("Ingrese el numero: ");
}
console.log(nombres);
console.log(numeros);
/*
function completar (array){
    for (let i:number = 0; i < xxxx; i++){
       array[i] = rls.question("Ingrese el dato: ");
    }
}
*/ 
