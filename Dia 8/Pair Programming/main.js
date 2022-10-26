const prompt = require("prompt-sync")({ sigint: true });
// class Persona {
//   constructor() {
//     this.dni = dni;
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.telefono = telefono;
//   }
// }

var agenda = [
  {
    dni: 33213221,
    nombre: "Marcelo",
    apellido: "Albano",
    telefono: 2236771829,
  },
  {
    dni: 44335612,
    nombre: "Juan Pablo",
    apellido: "Moscoloni",
    telefono: 2235882716,
  },
];

let decision;

do {
  decision = prompt(
    "Ingrese una Opción: \n1. Agregar un Contacto\n2. Eliminar por DNI\n3. Mostrar por DNI\n4. Mostrar toda la agenda \n0. Salir\n\n"
  );
  switch (decision) {
    case "1":
      agregarUser(agenda);
      break;

    case "2":
      let eliminarDNI = prompt(
        "Ingrese el DNI del Contacto que quiera ELIMINAR: "
      );
      eliminarContacto(eliminarDNI);
      break;

    case "3":
      let buscarDNI = prompt(
        "Ingrese el DNI del Contacto que quiera ENCONTRAR: "
      );
      verPersona(buscarDNI);
      break;

    case "4":
      mostrarAgenda(agenda);
      break;

    case "0":
      console.log("Adios!\n");
      break;

    default:
      console.log("El dato ingresado es incorrecto\n");
      break;
  }
} while (decision != "0");

function agregarUser(agenda) {
//   let usuarios = [];
    let dni = parseInt(prompt("Ingresar DNI: "));
  let nombre=prompt("Ingresar Nombre: ")
  let apellido =prompt("Ingresar Apellido: ")
  let telefono =parseInt(prompt("Ingresar Telefono: "))
  let usuarios = {dni,nombre,apellido,telefono};
  agenda.push(usuarios);
}

function eliminarContacto(dni) {
  let eleccionContacto = agenda.find((elemento) => elemento.dni === dni);
  let indiceContacto = agenda.indexOf(eleccionContacto);
  agenda.splice(indiceContacto, 1);
}

function verPersona(dni) {
//   let eleccionContacto = agenda.find((elemento) => elemento.dni === dni);
  let indiceContacto = 0;
  agenda.forEach((element) => {
    if(element.dni === parseInt(dni)){
    indiceContacto = agenda.indexOf(element);
    }
  });
  console.log(agenda[indiceContacto]);
}

function mostrarAgenda(agenda) {
  let string = "";
  agenda.forEach((element, index) => {
    string += "[" + index + "] " + element + "\n";
  });
  console.log(agenda);
}