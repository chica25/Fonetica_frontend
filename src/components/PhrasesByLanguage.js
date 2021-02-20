import React from 'react';
// import PhraseForm from './PhraseForm'

function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase, id) => {
                return (
                    <div key={id}>
                       English Phrase: {phrase.english_phrase + " " } <br/>
                        Foreign Phrase: {phrase.foreign_phrase}
                    </div>
                )
             })}
        </>
    )
}
export default PhrasesByLanguage