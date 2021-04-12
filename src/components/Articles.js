import React from 'react'

const Articles = (props) => {
        const href=`/photos/${props.photo}`
        return (
            <div>
                <li>{props.id} - {props.title} - {props.taille}</li>
                <img src={href} alt={props.title} height="100" width="100"/>
            </div>
        )
    }
;

export default Articles;