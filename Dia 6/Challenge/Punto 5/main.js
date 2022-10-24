var num = prompt("¿Hasta que numero quiere llegar?");

var numInt = parseInt(num);

var aux = "";

for (let i = 0; i <= num; i++) {
    aux += "," + i;
}

console.log(aux);