function datos() {
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

    var nombreObtener = document.getElementById("nombre").value;
    var edadObtener = document.getElementById("edad").value;
    var dniObtener = document.getElementById("dni").value;
    var telefonoObtener = document.getElementById("telefono").value;
    var paisObtener = document.getElementById("pais").value;

    personaNueva = new Persona(
      nombreObtener,
      edadObtener,
      dniObtener,
      telefonoObtener,
      paisObtener
    );

    agregarDatos();

  }

  var datosTotal = [];

  function agregarDatos() {
    const botonDelete = document.createElement('button');
    botonDelete.type = 'button';
    botonDelete.innerText = "Eliminar" ;
    botonDelete.setAttribute("id", "eliminar");

    datosTotal.push(personaNueva);
    var largo = datosTotal.length - 1;
    console.log(largo);
    ordenarDato();
    mostrarDato();
}

function mostrarDato(){
    var tabla = "";
    datosTotal.forEach((personaNueva,index) => {
        tabla +=
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
        "</th><th><button type='button' onclick='eliminarDato("+ index +");'> ELIMINAR </button></th></tr>";
    })
    document.getElementById("tabla").innerHTML = tabla;
}

function eliminarDato(index){
    datosTotal.splice(index, 1);
    console.log(index);
    console.log(datosTotal);
    mostrarDato();
}

function ordenarDato(){
    datosTotal.sort((a,b) => (a.dni > b.dni) ? 1: ((b.dni > a.dni) ? -1: 0));
}

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