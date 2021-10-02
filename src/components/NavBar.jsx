import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="sidebar"> 
            <div className="id">

                <div className="idContent d-flex justify-content-center align-items-center flex-column mt-5">
                    <img 
                        src="./media/profil.jpg" 
                        width="170" 
                        height="180" 
                        alt="profil-pic" 
                    />
                    <h2 className="mt-4">Jean Elossy</h2>
                </div>

                <div className="navigation mt-3">
                    <ul className="d-flex flex-column gap-4 mt-3">
                        <li>
                            <NavLink 
                                to="/" 
                                activeClassName="navActive" 
                                className="icon--text d-flex gap-4 align-items-center" 
                            >
                                <i className="fas fa-home"></i>
                                <span>Acceuil</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink 
                                to="/competences" 
                                activeClassName="navActive" 
                                className="icon--text d-flex gap-4 align-items-center"
                            >
                                <i class="fas fa-user-graduate"></i>
                                <span>Competences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/portfolio" 
                                activeClassName="navActive" 
                                className="icon--text d-flex gap-4 align-items-center"
                            >
                                <i class="fas fa-project-diagram"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                activeClassName="navActive" 
                                className="icon--text d-flex gap-4 align-items-center"
                            >
                                <i class="fas fa-address-book"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="social mt-4">
                    <ul className="d-flex lien">
                        <li>
                            <a href="https://www.linkedin.com/in/jean-elossy-25585b152/" target="_blank" without rel="noreferrer">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/jeanElossy" target="_blank" without rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ElossyWilson" target="_blank" without rel="noreferrer">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                    

                    
                    <div className="signature text-center mt-4">
                        <p>Jean Elossy - 2021</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default NavBar;
