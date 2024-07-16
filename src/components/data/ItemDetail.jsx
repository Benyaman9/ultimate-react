import React, { useState } from 'react'
import Item from './Item.jsx'
import ItemCount from './ItemCount.jsx'
import { toCapital } from '../../assets/ayudas/toCapital.js';

const ItemDetail = ({ item }) => {
    
    const [cantidad, setCantidad] = useState(1);
    const handleRestar =() => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    const handleAgregar = () => {
        console.log({...item, cantidad});

    }

    
    


    return (
        <div className='container'>
            <div className='producto-detalle'>
                <img src={item.img} />
                <div>
                    <h3 className='titulo'>{item.nameProduct}</h3>
                    <p className='descripcion'>{item.descripcion}</p>
                    <p className='categoria'>Categoria:{toCapital(item.categoria)}</p>
                    <p className='precio'>${item.price}</p>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar} />
                </div>

            </div>


        </div>
    )
}

export default ItemDetail
