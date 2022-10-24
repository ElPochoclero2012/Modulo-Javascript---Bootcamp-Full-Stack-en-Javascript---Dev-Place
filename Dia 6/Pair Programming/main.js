var op = 0;
do {
  op = parseInt(prompt("Ingrese una opcion: \n 1. Sumar numeros \n 2. Ingresar Numeros y promediarlos \n 3. Ordenar 3 numeros de mayor a menor\n 0. Salir"));
  switch (op) {
    case 1:
        let num1= parseInt(prompt("Ingresa un numero"));
        let num2= parseInt(prompt("Ingresa otro numero"));
        alert(sumaNumeros(num1, num2));
      break;
    case 2:
        alert(promediarNumeros());
      break;
    case 3:
        let num3= parseInt(prompt("Ingresa un numero"));
        let num4= parseInt(prompt("Ingresa otro numero"));
        let num5= parseInt(prompt("Ingresa nuevamente otro numero"));
        ordenarNumeros(num3, num4, num5);
      break;
    case 0:
        alert("Adios!");
      break;
    default:
        alert("Error opcion inexistente");
      break;
  }
} while (op != 0);

//crear una funcion que pida 2 numeros por parametro y los sume.
function sumaNumeros(num1, num2) {
    let rta
    return rta= num1 + num2;
}

//hacer un bucle en el que el usuario ingrese N cantidad de numeros y devuelva el promedio
function promediarNumeros()
{
    let op='s';
    let cont=0;
    let acum=0;
    while(op=='s')
    {
        var num= parseInt(prompt("Ingresa un numero"));
        cont++;
        acum+= num;
        op= prompt("Desea cargar otro numero? (s/n)")
    }
    return acum/cont;
}
//Ingresar 3 numeros y mostrarlos de mayor a menor:
function ordenarNumeros(num1, num2, num3)
{
    if(num1 > num2 && num1 > num3)
    {
        if(num2 > num3)
        {
            alert("Numeros Ordenados: " + num1 + ", "+ num2 +", "+ num3);
        }else{
            alert("Numeros Ordenados: " + num1 +", "+ num3 +", "+ num2);
        }
    }else if(num2 > num1 && num2 > num3) 
    {   
        if(num1 > num3)
        {
            alert("Numeros Ordenados: " + num2 +", "+ num1 +", "+ num3);
        }else{
            alert("Numeros Ordenados: " + num2 +", "+ num3 +", "+ num1);
        }
    }else if(num3 > num1 && num3 > num2)
    {
        if(num1 > num2){
            alert("Numeros Ordenados: " + num3 +", "+ num1 +", "+ num2);
        }else{
            alert("Numeros Ordenados: " + num3 +", "+ num2 +", "+ num1);
        }
    }
}