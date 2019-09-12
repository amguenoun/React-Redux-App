import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAIL,
} from '../actions'
const initialState = {
    isFetching: false,
    pokemonCards: [0],
    error: '',
    url: 'https://api.pokemontcg.io/v1/cards'
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
        default:
            return state;
    }
}
