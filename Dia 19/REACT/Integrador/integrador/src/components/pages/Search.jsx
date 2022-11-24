import React from 'react'
import { useParams } from 'react-router-dom'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import arrayProducts from '../data/ProductList'
import Product from '../Product';

function Search() {

  const{filter} = useParams();

  return (
    <>
      <section className="Cards">
        <div className="containerCards">
        <Row>
          {arrayProducts.map((element, index) =>{
            if(element.name.toLowerCase().includes(filter)){
              return(
                <Col lg={4} sm={12} xl={2}>
                <Product element={element} index={index} />
                </Col>
              )
            }
          })}

        </Row>
      </div>
    </section>  
    </>
  )
}

export default Search