let amigos = [];

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo').value;
    console.log('O botão foi clicado!');
    console.log(inputAmigo);
    limparCampo();
    if(amigos.includes(inputAmigo)){
        console.log(amigos)
        alert('Adicione um nome que não tenha sido adicionado');
        return inputAmigo;
    } else if(inputAmigo == ''){
        alert('Adicione um nome válido');
        return inputAmigo;
    } else{
        amigos.push(inputAmigo);
        console.log(amigos)
        return inputAmigo;
    }
}

function limparCampo(){
    inputAmigo = document.querySelector('input');
    inputAmigo.value = '';
}