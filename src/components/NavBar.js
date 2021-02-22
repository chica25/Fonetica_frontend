import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

function NavBar() {

    return (
        <nav className= "nav-wrapper">
        <div>
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/languages">LANGUAGES</Link></li>
                <li><Link to="/resoucres">RESOURCES</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;