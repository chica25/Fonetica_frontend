import React, { Component } from 'react';
//connect Home so that you can mapDispatchToProps
//you want to dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from '../components/LanguageList'
class Home extends Component {
 render() {
     return(
         <>
            <h1>Home page</h1>
            <LanguageList />
         </>
     )
    }   
}


export default Home;