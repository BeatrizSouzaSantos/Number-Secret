//querySelector seleciona uma linha de código
//innerHTML modifica algo que esta dentro 

let numeroSecreto = gerarNumeroAleatorio();

function showText(tag, texto){
    let campo = document.querySelector(tag);
     campo.innerHTML = texto;

}

showText('h1', 'Jogo do Numero Secreto');
showText('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        showText('h1', 'Parabéns');
        showText('p', 'Você descobriu o numero secreto!!')
    } else {
        if (chute > numeroSecreto){
            showText('p', 'O número secreto é menor');
        } else {
            showText('p', 'O número secreto é maior');

        }
    }
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);  
}