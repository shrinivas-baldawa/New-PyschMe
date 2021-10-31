import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'
import Services from './Services'
import About from './About'
import Faq from './Faq'
import Contact from './Contact'
import HomeComp1 from './HomeComp1'
import Footer from './Footer'
import HomeComp2 from './HomeComp2'

export default function Home() {

    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <HomeComp1></HomeComp1>
            <br />
            <About></About>
            <HomeComp2/>
            <br />
            <br />
            <br />
            <br />
            <Services></Services>
            <br />
            <br />
            <br />
            <Faq></Faq>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}
