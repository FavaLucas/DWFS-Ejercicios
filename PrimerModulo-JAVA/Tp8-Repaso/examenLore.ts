//calcula el indice de la mejor venta de un vendedor
function calcularIndiceVentaMax (ventas:number []) :number {
    let indiceVentaMax:number = 0;
    for (let i:number = 0; i < ventas.length; i++) {
        if (ventas[i] > ventas[indiceVentaMax]){
            indiceVentaMax = i;
        }
    }
    return indiceVentaMax;
}

//calcula el indice de la peor venta de un vendedor
function calcularIndiceVentaMin (ventas:number[]):number {
    let indiceVentaMin:number = 0;
    for (let i:number = 0; i < ventas.length; i++) {
        if (ventas[i] < ventas[indiceVentaMin]){
            indiceVentaMin = i;
        }
    }
    return indiceVentaMin;
}

//calcula el primedio semanal de un vendedor
function calcularPromedioSemanal (ventas:number[]):number {
    let sumaVentas:number = 0;
    let promedioSemanal: number = 0;
    for (let i:number = 0; i < ventas.length; i++) {
           sumaVentas += ventas[i];
    }
    promedioSemanal = sumaVentas/ventas.length;
    return promedioSemanal;
}

//calcula el promedio mensual de un vendedor
function calcularPromedioMensual (ventas:number[]) {
    let sumaVentas:number = 0;
    let promedioMensual: number = 0;
    for (let i:number = 0; i < ventas.length; i++) {
           sumaVentas += ventas[i];
    }
    promedioMensual = sumaVentas/(ventas.length/4);
    return promedioMensual;
}

//funcion que dice que semana y mes es, segun un numero dado
function calcularSemanaMes (i: number):string {
    let semana: string = '';
    let mes: string = '';
    let semanaMes: string = '';
    if (i == 0 || i == 1 || i == 2 || i ==3) {
        mes = 'Enero';
    } else if (i == 4 || i == 5 || i == 6 || i ==7) {
        mes = 'Febrero';
    } else {
        mes = 'Marzo';
    }

    if (i == 0 || i == 4 || i == 8) {
        semana = '1° semana';
    } else if (i == 1 || i == 5 || i == 9) {
        semana = '2° semana';
    } else if (i == 2 || i == 6 || i == 10) {
        semana = '3° semana';
    } else {
        semana = '4° semana';
    }
    return semanaMes = semana + ' de ' + mes;
}

//defino un arreglo con los nombres de los vendedores
let vendedores: string[] = new Array(5);
vendedores = ['Camila', 'Franco', 'Sofia', 'Matias', 'Agustina'];

//defino una matriz con las ventas de los 5 vendedores
let ventas: number[][] = new Array(5);
ventas[0] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
ventas[1] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
ventas[2] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
ventas[3] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
ventas[4] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];

//defino un arreglo donde calculo las ventas trimestrales de cada vendedor
let sumaTotal: number [] = new Array(5);
for (let i: number = 0; i < 5; i++){
    let suma:number = 0;
    for (let j: number = 0; j < 12; j++){
        suma += ventas[i][j];
    }
    sumaTotal[i] = suma;
}

//defino una matriz donde calculo las ventas mensuales de cada vendedor
let sumaMensual: number [][] = new Array(5);
for (let i: number = 0; i < 5; i++) {
    sumaMensual[i] = new Array (3);
}
for (let vendedor: number = 0; vendedor < 5; vendedor++) {
    sumaMensual[vendedor][0] = ventas[vendedor][0] + ventas[vendedor] [1] + ventas[vendedor][2] + ventas[vendedor][3];
    sumaMensual[vendedor][1] = ventas[vendedor][4] + ventas[vendedor] [5] + ventas[vendedor][6] + ventas[vendedor][7];
    sumaMensual[vendedor][2] = ventas[vendedor][8] + ventas[vendedor] [9] + ventas[vendedor][10] + ventas[vendedor][11];
    }

//muestro los datos de cada vendedor
for (let i:number = 0; i < 5; i++) {
    let indiceVenta: number = 0;
    console.log ('');
    console.log ('RESULTADOS DE ' + vendedores[i].toUpperCase() + ':');
    indiceVenta = calcularIndiceVentaMax(ventas[i]);
    console.log('Venta Maxima: ' + calcularSemanaMes(indiceVenta) + ' por $ ' + ventas[i][indiceVenta]);
    indiceVenta = calcularIndiceVentaMin(ventas[i]);
    console.log('Venta Minima: ' + calcularSemanaMes(indiceVenta) + ' por $ ' + ventas[i][indiceVenta]);
    console.log('Promedio Semanal: ' + calcularPromedioSemanal(ventas[i]));
    console.log('Promedio Mensual: ' + calcularPromedioMensual(ventas[i]));
}

//muestro mejores y peores vendedores 

//Mejor vendedor de cada semana
for (let semana:number = 0; semana < 12; semana++){
    let iMejorVenSemanal = 0;
    for (let vendedor:number = 0; vendedor < 5; vendedor ++) {
        if (ventas[vendedor][semana] > ventas[iMejorVenSemanal][semana]){
            iMejorVenSemanal = vendedor;
        }
    }
    console.log ('');
    console.log('Mejores vendedores de cada semana: ')
    console.log ('Semana ' + (semana +1)+ ': ' + vendedores[iMejorVenSemanal] + ' - $' + ventas[iMejorVenSemanal][semana]);
}

//Mejor vendedor de cada mes
for (let mes:number = 0; mes < 3; mes++){
    let iMejorVenMensual = 0;
    for (let vendedor:number = 0; vendedor < 5; vendedor ++) {
        if (sumaMensual[vendedor][mes] > sumaMensual[iMejorVenMensual][mes]){
            iMejorVenMensual = vendedor;
        }
    }
    console.log ('');
    console.log('Mejores vendedores de cada mes: ')
    console.log ('Mes ' + (mes + 1) + ': ' + vendedores[iMejorVenMensual] + ' - $' + sumaMensual[iMejorVenMensual][mes]);
}

//peor vendedor de cada mes
for (let mes:number = 0; mes < 3; mes++){
    let iPeorVenMensual = 0;
    for (let vendedor:number = 0; vendedor < 5; vendedor ++) {
        if (sumaMensual[vendedor][mes] < sumaMensual[iPeorVenMensual][mes]){
            iPeorVenMensual = vendedor;
        }
    }
    console.log ('');
    console.log('Peores vendedores de cada mes: ')
    console.log ('Mes ' + (mes + 1) + ': ' + vendedores[iPeorVenMensual] + ' - $' + sumaMensual[iPeorVenMensual][mes]);
}

//peor vendedor del trimeste
let iPeorVenTrim = 0;
for (let vendedor:number = 0; vendedor < sumaTotal.length; vendedor++){
    if (sumaTotal[vendedor] < sumaTotal[iPeorVenTrim]){
        iPeorVenTrim = vendedor;
    }
}
console.log ('');
console.log('Peor vendedor trimestral: ')
console.log (vendedores[iPeorVenTrim] + ' - $' + sumaTotal[iPeorVenTrim]);
