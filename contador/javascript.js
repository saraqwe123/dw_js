const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")


let contagemCaracteres = True

const conta_caracteres = (evento) => {
    console.log(evento.target.value)
}


function conta_caracteres(evento) {
    if(contagemCaracteres) {
        evento.target.innerText = 'Contar palavras'
    } else {
        evento.target.innerText = 'Contar caracteres'
    }
} 


btnContar.addEventListener("click", conta_caracteres) //função resposnsável por capturar evento e tem 2 parametros
