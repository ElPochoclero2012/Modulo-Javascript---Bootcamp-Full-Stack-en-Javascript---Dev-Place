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
    let contactoExiste = datosTotal.find(ele => ele.dni === dni);
    if(contactoExiste){
        if(typeof dniObtener === 'number' && typeof nombreObtener === 'string' && typeof telefonoObtener === 'number' && typeof edadObtener === 'number' && typeof paisObtener === 'string'){
            datosTotal.push(personaNueva);
            console.log(datosTotal);
            document.getElementById("tabla").innerHTML += '<td>'+ personaNueva.nombre +'<td>'+ personaNueva.edad +'<td>'+   personaNueva.dni +'<td>'+ personaNueva.telefono + '<td>' + personaNueva.pais + '</td>';
        } else {
            alert("DNI, Numero, y Telefono deben ser numeros, Nombre y Pais deben ser textos");
        } 
        }else{
        alert("Ya hay un contacto con ese mismo DNI ingresado en la tabla");
    }
}

// const eliminarContacto = (dni) => {
//     if(datos.length === 0){
//         alert("No hay nada en la agenda")
//     } else {
//         if(isNaN(dni)){
//             alert("El DNI debe ser un numero");
//         } else {
//             eliminarDatos(dni);
//         }
//     }

//     renovarDatos();
// }

// function eliminarDatos(dni){
//     let eleccionContacto = datosTotal.find((elemento) => elemento.dni === dni);
//     let indiceContacto = datosTotal.indexOf(eleccionContacto);
//     datosTotal.splice(indiceContacto, 1);
// }

// function ordenarDatos(){
    
// }

// const renovarDatos = () =>{
//     table.innerHTML = "";

// }