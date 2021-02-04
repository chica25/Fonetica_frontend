import React, { Component } from 'react';
//connect Home so that you can mapDispatchToProps
//you want to dispatch a thunk action in componentDidMount
//to fetch list of lanugages from API and update app state with that list
import LanguageList from '../components/LanguageList'
import { fetchLanguages } from '../actions/fetchLanguages'
import { connect } from 'react-redux';

class Home extends Component {


    componentDidMount() {
      this.props.fetchLanguages()
    }

 render() {
     return(
         <>
            <h1>Home page</h1>
            <LanguageList />
         </>
     )
   
    }   

}

const mapStateToProps = state => {
    return {
        languages: state.languages
    }
}


export default connect(mapStateToProps, {fetchLanguages}) (Home);