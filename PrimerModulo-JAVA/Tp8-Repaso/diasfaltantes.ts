import * as rls from "readline-sync";

let añoUsuario: number = rls.questionInt("Ingrese el periodo anual que quiere evaluar: ");
let evaluarAño: boolean = true;
let añoVector: number[] = new Array();

/**
 * Funcion para crear año comun o bisiesto
 */
function evaluarAñoBisiesto(añoUsuario: number): boolean {
    let bisiesto: boolean;
    if (añoUsuario % 4 == 0) {
        bisiesto = false;
        return bisiesto;
    } else {
        console.log("El año elegido es bisiesto");
        bisiesto = true;
        return bisiesto;
    }
}
//Genero el año de 364 o 365 dias segun Bisiesto
function generarArreglo(bisiesto: boolean): number[] {
    let añoGenerado: number[] = new Array();
    if (bisiesto) {
        for (let i: number = 0; i < 365; i++)
            añoGenerado[i] = 0;
        return añoGenerado
    } else {
        for (let i: number = 0; i < 364; i++)
            añoGenerado[i] = 0;
        return añoGenerado
    }
}

//Calculo los dias pasados para usar como indice en la busqueda de mi vector
function diasPasados(bisiesto: boolean, dia: number, mes: number): number {
    let acumuloDiasPasados: number = 0;
    mes = 30 * mes;
    if (mes >= 2) {
        acumuloDiasPasados = (mes - dia) - 2;
        return acumuloDiasPasados;
    } else {
        acumuloDiasPasados = (mes - dia) - 1;
        return acumuloDiasPasados;
    }
}
/**
 * Cargo mi arreglo en funcion de los dias pasados por el usuario
 * @param añoVec 
 * @param diasRec 
 * @returns 
 */
function cargarArreglo(añoVec: number[], diasRec: number): number[] {
    for (let i: number = 0; i < diasRec; i++) {
        añoVec[i] = 1
    }
    return añoVec;
}
/**
 * Calculo los dias que quedan
 * @param añoVec 
 * @returns 
 */
function diasQueQuedan(añoVec: number[]): number{
    let contador: number = 0;
    for (let i: number = 0; i < añoVector.length; i++) {
        if (añoVec[i] == 0) {
            contador += 1;
        }
    }
    return contador;
}

//Declaro variables
evaluarAño = (evaluarAñoBisiesto(añoUsuario));
añoVector = generarArreglo(evaluarAño);

//Consulto en que dia y mes nos posicionamos, para conocer los dias recorridos
let mesUsuario: number = rls.questionInt("Ingrese el mes que quere evaluar: ");
let diaUsuario: number = rls.questionInt("Ingrese el dia que quere evaluar: ");
let diasRecorridos: number = 0;
diasRecorridos = (diasPasados(evaluarAño, diaUsuario, mesUsuario));
console.log(diasRecorridos);
añoVector = cargarArreglo(añoVector, diasRecorridos);
console.log("Los dias que queda son: ", diasQueQuedan(añoVector));







