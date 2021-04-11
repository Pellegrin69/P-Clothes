import React from 'react'

const Articles = (props) => {

        return (
            <div>
                <li>{props.id} - {props.title} - {props.taille}</li>
                <img src={props.photo} alt={props.title}/>
            </div>
        )
    }
;

export default Articles;