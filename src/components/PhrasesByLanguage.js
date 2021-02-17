import React from 'react';

function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase, id) => {
                return (
                    <div key={id}>
                        {phrase.english_phrase}
                        {phrase.foreign_phrase}
                    </div>
                )
             })}
        </>
    )
}
export default PhrasesByLanguage