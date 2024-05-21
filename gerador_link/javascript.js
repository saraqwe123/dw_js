const teste_numero = /\d{11}/
//expressao retirada através da leitura do material disponível para o projeto
const paragrafo = document.getElementById('parag');
const link = document.getElementById('span');
const numero = document.getElementById('inumero')
let aba_link = ""
function verifica_numero(event) {
    let apenas_numero = ""
    for (let n of numero.value) {
        // a exclamação inverte tudo
        if (!"()- ".includes(n)) {
            console.log(numero.value)
            if (!isNaN(n)) {
                apenas_numero += n
         } // pegando apenas os numeros para colocar no link
        }
        aba_link = apenas_numero
    }
    if (teste_numero.test(apenas_numero)) {
        numero.classList.add('certo')
        numero.classList.remove('erro')
        let formatado = `(${apenas_numero.substring(0, 2)}) ${apenas_numero.substring(2, 7)}-${apenas_numero.substring(7, 12)}`
        numero.value = formatado
        const gera_link = `https://wa.me/${apenas_numero}` //criando o link 
        if (event.target.id === 'criar_link') {
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


function copiar_link() {
    const link_criado = link.innerText;         // .writeText(link_criado) copiando o texto p lá
    navigator.clipboard.writeText(link_criado) // navigator.clipboard chamando a api
        .then(() => paragrafo.innerText = "link copiado para a área de transferência") //.then se a promise for bem sucedida
        .catch(err => console.error('Erro ao copiar link: ', err)); //.catch se houver uma falha na promise
}

function input(event) {
    if (event.target == numero) {
        console.log('input', event)
        paragrafo.style.display = "none"
        link.style.display = "none"
        paragrafo.innerText = "clique no link para copiar"
    }
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

const btn = document.querySelector("#envia_link");
btn.addEventListener('click', function () {
    if (aba_link.length === 11) {
        numero.classList.remove('erro')
        const url = `https://wa.me/${aba_link}`  // Corrigido para pegar o link atualizado
        openInNewTab(url);
    }
});

document.getElementById('inumero').addEventListener('click', input);
document.getElementById('inumero').addEventListener('input', input);
document.getElementById('inumero').addEventListener('input', verifica_numero);
document.getElementById('criar_link').addEventListener('click', verifica_numero);
document.getElementById('envia_link').addEventListener('click', verifica_numero);
link.addEventListener('click', copiar_link);

