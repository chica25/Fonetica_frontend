import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux'

// function LanguageList(props) {

const PhrasesByLanguage = (props) => {
   
        return(
            <div className="phrase" >
                {props.phrases.map(phrase => {
                    return (
                        <div key={phrase.id}>
                            <h3>{phrase.english_language}</h3>
                            <h3>{phrase.foreign_language}</h3>
     
                        </div>
                    )
                })}
            </div>
           
        )
    
    
}

// const mapStateToProps = (state) => ({
//     languages: state.languages
// })


const mapStateToProps = ({ languages }) => ({ languages })
    

export default connect(mapStateToProps)(PhrasesByLanguage);


