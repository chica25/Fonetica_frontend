const initialState = {
    languages: [],
    phrases: [],
    createPhrase: {
        name: "",
        phrase: ""
    }
   
}

export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_LANGUAGES':
            return {...state, languages: action.payload}

        case 'GET_PHRASES': 
            // console.log('SET_PHRASES')
                return {...state, phrases: action.payload}
        case 'NEW_PHRASE':
            return action.payload 
        case 'RESTART_NEW_PHRASE':
        //  console.log('RESTART_NEW_PHRASE')
            return initialState
        default:
          return state;
    }
}

