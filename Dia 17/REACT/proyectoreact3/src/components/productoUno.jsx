import React from "react";

export function Productos1(){

const listaPantalones = [
    { nombre: "Pantalon corto", precio: "$12.99", descripcion: "Bien corto"},
    { nombre: "Pantalon largo", precio: "$14.99", descripcion: "Bien largo"},
    { nombre: "Pantalon Jean", precio: "$19.99", descripcion: "Bien jean"}
  ];
    
    return (
      <>
      <h1>Pantalones</h1>
      <div className="card-container">
      {listaPantalones.map((element, key) => {
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
    // <div className="card">
    //   <img src={jean} alt="Denim Jeans" id="imagen"/>
    //   <h1>Tailored Jeans</h1>
    //   <p className="price">$19.99</p>
    //   <p>Some text about the jeans..</p>
    //   <p>
    //     <button>Add to Cart</button>
    //   </p>
    // </div>
}
