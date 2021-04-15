import React, {useState} from 'react'

const Favori = (props) => {
    console.log(props.isFav)
    let [favori, setFavori] = useState(false);
    let etatFavori;
    let boutonFavori;

    if (props.isFav === false) {
        favori = false
        etatFavori = '♡';
        boutonFavori = 'Ajouter aux favoris';
    } else {
        favori = true
        etatFavori = '❤';
        boutonFavori = 'Retirer des favoris';
    }



    return (
        <div>
            <p>{etatFavori}</p>
            <button id="boutonFav" onClick={() => setFavori(!favori)}> {boutonFavori} </button>
        </div>
    )
}

export default Favori;