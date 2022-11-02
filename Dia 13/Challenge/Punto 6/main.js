class Cuenta{
  titular;
  cantidad;

  constructor(){
    this.titular = titular;
  }
}

function mostrar(){
    console.log(this.titular, this.cantidad);
}

function ingresar(cantidad){
  let cantidadIngresada = cantidad;
  if(cantidadIngresada > 0){
      cantidad += cantidadIngresada;
      console.log("Dinero ingresado: " + cantidadIngresada);
  } else {
    console.log("Los datos no se han podido ingresar.")
  }
}

function retirar(cantidad){
  let cantidadRetirada = cantidad;
  console.log("La cantidad retirada es de= " + cantidadRetirada);
}

ingresar(200);

retirar(50);