import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
import { LanguageReducer } from '../reducers/LanguageReducer';
import { LanguagePhrasesReducer } from '../reducers/LanguagePhrasesReducer';


const store = createStore(LanguageReducer, LanguagePhrasesReducer, compose(applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
