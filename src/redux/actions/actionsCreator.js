// languages index action
export const fetchLanguages = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/languages')
            .then(response => response.json())
                .then(languages => dispatch({
                    type: 'FETCH_LANGUAGES',
                    payload: languages }))
            }
    }

    // phrases index action

export const fetchLanguagePhrases = (languageId) => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`)
        .then(response => response.json())
            .then(languageId => dispatch({
                type: 'FETCH_PHRASES',
                payload: languageId }))
        }
}


// phrases post action
export const fetchNewPhrase = (newData, languageId) => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phrase: newData }),
        })
            .then(response => response.json())
                .then(phrases => dispatch({
                    type: 'CREATE_PHRASE',
                    payload: phrases }))
            }
    }