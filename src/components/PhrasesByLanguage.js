import React from 'react';
// import PhraseForm from './PhraseForm'


const PhrasesByLanguage = (props) => {
    return (
        <>  
            {props.phrases.map(phrase => {
                return (
                    <div key={phrase.id}>
                    <ul>
                        <li>{phrase.english_phrase} {phrase.foreign_phrase}</li>                 
                    </ul>
                </div>
                )
            })} 
                
            </>    
        )
    }

export default PhrasesByLanguage;