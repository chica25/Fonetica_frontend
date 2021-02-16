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
            [e.target.name]: e.target.value
        })
    }
    

    handleSubmit = (e) => {
        // debugger
        e.preventDefault();
        // console.log("hi", e.target)
        // debugger
         this.props.AddNewPhrase({
            english_phrase: this.state.english_phrase,
            foreign_phrase: this.state.foreign_phrase
        })
    }

        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>English Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="english_phrase" onChange={this.handleChange} value={this.state.english_phrase}/>
                        <br/><br/>

                        <label>Foreign Phrase:</label>
                        <input placeholder="Enter phrase..."type="text" name="foreign_phrase" onChange={this.handleChange} value={this.state.foreign_phrase}/>
                        <br/><br/>
                        <input type="submit" value="submit phrase" />
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