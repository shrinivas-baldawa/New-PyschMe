import React from 'react'
import mooddisorder from './images/moodDisorder.jpg'
import Navbar from './Navbar'

export default function Services() {
    return (
        <div>
        <Navbar/>
        <div className="row row-cols-1 p-4 row-cols-md-4 g-4">
            <div className="col">
                <div className="card text-center">
                <img src={mooddisorder} className="card-img-top img-responsive" alt="..."/>
                <div className="card-body d-grid">
                    <button type="button" className="btn btn-primary text-centre">Mood Disorders</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}