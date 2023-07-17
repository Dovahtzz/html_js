function numcheck() {
    let numero1 = document.getElementById('num1');
    let numero2 = document.getElementById('num2');
    let mensagem = document.getElementById('mensagem')

    if (numero1.value > numero2.value) {
        mensagem.textContent = "o número A é maior que o número B";
        mensagem.style.color = "red";
        limparcampos();
    } else if (numero1.value == numero2.value) {
        mensagem.textContent = "o número A é igual ao número B";
        mensagem.style.color = "white";
        limparcampos();
    } else if (numero1.value < numero2.value) {
        mensagem.textContent = "o número B é maior que o número A";
        mensagem.style.color = "green";
        limparcampos();
    } 
}

function limparcampos() {
    let campos = document.querySelectorAll('input[type="number"]')
    campos.forEach(function (campo) {
        campo.value = "";
    });
}