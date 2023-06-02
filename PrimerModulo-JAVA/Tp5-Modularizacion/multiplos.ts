import * as rls from "readline-sync";

//Declaro funciones
function esMultiplo (dividendo: number, divisor: number){
let resultado: boolean; 
  if ((dividendo%divisor) == 0){
    resultado = true;
    return resultado;
  } else if ((dividendo%divisor) > 0){
    resultado = false;
    return resultado;
  } else if (divisor == 0){
    return "No se puede dividir por 0" 
  }
}

//Declaro Variables
let numero1: number = rls.questionInt("Ingrese el primer numero: ")
let numero2: number = rls.questionInt("Ingrese el segundo numero: ")

//Inicio del programa
console.log("El numero: ", numero1, "es multiplo del numero: ",numero2,"?");
console.log("La respuesta es: ",esMultiplo(numero1, numero2));