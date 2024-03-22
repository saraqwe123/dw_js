# Variáveis 

## O QUE SÃO VARIÁVEIS?

São ferramentas utilizadas para armazenar dados, os dados podem vir pré definidos no código ou pelo usuário através de inputs, selects e outros...

## TIPOS DE VARIÁVEIS

### VAR 
Var era a única forma de criar variáveis no javascript. Entretanto, ela tem escopo de função, isso significa que, uma variável var só pode ser utilizada dentro da função onde a mesma foi criada. A não ser que ela tenha escopo global, dessa forma, podemos acessa-la em todo o código.

### Exemplos Var

``` javascript
var palavra = document.getElementbyId('sara').value
function print(palavra) {
    console.log(palavra)
}

// essa variável tem escopo global // 

var palavra = document.getElementbyId('sara').value
function print(palavra) {
    var palavra = document.getElementbyId('linda').value
    console.log(palavra)

 // essa variável tem escopo de função, pois palavra foi criada fora da função e palavra criada dentro, assim, o código só enxerga a variável palavra que existe dentro da função //

 var texto = 'sara'
 var texto = 'python'

 function print() {
    console.log(texto)
 }

 // nesse caso, o valor que será exibido na tela, é 'python', pois ele foi o último a ser criado //
}
```

### Exercícios Var

``` javascript
var linguagem = 'python'
var linguagem = 'js'

function print() {
    var linguagem = 'c++'
    console.log(linguagem)

//  qual será a saída desse código? c++ // 
}
```

### LET
Depois surgiram outras variáveis, uma delas é a let. As mesma, possue escopo de bloco, ou seja, só podem ser acessadas dentro do bloco onde foram criadas. Um bloco pode ser definido como tudo que há dentro de {}.

### Exemplos Let

``` javascript
let nome = 'sara'
let nome = 'guaiume'
console.log(nome)

// esse código irá exibir um erro, pois let armazena os valores das duas variáveis nome, diferente da var, que armazena apenas da última declarada //
```
``` javascript
let nome = 'sara'

{let nome = 'guaiume'
console.log(nome)}

//  esse código não irá gerar um erro, pois uma delas está sendo criada dentro de um bloco, na saída retornaria os dois valores, pois o let armazena todas as criações // 

```
### Exercício Let

``` javascript
let peso = '40'

{let peso = '70'
console.log(nome)}

// qual será a saída desse código? 40, 70 // 

```

### CONST
A const é muito parecida com a let, pois ambas tem escopo de bloco, mas a conts, como sua própria trdução diz, é constante, por isso, ela não pode ser alterada usando o operador =. Quando o conteúdo da const for um objeto ou um array, é possível remover ou adcionar novos elemtentos

*array: é como um guarda roupa, em uma gaveta vc guarda meias, na outra vc guarda calças...*

### Exemplos Const

``` javascript
const nome = 'sara'
nome = 'guaiume'
console.log(nome)

// esse código irá exibir um erro, pois const não pode ser alterada//
```

``` javascript
const lista = ['sara', 'linda']

lista.push('saras')
lista.push('lindas ')

// esse código será alterado, pois há um array//
```

### Exercício Const 

``` javascript
const lista = ['texto', 'peixe']

lista.push('gato')
lista.push('cachorro')

// qual será a saída desse código? gato, cachorro //
```



