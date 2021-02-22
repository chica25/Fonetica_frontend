import React from 'react';

function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase, id) => {
                return (
                    <div className="phrases" key={id}>
                        
                       English Phrase: {phrase.english_phrase + " " } <br/>
                        Foreign Phrase: {phrase.foreign_phrase}
                    </div>
                )
             })}
        </>
    )
}

export default PhrasesByLanguage

// create a like button that updates the local state
// implement the like button in the create phrases
// render method
// add a button to the phrases
// click event

// class PhrasesByLanguage extends React.Component {

//     state = {
//         count: {

//         }
//     }


//     handleClick = (e) => {
        // let updateButton =  1   //will check to see if the button was clicked.
        // let button = e.target.id
        // let newCount = this.state.count + 1
        // if (this.state.count[button]){
        //     updateButton = this.state.count[button] + 1 
        // }
        // this.setState ({
        //     count: {...this.state.count, [button]: updateButton}
        // })
        //  debugger
    // }
   
    // render() {
//         return (
//                 <>
//                     {this.props.phrases.map((phrase, id) => {
//                         return (
//                             <div key={id}>
//                             English Phrase: {phrase.english_phrase + " " } <br/>
//                                 Foreign Phrase: {phrase.foreign_phrase}
//                                 <button onClick={this.handleClick} id={id}>Likes: {this.state.count}</button>
//                             </div>
//                         )
                       
//                     })}
//                 </>
//             )
//     }

// }

// export default PhrasesByLanguage;