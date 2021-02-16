const initialState = {
    languages: [],
    phrases: [],
    createPhrase: [],
    // currentId: ""
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
            return [...state, action.payload]

        // case 'GET_ID':
        //     return {...state, currentId: action.payload}

            default:
                return state;
        }
}

