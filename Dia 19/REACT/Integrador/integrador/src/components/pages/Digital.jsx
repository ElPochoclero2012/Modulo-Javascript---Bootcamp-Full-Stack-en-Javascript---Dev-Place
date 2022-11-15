import React from 'react'
import arrayProducts from "../data/ProductList";
import Product from '../Product';

function Digital() {
  return (
    <>
    <h1 className="Title">Digital games</h1>    
    
    <div className="CategoryShowcase">

    {arrayProducts.map((e, key)=>
      {
        if(e.type == "Digital")
        {
          return(
            <Product element={e} key={key}/>
          )
        }
      })}
      </div>
    </>
  )
  
}

export default Digital