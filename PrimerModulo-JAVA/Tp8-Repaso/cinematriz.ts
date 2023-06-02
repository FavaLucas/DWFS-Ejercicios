import * as rls from "readline-sync";
let filas: number = rls.questionInt("Ingrese la cantidad de filas que tiene el cine: ");
let butacas: number = rls.questionInt("Ingrese la cantidad de butacas que tiene el cine: ");

let cine: boolean[][];

function crearCine(filas: number, butacas: number): boolean[][] {
    cine = new Array(filas);
    for (let i: number = 0; i < cine.length; i++) {
        cine[i] = new Array(butacas);
    }
    return cine;
}

//Funcion para cargar mi arreglo con valores aleatorios 0 (False/vacias) y 1 (true/ocupada)
function cargarAleatorio(matriz: boolean[][], fila: number, columna: number): boolean[][] {
    for (let i: number = 0; i < fila; i++) {
        for (let j: number = 0; j < columna; j++) {
            if ((Math.floor(Math.random() * 2)) == 0) {
                matriz[i][j] = false;
            } else {
                matriz[i][j] = true;
            }
        }
    }
    return matriz;
}

//Cuento la cantidad de False de mi vector para saber cuantas butacas vacias tengo
function controlarVacios(matriz: boolean[][], fila: number, columna: number): number {
    let vacios: number = 0;
    for (let i: number = 0; i < fila; i++) {
        for (let j: number = 0; j < columna; j++) {
            if (matriz[i][j] == false)
                vacios++;
        }
    }
    return vacios;
}
//Inicio mi programa
cine = crearCine(filas, butacas);
cargarAleatorio(cine, filas, butacas);
console.log(cine);
console.log("La cantidad de butacas vacias es de: ", controlarVacios(cine, filas, butacas));