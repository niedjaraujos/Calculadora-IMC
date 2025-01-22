

const botao = document.querySelector('button');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');

botao.addEventListener('click', () => {
    let altura = inputAltura.value;
    let peso = inputPeso.value;

    let imc = parseInt(peso / (altura * altura))

    if (imc <= 19) {
        document.querySelector('.resultado').textContent = `Seu imc é ${imc}. Magreza`
    }
    else if (imc <= 25) {
        document.querySelector('.resultado').textContent = `Seu imc é ${imc}. Normal`
    }
    else if (imc <= 29) {
        document.querySelector('.resultado').textContent = `Seu imc é ${imc}. Sobrepeso grau I`
    }
    else if (imc <= 39) {
        document.querySelector('.resultado').textContent = `Seu imc é ${imc}. Obesidade grau II`
    }
    else {
        document.querySelector('.resultado').textContent = `Seu imc é ${imc}. Obesidade grave grau III`
    }

 inputAltura.value = ''
 inputPeso.value=''
}) 
