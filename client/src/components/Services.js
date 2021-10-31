import React from 'react'
import mooddisorder from './images/moodDisorder.jpg'
import Angermanagement from './images/Angermanagement.jpg'
import Gentictesting from './images/Gentictesting.jpeg'
import Alcoholabuse from './images/Alcoholabuse.jpg'
import Depression from './images/Depression.jpg'
import Anxiety from './images/Anxiety.jpg'
import PrescriptionDrugAbuse from './images/PrescriptionDrugAbuse.jpg'
import OCD from './images/OCD.jpg'
import Navbar from './Navbar'
import './Services.css'

export default function Services() {

    return (
        <div>
            <h1>Our Featured Services</h1>
            <h4>We Are Here For You During Every Step</h4>
            <br/>
            <br/>
            <br/>
            <div className="services-container">
                <div className="cards">
                    <img src={mooddisorder} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Mood Disorder</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Angermanagement} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Anger Management</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Gentictesting} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Gentic Testing</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Gentictesting} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Psychiatric Care</h1>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="services-container">
                <div className="cards">
                    <img src={mooddisorder} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Relapse Prevention</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Angermanagement} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Dual Diagnosis Treatment</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={PrescriptionDrugAbuse} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Prescription Drug Abuse</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Gentictesting} alt="..." className="image"/>
                    <div className="cards-info">
                        <h1>Heroin Addiction</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}