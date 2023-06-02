import * as rls from "readline-sync";

console.log("Ingreso numeros de 1 en 1 y cuando quiera terminar ingrese 0");

let numeroIngresado: number = rls.questionInt("Ingrese un numero, ");
let maximo: number = numeroIngresado;
let minimo: number = numeroIngresado;
let promedio: number = 0;
let totalNumerosIngresados: number = 0;
let contador: number = 0;

while (numeroIngresado != 0) {
    if (numeroIngresado > maximo) {
        maximo = numeroIngresado;
    } else {
        if ((numeroIngresado < minimo) && (numeroIngresado != 0)) {
            minimo = numeroIngresado;
        }

        contador = contador + 1;
        totalNumerosIngresados = totalNumerosIngresados + numeroIngresado;
        numeroIngresado = rls.questionInt("Ingrese nuevo numero: ");
    }
}
promedio = totalNumerosIngresados / contador;

console.log("El maximo numero ingresado es:", maximo);
console.log("El minimo numero ingresado es:", minimo);
console.log("El total de numeros ingresados fue de: ", contador);
console.log("La media entre los numeros ingresados es:", promedio);
