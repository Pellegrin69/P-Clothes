import React from 'react'
import '../ListeArticles.css';

const MontreFavori = (props) => {
    if (props.favori) {
        return console.log("oui")
    } else {
        console.log("non")
    }

    return (
        <div>
            <h2>Ici s'afficheront les pages que vous avez ajouté aux favoris !</h2>
        </div>
    )
}

export default MontreFavori;