let lis = document.querySelectorAll('li');

let ul = document.querySelector('ul');

ul.addEventListener('click', function(event) {
    alert(event.target.textContent);
})

/* lis.forEach(function(li) {
    li.addEventListener('click', function() {
        alert(this.textContent)
    });
}); */

let btn = document.querySelector('#btn');
let input = document.querySelector('#campo');
let lista = document.querySelector('.lista');

btn.addEventListener('click', function() {
    let l = document.createElement('li');
    l.textContent = input.value;
    lista.appendChild(l);
    input.value = '';
});