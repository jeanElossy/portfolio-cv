import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent ">
                <h3 className="mb-5">Erreur 404 !!! <br /> la page n'existe pas</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Acceuil</span>
                </NavLink>
            </div>
        </div>
    )
}
export default NotFound;
