class NIF{
    dni;
    letra;

    constructor() {
        dni = 0;
        letra = "";
    }

    constructor(dni) {
        this.dni = dni;
        letra = calcularLetra();
    }

    leer(){
        letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return letras[dni % 23];
    }

    ingresarDNI(){
        do{
            alert("Introduzca un DNI:  ");
            dni = parseInt(prompt);
        }while(dni <= 0);
        this.letra = calcularLetra();
    }

    getDNI(){
        return this.dni;
    }

    setDNI(dni){
        this.dni = dni;
    }

}