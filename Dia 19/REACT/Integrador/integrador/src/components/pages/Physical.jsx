import React from 'react'
import arrayProducts from "../data/ProductList";
import Product from '../Product';

function Physical() {

  return (
    <>
    <h1 className="Title">Physical games</h1>
    <div className="Cards">

    {arrayProducts.map((e, key)=>
    {
      if(e.type == "Physical")
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

export default Physical