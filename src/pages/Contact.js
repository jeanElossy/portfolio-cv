import React from 'react'
import NavBar from '../components/NavBar'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
            <div className="navBar col-12 col-md-3">
                <NavBar />
            </div>
            <div className="contactContent col-12 col-md-8 text-white">
                
                <div className="header"></div>

                <div className="contactBox">
                    <h1 className="text-center mb-5">Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Abidjan / Côte d'Ivoire</span> 
                        </li>

                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0749490835">
                                <span className="clickInput" onClick={() => {
                                        alert("Numero de telephone copie !");
                                    }}>
                                        (+225) 07 494 908 35
                                </span>
                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="jean.elossy@gmail.com">
                                <span className="clickInput" onClick={() => {
                                        alert("Email copie !");
                                    }}>
                                        jean.elossy@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>

                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>        
                        <a href="https://www.linkedin.com/in/jean-elossy-25585b152/" 
                            target="_blank" 
                            rel="noreferrer"
                            
                        >
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/jeanElossy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <h4>GitHub</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/ElossyWilson" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Contact;

