const ageInput = document.getElementById('age-input');
const btnAgeCheck = document.getElementById('age_check-btn');
const resultAgeCheck = document.getElementById('age_check-result');

const teperatureInput = document.getElementById('temperature-input');
const btnAlertTemperature = document.getElementById('alert_temperature-btn')
const resultAlertTemperature = document.getElementById('temperature_check-result');

const userWeingh = document.getElementById('imc_calculator_weight-input');
const userHeight = document.getElementById('imc_calculator_height-input');
const resultImcCalculator = document.getElementById('imc_calculator-result');
const btnImcCalculator = document.getElementById('imc_calculator-btn');


btnAgeCheck.onclick = () => {
    userAgeCheck(ageInput.value);
}     

btnAlertTemperature.onclick = () => {
    alertTemperature(teperatureInput.value);
}

btnImcCalculator.onclick = () => {
    imcCalculator(userWeingh.value, userHeight.value);
}

function userAgeCheck(userAge) {
    const age = parseInt(userAge);
    
    if(isNaN(age)) {
        resultAgeCheck.innerHTML = 'Por favor, insira uma idade válida.';
    } else {
        if(age >= 99) {
            resultAgeCheck.innerHTML = 'Parabens você zerou o game.'
        } else if(age >= 18) {
            resultAgeCheck.innerHTML = 'Adulto';
        } else {
            resultAgeCheck.innerHTML = 'Menor de idade';
        }
    }
    
}

function alertTemperature(temperature) {
    const temperatureInt = parseFloat(temperature);

    if(isNaN(temperatureInt)) {
        resultAlertTemperature.innerHTML = 'Insira um valor válido';
    } else {
        if(temperatureInt > 35) {
            resultAlertTemperature.innerHTML = 'Muito quente.';
        } else if(temperatureInt < 25) {
            resultAlertTemperature.innerHTML = 'Muito frio';
        } else {
            resultAlertTemperature.innerHTML = 'A temperatura está boa';
            
        }
    }

}

function imcCalculator (weight, height) {
    const weightInt = parseFloat(weight);
    const heightInt = parseFloat(height);

    const imc = (weightInt / (heightInt * heightInt)).toFixed(1);

    if(isNaN(weightInt) || isNaN(heightInt)) {
        resultImcCalculator.innerHTML = 'Porfavor, informe um valor válido.'
    } else {
        if(heightInt > 0) {
            const classification = classificatorIMC(imc);
            resultImcCalculator.innerHTML = `IMC = ${imc}. [${classification}].`
        } else {
            resultImcCalculator.innerHTML = 'Porfavor, informe um valor válido.'
        }
    }
}

function classificatorIMC (imc) {
    let classification = '';

    if(imc < 18.5){
        classification = 'Abaixo do peso';
    } else if(imc >= 18.5 && imc <= 24.9) {
        classification = 'Pesso ideal';
    } else if(imc >= 25.0 && imc <= 29.9) {
        classification = 'Pré-obesidade';
    } else if(imc >= 30.0 && imc <= 34.9) {
        classification = 'Obesidade grau 1';
    } else if(imc >= 35.0 && imc <= 39.9) {
        classification = 'Obesidade grau 2';
    } else{
        classification = 'Obesidade grau 3';
    } 

    return classification;
}

