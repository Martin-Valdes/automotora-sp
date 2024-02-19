import React from 'react';
import Carrusel from '../Carrusel/Carrusel';
import { Link} from 'react-router-dom';





import './HomeContainer.scss'



const HomeContainer = () =>{



    return(
        <>
            <div className="homeContainer ">
                
                
                <div className='new'>
                    <div className='titleHome'>
                        <h2 >COMPRA</h2>
                        <h3>Y VENTA</h3>
                        <section className='sectionServices'>
                            <ul className='ulServices'>
                                <li>Financiacion</li>
                                <li>Compra</li>
                                <li>Venta</li>
                                <li>Lavadero</li>  
                            </ul>
                            <ul className='ulServices2'>
                                <li>Mecanica</li>
                                <li>Limpieza de tapizados</li>
                                <li>polarizados</li>
                            </ul>
                        </section>
                        </div>
                        
                        <div className="carruselContainer">
                            <div className="buttonNewContainer d-grid gap-2 col-6 mx-auto">
                            <Link to='/autos/autos'><button className="buttonNew btn " type="button">Buscar Usado</button></Link> 
                            </div>
                            <h6>Ultimos ingresos</h6>
                            <div className="card cardContainer">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img src="./img/audi.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./img/bmw.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./img/honda.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    </div>
                                </div>
                        </div>   
                        
                    </div> 
                </div>
                
                
            </div>
            <div className='carruselContainer2'>
                <Carrusel/>
            </div>
            <div className='backWash'>
                <h5 className='titleWash'>Lavado de vehiculos</h5>
                <p>Limpieza de tapizados</p>
                <div>
                    <p className='horario'>Horario de 9 a 17</p>
                </div>
                <div className='buttonWash'>
                    <button>Solicitar presupuesto</button>
                    <button>Coordinar cita</button>
                </div>
                <div className='parrafoContacto'>
                    <p className='titleCtto'>Contactanos</p>
                    <section className='iconsCtto'>
                        <Link><img src="/img/pngwing.com (1).png" alt="" /></Link>
                        <Link><img src="/img/pngwing.com (2).png" alt="" /></Link>
                        <Link><img src="/img/pngwing.com (4).png" alt="" /></Link>
                    </section>
                    <section className='ubicacion'>
                        <p>Atlantida Km 47 / montevideo colon</p>
                    </section>
                </div>
            </div>
            
        </>
    )
}

export default HomeContainer