var texto = prompt("Ingrese un texto y le diré como está formado");

alert(info(texto));

function info(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
  
    if(cadena == cadena.toUpperCase()) {
      resultado += "está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += "está formada sólo por minúsculas";
    }
    else {
      resultado += "está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
}
