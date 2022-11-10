import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import kumalala from './assets/kumalala.jpg'

function CarouselOffers() {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://1.bp.blogspot.com/-cEEpysNJBak/XwiUiNmCB-I/AAAAAAAAlX8/rkaUtAmRd2Yv3ng1DdpsNIkl82YeDBlJACNcBGAsYHQ/s1600/Firewatch%2Bwallpaper.png"
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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Yume_Nikki_Logo.svg/1200px-Yume_Nikki_Logo.svg.png"
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
        src="https://cdn.akamai.steamstatic.com/steam/apps/1604000/capsule_616x353.jpg?t=1658165566"
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