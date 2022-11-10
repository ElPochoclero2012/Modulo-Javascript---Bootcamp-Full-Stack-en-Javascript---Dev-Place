import React, {Component} from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import Item from "./Item";
// import kumalala from './assets/kumalala.jpg'

// const breakPoints = [
//   {width: 1, itemsToShow: 1},
//   {width: 550, itemsToShow: 2},
//   {width: 768, itemsToShow: 3},
//   {width: 1200, itemsToShow: 4}
// ];

class Products extends Component {
    render() {
        return (
         <> 
            {/* <Carousel>
                <div>
                    <img className='imagen' src="https://picsum.photos/1920/720" />
                </div>

                <div>
                    <img className='imagen' src="https://picsum.photos/720/720" />
                </div>

                <div>
                    <img className='imagen' src="https://picsum.photos/100/100" />
                </div>
            </Carousel> */}
          </>
        );
    }
}; 

export default Products

        {/* <div className="CarouselStyle">
          <Carousel breakPoints={breakPoints}>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
            <Item>Four</Item>
            <Item>Five</Item>
            <Item>Six</Item>
            <Item>Seven</Item>
            <Item>Eight</Item>
          </Carousel>
        </div> */}

