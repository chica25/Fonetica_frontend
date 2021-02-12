// Display 10 phrases for the language based on the flag the user clicks

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage'

class PhraseContainer extends Component {

   
        render(){
            return(
                <>
                    <h2>Phrases page</h2>
                    <PhrasesByLanguage/>
                </>
            )
    }
}

const mapStateToProps = ({phrases }) => ({ phrases })// if reducer is sending the right information to the store

export default connect(mapStateToProps)(PhraseContainer);
