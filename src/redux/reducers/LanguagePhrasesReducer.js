const initialState = { 
    phrases: [],
}

export const LanguagePhraseReducer = ( state = initialState, action) => {
        switch(action.type) {
            case "SET_PHRASES_BY_LANGUAGE": 
                return {...state, phrases: action.payload}
            default:
                return state;
        }

    }

