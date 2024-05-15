const teste_numero = /\d{11}/
//expressao retirada através da leitura do material disponível para o projeto
const paragrafo = document.getElementById('parag');
const link = document.getElementById('span');


function verifica_numero(event) {
    console.log(event.target.id)
    const numero = document.getElementById('inumero')
    let apenas_numero = ""
    for (let n of numero.value) {
// a exclamação inverte tudo
        if (!"()- ".includes(n)) { 
           apenas_numero += n
// pegando apenas os numeros para colocar no link
        }
    }
    if (teste_numero.test(apenas_numero)) { 
        numero.classList.add('certo')
        numero.classList.remove('erro')
    
        
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
        numero.classList.remove('certo')
    }
}
document.getElementById('inumero').addEventListener('input', verifica_numero)
document.getElementById('criar_link').addEventListener('click', verifica_numero);
document.getElementById('envia_link').addEventListener('click', verifica_numero);


