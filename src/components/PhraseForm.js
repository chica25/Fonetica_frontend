import React from 'react';
import { AddNewPhrase } from "../actions/actionsCreator";
import { connect } from 'react-redux'



class PhraseForm extends React.Component {
   state = {
    english_phrase: "",
    foreign_phrase: ""
   }

    handlePhraseInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    phraseSubmitHandler = (e) => {
        e.preventDefault();
         this.props.AddNewPhrase(this.state)

         this.setState({
                foreign_phrase: this.state.foreign_phrase,
                english_phrase: this.state.english_phrase
                // foreign_phrase: "",
                // english_phrase: ""
            })
        // })
    }

        render(){
               return(
                <div>
                    <h2>Start Practicing:</h2>
                    <form className="form" onSubmit={this.phraseSubmitHandler} >
                    
                        <label>English Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="english_phrase" onChange={this.handlePhraseInput} value={this.state.english_phrase}/>
                        <button>create</button>
                        {/* <h2>{this.state.newPhrase}</h2> */}
                        <br/>
                        
                   {/* <h2>{this.state.foreign_phrase}</h2>  */}
                        <label>Foreign Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="foreign_phrase" onChange={this.handlePhraseInput} value={this.state.foreign_phrase}/>
                        
                        {/* <input type="create" value="submit phrase" />  */}
                        <button>create</button>

                        {/* <input type='hidden' name="authenticity_token" value={this.props.authenticityToken} /> */}
                                            
                    </form>
                </div>
            )
        }
    }


// const mapStateToProps = (state) => {

//         return { 
//             formData: state.PhraseForm
//         }
// }   


// export default connect(mapStateToProps, { AddNewPhrase })(PhraseForm);

export default connect(null, { AddNewPhrase })(PhraseForm);