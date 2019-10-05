import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { saveCard, deleteCard } from '../store/actions/index';

const Pokemon = (props) => {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        props.saveCard(props.card);
    }

    const handleDelete = () => {
        props.deleteCard(props.card.id);
    }

    return (
        <div className='card'>
            <Link to={`/pokemon/${props.card.id}`}><h3>{props.card.name}</h3></Link>
            <img alt={props.card.name} src={props.card.imageUrl} />
            {props.save ? <button onClick={handleDelete}>Delete</button> : <button onClick={handleSave}>{saved ? "Saved" : "Save Card"}</button>}
        </div>
    )
}

export default connect(null, { saveCard, deleteCard })(Pokemon);