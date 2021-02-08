import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux'

const PhrasesByLanguage = (props) => {
   
        return(
            <div className="phrase">
                {props.phrases.map(phrase => {
                       return( <div key={phrase.id}> 
                       {phrase.english_language} - {phrase.foreign_language} 
                       {phrase.language_id}
                        </div>
                        )
                     })} 
                </div>
            ) 
        }


const mapStateToProps = ({ phrases }) => ({ phrases });
    

export default connect(mapStateToProps)(PhrasesByLanguage);


