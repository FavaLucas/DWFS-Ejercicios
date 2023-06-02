import * as rls from 'readline-sync';

let nombres : string[] = new Array (2);
let numeros : number[] = new Array (3);

for (let i:number = 0; i < 2; i++){
    nombres[i] = rls.question("Ingrese el nombre: ");
}
for (let i:number = 0; i < 3; i++){
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