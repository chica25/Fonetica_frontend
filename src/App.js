import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LanguageList from '/components/LanguageList';
import InteractiveMaps from '/components/InteractiveMaps';

class App extends React.Component {
  render(){
      return (
       <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Router path="/languages" component={LanguageList}/>
          <Router path="/phrases" component={Phrases}/>
          <Router path="/interactivemaps" component={InteractiveMaps}/>
        </Switch>
       </Router>
      );
    }
}
 

export default App;
