import React, { Component } from 'react';
import PhrasesByLanguage from './PhrasesByLanguage.js';
import PhraseFormInput from './PhraseFormInput.js';
import { fetchLanguagePhrases } from '..redux/actions/actionsCreator.js';
import { connect } from 'react-redux.js';

class Phrases extends Component {

    componentDidMount(){
      this.props.fetchLanguagePhrases()
    }
          render(){
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