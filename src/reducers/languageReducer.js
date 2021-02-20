// import PhrasesByLanguage from "../components/PhrasesByLanguage"

const initialState = {
    languages: [],
    phrases: [],
    createPhrase: []
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

        // case "LANGUAGE_ID":
        //     const languages = state.languages.concant(action.payload)
        //     return {...state, languages};

        case 'CREATE_PHRASES': 
        return {...state, phrases: [...state.phrases, action.payload]}
        
        case 'SELECTED_LANGUAGE':
            return {...state, selectedLanguage: action.payload}

     
            // let phrases = state.phrases.map(phrase => {
            //     if (phrase.id ===  action.payload.id) {
            //       return action.payload
            //     } else {
            //       return phrase
            //     }
            // })
            // return {...state, phrases: phrases}

        // case 'GET_ID':
        //     return {...state, currentId: action.payload}

            default:
                return state;
        }
}

