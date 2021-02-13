import React from 'react';
import { connect } from 'react-redux';
import {fetchLanguagePhrases } from '../actions/actionsCreator.js';
// import { Router, Redirect } from 'react-router';


    class LanguageList extends React.Component {

          state = {
            languages: ""

        }

        handleClick = (e) => {     
        // debugger
        // e.preventDefault()
        this.props.fetchLanguagePhrases(e.target.id)
        this.history.push("/phrases")

            // return <Redirect to="/phrases" />
        //when user clicks on a flag 
        // it will fetch the phrases of the language
        // connect the info to the redux store
        // it'll direct them to the phrases of that language

        }
        
        render(){
    //    
        const languages = this.props.languages.map((lang, i) =>  <div key={i}> <h3>{lang.language_name}</h3>
        <button onClick={this.handleClick}><img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/></button></div>)
        return(
            <div className="language">
                    {languages}
                </div>
               
            )
        }
        
    }

const mapStateToProps = ({ languages }) => ({ languages })

export default connect(mapStateToProps, {fetchLanguagePhrases})(LanguageList);
