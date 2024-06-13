let input = document.getElementById("itarefa")
let criadas = document.getElementById("tarefas_criadas")
let feitas = document.getElementById("tarefas_concluidas")
let formulario = document.getElementById("formulario");
let imagem = document.querySelector(".imagem")
let novaTarefaJSON = {}
let lista_tarefas = document.getElementById("lista_tarefas")
let tarefas = []

function conta_tarefas (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    if (input.value.trim() !== "") {
        novaTarefaJSON = { "tarefa": input };
        tarefas.push(input.value)
        criadas.innerText = "Tarefas Criadas" + " " + tarefas.length
        input.value = ""
    }
}

formulario.addEventListener("submit", conta_tarefas);

function mostrar_tarefas(event) {
    event.preventDefault(); 
    let lista = tarefas
    if (tarefas.length > 0) {
        console.log(tarefas.length)
        imagem.remove()
        lista_tarefas.classList.add("aparecer");
        lista.forEach(function(tarefa) { //loop para percorrer todos os elementos
            let li = document.createElement("li"); // criando os elementos da ul
            console.log(tarefa)
            li.textContent = tarefa; //arrumando o conteúdo deles
            lista_tarefas.appendChild(li); 
        });
    }
    lista = []
}


formulario.addEventListener("submit", mostrar_tarefas);