import React, { useState } from 'react'
import { useCart } from 'react-use-cart';
// import Button from 'react-bootstrap/Button';
// import ButtonItems from './ButtonItems';


//card individual

const Product = (props) => {

    const { addItem } = useCart();

    return(

            

                    <div className="card" key={props.index}>
                        <img src={props.element.image} className="cardImage"></img>
                        <h4><b>{props.element.name}</b></h4>
                            <p>${props.element.price}</p>
                            <button className="btn btn-success" onClick={() => addItem(props.element)}>Add to Cart</button>
                        {/* <div className="container"> */}
                            {/* <h4><b>{props.element.name}</b></h4>
                            <p>{props.element.price}</p>
                            <Button variant="success" id="buyButton">Add to cart</Button> */}
                        {/* </div> */}
                    </div>

            



        
    )
}
export default Product