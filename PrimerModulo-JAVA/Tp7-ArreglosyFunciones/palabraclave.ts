import * as rls from "readline-sync";
//Ejercicio: Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:
//1 --si el caracter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
//2 -- si el caracter es un número o un operador matemático (+ - * / ) queda igual.
//3 -- si el caracter es una consonante minúscula pasar a mayúscula y viceversa.

let palabra: string = rls.question("Ingrese la palabra: ");
let resultado: string = "";
let vocales: string = "aeiou";
let operadores: string = ".,;:!";
let numerosCaracteres: string = "0123456789+-*/";

for (let i: number = 0; i < palabra.length; i++){
    let letra = palabra[i];
    let indiceVocal = vocales.indexOf(letra);
    if (indiceVocal >= 0) {
        resultado+= operadores[indiceVocal];
    }else {
        let indice2: number = numerosCaracteres.indexOf(letra);
        if (indice2 >= 0){
            resultado+= letra;
        }else {
            if (letra == letra.toUpperCase()){
                resultado+= letra.toLowerCase();
            }else{
                resultado+= letra.toUpperCase();
            }
        }
    }
} 

console.log(resultado);