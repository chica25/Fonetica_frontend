import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    languages: languagereducers,
    phrases: phraseReducer
})

export default rootReducer;