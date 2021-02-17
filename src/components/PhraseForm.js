import React from 'react';
import { AddNewPhrase } from "../actions/actionsCreator";
import { connect } from 'react-redux'


class PhraseForm extends React.Component {
   state = {
    english_phrase: "",
    foreign_phrase: ""
   }

    handleChange = (e) => {
        this.setState({
            // english_phrase: e.target.value,
            // // foreign_phrase: e.target.value
            // newPhrase: e.target.value,
            [e.target.name]: e.target.value
        })
    }
    

    handleOnSubmit = (e) => {
        // debugger
        e.preventDefault();
        // debugger
        
         this.props.AddNewPhrase(this.state)
         this.setState({
                foreign_phrase: this.state.foreign_phrase,
                english_phrase: this.state.english_phrase
                // newPhrase: this.state.newPhrase
            })
        // })
    }

        render(){
               return(
                <div>
                    <h2>Start Practicing:</h2>
                    <form onSubmit={this.handleOnSubmit}>
                    
                        <label>English Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="english_phrase" onChange={this.handleChange} value={this.english_phrase}/>
                        <button>create</button>
                        <h2>{this.state.newPhrase}</h2>
                        
                        
                   {/* <h2>{this.state.foreign_phrase}</h2>  */}
                        <label>Foreign Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="foreign_phrase" onChange={this.handleChange} value={this.state.foreign_phrase}/>
                        
                        {/* <input type="create" value="submit phrase" />  */}
                        <button>create</button>
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