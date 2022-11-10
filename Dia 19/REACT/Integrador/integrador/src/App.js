import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar';
import NavBarDown from './components/NavBarDown';
import FAQ from './components/FAQ';
import General from './components/General';
import Product from './components/Product';
import Products from './components/Products';
import BuyForms from './components/BuyForms';
import TopProductAndForm from './components/TopProductAndForm';
import CarouselOffers from './components/Carousel';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';


function App() {

  // const [category, setCategory] = useState("Products"); 
  // console.log(category);

  // let render;

  // switch(category){
  //   case "Products":
  //     render = <Products />
  //     break;
  //   case "General": 
  //     render = <General />
  //     break;
  //   case "Product":
  //     render = <Product />
  //     break;
  //   case "FAQ":
  //     render = <FAQ />
  //     break;
  //   case "BuyForms":
  //     render = <BuyForms />
  //     break;
  //   default:
  //     break;
  // }

  return (
    <>
      <header>
        {/* <NavBar setCategory = {setCategory} /> */}
        <NavBar />
        <NavBarDown />
      </header>
      {/* {render} */}
      <CarouselOffers />
      <FAQ />
      <TopProductAndForm />
      {/* <Products />
      <General />
      <Product />
      
      <BuyForms />
       */}
      <Footer />
    </>
  );
}

export default App;
