import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LanguageList from './components/LanguageList';
import LanguagePhrases from './components/LanguageList';
import InteractiveMaps from './components/InteractiveMaps';

class App extends React.Component {
  render(){
      return (
       <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/languages" component={LanguageList}/>
          <Route path="/phrases" component={LanguagePhrases}/>
          <Route path="/interactivemaps" component={InteractiveMaps}/>
        </Switch>
       </Router>
      );
    }
}
 

export default App;