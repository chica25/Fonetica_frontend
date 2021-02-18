import React from 'react';
import { AddNewPhrase } from "../actions/actionsCreator";
import { connect } from 'react-redux'



class PhraseForm extends React.Component {

   state = {
    english_phrase: "",
    foreign_phrase: ""
   }

    handlePhraseInput = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    

    phraseSubmitHandler = (e) => {
       
        e.preventDefault();
        // debugger
        // const newphrase = {...this.state, id: language_id }
         this.props.AddNewPhrase(this.state)
         
        //  debugger
         this.setState({
             english_phrase: "",
            foreign_phrase: ""
        })
    }
 
        render(){
               return(
                <div>
                    <h2>Start Practicing</h2>
                    <form onSubmit={this.phraseSubmitHandler} >
                    
                        <label>English Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="english_phrase" onChange={this.handlePhraseInput} value={this.state.english_phrase}/>
                
                        {/* <h2>{this.state.newPhrase}</h2> */}
                        <br/><br/>
                        
                   {/* <h2>{this.state.foreign_phrase}</h2>  */}
                        <label>Foreign Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="foreign_phrase" onChange={this.handlePhraseInput} value={this.state.foreign_phrase}/>
                        
                        {/* <input type="create" value="submit phrase" />  */}
                        <button>submit</button>
                                            
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