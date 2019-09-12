import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
                <h2>Pokemon TCG</h2>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/pokemon'>Pokemon</Link>
                <Link to='/search'>Search</Link>
            </div>
        </div>
    )
}

export default Navbar;