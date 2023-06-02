import * as rls from "readline-sync";

//practica de cadenas , un string es una cadena de caracteres o se puede ver como un arreglo de caracteres
//Mi string sera: Juan Perez

let frase = "Esta es una clase de programacion compleja";

const longitud = frase.length;
console.log("La frase tiene " + longitud + " caractetres");

let indexOdProgramacion: number = frase.indexOf("programacion");

console.log("La palabra programacion empieza en la posicion " + indexOdProgramacion);

let lastIndexOdEspacio: number = frase.lastIndexOf(" ");
console.log("El ultimo espacio esta en la posicion " + lastIndexOdEspacio);

console.log(frase[17]);
console.log(frase[25]);

let palabra: string = frase.substring(indexOdProgramacion, lastIndexOdEspacio);
console.log(palabra);

let palabra2: string = frase.substring(5);
console.log(palabra2);

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

const palabras: string[] = frase.split(" ");
console.log(palabras);

Number("45");
console.log(parseInt("45"));
console.log(parseFloat("45.52"));