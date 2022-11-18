import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import CarouselOffers from './Carousel';
import Products from './Products';
import FAQ from './FAQ';
import TopProductAndForm from './TopProductAndForm';
import { CartProvider } from "react-use-cart";



function Homepage() {


  return (
    <>
      <CartProvider>

        <CarouselOffers />

        <Products />

        <FAQ />

        <TopProductAndForm /> 

      </CartProvider>
    </>
  );
}

export default Homepage;
