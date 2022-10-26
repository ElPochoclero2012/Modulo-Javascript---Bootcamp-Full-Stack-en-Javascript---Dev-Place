class Persona{
    nombre;
    apellido;
    edad;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    fullname() {
        return this.nombre + " " + this.apellido;
    }

    es_mayor(){
        var flag = false;
        if (this.edad >= 18){
            flag = true;
        }

        return flag;
    }

}


//Objeto literal
let personaLiteral = {
    nombre: "pepe",
    edad: 20,
    dni: 44336293
}

personaLiteral.nombre;
personaLiteral.edad;
personaLiteral.apellido;