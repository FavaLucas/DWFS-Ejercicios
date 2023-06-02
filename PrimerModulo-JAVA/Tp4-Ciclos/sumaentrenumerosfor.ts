import * as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese el primer numero: ");
let numero2 : number = rls.questionInt("Ingrese el segundo numero: ");

let actual, suma, auxiliar : number;

suma = 0;

if (numero1 > numero2){
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}

for (let actual = numero1; actual <= numero2; actual++){
    suma = suma + actual;
}
console.log ("El resultado es:", suma);
