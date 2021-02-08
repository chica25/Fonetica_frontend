// languages index action
export const fetchLanguages = () => {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/languages')
            .then(response => response.json())
                .then(languages => dispatch({
                    type: 'SET_LANGUAGES',
                    payload: languages }))
            }
    }

    // phrases index action

    export const fetchLanguagePhrases = () => {
        return dispatch => {
            fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`)
            .then(response => response.json())
                .then(languageId => dispatch({
                    type: 'SET_PHRASES_BY_LANGUAGE',
                    payload: languageId }))
            }
    }


// phrases post action
export const fetchNewPhrase = (newData) => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/languages/${languageId}/phrases`, { 
            method: 'POST',
            body: JSON.stringify({ phrase: newData }),
        })
            .then(response => response.json())
                .then(phrases => dispatch({
                    type: 'NEW_PHRASE',
                    payload: phrases }))
            }
    }