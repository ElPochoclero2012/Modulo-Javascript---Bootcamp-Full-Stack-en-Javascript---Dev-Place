import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import arrayProducts from "./data/ProductList";
import Product from "./Product";

//Acá haría las Cards en un Carousel de todos los juegos



function Products() {

        return (
          <> 
      
      <Carousel>
        
        <Carousel.Item className="cardCarousel">

          {arrayProducts.map((e, index)=>{
          
            if(index <= 4){
              return (
                <Product element={e} index={index}/>
              )
            }

          })}

      </Carousel.Item>

      <Carousel.Item className="cardCarousel">

      {arrayProducts.map((e, index)=>{
          
          if(index > 4){
            return (
              <Product element={e} index={index}/>
            )
          }

        })}

      </Carousel.Item>
      
    </Carousel>    
    
          </>
        );

        
};

export default Products