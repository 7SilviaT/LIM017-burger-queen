import React from 'react';
import '../styles/BreakfastCart.css';

const BreakfastCart =({breakfastItem, order,  setOrder,breakfastCart})=>{
    
    // constante que guarda propiedades del estado de desayuno
    const {id,nombre,precio} = breakfastItem;

    // Funcion para agregar items al pedido(order)
    const addItem = id => {
        const breakfastItem = breakfastCart.filter((breakfastItem) => breakfastItem.id === id )
    }


    return (
        <div>
            <div>
            <button className='item_btn' onClick={()=>addItem(id)}>
                <p>{nombre}</p>
                <p>S/.{precio}</p>
                </button>
            </div>
        </div>

    );
};

export default BreakfastCart;