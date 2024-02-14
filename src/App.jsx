import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import HomeContainer from "./components/HomeContainer/HomeContainer"
import ContactoContainer from "./components/ContactoContainer/ContactoContainer"
import FinanciacionContainer from "./components/FinanciacionContainer/FinanciacionContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./Context/authContext"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from "./components/Register/Register"



function App() {

  return (
    <BrowserRouter>
      <div className="allPage">
        <NavBar/>
        <AuthProvider>
          <Routes>
            <Route path="/" element = {<HomeContainer/>}/>
            <Route path="autos/autos" element ={<ItemListContainer/>} />
            <Route path="financiacion" element = {<FinanciacionContainer/>}/>
            <Route path="contacto" element = {<ContactoContainer/>}/>
            <Route path="register" element = {<Register/>}/>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}
export default App
