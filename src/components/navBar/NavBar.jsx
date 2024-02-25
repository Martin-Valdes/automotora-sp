
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

import "./NavBar.scss"
import RedSocialIcons from '../RedSocialIcons/RedSocialIcons';

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
                <div className="icowats">    
                    <RedSocialIcons />
                    <Link to="https://www.instagram.com/spautos2024?igsh=MXM5cWRhZWxrYm8yZA==" ><img className='iconsRed' src="/img/instagram.webp" alt="" /></Link>     
                </div>  
                <button><Link to="/login">Login</Link></button>
                <button className={user.email==='valdesmartin@gmail.com' ? 'classBlock': 'classNone'} onClick={handleLogout}>logout</button> 
                                    
            </div>
        </div>
    )

}

export default NavBar