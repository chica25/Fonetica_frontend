import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaIcons from './SocialMediaIcons';
import '../style.css'

function NavBar() {

    return (
        <nav className= "nav-wrapper">
        <div className="nav-type">
            <ul>
                <li className="li"><Link to="/home">HOME</Link></li>
                <li className="li"><Link to="/languages">LANGUAGES</Link></li>
                <li className="li"><Link to="/reviews">REVIEWS</Link></li>
                <li className="li"><Link to="/meetups">MEETUPS</Link></li>
                <SocialMediaIcons />
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;