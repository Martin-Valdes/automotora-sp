
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import "./NavBar.scss"

const NavBar = () =>{

    const {user, logout} = useAuth()
    const navigate = useNavigate()
    //aca debemos tomar a user para generar las vistas

    const handleLogout = async() =>{

        await logout()
        navigate('/')

    }

    return(

        <div className="navBar">
            <Link to="/"> <img className="logoSp" src="/img/IMG-20231116-WA0019.jpg" alt="" /></Link>
            <ul className="navUl">
                <li><Link to = "/">  Home  </Link></li>
                <li><Link to = "autos/autos">  Comprar </Link></li>
                <li><Link to = "financiacion">Financiacion</Link></li>
                <li><Link to = "contacto">Contacto</Link></li>
            </ul>
            
            <div className='loginUserContainer'>
                <button><Link to="/register">Registrarme</Link></button>
                <button><Link to="/login">Login</Link></button>
                <button className={user.email==='valdesmartin@gmail.com' ? 'classBlock': 'classNone'} onClick={handleLogout}>logout</button> 
                <div className="iconsContainer">
                        <div className='icoWats'>
                            <img src="/img/whatsapp_1_.webp" alt="" />
                            <img src="/img/instagram.webp" alt="" />
                            <img src="/img/facebook.webp" alt="" />
                        </div>
                </div>                      
            </div>
        </div>
    )

}

export default NavBar