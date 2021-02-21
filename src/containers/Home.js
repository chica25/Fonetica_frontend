import React, { Component } from 'react';
//connect Home to mapDispatchToProps
//dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from '../components/LanguageList';
import { fetchLanguages } from '../actions/actionsCreator.js';
import { connect } from 'react-redux';
import '../style.css'
import Logo from '../components/Logo';
import UserStories from '../components/UserStories';
import Footer from '../components/Footer';




class Home extends Component {

 
 render() {
    //  console.log("HELLO!!!", this.props)
     return(
         <>
         <div>
      <br/>
    {/* <img src={banner_3} alt="banner" />  */}
      <br/>
    </div>
            < Logo />
            <h2>Welcome</h2>
            <LanguageList />
            <UserStories />
            <br/><br/>
            <Footer />
         </>
     )
   
    }   
}

export default connect(null, { fetchLanguages })(Home);