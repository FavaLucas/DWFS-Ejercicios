import * as rls from "readline-sync";

let tablaMultiplicar : number = rls.questionInt("Que taba de multiplicar desea hacer? ");
let limiteTabla : number = rls.questionInt("Hasta que numero desea multiplicar? ");

let resultado : Number = 0;

for (let contador: number = 1; contador <= limiteTabla; contador++){
    resultado = tablaMultiplicar * contador;
    console.log(tablaMultiplicar, "x" ,contador ,"=" ,resultado);
}