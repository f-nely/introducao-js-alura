let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.classList.add('titulo');
h1.textContent = 'Mirror Fashion';
let p = document.createElement('p');
p.textContent = 'Uma loja de roupa fantástica';


div.appendChild(h1);
div.appendChild(p);

let container = document.querySelector('.container');
container.appendChild(div);