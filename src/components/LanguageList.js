import React from 'react';
import { connect } from 'react-redux';
import {fetchLanguagePhrases } from '../actions/actionsCreator.js';
import { Link } from 'react-router-dom';
// import PhraseFormInput from './PhraseFormInput'


    class LanguageList extends React.Component {

        handleClick = (e) => {     
        // debugger
        // e.preventDefault()
        this.props.fetchLanguagePhrases(e.target.id)
        // debugger
            // return <Redirect to="/phrases/{e.target.id}" />
        //when user clicks on a flag 
        // it will fetch the phrases of the language
        // connect the info to the redux store
        // it'll direct them to the phrases of that language

        }
        
        render(){
            const languages = this.props.languages.map((lang, i) => 
                <div key={i}> <h3>{lang.language_name}</h3>
                    <Link to={`/languages/phrases/${lang.language_name}`}>
                        <button onClick={this.handleClick}>
                            <img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/>
                        </button>
                    </Link>
                </div>)
                //  debugger
            return(
               
                <div className="language">
                    {languages}
                    <h2>Languages</h2>
                    {/* <PhraseFormInput /> */}
                </div>
            )
        }
    }
    // const mapStateToProps = (state) => ({ 
    //     phrases: state.phrases 
    // })
    
    // export default connect(mapStateToProps)(PhraseContainer);

const mapStateToProps = (state) => ({
    languages: state.languages
}) 

export default connect(mapStateToProps, {fetchLanguagePhrases})(LanguageList);
