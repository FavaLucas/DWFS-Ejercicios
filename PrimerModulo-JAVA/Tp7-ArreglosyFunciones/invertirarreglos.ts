import * as rls from 'readline-sync';
//Declaro funciones
function cargaVectores(vec: number[], n: number) {
    for (let i: number = 0; i < n; i++) {
        vec[i] = rls.questionInt("Ingrese el valor: ");
    }
}
function mostrarVectorInvertido(vec: number[], n: number) {
    for (let i: number = n - 1; i >= 0; i--) {
        console.log(vec[i]);
    }
}
function invertirVector(vec: number[], n: number) {
    let aux: number = 0;
    let indiceizq: number = 0;
    let indiceder: number = n-1;
    while (indiceizq < indiceder) {
        aux = vec[indiceder];
        vec[indiceder] = vec[indiceizq];
        vec[indiceizq] = aux;
        indiceizq++;
        indiceder--;
    }
}
//Declaro Variables
let dimension: number = rls.questionInt("Ingrese la longitud de los vectores: ");
let vector: number[] = new Array(dimension);

//Inicio del programa
cargaVectores(vector, dimension);
console.log("Su vector es: ",vector);
console.log("Ahora invertiremos su vector");
invertirVector(vector, dimension);
console.log("Su vector invertido es: ",vector);
console.log("------------------------------");
mostrarVectorInvertido(vector, dimension);
