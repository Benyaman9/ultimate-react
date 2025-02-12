import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar =() => {
        vaciarCarrito();

    }



    return (
        <div className='container'>
            <h1 className='main-title'>Carrito</h1>
            {
                carrito.map((prod) =>(
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.nameProduct}</h3>
                        <p> Precio Unitario ${prod.price}</p>
                        <p> Precio Total ${prod.price * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>

                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                <>
                    <h2>Precio total de la compra: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                    <Link className='enviar' to="/checkout">Finalizar Compra</Link>
                    </> :
                    <h2>El carrito esta vacio.</h2>
                }
            

            


            

        </div>
    )
}

export default Carrito
