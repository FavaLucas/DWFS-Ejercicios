import * as rls from "readline-sync";
let butacas: number = rls.questionInt("Ingrese la cantidad de butacas que tiene el cine: ");
let cine: boolean[] = new Array(butacas);

//Funcion para cargar mi arreglo con valores aleatorios 0 (False/vacias) y 1 (true/ocupada)
function cargarAleatorio(cine: boolean[]) {
    for (let i: number = 0; i < cine.length; i++)
        if ((Math.floor(Math.random() * 2)) == 0) {
            cine[i] = false
        } else {
            cine[i] = true;
        }
}
//Cuanto la cantidad de False de mi vector para saber cuantas butacas vacias tengo
function controlarVacios(cine: boolean[]): number {
    let vacios: number = 0;
    for (let i: number = 0; i < cine.length; i++) {
        if (cine[i] == false)
            vacios++
    }
    return vacios;
}
//Inicio mi programa
cargarAleatorio(cine);
console.log(cine);
console.log("La cantidad de butacas vacias es de: ", controlarVacios(cine));