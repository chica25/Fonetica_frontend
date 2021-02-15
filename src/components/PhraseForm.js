import React from 'react';
import { fetchNewPhrase } from "../actions/actionsCreator";
 import { connect } from 'react-redux'


const PhraseForm = () => {

    const handleChange = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form>
            <label>Language Name:</label>
                <input type="text" name="languageName" placeholder="Enter language name..." onClick={handleChange} />
            </form>
                <br/>
            <form>
                <label>Enter Phrase:</label>
                <input type="text" name="enterPhrase" placeholder="Enter phrase..." name="name" onClick={handleChange}></input>
            </form>
        </div>
    )
   

}

export default PhraseForm;

// export default connect(null, { fetchNewPhrase: fetchNewPhrase })(PhraseForm);