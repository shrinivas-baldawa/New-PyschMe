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
            <Navbar></Navbar>
            <h1>Our Featured Services</h1>
            <h4>We Are Here For You During Every Step</h4>
            <br />
            <br />
            <br />
            <div className="services-container">
                <div className="cards">
                    <img src={mooddisorder} alt="..." className="image" />
                    <div className="cards-info">
                        <button type="button" class="btns btn-primary" data-bs-toggle="modal" data-bs-target="#moodmodal"><h1> Mood Disorder </h1></button>

                        <div class="modal fade" id="moodmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Mood Disorder</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>A mood disorder is a mental health problem that primarily affects a person's emotional state. It is a disorder in which a person experiences long periods of extreme happiness, extreme sadness, or both. It is normal for someone's mood to change, depending on the situation.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <img src={Angermanagement} alt="..." className="image" />
                    <div className="cards-info">
                        <button type="button" class="btns btn-primary" data-bs-toggle="modal" data-bs-target="#angermodal"><h1> Anger Management </h1></button>

                        <div class="modal fade" id="angermodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Anger Management</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Anger is an emotion characterized by antagonism toward someone or something you feel has deliberately done you wrong.excessive anger can cause problems. Increased blood pressure and other physical changes associated with anger make it difficult to think straight and harm your physical and mental health.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <img src={Gentictesting} alt="..." className="image" />
                    <div className="cards-info">
                        <h1>Gentic Testing</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Gentictesting} alt="..." className="image" />
                    <div className="cards-info">
                        <h1>Psychiatric Care</h1>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="services-container">
                <div className="cards">
                    <img src={mooddisorder} alt="..." className="image" />
                    <div className="cards-info">
                        <h1>Relapse Prevention</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Angermanagement} alt="..." className="image" />
                    <div className="cards-info">
                        <h1>Dual Diagnosis Treatment</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={PrescriptionDrugAbuse} alt="..." className="image" />
                    <div className="cards-info">
                        <h1>Prescription Drug Abuse</h1>
                    </div>
                </div>
                <div className="cards">
                    <img src={Gentictesting} alt="..." className="image" />
                    <div className="cards-info">
                        <h1>Heroin Addiction</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}