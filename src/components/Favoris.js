import React, {useState} from 'react'

function Favori() {
    let [favori, setFavori] = useState(false);
    let etatFavori;
    let boutonFavori;

    if(favori === false){
        etatFavori = '♡';
        boutonFavori = 'Ajouter aux favoris';
    }
    else{
        etatFavori = '❤';
        boutonFavori = 'Retirer des favoris';
    }

    return(
        <div>
            <p>{etatFavori}</p>
            <button id="boutonFav" onClick={() => setFavori(!favori)}>
                {boutonFavori}
            </button>
        </div>
    )
}

export default Favori;