import * as rls from "readline-sync";

let sueldoActual: number = rls.questionInt("Ingrese su sueldo actual: ");
let sueldoConAumento: number = 0;

if ((0 <= sueldoActual) && (sueldoActual <= 15000)){
    sueldoConAumento = sueldoActual*1.20;
    console.log("Ha recibido un 20% de aumento, su nuevo sueldo es: ", sueldoConAumento);
}else if ((15001 <= sueldoActual) && (sueldoActual <= 20000)){
    sueldoConAumento = sueldoActual*1.10;
    console.log("Ha recibido un 10% de aumento, su nuevo sueldo es: ", sueldoConAumento);
}else if ((20001 <= sueldoActual) && (sueldoActual <= 25000)){
    sueldoConAumento = sueldoActual*1.05;
    console.log("Ha recibido un 5% de aumento, su nuevo sueldo es: ", sueldoConAumento);
}else {
    console.log ("No ha recibido aumento");
}