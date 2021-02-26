import React from 'react';
import meetup_img from '../images/meetup_img.jpg'

const MeetUps = () => {

    return(
        <div class="meetup-title">
            <h3>Join the Fonetica Meetup community!</h3>
            <img class="meetup-img" src={meetup_img} alt="meetup image"/>
        </div>
    ) 
}


export default MeetUps;