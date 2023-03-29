function Calcularimc(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let imc = peso/(altura**2)
    if(imc < 18.5){
        document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(2)}, e você está Abaixo do peso ideal!`
    }
    else if(imc >= 18.5 && imc <= 24.9){
        document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(2)}, e você está com o Peso adequado!`
    }
    else if(imc >= 25 && imc <= 29.9){
        document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(2)}, e você está com Sobrepeso!`
    }
    else if(imc >= 30 && imc <= 34.9){
        document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(2)}, e você está em Obesidade classe I!`
    }
    else if(imc >= 35 && imc <= 39.9){
        document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(2)}, e você está em Obesidade classe II!`
    }
    else{
        document.getElementById('imc').innerText = `Seu IMC é: ${imc.toFixed(2)}, e você está em Obesidade classe III!`
    }
}

