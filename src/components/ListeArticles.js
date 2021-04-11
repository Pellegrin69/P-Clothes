import React, {useState} from 'react'
import Articles from "./Articles";
import photo from "../photos/veste_nike.jpg"

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
    return(
        <div>
            <ul>
                {articles.map((article) => (<Articles id={article.id} title={article.title} taille={article.taille} photo={(photo)}/>))}
            </ul>
        </div>
    )



};

export default ListeArticles;