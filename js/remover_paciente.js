let TrPacientes = document.querySelectorAll('.paciente');
console.log(TrPacientes);

TrPacientes.forEach(function(paciente) {
    paciente.addEventListener('dblclick', function() {
        console.log('Fui clicado com duplo clique!');
        this.remove();
    });
});
