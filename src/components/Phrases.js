import React, { Component } from 'react';
import PhrasesByLanguage from './PhrasesByLanguage.js';
import { fetchLanguagePhrases } from '../redux/actions/actionsCreators.js';
import { connect } from 'react-redux';

class Phrases extends Component {

    componentDidMount(){
      this.props.fetchLanguagePhrases()
    }
        render(){
            return(
                <>
                    <h2>Phrases page</h2>
                    <PhrasesByLanguage />
                </>
            )
    }
}

export default connect(null, { fetchLanguagePhrases: fetchLanguagePhrases })(Phrases);