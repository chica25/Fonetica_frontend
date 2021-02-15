// languages index action
export const fetchLanguages = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/languages')
            .then(response => response.json())
                .then(languages => dispatch({
                    type: 'GET_LANGUAGES',
                    payload: languages }))
            }
    }

    // phrases index action

export const fetchLanguagePhrases = (languageId) => {
   
    return dispatch => {
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
    

   

// phrases post action

export const fetchNewPhrase = (data) => {
    // console.log(cata)
    return dispatch => {
        fetch('http://localhost:3000/api/v1/phrases', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
                .then(newPhrases => dispatch({
                    type: 'CREATE_PHRASES',
                    payload: newPhrases }))
         }
    }

