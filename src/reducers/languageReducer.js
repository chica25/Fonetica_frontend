

const initialState = {
    languages: [],
    phrases: []
}

export const languageReducer = (state = initialState, action) => {
    // console.log("hello!!!", action)
    switch(action.type){
        case 'GET_LANGUAGES':
            return {...state, languages: action.payload}

        case 'GET_PHRASES': 
            // console.log('SET_PHRASES')
            return {...state, phrases: action.payload}

        case 'CREATE_PHRASES': 
            return {...state, phrases: [...state.phrases, action.payload]}
        
        case 'SELECTED_LANGUAGE':
            return {...state, selectedLanguage: action.payload}

    
            default:
                return state;
        }
}

