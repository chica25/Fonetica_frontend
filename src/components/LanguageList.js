import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguagePhrases, selectLanguage , fetchLanguages} from '../actions/actionsCreator.js';
import { Link } from 'react-router-dom';

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

        componentDidMount() {
            // console.log("hello", this.props)
            
           
             
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
               
                <div className="language">
                     <h3 style={{ color: 'purple' }}>Select a Language</h3>
                    {languages}
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
