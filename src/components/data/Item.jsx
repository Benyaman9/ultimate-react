import React from 'react'


const Item = ({productos}) => {
    return (
        <div className='producto'>
            <img src={productos.img} alt="" />
            <div className=''>
                <h3>"{productos.nameProduct} "</h3>
                <p>Precio: $ {productos.price}</p>
                <p>Categoria: {productos.categoria.id}</p>
                <p>{productos.descripcion}</p>
                <a className="ver-mas" href={`/item/${productos.id}`}>ver mas...</a>

            </div>
            

            

        </div>
    )
}

export default Item
