//querySelector seleciona uma linha de código
//innerHTML modifica algo que esta dentro 
let titulo = document .querySelector('h1');
titulo.innerHTML =  'Jogo do Numero Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    console.log('O botão foi clicado!')
}