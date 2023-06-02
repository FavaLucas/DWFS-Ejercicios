import * as rls from 'readline-sync'

let numero1: number = rls.questionFloat("Ingreso Numero 1: ");
let numero2: number = rls.questionFloat("Ingreso Numero 2: ");
let opcion: number = rls.questionFloat("Ingrese opcion,  1 para sumar, 2 para restar o cualquier tecla para salir: ");
let linea: string = "";

// si ingresa opcion 1 la calculadora suma
if (opcion == 1) {
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    console.log("Resultado: ", numero1 + numero2);
    linea = "";
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);

// si ingresa la opcion 2 la calculadora resta
}else if (opcion == 2) {
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
    console.log("Resultado: ", numero1 - numero2);
    linea = "";
    for (let i: number = 0; i <= 40; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}else if ((opcion != 1) && (opcion != 2)){
    console.log("Ha pulsado una operacion invalida, vuelva a ingresar.")
}
