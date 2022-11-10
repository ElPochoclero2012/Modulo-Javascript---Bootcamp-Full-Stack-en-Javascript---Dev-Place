import React from 'react'
import SteamVerde from './assets/SteamVerde.png'

//Sección de intro sería

function NavBar(props) {

  function elegirTipo(e){
    props.setCategory(e.target.textContent);
  }

  return (
    <ul>
        <li><h3><a><img src={SteamVerde} className="iconNav"></img>GreenSteam</a></h3></li>
        <li><h3><a href="#products" onClick={elegirTipo} className="aHover">Products</a></h3></li>
        <li><h3><a href="#general" onClick={elegirTipo} className="aHover">General</a></h3></li>
        <li><h3><a href="#product" onClick={elegirTipo} className="aHover">Product</a></h3></li>
        <li><h3><a href="#faq" onClick={elegirTipo} className="aHover">FAQ</a></h3></li>
        <li><h3><a href="#form" onClick={elegirTipo} className="aHover">BuyForms</a></h3></li>
    </ul>
  )
}

export default NavBar