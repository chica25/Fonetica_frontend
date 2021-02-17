// import PhrasesByLanguage from "../components/PhrasesByLanguage"

const initialState = {
    languages: [],
    phrases: [],
    createPhrase: []
    // currentId: ""
}

// case 'ADD_TRANSACTION':
//       let accounts = state.accounts.map(account => {
//         if (account.id === action.payload.id) {
//           return action.payload
//         } else {
//           return account
//         }
//       })

export const languageReducer = (state = initialState, action) => {
    // console.log("hello!!!", action)
    switch(action.type){
        case 'GET_LANGUAGES':
            return {...state, languages: action.payload}

        case 'GET_PHRASES': 
            // console.log('SET_PHRASES')
            return {...state, phrases: action.payload}
        
        case 'CREATE_PHRASE': 
            return {...state, phrases: [...state.phrases, action.payload]}

        // case 'GET_ID':
        //     return {...state, currentId: action.payload}

            default:
                return state;
        }
}

