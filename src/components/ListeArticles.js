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
                photo: 'veste_nike.jpg'
            },
            {
                id: 2,
                title: 'Jogging Puma',
                prix: '20',
                taille: 'S',
                photo: 'jogging_puma.gif'
            }

        ]
    );
    return (
        <div>
            <ul>
                {articles.map((article) => (<Articles {...article} />))}
            </ul>
        </div>
    )


};

export default ListeArticles;