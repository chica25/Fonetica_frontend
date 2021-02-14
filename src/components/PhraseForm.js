import React from 'react';
// import { fetchNewPhrase } from "../actions/actionsCreator";
//  import { connect } from 'react-redux'


const PhraseForm = () => {

    const onChange = () => {
        // preventDefault();
    }

    return(
        <div>
            <form>
            <label>Language Name:</label>
                <input type="text" placeholder="Enter language name..." onClick={onChange} />
            </form>
                <br/>
            <form>
                <label>Enter Phrase:</label>
                <input type="text" placeholder="Enter phrase..." name="name" onClick={onChange}></input>
            </form>
        </div>
    )
   

}

export default PhraseForm;
// export default connect(null, { fetchNewPhrase: fetchNewPhrase })(PhraseFormInput);