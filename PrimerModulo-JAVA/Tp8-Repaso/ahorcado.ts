import * as rls from "readline-sync";

const palabras: string[] = [
  'enciclar',
  'fugitivo',
  'abordaje',
  'atravesar',
  'balancear',
  'compartir',
  'descubrir',
  'empujar',
  'felicidad',
  'generador',
  'habitante',
  'ilusion',
  'jornada',
  'justicia',
  'kilómetro',
  'laborioso',
  'malvado',
  'navegador',
  'observar',
  'palacio',
  'querencia',
  'rechazar',
  'sorpresa',
  'tamborileo',
  'urgente',
  'valorar',
  'xenofobia',
  'yacimiento',
  'zambullir'
];

function imprimirTablero(arreglo: string[]) {
  let imprimir: string = "";
  for (let i: number = 0; i < arreglo.length; i++) {
    imprimir += " " + arreglo[i];
  }
  console.log(imprimir);
}

//Elijo un indice aleatorio
let indiceJuego: number = Math.random() * palabras.length;
indiceJuego = Math.floor(indiceJuego);

//Con el indice anterior elijo una palabra dentro de mi arreglo
let palabraJugar: string = palabras[indiceJuego];
const longitudPalabra: number = palabraJugar.length;
let intentos: number = 0;

//Inicializo mi tablero con guiones
const tablero: string[] = new Array(longitudPalabra);
for (let i: number = 0; i < tablero.length; i++) {
  tablero[i] = "_";
}

console.log("Bienvenido a Ahorcado 1.0")
let usuarioGanador: boolean = false;
while (intentos < 6 && !usuarioGanador) {
  console.log("Tiene " + (6 - intentos) + " intentos");
  imprimirTablero(tablero);
  let letra: string = rls.question("Ingrese letra: ");

  //Recorro la palabra letra por letra, si encuentro la letra actualizo el tablero 
  //y seteo acertoLetra en true
  let acertoLetra: boolean = false;
  for (let i: number = 0; i < palabraJugar.length; i++) {
    const lectraActual: string = palabraJugar[i];
    if (letra.toLowerCase() == lectraActual) {
      tablero[i] = letra;
      acertoLetra = true;
    }
  }

  //Si no acerto, se incrementa intentos usados
  if (!acertoLetra) {
    intentos++;
  }

  //Evaluo si queda algun guion en el tablero
  let hayGuion: boolean = false;
  for (let i: number = 0; i < tablero.length; i++) {
    if (tablero[i] == "_") {
      hayGuion = true;
    }
  }
   //Actualizo usuario ganador dependiendo si no hay guion
   usuarioGanador = !hayGuion;
}

//Evaluo resultado cuando termina el while
if (usuarioGanador) {
  console.log("");
  console.log("");
  console.log("Felicitaciones su palabra era: " + palabraJugar);
} else {
  console.log("");

  console.log("");
  console.log("Perdio, suerte la proxima ");
}
