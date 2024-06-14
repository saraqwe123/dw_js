let input = document.getElementById("itarefa")
let criadas = document.getElementById("tarefas_criadas")
let feitas = document.getElementById("tarefas_concluidas")
let formulario = document.getElementById("formulario");
let imagem = document.querySelector(".imagem")
let novaTarefaJSON = {}
let lista_tarefas = document.getElementById("lista_tarefas")
let tarefas = []
let concluidas = []

function conta_tarefas(event) {
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
    if (tarefas.length > 0) {
        console.log(tarefas.length)
        imagem.remove()
        lista_tarefas.innerHTML = "";
        lista_tarefas.classList.add("aparecer");

        tarefas.forEach(function (tarefa) { //loop para percorrer todos os elementos
            let li = document.createElement("li"); // criando os elementos da ul
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = "check"


            let lixeira = document.createElement("span")
            lixeira.textContent = "🗑"
            lixeira.style.cursor = "pointer";

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(tarefa));
            li.appendChild(lixeira);
            lista_tarefas.appendChild(li);

            checkbox.addEventListener("click", function () {
                if (checkbox.checked) {
                    let elemento = checkbox.parentElement
                    console.log(elemento)
                    elemento.style.textDecoration = "line-through" //para riscar a tarefa
                    concluidas.push(tarefa)
                    tarefas.splice(tarefa, 1); // Remove a tarefa do array
                    criadas.innerText = "Tarefas Criadas: " + tarefas.length;
                    feitas.innerText = "Tarefas Concluidas: " + concluidas.length;

                    
                } else {
                    let elemento = checkbox.parentElement
                    elemento.style.textDecoration = "none"
                    tarefas.push(tarefa)
                    criadas.innerText = "Tarefas Criadas: " + tarefas.length;
                    concluidas.pop()
                    feitas.innerText = "Tarefas Concluidas: " + concluidas.length;
                }
            })


            console.log(lixeira, 546765376543)
            lixeira.addEventListener("click", function (event) {
                if (event.target === lixeira)
                li.remove();
                tarefas.splice(tarefa, 1)
                criadas.innerText = "Tarefas Concluídas: " + tarefas.length;


            });
        })
    }
}

formulario.addEventListener("submit", mostrar_tarefas);