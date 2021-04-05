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
                photo: ''
            },
            {
                id: 2,
                title: 'Jogging Puma',
                prix: '20',
                taille: 'S',
                photo: ''
            }

        ]
    );
    return(
        <div>
            <ul>
                {articles.map((article) => (<Articles id={article.id} title={article.title} taille={article.taille}/>))}
            </ul>
        </div>
    )



};

export default ListeArticles;