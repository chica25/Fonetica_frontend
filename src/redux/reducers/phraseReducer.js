

export function LanguagePhraseReducer(state = { english_language: [], foreign_language: []}, action) => {
       switch(action.type) {

            case "SET_ENGLISH_LANGUAGE": 
                return {
                    ...state, english_language: action.payload }
         }

            case "SET_FOREIGN_LANGUAGE": 
                return {...state, foreign_language: action.payload }

                default:
                    return state;

        //     export function PracticePhraseReducer(state = {practicePhrase: []}, action) => {
   
        //             switch(action.type){
        //                 case "PRACTICE_PHRASE":
        //                     return {...state, practicePhrase: [...state.practicePhrase, action.payload] }
        //                 default:
        //                     return state;
        //                 }
        //         }
                    
    
            
        // }
