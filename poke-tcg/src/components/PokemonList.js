import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards, changePage } from '../store/actions'
import Loader from 'react-loader-spinner'

import PokemonPages from './Pagination';
import Pokemon from './Pokemon';

const PokemonList = ({ fetchCards, changePage, pokemonCards, url }) => {
    useEffect(() => {
        fetchCards(url);
    }, [fetchCards, url])

    const handlePageChange = (number) => {
        changePage(number);
    }
    return (
        <div>
            <PokemonPages handlePageChange={handlePageChange} />

            <div className='card-container'>
                {pokemonCards.map(card => !card ? <Loader className='loader' type="BallTriangle" color="red" height={300} width={300} /> : <Pokemon card={card} key={Math.random()} />)}
            </div>

            <PokemonPages handlePageChange={handlePageChange} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonCards: state.pokemonCards,
        url: state.url
    }
}

export default connect(mapStateToProps, { fetchCards, changePage })(PokemonList);