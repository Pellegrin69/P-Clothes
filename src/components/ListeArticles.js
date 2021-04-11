import React, {useState} from 'react'
import Articles from "./Articles";

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
            }

        ]
    );

    let [searchTerm, setSearhTerm] = useState("");

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearhTerm(value);
    };

    console.log(searchTerm);

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                />

            </div>
            <div>
                <ul>
                    {articles.filter((val) => {
                        return val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                    })
                        .map((val) =>
                            (
                                <div key={val.id} id="articleId">
                                    <h2>{val.title}</h2>
                                    <img src="../photos/veste_nike.jpg" alt="slt"/>
                                    <p id="prix">prix : {val.prix}€</p>
                                    <p id="taille">taille : {val.taille}</p>

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