import * as rls from 'readline-sync'

//Declaro funciones
function pidoLimite() {
    let limite: number = rls.questionInt("Ingrese el tope de numeros que desea sumar: ");
    return limite;
}
function sumaNnumerosNaturales(n: number) {
    let resultado: number = 0;
    for (let i: number = 0; i <= n; i++) {
        resultado = resultado + i;
    }
    return resultado
}

//Inicio del programa
console.log("El resultado es: ", sumaNnumerosNaturales(pidoLimite()));