
export function PracticePhraseReducer(state = {practicePhrase: []}, action) => {
   
    switch(action.type){
        case "PRACTICE_PHRASE":
            return {...state, practicePhrase: [...state.practicePhrase, action.payload] }
        default:
          return state;
    }
}
