let amigos = [];

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo').value.trim();
    console.log(inputAmigo);

    if (inputAmigo === '') {
        alert('Adicione um nome válido');
        return;
    } else if (amigos.includes(inputAmigo)) {
        alert('Adicione um nome que não tenha sido adicionado');
        return;
    } else{
        amigos.push(inputAmigo);
        limparCampo();
        console.log(amigos);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Lista de amigos: ${amigos}`;
}

function limparCampo(){
    inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}

function atualizarLista(amigos){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; //Limpa a lista antes de atualizar para garantir que não hajam duplicados.

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
    console.log(listaAmigos());

    return listaAmigos;
}

function sortearAmigo(){
    if (amigos.lenght === null){
        alert('A lista de amigos está vazia');
        return;
    }
    
    let sorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[sorteado];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${nomeSorteado}`;

    console.log(sorteado);
    console.log(nomeSorteado);
}