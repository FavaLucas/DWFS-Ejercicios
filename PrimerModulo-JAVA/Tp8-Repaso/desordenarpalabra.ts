import * as rls from "readline-sync";

const palabras: string[] = new Array(29);
palabras[0] = 'enciclar';
palabras[1] = 'fugitivo';
palabras[2] = 'abordaje';
palabras[3] = 'atravesar';
palabras[4] = 'balancear';
palabras[5] = 'compartir';
palabras[6] = 'descubrir';
palabras[7] = 'empujar';
palabras[8] = 'felicidad';
palabras[9] = 'generador';
palabras[10] = 'habitante';
palabras[11] = 'ilusion';
palabras[12] = 'jornada';
palabras[13] = 'justicia';
palabras[14] = 'kilometro';
palabras[15] = 'laborioso';
palabras[16] = 'malvado';
palabras[17] = 'navegador';
palabras[18] = 'observar';
palabras[19] = 'palacio';
palabras[20] = 'querencia';
palabras[21] = 'rechazar';
palabras[22] = 'sorpresa';
palabras[23] = 'tamborileo';
palabras[24] = 'urgente';
palabras[25] = 'valorar';
palabras[26] = 'xenofobia';
palabras[27] = 'yacimiento';
palabras[28] = 'zambullir';

//Funcion para desordenar la palabra
function desordenarPalabra(palabraOrdenada: string): string {
  //La palabra elegida la transformamos en un arreglo para poder cambiar las letras de orden
  let arrPalabra: string[] = new Array(palabraOrdenada.length);
  for (let i: number = 0; i < palabraOrdenada.length; i++) {
    arrPalabra[i] = palabraOrdenada[i];
  }

  for (let i: number = 0; i < arrPalabra.length; i++) {
    let auxLetra: string = "";
    let indiceAleatorio: number = Math.random() * arrPalabra.length;
    indiceAleatorio = Math.floor(indiceAleatorio);
    //i es el indice actual de la letra
    //indiceAleatorio es el indice de la letra que voy a intercambiar
    auxLetra = arrPalabra[i]
    arrPalabra[i] = arrPalabra[indiceAleatorio];
    arrPalabra[indiceAleatorio] = auxLetra;
  }
  let palabraDesordenada: string = "";
  for (let i: number = 0; i < arrPalabra.length; i++) {
    palabraDesordenada += arrPalabra[i];
  }
  return palabraDesordenada;
}


//Elijo un indice aleatorio
let indiceAleatorio: number = Math.random() * palabras.length;
indiceAleatorio = Math.floor(indiceAleatorio);

//Selecciono la palabra dentro de mi arreglo
let palabraJugar: string = palabras[indiceAleatorio];
//Guardo la palabra elegida, pero desordenada en mi nueva variable para jugar
let palabraDesordenadaJugar: string = desordenarPalabra(palabraJugar);

let acerto: boolean = false;
let intentos: number = 0;

while (!acerto && intentos < 10) {
  console.clear();
  console.log("Su palabra desordenada es: " + palabraDesordenadaJugar);
  console.log("Tiene " + (10 - intentos) + " intentos.");
  let palabraIngresada = rls.question("Escriba la palabra ordenada: ");


  if (palabraIngresada == palabraJugar) {
    acerto = true;
  } else {
    intentos++;
  }
}

if (acerto) {
  console.log("Felicitaciones gano!")
} else {
  console.log("Perdio")
}

