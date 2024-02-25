import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import HomeContainer from "./components/HomeContainer/HomeContainer"
import ContactoContainer from "./components/ContactoContainer/ContactoContainer"
import FinanciacionContainer from "./components/FinanciacionContainer/FinanciacionContainer"
import NavBar from "./components/NavBar/NavBar"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import UploadCard from "./components/UploadCard/UploadCard"
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute"
import  {AuthProvider}  from "./Context/AuthContext"
import { GalleryCars} from "./Context/GalleryContext"

import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarDetailContainer from "./components/CarDetailContainer/CarDetailContainer"


function App() {

  return (
    <BrowserRouter>
      <div className="allPage">
        
        <AuthProvider>
        <GalleryCars>
          <NavBar/>
          <Routes>
            <Route path="/" element = {<HomeContainer/>}/>
            <Route path="autos/autos" element ={<ItemListContainer/>} />
            <Route path="financiacion" element = {<FinanciacionContainer/>}/>
            <Route path="contacto" element = {<ContactoContainer/>}/>
            <Route path="register" element = {<Register/>}/>
            <Route path="login" element = {<Login/>}/>
            <Route path="/cardetail/:id" element = {<CarDetailContainer/>}/> 
            <Route path="uploadCard" element={
               <ProtectedRoute>
                  <UploadCard/>
               </ProtectedRoute> 
            }
            />
          </Routes>
        </GalleryCars>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}
export default App
