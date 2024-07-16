import React, { useEffect, useState } from 'react'
import data from "../data/productos.json"
import pedirProductos from "./pedirProducto";
import ItemList from "./itemList.jsx";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;
    console.log(categoria);



    // const pedirProductos = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve(data)

    //     })

    // }
    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (categoria){
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);

                } else{
                    setProductos(res);
                    setTitulo("Productos");
                }
                

                
            })

    }, [categoria])





    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />



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