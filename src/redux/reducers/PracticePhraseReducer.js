const initialState = {
    practicePhrase: []
}

export const PracticePhraseReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRACTICE_PHRASE":
            return {...state, practicePhrase: [...state.practicePhrase, action.payload] }
        default:
          return state;
    }
}

