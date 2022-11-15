import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import arrayProducts from "./data/ProductList";
import Product from "./Product";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
// import { Navigation } from "swiper";

//Acá haría las Cards en un Carousel de todos los juegos



function Products() {

        return (
          <> 
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >

        {arrayProducts.map((e, index)=>{
          

            return (
              <SwiperSlide className="cardCarousel">
              <Product element={e} index={index}/>
              </SwiperSlide>
            )

        })} 
        
      </Swiper>



      {/* <Carousel>
        
        

          {arrayProducts.map((e, index)=>{
          
            if(index <= 4){
              return (
                <Carousel.Item className="cardCarousel">
                <Product element={e} index={index}/>
                </Carousel.Item>
              )
            }

          })} */}

      

      {/* <Carousel.Item className="cardCarousel">

      {arrayProducts.map((e, index)=>{
          
          if(index > 4){
            return (
              <Product element={e} index={index}/>
            )
          }

        })}

      </Carousel.Item> */}
      
    {/* </Carousel>     */}
    
          </>
        );

        
};

export default Products