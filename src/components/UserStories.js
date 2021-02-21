import React from 'react';
import mid_leaderboard from '../images/mid_leaderboard.png'

function UserStories() {

    return(
        <div className="user-stories-title">
            <h3>Student Stories</h3>
            <img className="leaderboard-2" src={mid_leaderboard} alt="middle-banner"/>
        </div>
    )
}

export default UserStories;