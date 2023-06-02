import * as rls from 'readline-sync'

//Declaracion de variables
let numero1: number = rls.questionFloat("Ingrese Numero 1: ");
let numero2: number = rls.questionFloat("Ingrese Numero 2: ");
let opcion: number = rls.questionFloat("Ingrese opcion,  1 para sumar, 2 para restar o cualquier tecla para salir: ");
let longitud: number = rls.questionFloat("Ingrese la longitud que quiera tomar: ");

//Declaracion de funciones
function dibujarGuionesN (n: number){
    let i: number;
    let linea: string ="";
    for (i=0; i<n; i++){
        linea = linea + "-";
    }
    console.log(linea);
}

//Inicio del programa
if (opcion==1){
    dibujarGuionesN(longitud);
    console.log("El resultado de la suma es:" ,numero1 + numero2);
    dibujarGuionesN(longitud);

}else if (opcion==2){
    dibujarGuionesN(longitud);
    console.log("El resultado de la resta es: ",numero1 - numero2);
    dibujarGuionesN(longitud);
    
}else if ((opcion!=1) && (opcion!=2)){
    console.log("Ha pulsado una operacion invalida, vuelva a ingresar.")
}

