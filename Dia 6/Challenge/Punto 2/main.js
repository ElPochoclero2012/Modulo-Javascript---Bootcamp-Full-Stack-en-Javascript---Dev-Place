var creditos = prompt("¿Cuantos créditos tiene?");

switch (parseInt(creditos)) {
  case 1:
    console.log("Pudo ingresar a la primer sala");
    break;
  case 2:
    console.log("Pudo ingresar a la primer y segunda sala");
    break;
  case 3:
    console.log("Pudo ingresar a la primer, segunda, y tercer sala");
    break;
  case 4:
    console.log("Pudo ingresar a todas las salas!");
    break;
  default:
    console.log("ERROR X.X");
    break;
}
