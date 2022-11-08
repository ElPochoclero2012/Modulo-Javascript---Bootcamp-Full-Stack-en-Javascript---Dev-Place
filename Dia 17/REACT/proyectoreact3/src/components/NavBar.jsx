import React from 'react'

function NavBar(props) {

  function elegirTipo(e){
    props.setCategoria(e.target.textContent);
  }

  return (
    <ul>
        <li><a href="#buso" onClick={elegirTipo}>Buso</a></li>
        <li><a href="#pantalon" onClick={elegirTipo}>Pantalon</a></li>
        <li><a href="#remera" onClick={elegirTipo}>Remera</a></li>
        <li><a href="#hijos" onClick={elegirTipo}>Hijos</a></li>
        <li><a href="#hora" onClick={elegirTipo}>Hora</a></li>
        <li><a href="#resumen" onClick={elegirTipo}>Resumen</a></li>
    </ul>
  )
}

export default NavBar