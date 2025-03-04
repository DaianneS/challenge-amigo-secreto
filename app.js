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
}

function limparCampo(){
    inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}