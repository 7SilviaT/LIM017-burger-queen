import React, { Fragment, useState } from 'react';
import BreakfastCart from "./components/BreakfastCart";

// import logo from './logo.svg';
import './styles/App.css';

function App() {
// estado de desayuno con listado de productos
  const [breakfastCart, setBreakfast] = useState([
  { id:1, nombre:'Café americano', precio: 5 },
  { id:2, nombre:'Café con leche', precio: 7},
  { id:3, nombre:'Sandwich de jamón y queso', precio: 10 },
  { id:4, nombre:'Jugo natural', precio: 7 },
])

// estado de la orden(carrito)
const [order, setOrder] = useState([])

  return (
    //hook que sera un contenedor
    <Fragment>
      <button className='breakfast_btn-title'><h3>Desayuno</h3></button>
      {breakfastCart.map((breakfastItem)=> (
        <BreakfastCart
        key={breakfastCart.id}
        breakfastItem={breakfastItem}
        order={order}
        setOrder={setOrder}
        setBreakfast={setBreakfast}
        />
      ))}
    </Fragment>
  );


      /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}

export default App;
