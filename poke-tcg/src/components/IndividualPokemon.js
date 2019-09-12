import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchPokemon } from '../store/actions';


const IndividualPokemon = (props) => {
    const id = props.match.params.id;
    useEffect(() => {
        props.fetchPokemon(`https://api.pokemontcg.io/v1/cards/${id}`);
    }, [id])

    return (
        props.isFetching ? <Loader className='loader' type="BallTriangle" color="red" height={300} width={300} /> :
            <div className='card'>
                <h3>{props.card.name}</h3>
                <img alt={props.card.name} src={props.card.imageUrlHiRes} />
            </div>
    )
}

const mapStateToProps = state => {
    return {
        card: state.individualCard,
        isFetching: state.isFetching,
    }
}

export default connect(mapStateToProps, { fetchPokemon })(IndividualPokemon);