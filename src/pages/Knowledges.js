import React from 'react'
import NavBar from '../components/NavBar'

const Knowledges = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="navBar col-12 col-md-3">
                    <NavBar />
                </div>
                <div className="knowledgesContent col-12 col-md-8 text-white">
                    contenu competences
                </div>
            </div>
        </div>
    )
}
export default Knowledges
