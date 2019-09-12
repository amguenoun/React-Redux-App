import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards, changePage } from '../store/actions'
import Loader from 'react-loader-spinner'

import PokemonPages from './Pagination';
import Pokemon from './Pokemon';

const PokemonList = ({ fetchCards, changePage, pokemonCards, url, isFetching, searchUrl }) => {
    useEffect(() => {
        if (!searchUrl) {
            fetchCards(url);
        }
        else {
            fetchCards(searchUrl);
        }
    }, [fetchCards, url, searchUrl])

    const handlePageChange = (number) => {
        changePage(number);
    }
    return (
        <div>
            {!searchUrl ? <PokemonPages handlePageChange={handlePageChange} /> : null}
            {isFetching ? <Loader className='loader' type="BallTriangle" color="red" height={300} width={300} /> :
                <div className='card-container'>
                    {pokemonCards.map(card => <Pokemon card={card} key={Math.random()} />)}
                </div>
            }
            {!searchUrl ? <PokemonPages handlePageChange={handlePageChange} /> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonCards: state.pokemonCards,
        url: state.url,
        isFetching: state.isFetching,
        searchUrl: state.searchUrl,
    }
}

export default connect(mapStateToProps, { fetchCards, changePage })(PokemonList);