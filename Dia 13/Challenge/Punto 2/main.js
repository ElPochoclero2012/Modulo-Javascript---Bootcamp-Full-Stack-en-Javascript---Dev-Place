/*
-Realizar un programa que permita ingresar por teclado 10
números en un array debe:

● Mostrar el número mayor
● Mostrar el número menor
● Mostrar los números pares
● Mostrar los números impares
● Ordenarlos de manera Ascendente
● Ordenarlos de manera Descendente
*/
let numeros = [];

function agregarNumeros(){
    for (let i = 0; i < 10; i++) {
        numeros.push(parseInt(prompt("Ingrese un numero")));
    }
    console.log(numeros);
}


function parImpar(){
    numeros.forEach((element) =>{
        if(element % 2 == 0){
            return console.log(element + " es par");
        } else return console.log(element + " es impar");
    });
}
function ordenar(){
    let ordenarMenorMayor = numeros.sort((a,b) => {
        return a - b;
    });
    console.log(ordenarMenorMayor[0]);
    console.log(ordenarMenorMayor);

    let ordenarMayorMenor = ordenarMenorMayor.reverse();
    console.log(ordenarMayorMenor[0]);
    console.log(ordenarMayorMenor);

}

agregarNumeros();

ordenar()

parImpar();