import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage'
import PhraseForm from './PhraseForm'

class PhraseContainer extends Component {


    render(){ 
        return(
            <>
                <PhrasesByLanguage 
                phrases={this.props.phrases}/>  
                <br/> <br/>
                  <PhraseForm />
            </>
            
        )
            
    }
}

const mapStateToProps = (state) => ({ 
    phrases: state.phrases
})

export default connect(mapStateToProps)(PhraseContainer);