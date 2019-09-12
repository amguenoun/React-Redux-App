import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PokemonList from './components/PokemonList';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Home from './components/Home';
import IndividualPokemon from './components/IndividualPokemon';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/pokemon' component={PokemonList} />
      <Route path='/pokemon/:id' component={IndividualPokemon} />
      <Route path='/search' component={SearchForm} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(App);
