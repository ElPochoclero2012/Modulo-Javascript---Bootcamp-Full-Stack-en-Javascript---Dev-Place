import './App.css';
import React from 'react';

//Challenge

// class Auto extends React.Component {
//   render() {
//     return <h2>Soy un auto hecho en una clase</h2>
//   }
// }



// function Auto1(){
//   return <h2>Soy un auto hecho con una función</h2>
// }



// function AutoRojo(props){
//   return (
//     <h2>{props.color}</h2>
//   )
// }

// function Garaje(){
//   return(
//     <>
//       <h1>Quien sos vos?</h1>
//       <Auto />
//     </>
//   )
// }

//Pair Group



function App() {


  return (
    <>

    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <Footer/>
       <IconBar/>
       <Descargar/>
    </div>

    {/* <AutoRojo color = "Soy un auto rojo" />
    <Auto1 />
    <Auto />
    <Garaje /> */}
    
    </>
  );
}

export default App;
