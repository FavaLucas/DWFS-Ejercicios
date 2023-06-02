import * as rls from 'readline-sync';

//Funciones
let dibujarGuiones = (cantidad: number) => {
    let linea = "-";
    for (let i: number = 1; i < cantidad; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}
let calcularResultado = (n1: number, n2: number, opt: number): number => {
    let resultado: number = 0;
    if (opt == 1) {
        resultado = n1 + n2; 
    } else if (opt = 2) {
        resultado = n1 - n2;
    }
    return resultado;
}

//Variales
let numero1: number = rls.questionFloat("Ingreso Numero 1: ");
let numero2: number = rls.questionFloat("Ingreso Numero 2: ");
let separador: number = rls.questionInt("Cuantos separadores desea utlizar: ");
let opcion: number = rls.questionInt("Ingrese opcion,  1 para sumar, 2 para restar o cualquier letra para salir: ");
// Esta variables es para el retorno de la funcion calcularResultado
let calculado = calcularResultado(numero1, numero2, opcion);

//Inicio del programa
dibujarGuiones(separador);
console.log ("Resultado: ", calculado);
dibujarGuiones(separador);
