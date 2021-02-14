// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PhrasesByLanguage from './PhrasesByLanguage'

// class PhraseContainer extends Component {

   
//         render(){
//             // console.log
//             return(
//                 <>
//                     <h1>Phrases page</h1>
//                     <PhrasesByLanguage/>
//                 </>
//             )
//          }
// }

// const mapStateToProps = ({phrases }) => ({ phrases })// if reducer is sending the right information to the store

// export default connect(mapStateToProps)(PhraseContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhrasesByLanguage from './PhrasesByLanguage'


class PhraseContainer extends Component {


        render(){
            // console.log((this.props.phrases).map(phrase => phrase["english_phrase"]
            this.props.phrases.map(phrase => phrase["english_phrase"] 
                )
            return(
                <>
                    <h2>Phrases</h2>
                    <PhrasesByLanguage
                    phrases={this.props.phrases}
                    />
                </>
            )
         }
}

const mapStateToProps = (state) => ({ 
    phrases: state.phrases 
})

export default connect(mapStateToProps)(PhraseContainer);