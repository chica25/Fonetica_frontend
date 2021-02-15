import React from 'react';
import { fetchNewPhrase } from "../actions/actionsCreator";
import { connect } from 'react-redux'


class PhraseForm extends React.Component {
   state = {
    foreign_phrase: "",
   }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchNewPhrase({
            // foreign_phrase: this.state.foreign_phrase,
            // language_id: this.props.state
            
            // newPhrase: this.state.foreign_phrase
        }) 
        // this.setState({
        //     foreign_phrase: "",
        //     // NewPhrase: ""
        // })
    }

        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>English Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="english_phrase" onChange={this.handleChange} value={this.state.english_phrase}/>
                        <br/><br/>

                        {/* <form onSubmit={this.handleSubmit}> */}
                        <label>Foreign Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="foreign_phrase" onChange={this.handleChange} value={this.state.foreign_phrase}/>
                        <br/><br/>
                        {/* <label>Enter Phrase:</label>
                        <input placeholder="Enter phrase..." type="text" name="enterPhrase" name="name" onClick={this.handleChange} value={enterPhrase}/> */}
                        <input type="submit" value="submit phrase" />
                    </form>
                </div>
            )
        }

}

const mapStateToProps = (state) => {
    // newPhrases: state.newPhrases 
        // const { languageName, enterPhrase, name} = state.PhraseForm
        return { 
            formData: state.PhraseForm
        }
}   


export default connect(mapStateToProps, { fetchNewPhrase })(PhraseForm);