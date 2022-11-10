import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import kumalala from './assets/kumalala.jpg'

function CarouselOffers() {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media2.giphy.com/media/vMmnJti6wQPDy/giphy.gif"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Numero 1</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.tenor.com/1y8zDc-ll-EAAAAd/3d-saul-saul-goodman.gif"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Numero 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.kym-cdn.com/entries/icons/original/000/040/491/cover10.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Numero 3</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselOffers