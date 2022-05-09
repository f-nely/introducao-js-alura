let titulos = document.querySelectorAll('h2');
console.log(titulos);
for (let i = 0; i < titulos.length; i++) {
    let titulo = titulos[i];
    titulo.classList.add('titulo');
}