import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import DraftsIcon from '@material-ui/icons/Drafts'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Navbar from './Navbar'
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact">
            <Navbar></Navbar>
            <h1 style={{textAlign: 'center',lineHeight: '25pt'}}>Pysch.Me</h1>
            <br/>
            <h4 style={{textAlign: 'center',lineHeight: '25pt'}}><LocalPhoneIcon/> +91 78430-17204</h4>
            <h5 style={{textAlign: 'center',lineHeight: '25pt'}}><LocationOnIcon/> Plot No. 4-8-44/P, Navi Mumbai, MH, IN</h5>
            <h5 style={{textAlign: 'center',lineHeight: '25pt'}}><DraftsIcon/> info@pyschme.com</h5>
            <h5 style={{textAlign: 'center',lineHeight: '25pt'}}><AccessTimeIcon/> Mon - Sat | 8:30AM - 4PM</h5>
        </div>
    )
}
