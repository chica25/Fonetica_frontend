function LanguagePhraseReducer( state = [], action){
    switch(action.type) {
        case "SET_PHRASES": 
            return {...state}

        default:
            return state;
    }


}

export default LanguagePhraseReducer;