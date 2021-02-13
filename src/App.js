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
              <Route exact path="/home" component={Home}/>
              <Route exact path="/languages" component={LanguageList}/>
              <Route path="languages/phrases/:id" component={PhraseContainer}/>
              <Route path="/interactivemaps" component={InteractiveMaps}/>
            </Switch>
       </Router>
      );
    }
}
 

export default (App);