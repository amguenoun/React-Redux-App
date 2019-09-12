import axios from 'axios'

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAIL = 'FETCHING_FAIL';

export const fetchCards = (url) => dispatch => {
    dispatch({ type: FETCHING_START });
    axios.get(url)
        .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data.cards }))
        .catch(err => dispatch({ type: FETCHING_FAIL, payload: `Status: ${err.response.status}, ${err.response.statusText}` }))
}