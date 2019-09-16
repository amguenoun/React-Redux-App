import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <h2>Pokemon TCG Database</h2>
                <img src="https://img.icons8.com/color/48/000000/open-pokeball--v2.png" alt='pokeball' />
            </div>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/pokemon'>Pokemon</Link>
                <Link to='/search'>Search</Link>
            </div>
        </div>
    )
}

export default Navbar;