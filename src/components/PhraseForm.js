import React from 'react';
import { fetchNewPhrase } from "../actions/actionsCreator";
import { connect } from 'react-redux'


const PhraseForm = ({languageName, enterPhrase, history}) => {

    const handleChange = (e) => {
         //
    }

    return(
        <div>
            <form>
            <label>Language Name:</label>
                <input placeholder="Enter language name..."type="text" name="languageName" onClick={handleChange} value={languageName}/>
                <br/><br/>
                <label>Enter Phrase:</label>
                <input placeholder="Enter phrase..." type="text" name="enterPhrase" name="name" onClick={handleChange} value={enterPhrase}/>
                <input type="submit" value="submit phrase" />
            </form>
        </div>
    )
   

}

const mapStateToProps = (state) => ({
    newPhrases: state.newPhrases 
        // const { languageName, enterPhrase } = state.PhraseForm,
        // // return { 
        // languageName, 
        // enterPhrase
})


export default connect(mapStateToProps, { fetchNewPhrase })(PhraseForm);