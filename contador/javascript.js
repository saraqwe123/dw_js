const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divContador = document.querySelector("[txt-contador]")

let tipo = "caracteres"
inputTexto.addEventListener("input", (evento) => {

    if(tipo === "caracteres") {
        let contar = evento.target.value.lenght;
        divContador.innerText = contar; 
    } else {

    }
})