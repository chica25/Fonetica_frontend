import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className= "nav-wrapper">
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/interactivemaps">Interactive Maps</Link></li>
                <li><Link to={`/languages/phrases/{:id}`}>Start practicing</Link></li>
                
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;