import React from 'react'
import ItemListContainer from './ItemListContainer'
import Item from './Item';




const itemList = ({ productos }) => {
    return (
        
            <div className='productos'>
            <h1 className='titulo'>Productos</h1>
            {productos.map((productos) => <Item productos={productos} key={productos.id} />)}
                {/* // productos.length > 0 && */}
                
                
                    
                    

                
                
                
            </div>)}


        
    


export default itemList;
