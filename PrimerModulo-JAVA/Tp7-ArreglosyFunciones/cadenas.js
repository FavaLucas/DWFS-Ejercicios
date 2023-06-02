"use strict";
exports.__esModule = true;
//practica de cadenas , un string es una cadena de caracteres o se puede ver como un arreglo de caracteres
//Mi string sera: Juan Perez
var frase = "Esta es una clase de programacion compleja";
var longitud = frase.length;
console.log("La frase tiene " + longitud + " caractetres");
var indexOdProgramacion = frase.indexOf("programacion");
console.log("La palabra programacion empieza en la posicion " + indexOdProgramacion);
var lastIndexOdEspacio = frase.lastIndexOf(" ");
console.log("El ultimo espacio esta en la posicion " + lastIndexOdEspacio);
console.log(frase[17]);
console.log(frase[25]);
var palabra = frase.substring(indexOdProgramacion, lastIndexOdEspacio);
console.log(palabra);
var palabra2 = frase.substring(5);
console.log(palabra2);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
var palabras = frase.split(" ");
console.log(palabras);
Number("45");
console.log(parseInt("45"));
console.log(parseFloat("45.52"));
