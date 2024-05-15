const teste_numero = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/; //expressao retirada através da leitura do material disponível para o projeto

function verifica_numero() {
    const numero = document.getElementById('inumero')
    if ( teste_numero.test(numero.value)) { 
        console.log(numero)
        numero.classList.add('aparecer')
        console.log(numero)
    }
    //usamos o test para validar expressoes regulares. Neste caso, estamos verificando se o numero é regular
    else {
        alert('Por favor, digite um número válido!')
    }
}

document.getElementById('criar_link').addEventListener('click', verifica_numero);
document.getElementById('envia_link').addEventListener('click', verifica_numero);