class Refugio{
    estadoAdopcion;
    nombre;
    dueño;
    raza;

    constructor(estadoAdopcion, nombre, dueño, raza) {
        this.estadoAdopcion = estadoAdopcion;
        this.nombre = nombre;
        this.dueño = dueño;
        this.raza = raza;
    }

    perro(){
        return this.estadoAdopcion, " ", this.nombre, " ", this.dueño, " ", this.raza;
    }
}