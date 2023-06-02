/*cuantos dados tiene?
probabilidad de sacar 6 = 1/6

probabilidad con N dados = 1/6 * 1/6 * 1/6 *N veces segun dados tenga
*/

import * as rls from "readline-sync";

let cantidadDados: number = rls.questionInt("Cuantos dados va a tirar: ");
let probabilidad: number = 1/6;
let probabilidadTotal: number = 1

for (let i: number = 1; i <= cantidadDados; i++){
    probabilidadTotal = probabilidadTotal * probabilidad;
}
console.log("Por la cantidad de dados que tirar, la probabilidad de sacar todos 6 es de: ", probabilidadTotal);

