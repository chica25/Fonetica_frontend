import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguagePhrases, selectLanguage, fetchLanguages} from '../actions/actionsCreator.js';
import { Link } from 'react-router-dom';
import language_page_img from '../images/language_page_img.png';


    class LanguageList extends React.Component {

  
        handleClick = (e) => {     
            this.props.fetchLanguagePhrases(e.target.id)
            this.props.selectLanguage(e.target.id)
        }

        render(){
            const languages = this.props.languages.map((lang, i) => 
                <div key={i}> <h4>{lang.language_name}</h4>
                    <Link to={`/languages/phrases/${lang.language_name}`}>
                        <button onClick={this.handleClick}>
                            <img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/>     
                        </button>
                    </Link>
                    <br/>
                    <br/>
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

    const mapStateToProps = (state) => { 
        return {
            languages: state.languages,
            selectedLanguage: state.selectedLanguage
        }
    
    }


export default connect(mapStateToProps, { fetchLanguagePhrases, selectLanguage, fetchLanguages })(LanguageList);

