import React from 'react'
import Experience from '../components/competences/Experience'
import Diplomes from '../components/competences/Diplomes'
import Languages from '../components/competences/Languages'
import OtherSkills from '../components/competences/OtherSkills'
import NavBar from '../components/NavBar'

const Knowledges = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="navBar col-12 col-md-3">
                    <NavBar />
                </div>
                <div className="knowledgesContent col-12 col-md-8">
                    <Languages />
                    <Experience />
                    <OtherSkills />
                    <Diplomes />
                </div>
            </div>
        </div>
    )
}
export default Knowledges
