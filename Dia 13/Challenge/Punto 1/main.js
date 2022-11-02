do{
let op = parseInt(prompt("Ingrese una opcion: \n 1. Sumar numeros \n 2. Restar numeros \n 3. Multiplicar numeros \n 4. Dividir numeros \n 0. Salir"));
switch (op) {
  case 1:
        let num1= parseInt(prompt("Ingresa un numero"));
        let num2= parseInt(prompt("Ingresa otro numero"));
        let suma = num1 + num2;
        alert("El resultado es: " + suma);
    break;
  case 2:
        let num3= parseInt(prompt("Ingresa un numero"));
        let num4= parseInt(prompt("Ingresa otro numero"));
        let resta = num3 - num4;
        alert("El resultado es: " + resta);
    break;
  case 3:
        let num5= parseInt(prompt("Ingresa un numero"));
        let num6= parseInt(prompt("Ingresa otro numero"));
        let multiplicacion = num5 * num6;
        alert("El resultado es: " + multiplicacion);
    break;
    case 4:
        let num7= parseInt(prompt("Ingresa un numero"));
        let num8= parseInt(prompt("Ingresa otro numero"));
        let division = num7 / num8;
        alert("El resultado es: " + division);
      break;
  case 0:
      alert("Adios!");
    break;
  default:
      alert("Error opcion inexistente");
    break;
}
}while (op != 0);