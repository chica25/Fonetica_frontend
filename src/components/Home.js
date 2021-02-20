import React, { Component } from 'react';
//connect Home to mapDispatchToProps
//dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from './LanguageList';
import { fetchLanguages } from '../actions/actionsCreator.js';
import { connect } from 'react-redux';

class Home extends Component {

    // componentDidMount() {
    //     // console.log("hello")
    //   this.props.fetchLanguages();
    // //   console.log(this)
    // }

 render() {
    //  console.log("HELLO!!!", this.props)
     return(
         <>
            <h2>Welcome</h2>
            <LanguageList />
            {/* <PhraseForm /> */}
         </>
     )
   
    }   
}

export default connect(null, { fetchLanguages })(Home);