import React, { useState } from 'react';

const LikeButton = () => {

    const [likes, setLikes] = useState(0) // [0, f(){}]

    const handleClick = () => {
        setLikes(likes + 1)
    }


    return(
        <button onClick={handleClick}>Likes: {likes}</button>
    )


}

export default LikeButton;

//instructor notes
// check react docs - hooks, advance guides and testing