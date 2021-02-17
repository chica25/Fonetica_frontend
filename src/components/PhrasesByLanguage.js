import React from 'react';

function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase) => {
                return (
                    <div key={phrase["id"]}>
                        <ol>
                            <li> {phrase["english_phrase"]}</li>
                            <br/> 
                            <li>{phrase["foreign_phrase"]} </li>   
                        </ol>
                    </div>
                )
             })}
        </>
    )
}
export default PhrasesByLanguage