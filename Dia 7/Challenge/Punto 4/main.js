var numero = parseInt(prompt("Ingrese un numero y le mostrarĂ© el factorial"));
var acumulador;

for (let i = numero - 1; i >= 1 ; i--) {
    numero *= i;
}

console.log(numero);