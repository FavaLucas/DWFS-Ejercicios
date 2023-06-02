import * as rls from 'readline-sync';

//Declaro Funciones
function cargaVectores(vec: number[], n: number) {
    for (let i: number = 0; i < n; i++) {
        vec[i] = rls.questionInt("A continuacion ingrese los valores correspondientes a su vector: ");
    }
}
function tipoDeNumeros(vec: number[], n: number) {
    let positivo: number = 0;
    let negativo: number = 0;
    let cero: number = 0;
    for (let i: number = 0; i < n; i++)
        if (vec[i] == 0) {
            cero = cero + 1;
        } else if (vec[i] < 0) {
            negativo = negativo + 1;
        } else if (vec[i] > 0) {
            positivo = positivo + 1;
        }
    console.log("La cantidad de ceros es de ", cero, ". La cantidad de positivos es de: ", positivo, ". La cantidad de negativos es de :", negativo)
}

//Declaro Variables
let dimension: number = rls.questionInt("Ingrese la longitud de su vectores: ");
let vector1: number[] = new Array(dimension);

//Inicio del programa
cargaVectores(vector1, dimension);
console.log ("Su vector es: ",vector1);
tipoDeNumeros(vector1, dimension);