import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../store/actions'

import Pokemon from './Pokemon';

const PokemonList = ({ fetchCards, pokemonCards, url }) => {
    useEffect(() => {
        fetchCards(url);
    }, [url])
    return (
        <div>
            <p>Pokemon List Here</p>
            {pokemonCards.map(card => <Pokemon pokemon={card} key={Date.now()} />)}
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