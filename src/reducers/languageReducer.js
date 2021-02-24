import { set } from '../helpers'

const initialState = {
    languages: [],
    phrases: []
}

export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_LANGUAGES':
            return {...state, languages: action.payload}

        case 'GET_PHRASES': 
            return {...state, phrases: action.payload}

        case 'CREATE_PHRASES': 
            return {...state, phrases: [...state.phrases, action.payload]}
        
        case 'SELECTED_LANGUAGE':
            set('languageId', action.payload)
            return {...state, selectedLanguage: action.payload}

    
            default:
                return state;
        }
}

