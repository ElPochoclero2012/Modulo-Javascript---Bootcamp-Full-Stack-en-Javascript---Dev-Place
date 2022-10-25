var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));

console.log(negativo(sumaNumeros(num1,num2)));

function sumaNumeros(num1, num2) {
    return num1 + num2;
}

function negativo(resultado) {
    if(resultado < 0){
        resultado = resultado*-1;
    }
    return resultado;
}