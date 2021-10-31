import React from 'react'
import Navbar from './Navbar'
import aboutus from './images/AboutUS.jpg';
import './About.css'
import img_avatar from './images/img_avatar.png'

export default function About() {
    return (
        <>
        <Navbar></Navbar>
        <div id="aboutus">
            <div className="aboutUsTextDiv" style={{float: 'left', width: '650px', lineHeight: '26pt'}}>
                <h2 className="about-us-text-heading" style={{fontSize: '40px'}}><b>Providing Excellent Care</b></h2>
                <h4 className="about-us-text-subHeading" style={{fontSize: '25px',marginTop: '20px'}}>Learn More About Us Today!</h4>
                <br />  
                <div style={{float: 'left', width: '600px', lineHeight: '25pt'}}>
                    <p className="about-us-text">Pysch.Me provides a full range of psychiatric 
                    medication treatment services for adults. We understand what you 
                    need in order to live your very best life. Don’t let your troubles slow 
                    you down. We are here to help you find solutions and treatments 
                    for your conditions. We will work with you to gain all the information 
                    need to guide you in the right direction.</p>
                </div>
            </div>
            
            <div className="aboutus-image">
                <img className="newImage" src={aboutus} alt="..." />
            </div>

            <div className="meet-the-team">
                <div>
                    <h1 style={{color:'#3A93A2',textAlign: 'center'}}>Meet the Team</h1>
                    <h4 style={{color:'#5BBBCB',textAlign: 'center'}}>Our Team Is Always Here For You</h4>

                    <div className="row row-cols-1 row-cols-md-3 mt-4 pr-3">
                        <div className="col">
                            <div className="card bg-light mb-3" style={{textAlign:'center',maxWidth:'18rem'}}>
                                <img src={img_avatar} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:'26px'}}><b>Shrinivas Baldawa</b></h5>
                                    <p className="card-text" style={{fontSize:'17px'}}>Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-light mb-3" style={{textAlign:'center',maxWidth:'18rem'}}>
                                <img src={img_avatar} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:'26px'}}><b>Ronit Dey</b></h5>
                                    <p className="card-text" style={{fontSize:'17px'}}>Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-light mb-3" style={{textAlign:'center',maxWidth:'18rem'}}>
                                <img src={img_avatar} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:'26px'}}><b>Disha Auti</b></h5>
                                    <p className="card-text" style={{fontSize:'17px'}}>Frontend Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
