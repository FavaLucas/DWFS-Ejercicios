import * as rls from "readline-sync";

//Declaracion de Funciones
function calcularPromedio (numero1: number, numero2: number, numero3: number): number{
    let promedio: number = 0;
    promedio = (numero1 + numero2 + numero3)/3
    return promedio
}
//Declaracion de Variables Globales
let n1, n2, n3: number = 0;


//Inicio del Programa
n1 = rls.questionInt("Ingreso el primer valor: ");
n2 = rls.questionInt("Ingreso el segundo valor: ");
n3 = rls.questionInt("Ingreso el tercer valor: ");

console.log("El promedio de los 3 valores ingresados es: ",calcularPromedio(n1, n2, n3));

 