function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);

    document.getElementById("resultado").innerText = "Tu IMC es: " + imc.toFixed(2);

    var mensaje = "Estado: ";
    if (imc < 18.5) {
        mensaje += "Bajo peso";
    } else if (imc < 24.9) {
        mensaje += "Peso normal";
    } else if (imc < 29.9) {
        mensaje += "Sobrepeso";
    } else {
        mensaje += "Obeso";
    }

    document.getElementById("resultado").innerText += " - " + mensaje;
}
