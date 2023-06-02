import * as rls from 'readline-sync';
//Declaro Funciones
function invertirVector(vec: string[], n: number) {
    let aux: string = "";
    let indiceizq: number = 0;
    let indiceder: number = n - 1;
    while (indiceizq < indiceder) {
        aux = vec[indiceder];
        vec[indiceder] = vec[indiceizq];
        vec[indiceizq] = aux;
        indiceizq++;
        indiceder--;
    }
}

//Declaro Variables
let palabra: string = rls.question("Ingrese la palabra a invertir: ");
let cantidadLetras: number = palabra.length;

//No se como pasar la palabra a numeros
let vectorPalabra = Array.from (palabra);


//Inicio del Programa
invertirVector(vectorPalabra, cantidadLetras);
console.log(vectorPalabra);