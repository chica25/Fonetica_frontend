
export const LanguagePhraseReducer = ( state = {phrases: []}, action) => {
        switch(action.type) {
            case "SET_PHRASES": 
            return {...state, languages: action.payload}
            default:
            return state;
        }

    }

