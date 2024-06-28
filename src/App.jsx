import ItemDetailContainer from "./components/data/ItemDetailContainer"
import ItemListContainer from "./components/data/ItemListContainer"
import NavBar from "./components/data/NavBar"
import "./components/data/main.css"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer itemId={2} />
    </div>
  )

}

export default App
