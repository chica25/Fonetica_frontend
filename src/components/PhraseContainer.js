import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage'
import PhraseForm from './PhraseForm'

class PhraseContainer extends Component {


    render(){ 
        // debugger
        return(
            <>
                <PhrasesByLanguage phrases={this.props.phrases}/>  
                <br/> <br/>
                  <PhraseForm english_phrase={this.props.english_phrase} foreign_phrase={this.props.foreign_phrase}/>
            </>
            
        )
            
    }
}

const mapStateToProps = (state) => ({ 
    phrases: state.phrases
    // languages: state.languages
    
})

export default connect(mapStateToProps)(PhraseContainer);