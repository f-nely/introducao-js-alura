let paciente = document.querySelector('#primeiro-paciente');
let tdPeso = paciente.querySelector('.info-peso');
let tdAltura = paciente.querySelector('.info-altura');

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let tdImc = document.querySelector('.info-imc');

let pesoEhValido = true;
let alturaEhValida = true;

if ((peso <= 0) || (peso >= 1000)) {
    console.log('Peso inválido!');
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido';
} 

if ((altura <= 0) || (altura >= 3.00)) {
    console.log('Altura inválida!');
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida';
}

if (pesoEhValido && alturaEhValida) {
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

