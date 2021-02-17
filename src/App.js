import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LanguageList from './components/LanguageList';
import PhraseContainer from './components/PhraseContainer';
import NavBar from './components/NavBar';
// import PhraseForm from './components/PhraseForm';

class App extends React.Component {
  render(){
    return (
     <Router>
       <NavBar/>
          <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/languages" component={LanguageList}/>
              <Route exact path="/languages/phrases/:id" component={PhraseContainer}/>
              {/* <Route exact path="/phrases" component={PhraseForm}/>   */}
            </Switch>
     </Router>
    );
  }
}

export default (App);