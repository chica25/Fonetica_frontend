import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LanguageList from './components/LanguageList';
// import PhrasesByLanguage from './components/PhrasesByLanguage';
import PhraseContainer from './components/PhraseContainer';
import InteractiveMaps from './components/InteractiveMaps';
import NavBar from './components/NavBar';

class App extends React.Component {
  render(){
    return (
     <Router>
       <NavBar/>
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/languages" exact component={LanguageList}/>
            <Route path="/languages/phrases/:id" exact component={PhraseContainer}/>
            <Route path="/interactivemaps" exact component={InteractiveMaps}/>
          </Switch>
     </Router>
    );
  }
}

export default (App);