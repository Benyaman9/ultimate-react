import React, { useEffect, useState } from 'react'
import data from "../data/productos.json"
import pedirProductos from "./pedirProducto";
import ItemList from "./itemList.jsx";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);



    // const pedirProductos = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve(data)

    //     })

    // }
    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })

    }, [])





    return (
        <div>
            <ItemList productos={productos} />



        </div>
    )





};







export default ItemListContainer
// return(
//     <div key={productos.id} className='producto' >
//         <img src={productos.img} alt={productos.nameProduct} />
//         <h2>{productos.nameProduct}</h2>
//         <p>${productos.price}</p>
//         <p className='descripcion'>{productos.descripcion}</p>
//         <p> Categoria: {productos.categoria.id}  </p>
        
//         <p className='ver-mas'>Ver mas</p>
//     </div>
    




// )