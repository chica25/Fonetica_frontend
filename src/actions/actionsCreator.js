
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
        fetch(`http://localhost:3000/languages/${languageId}/phrases`)
            .then(response => response.json())
                .then(phrases => dispatch({
                    type: 'GET_PHRASES',
                    payload: phrases }))     
            }
}

export const AddNewPhrase = (data, languageId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/languages/${languageId}/phrases`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
               
            body: JSON.stringify(data)
        })
            .then(response => response.json())
                .then(phrase => {
                dispatch({type: 'CREATE_PHRASES',
                    payload: phrase,
            })
        })
    }
}

export const selectLanguage = (id) => ({
        type: 'SELECTED_LANGUAGE',
        payload: id
})
