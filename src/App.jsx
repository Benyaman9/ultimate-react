
import Contacto from "./components/data/Contacto"
import ItemDetailContainer from "./components/data/ItemDetailContainer"
import ItemListContainer from "./components/data/ItemListContainer"
import NavBar from "./components/data/NavBar"
import Nosotros from "./components/data/Nosotros"
import "./components/data/main.css"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import  { CartProvider }  from "./context/cartContext"

import Carrito from "./components/data/Carrito"

function App() {

  
  


  return (
    <div>
      <CartProvider>
      <BrowserRouter>


      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer  />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito/>} />
      </Routes>




      
      
      
      </BrowserRouter>
      </CartProvider>
      
    </div>
  )

}

export default App
