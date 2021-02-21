import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function NavBar() {

    return (
        <nav className= "nav-wrapper">
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/languages">Languages</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;