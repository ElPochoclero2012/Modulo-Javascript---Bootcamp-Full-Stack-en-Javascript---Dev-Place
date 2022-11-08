import React from 'react'

function BtnResumen() {
    const listaHardcodeada = [
        { nombre: "Pantalon corto", precio: "$12.99", descripcion: "Bien corto"},
        { nombre: "Pantalon largo", precio: "$14.99", descripcion: "Bien largo"},
        { nombre: "Pantalon Jean", precio: "$19.99", descripcion: "Bien jean"},
        { nombre: "Buso camuflado", precio: "$12.99", descripcion: "No veo"},
        { nombre: "Buso gris", precio: "$14.99", descripcion: "No veo colores"},
        { nombre: "Buso verde", precio: "$19.99", descripcion: "Greenscreen"},
        { nombre: "Remera manga corta", precio: "$12.99", descripcion: "Manga cortita"},
        { nombre: "Remera manga larga", precio: "$14.99", descripcion: "Manga larguita"},
        { nombre: "Remera sin mangas", precio: "$19.99", descripcion: "Manga inexistente"}
    ];
  return (
    <>
    <h1>Remeras</h1>
    <div className="card-container">
    {listaHardcodeada.map((element, key) => {
      return(
        <div class="card" key={key}>
        <h1>{element.nombre}</h1>
        <p class="price">{element.precio}</p>
        <p>{element.descripcion}</p>
        <p><button>Add to Cart</button></p>
      </div>
      )
    })}
    </div>
    </>
  )
}

export default BtnResumen