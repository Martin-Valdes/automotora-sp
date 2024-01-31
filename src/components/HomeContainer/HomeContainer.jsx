import { Link } from "react-router-dom";

import './HomeContainer.scss'

const HomeContainer = () =>{

    return(

        <div className="homeContainer">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="imgPrimary carousel-item active">
                        <img  src="/img/ge-and-black-bold-car-service-poster.webp" alt="imagen de portada" />
                    </div>
                    <div class="imgSecundary carousel-item " >
                        <img  src="/img/Black And Red Modern Car Wash Service Instagram Post.webp" alt=" imagen portada car wash" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )

}

export default HomeContainer