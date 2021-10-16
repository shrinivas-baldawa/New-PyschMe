import React from 'react'
import psych01 from './images/psych01.jpg';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={psych01} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={psych01} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={psych01} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
