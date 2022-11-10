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

  let renderizar;

  switch(categoria){
    case "Buso":
      renderizar = <Productos2 />
      break;
    case "Pantalon": 
      renderizar = <Productos1 />
      break;
    case "Remera":
      renderizar = <Productos3 />
      break;
    case "Hijos":
      renderizar = <Hijo0 />
      break;
    case "Hora":
      renderizar = <BtnFecha />
      break;
    case "Resumen":
      renderizar = <BtnResumen />
      break;
    default:
      break;
  }

  return (
    <>
    <header>
      <NavBar setCategoria = {setCategoria} />
    </header>
      {renderizar}
      <Footer />
    </>
  );
}

export default App;
