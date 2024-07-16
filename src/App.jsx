import ItemDetailContainer from "./components/data/ItemDetailContainer"
import ItemListContainer from "./components/data/ItemListContainer"
import NavBar from "./components/data/NavBar"
import Nosotros from "./components/data/Nosotros"
import "./components/data/main.css"
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>


      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer  />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>




      
      
      
      </BrowserRouter>
    </div>
  )

}

export default App
