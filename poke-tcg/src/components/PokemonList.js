import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../store/actions'

import Pokemon from './Pokemon';

const PokemonList = (props) => {
    return (
        <div>
            <p>Pokemon List Here</p>
            {props.pokemonCards.map(card => <Pokemon pokemon={card} key={Date.now()} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonCards: state.pokemonCards,
        url: state.url
    }
}

export default connect(mapStateToProps, { fetchCards })(PokemonList);