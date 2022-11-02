class Persona {
    constructor (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    }
}

const persona = new Persona ('Matias', 'Godoy')

localStorage.setItem("nombre", persona.nombre);
localStorage.setItem("apellido", persona.apellido);

let json = JSON.stringify(persona);

localStorage.setItem("persona", json);