const teste_numero = /\d{11}/
//expressao retirada através da leitura do material disponível para o projeto
const paragrafo = document.getElementById('parag');
const link = document.getElementById('span');
const numero = document.getElementById('inumero')

function verifica_numero(event, apenas_numero) {
    console.log(event.target.id)
    var apenas_numero = ""
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
    if (event.target.id === "inumero") {
        paragrafo.style.display = "none"
        link.style.display = "none"
    }
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

const btn = document.querySelector("#envia_link");
btn.addEventListener('click', function() {
    const url = `https://wa.me/${numero.value}`  // Corrigido para pegar o link atualizado
    console.log("Abrindo em nova aba:", url);
    openInNewTab(url);
});

document.getElementById('inumero').addEventListener('input', verifica_numero)
document.getElementById('criar_link').addEventListener('click', verifica_numero);
document.getElementById('envia_link').addEventListener('click', verifica_numero);
document.getElementById('inumero').addEventListener('input', input);
link.addEventListener('click', copiar_link);

