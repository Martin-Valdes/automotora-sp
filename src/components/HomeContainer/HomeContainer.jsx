import React from 'react';
import Carrusel from '../Carrusel/Carrusel';
import { Link} from 'react-router-dom';
import RedSocialIcons from '../RedSocialIcons/RedSocialIcons';




import './HomeContainer.scss'



const HomeContainer = () =>{



    return(
        <>
            <div className="homeContainer ">
                
                
                <div className='new'>
                    <div className='titleHome'>
                        <h2 >Venta</h2>
                        <h3>compra</h3>
                        <h3>Permuta</h3>
                        <h3>Financiacion</h3>
                        <h3>Consignacion</h3>
                        
                        
                        </div>
                        
                        <div className="carruselContainer">
                            <div className="buttonNewContainer d-grid gap-2 col-6 mx-auto">
                            <button className="buttonNew btn " type="button"><Link to='/autos/autos'>Buscar Usado</Link> </button>
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
                <section className='sectionServices'>
                            <ul className='ulServices'>
                                <li>Financiacion</li>
                                <li>Compra</li>
                                 
                            </ul>
                            <ul className='ulServices'>
                                <li>Venta</li>
                                <li>Lavadero</li>  
                            </ul>
                            <ul className='ulServices2'>
                                <li>Mecanica</li>
                                <li>Limpieza de tapizados</li>
                                
                            </ul>
                            <ul className='ulServices2'>
                                <li>polarizados</li>
                                <li>Tratamientos ceramicos</li>
                            </ul>
                        </section>
                
            </div>
            <div className='carruselContainer2'>
                <Carrusel/>
            </div>
            <div className='backWash'>
                <h5 className='titleWash'>Lavado de vehiculos</h5>
                <p>Limpieza de tapizados</p>
                <div className='horarioContainer'>
                    <p className='horario'>Horario de Lunes a sabado
                    de 10 a 18</p>
                    <p>Domingo se coordina visita</p>
                </div>
                <div className='buttonWash'>
                    <button><Link to="https://wa.me/+59899275858?text='Buen dia, necesito presupuesto'" >Solicitar presupuesto</Link></button>
                    <button><Link to="https://wa.me/+59899275858?text='Buen dia, necesito coordinar una cita'" >Coordinar cita</Link></button>
                </div>
                <div className='parrafoContacto'>
                    <p className='titleCtto'>Contactanos</p>
                    <section className='iconsCtto'>
                        <RedSocialIcons/>
                        <Link to="https://www.instagram.com/spautos2024?igsh=MXM5cWRhZWxrYm8yZA==" ><img src="/img/pngwing.com (2).png" alt="" /></Link>
                        <Link to="mailto:spautos2024@gmail.com" ><img src="/img/pngwing.com (4).png" alt="" /></Link>
                    </section>
                    <section className='ubicacion'>
                        <p>Atlantida Km 45 / montevideo colon</p>
                    </section>
                </div>
            </div>
            
        </>
    )
}

export default HomeContainer