import React, {useState} from 'react'
import Articles from "./Articles";
import Favori from "./Favoris";

const ListeArticles = () => {

    let [articles, setArticles] = useState(
        [
            {
                id: 1,
                title: 'Veste Nike',
                prix: '35',
                taille: 'L',
                photo: '../photos/veste_nike.jpg'
            },
            {
                id: 2,
                title: 'Jogging Puma',
                prix: '20',
                taille: 'S',
                photo: '../photos/jogging_puma.gif'
            },
            {
                id: 3,
                title: 'Short Nike',
                prix: '15',
                taille: 'XL',
                photo: '../photos/veste_nike.jpg'
            },
            {
                id: 4,
                title: 'Casquette NY',
                prix: '20',
                taille: 'M',
                photo: '../photos/veste_nike.jpg'
            },
            {
                id: 5,
                title: 'Tee-Shirt Puma',
                prix: '18',
                taille: 'XS',
                photo: '../photos/veste_nike.jpg'
            },
            {
                id: 6,
                title: 'Maillot Foot Barçelone Nike',
                prix: '70',
                taille: 'M',
                photo: '../photos/veste_nike.jpg'
            },
            {
                id: 7,
                title: 'Jean Hollister',
                prix: '25',
                taille: 'XL',
                photo: '../photos/veste_nike.jpg'
            },
            {
                id: 8,
                title: 'Bob YW',
                prix: '14',
                taille: 'L',
                photo: '../photos/veste_nike.jpg'
            }

        ]
    );

    let [chercheArticle, setChercheArticle] = useState("");

    const handleChercheArticle = (e) => {
        let value = e.target.value;
        setChercheArticle(value);
    };

    console.log(chercheArticle);

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher un vêtement"
                    onChange={handleChercheArticle}
                />

            </div>
            <div>
                <ul>
                    {articles.filter((val) => {
                        return val.title.toLowerCase().includes(chercheArticle.toLocaleLowerCase())
                    })
                        .map((val) =>
                            (
                                <div key={val.id} id="articleId">
                                    <h2>{val.title}</h2>
                                    <img src="../photos/veste_nike.jpg" alt="slt"/>
                                    <p id="prix">prix : {val.prix}€</p>
                                    <p id="taille">taille : {val.taille}</p>
                                    <Favori/>


                                </div>))}
                </ul>
            </div>
        </>
    )


};

export default ListeArticles;

/*<Articles
    id={val.id}
    title={val.title}
    taille={val.taille}
    photo={val.photo}
/>*/