import React from 'react'
import Item from './Item.jsx'

const ItemDetail = ({ item }) => {
    return (
        <div className='container'>
            <div className='producto-detalle'>
                <img src={item.img} />
                <div>
                    <h3 className='titulo'>{item.nameProduct}</h3>
                    <p className='descripcion'>{item.descripcion}</p>
                    <p className='categoria'>Categoria:{item.categoria}</p>
                    <p className='precio'>${item.price}</p>
                </div>

            </div>


        </div>
    )
}

export default ItemDetail
