import React from 'react'
import ItemListContainer from './ItemListContainer'
import Item from './Item';
import { toCapital } from '../../assets/ayudas/toCapital';




const itemList = ({ productos, titulo }) => {
    return (
        
            <div className='productos'>
            <h1 className='titulo'>{toCapital(titulo)}</h1>
            {productos.map((productos) => <Item productos={productos} key={productos.id} />)}
                {/* // productos.length > 0 && */}
                
                
                    
                    

                
                
                
            </div>)}


        
    


export default itemList;
