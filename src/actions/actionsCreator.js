
export const fetchLanguages = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/languages")
            .then(response => response.json())
                .then(languages => dispatch({
                    type: 'GET_LANGUAGES',
                    payload: languages }))
            }
    }

export const fetchLanguagePhrases = (languageId) => {
   
    return (dispatch) => {
        // debugger
        fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`)
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

//         fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`, {
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

    // export const getId = (id) => ({
    //     type: 'GET_ID',
    //     payload: { id },
    // })


export const AddNewPhrase = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/phrases", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
                // "Accept": "application/json"
                // "Access-Control-Allow-Origin": "*"
            body: JSON.stringify(data)
            })
            .then(response => response.json())
                .then(newPhrases => dispatch({
                      type: "CREATE_PHRASES",
                      payload: newPhrases 
                }))
         }
    }

