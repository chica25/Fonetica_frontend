import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from '../components/PhrasesByLanguage'
import PhraseForm from '../components/PhraseForm'

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
    


export default connect(mapStateToProps)(PhraseContainer);
