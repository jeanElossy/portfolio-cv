import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="navBar col-12 col-md-3">
                    <NavBar />
                </div>
                <div className="homeContent col-12 col-md-8">
                    <div className="content">
                        <h1>Jean Elossy</h1>
                        <h2>Developpeur Full Stack JavaScript <span className="junior">Junior</span><br /><span className="react">React Js / Node Js</span></h2>
                        <div className="pdf">
                            <a href="./media/CV-Elossy.pdf" target="_blank" without rel="noreferrer">
                                Telecharger CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Home
