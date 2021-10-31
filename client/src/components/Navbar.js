import React from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-scroll';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Pysch.Me</NavLink>
                    <span class="mb-0 h5">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="aboutus" spy={true} smooth={true}>About Us</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to='services'>Services</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to='login'>Login/SignUp</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="faq">FAQ</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="contact">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
            </nav>
        </div>
    )
}
