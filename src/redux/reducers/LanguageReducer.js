

export function languageReducer(state = {languages: []}, action) {
       switch(action.type){

            case "FETCH_LANGUAGES":
                return {...state, languages: action.payload}
            default:
            return state;
        }
    }

