var num = prompt("Ingrese un numero");

var numInt = parseInt(num);

for (let i = 0; i < num; i++) {
    if (i % 3 == 2) {
        console.log(i);
    }
}