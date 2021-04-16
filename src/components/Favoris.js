import React from 'react'

const Favori = ({isFav, toogleFav}) => {
    let etatFavori;
    let boutonFavori;

    if (isFav) {
        etatFavori = '❤';
        boutonFavori = 'Retirer des favoris';
    } else {
        etatFavori = '♡';
        boutonFavori = 'Ajouter aux favoris';
    }

    return (
        <div>
            <p>{etatFavori}</p>
            <button id="boutonFav" onClick={() => toogleFav()}> {boutonFavori} </button>
        </div>
    )
}

export default Favori;