import * as rls from 'readline-sync';

let longitud: number = rls.questionInt("Ingrese la longitud deseada para su arreglo: ");

let nombres: string[] = new Array(longitud);

for (let i:number = 0; i < nombres.length; i++){
    nombres[i] = rls.question("Ingrese el nombre de la posicion " + i + " : ");
}
for (let i:number = 0; i < nombres.length; i++){
    console.log("El nombre de la posiocion " + i + " es: " + nombres[i]);
}
console.log(nombres);