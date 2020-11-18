var btn1 = document.getElementById("random");

var resultado = document.getElementById("resultado");

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btn1.addEventListener("click", function () {
  var n1 = inputUno.value;
  var n2 = inputDos.value;

  resultado.innerHTML = random(n1, n2);
});

function random(n1, n2) {

  return  parseInt(Math.floor(Math.random() * parseInt(n2-1)) + parseInt(n1));
}
