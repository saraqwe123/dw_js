let input = document.getElementById("itarefa")
let criadas = document.getElementById("tarefas_criadas")
let feitas = document.getElementById("tarefas_concluidas")
let formulario = document.getElementById("formulario");

let tarefas = []

function conta_tarefas (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    if (input.value.trim() !== "") {
        let novaTarefaJSON = { "tarefa": input };
        tarefas.push(input.value)
        criadas.innerText = "Tarefas Criadas" + " " + tarefas.length
    }
}

formulario.addEventListener("submit", conta_tarefas);