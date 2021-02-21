import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import LanguageList from './components/LanguageList';
import PhraseContainer from './containers/PhraseContainer';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import {fetchLanguages} from './actions/actionsCreator';
import Resources from './components/Resources';

// import Footer from './components/Footer'

class App extends React.Component {

  componentDidMount() {
    // console.log("hello")
    this.props.fetchLanguages();     
}


  render(){
    return (
     <Router>
       <NavBar/>
          <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/languages" component={LanguageList}/>
              <Route exact path="/languages/phrases/:id" component={PhraseContainer}/>
              <Route exact path="/resources" component={Resources}/>
               {/* <Route exact path="/phrases/" component={PhraseForm}/> */}
            </Switch>
            {/* <Footer /> */}
     </Router>

     
    );
  }
}

export default connect(null, {fetchLanguages})(App);