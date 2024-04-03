function soma(a, b) {
    let total = a+ b 
    return total
}

const funcaoSoma = function(a, b) {
    return a + b
}
// armazenando a função em uma variável
//const funcaoMultiplicação = function(a,b)  a*b



console.log(soma(20, 10))
console.log(funcaoSoma(50, 50))
//console.log(funcaoMultiplicacao(20, 10))


function  operacao_v1(a, b, op) {
    if ((op) == "+" ) {
        return a + b
    } else if (op == "-") {
        return a - b
    } else if (op == "*") {
        return a - b
    } else if (op == "/") {
        return a / b
    } 

}

// op é o tipo de operação que deve ser chamada

let valor = operacao(10, 2, "*")
console.log(valor)

valor = operacao_v2(10, 2, funcaoMultiplicacao)

