import React, { Component } from 'react';
//connect Home to mapDispatchToProps
//dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from '../components/LanguageList';
import { fetchLanguages } from '../actions/actionsCreator.js';
import { connect } from 'react-redux';
import banner_3 from '../public/images/banner_3.png';

class Home extends Component {

 
 render() {
    //  console.log("HELLO!!!", this.props)
     return(
         <>
         <div>
      <br/>
    <img style={img1} src={banner_3 } alt="banner" /> 
      <br/>
    </div>
            <h2>Welcome</h2>
            <LanguageList />
         </>
     )
   
    }   
}

export default connect(null, { fetchLanguages })(Home);