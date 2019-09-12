import React from 'react';

const Pokemon = (props) => {
    return (
        <div>
            <h2>{props.card.name}</h2>
            <img alt={props.card.name} src={props.card.imageUrl} />
        </div>
    )
}

export default Pokemon;