import { Link } from "react-router-dom"


import "./NavBar.scss"

const NavBar = () =>{

    return(

        <div className="navBar">
            <Link to="/"> <img className="logoSp" src="/img/IMG-20231116-WA0019.jpg" alt="" /></Link>
            <ul className="navUl">
                <li><Link to = "/">  Home  </Link></li>
                <li><Link to = "autos/autos">  Comprar </Link></li>
                <li><Link to = "financiacion">Financiacion</Link></li>
                <li><Link to = "contacto">Contacto</Link></li>
            </ul>
            <div className="iconsContainer">
                <div className='icoWats'>
                        <img src="/img/whatsapp_1_.webp" alt="" />
                        <img src="/img/instagram.webp" alt="" />
                        <img src="/img/facebook.webp" alt="" />
                    </div>
            </div>
        </div>
    )

}

export default NavBar