import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage'

class PhraseContainer extends Component {


    render(){ 
        return(
            <>
                <PhrasesByLanguage 
                phrases={this.props.phrases}/>
            </>
        )
            
    }
}

const mapStateToProps = (state) => ({ 
    phrases: state.phrases
})

export default connect(mapStateToProps)(PhraseContainer);