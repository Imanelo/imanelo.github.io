import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills,ElevatorPitch, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <ElevatorPitch />
            <Projects />
            {/* <Services /> */}
            {/* <Testimonials /> */}
            <Education />
            <Achievement />
            <Experience /> 
            <Skills />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
