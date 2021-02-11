import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
// import { rootReducer } from './reducers/index';
import { languageReducer } from './reducers/languageReducer';
// import { PracticePhraseReducer } from './redux/reducers/PracticePhraseReducer';

// add rootReducer after including all reducers
const store = createStore(languageReducer, compose(applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
