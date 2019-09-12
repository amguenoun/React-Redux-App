import React from 'react';
import { connect } from 'react-redux';

import Pokemon from './Pokemon';

const PokemonList = (props) => {
    return (
        <div>
            <p>Pokemon List Here</p>
            {props.pokemonCards.map(card => <Pokemon pokemon={card} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonCards: state.pokemonCards,
    }
}

export default connect(mapStateToProps, {})(PokemonList);