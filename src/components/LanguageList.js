import React from 'react';
import { connect } from 'react-redux';
import {fetchLanguagePhrases } from '../actions/actionsCreator.js';
// import { Redirect } from 'react-router';
// import { withRouter } from "react-router";
import { Link } from 'react-router-dom';


    class LanguageList extends React.Component {

        //   state = {
        //     languages: ""

        // }

        // path "/phrases/1"
        // path "/phrases/:id"

        handleClick = (e) => {     
        // debugger
        // e.preventDefault()
        this.props.fetchLanguagePhrases(e.target.id)
        // console.log(e.target)
        // this.props.history.push("/phrases")
        // withRouter.push("/phrases")
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
                    <Link to={`/languages/phrases/${i}`}>
                        <button onClick={this.handleClick}>
                            <img src={lang.flag_image} id={lang.id} alt="languages" width={80} height={60} mode='fit'/>
                        </button>
                    </Link>
                </div>)
                //  debugger
            return(
                <div className="language">
                    {languages}
                </div>
            )
        }
    }

const mapStateToProps = ({ languages }) => ({ languages })

export default connect(mapStateToProps, {fetchLanguagePhrases})(LanguageList);
