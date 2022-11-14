import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import arrayOffers from './data/OfferList';

function CarouselOffers() {
  return (
    <div className="TopCarouselGeneral">
    <Carousel fade>
    {arrayOffers.map((e, index)=>
    
    <Carousel.Item key={index}>

      <img
        className="d-block w-100"
        src={e.img}
      />
      <Carousel.Caption>
        <h3>{e.title}</h3>
        <p>{e.description}</p>
      </Carousel.Caption>
    </Carousel.Item>

    )}
    </Carousel>
    </div>
  )
}

export default CarouselOffers