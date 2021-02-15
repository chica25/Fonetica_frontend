const initialState = {
    languages: [],
    phrases: [],
    createPhrase: {
        languageName: "",
        enterPhrase: ""
    }
}

export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_LANGUAGES':
            return {...state, languages: action.payload}

        case 'GET_PHRASES': 
            // console.log('SET_PHRASES')
            return {...state, phrases: action.payload}
        
        case 'CREATE_PHRASES': 
            return action.payload 
        
        default:
          return state;
    }
}

