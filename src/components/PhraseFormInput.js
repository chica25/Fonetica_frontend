import React from 'react';
// import { connect } from 'react-redux'

class PhraseFormInput extends React.Component {
    state = {
        phrase: ""
    }

    submitForm = event => {
        event.preventDefault()
        console.log("new phrase")

    }

    render() {
        return (
            <div>
                <h2>Start praticing</h2>
                <form onSubmit={this.submitForm}>
                    Enter Phrase<input type="text" value={this.state.phrase} />
                    <input type="submit" value="Create New phrase">Create New phrase</input>
                </form>
            </div>
        )
    }
}

export default PhraseFormInput;