import React from 'react';
import Carrusel from '../Carrusel/Carrusel';


import './HomeContainer.scss'

const HomeContainer = () =>{

    return(
        <>
            <div className="homeContainer ">
                    <div className='titleHome'>
                    <h2 >COMPRA</h2>
                    <h3>Y VENTA</h3>
                    <ul className='ulServices'>
                        <li>Financiacion</li>
                        <li>Compra</li>
                        <li>Venta</li>
                        <li>Lavdero</li>
                    </ul>
                    </div>
                    <div className="carruselContainer">
                    <h6>Ultimos ingresos</h6>
                    <div className="card cardContainer">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card-body">
                                        <img src="/img/background.webp" className="d-block w-100" alt="..."/>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="buttonGo btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div className="card-body">
                                        <img src="img/img-20231201-wa0019.webp" className="d-block w-100" alt="..."/>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="buttonGo btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <div className="card-body">
                                        <img src="/img/img-20231201-wa0037.webp" className="d-block w-100" alt="..."/>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="buttonGo btn  btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <p>Siguenos en redes</p>
                    <div className='icoWats'>
                        <img src="/img/whatsapp_1_.webp" alt="" />
                        <img src="/img/instagram.webp" alt="" />
                        <img src="/img/facebook.webp" alt="" />
                    </div>
                    </div>
                            
            </div>
        
        <div className='carruselContainer'>
                <Carrusel/>
            </div>
        <div className='backWash'>
            <p className='titleWash'>Lavado de vehiculos</p>
            <div>
                <p className='horario'><br/>Horario de 9 a 17</p>
            </div>
            <div className='buttonWash'>
                <button>Solicitar presupuesto</button>
                <button>Coordinar cita</button>

            </div>
        </div>
        </>
    )
}

export default HomeContainer