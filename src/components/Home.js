import React, { Component } from 'react';
//connect Home so that you can mapDispatchToProps
//you want to dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from './LanguageList';
import { fetchLanguages } from '../actions/actionsCreator.js';
import { connect } from 'react-redux';

class Home extends Component {

    componentDidMount() {
        // console.log("hello")
      this.props.fetchLanguages();
    //   console.log(this)
    }

    // handleClick = () => {
        
    // }

 render() {
    //  console.log("HELLO!!!", this.props)
     return(
         <>
            <h1>Home page</h1>
            <LanguageList/>
            {/* <button onClick={this.handleClick}>start learning</button> */}
         </>
     )
   
    }   
    // <Questions questions={this.props.questions}/>
}



export default connect(null, { fetchLanguages })(Home);