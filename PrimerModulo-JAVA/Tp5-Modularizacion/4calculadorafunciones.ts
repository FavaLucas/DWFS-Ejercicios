import * as rls from 'readline-sync'

//Declaracion de funciones
function dibujarGuionesN(n: number) {
    let i: number;
    let linea: string = "";
    for (i = 0; i < n; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}
function resultado(n1: number, n2: number, opt: number) {
    let res: number = 0;
    if (opt == 1) {
        res = n1 + n2;
    } else if (opt == 2) {
        res = n1 - n2;
    }
    if ((opt != 1) && (opt != 2)){
        console.log ("Ingreso operador invalido, intente nuevamente");
    }else console.log("El resultado es:", res);
}

//Declaracion de variables
let numero1: number = rls.questionFloat("Ingrese Numero 1: ");
let numero2: number = rls.questionFloat("Ingrese Numero 2: ");
let longitud: number = rls.questionFloat("Ingrese la longitud que quiera tomar: ");
let opcion: number = rls.questionFloat("Ingrese opcion,  1 para sumar, 2 para restar o cualquier tecla para salir: ");

//Inicio del programa
dibujarGuionesN (longitud);
resultado(numero1, numero2, opcion);
dibujarGuionesN(longitud);
// fin del programa
