import * as rls from "readline-sync"
//Consulto la dimension de mi arreglo
let s: number = rls.questionInt("Ingrese la dimension del arreglo: ");
//Creo el arreglo con dicha dimension
let v: number[] = new Array(s);
//Lo cargo con valores
for (let i: number = 0; i < v.length; i++) {
    v[i] = rls.questionInt("Ingrese el valor de su posicion:");
}
//Creo un vector donde guardare el resultado con la misma dimension y tipo
let invertido: number[] = new Array(s);
//unifico las funciones 1 y 2 
function invertirVector(arr: number[], s: number) {
    let aux: number = 0;
    let i: number = 0;
    let d: number = s-1;
    while (i < d) {
        aux = arr[d];
        arr[d] = arr[i];
        arr[i] = aux;
        i++;
        d--;
    }
    return arr
}
console.log(v)
invertido = invertirVector(v, s);
console.log(invertido);
