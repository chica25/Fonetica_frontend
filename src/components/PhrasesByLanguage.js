import React from 'react';
import { connect } from 'react-redux'

// const languages = this.props.languages.map((lang, i) =>  <div key={i}> <h3>{lang.language_name}</h3>
// <button onClick={this.handleClick}><img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/></button></div>)
// return(

const PhrasesByLanguage = (props) => {
    return (
        <div>
            {props.phrases.map(phrase => <div key={phrase.id}> {phrase.english_language} {phrase.foreign_language}</div>)}
        </div>
        )
    }

            // props.phrases.map(phrase => {
            //       return( <div key={phrase.id}>
            //                     <h3>{phrase.english_language}</h3>
            //                     <h3>{phrase.foreign_language}</h3>
            //                 </div>
                         
            //             )
            //          }
                     
            //   )

        
    
      

const mapStateToProps = ({ languages }) => ({ languages });
    

export default connect(mapStateToProps)(PhrasesByLanguage);


