import React, { Component } from 'react';
import { fetchLanguagePhrases } from '../actions/actionCreator.js'
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage.js';

class Phrases extends Component {

    componentDidMount() {
      this.props.fetchLanguagePhrases()
    }

 render() {
     return(
         <>
            <h2>Phrases page</h2>
            < PhrasesByLanguage />
         </>
     )
   
    }   

}



export default connect(null, { fetchLanguagePhrases: fetchLanguagePhrases })(Phrases);