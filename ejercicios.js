let numero_1 = prompt("Ingresa el primer numero: ");
let numero_2 = prompt("Ingresa el segundo numero: ");
let operacion = prompt("¿Que operacion quiere hacer?: ");

if (operacion == "sumar"){
    let resultado = parseInt(numero_1) + parseInt(numero_2);
    alert(texto_resultado = "La suma de " + numero_1 + " y " + numero_2 + " es: " + resultado.toString());
}

if (operacion == "restar"){
    let resultado = parseInt(numero_1) - parseInt(numero_2);
    alert(texto_resultado = "La suma de " + numero_1 + " y " + numero_2 + " es: " + resultado.toString());
}

if (operacion == "multiplicar"){
    let resultado = parseInt(numero_1) * parseInt(numero_2);
    alert(texto_resultado = "El producto de " + numero_1 + " y " + numero_2 + " es: " + resultado.toString());
}

if (operacion == "dividir"){
    let resultado = parseInt(numero_1) / parseInt(numero_2);
    alert(texto_resultado = "El cociente de " + numero_1 + " y " + numero_2 + " es: " + resultado.toString());
}