import React from 'react';
function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase) => {
                return (
                    <div key={phrase["id"]}>
                        {phrase["english_phrase"]} 
                        {phrase["foreign_phrase"]}
                    </div>
                )
             })}
        </>
    )
}
export default PhrasesByLanguage