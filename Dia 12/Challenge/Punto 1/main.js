class Banco{
    cuentaCorriente;
    cajaAhorro;
    seguroDeVida;
    seguroHogar;

    constructor(cuentaCorriente, cajaAhorro, seguroDeVida, seguroHogar){
        this.cuentaCorriente = cuentaCorriente;
        this.cajaAhorro = cajaAhorro;
        this.seguroDeVida = seguroDeVida;
        this.seguroHogar = seguroHogar;
    }

    clone(){
        return new Banco(this.cuentaCorriente, this.cajaAhorro, this.seguroDeVida, this.seguroHogar);
    }
}

const cuenta1 = new Banco('Es cuenta corriente', 16500, 'Seguro de Vida Activo', 'Seguro de Hogar Pendiente');
const copyCuenta1 = cuenta1.clone();
