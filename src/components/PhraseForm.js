import React from 'react';
import { fetchNewPhrase } from "../actions/actionsCreator";
 import { connect } from 'react-redux'


const PhraseForm = () => {

    const handleChange = (e) => {
        e.preventDefault();  //
    }

    return(
        <div>
            <form>
            <label>Language Name:</label>
                <input placeholder="name" type="text" name="languageName" placeholder="Enter language name..." onClick={handleChange} />
                <br/>
                <label>Enter Phrase:</label>
                <input placeholder="phrase" type="text" name="enterPhrase" placeholder="Enter phrase..." name="name" onClick={handleChange} />
            </form>
        </div>
    )
   

}

export default PhraseForm;

// export default connect(null, { fetchNewPhrase: fetchNewPhrase })(PhraseForm);