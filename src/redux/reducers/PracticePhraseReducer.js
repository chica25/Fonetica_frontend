// const initialState = {
//     practicePhrase: []
// }

export function PracticePhraseReducer(state = {practicePhrase: []}, action) => {
   
    switch(action.type){
        case "PRACTICE_PHRASE":
            return {...state, practicePhrase: [...state.practicePhrase, action.payload] }
        default:
          return state;
    }
}


// export default function PracticePhraseReducer(state = [], action) => {