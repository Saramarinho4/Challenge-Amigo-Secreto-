// app.js

let amigos = [];

// Adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Atualizar lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome + " ";

        // botão de remover
        let btn = document.createElement("button");
        btn.textContent = "❌";
        btn.style.marginLeft = "10px";
        btn.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

// Remover amigo pelo índice
function removerAmigo(index) {
    amigos.splice(index, 1); // tira 1 item da posição index
    atualizarLista(); // atualiza a tela
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}
