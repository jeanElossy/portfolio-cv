import React from 'react'
import NavBar from '../components/NavBar'
import ProjectList from '../components/portfolio/ProjectList'

const Portfolio = () => {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
            <div className="navBar col-12 col-md-3">
                <NavBar />
            </div>
            <div className="portfolioContent col-12 col-md-8">
                <ProjectList />
            </div>
        </div>
    </div>
    )
}
export default Portfolio
