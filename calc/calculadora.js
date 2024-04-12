/****************************************************************
 * Seleção dos elementos HTML
 ****************************************************************/
// Botões
const btnBotoes = document.querySelectorAll("[btn-numero]"); //tenho varios botoes n apenas um, por isso usa o all
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]"); //consigo adc por id class por td
const btnDelete = document.querySelector("[btn-delete]"); //[] esse elemento esta sendo capturado pelo conteudose fosse pelo id ia colocar # ou class .
const btnAC = document.querySelector("[btn-ac]");


// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "", //array pra conseguir remover pelo indice
  operandoAtual: "", 
  operador: "",
  bufferTextoElemento: bufferElemento, // DIV buffer
  displayTextoElemento: displayElemento, // DIV display
};

/****************************************************************
 * Associar funções aos eventos dos elementos HTML
 ****************************************************************/
// Botão AC
btnAC.addEventListener("click", () => { //estou definindo a função no click do botão, to chamando 
  limpaVariaveis(calculadora);          //limpaVariaveis. 
});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
});

// Botões dos números
// of pra percorrer todos os elementos
for (let elemento of btnBotoes) {
    elemento.addEventListener("click", () => {
        adicionaNumero(calculadora, elemento.innerText)
    })
}


// Botões dos operadores
for (let elementos of btnOperacoes) {
    elementos.addEventListener("click", () => {
        escolheOperador(calculadora, elementos.innerText)
    })
}

/****************************************************************
 * Regras da aplicação
 ****************************************************************/

/* Atualiza o display da calculadora.
 *  A atualização consiste em atualizar os elementos HTML buffer e display
 *  O elemento buffer é atulizado com o atributo operandoAnterior
 *  O elemento display é atualizado com o atributo operandoAtual
 */
function atualizaDisplay(calculadora) {
    calculadora.bufferTextoElemento.innerText = calculadora.operandoAnterior
    calculadora.displayTextoElemento.innerText = calculadora.operandoAtual

}


/* Limpa os atributos do objeto calculadora e atualiza o display.
 * Para atualizar o dispay, chame a função responsável por isso.
 */
function limpaVariaveis(calculadora) {
  calculadora.operandoAnterior = ''
  calculadora.operandoAtual = ''
  calculadora.operador = ''
  atualizaDisplay(calculadora)
}

/* Função chamada quando um botão de número é pressionado
 * A função recebe o objeto calculadora e o número a ser exibido no display.
 * - Adiciona um dígito no atributo operandoAtual e atualiza o display
 * O dígito "." deve receber um tratamento especial
 */
function adicionaNumero(calculadora, numero) {
    calculadora.operandoAtual = calculadora.operandoAtual + numero
    atualizaDisplay(calculadora)

}

/* Função chamada quando um botão de operador é pressionado
* Essa função tem comportamentos diferentes dependendo do estado da calculadora.
* Se o operandoAnterior e o operandoAtual estiverem preenchidos
* - executar o cálculo (chamar outra função para realizar o cálculo).
 * Caso o operandoAnterior estiver vazio,
 * - armazenar o operador recebido por parâmetro no atributo operador do objeto calculadora.
 * - copiar operandoAtual para o operandoAnterior, deixando a calculadora preparada para receber o próximo número
 */
function escolheOperador(calculadora, operador) {
  calculadora.operador = operador
  calculadora.operandoAnterior = calculadora.operandoAtual + calculadora.operador
  calculadora.operandoAtual = ""
    atualizaDisplay(calculadora)

}

/* A função recebe o objeto calculadora e executa o calculo
 * - Verificar a operação a ser executada
 * - Executar a operação
 * - Atualizar os atributos operador, operandoAnterior e operandoAtual
 * - Atualizar o display
 */
function executaCalculo(calculadora, calculo) {
  if (calculadora.operador == "+") {
    calculadora.operador =''
    calculo = (calculadora.operandoAnterior + calculadora.operandoAtual)
    calculadora.operandoAtual = calculo
    calculadora.operandoAnterior = ''
  } 
  else if (calculadora.operador == "-") {
    calculo = calculadora.operandoAnterior - calculadora.operandoAtual
    calculadora.operandoAtual = calculo
    calculadora.operandoAnterior = ''
  }
 else if (calculadora.operador == "*") {
    calculo = calculadora.operandoAnterior * calculadora.operandoAtual
    calculadora.operandoAtual = calculo
    calculadora.operandoAnterior = ''
  }
 else if (calculadora.operador == "÷") {
    calculo = calculadora.operandoAnterior / calculadora.operandoAtual
    calculadora.operandoAtual = calculo
    calculadora.operandoAnterior = ''
  }
  else {
    alert('Falha')
    return
  }
  atualizaDisplay(calculadora)
}
  
/* Função chamada quando o botão delete for pressionado
 * Apaga o último dígito digitado no
 */
function apagaDigito(calculadora) {
    let apagaNumero = calculadora.operandoAtual.split('')
    calculadora.operandoAtual = apagaNumero.shift()
    atualizaDisplay(calculadora)
}
