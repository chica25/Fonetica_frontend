import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
import SocialMediaIcons from './SocialMediaIcons';

function NavBar() {

    return (
        <nav className= "nav-wrapper">
        <div>
        <SocialMediaIcons/>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/languages">Languages</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;