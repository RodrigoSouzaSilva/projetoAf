function sair() {
    window.location.href = 'index.html';
}

var imagemFruta = document.querySelector('.fotoFruta');
var nomeFruta = document.querySelector('.layout-nome');
var quantidadeFruta = document.querySelector('#valor');
var contador = 0;

const esquerda = document.querySelector('.esquerda');
const direita = document.querySelector('.direita');
var max;

fetch('frutas.json')
    .then(response => response.json())
    .then(frutas => {
        max = frutas.length - 1
    }).catch(error => {
        console.error('Erro ao ler o arquivo frutas.json', error);
    })




esquerda.addEventListener('click', esq)
direita.addEventListener('click', dir)

function esq() {
    if(contador <= 0) {
        contador = 0
    } else {
        contador--
    }

    iniciando();
}

function dir() {
    if(contador === max) {
        contador = max
    } else {
        contador++
    }

    iniciando();
}



function iniciando() {
    fetch('frutas.json')
    .then(response => response.json())
    .then(frutas => {
        quantidadeFruta.value = frutas[contador].quantidade
        nomeFruta.innerHTML = frutas[contador].nome;
    }).catch(error => {
        console.error('Erro ao ler o arquivo frutas.json', error);
    })
}




document.addEventListener('DOMContentLoaded', iniciando);