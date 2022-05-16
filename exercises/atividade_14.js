let campoPostagem = document.querySelector("#corpo-postagem");
campoPostagem.addEventListener("input", atualizaCaracteres);

function atualizaCaracteres() {
    let caracteres = campoPostagem.value.length;

    let contador = document.querySelector('#numero-caracteres');
    contador.innerHTML = caracteres;
}

