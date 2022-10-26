class Cuenta{
    titular;
    cantidad;

    constructor (titular){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    mostrar(){
        return this.titular, " ", this.cantidad;
    }

    ingresar(cantidad){
        var num = parseFloat(prompt("Ingrese cuanto quiere ingresar"));
        cantidad = num;
        return cantidad;
    }

    retirar(cantidad){
        var num = parseFloat(prompt("Ingrese cuanto quiere retirar"));
        cantidad = num;
        return cantidad;
    }

}