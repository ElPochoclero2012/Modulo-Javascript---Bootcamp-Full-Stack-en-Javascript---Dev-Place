import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar';
import FAQ from './components/FAQ';
import General from './components/General';
import Product from './components/Product';
import Products from './components/Products';
import BuyForms from './components/BuyForms';
import { Footer } from './components/Footer';


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
      </header>
      {/* {render} */}
      <Products />
      <General />
      <Product />
      <FAQ />
      <BuyForms />
      <Footer />
    </>
  );
}

export default App;
