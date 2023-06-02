//Declaro funciones
function sumaNumerosNaturales (): number {
    let resultado: number = 0;
    for (let i:number = 0; i<=20; i++){
        resultado = resultado + i;
    }
    return resultado     
}
//Inicio del programa
console.log("El resultado de la suma es: ",sumaNumerosNaturales());
