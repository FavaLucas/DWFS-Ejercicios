//Defino un arreglo unidimensional donde guardo los nombres de mis 5 trabajadores
let nombres: string[] = ["Andres", "Marianela", "Sandra", "Marcos", "Adriana"];
//Defino mi matriz con la cantidad de productos que elaboro cada trabajador
let cosas: number[][] = [
    [33558, 36165, 34240, 39273, 34360, 21347, 20817, 21494, 23062, 31908, 31369, 30658],
    [27541, 32480, 25053, 34823, 32942, 38477, 23757, 21422, 26699, 22045, 25625, 25866],
    [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25168, 26759, 29793, 36218],
    [27243, 38777, 21346, 30691, 27542, 39771, 31807, 31641, 18850, 39837, 40182, 28006],
    [32687, 25217, 26844, 37033, 35244, 25702, 25781, 35525, 34874, 34841, 20563, 23540]
]

function evaluarSemanas(matriz: number[][], arreglo: string[]) {
    //El for va a dejar fija la columna por que se va a evaluar a todos los operadores en la misma semana
    console.log(matriz);

    for (let semana: number = 0; semana < matriz.length; semana++) {
        for (let operador: number = 0; operador < 4; operador++) {
            matriz[semana][operador] = 1;
            console.log(matriz)
        }
    }
}


//Ejercicio F
let tablero: number[][] = [
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7]
]
evaluarSemanas(tablero, nombres);
evaluarSemanas(cosas, nombres);
console.log("--------------------------------------------------------------------------------------------------------------------------");
