import React from 'react';
import mid_leaderboard from '../images/mid_leaderboard.png'

function UserStories() {
    const fontStyle = {
        textAlign: "center",
        fontFamily: "Helvetica Neue",
        fontStyle: "normal",
        fontSize: "28px", 
        color: "tomato",
        padding: "10px"
    };
    
    const img = {
        textAlign: "center",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
       
    }

    return(
        <div className="user-stories">
            <h3 style={fontStyle}>Student Stories</h3>
            <img style={img} src={mid_leaderboard} alt="middle-banner"/>
        </div>
    )
}

export default UserStories;