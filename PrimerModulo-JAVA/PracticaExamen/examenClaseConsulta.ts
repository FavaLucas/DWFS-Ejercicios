//Defino un arreglo unidimensional donde guardo los nombres de mis 5 vendedores
let vendedores: string[] = ["Andres", "Marianela", "Sandra", "Marcos", "Adriana"];

let matriz: number[][] = [
    [33558, 36165, 34240, 39273, 34360, 21347, 20817, 21494, 23062, 31908, 31369, 30658],
    [27541, 32480, 25053, 34823, 32942, 38477, 23757, 21422, 26699, 22045, 25625, 25866],
    [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25168, 26759, 29793, 36218],
    [27243, 38777, 21346, 30691, 27542, 39771, 31807, 31641, 18850, 39837, 40182, 28006],
    [32687, 25217, 26844, 37033, 35244, 25702, 25781, 35525, 34874, 34841, 20563, 23540]
]

//Funcion ASasasdasdasd
function promedioMensual(ventas: number[], nombre: string): any[] {
    let promedioMes: number[] = []
    let sumaPremioMes: number = 0;
    let suma: number = 0;
    let mes: number = 0;
    for (let columna: number = 0; columna < ventas.length; columna++) {
        suma += ventas[columna];
        if (columna != 0 && (columna + 1) % 4 == 0) {
            promedioMes[mes] = suma / 4;
            mes++;
            if (suma >= 110000 && suma <= 125000) {
                console.log(nombre, " Obtuvo un premio de $10.000 en el mes ", mes);
                sumaPremioMes += 10000;
            } else if (suma > 125000) {
                console.log(nombre, " Obtuvo un premio de $20.000 en el mes ", mes);
                sumaPremioMes += 20000;
            }
            suma = 0;
        }
    }
    //retorno un array(promedioMes) y un dato numerico(sumaPremioMes) y lo guardo en la const resul[] que tambien es un array tipo any
    return [promedioMes, sumaPremioMes]
}
let sumaGastoEmpresa: number = 0;
for (let fila = 0; fila < matriz.length; fila++) {
    const result: any[] = promedioMensual(matriz[fila], vendedores[fila]);
    sumaGastoEmpresa += result[1];
    console.log("El promedio de mesual es de:", vendedores[fila], "es de:", result[0]);
    console.log("--------------------------------------------------------------------");
}

console.log("La empresa gasto:", sumaGastoEmpresa, "en premios totales en los premios")

console.log("--------------------------------------------------------------------");

//Funcion que recibe como parametro una fila unica de mi matriz y devuelve un promedio
function promedioSemanal(ventas: number[]): number {
    let suma: number = 0;
    for (let columna: number = 0; columna < ventas.length; columna++) {
        suma += ventas[columna];
    }
    return suma / ventas.length;
}

for (let fila = 0; fila < matriz.length; fila++) {
    const promedio: number = promedioSemanal(matriz[fila]);
    console.log("El promedio semanal de:", vendedores[fila], "es de:", promedio);
}
console.log("--------------------------------------------------------------------");