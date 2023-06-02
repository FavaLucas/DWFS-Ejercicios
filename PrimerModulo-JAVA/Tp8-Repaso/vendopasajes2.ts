import * as rls from "readline-sync";

//Ejercicio practico 8, pagina 87 - Vender pasajes de colectivo
//Funcion para crear una Matriz bidimensional
function crearAsientos(f: number, c: number): number[][] {
    let matriz: number[][] = new Array(f);
    for (let i: number = 0; i < f; i++) {
        matriz[i] = new Array(c);
    }
    return matriz;
}

/**
 *Funcion para generar un numero aleatorio entero entre un Minimo y un Maximo
*/
function numeroAleatorioMaxMin(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funcion para asignar aleatoriamente ocupaciones (con 0 y 1) a la matriz
function completarAleatoriamente(matriz: number[][], f: number, c: number) {
    //Filas
    for (let i: number = 0; i < f; i++) {
        //Columnas
        for (let j: number = 0; j < c; j++) {
            matriz[i][j] = numeroAleatorioMaxMin(0, 1);
        }
    }
}

//Funcion para motrar las butacas disponibles al ususario
function mostrarAsientos(arreglo: number[][], fil: number, col: number) {
    for (let i: number = 0; i < fil; i++) {
        console.log("Fila ", i, ": ", arreglo[i].join(" | "));
    }
}

/**
 * Funcion para devolver estado de ocupacion de mi asiento
 * @param arreglo 
 * @param fil 
 * @param col 
 * @returns 
 */
function comprobarEstado(arreglo: number[][], fil: number, col: number): number {
    return arreglo[fil][col];
}

//Declaro variables
let filas: number = rls.questionInt("Ingrese la cantidad de filas del colectivo: ");
let columnas: number = rls.questionInt("Ingrese la cantidad de columnas del colectivo: ");
//Defino colectivo como una matriz que se creara llamando a la funcion crearMartiz()
let colectivo: number[][] = crearAsientos(filas, columnas);

//Inicio mi programa
completarAleatoriamente(colectivo, filas, columnas);
mostrarAsientos(colectivo, filas, columnas);
let pasajeFila: number = rls.questionInt("Ingrese fila que desee: ");
let pasajeColumna: number = rls.questionInt("Ingrese columna que desee: ");
let estado: number = comprobarEstado(colectivo, pasajeFila, pasajeColumna);
if (estado == 1) {
    console.log("El asiento esta Ocupado");
} else
    console.log("El asiento esta Libre");
