import * as rls from 'readline-sync';

//Declaro funciones
function cantidadDeDivisores(n: number) {
    let i: number;
    for (i = 0; i <= n; i++) {
        esMultiplo(n, i);
        console.log("El numero: ", i, "es multiplo de:", n, "?", esMultiplo(n, i));
    }
}
function esMultiplo(dividendo: number, divisor: number) {
    let resultado: boolean;
    if ((dividendo % divisor) == 0) {
        resultado = true;
        return resultado;
    } else if ((dividendo % divisor) > 0) {
        resultado = false;
        return resultado;
    } else if (divisor == 0) {
        return "No se puede dividir por 0"
    }
}

//Declaro Variables
let numero1: number = rls.questionInt("Ingrese el numero del cual quiera conocer sus divisores: ");

//Inicio del programa
cantidadDeDivisores(numero1);