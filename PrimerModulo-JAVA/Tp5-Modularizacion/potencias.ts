import * as rls from 'readline-sync';

//Declaro funciones
function potenciarBase(b: number, p: number) {
    if (p >= 0) {
        let resultado: number = 1;
        let i: number;
        for (i = 1; i <= p; i++) {
            resultado = resultado * b;
        }
        return resultado;
    }else if (p == 0 ) {
        return "1";
    }
}

//Declaro variables
let base: number = rls.questionInt("Ingrese el numero que quiere elevar: ");
let potencia: number = rls.questionInt("Ingrese la potencia a la que lo desea elevar (solo potencias mayores o iguales a 0): ");

//Inicio del programa
console.log("El resultado es: ", potenciarBase(base, potencia)); 