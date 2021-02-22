import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from '../components/PhrasesByLanguage'
import PhraseForm from '../components/PhraseForm'
import phrase_img from '../images/phrase_img.png'

class PhraseContainer extends Component {


    render(){ 
        // debugger
        return(
            <>
            <div className="phrases-by-language">
                <PhrasesByLanguage phrases={this.props.phrases}/> 
                </div> 
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
