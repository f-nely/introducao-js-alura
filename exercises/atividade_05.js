let inputFrase = document.querySelector('.frase');
let botao = document.querySelector('.botao');
let copia = document.querySelector('.copia');

function botaoHandler() {
    copia.textContent = inputFrase.value;
    inputFrase = '';
}

botao.addEventListener('click', botaoHandler);