import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/languages">Languages</Link></li>
                <li><Link to="/languagephrases">Language Phrases</Link></li>
                <li><Link to="/interactivemaps">Interactive Maps</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;