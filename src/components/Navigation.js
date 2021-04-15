import React from 'react';
import {Link} from 'react-router-dom';
import '../Navigation.css'

function Navigation() {


    return (
        <ul>
            <Link to="/">
                <li id="liNav">Accueil</li>
            </Link>

            <Link to="/MontreFavoris">
                <li id="liNav">Favoris</li>
            </Link>

            <Link to="/Contact">
                <li id="liNav">Contact</li>
            </Link>
        </ul>
    )
}

export default Navigation;