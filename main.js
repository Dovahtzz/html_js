function numcheck() {
    let numero1 = document.getElementById('num1');
    let numero2 = document.getElementById('num2');
    let mensagem = document.getElementById('mensagem')

    if (numero1.value !== numero2.value) {
        mensagem.textContent = "os números são diferentes";1
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "os números são iguais";
        mensagem.style.color ="green";
        limparcampos();
    }
}

function limparcampos() {
    let campos = document.querySelectorAll('input[type="number"]')
    campos.forEach(function (campo) {
        campo.value = "";
    });
}