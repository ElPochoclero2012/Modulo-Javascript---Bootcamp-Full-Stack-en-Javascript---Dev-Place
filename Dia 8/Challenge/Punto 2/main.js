class Motor{
    estadoActual;

    constructor(){
        this.estadoActual = false;
    }

    prender(estadoActual){
        return estadoActual = true;
    }

    apagar(estadoActual){
        return estadoActual = false;
    }

}

class Rueda{
    estadoActual;

    constructor(){
        this.estadoActual = false;
    }

    inflar(estadoActual){
        return estadoActual = true;
    }

    desinflar(estadoActual){
        return estadoActual = false;
    }
}

class Ventana{
    estadoActual;

    constructor(){
        this.estadoActual = false;
    }

    abrir(estadoActual){
        return estadoActual = true;
    }

    cerrar(estadoActual){
        return estadoActual = false;
    }
}

class Puerta{
    estadoActual;
    ventana;

    constructor(estadoActual){
        this.estadoActual =  false;
        this.ventana = new Ventana();
    }

    abrir(estadoActual){
        return estadoActual = true;
    }

    cerrar(estadoActual){
        return estadoActual = false;
    }
}

class Coche{
    motor;
    puerta1;
    puerta2;
    rueda1;
    rueda2;
    rueda3;
    rueda4;

    constructor(){
        this.motor = new Motor();
        this.puerta1 = new Puerta();
        this.puerta2 = new Puerta();
        this.rueda1 = new Rueda();
        this.rueda2 = new Rueda();
        this.rueda3 = new Rueda();
        this.rueda4 = new Rueda();
    }
}

let auto = new Coche();