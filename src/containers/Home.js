import React, { Component } from 'react';
//connect Home to mapDispatchToProps
//dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from '../components/LanguageList';
import { fetchLanguages } from '../actions/actionsCreator.js';
import { connect } from 'react-redux';
import '../style.css'
import LeaderBoard from '../components/LeaderBoard';
import UserStories from '../components/UserStories';


class Home extends Component {

 
 render() {
    //  console.log("HELLO!!!", this.props)
    
     return(
         
         <>
       
            <h3 className="welcome">WELCOME</h3>
                <LeaderBoard />
                <br/><br/>
                <UserStories />
                <LanguageList />
         </>
     )
   
    }   
}

export default connect(null, { fetchLanguages })(Home);