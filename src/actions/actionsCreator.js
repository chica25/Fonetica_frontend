
export const fetchLanguages = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/languages")
            .then(response => response.json())
                .then(languages => dispatch({
                    type: 'GET_LANGUAGES',
                    payload: languages }))
            }
    }

export const fetchLanguagePhrases = (languageId) => {
   
    return (dispatch) => {
        // debugger
        fetch(`http://localhost:3000/languages/${languageId}/phrases`)
            .then(response => response.json())
                .then(phrases => dispatch({
                    // debugger
                    // dispatch({
                    type: 'GET_PHRASES',
                    payload: phrases }))     
            }

 }

// export const AddNewPhrase = (data, languageId) => {
//     return (dispatch) => {

//         fetch(`http://localhost:3000/languages/${languageId}/phrases`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             method: 'POST',
//             body: JSON.stringify(data)
//         })
//             .then(response => response.json())
//                 .then(newPhrases => dispatch({
//                       type: 'CREATE_PHRASES',
//                       payload: newPhrases 
//                 }))
//          }
//     }


// export const setLanguage = languageId => {
//     return {
//         type: 'LANGUAGE_ID',
//         payload: languageId
//     }
// }

// export const AddNewPhrase = (data, languageId) => {
//     return (dispatch) => {

//         fetch(`http://localhost:3000/languages/${languageId}/phrases`, {
//             method: "POST",
//             headers: { "Content-type": "application/json" },
//             body: JSON.stringify({ data}),
//          })
           
//             .then(response => response.json())
//                 .then(newPhrases => 
//                     dispatch({
//                       type: 'CREATE_PHRASES',
//                       payload: { newPhrases }
//                 }))
//             }
//     }


// export const fetchLanguages = () => {
//     return (dispatch) => {
//         fetch("http://localhost:3000/languages")
//             .then(response => response.json())
//                 .then(languages => dispatch({
//                     type: 'GET_LANGUAGES',
//                     payload: languages }))
//             }
//     }

// export const addQuestion = (data) => {


// export const AddNewPhrase = (data) => {
//     return (dispatch) => {

        // fetch("http://localhost:3000/phrases", {
        //     method: "POST",
        //     headers: { "Content-type": "application/json" },
        //     body: JSON.stringify({ data }),
        //  })
           
        //     .then(response => response.json())
        //         .then(newPhrases => 
        //             dispatch({
        //               type: 'CREATE_PHRASES',
        //               payload: { newPhrases }
        //         }))
        //     }
            
        // }


    export const AddNewPhrase = (data, languageId) => {
            debugger
        return (dispatch) => {
            fetch(`http://localhost:3000/languages/${languageId}/phrases`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                },
               
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(phrase => {
                dispatch({type: 'CREATE_PHRASES', payload: phrase })
            })

        }
    }


    // export const getId = (id) => ({
    //     type: 'GET_ID',
    //     payload: { id },
    // })


// export const AddNewPhrase = (data) => {

//     return (dispatch) => {
//         fetch("http://localhost:3000/phrases", {
//             headers: { 
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 // "Access-Control-Allow-Origin": "*"
//             },
//             method: "POST",
//             body: JSON.stringify(data)
//             })

//             .then(response => response.json())
//                 .then(newPhrases => dispatch({
//                       type: "CREATE_PHRASES",
//                       payload: newPhrases 
//                 }))
//          }

//     }
