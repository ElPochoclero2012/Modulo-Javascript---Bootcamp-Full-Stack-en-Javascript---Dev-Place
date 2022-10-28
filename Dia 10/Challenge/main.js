class Persona{
    nombre;
    apellido;
    dni;
    estadoCivil;

    constructor (nombre,apellido,dni,estadoCivil){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.estadoCivil = estadoCivil;
    }

    cambioEstadoCivil(){
        return this.estadoCivil = estadoCivil;
    }

}

class Empleado extends Persona{
    añoIncorporacion;
    nDespacho;

    constructor (añoIncorporacion, nDespacho, nombre, apellido, dni, estadoCivil){
        super(nombre, apellido, dni, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.nDespacho = nDespacho;
    }
    reasignacionDespachoEmpleado(despachoNuevo){
        return this.nDespacho = despachoNuevo;
    }
}

class Estudiante extends Persona{
    curso;

    constructor(curso, nombre, apellido, dni, estadoCivil){
        super(nombre, apellido, dni, estadoCivil);
        this.curso = curso;
    }
    matriculacionEstudianteNuevo(cursoNuevo){
        return this.curso = cursoNuevo;
    }
}

class Profesor extends Empleado{
    departamento;

    constructor(departamento, añoIncorporacion, nDespacho, nombre, apellido, dni, estadoCivil){
        super(añoIncorporacion, nDespacho, nombre, apellido, dni, estadoCivil);
        this.departamento = departamento;
    }

    cambioDepartamentoProfesor(cambio){
        return this.departamento = cambio;
    }
}

class PersonalServicio extends Empleado{
    seccion;

    constructor(seccion, añoIncorporacion, nDespacho, nombre, apellido, dni, estadoCivil){
        super(añoIncorporacion, nDespacho, nombre, apellido, dni, estadoCivil);
        this.seccion = seccion;
    }
    transladoSeccionPersonalServicio(seccionNueva){
        return this.seccion = seccionNueva;
    }
}

let listaAlumno = [];
let listaProfe = [];
let listaPersonal = [];

let estudiante1 = new Estudiante('7° Fisica', 'Marcelo', 'Albano', '44336283', 'Soltero');

let profesor1 = new Profesor('PHP', '2003', '3er Despacho', 'Juan', 'Perez', '44335612', 'Complicado');

let personal1 = new PersonalServicio('Biblioteca', '2013', '6to Despacho', 'Maxwell', 'Ortiz', '35098123', 'Casado');

profesor1.cambioDepartamentoProfesor('C++');

personal1.transladoSeccionPersonalServicio('Limpieza');

estudiante1.matriculacionEstudianteNuevo('5°');

listaAlumno.push(estudiante1);

listaProfe.push(profesor1);

listaPersonal.push(personal1);

console.table(listaAlumno);

console.table(listaProfe);

console.table(listaPersonal);