import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//Challenge 14

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//Punto 1

// const elemento = <h1>Hola Mundo</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(elemento);

//Punto 2

// root.render(usuarios);

//Punto 3

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);

//Punto 4



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();