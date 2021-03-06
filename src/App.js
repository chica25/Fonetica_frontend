import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import LanguageList from './components/LanguageList';
import PhraseContainer from './containers/PhraseContainer';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { fetchLanguages, selectLanguage, fetchLanguagePhrases } from './actions/actionsCreator';
import ReviewsPage from './components/ReviewsPage';
import './style.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { get } from './helpers';
import MeetUps from  './components/MeetUps';

class App extends React.Component {
  
  componentDidMount() {
    let langId = get('languageId')
    if(langId){
      this.props.selectLanguage(langId)
      this.props.fetchLanguagePhrases(langId)
    }
    this.props.fetchLanguages()  
  }

  render(){
    return (
      <Router>
          <Logo />
       <NavBar/>
          <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/languages" component={LanguageList}/>
              <Route exact path="/languages/phrases/:id" component={PhraseContainer}/>
              <Route exact path="/reviews" component={ReviewsPage}/>
              <Route exact path="/MeetUps" component={MeetUps}/>
          </Switch> 
          <Footer/> 
     </Router>
     );
  }
}

export default connect(null, {selectLanguage, fetchLanguages, fetchLanguagePhrases})(App);