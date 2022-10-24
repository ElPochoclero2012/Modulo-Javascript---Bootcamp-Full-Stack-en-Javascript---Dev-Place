var coches = prompt("¿Que tipo de coche quiere? 1 para gasolina, 2 para diesel o 3 para electrico");

switch (parseInt(coches)) {
  case 1:
    console.log("Bienvenido a la oficina numero 100");
    break;
  case 2:
    console.log("Bienvenido a la oficina numero 200");
    break;
  case 3:
    console.log("Bienvenido a la oficina numero 300");
    break;
  default:
    console.log("ERROR X.X");
    break;
}
