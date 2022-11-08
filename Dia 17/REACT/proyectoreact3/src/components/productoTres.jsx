import React from "react";

export function Productos3(){

  const listaRemeras = [
      { nombre: "Remera manga corta", precio: "$12.99", descripcion: "Manga cortita"},
      { nombre: "Remera manga larga", precio: "$14.99", descripcion: "Manga larguita"},
      { nombre: "Remera sin mangas", precio: "$19.99", descripcion: "Manga inexistente"}
  ];

  return (
    <>
    <h1>Remeras</h1>
    <div className="card-container">
    {listaRemeras.map((element, key) => {
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

