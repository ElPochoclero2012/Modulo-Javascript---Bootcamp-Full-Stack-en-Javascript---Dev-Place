//Todavia no funciona

var datos = [
  ["DNI", "NOMBRE", "APELLIDO", "TELEFONO"],
  ["11111111", "Jorge", "Roldan", "2235555555"],
  ["22222222", "Carlos", "Agote", "2233333333"],
  ["33333333", "Minerva", "Pereyra", "2234444444"],
  ["44444444", "Milicua", "Zangano", "2238888888"],
  ["55555555", "Pepe", "Zatrapa", "2236666666"],

  
]

var array = [];
let decision;

do {
  decision = prompt("Ingrese una Opción: \n1. Agregar\n2. Eliminar por DNI \n3. Buscar por DNI\n0. Salir");
    switch (decision) {

        case "1":
          var dni=prompt("Ingrese su DNI: ");
          var nombre=prompt("Ingrese su Nombre: ");
          var apellido=prompt("Ingrese su Apellido: ");
          var numero=prompt("Ingrese Numero de Telefono: ");
      
          array.push(dni, nombre, apellido, numero);
          datos.push(array);

        break;

        case "2":
          var DNI = prompt("Ingrese el DNI de la persona que desea ELIMINAR: ")
          borrarArray(DNI);         

          break;

        case "3":
          var DNI = prompt("Ingrese el DNI de la persona que desea buscar: ")
          buscarArray(DNI);

          console.log(buscarArray(DNI));

            break;

        case "0":
            alert("Adios!!");
            break;

        default:
            alert("El dato ingresado es incorrecto");
            break;
    }
} while (decision != "0");

function borrarArray(datos){
  for (i = 0;  i < datos.length;  i++) {
      var dniDatos = datos[i][0];

      if (dniDatos == DNI) {
          console.log("Se eliminara: ", dniDatos);
          return eliminarDato = datos.splice(i, 1);
      }
  }
}

function buscarArray(datos){
  for (i = 0;  i < datos.length;  i++) {
      let dniDatos = datos[i][0];
      if (dniDatos == DNI) {
          return datos[i];
      }
  }
}