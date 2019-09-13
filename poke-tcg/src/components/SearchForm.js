import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setSearch } from '../store/actions/index';

import SearchList from './SearchList';

const SearchForm = (props) => {
    const [option, setOption] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setSearch(`https://api.pokemontcg.io/v1/cards?${option}=${input}`);
    }

    const handleChange = (e) => {
        e.target.name === 'input' ?
            setInput(e.target.value) :
            setOption(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="option" onChange={handleChange}>
                    <option>Type of Search</option>
                    <option value="name">Name</option>
                    <option value="nationalPokedexNumber">Pokedex Number</option>
                    <option value="types">Pokemon Type</option>
                    <option value="supertype">Card Type</option>
                </select>
                <input name='input' placeholder='Search' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <SearchList />
        </div>
    )
}


export default connect(null, { setSearch })(SearchForm);