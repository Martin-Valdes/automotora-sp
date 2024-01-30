import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import HomeContainer from "./components/HomeContainer/HomeContainer"
import ContactoContainer from "./components/ContactoContainer/ContactoContainer"
import FinanciacionContainer from "./components/FinanciacionContainer/FinanciacionContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<HomeContainer/>}/>
          <Route path="autos/autos" element ={<ItemListContainer/>} />
          <Route path="financiacion" element = {<FinanciacionContainer/>}/>
          <Route path="contacto" element = {<ContactoContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
