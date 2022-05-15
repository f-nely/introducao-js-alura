let TrPacientes = document.querySelectorAll('.paciente');

let tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event) {
    event.target.parentNode.classList.add('fade-out');

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500); 
});

/* TrPacientes.forEach(function(paciente) {
    paciente.addEventListener('dblclick', function() {
        console.log('Fui clicado com duplo clique!');
        this.remove();
    });
}); */
