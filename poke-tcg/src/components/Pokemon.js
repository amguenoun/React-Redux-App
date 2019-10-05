import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveCard } from '../store/actions/index';

const Pokemon = (props) => {

    const handleSave = () => {
        props.saveCard(props.card);
    }

    return (
        <div className='card'>
            <Link to={`/pokemon/${props.card.id}`}><h3>{props.card.name}</h3></Link>
            <img alt={props.card.name} src={props.card.imageUrl} />
            <button onClick={handleSave}>Save Card</button>
        </div>
    )
}

export default connect(null, { saveCard })(Pokemon);