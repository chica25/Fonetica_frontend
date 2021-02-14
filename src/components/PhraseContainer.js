import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage'

class PhraseContainer extends Component {

   
        render(){
            // console.log
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
