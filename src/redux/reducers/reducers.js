import { combineReducers } from 'redux';
import { languageReducer } from './languageReducer.js';
import { phraseReducer } from './phraseReducer.js';;

export const rootReducer = combineReducers({
    language: languageReducer,
    phrase: phraseReducer
})

