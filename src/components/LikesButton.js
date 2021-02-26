import React from 'react';

class LikesButton extends React.Component {

    state = {
        likes: 0
    }

    handleLike = () => {
        this.setState((prevState) => {
            return {
                likes: prevState.likes + 1
                }
            }
        )
    }
    render(){
        return(
            <button onClick={this.handleLike}>Likes: {this.state.likes}</button>
        )
    }
}

export default LikesButton;