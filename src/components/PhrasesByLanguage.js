import React from 'react';
// import PhraseForm from './PhraseForm'


function PhrasesByLanguage (props) {
    return (
        <>
        {props.phrases.map((phrase) => {
            return (
                <div key={phrase["id"]}>
                    <ul>
                        <li> {phrase["english_phrase"]}
                        <br/> 
                        {phrase["foreign_phrase"]} </li>   
                    </ul>
                 </div>
                )
            })}
        </>
    )
}

export default PhrasesByLanguage