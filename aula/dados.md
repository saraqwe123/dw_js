# Dados 

## O que são dados?
Dados referem-se a informações que são manipuladas e processadas pelo código.

## Tipos de dados

### Objeto
São dados que possuem suas próprias propriedades/características. Por exemplo, o "objeto" carro, possui tamanho, cor, tipo de combustível e etc. (todos os obj são únicos).

## Exemplo
```javascript
carro = {
    cor: 'vermelha', 
    ano: 2006,
    combustivel: 'alcool'
}

console.log(carro.ano, carro.cor, carro.combustivel)
console.log(carro)
console.log(carro.combustivel)
carro.novaprop = 'valor' // adc atributo
carro['novaprop'] = 'valor'
delete carro.combustivel 
```

### Inteiros
Os inteiros são dados formados por números. Por exemplo, uma variável que armazena o valor 4, é do tipo inteira.

```javascript
let numero = 4
console.log(numero)
console.log(typeof numero)
```

### Strings
As strings são letras, palavras ou frases.

```javascript
let texto = 'sara'
console.log(sara)
console.log(typeof texto)

let partes = 'um, dois, tres, quatro'

partes.splice(',')
// 'um', 'dois', 'tres', 'quatro'

let partes = 'hello world'
partes.substring(0, 5)
//hello
partes.substring(7)
//world

let str = 'sara maravilhosa'
let nova = str.replace('maravilhosa', 'perfeita')
//sara perfeita
```

### Array
É uma lista. O array é como um guarda roupa, em uma gaveta vc guarda meias, na outra vc guarda calças.

```javascript
let padaria = ['pao', 'queijo', 'pao de queijo', 'suco de laranja']
console.log(padaria)
console.log(padaria[3])
console.log(padaria[0]+padaria[2])
padaria.splice(1, 2)
//pao, suco de laranja

let sara = padaria.slice(1, 3)
queijo, pao de queijo
sara.pop()
//remove o ultimo elemento
```

### Boleano
Podemos dizer que os dados boleanos servem para verificar se aquilo é falso ou verdadeiro.



