import * as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese el primer numero: ");
let numero2 : number = rls.questionInt("Ingrese el segundo numero: ");
let actual, suma, auxiliar : number;

if (numero1 > numero2){
    auxiliar = numero1;
    numero1 = numero2;
    numero2 = auxiliar;
}
actual = numero1;
suma = 0;

while (actual <= numero2){
    suma = suma + actual;
    actual++;
}
console.log ("El resultado de la suma es:" ,suma);
 