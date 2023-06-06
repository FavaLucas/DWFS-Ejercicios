let contador = 0;

function contar() {
  contador++;
  document.getElementById("mensaje").innerHTML =
    "Usted ha presionado el boton " + contador + " veces";
  if (contador == 50) {
    contador = 0;
  }
}
