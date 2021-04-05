import React from 'react'

const Articles = (props) => (

    <div>
        <li>{props.id} - {props.title} - {props.taille}</li>
        <img src={props.photo} alt={props.title}/>
    </div>


);

export default Articles;