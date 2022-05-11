let form = document.querySelector('.adicionar-tarefa');
let btn = document.querySelector('#botao-adicionar');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(form.tarefa.value);
});