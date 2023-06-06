function saludar() {
  // console.log("Hola!");
  // alert("Hola Mundo")
  document.getElementById("mensaje").innerHTML = "Hola!!!";
}

function quitarSaludo() {
  document.getElementById("mensaje").innerHTML = "Chau!!!";
}

function estirar (){
    document.getElementById("mensaje").innerHTML ="-";
}

function cambiaNombre() {
    alert("Su nombre se cambio satisfactoriamente !");
}

function ingresoTecla() {
    valor = document.getElementById("nombre").value;
    console.log("el valor hasta ahora es",value)
}