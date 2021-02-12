import React from 'react';
import { connect } from 'react-redux';
import {fetchLanguagePhrases } from '../actions/actionsCreator.js';


    class LanguageList extends React.Component {
        // console.log("Hi", props)
        // state = {
        //     languages: ""

        // }

        handleClick = (e) => {     
        // debugger
        e.preventDefault()
        this.props.fetchLanguagePhrases(e.target.id)
        this.props.languages.push("/path/to/phrases");
        //when user clicks on a flag 
        // it will fetch the phrases of the language
        // connect the info to the redux store
        // it'll direct them to the phrases of that languageerw

        }
        // <a href="http://localhost:3000/api/v1/languages/1/phrases"></a>
        render(){
    //    
        const languages = this.props.languages.map((lang, i) =>  <div key={i}> <h3>{lang.language_name}</h3>
        <button onClick={this.handleClick}><img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/></button></div>)
        return(
            <div className="language">
            {/* //     {props.languages.map(lang => { */}
            {/* //         return(
            //             <div key={lang.id}>
            //                 <h3>{lang.language_name}</h3>
            //                 <img src={lang.flag_image} alt="languages" width={80} height={60} mode='fit' />
            //             </div>
            //             )
                    // })} */}
                    {languages}
                </div>
               
            )
        }
        
    }

const mapStateToProps = ({ languages }) => ({ languages })

export default connect(mapStateToProps, {fetchLanguagePhrases})(LanguageList);
