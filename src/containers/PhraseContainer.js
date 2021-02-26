import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from '../components/PhrasesByLanguage'
import PhraseForm from '../components/PhraseForm'
import PhraseImg from '../components/PhraseImg'

class PhraseContainer extends Component {


    render(){ 
        return(
            <>
            <h3 className="phrase-title">START PRACTICING</h3>
            <div>
                <PhraseImg />
                <PhrasesByLanguage phrases={this.props.phrases}/> 
            </div> 
                <br/> <br/>
                <PhraseForm />
            </>
        )
     }
}

const mapStateToProps = (state) => { 
    
    return { phrases: state.phrases }
}
    

export default connect(mapStateToProps)(PhraseContainer);
