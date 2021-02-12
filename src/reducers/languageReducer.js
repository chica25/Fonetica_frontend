const initialState = {
    languages: []
}

export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LANGUAGES':
            return {...state, languages: action.payload}

        case 'SET_PHRASES': 
            console.log('SET_PHRASES')
                return {...state, phrases: action.payload}
            // case 'CREATE_PHRASE': 
            //     return [action.payload ]
        
        default:
          return state;
    }
}
