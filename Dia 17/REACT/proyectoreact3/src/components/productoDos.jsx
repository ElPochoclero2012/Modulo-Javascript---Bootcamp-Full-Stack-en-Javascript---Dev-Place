import React from "react";

export function Productos2(){

  const listaBusos = [
      { nombre: "Buso camuflado", precio: "$12.99", descripcion: "No veo"},
      { nombre: "Buso gris", precio: "$14.99", descripcion: "No veo colores"},
      { nombre: "Buso verde", precio: "$19.99", descripcion: "Greenscreen"}
  ];

  return (
    <>
    <h1>Busos</h1>
    <div className="card-container">
    {listaBusos.map((element, key) => {
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



// export const ProductoDos = () => {
//   return (
    


//   );
// };
