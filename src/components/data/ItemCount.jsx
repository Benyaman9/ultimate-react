import React,  { useState }  from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
    
    
    
    
    
    
    



    return (

        <div>
            <div className='item-count'>
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className='agregar-al-carrito'onClick={handleAgregar} >agregar al carrito</button>
        </div>
    )}


export default ItemCount
