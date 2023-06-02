//Declaro funciones
function sumaNumerosNaturales() {
    var resultado = 0;
    for (var i = 0; i <= 20; i++) {
        resultado = resultado + i;
    }
    return resultado;
}
//Inicio del programa
console.log("El resultado de la suma es: ", sumaNumerosNaturales());
