const teste_numero = /^(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})$/; 
//expressao retirada através da leitura do material disponível para o projeto
const paragrafo = document.getElementById('parag');
const link = document.getElementById('span');


function verifica_numero(event) {
    console.log(event.target.id)
    const numero = document.getElementById('inumero')
    if (teste_numero.test(numero.value)) { 
        numero.classList.add('certo')
        let apenas_numero = ""
        for (let n of numero.value) {
// a exclamação inverte tudo
            if (!"()- ".includes(n)) { 
               apenas_numero += n
// pegando apenas os numeros para colocar no link
            }
        }
        const gera_link = `https://wa.me/${apenas_numero}` //criando o link 
        if(event.target.id === 'criar_link') {
            console.log('sara')
            link.innerText = gera_link
            paragrafo.style.display = "block"
            link.style.display = "block"

        }

    }
    //usamos o test para validar expressoes regulares. Neste caso, estamos verificando se o numero é regular
    else {
        numero.classList.add('erro')
    }
}

document.getElementById('criar_link').addEventListener('click', verifica_numero);
document.getElementById('envia_link').addEventListener('click', verifica_numero);


