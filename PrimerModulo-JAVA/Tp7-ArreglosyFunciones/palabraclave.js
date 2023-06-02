"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
//Ejercicio: Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:
//1 --si el caracter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
//2 -- si el caracter es un número o un operador matemático (+ - * / ) queda igual.
//3 -- si el caracter es una consonante minúscula pasar a mayúscula y viceversa.
var palabra = rls.question("Ingrese la palabra: ");
var resultado = "";
var vocales = "aeiou";
var operadores = ".,;:!";
var numerosCaracteres = "0123456789+-*/";
for (var i = 0; i < palabra.length; i++) {
    var letra = palabra[i];
    var indiceVocal = vocales.indexOf(letra);
    if (indiceVocal >= 0) {
        resultado += operadores[indiceVocal];
    }
    else {
        var indice2 = numerosCaracteres.indexOf(letra);
        if (indice2 >= 0) {
            resultado += letra;
        }
        else {
            if (letra == letra.toUpperCase()) {
                resultado += letra.toLowerCase();
            }
            else {
                resultado += letra.toUpperCase();
            }
        }
    }
}
console.log(resultado);
