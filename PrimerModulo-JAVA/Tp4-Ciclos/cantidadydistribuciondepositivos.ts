import * as rls from "readline-sync";

let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;
let numero: number = rls.questionInt("Ingrese un numero ");

while (numero != 0) {
    if (numero > 0) {
        cantPositivos = cantPositivos + 1;
    }
    cantTotal = cantTotal + 1;
    numero = rls.questionInt("Ingrese otro numero ");
}
if (cantTotal > 0) {
    porcPositivos = (cantPositivos * 100) / cantTotal;
    console.log("La cantidad de numeros positivos ingresado es de: ", cantPositivos);
    console.log("El porcentaje de numeros positivos ingresados sonbre el total es de", porcPositivos);
}