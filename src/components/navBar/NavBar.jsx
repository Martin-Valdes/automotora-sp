import { Link } from "react-router-dom"


import "./NavBar.scss"

const NavBar = () =>{

    return(

        <div className="navBar">
            <Link to="/"> <img src="/img/IMG-20231116-WA0019.jpg" alt="" /></Link>
            <ul className="navUl">
                <li><Link to = "/">  Home  </Link></li>
                <li><Link to = "autos/autos">  Comprar </Link></li>
                <li><Link to = "financiacion">Financiacion</Link></li>
                <li><Link to = "contacto">Contacto</Link></li>
            </ul>
        </div>
    )

}

export default NavBar