

export function phraseReducer(state = [], action) {
       switch(action.type) {

            case 'FETCH_PHRASES': 
                return [action.payload ]
        

            case 'CREATE_PHRASE': 
                return [action.payload ]

                default:
                    return state;

            }
    }
        //     export function PracticePhraseReducer(state = {practicePhrase: []}, action) => {
   
        //             switch(action.type){
        //                 case "PRACTICE_PHRASE":
        //                     return {...state, practicePhrase: [...state.practicePhrase, action.payload] }
        //                 default:
        //                     return state;
        //                 }
        //         }
                    
    
            
        // }
