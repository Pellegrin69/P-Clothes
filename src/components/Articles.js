import React from 'react'

const Articles = (props) => (

    <div>
        <li>{props.id} - {props.title} - {props.taille}</li>
    </div>


);

export default Articles;