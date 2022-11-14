import React from 'react'
import Button from 'react-bootstrap/Button';

//card individual

function Product(props){

    return(
        <section className="Cards">
            
                <div className="eitherCard">
                    <div className="card" key={props.index}>
                        <img src={props.element.image} className="cardImage"></img>
                        <div className="container">
                            <h4><b>{props.element.name}</b></h4>
                            <p>{props.element.price}</p>
                            <Button variant="success" id="buyButton">Add to cart</Button>
                        </div>
                    </div>
                </div> 
            
        </section>


        
    )
}
export default Product