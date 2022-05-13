function criaListaDeConvidados() {

    let itens = document.querySelectorAll('.convidado');

    let convidados = [];

    for(let i = 0; i < itens.length; i++) {

        let convidado = {
            nome:  itens[i].querySelector('.nome').textContent,
            idade: parseInt(itens[i].querySelector('.idade').textContent)
        };

        convidados.push(convidado);
    }

    return convidados;
}

/* essa função tem como responsabilidade extrair o total da lista de convidados retornando-o para quem chamá-la. 
Isso é interessante, porque quem receber o resultado pode querer exibir na tela com um `alert`,
`console.log` ou até mesmo atualizando essa informação em algum elemento da página.*/

function calculaTotalDasIdades(convidados) {

    let total = 0;

    for(let i = 0; i < convidados.length; i++) {

        total += convidados[i].idade;
    }

    return total;

}

   /* essa função tem como responsabilidade receber um total qualquer e exibí-lo no HTML */
function exibeTotalDasIdades(total) {
    document.querySelector('.total').textContent = total;    
}

/* usando nossas funções. Veja que uma pessoa fora do universo da programação 
está mais inclinada a entender o que essas instruções fazem devido aos nomes autoexplicativos. */

let convidados = criaListaDeConvidados();
let totalDasIdades = calculaTotalDasIdades(convidados);
exibeTotalDasIdades(totalDasIdades);