let paciente = document.querySelector('#primeiro-paciente');
let tdPeso = paciente.querySelector('.info-peso');
let tdAltura = paciente.querySelector('.info-altura');

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
tdImc = document.querySelector('.info-imc');
tdImc.textContent = imc;

