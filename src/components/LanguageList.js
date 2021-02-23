import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguagePhrases, selectLanguage , fetchLanguages} from '../actions/actionsCreator.js';
import { Link } from 'react-router-dom';
import language_page_img from '../images/language_page_img.png'


    class LanguageList extends React.Component {

        handleClick = (e) => {     
            // console.log(e.target.id, "hello!")
        this.props.fetchLanguagePhrases(e.target.id)
        // debugger
        this.props.selectLanguage(e.target.id)
        // debugger
        //when user clicks on a flag 
        // it will fetch the phrases of the language
        // connect the info to the redux store
        // it'll direct them to the phrases of that language

        }

        render(){
            const languages = this.props.languages.map((lang, i) => 
                <div key={i}> <h4 style={{ }}>{lang.language_name}</h4>
                    <Link to={`/languages/phrases/${lang.language_name}`}>
                        <button onClick={this.handleClick}>
                            <img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/>     
                        </button>
                    </Link>

                </div>)
            return(

                <div>
                    <h3 className="languages-title">ALL LANGUAGES</h3>
                    <img className="languages-page-img" src={language_page_img} alt="image"></img>
                    <div className="language-name">{languages}</div> 
                </div>
               
            )
        }
    }

    const mapStateToProps = (state) => {  //notes - MapStateToProps gets the state from the redux store
        return {

            languages: state.languages,
            selectedLanguage: state.selectedLanguage
        }
    
        // add this.drops on a debugger
    }


export default connect(mapStateToProps, { fetchLanguagePhrases, selectLanguage, fetchLanguages })(LanguageList);

// notes - connecting a higher order component to the redux store
// Redux Thunk actions - fetchLanguagePhrases, selectLanguage, fetchLanguages 
// Thunk is a middleware - Passes through the dis
