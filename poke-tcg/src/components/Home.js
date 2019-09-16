import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-div'>
            <h1>Welcome to the Pokemon TCG Database</h1>
            <Link to='/pokemon' className='start-link'>Get Started</Link>
        </div>
    )
}

export default Home;