const palabras = [
    {
        id : 1, 
        letras: ['R', 'A', 'T', 'O', 'N'],
        pista: 'Animal pequeño o persona avara'
    },
    {
        id : 2, 
        letras: ['C', 'O', 'D', 'I', 'G', 'O',],
        pista: "Hoy estuve todo el día luchando con el ____ y no lo pude hacer andar :("
    },
    {
        id : 3, 
        letras: ['L', 'I', 'B', 'R', 'O'],
        pista: "George R. R. Martin nunca terminó su último ______"
    },
    {
        id : 4,
        letras : ['L', 'A', 'P', 'I', 'Z'],
        pista: "Si escribo en papel y quiero poder borrar, uso un ____"
    }
]

let guiones = [];
const etapas= ["img/Fase7.png", "img/Fase6.png", "img/Fase5.png", "img/Fase4.png", "img/Fase3.png", "img/Fase2.png", "img/Fase1.png"];

let pantalla = document.querySelector('.Seccion');
let juegoLetras = document.querySelector('.juego-letras');
let intentos = document.querySelector('.intentos')
let ahorcado = document.querySelector('.juego-img');
let botonPista = document.querySelector('#pedir-pista')
let pista = document.querySelector('#pista')

let palabraAJugar, intentosQueQuedan;

function empezarJuego(){
    borrarPantalla();
    intentosQueQuedan = 6;
    let idRandom  = Math.floor((Math.random() * (4 - 1 + 1)) + 1);
    intentos.innerHTML = 'Quedan '+ intentosQueQuedan + ' intentos'
    palabraAJugar = palabras.find( palabra => palabra.id == idRandom);
    palabraAJugar.letras.forEach( (letra) =>{
        guiones.push('_')}
    )
    juegoLetras.innerHTML = guiones.join(' '); 
}

function borrarPantalla(){
    guiones = [];
    juegoLetras.innerHTML = " ";
    intentos.innerHTML = " ";
}

botonPista.onclick = () => {
    pista.textContent = palabraAJugar.pista;
}

let botonesLetras = document.querySelectorAll('.letra-boton');

botonesLetras.forEach( (btn) =>{
    btn.onclick = (e) => {
    e.target.setAttribute('disabled', 'disabled');
    let letraElegida = btn.textContent;
    if(comprobarLaLetra(letraElegida)){
            palabraAJugar.letras.forEach((ele, indiceDeLetra)=>{
                if(letraElegida === ele){
                    guiones[indiceDeLetra] = ele;
                }
            })

        juegoLetras.innerHTML = guiones.join(' '); 


    }else{
        intentosQueQuedan --;
        intentos.innerHTML = 'Quedan '+ intentosQueQuedan +' intentos';
        ahorcado.setAttribute('src', etapas[intentosQueQuedan]);
        comprobarIntentos();
    }    
    }
})


function comprobarLaLetra(l){
   return palabraAJugar.letras.includes(l);
}

function comprobarIntentos(){
    if(intentosQueQuedan === 0){
     pantalla.innerHTML = "PERDISTE <a href=''>empezar juego de nuevo</a>"
    }
}