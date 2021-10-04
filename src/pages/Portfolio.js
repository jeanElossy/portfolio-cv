import React from 'react'
import NavBar from '../components/NavBar'

const Portfolio = () => {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
            <div className="navBar col-12 col-md-3">
                <NavBar />
            </div>
            <div className="portfolioContent col-12 col-md-8 text-white">
                contenu portfolio
            </div>
        </div>
    </div>
    )
}
export default Portfolio
