import React from 'react';

function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase, id) => {
                return (
                    <div className="phrases" key={id}>

                       English Phrase: {phrase.english_phrase} <br/>
                        Foreign Phrase:{phrase.foreign_phrase}
                    </div>
                )
             })}
        </>
    )
}

export default PhrasesByLanguage

