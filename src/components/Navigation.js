import React from 'react';
import {Link} from 'react-router-dom';
import '../Navigation.css'

function Navigation() {


    return (
        <ul>
            <Link to="/">
                <li>Accueil</li>
            </Link>

            <Link to="/MontreFavoris">
                <li>Favoris</li>
            </Link>

            <Link to="/Contact">
                <li>Contact</li>
            </Link>
        </ul>
    )
}

export default Navigation;