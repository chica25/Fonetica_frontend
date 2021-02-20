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
                  <PhraseForm />
            </>
            
        )
            
    }
}

const mapStateToProps = (state) => { 
    // debugger
    return { phrases: state.phrases }
}
        
    // languages: state.languages
    


export default connect(mapStateToProps)(PhraseContainer);
