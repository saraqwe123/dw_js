# Declaração/chamada de funções
## Vc pd declarar uma funça~utilizando "function"

```javascript
function soma(a, b) {
    return a + b;
}
```

## Vc pd atribuir uma função a uma variável ou constante

```javascript
const soma = function(a, b) {
    return a + b;
}
```
## Uma forma mais concisa de expressar uma função é utilizando  o ECMAScirpt 6. Arrow function = função de seta

```javascript
const soma = (a, b) => {
    return a = B;
}

```

## Arrow de função com retorno implícito, é igual a arrow function, mas sem as {}

```javascript
const soma = (a, b) => a + b

```

# Criando e Modificando Arrays 

## push

```javascript
let array = [1, 2, 3];
array.push(4)
//adc o 4 no final
```

## unshift 

```javascript
let array = [2, 3, 4]
array.unshift(1)
//adc no começo
```

## propagação
```javascript
let v1 = [1, 2, 3]
let v2 = [4, 5]
let newArray = [...v1. ...v2]
//cria um novo vetor que é igual a v1 + v2
```

## pop 
```javascript
let array = [1, 2, 3, 4]
array.pop()
console.log(array)
//remove o ultimo elemento
```

## shift 
```javascript
let array = [1, 2, 3, 4]
array.shift()
console.log(array)
//remove o primeiro elemento do array e a quantidade de elementos, para tirar a quantidade, da pra fazer assim
let array = [1, 2, 3, 4]
let removedElement = array.shift()
console.log(removedElement)
```
## splicer
```javascript
let array = [1, 2, 3, 4, 5, 6]
array.splice(2, 1)
//remove o elemento a partir do indice 2. se fosse (2, 2) ia remover o 4 e o 5
```

# Desestruturações
 ```javascript
const array = [1, 2, 3]
const [a, b, c] = array
console.log(a)
```

shift