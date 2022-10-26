class Persona{
    nombre;
    edad;
    DNI;

    constructor(nombre, edad, DNI){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getEdad(){
        return this.edad;
    }

    setEdad(edad){
        this.edad = edad;
    }

    getDNI(){
        return this.DNI;
    }

    setDNI(DNI){
        this.DNI = DNI;
    }

    mostrar(){
        return this.nombre, " ", this.edad, " ", this.DNI;
    }

    esMayorDeEdad(edad){
        var flag = false;
        if (edad >= 18){
            flag = true;
        }
        return flag;
    }

}