import React from 'react'
import Favori from "./Favoris";
import '../ListeArticles.css';

const Articles = (props) => {

    const toogleFav = () => {
        props.toogleFav(props.id)
    };

    const href = `/photos/${props.photo}`;

    return (
        <div id='articleId'>
            <h2>{props.title}</h2>
            <img id="imgArticles" src={href} alt={props.title} height="100" width="100"/>
            <p id="prix">Prix : {props.prix}€</p>
            <p id="taille">Taille : {props.taille}</p>
            <Favori isFav={props.favori} toogleFav={toogleFav}/>
        </div>
    )
}

export default Articles;