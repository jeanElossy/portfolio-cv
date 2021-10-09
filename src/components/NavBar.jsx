import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="sidebar"> 
            <div className="id">

                <div className="idContent d-flex justify-content-center align-items-center flex-column mt-4">
                    <img 
                        src="./media/profil.jpg" 
                        width="170" 
                        height="170" 
                        alt="profil-pic" 
                    />
                    <h3 className="mt-5">Jean Elossy</h3>
                </div>
            </div>
                <div className="navigation mt-5">
                    <ul>
                        <li>
                            <NavLink 
                                to="/" 
                                activeClassName="navActive" 
                                className="icon--text d-flex align-items-center" 
                            >
                                <i className="fas fa-home"></i>
                                <span>Acceuil</span>
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink 
                                to="/competences" 
                                activeClassName="navActive" 
                                className="d-flex align-items-center"
                            >
                                <i class="fas fa-user-graduate"></i>
                                <span>Competences</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/portfolio" 
                                activeClassName="navActive" 
                                className="d-flex align-items-center"
                            >
                                <i class="fas fa-project-diagram"></i>
                                <span>Portfolio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact" 
                                activeClassName="navActive" 
                                className="d-flex align-items-center"
                            >
                                <i class="fas fa-address-book"></i>
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="social mt-4">
                    <ul className="d-flex">
                        <li className="rounded-circle d-flex justify-content-center align-items-center ">
                            <a href="https://www.linkedin.com/in/jean-elossy-25585b152/" target="_blank" without rel="noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="rounded-circle d-flex justify-content-center align-items-center">
                            <a href="https://github.com/jeanElossy" target="_blank" without rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li className="rounded-circle d-flex justify-content-center align-items-center">
                            <a href="https://twitter.com/ElossyWilson" target="_blank" without rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                    
                    <div className="signature text-center">
                        <p className="text-white">Jean Elossy - 2021</p>
                    </div>
                </div>


            
        </div>
    )
}
export default NavBar;
