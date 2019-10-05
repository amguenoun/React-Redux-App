import React from 'react';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';

const SavedList = ({ savedCards }) => {
    return (
        <div class="saved">
            <div className="saved-title">
                <h1>My Saved Cards</h1>
            </div>
            <div class="card-container">
                {savedCards.length !== 0 ? savedCards.map(card => <Pokemon card={card} key={Math.random()} save={true} />) : <h2>No Cards Saved</h2>}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        savedCards: state.savedCards,
    }
}

export default connect(mapStateToProps, {})(SavedList);