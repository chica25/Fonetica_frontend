const initialState = {
    phrases: [],
    english_language: {},
    foreign_language: {}
}

export const LanguagePhraseReducer = ( state = initialState, action) => {
                switch(action.type) {
                    case "SET_PHRASES": 
                    return {...state, languages: action.payload}
                    default:
                    return state;
                }

            }

