

export function LanguageReducer(state = {languages: []}, action) => {
       switch(action.type){

            case "SET_LANGUAGES":
                return {...state, languages: action.payload}
            default:
            return state;
        }
    }

