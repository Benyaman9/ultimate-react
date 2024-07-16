import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({productos}) => {
    return (
        <div className='producto'>
            <img src={productos.img} alt={productos.nameProduct} />
            <div className=''>
                <h3>"{productos.nameProduct} "</h3>
                <p>Precio: $ {productos.price}</p>
                <p>Categoria: {productos.categoria.id}</p>
                <p>{productos.descripcion}</p>
                <Link className="ver-mas" to={`/item/${productos.id}`}>ver mas...</Link>

            </div>
            

            

        </div>
    )
}

export default Item
