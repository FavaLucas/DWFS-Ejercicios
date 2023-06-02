import * as rls from 'readline-sync';

let valores: number[] = new Array(5);

for (let i: number = 0; i < valores.length; i++){
    valores[i] = rls.questionInt("Ingrese el numero de la posicion " + i + ": ");  
}

for (let i: number = 0; i < valores.length; i++){
    console.log("En la posicion " + i + " el valor ingresado fue: " + valores[i]);
}

