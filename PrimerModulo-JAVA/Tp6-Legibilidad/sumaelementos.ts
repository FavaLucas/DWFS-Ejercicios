import * as rls from 'readline-sync';

let longitud: number = rls.questionInt("Cuan largo desea su arreglo: ");
let numeros: number[] = new Array(longitud);
let suma: number = 0;

for (let i: number = 0; i < numeros.length; i++) {
    numeros[i] = rls.questionInt("Ingrese un numero: ")
    suma = suma + numeros[i];
}
console.log("La suma de los numeros ingresados es", suma);

