import React from 'react';
import { connect } from 'react-redux';

import PokemonList from './components/PokemonList';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App(props) {
  return (
    <div className="App">
      App Here
      <PokemonList />
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
