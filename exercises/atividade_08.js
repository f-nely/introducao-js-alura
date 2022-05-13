
function buscaElemento(seletor) {
    return document.querySelector(seletor);
}

let btn = buscaElemento('.botao');
let numero = buscaElemento('.numero');
let tabuada = buscaElemento('.tabuada');
let resultado = buscaElemento('.resultado');

btn.addEventListener('click', function () {
    resultado.textContent = numero.value * tabuada.value;
});