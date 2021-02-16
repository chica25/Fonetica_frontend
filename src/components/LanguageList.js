import React from 'react';
import { connect } from 'react-redux';
import { fetchLanguagePhrases } from '../actions/actionsCreator.js';
import { Link } from 'react-router-dom';
// import { getId } from '../actions/actionsCreator.js';


    class LanguageList extends React.Component {

        handleClick = (e) => {     
        // debugger
        // e.preventDefault()
        this.props.fetchLanguagePhrases(e.target.id)
        // this.props.getId(e.target.id)
        // debugger
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
            return(
               
                <div className="language">
                     <h2>Languages</h2>
                    {languages}
                   
                </div>
            )
        }
    }

const mapStateToProps = (state) => {
    return {
        languages: state.languages
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchLanguagePhrases: () => {
//         dispatch(fetchLanguagePhrases())
//       },
//         // getId: () => {
// //         dispatch(getId())
// //         }
// //     };
//     };
// }   

export default connect(mapStateToProps, { fetchLanguagePhrases })(LanguageList);
