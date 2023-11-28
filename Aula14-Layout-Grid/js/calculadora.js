var termo1 = "";         // 5
var termo2 = "";        // 6
var resultadoTela = ""; // 11
var operacao = ""; // + - * /
var botoes = document.querySelectorAll(".btn");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    var valorBotao = botao.innerHTML;
    botaoClicado(valorBotao);
    atulizarDisplay();
  });
});
function botaoClicado(valorBotao) {
  if (valorBotao === "C") {
    termo1 = "";
    termo2 = "";
    operacao = "";
    resultadoTela = "";
  } else if (!isNaN(valorBotao) || valorBotao === ".") {
    if (resultadoTela !== "") {
      termo1 = "";
      termo2 = "";
      operacao = "";
      resultadoTela = "";
    }
    if (operacao === "") {
      // Verifica se o termo1 já tem um ponto
      if (termo1.indexOf(".") === -1 && valorBotao === ".") {
        if (termo1 === "") {
          termo1 += "0";
        }
        termo1 += valorBotao;
      } else if (valorBotao !== ".") {
        termo1 += valorBotao;
      }
    } else {
      // Verifica se o termo1 já tem um ponto
      if (termo2.indexOf(".") === -1 && valorBotao === ".") {
        if (termo2 === "") {
          termo2 += "0";
        }
        termo2 += valorBotao;
      } else if (valorBotao !== ".") {
        termo2 += valorBotao;
      }
    }
  } else if (
    valorBotao === "+" ||
    valorBotao === "-" ||
    valorBotao === "*" ||
    valorBotao === "/"
  ) {
    if (termo1 !== "") {
      operacao = valorBotao;
    }
  } else if (valorBotao === "=") {
    if (termo1 !== "" && termo2 !== "" && operacao !== "") {
      var resultado = 0;
      if (operacao === "+") {
        resultado = parseFloat(termo1) + parseFloat(termo2);
      } else if (operacao === "-") {
        resultado = parseFloat(termo1) - parseFloat(termo2);
      } else if (operacao === "*") {
        resultado = parseFloat(termo1) * parseFloat(termo2);
      } else if (operacao === "/") {
        resultado = parseFloat(termo1) / parseFloat(termo2);
      }
      resultadoTela = resultado.toString();
      animar();
    }
  }
}
function animar() {
  var display = document.querySelector(".display");
  display.classList.add("animar");
  setTimeout(function () {
    display.classList.remove("animar");
  }, 1500);
}
function atulizarDisplay() {
  var display = document.querySelector(".display");
  display.innerHTML = termo1 + operacao + termo2;
  if (resultadoTela !== "") {
    display.innerHTML += "<br> = " + resultadoTela;
  }
}
//key press listener
document.addEventListener("keypress", function (event) {
  var tecla = event.key;
  if (tecla === "Enter") {
    tecla = "=";
  } else if (tecla === "Delete") {
    tecla = "C";
  }

  botaoClicado(tecla);
  atulizarDisplay();
});
