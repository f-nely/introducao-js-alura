console.log('Prato do dia!');

let trPratoDia = document.querySelector('#sexta');
console.log(trPratoDia);
let salada = trPratoDia.querySelector('.salada').textContent;
let principal = trPratoDia.querySelector('.principal').textContent;
let acompanhamento = trPratoDia.querySelector('.acompanhamento').textContent;
console.log(salada);
console.log(principal);
console.log(acompanhamento);

let prato = document.querySelectorAll('.prato-do-dia');
console.log(prato[1])
for (let i = 0; i < prato.length; i++) {
    let trPratoDia = prato[i];
    let salada = trPratoDia.querySelector('.salada').textContent;
    let principal = trPratoDia.querySelector('.principal').textContent;
    let acompanhamento = trPratoDia.querySelector('.acompanhamento').textContent;
    console.log(salada);
    console.log(principal);
    console.log(acompanhamento);
}
