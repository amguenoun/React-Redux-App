import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAIL,
    CHANGE_PAGE,
    FETCH_INDIVIDUAL_POKEMON,
    SET_SEARCH,
} from '../actions'

const initialState = {
    isFetching: false,
    pokemonCards: [0],
    error: '',
    url: 'https://api.pokemontcg.io/v1/cards',
    searchUrl: null,
    individualCard: {},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetching: true,
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                pokemonCards: action.payload,
                isFetching: false,
            };
        case FETCHING_FAIL:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            };
        case CHANGE_PAGE:
            return {
                ...state,
                url: `https://api.pokemontcg.io/v1/cards?page=${action.payload}`
            };
        case FETCH_INDIVIDUAL_POKEMON:
            return {
                ...state,
                individualCard: action.payload,
                isFetching: false,
            };
        case SET_SEARCH:
            return {
                ...state,
                searchUrl: action.payload
            }
        default:
            return state;
    }
}
