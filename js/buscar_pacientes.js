let buscarPacientes = document.querySelector('#buscar-pacientes');

buscarPacientes.addEventListener('click', function() {
    console.log('Buscando pacientes...');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function() {
        let resposta = xhr.responseText;

        let pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function (paciente) {
            adicionaPacienteTabela(paciente);
        });
    });

    xhr.send();
});