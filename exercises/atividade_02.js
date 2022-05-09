let produtos = document.querySelectorAll('.lista-produtos');
for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    let nomeProduto = produto.textContent;
    console.log(nomeProduto);
    produto.style.color = '#42F57B';
}

let titulo = document.querySelector('.titulo-principal');
console.log(titulo.classList)
titulo.style.color = '#4287F5';