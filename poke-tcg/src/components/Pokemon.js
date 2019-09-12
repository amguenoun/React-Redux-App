import React from 'react';
import Loader from 'react-loader-spinner'

const Pokemon = (props) => {
    return (
        <div className='card'>
            {!props.card ? <Loader className='loader' type="BallTriangle" color="red" height={300} width={300} /> :
                <><h3>{props.card.name}</h3>
                    <img alt={props.card.name} src={props.card.imageUrl} />
                </>
            }
        </div>
    )
}

export default Pokemon;