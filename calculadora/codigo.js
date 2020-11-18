var btn1 = document.getElementById("btnSuma");
var btn2 = document.getElementById("btnResta");
var btn3 = document.getElementById("btnMult");
var btn4 = document.getElementById("btnDiv");

var resultado = document.getElementById("resultado");

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btn1.addEventListener("click", function () {
  var n1 = inputUno.value;
  var n2 = inputDos.value;

  resultado.innerHTML = suma(n1, n2);
});
btn2.addEventListener("click", function () {
  var n1 = inputUno.value;
  var n2 = inputDos.value;

  resultado.innerHTML = resta(n1, n2);
});
btn3.addEventListener("click", function () {
  var n1 = inputUno.value;
  var n2 = inputDos.value;

  resultado.innerHTML = mult(n1, n2);
});
btn4.addEventListener("click", function () {
  var n1 = inputUno.value;
  var n2 = inputDos.value;

  resultado.innerHTML = div(n1, n2);
});


function suma(n1, n2) {
  return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
  }

  function mult(n1, n2) {
    return parseInt(n1) * parseInt(n2);
  }

  function div(n1, n2) {
    return parseInt(n1) / parseInt(n2);
  }

