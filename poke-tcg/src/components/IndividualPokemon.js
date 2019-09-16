import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchPokemon } from '../store/actions';


const IndividualPokemon = (props) => {
    const id = props.match.params.id;
    const fetch = props.fetchPokemon;
    const card = props.card;
    useEffect(() => {
        fetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    }, [fetch, id])

    return (
        props.isFetching ? <Loader className='loader' type="BallTriangle" color="red" height={300} width={300} /> :
            <div className='indiv-card'>
                <div className="card-text">
                    <h2>{card.name}</h2>
                    <h4>Card Rarity: {card.subtype}</h4>
                    {card.supertype === 'Pokémon' ?
                        <>
                            <h4>Pokédex Number: {card.nationalPokedexNumber}</h4>
                            <h4>Pokemon Type: {card.types[0]}</h4>
                            <ul> <h4>Attacks:</h4>
                                {card.attacks.map(attack => <li>Name: {attack.name}, Damage: {attack.damage}, Info: {attack.text}</li>)}
                            </ul>
                            {card.resistances ? <h4>Resistance: {card.resistances[0].type} <br />  Effect: {card.resistances[0].value}</h4> : null}
                            {card.weaknesses ? <h4>Weakness: {card.weaknesses[0].type} <br /> Effect: {card.weaknesses[0].value}</h4> : null}
                        </> : card.supertype === 'Trainer' ? <h4 className='trainer-text'>Effect: {card.text}</h4> : <h4>{card.supertype} Card</h4>}
                </div>
                <img alt={card.name} src={card.imageUrlHiRes} />
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