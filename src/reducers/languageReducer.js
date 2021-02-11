const initialState = {
    languages: []
}

export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_LANGUAGES":
            return {...state, languages: action.payload}
        default:
          return state;
    }
}
