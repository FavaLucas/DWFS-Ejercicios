import * as rls from 'readline-sync';
//Declaro funciones
function cargaVectores(vec: number[], n: number) {
    for (let i: number = 0; i < n; i++) {
        vec[i] = rls.questionInt("A continuacion ingrese los valores correspondientes a su vector: ");
    }
}
function sumaVectores(vec1: number[], vec2: number[], sumavec: number[], n: number) {
    for (let i: number = 0; i < n; i++) {
        sumavec[i] = vec1[i] + vec2[i];
    }
}

//Declaro variables
let dimension: number = rls.questionInt("Ingrese la longitud de los vectores a sumar: ");
let vector1: number[] = new Array(dimension);
let vector2: number[] = new Array(dimension);
let resultadoSuma: number[] = new Array(dimension);

//Inicio del Programa
cargaVectores(vector1, dimension);
console.log(vector1);
cargaVectores(vector2, dimension);
console.log(vector2);
sumaVectores(vector1, vector2, resultadoSuma, dimension);
console.log ("El resultado de la suma de sus vectores es: ",resultadoSuma);

