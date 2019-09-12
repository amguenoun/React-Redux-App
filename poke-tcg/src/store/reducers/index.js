const initialState = {
    isFetching: false,
    pokemonCards: [0],
    error: '',
    url: 'https://api.pokemontcg.io/v1/cards?page=0'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
