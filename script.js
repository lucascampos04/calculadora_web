let calculadoraLigada = true;
let numeros = [];
let operador = '';

function adicionarNumero(numero) {
  if (calculadoraLigada) {
    numeros.push(numero);
    exibirNumeros();
  }
}

function adicionarOperador(op) {
  if (calculadoraLigada) {
    operador = op;
    exibirNumeros();
  }
}

function deletarUltimoNumero() {
  if (calculadoraLigada) {
    numeros.pop();
    exibirNumeros();
  }
}

function deletarTodosNumeros() {
  if (calculadoraLigada) {
    numeros = [];
    operador = '';
    exibirNumeros();
  }
}

function calcularResultado() {
  if (calculadoraLigada) {
    const num1 = parseFloat(numeros.join(''));
    const num2 = parseFloat(numeros.reverse().join(''));
    let resultado = 0;

    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
    }

    numeros = [resultado];
    operador = '';
    exibirNumeros();
  }
}

function ligarDesligar() {
  calculadoraLigada = !calculadoraLigada;
  numeros = [];
  operador = '';
  exibirNumeros();
}

function exibirNumeros() {
  const display = document.getElementById("barra_number");
  display.textContent = numeros.join('') + operador;
}
