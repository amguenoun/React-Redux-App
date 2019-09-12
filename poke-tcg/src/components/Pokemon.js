import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
    return (
        <div className='card'>
            <Link to={`/pokemon/${props.card.id}`}><h3>{props.card.name}</h3></Link>
            <img alt={props.card.name} src={props.card.imageUrl} />
        </div>
    )
}

export default Pokemon;