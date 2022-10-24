var acumuladora = 0;
var media = 0;

for (let i = 0; i < 4; i++) {
    var num = prompt("Ingrese un numero");
    var numInt = parseInt(num);
    acumuladora += numInt;
}

media = acumuladora / 4;

window.alert("La media aritmetica de los numeros ingresados es: " + media);