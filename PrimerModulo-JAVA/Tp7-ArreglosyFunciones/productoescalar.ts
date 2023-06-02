import * as rls from 'readline-sync';

//Declaro Funciones
function cargaVectores(vec: number[], n: number) {
    for (let i: number = 0; i < n; i++) {
        vec[i] = rls.questionInt("A continuacion ingrese los valores correspondientes a su vector: ");
    }
}
function productoEscalar(vec1: number[], vec2:number[], n: number): number {
    let acumulador: number = 0;
    let i: number = 0;
    for (i; i<n; i ++){
        acumulador = acumulador + (vec1[i]*vec2[i]);
    }
    return acumulador;
}

//Declaro Variables
let dimension: number = rls.questionInt("Ingrese la dimension de los arreglos: ");
let vector1: number[] = new Array(dimension);
let vector2: number[] = new Array(dimension);
let resultado: number;

//Inicio del Programa
cargaVectores(vector1, dimension);
console.log("El vector es: ", vector1);
cargaVectores(vector2, dimension);
console.log("El vector es: ", vector2);
resultado = productoEscalar(vector1, vector2, dimension);
console.log("El productor escalar de los vectores es: ",resultado);
