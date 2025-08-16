// Lista onde serão armazenados os nomes
let amigos = [];

// Função para adicionar um nome na lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // campo do input
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // adiciona o nome ao array
    amigos.push(nome);

    // atualiza a lista de nomes na tela
    atualizarLista();

    // limpa o campo de texto
    input.value = "";
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para sortear!");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`;
}
