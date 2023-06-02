import * as rls from 'readline-sync';

let longitud: number = rls.questionInt("Indique la dimension del arrelgo que desea crear: ")
let vector1: number[] = new Array(longitud);

for (let i: number = 0; i < longitud; i++) {
    vector1[i] = rls.questionInt("Ingrese el valor que desea agregar: ");
}

//Imprime vector de atras para adelante
for (let i: number = longitud - 1; i >= 0; i--) {
    console.log(vector1[i]);
}
