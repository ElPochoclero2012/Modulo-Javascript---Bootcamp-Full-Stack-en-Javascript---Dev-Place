//El principio SOLID contrario al patron de diseño SINGLETON es el principio de inversión de dependencias. Este habla de como no deberian existir dependencias entre los modulos.
//Pero el patrón de diseño SINGLETON habla sobre tener una unica instancia de la cual dependan los demas elementos del programa.

let _singleton = null;

class Oficina{
    nombre;
    cantidadEmpleados;

    constructor(nombre, cantidadEmpleados){
        if (!_singleton){
            this.nombre = nombre;
            this.cantidadEmpleados = cantidadEmpleados;
            _singleton = this;
        } else return _singleton;
        console.log("Oficina creada");
    }

    getOficina() {
        return this.nombre+this.cantidadEmpleados;
    }

}

    function init_Singleton(){
        var oficina = new Oficina("Federico",32);
        var oficina2 = new Oficina("JuanCruz",55);
        console.log(oficina.getSingletonData());
        console.log(oficina2.getSingletonData());
        console.log(oficina instanceof Oficina);
        console.log(oficina2 instanceof Oficina);
        console.log(oficina === oficina2);
    }
init_Singleton();