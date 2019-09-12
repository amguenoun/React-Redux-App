import React from 'react';

const Pokemon = (props) => {
    return (
        <div className='card'>
            <h3>{props.card.name}</h3>
            <img alt={props.card.name} src={props.card.imageUrl} />
        </div>
    )
}

export default Pokemon;