import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSearch } from '../store/actions'
import Loader from 'react-loader-spinner'

import Pokemon from './Pokemon';

const SearchList = ({ getSearch, searchResults, isFetching, searchUrl }) => {
    useEffect(() => {
        getSearch(searchUrl);
    }, [getSearch, searchUrl])

    return (
        <div>
            {isFetching ? <Loader className='loader' type="BallTriangle" color="red" height={300} width={300} /> :
                <div className='card-container'>
                    {searchResults.map(card => <Pokemon card={card} key={Math.random()} />)}
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        isFetching: state.isFetching,
        searchUrl: state.searchUrl,
    }
}

export default connect(mapStateToProps, { getSearch })(SearchList);