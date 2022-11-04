import React, {useEffect, useState, useRef} from 'react';
import './App.css';

function Sumar(){

  let [total, setTotal] = useState(0);

  let resultado = useRef();

  useEffect(() => {
    resultado.current.textContent = total;
  }, [total]);

  let sumar = () =>{
    let num1 = document.querySelector('#uno').value;
    let num2 = document.querySelector('#dos').value;
    setTotal(parseInt(num1) + parseInt(num2));
  }

  return (
    <div>
      <h2>Sumar dos numeros</h2>
      <input placeholder = "Primer numero" type="number" id="uno"></input>
      <input placeholder = "Segundo numero" type="number" id="dos"></input>
      <button onClick={sumar}>Sumatoria</button>
      <p ref={resultado}>Total: {total}</p>
    </div>

  )
}


function App() {

  let texto = "Hola Mundo";

  let textoClase = <p className='miclase'>Hola Mundo con clase</p>

  const usuarios = [
    { nombre: "Marcelo Albano", id: 1},
    { nombre: "Alan Suarez", id: 2},
    { nombre: "Pepe Argento", id: 3}
  ];

  let mostrarUsuarios = 
  <div className='tabla-usuarios'>
    <div><span>Usuario: {usuarios[0].nombre}</span><span> id: {usuarios[0].id}</span></div>
    <div><span>Usuario: {usuarios[1].nombre}</span><span> id: {usuarios[1].id}</span></div>
    <div><span>Usuario: {usuarios[2].nombre}</span><span> id: {usuarios[2].id}</span></div>
  </div>

  return (
    <>
      {texto}
      {textoClase}
      {mostrarUsuarios}
      <Sumar/>
    </>
  );
}

export default App;