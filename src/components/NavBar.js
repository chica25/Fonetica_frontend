import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <nav className= "nav-wrapper">
        <div>
            <ul>
                <li><NavLink to="/home" style={{color: "blue"}}>Home</NavLink></li>
                <li><NavLink to="/languages">Languages</NavLink></li>
                <li><NavLink to="/language/phrases">Phrases</NavLink></li>
                <li><NavLink to="/interactivemaps">Interactive Maps</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;