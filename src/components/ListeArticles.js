import React, {useState} from 'react'
import Articles from "./Articles";
import Form from "./Form";
import '../ListeArticles.css'

const ListeArticles = () => {

    let [articles, setArticles] = useState(
        [
            {
                id: 1,
                title: 'Veste Nike',
                prix: '35',
                taille: 'L',
                photo: 'veste_nike.jpg'
            },
            {
                id: 2,
                title: 'Jogging Puma',
                prix: '20',
                taille: 'S',
                photo: 'jogging_puma.jpg'
            },
            {
                id: 3,
                title: 'Short Nike',
                prix: '15',
                taille: 'XL',
                photo: 'short_nike.jpg'
            },
            {
                id: 4,
                title: 'Casquette NY',
                prix: '20',
                taille: 'M',
                photo: 'casquette_ny.jpg'
            },
            {
                id: 5,
                title: 'Tee-Shirt Puma',
                prix: '18',
                taille: 'XS',
                photo: 't_shirt_puma.jpg'
            },
            {
                id: 6,
                title: 'Maillot Foot Barçelone Nike',
                prix: '70',
                taille: 'M',
                photo: 'maillot_barca.jpg'
            },
            {
                id: 7,
                title: 'Jean Hollister',
                prix: '25',
                taille: 'XL',
                photo: 'jean_hollister.jpg'
            },
            {
                id: 8,
                title: 'Bob YW',
                prix: '14',
                taille: 'L',
                photo: 'bob_yw.jpg'
            }

        ]
    );

    const addArticle = (newArticle) => setArticles([...articles, newArticle]);

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
                        .map((val) => (<Articles {...val} />))}
                </ul>
            </div>
        </>
    )
};

export default ListeArticles;