function datos(){
    class Persona{
        nombre;
        edad;
        dni;
        telefono;
        pais;

        constructor(nombre, edad, dni, telefono, pais){
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
    
    personaNueva = new Persona(nombreObtener, edadObtener, dniObtener, telefonoObtener, paisObtener);

    agregarDatos();

    eliminarDatos(dni);

}

var datosTotal = [];

function agregarDatos(){
    datosTotal.push(personaNueva);
    console.log(datosTotal);
    document.getElementById("tabla").innerHTML += '<td>'+ personaNueva.nombre +'<td>'+ personaNueva.edad +'<td>'+ personaNueva.dni +'<td>'+ personaNueva.telefono + '<td>' + personaNueva.pais + '</td>';
}

function eliminarDatos(){
    let eleccionContacto = datosTotal.find((elemento) => elemento.dni === dni);
    let indiceContacto = datosTotal.indexOf(eleccionContacto);
    datosTotal.splice(indiceContacto, 1);
}