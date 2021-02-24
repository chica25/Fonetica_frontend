import React from 'react';
import { AddNewPhrase } from "../actions/actionsCreator";
import { connect } from 'react-redux'

class PhraseForm extends React.Component {

   state = {
    english_phrase: "",
    foreign_phrase: ""
   }

    handlePhraseInput = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //notes
    //pass the language_id as a prop
    //one way - is to pass it from redux 
    //2nd way - pass it as a prop from the parent component

    phraseSubmitHandler = (e) => {
    //    debugger
        e.preventDefault();
        // debugger
        this.props.AddNewPhrase(this.state, this.props.selectedLanguage)
        //  debugger
        this.setState({
            english_phrase: "",
            foreign_phrase: ""
        })
    }
 
        render(){
               return(
                <div>
                    <h2 className="form-title">ADD A PHRASE</h2>
                    <form className="form" onSubmit={this.phraseSubmitHandler}>
                        <label><b>English Phrase:</b>    </label>
                        <input placeholder="Enter phrase..."type="text" id="english-phrase" name="english_phrase" onChange={this.handlePhraseInput} value={this.state.english_phrase}/>
                        <br/>
                        <label><b>Foreign Phrase:</b>    </label>
                        <input placeholder="Enter phrase..." type="text" id="foreign-phrase" name="foreign_phrase" onChange={this.handlePhraseInput} value={this.state.foreign_phrase}/> 
                         
                       <button id="form-btn" type="submit">Submit</button>
                    </form>
                </div>
            )
        }
    }


const mapStateToProps = (state) => {

        return { 
            selectedLanguage: state.selectedLanguage

        }
}   


export default connect(mapStateToProps, { AddNewPhrase })(PhraseForm);
