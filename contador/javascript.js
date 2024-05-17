const inputTexto = document.querySelector('#input')
const contador =  document.querySelector('.contador')
const btnContar = document.querySelector('#btn-contar')

let tipo = "caracteres"

btnContar.addEventListener("click", () => {
    if(tipo === "caracteres") {
        tipo = "Palavras";
        btnContar.textContent = "Contar Caracteres";
    } else {
        tipo = "Caracteres";
        btnContar.textContent = "Contar Palavras";
    }
    inputTexto.dispatchEvent(new Event("input"));
});

inputTexto.addEventListener("input", () => { //quando digitar algo no input
    let contar =0;

    if(tipo === "caracteres") {
        
        contar = inputTexto.value.length;
        contador.textContent = contar + "caractere(s)"

    } else { const palavra = inputTexto.value.trim().split(/\s+/);
    //divide a string em uma lista com base em seus espaços
        contar =palavra.length
        contador.textContent = contar + "Palavra(s)"
    }
})
