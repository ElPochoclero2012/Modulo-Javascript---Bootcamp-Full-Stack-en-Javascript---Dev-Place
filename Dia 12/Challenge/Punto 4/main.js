class Vencimiento{
    fechaVencimiento;

    constructor(fechaVencimiento){
        this.fechaVencimiento = fechaVencimiento;
    }
    setFechaVencimiento(){
        this.fechaVencimiento = fechaVencimiento;
        return this;
    }
}

class Color extends Vencimiento {
    color;

    constructor(color, fechaVencimiento){
        super(fechaVencimiento);
        this.color = color;
    }
    setColor(){
        this.color = color;
        return this;
    }
}

class Manzana extends Color{
    manzana;
    constructor(manzana, color, fechaVencimiento){
        super(color, fechaVencimiento);
        this.manzana = manzana;
    }
}


class AppleFactory extends Manzana{

    constructor(manzana,color,fechaVencimiento){
        super(manzana, color, fechaVencimiento);
        console.log("Manzana creada");
    }
}


let manzana1 = new AppleFactory("Manzana 1","Amarilla", "5 Dias");
let manzana2 = new AppleFactory("Manzana 2","Roja", "7 Dias");
let manzana3 = new AppleFactory("Manzana 3","Verde", "10 Dias");

console.log(manzana1, manzana2, manzana3);
