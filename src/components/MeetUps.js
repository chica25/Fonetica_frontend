import React from 'react';
import meetup_img from '../images/meetup_img.jpg'

const MeetUps = () => {

    return(
        <div className="meetup-title">
            <h3>Join The Meetup Community!</h3>
            <img className="meetup-img" src={meetup_img} alt="meetup image"/>
        </div>
    ) 
}


export default MeetUps;