import React, { Component } from 'react';
import { fetchLanguagePhrases } from './redux/actions/actionCreator.js';
import PhrasesByLanguage from './PhrasesByLanguage.js';
import PhrasesForm from './PhraseFormInput.js';
import { connect } from 'react-redux.js';

class Phrases extends Component {

    componentDidMount() {
      this.props.fetchLanguagePhrases()
    }

 render() {
     return(
         <>
            <h2>Phrases page</h2>
            <PhrasesByLanguage />
            <PhraseFormInput />
         </>
     )
   
    }

}

export default connect(null, { fetchLanguagePhrases: fetchLanguagePhrases })(Phrases);