class Persona {
    nombre;
    edad;
    dni;
    telefono;
    pais;

    constructor(nombre, edad, dni, telefono, pais) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.telefono = telefono;
      this.pais = pais;
    }
}

class Agenda{
  constructor(){
    this.datosTotal = [];
  }
  Añadir(datosPersona){
    this.datosTotal.push(datosPersona);
  }
  eliminarDato(index){
    this.datosTotal.splice(index, 1);
    console.log(index);
    console.log(this.datosTotal);
    mostrarDato();
  }
  ordenarDato(){
    this.datosTotal.sort((a,b) => (a.dni > b.dni) ? 1: ((b.dni > a.dni) ? -1: 0));
  }
  buscarDato(){
    let dato = parseInt(document.getElementById("busquedaDNI").value);
    let posicion = -1;
    this.datosTotal.forEach(element =>{
      if(element.dni == dato)
      {
        posicion = this.datosTotal.indexOf(element);
      }
    });
    return posicion;


  }
}
  let agenda = new Agenda();
  //var datosTotal = [];

    function agregarDatos() {
    const botonDelete = document.createElement('button');
    botonDelete.type = 'button';
    botonDelete.innerText = "Eliminar" ;
    botonDelete.setAttribute("id", "eliminar");

    var nombreObtener = document.getElementById("nombre").value;
    var edadObtener = document.getElementById("edad").value;
    var dniObtener = document.getElementById("dni").value;
    var telefonoObtener = document.getElementById("telefono").value;
    var paisObtener = document.getElementById("pais").value;
    let persona = new Persona(nombreObtener, edadObtener, dniObtener, telefonoObtener, paisObtener);
    agenda.Añadir(persona);

    agenda.ordenarDato();
    mostrarDato();
  }

function mostrarDato(){
    document.getElementById("tabla").innerHTML = "";
    agenda.datosTotal.forEach((personaNueva,index) => {
        document.getElementById("tabla").innerHTML +=
        "<tr><th>" +
        personaNueva.nombre +
        "</th><th>" +
        personaNueva.edad +
        "</th><th>" +
        personaNueva.telefono +
        "</th><th>" +
        personaNueva.dni +
        "</th><th>" +
        personaNueva.pais +
        "</th><th><button type='button' onclick='agenda.eliminarDato("+ index +");'> ELIMINAR </button></th></tr>";
    })
    
}

document.getElementById("botonBuscar").addEventListener("click", mostrarPorDNI);

function mostrarPorDNI(){
  document.getElementById("tabla").innerHTML = "";
  let pos = agenda.buscarDato();
  document.getElementById("tabla").innerHTML +=
  "<tr><th>" +
  agenda.datosTotal[pos].nombre +
  "</th><th>" +
  agenda.datosTotal[pos].edad +
  "</th><th>" +
  agenda.datosTotal[pos].telefono +
  "</th><th>" +
  agenda.datosTotal[pos].dni +
  "</th><th>" +
  agenda.datosTotal[pos].pais +
  "</th><th><button type='button' onclick='agenda.eliminarDato("+ pos +");'> ELIMINAR </button></th></tr>";
}

// function editarDato(){
//   document.getElementById("tabla").innerHTML = "";
//   let pos = agenda.buscarDato();
//   document.getElementById("tabla").innerHTML +=
//   "<tr><th>" +
//   agenda.datosTotal[pos].nombre +
//   "</th><th>" +
//   agenda.datosTotal[pos].edad +
//   "</th><th>" +
//   agenda.datosTotal[pos].telefono +
//   "</th><th>" +
//   agenda.datosTotal[pos].dni +
//   "</th><th>" +
//   agenda.datosTotal[pos].pais +
//   "</th><th><button type='button' onclick='agenda.eliminarDato("+ pos +");'> ELIMINAR </button></th></tr>";
// }




//Agregar Datos Funcional
  
// function agregarDatos() {
//             datosTotal.push(personaNueva);
//             console.log(datosTotal);
//             document.getElementById("tabla").innerHTML +=
//             "<tbody><th>" +
//             personaNueva.nombre +
//             "</th><th>" +
//             personaNueva.edad +
//             "</th><th>" +
//             personaNueva.dni +
//             "</th><th>" +
//             personaNueva.telefono +
//             "</th><th>" +
//             personaNueva.pais +
//             "</th></tbody>";
// }

//Intento 1

// datosTotal.sort(comparacion);

// function comparacion(a, b){

//     return a-b;
// }

//Intento 2

// function ordenarDatos(){

// var aux = datosTotal.map(function(el, i){
//     return { index: i, value: el.toLowerCase()};
// })

// aux.sort(function(a,b) {
//     if (a.value > b.value){
//         return 1;
//     }
//     if (a.value < b.value){
//         return -1;
//     }
//     return 0;
// });

//Intento 3

// var result = aux.map(function(el){
//     return datosTotal[el.index];
// });

// }

//Intento 4

//   function ordenarDatos() {}

//   const renovarDatos = () => {
//     table.innerHTML = "";
//   };