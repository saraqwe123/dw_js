let input = document.getElementById("itarefa")
let criadas = document.getElementById("tarefas_criadas")
let feitas = document.getElementById("tarefas_concluidas")
let formulario = document.getElementById("formulario");
let lista = document.querySelector("imagem")

let tarefas = []

function conta_tarefas (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    if (input.value.trim() !== "") {
        let novaTarefaJSON = { "tarefa": input };
        tarefas.push(input.value)
        criadas.innerText = "Tarefas Criadas" + " " + tarefas.length
        input.value = ""
    }
}

formulario.addEventListener("submit", conta_tarefas);

function mostrar_tarefas(event) {
    event.preventDefault(); 

    if (tarefas.length !== 0) {
        console.log(tarefas.length)
        lista.remove()
    }
}


formulario.addEventListener("submit", mostrar_tarefas);