import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar'
import  Hijo0  from './components/Hijo0';
import { Productos1 } from './components/productoUno';
import { Productos2 } from './components/productoDos';
import { Productos3 } from './components/productoTres';
import BtnFecha from './components/BtnFecha';
import BtnResumen from './components/BtnResumen'
import { Footer } from './components/Footer';

function App() {

  const [categoria, setCategoria] = useState("Buso"); 
  console.log(categoria);

  let variable;

  switch(categoria){
    case "Buso":
        variable = <Productos2 />
      break;
    case "Pantalon": 
        variable = <Productos1 />
      break;
    case "Remera":
        variable = <Productos3 />
      break;
    case "Hijos":
        variable = <Hijo0 />
      break;
    case "Hora":
        variable = <BtnFecha />
      break;
    case "Resumen":
        variable = <BtnResumen />
      break;
    default:
      break;
  }

  return (
    <>
    <header>
      <NavBar setCategoria = {setCategoria} />
    </header>
      {/*<BtnFecha />
      <h1>Soy el padre</h1>
      <Hijo1 />
      <Productos1 />
      <Productos2 />
      <Productos3 /> */}
      {variable}
      <Footer />
    </>
  );
}

export default App;
