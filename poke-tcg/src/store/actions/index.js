import axios from 'axios'

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const fetchCards = (url) => dispatch => {
    dispatch({ type: FETCHING_START });
    axios.get(url)
        .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data.cards }))
        .catch(err => dispatch({ type: FETCHING_FAIL, payload: err }))
}

export const CHANGE_PAGE = 'CHANGE_PAGE';

export const changePage = (number) => {
    return {
        type: CHANGE_PAGE,
        payload: number
    }
}

export const FETCH_INDIVIDUAL_POKEMON = 'FETCH_INDIVIDUAL_POKEMON'

export const fetchPokemon = (url) => dispatch => {
    dispatch({ type: FETCHING_START });
    axios.get(url)
        .then(res => dispatch({ type: FETCH_INDIVIDUAL_POKEMON, payload: res.data.card }))
        .catch(err => dispatch({ type: FETCHING_FAIL, payload: err }))
}

export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = (url) => {
    return {
        type: SET_SEARCH,
        payload: url
    }
}

export const GET_SEARCH = 'GET_SEARCH';

export const getSearch = (url) => dispatch => {
    dispatch({ type: FETCHING_START });
    axios.get(url)
        .then(res => dispatch({ type: GET_SEARCH, payload: res.data.cards }))
        .catch(err => dispatch({ type: FETCHING_FAIL, payload: err }))
}