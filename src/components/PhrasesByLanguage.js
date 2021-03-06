import React from 'react';
import LikeButton from './LikeButton';

function PhrasesByLanguage (props) {
    return (
            <>
            {props.phrases.map((phrase, id) => {
                return (
                    <div className="phrases" key={id}>
                        <b>English Phrase:</b> {phrase.english_phrase}
                        <br/>
                        <b>Foreign Phrase:</b> {phrase.foreign_phrase}
                        <br/><br/>
                        <LikeButton />
                    </div>
                )
             })}
        </>
    )
}

export default PhrasesByLanguage

